module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},71029,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},94274,a=>{"use strict";var b=a.i(12948),c=a.i(67436),d=a.i(94331);a.i(70408);let e=(0,b.instrumentModuleGetter)(()=>a.r(68611)),f=(0,b.instrumentModuleGetter)(()=>a.r(50645)),g=(0,b.instrumentModuleGetter)(()=>a.r(43619)),h=(0,b.instrumentModuleGetter)(()=>a.r(13718)),i=(0,b.instrumentModuleGetter)(()=>a.r(18198)),j=(0,b.instrumentModuleGetter)(()=>a.r(62212)),k=["",{children:["products",{children:["[handle]",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(46055)),"[project]/src/app/products/[handle]/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{}},[]]},{metadata:{icon:[async()=>{let a=(0,d.interopDefault)(await e());return[{url:`/favicon.ico?${a.src.split("/").splice(-1)[0]}`,sizes:`${a.width}x${a.height}`,type:"image/x-icon"}]}]},layout:[f,"[project]/src/app/layout.tsx"],"not-found":[g,"[project]/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[h,"[project]/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[i,"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[j,"[project]/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],l=a.r.bind(a),m=a.l.bind(a),n=(0,c.createAppPageEntrypoint)({tree:k,page:"/products/[handle]/page",pathname:"/products/[handle]",require:l,loadChunk:m,interopDefault:d.interopDefault}),o=n.__next_app__,p=n.routeModule,q=n.handler;a.s(["__next_app__",0,o,"handler",0,q,"routeModule",0,p],17043),a.i(17043);var r=a.i(22922);a.s(["ClientPageRoot",()=>r.ClientPageRoot,"ClientSegmentRoot",()=>r.ClientSegmentRoot,"Fragment",()=>r.Fragment,"HTTPAccessFallbackBoundary",()=>r.HTTPAccessFallbackBoundary,"InstantValidation",()=>r.InstantValidation,"LayoutRouter",()=>r.LayoutRouter,"LoadingBoundaryProvider",()=>r.LoadingBoundaryProvider,"Postpone",()=>r.Postpone,"RenderFromTemplateContext",()=>r.RenderFromTemplateContext,"RootLayoutBoundary",()=>r.RootLayoutBoundary,"SegmentViewNode",()=>r.SegmentViewNode,"SegmentViewStateNode",()=>r.SegmentViewStateNode,"__next_app__",0,o,"captureOwnerStack",()=>r.captureOwnerStack,"collectPrefetchHints",()=>r.collectPrefetchHints,"collectSegmentData",()=>r.collectSegmentData,"createElement",()=>r.createElement,"createMetadataComponents",()=>r.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>r.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>r.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>r.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>r.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>r.createTemporaryReferenceSet,"decodeAction",()=>r.decodeAction,"decodeFormState",()=>r.decodeFormState,"decodeReply",()=>r.decodeReply,"handler",0,q,"isEmptyHTMLPrelude",()=>r.isEmptyHTMLPrelude,"patchFetch",()=>r.patchFetch,"preconnect",()=>r.preconnect,"preloadFont",()=>r.preloadFont,"preloadStyle",()=>r.preloadStyle,"prerender",()=>r.prerender,"prerenderToNodeStream",()=>r.prerenderToNodeStream,"renderToPipeableStream",()=>r.renderToPipeableStream,"renderToReadableStream",()=>r.renderToReadableStream,"routeModule",0,p,"serverHooks",()=>r.serverHooks,"taintObjectReference",()=>r.taintObjectReference],94274)},10585,a=>{a.v("/_next/static/media/favicon.2vob68tjqpejf.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},68611,a=>{"use strict";let b={src:a.i(10585).default,width:256,height:256};a.s(["default",0,b])},58649,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/src/app/products/[handle]/ProductDetailClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/src/app/products/[handle]/ProductDetailClient.tsx","default")},7634,a=>{"use strict";var b=a.i(58649);a.n(b)},44667,a=>{"use strict";var b=a.i(7997);a.i(70396);var c=a.i(73727),d=a.i(10356),e=a.i(95774),f=a.i(7634),g=a.i(95483);async function h({params:a}){let{handle:b}=await a,c=await (0,g.getProductByHandle)(b);if(!c)return{title:"Product Not Found | Gold Bank Jewellers"};let d=c.description?.slice(0,160)||`Authentic ${c.title} certified by Gold Bank Jewellers. Assayed & non-destructive XRF tested.`;return{title:`${c.title} | Gold Bank Jewellers`,description:d,openGraph:{title:`${c.title} | Gold Bank Jewellers`,description:d,images:c.featuredImage?.url?[c.featuredImage.url]:[]}}}async function i({params:a}){let{handle:h}=await a,j=await (0,g.getProductByHandle)(h);j||(0,c.notFound)();let k=await (0,g.getRelatedProducts)(j.id,4);return(0,b.jsxs)("main",{style:{minHeight:"100vh",background:"#ffffff",overflowX:"hidden"},children:[(0,b.jsx)(d.default,{}),(0,b.jsx)(f.default,{product:j,relatedProducts:k}),(0,b.jsx)(e.default,{})]})}a.s(["default",0,i,"generateMetadata",0,h,"revalidate",0,60])},46055,function(a){a.n(a.i(44667))},95483,a=>{"use strict";let b=process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN||"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",c="99668787516";async function d({query:a,variables:c={},revalidate:e=60}){try{let d={"Content-Type":"application/json"};d["Shopify-Storefront-Private-Token"]=b;let f=await fetch("https://sxr11n-4z.myshopify.com/api/2024-01/graphql.json",{method:"POST",headers:d,body:JSON.stringify({query:a,variables:c}),next:{revalidate:e}});if(!f.ok)throw Error(`Shopify API HTTP error: ${f.status} ${f.statusText}`);let g=await f.json();if(g.errors&&g.errors.length>0)throw Error(`Shopify GraphQL Error: ${g.errors.map(a=>a.message).join(", ")}`);if(!g.data)throw Error("Shopify GraphQL response returned empty data.");return g.data}catch(a){throw console.error("Error executing Shopify Storefront GraphQL query:",a),a}}async function e(){let a=`
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0r_a05q._.js.map