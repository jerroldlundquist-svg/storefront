window.TLG = {
  SHOP_DOMAIN: window.location.hostname,
  STOREFRONT_TOKEN: "f4492a01d84b81e415d692fb1454fff5",
  ENABLE_SHOP_PAY_INSTALLMENTS: true,
  ENABLE_KLARNA_MESSAGING: false,
  scheduleOverrides: {
    "executive-strategy-call-90": "",
    "executive-workshop-half-day": ""
  },
  KLAVIYO_PUBLIC_KEY: "REQ3Rd",
  KLAVIYO_LIST_NEWSLETTER: "XyZ123",
  GA4_MEASUREMENT_ID: "G-XXXXXXX",
  HELP_CENTER_URL: "https://help.lundquistgroupinc.com",
  HANDLES: [
    "executive-strategy-call-90",
    "executive-workshop-half-day",
    "strategy-sprint-2w",
    "market-diligence-quick-look",
    "transaction-diligence-4w",
    "certification-compliance-roadmap",
    "value-creation-playbook",
    "retainer-access-5",
    "retainer-growth-12",
    "retainer-transaction-30",
    "deal-radar-subscription",
    "quarterly-sector-outlook"
  ],
  productUrl(handle){ return `https://${this.SHOP_DOMAIN}/products/${handle}`; },
  scheduleUrl(handle){
    const o = (this.scheduleOverrides && this.scheduleOverrides[handle]) || "";
    return o.length ? o : this.productUrl(handle);
  }
};

// Load Klaviyo onsite script
(function(){
  if (document.getElementById('klaviyo-script')) return;
  var s = document.createElement('script');
  s.async = true;
  s.id = 'klaviyo-script';
  s.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=' + (TLG.KLAVIYO_PUBLIC_KEY || 'REQ3Rd');
  document.head.appendChild(s);
})();

// GA4 Initialization
(function(){
  if (!TLG.GA4_MEASUREMENT_ID || TLG.GA4_MEASUREMENT_ID === "G-XXXXXXX") return;
  if (document.getElementById('ga4')) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + TLG.GA4_MEASUREMENT_ID;
  s.id = 'ga4';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', TLG.GA4_MEASUREMENT_ID, { send_page_view: true });
})();

// Checkout & Schedule Logic
(function(){
  const API_VERSION = "2024-07";

  async function gql(query, variables={}) {
    const res = await fetch(`https://${TLG.SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": TLG.STOREFRONT_TOKEN
      },
      body: JSON.stringify({ query, variables })
    });
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return json.data;
  }

  async function getVariantAndPlan(handle, planName) {
    const q = `
      query($handle:String!){
        productByHandle(handle:$handle){
          variants(first:1){ nodes{ id } }
          sellingPlanGroups(first:10){
            nodes{
              name
              sellingPlans(first:20){ nodes{ id name } }
            }
          }
        }
      }`;
    const d = await gql(q, { handle });
    const variantId = d?.productByHandle?.variants?.nodes?.[0]?.id;
    if (!variantId) throw new Error("Variant not found for "+handle);

    let sellingPlanId = null;
    if (planName) {
      const groups = d?.productByHandle?.sellingPlanGroups?.nodes || [];
      for (const g of groups) {
        for (const p of (g.sellingPlans?.nodes || [])) {
          if (p.name && p.name.toLowerCase().includes(planName.toLowerCase())) {
            sellingPlanId = p.id; break;
          }
        }
        if (sellingPlanId) break;
      }
    }
    return { variantId, sellingPlanId };
  }

  async function createCheckout({ variantId, quantity=1, sellingPlanId=null }) {
    const m = `
      mutation($lines:[CheckoutLineItemInput!]!){
        checkoutCreate(input:{ lineItems: $lines }) {
          checkout { webUrl }
          userErrors { message }
        }
      }`;
    const lines = [{ variantId, quantity }];
    if (sellingPlanId) lines[0].sellingPlanId = sellingPlanId;
    const d = await gql(m, { lines });
    const err = d?.checkoutCreate?.userErrors?.[0]?.message;
    if (err) throw new Error(err);
    return d.checkoutCreate.checkout.webUrl;
  }

  document.addEventListener("click", async (e)=>{
    const buy = e.target.closest("a.tlg-buy, button.tlg-buy");
    if (buy) {
      e.preventDefault();
      const handle = buy.dataset.handle;
      const variant = buy.dataset.variant;
      const planName = buy.dataset.sellingPlan || "";
      const direct = buy.dataset.direct === "true";

      try {
        const agreement = document.getElementById("service-agreement");
        if (agreement && !agreement.checked) {
          alert("Please agree to the Advisory Terms and Refund Policy before proceeding.");
          return;
        }

        if (!direct) {
          return window.location.href = TLG.productUrl(handle);
        }
        
        if (variant) {
          window.location.href = `/cart/${variant}:1`;
          return;
        }

        const { variantId, sellingPlanId } = await getVariantAndPlan(handle, planName);
        const url = await createCheckout({ variantId, quantity: 1, sellingPlanId });
        window.location.href = url;
      } catch (err) {
        console.error(err);
        alert("Could not start checkout. Please try again or contact support.");
      }
      return;
    }

    const sched = e.target.closest("a.tlg-schedule, button.tlg-schedule");
    if(sched){
      e.preventDefault();
      const handle = sched.dataset.handle;
      const variant = sched.dataset.variant;
      const direct = sched.dataset.direct === "true";

      try {
        const agreement = document.getElementById("service-agreement");
        if (agreement && !agreement.checked) {
          alert("Please agree to the Advisory Terms and Refund Policy before proceeding.");
          return;
        }

        if (direct && (handle || variant)) {
          // If we have a variant ID directly, we can just use a cart link for maximum reliability
          if (variant) {
            window.location.href = `/cart/${variant}:1`;
            return;
          }

          // Fallback to searching for variant if we only have handle
          const { variantId, sellingPlanId } = await getVariantAndPlan(handle, "");
          const url = await createCheckout({ variantId, quantity: 1, sellingPlanId });
          window.location.href = url;
          return;
        }
      } catch (err) {
        console.error("Schedule checkout error:", err);
      }
      
      window.location.href = TLG.scheduleUrl(handle);
    }
  });

  document.addEventListener("DOMContentLoaded", function(){
    if(!TLG.ENABLE_SHOP_PAY_INSTALLMENTS) return;
    document.querySelectorAll("[data-spi-note]").forEach(function(el){
      el.innerHTML = 'Pay in installments with <strong>Shop&nbsp;Pay</strong>. Eligibility and amounts shown at checkout.';
    });
  });
})();
