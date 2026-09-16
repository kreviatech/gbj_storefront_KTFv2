module.exports=[71029,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},71189,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/account/AccountClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/account/AccountClient.tsx","default")},83642,a=>{"use strict";var b=a.i(71189);a.n(b)},84889,a=>{a.v({accountPage:"account-module__zd0OHa__accountPage",authDivider:"account-module__zd0OHa__authDivider",badge:"account-module__zd0OHa__badge",breadcrumbSeparator:"account-module__zd0OHa__breadcrumbSeparator",breadcrumbs:"account-module__zd0OHa__breadcrumbs",callShowroomBtn:"account-module__zd0OHa__callShowroomBtn",card:"account-module__zd0OHa__card",cardFeatured:"account-module__zd0OHa__cardFeatured",cardHeader:"account-module__zd0OHa__cardHeader",cardSubtitle:"account-module__zd0OHa__cardSubtitle",cardTitle:"account-module__zd0OHa__cardTitle",container:"account-module__zd0OHa__container",formGroup:"account-module__zd0OHa__formGroup",gridContainer:"account-module__zd0OHa__gridContainer",heroHeader:"account-module__zd0OHa__heroHeader",input:"account-module__zd0OHa__input",label:"account-module__zd0OHa__label",lookupBtn:"account-module__zd0OHa__lookupBtn",lookupResult:"account-module__zd0OHa__lookupResult",perkCard:"account-module__zd0OHa__perkCard",perkText:"account-module__zd0OHa__perkText",perkTitle:"account-module__zd0OHa__perkTitle",perksGrid:"account-module__zd0OHa__perksGrid",primaryAuthBtn:"account-module__zd0OHa__primaryAuthBtn",secondaryAuthBtn:"account-module__zd0OHa__secondaryAuthBtn",securityNote:"account-module__zd0OHa__securityNote",sellShowroomBtn:"account-module__zd0OHa__sellShowroomBtn",showroomActions:"account-module__zd0OHa__showroomActions",showroomCard:"account-module__zd0OHa__showroomCard",showroomText:"account-module__zd0OHa__showroomText",showroomTitle:"account-module__zd0OHa__showroomTitle",subtitle:"account-module__zd0OHa__subtitle",title:"account-module__zd0OHa__title"})},90410,a=>{"use strict";var b=a.i(7997),c=a.i(10356),d=a.i(95774),e=a.i(83642),f=a.i(95483),g=a.i(84889);async function h(){let a=await (0,f.getShopDetails)(),h=(0,f.getCustomerAccountUrl)(),i=(0,f.getCustomerOAuthUrl)();return(0,b.jsxs)("main",{className:g.default.accountPage,children:[(0,b.jsx)(c.default,{}),(0,b.jsx)(e.default,{accountUrl:h,oauthUrl:i,shopName:a?.name||"Gold Bank Jewellers"}),(0,b.jsx)(d.default,{})]})}a.s(["default",0,h,"metadata",0,{title:"Customer Account & Vault Portal | Gold Bank Jewellers",description:"Log in securely via Shopify Customer Account API and Shop Pay to view your Gold Bank orders, track insured UK shipments, and manage your vault privileges."}])},92322,function(a){a.n(a.i(90410))},95483,a=>{"use strict";let b=process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN||"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",c="99668787516";async function d({query:a,variables:c={},revalidate:e=60}){try{let d={"Content-Type":"application/json"};d["Shopify-Storefront-Private-Token"]=b;let f=await fetch("https://sxr11n-4z.myshopify.com/api/2024-01/graphql.json",{method:"POST",headers:d,body:JSON.stringify({query:a,variables:c}),next:{revalidate:e}});if(!f.ok)throw Error(`Shopify API HTTP error: ${f.status} ${f.statusText}`);let g=await f.json();if(g.errors&&g.errors.length>0)throw Error(`Shopify GraphQL Error: ${g.errors.map(a=>a.message).join(", ")}`);if(!g.data)throw Error("Shopify GraphQL response returned empty data.");return g.data}catch(a){throw console.error("Error executing Shopify Storefront GraphQL query:",a),a}}async function e(){let a=`
    query getShopDetails {
      shop {
        name
        description
        primaryDomain {
          url
          host
        }
        moneyFormat
      }
    }
  `;try{return(await d({query:a})).shop}catch{return null}}async function f(a=50){let b=`
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
  `;try{return(await d({query:b,variables:{first:a}})).products.edges.map(a=>{let b=a.node,c=b.images.edges.map(a=>a.node),d=b.variants?.edges.map(a=>a.node)||[],e={url:["rolex","iwc","watch"].some(a=>b.title.toLowerCase().includes(a))?"/images/hero-watch-dial.jpg":"/images/gold-chain-jewellery.jpg",altText:b.title},f=c.length>0?c:[e];return{id:b.id,title:b.title,handle:b.handle,description:b.description,descriptionHtml:b.descriptionHtml,availableForSale:b.availableForSale,totalInventory:b.totalInventory,productType:b.productType,vendor:b.vendor,tags:b.tags,priceRange:b.priceRange,featuredImage:f[0],images:f,variants:d}})}catch{return[]}}async function g(a){let b=`
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        availableForSale
        totalInventory
        vendor
        productType
        tags
        options {
          name
          values
        }
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
        images(first: 10) {
          edges {
            node {
              url
              altText
              width
              height
            }
          }
        }
        variants(first: 10) {
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
  `;try{let c=await d({query:b,variables:{handle:a}});if(!c.product)return null;let e=c.product,f=e.images.edges.map(a=>a.node),g=e.variants.edges.map(a=>a.node),h={url:["rolex","iwc","watch"].some(a=>e.title.toLowerCase().includes(a))?"/images/hero-watch-dial.jpg":"/images/gold-chain-jewellery.jpg",altText:e.title},i=f.length>0?f:[h];return{id:e.id,title:e.title,handle:e.handle,description:e.description,descriptionHtml:e.descriptionHtml,availableForSale:e.availableForSale,totalInventory:e.totalInventory,vendor:e.vendor,productType:e.productType,tags:e.tags,options:e.options,priceRange:e.priceRange,featuredImage:i[0],images:i,variants:g}}catch(b){return console.error(`Error fetching product by handle "${a}":`,b),null}}async function h(){let a=await f(50),b=["rolex","iwc","watch","chrono","diver","daydate","datejust","submariner","gmt"];return a.filter(a=>{let c=a.title.toLowerCase();return b.some(a=>c.includes(a))}).map((a,b)=>({...a,badge:b%2==0?"50% OFF":"New Arrival",subtitle:a.title.includes("-")?a.title.split("-")[1]?.trim():"Prestige Timepiece"}))}async function i(){let a=await f(50),b=["chain","bangle","bracelet","ring","earring","gold","silver","belcher","rope"];return a.filter(a=>{let c=a.title.toLowerCase();return!["rolex","iwc","watch"].some(a=>c.includes(a))&&b.some(a=>c.includes(a))}).map((a,b)=>({...a,badge:b%2==0?"50% OFF":"New Arrival",subtitle:a.title.includes("-")?a.title.split("-")[1]?.trim():"Hallmarked 9ct / 18ct"}))}async function j(a,b=4){return(await f(20)).filter(b=>b.id!==a).slice(0,b)}let k={chains:{title:"Solid Gold & Silver Chains",description:"Handcrafted 9ct & 18ct solid gold chains, curb links, rope chains, franco links, and belcher chains assayed and certified.",filter:a=>{let b=a.title.toLowerCase();return(b.includes("chain")||b.includes("curb")||b.includes("belcher")||b.includes("franco")||b.includes("rope"))&&!b.includes("bracelet")}},bangles:{title:"Gold Bangles & Torcs",description:"Heavy 9ct gold hook & loop bangles, diamond & stone-set torcs, and leopard head statement bangles certified in the East Midlands.",filter:a=>a.title.toLowerCase().includes("bangle")},bracelets:{title:"Gold & Silver Bracelets",description:"Solid 9ct gold gypsy link bracelets, star & bar links, acorn bracelets, and heart-shaped belcher bracelets.",filter:a=>a.title.toLowerCase().includes("bracelet")},rings:{title:"Prestige Rings & Signets",description:"Heavy 5-row keeper rings, solid gold signet rings, tiger's eye inlays, pyramid rings, and openwork bands.",filter:a=>a.title.toLowerCase().includes("ring")},earrings:{title:"Fine Earrings & Hoops",description:"9ct & 18ct white gold hoop earrings, twisted hoops, articulated stone-set drops, and diamond studs.",filter:a=>a.title.toLowerCase().includes("earring")||a.title.toLowerCase().includes("hoop")},diamonds:{title:"Diamonds & Gemstones",description:"Certified diamond jewellery, three-stone drop earrings, brilliant cut rings, and SI1/G-H graded stones.",filter:a=>{let b=`${a.title} ${a.description||""}`.toLowerCase();return b.includes("diamond")||b.includes("1.5ct")||b.includes("stone set")||b.includes("g-h")||b.includes("si1")}},watches:{title:"Swiss Luxury Watches",description:"Pre-owned Rolex, IWC, and Swiss chronometers authenticated with serial verification, box, and original papers.",filter:a=>{let b=a.title.toLowerCase();return b.includes("rolex")||b.includes("iwc")||b.includes("watch")||b.includes("daydate")||b.includes("datejust")||b.includes("sea-dweller")||b.includes("gmt")}},pandora:{title:"Pandora & Sterling Silver",description:"Genuine Pandora charms, sterling 925 silver bangles, collector keepsakes, and fine silver jewellery.",filter:a=>{let b=`${a.title} ${a.description||""}`.toLowerCase();return b.includes("pandora")||b.includes("silver")||b.includes("925")||b.includes("charm")}},"latest-products":{title:"Latest Products & New Arrivals",description:"Explore the most recent additions to our luxury vault, featuring fresh allocations of solid gold, silver, and timepieces.",filter:()=>!0}};async function l(a){let b=`
    query getCollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        descriptionHtml
        image {
          url
          altText
        }
        products(first: 50) {
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
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
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
    }
  `;try{let c=await d({query:b,variables:{handle:a}});if(c.collection&&c.collection.products.edges.length>0){let a=c.collection,b=a.products.edges.map((a,b)=>{let c=a.node,d=c.images.edges.map(a=>a.node),e=c.variants?.edges.map(a=>a.node)||[],f={url:["rolex","iwc","watch"].some(a=>c.title.toLowerCase().includes(a))?"/images/hero-watch-dial.jpg":"/images/gold-chain-jewellery.jpg",altText:c.title},g=d.length>0?d:[f];return{id:c.id,title:c.title,handle:c.handle,description:c.description,descriptionHtml:c.descriptionHtml,availableForSale:c.availableForSale,totalInventory:c.totalInventory,productType:c.productType,vendor:c.vendor,tags:c.tags,priceRange:c.priceRange,featuredImage:g[0],images:g,variants:e,badge:b%2==0?"50% OFF":"New Arrival"}});return{id:a.id,title:a.title,handle:a.handle,description:a.description,descriptionHtml:a.descriptionHtml,image:a.image,products:b}}}catch(b){console.warn(`Shopify query for collection "${a}" failed or was empty, checking fallback resolver.`,b)}let c=await f(100),e=a.toLowerCase(),g=k[e];if(g){let a=c.filter(g.filter);return{id:`gid://shopify/Collection/custom-${e}`,title:g.title,handle:e,description:g.description,products:a.length>0?a:c.slice(0,8)}}let h=a.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "),i=c.filter(b=>b.title.toLowerCase().includes(a.toLowerCase()));return{id:`gid://shopify/Collection/custom-${a}`,title:h,handle:a,description:`Browse our certified ${h} collection at Gold Bank Jewellers. Assayed, verified, and ready for immediate dispatch.`,products:i.length>0?i:c}}a.s(["getCollectionByHandle",0,l,"getCustomerAccountUrl",0,function(){return`https://shopify.com/${c}/account`},"getCustomerOAuthUrl",0,function(a){let b=`https://shopify.com/authentication/${c}/oauth/authorize`,d=new URLSearchParams({client_id:"769996f2-50a7-471e-8ede-550d949aa2fa",response_type:"code",scope:"openid email customer-account-api:full"});return a&&d.set("redirect_uri",a),`${b}?${d.toString()}`},"getJewellery",0,i,"getProductByHandle",0,g,"getRelatedProducts",0,j,"getShopDetails",0,e,"getWatches",0,h])}];

//# sourceMappingURL=_0pn43ev._.js.map