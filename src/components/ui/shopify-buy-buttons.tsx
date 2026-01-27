import React, { useEffect } from 'react';

const ShopifyBuyButtons: React.FC = () => {
  useEffect(() => {
    // Add the Shopify Buy Button script to the document
    const script = document.createElement('script');
    script.innerHTML = `
      const SHOP_DOMAIN = "YOUR_SHOP.myshopify.com";            // <-- replace
      const STOREFRONT_TOKEN = "YOUR_STOREFRONT_ACCESS_TOKEN";  // <-- replace
      const API_VERSION = "2024-07";

      async function fetchGraphQL(query, variables={}) {
        const res = await fetch(\`https://\${SHOP_DOMAIN}/api/\${API_VERSION}/graphql.json\`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN
          },
          body: JSON.stringify({ query, variables })
        });
        const json = await res.json();
        if (json.errors) throw new Error(JSON.stringify(json.errors));
        return json.data;
      }

      async function getVariantIdByOptions(handle, optionsMap) {
        const query = \`
          query($handle: String!) {
            productByHandle(handle: $handle) {
              id
              variants(first: 50) {
                nodes {
                  id
                  title
                  selectedOptions { name value }
                }
              }
            }
          }
        \`;
        const data = await fetchGraphQL(query, { handle });
        if(!data.productByHandle) throw new Error("Product not found: " + handle);
        const variants = data.productByHandle.variants.nodes;
        if (!optionsMap) return variants[0].id; // default
        // Find exact match of option name/value pairs
        for (const v of variants) {
          let ok = true;
          for(const key in optionsMap) {
            const found = v.selectedOptions.find(o => o.name === key && o.value === optionsMap[key]);
            if(!found) { ok = false; break; }
          }
          if(ok) return v.id;
        }
        // Fallback
        return variants[0].id;
      }

      async function createCheckout(variantId, quantity=1) {
        const mutation = \`
          mutation($variantId: ID!, $qty: Int!) {
            checkoutCreate(input: {
              lineItems: [{ variantId: $variantId, quantity: $qty }]
            }) {
              checkout { webUrl }
              userErrors { field message }
            }
          }
        \`;
        const data = await fetchGraphQL(mutation, { variantId, qty: quantity });
        if (data.checkoutCreate.userErrors && data.checkoutCreate.userErrors.length) {
          alert("Checkout error: " + data.checkoutCreate.userErrors[0].message);
          return;
        }
        window.open(data.checkoutCreate.checkout.webUrl, '_blank');
      }

      document.addEventListener("click", async (e) => {
        const el = e.target.closest("a.buy-now, button.buy-now");
        if(!el) return;
        e.preventDefault();
        const handle = el.dataset.handle;
        const qty = parseInt(el.dataset.qty || "1", 10);
        let options = null;
        try { options = JSON.parse(el.dataset.options || "null"); } catch(e){ options = null; }
        try {
          const variantId = await getVariantIdByOptions(handle, options);
          await createCheckout(variantId, qty);
        } catch(err) {
          console.error(err);
          alert("Could not start checkout. Please contact support.");
        }
      });
    `;
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ShopifyBuyButtons;