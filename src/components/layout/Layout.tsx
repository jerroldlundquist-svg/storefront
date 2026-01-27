import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '@/components/ui/cookie-banner';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
  useEffect(() => {
    // Add TLG Control Center scripts
    const script = document.createElement('script');
    script.innerHTML = `
      window.TLG = {
        SHOP_DOMAIN: "www.lundquistgroupinc.com",
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
        productUrl(handle){ return \`https://\${this.SHOP_DOMAIN}/products/\${handle}\`; },
        scheduleUrl(handle){
          const o = (this.scheduleOverrides && this.scheduleOverrides[handle]) || "";
          return o.length ? o : this.productUrl(handle);
        }
      };

      // Load Klaviyo onsite script (forms & tracking)
      (function(){
        if (document.getElementById('klaviyo-script')) return;
        var s = document.createElement('script');
        s.async = true;
        s.id = 'klaviyo-script';
        s.src = 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=' + (TLG.KLAVIYO_PUBLIC_KEY || 'REQ3Rd');
        document.head.appendChild(s);
      })();

      // GA4 - optional
      (function(){
        if (!TLG.GA4_MEASUREMENT_ID) return;
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

      // Gorgias chat (optional)
      (function(){
        var APP_ID = TLG.GORGIAS_APP_ID || 'GORGIA_APP_ID_HERE';
        if (!APP_ID || APP_ID === 'GORGIA_APP_ID_HERE') return;
        if (document.getElementById('gorgias-widget')) return;
        var s = document.createElement('script');
        s.id = 'gorgias-widget';
        s.src = 'https://config.gorgias.chat/gorgias-chat-bundle.js?applicationId=' + APP_ID;
        s.async = true;
        document.body.appendChild(s);

        // Auto-open after 6s on first visit
        window.addEventListener('load', function(){
          setTimeout(function(){
            if (window.GorgiasChat && window.GorgiasChat.open) window.GorgiasChat.open();
          }, 6000);
        });

        // Brand the widget (quick CSS override)
        var css = \`
          .gorgias-chat .launcher { background: #58a6ff !important; }
          .gorgias-chat .conversation__header { background: #0e2a47 !important; }
          .gorgias-chat .conversation__title { color: #fff !important; }
          .gorgias-chat .message--agent .bubble { background: #0e2a47 !important; color: #fff !important; }
          .gorgias-chat a { color: #58a6ff !important; }
        \`;
        var style = document.createElement('style'); style.innerHTML = css; document.head.appendChild(style);
      })();

        // Buy Now → Shopify Checkout (Enhanced with Selling Plans)
        (function(){
          const API_VERSION = "2024-07";

          async function gql(query, variables={}) {
            const res = await fetch(\`https://\${TLG.SHOP_DOMAIN}/api/\${API_VERSION}/graphql.json\`, {
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
            const q = \`
              query(\$handle:String!){
                productByHandle(handle:\$handle){
                  variants(first:1){ nodes{ id } }
                  sellingPlanGroups(first:10){
                    nodes{
                      name
                      sellingPlans(first:20){ nodes{ id name } }
                    }
                  }
                }
              }\`;
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
            const m = \`
              mutation(\$lines:[CheckoutLineItemInput!]!){
                checkoutCreate(input:{ lineItems: \$lines }) {
                  checkout { webUrl }
                  userErrors { message }
                }
              }\`;
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
              const planName = buy.dataset.sellingPlan || ""; // e.g., "Monthly" or "Annual"
              const direct = buy.dataset.direct === "true";   // set data-direct="true" to skip product page

              try {
                if (!direct) {
                  // Default behavior → product page (works with Appstle & BookX widgets)
                  return window.location.href = TLG.productUrl(handle);
                }
                // Direct checkout with optional selling plan
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
              window.location.href = TLG.scheduleUrl(handle);
            }
          });

          // Shop Pay Installments banner text hook
          document.addEventListener("DOMContentLoaded", function(){
            if(!TLG.ENABLE_SHOP_PAY_INSTALLMENTS) return;
            document.querySelectorAll("[data-spi-note]").forEach(function(el){
              el.innerHTML = 'Pay in installments with <strong>Shop&nbsp;Pay</strong>. Eligibility and amounts shown at checkout.';
            });
          });
        })();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;