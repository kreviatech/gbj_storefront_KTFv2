module.exports=[68306,a=>{a.v({cartIcon:"CartDrawer-module__wN0dRW__cartIcon",cartItem:"CartDrawer-module__wN0dRW__cartItem",checkoutBtn:"CartDrawer-module__wN0dRW__checkoutBtn",checkoutError:"CartDrawer-module__wN0dRW__checkoutError",closeBtn:"CartDrawer-module__wN0dRW__closeBtn",continueBtn:"CartDrawer-module__wN0dRW__continueBtn",countBadge:"CartDrawer-module__wN0dRW__countBadge",drawer:"CartDrawer-module__wN0dRW__drawer",emptyIcon:"CartDrawer-module__wN0dRW__emptyIcon",emptyState:"CartDrawer-module__wN0dRW__emptyState",emptyText:"CartDrawer-module__wN0dRW__emptyText",emptyTitle:"CartDrawer-module__wN0dRW__emptyTitle",fadeIn:"CartDrawer-module__wN0dRW__fadeIn",footer:"CartDrawer-module__wN0dRW__footer",header:"CartDrawer-module__wN0dRW__header",headerTitleGroup:"CartDrawer-module__wN0dRW__headerTitleGroup",itemDetails:"CartDrawer-module__wN0dRW__itemDetails",itemImage:"CartDrawer-module__wN0dRW__itemImage",itemImageWrapper:"CartDrawer-module__wN0dRW__itemImageWrapper",itemPrice:"CartDrawer-module__wN0dRW__itemPrice",itemTitle:"CartDrawer-module__wN0dRW__itemTitle",itemTopRow:"CartDrawer-module__wN0dRW__itemTopRow",itemsList:"CartDrawer-module__wN0dRW__itemsList",overlay:"CartDrawer-module__wN0dRW__overlay",qtyBtn:"CartDrawer-module__wN0dRW__qtyBtn",qtyNumber:"CartDrawer-module__wN0dRW__qtyNumber",quantityControls:"CartDrawer-module__wN0dRW__quantityControls",removeBtn:"CartDrawer-module__wN0dRW__removeBtn",shippingNotice:"CartDrawer-module__wN0dRW__shippingNotice",shopNowBtn:"CartDrawer-module__wN0dRW__shopNowBtn",slideIn:"CartDrawer-module__wN0dRW__slideIn",subtotalAmount:"CartDrawer-module__wN0dRW__subtotalAmount",subtotalLabel:"CartDrawer-module__wN0dRW__subtotalLabel",subtotalRow:"CartDrawer-module__wN0dRW__subtotalRow",title:"CartDrawer-module__wN0dRW__title"})},18505,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987),e=a.i(63933);let f=process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN||"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";async function g({query:a,variables:b={},revalidate:c=60}){try{let d={"Content-Type":"application/json"};d["Shopify-Storefront-Private-Token"]=f;let e=await fetch("https://sxr11n-4z.myshopify.com/api/2024-01/graphql.json",{method:"POST",headers:d,body:JSON.stringify({query:a,variables:b}),next:{revalidate:c}});if(!e.ok)throw Error(`Shopify API HTTP error: ${e.status} ${e.statusText}`);let g=await e.json();if(g.errors&&g.errors.length>0)throw Error(`Shopify GraphQL Error: ${g.errors.map(a=>a.message).join(", ")}`);if(!g.data)throw Error("Shopify GraphQL response returned empty data.");return g.data}catch(a){throw console.error("Error executing Shopify Storefront GraphQL query:",a),a}}async function h(a=50){let b=`
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            descriptionHtml
            availableForSale
            totalInventory
            productType
            vendor
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                    altText
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `;try{return(await g({query:b,variables:{first:a}})).products.edges.map(a=>{let b=a.node,c=b.images.edges.map(a=>a.node),d=b.variants?.edges.map(a=>a.node)||[],e={url:["rolex","iwc","watch"].some(a=>b.title.toLowerCase().includes(a))?"/images/hero-watch-dial.jpg":"/images/gold-chain-jewellery.jpg",altText:b.title},f=c.length>0?c:[e];return{id:b.id,title:b.title,handle:b.handle,description:b.description,descriptionHtml:b.descriptionHtml,availableForSale:b.availableForSale,totalInventory:b.totalInventory,productType:b.productType,vendor:b.vendor,tags:b.tags,priceRange:b.priceRange,featuredImage:f[0],images:f,variants:d}})}catch{return[]}}async function i(a){let b=[];for(let c of a){let a=c.merchandiseId||c.variantId;!a&&c.product?.variants&&c.product.variants.length>0&&(a=c.product.variants[0].id),a&&a.startsWith("gid://shopify/ProductVariant/")&&b.push({merchandiseId:a,quantity:Math.max(1,c.quantity)})}if(0===b.length){let a=await h(1),c=a[0]?.variants?.[0]?.id;if(c)b.push({merchandiseId:c,quantity:1});else throw Error("Unable to create cart: no product variants available.")}let c=`
    mutation createCart($lines: [CartLineInput!]) {
      cartCreate(input: { lines: $lines }) {
        cart {
          id
          checkoutUrl
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `,d=await g({query:c,variables:{lines:b},revalidate:0});if(d.cartCreate.userErrors&&d.cartCreate.userErrors.length>0)throw Error(d.cartCreate.userErrors.map(a=>a.message).join(", "));if(!d.cartCreate.cart)throw Error("Failed to initialize Shopify checkout cart.");return{checkoutUrl:d.cartCreate.cart.checkoutUrl,cartId:d.cartCreate.cart.id}}var j=a.i(68306);a.s(["default",0,function(){let{cart:a,isOpen:f,closeCart:g,removeFromCart:h,updateQuantity:k,cartTotal:l,cartCount:m}=(0,e.useCart)(),[n,o]=(0,c.useState)(!1),[p,q]=(0,c.useState)(null),r=async()=>{if(0!==a.length&&!n){o(!0),q(null);try{let b=a.map(a=>({merchandiseId:a.variantId||a.product.variants?.[0]?.id,quantity:a.quantity,product:a.product})),c=await i(b);if(c.checkoutUrl)window.location.href=c.checkoutUrl;else throw Error("Checkout URL was not returned by Shopify.")}catch(a){console.error("Shopify checkout creation failed:",a),q(a instanceof Error?a.message:"Unable to initiate checkout. Please try again."),o(!1)}}};return f?(0,b.jsx)("div",{className:j.default.overlay,onClick:g,children:(0,b.jsxs)("div",{className:j.default.drawer,onClick:a=>a.stopPropagation(),children:[(0,b.jsxs)("div",{className:j.default.header,children:[(0,b.jsxs)("div",{className:j.default.headerTitleGroup,children:[(0,b.jsx)("span",{className:j.default.cartIcon,children:"🛍️"}),(0,b.jsx)("h3",{className:j.default.title,children:"Your Shopping Bag"}),(0,b.jsx)("span",{className:j.default.countBadge,children:m})]}),(0,b.jsx)("button",{className:j.default.closeBtn,onClick:g,"aria-label":"Close Bag",children:"✕"})]}),(0,b.jsx)("div",{className:j.default.itemsList,children:0===a.length?(0,b.jsxs)("div",{className:j.default.emptyState,children:[(0,b.jsx)("span",{className:j.default.emptyIcon,children:"💎"}),(0,b.jsx)("h4",{className:j.default.emptyTitle,children:"Your Bag is Empty"}),(0,b.jsx)("p",{className:j.default.emptyText,children:"Discover our luxury watches, fine gold chains, bangles, and diamond pieces."}),(0,b.jsx)("button",{className:j.default.shopNowBtn,onClick:g,children:"Explore Collection"})]}):a.map(({product:a,quantity:c})=>{let e=parseFloat(a.priceRange.minVariantPrice.amount),f=a.priceRange.minVariantPrice.currencyCode,g=a.featuredImage?.url||"/images/hero-watch-dial.jpg";return(0,b.jsxs)("div",{className:j.default.cartItem,children:[(0,b.jsx)("div",{className:j.default.itemImageWrapper,children:(0,b.jsx)(d.default,{src:g,alt:a.title,width:80,height:80,className:j.default.itemImage})}),(0,b.jsxs)("div",{className:j.default.itemDetails,children:[(0,b.jsxs)("div",{className:j.default.itemTopRow,children:[(0,b.jsx)("h4",{className:j.default.itemTitle,children:a.title}),(0,b.jsx)("button",{className:j.default.removeBtn,onClick:()=>h(a.id),title:"Remove item",children:"✕"})]}),(0,b.jsxs)("p",{className:j.default.itemPrice,children:[f," ",(e*c).toLocaleString()]}),(0,b.jsxs)("div",{className:j.default.quantityControls,children:[(0,b.jsx)("button",{className:j.default.qtyBtn,onClick:()=>k(a.id,c-1),children:"-"}),(0,b.jsx)("span",{className:j.default.qtyNumber,children:c}),(0,b.jsx)("button",{className:j.default.qtyBtn,onClick:()=>k(a.id,c+1),children:"+"})]})]})]},a.id)})}),a.length>0&&(0,b.jsxs)("div",{className:j.default.footer,children:[(0,b.jsxs)("div",{className:j.default.subtotalRow,children:[(0,b.jsx)("span",{className:j.default.subtotalLabel,children:"Estimated Subtotal"}),(0,b.jsxs)("span",{className:j.default.subtotalAmount,children:["INR ",l.toLocaleString()]})]}),(0,b.jsx)("p",{className:j.default.shippingNotice,children:"Taxes and insured courier shipping calculated at checkout."}),p&&(0,b.jsx)("p",{className:j.default.checkoutError,children:p}),(0,b.jsx)("button",{className:j.default.checkoutBtn,onClick:r,disabled:n,children:n?"Securing Your Order...":"Proceed to Secure Checkout"}),(0,b.jsx)("button",{className:j.default.continueBtn,onClick:g,children:"Continue Browsing"})]})]})}):null}],18505)}];

//# sourceMappingURL=src_components_0zsq-t0._.js.map