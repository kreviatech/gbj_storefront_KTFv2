(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return b}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),i=e.r(43476),s=a._(e.r(71645)),u=e.r(95057),l=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550),p=e.r(88540),m=e.r(91949),g=e.r(73668),h=e.r(9396);function y(t){var r;let n,o,a,[y,b]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:_,as:C,children:E,prefetch:S=null,passHref:P,replace:j,shallow:O,scroll:x,onClick:T,onMouseEnter:R,onTouchStart:I,legacyBehavior:k=!1,onNavigate:A,transitionTypes:$,ref:N,unstable_dynamicOnHover:M,...U}=t;n=E,k&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let L=s.default.useContext(l.AppRouterContext),z=!1!==S,D=!1===S?"none":!0===S?"full":"auto",F="none"!==D?"auto"===D?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,q="string"==typeof(r=C||_)?r:(0,u.formatUrl)(r);if(k){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=s.default.Children.only(n)}let B=k?o&&"object"==typeof o&&o.ref:N,W,G=s.default.useCallback(e=>(null!==L&&(w.current=(0,m.mountLinkInstance)(e,q,L,F,z,b,W)),()=>{w.current&&((0,m.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,m.unmountPrefetchableInstance)(e)}),[z,q,L,F,b,W]),V={ref:(0,c.useMergedRef)(G,B),onClick(t){k||"function"!=typeof T||T(t),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!L||t.defaultPrevented||function(t,r,n,o,a,i,u,l="none"){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(99781);s.default.startTransition(()=>{f(r,o?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,u,l)})}}(t,q,w,j,x,A,$,D)},onMouseEnter(e){k||"function"!=typeof R||R(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&z&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){k||"function"!=typeof I||I(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&z&&(0,m.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,d.isAbsoluteUrl)(q)?V.href=q:k&&!P&&("a"!==o.type||"href"in o.props)||(V.href=(0,f.addBasePath)(q)),a=k?s.default.cloneElement(o,V):(0,i.jsx)("a",{...U,...V,children:n}),(0,i.jsx)(v.Provider,{value:y,children:a})}let v=(0,s.createContext)(m.IDLE_LINK_STATUS),b=()=>(0,s.useContext)(v);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5500,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return _}});let n=e.r(55682),o=e.r(90809),a=e.r(43476),i=o._(e.r(71645)),s=n._(e.r(74080)),u=n._(e.r(25633)),l=e.r(8927),c=e.r(87690),d=e.r(18556),f=e.r(65856),p=n._(e.r(1948)),m=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,o,a,i){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function y(e){return i.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v="u"<typeof window?i.useEffect:i.useLayoutEffect,b=(0,i.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:o,decoding:s,className:u,style:l,fetchPriority:c,placeholder:d,loading:f,unoptimized:p,fill:g,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:C,sizesInput:E,onLoad:S,onError:P,...j},O)=>{let x=(0,i.useRef)(!1),T=(0,i.useRef)(null);v(()=>{let{current:e}=x,{current:t}=T;e||null===t||(P&&(t.src=t.src),t.complete&&h(t,d,b,w,_,p,E),x.current=!0)},[e,d,b,w,P,p,E]);let R=(0,m.useMergedRef)(O,T);return(0,a.jsx)("img",{...j,...y(c),loading:f,width:o,height:n,decoding:s,"data-nimg":g?"fill":"1",className:u,style:l,sizes:r,srcSet:t,src:e,ref:R,onLoad:e=>{h(e.currentTarget,d,b,w,_,p,E)},onError:e=>{C(!0),"empty"!==d&&_(!0),P&&P(e)}})});function w({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(u.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let _=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(d.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),o=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:o,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:s,onLoadingComplete:u}=e,m=(0,i.useRef)(s);(0,i.useEffect)(()=>{m.current=s},[s]);let h=(0,i.useRef)(u);(0,i.useEffect)(()=>{h.current=u},[u]);let[y,v]=(0,i.useState)(!1),[_,C]=(0,i.useState)(!1),{props:E,meta:S}=(0,l.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:_});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{...E,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:C,sizesInput:e.sizes,ref:t}),S.preload?(0,a.jsx)(w,{isAppRouter:!r,imgAttributes:E}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},70965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let n=e.r(70965),o=e.r(43369);function a({config:e,src:t,width:r,quality:i}){let s=(0,o.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,o.getAssetToken)())s=void 0;else{let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){s=n,r.delete("dpl");let o=r.toString();t=t.slice(0,e)+(o?"?"+o:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let u=(0,n.findClosestQuality)(i,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${u}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let i=a},25633,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return d}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(55682),i=e.r(90809),s=e.r(43476),u=i._(e.r(71645)),l=a._(e.r(98879)),c=e.r(42732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,o;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,o={},e=>{let a=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=o[r]||new Set;("name"!==r||!i)&&n.has(t)?a=!1:(n.add(t),o[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return u.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,u.useContext)(c.HeadManagerContext);return(0,s.jsx)(l.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},88143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:o,blurDataURL:a,objectFit:i}){let s=r?40*r:e,u=o?40*o:t,l=s&&u?`viewBox='0 0 ${s} ${u}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},8927,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return l}});let n=e.r(43369),o=e.r(88143),a=e.r(87690),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:f,className:p,quality:m,width:g,height:h,fill:y=!1,style:v,overrideSrc:b,onLoad:w,onLoadingComplete:_,placeholder:C="empty",blurDataURL:E,fetchPriority:S,decoding:P="async",layout:j,objectFit:O,objectPosition:x,lazyBoundary:T,lazyRoot:R,...I},k){var A;let $,N,M,{imgConf:U,showAltText:L,blurComplete:z,defaultLoader:D}=k,F=U||a.imageConfigDefault;if("allSizes"in F)$=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),r=F.qualities?.sort((e,t)=>e-t);$={...F,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let q=I.loader||D;delete I.loader,delete I.srcSet;let B="__next_img_default"in q;if(B){if("custom"===$.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=q;q=t=>{let{config:r,...n}=t;return e(n)}}if(j){"fill"===j&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(v={...v,...e});let r={responsive:"100vw",fill:"100vw"}[j];r&&!t&&(t=r)}let W="",G=u(g),V=u(h);if((A=e)&&"object"==typeof A&&(s(A)||void 0!==A.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,M=t.blurHeight,E=E||t.blurDataURL,W=t.src,!y)if(G||V){if(G&&!V){let e=G/t.width;V=Math.round(t.height*e)}else if(!G&&V){let e=V/t.height;G=Math.round(t.width*e)}}else G=t.width,V=t.height}let K=!c&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,K=!1),$.unoptimized&&(r=!0),B&&!$.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let H=u(m),Q=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:x}:{},L?{}:{color:"transparent"},v),X=z||"empty"===C?null:"blur"===C?`url("data:image/svg+xml;charset=utf-8,${(0,o.getImageBlurSvg)({widthInt:G,heightInt:V,blurWidth:N,blurHeight:M,blurDataURL:E||"",objectFit:Q.objectFit})}")`:`url("${C}")`,J=i.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,Y=X?{backgroundSize:J,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function({config:e,src:t,unoptimized:r,width:o,quality:a,sizes:i,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,n.getAssetToken)())e=void 0;else if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:u,kind:l}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,o=[];for(let e;e=r.exec(n);)o.push(parseInt(e[2]));if(o.length){let r=.01*Math.min(...o);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,o,i),c=u.length-1;return{sizes:i||"w"!==l?i:"100vw",srcSet:u.map((r,n)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===l?r:n+1}${l}`).join(", "),src:s({config:e,src:t,quality:a,width:u[c]})}}({config:$,src:e,unoptimized:r,width:G,quality:H,sizes:t,loader:q}),ee=K?"lazy":f;return{props:{...I,loading:ee,fetchPriority:S,width:G,height:V,decoding:P,className:p,style:{...Q,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:C,fill:y}}}},18556,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=e.r(55682)._(e.r(71645)),o=e.r(87690),a=n.default.createContext(o.imageConfigDefault)},65856,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(55682)._(e.r(71645)).default.createContext(null)},94909,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(55682),i=e.r(8927),s=e.r(5500),u=a._(e.r(1948));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return u},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,i(e));else t.set(r,i(n));return t}function u(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return l},urlObjectKeys:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",s=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(a.urlQueryToSearchParams(u)));let c=e.search||u&&`?${u}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==l?(l="//"+(l||""),o&&"/"!==o[0]&&(o="/"+o)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${l}${o}${c}${s}`}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return s(e)}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(71645),o="u"<typeof window,a=o?()=>{}:n.useLayoutEffect,i=o?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return o&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},18967,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return u},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return C}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function C(e){return JSON.stringify({message:e.message,stack:e.stack})}},32341,18521,e=>{"use strict";var t=e.i(43476),r=e.i(71645);e.i(47167).default.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN;async function n({query:e,variables:t={},revalidate:r=60}){try{let n={"Content-Type":"application/json"};n["X-Shopify-Storefront-Access-Token"]="983b3cc02be02d0fb5398b96cca0207d";let o=await fetch("https://sxr11n-4z.myshopify.com/api/2024-01/graphql.json",{method:"POST",headers:n,body:JSON.stringify({query:e,variables:t}),next:{revalidate:r}});if(!o.ok)throw Error(`Shopify API HTTP error: ${o.status} ${o.statusText}`);let a=await o.json();if(a.errors&&a.errors.length>0)throw Error(`Shopify GraphQL Error: ${a.errors.map(e=>e.message).join(", ")}`);if(!a.data)throw Error("Shopify GraphQL response returned empty data.");return a.data}catch(e){throw console.error("Error executing Shopify Storefront GraphQL query:",e),e}}async function o(e=50){let t=`
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
  `;try{return(await n({query:t,variables:{first:e}})).products.edges.map(e=>{let t=e.node,r=t.images.edges.map(e=>e.node),n=t.variants?.edges.map(e=>e.node)||[],o={url:["rolex","iwc","watch"].some(e=>t.title.toLowerCase().includes(e))?"/images/hero-watch-dial.jpg":"/images/gold-chain-jewellery.jpg",altText:t.title},a=r.length>0?r:[o];return{id:t.id,title:t.title,handle:t.handle,description:t.description,descriptionHtml:t.descriptionHtml,availableForSale:t.availableForSale,totalInventory:t.totalInventory,productType:t.productType,vendor:t.vendor,tags:t.tags,priceRange:t.priceRange,featuredImage:a[0],images:a,variants:n}})}catch{return[]}}async function a(e,t){let r=[];for(let t of e){let e=t.merchandiseId||t.variantId;!e&&t.product?.variants&&t.product.variants.length>0&&(e=t.product.variants[0].id),e&&e.startsWith("gid://shopify/ProductVariant/")&&r.push({merchandiseId:e,quantity:Math.max(1,t.quantity)})}if(0===r.length){let e=await o(1),t=e[0]?.variants?.[0]?.id;if(t)r.push({merchandiseId:t,quantity:1});else throw Error("Unable to create cart: no product variants available.")}let a=`
    mutation createCart($lines: [CartLineInput!], $buyerIdentity: CartBuyerIdentityInput) {
      cartCreate(input: { lines: $lines, buyerIdentity: $buyerIdentity }) {
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
          buyerIdentity {
            email
            phone
            countryCode
            customer {
              id
              email
              firstName
              lastName
              displayName
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
  `,i={lines:r};t&&Object.keys(t).length>0&&(i.buyerIdentity=t);let s=await n({query:a,variables:i,revalidate:0});if(s.cartCreate.userErrors&&s.cartCreate.userErrors.length>0)throw Error(s.cartCreate.userErrors.map(e=>e.message).join(", "));if(!s.cartCreate.cart)throw Error("Failed to initialize Shopify checkout cart.");return{checkoutUrl:s.cartCreate.cart.checkoutUrl,cartId:s.cartCreate.cart.id,buyerIdentity:s.cartCreate.cart.buyerIdentity}}async function i(e,t){let r=`
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `,o=await n({query:r,variables:{input:{email:e,password:t}},revalidate:0});if(o.customerAccessTokenCreate.customerUserErrors&&o.customerAccessTokenCreate.customerUserErrors.length>0)throw Error(o.customerAccessTokenCreate.customerUserErrors.map(e=>e.message).join(", "));if(!o.customerAccessTokenCreate.customerAccessToken)throw Error("Incorrect email or password.");return o.customerAccessTokenCreate.customerAccessToken}async function s(e){let t=`
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
          lastName
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `,r=await n({query:t,variables:{input:e},revalidate:0});if(r.customerCreate.customerUserErrors&&r.customerCreate.customerUserErrors.length>0)throw Error(r.customerCreate.customerUserErrors.map(e=>e.message).join(", "));if(!r.customerCreate.customer)throw Error("Failed to register customer account.");return r.customerCreate.customer}async function u(e){let t=`
    mutation customerAccessTokenDelete($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
        deletedCustomerAccessTokenId
        userErrors {
          field
          message
        }
      }
    }
  `;try{let r=await n({query:t,variables:{customerAccessToken:e},revalidate:0});return!!r.customerAccessTokenDelete?.deletedAccessToken}catch{return!1}}async function l(e){let t=`
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `,r=await n({query:t,variables:{email:e},revalidate:0});if(r.customerRecover.customerUserErrors&&r.customerRecover.customerUserErrors.length>0)throw Error(r.customerRecover.customerUserErrors.map(e=>e.message).join(", "));return!0}async function c(e){let t=`
    query getCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        firstName
        lastName
        displayName
        email
        phone
        defaultAddress {
          id
          address1
          address2
          city
          province
          zip
          country
          formatted
        }
        addresses(first: 10) {
          edges {
            node {
              id
              address1
              address2
              city
              province
              zip
              country
              formatted
            }
          }
        }
        orders(first: 10, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id
              name
              orderNumber
              processedAt
              financialStatus
              fulfillmentStatus
              totalPrice {
                amount
                currencyCode
              }
              successfulFulfillments {
                trackingCompany
                trackingInfo {
                  number
                  url
                }
              }
              lineItems(first: 10) {
                edges {
                  node {
                    title
                    quantity
                    variant {
                      id
                      title
                      image {
                        url
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;try{return(await n({query:t,variables:{customerAccessToken:e},revalidate:0})).customer}catch(e){return console.error("Error fetching customer profile:",e),null}}e.s(["createShopifyCheckout",0,a,"customerLogin",0,i,"customerLogout",0,u,"customerRecoverPassword",0,l,"customerRegister",0,s,"getCustomer",0,c],18521);let d=(0,r.createContext)(void 0),f="gbj_customer_access_token",p="gbj_customer_token_expires_at";e.s(["AuthProvider",0,function({children:e}){let[n,o]=(0,r.useState)(null),[a,m]=(0,r.useState)(null),[g,h]=(0,r.useState)(!0),[y,v]=(0,r.useState)(null),b=e=>{try{localStorage.setItem(f,e.accessToken),localStorage.setItem(p,e.expiresAt),document.cookie=`gbj_customer_token=${e.accessToken}; path=/; max-age=2592000; SameSite=Lax`}catch{}},w=()=>{try{localStorage.removeItem(f),localStorage.removeItem(p),document.cookie="gbj_customer_token=; path=/; max-age=0; SameSite=Lax"}catch{}},_=(0,r.useCallback)(async()=>{if(a)try{let e=await c(a);e?o(e):(o(null),m(null),w())}catch(e){console.error("Failed to refresh customer session:",e)}},[a]);(0,r.useEffect)(()=>{(async()=>{try{let e=localStorage.getItem(f),t=localStorage.getItem(p);if(e){if(t&&new Date(t)<new Date){w(),h(!1);return}m(e);let r=await c(e);r?o(r):(w(),m(null))}}catch(e){console.warn("Could not restore customer auth session:",e)}finally{h(!1)}})()},[]);let C=async(e,t)=>{h(!0),v(null);try{let r=await i(e,t);b(r),m(r.accessToken);let n=await c(r.accessToken);return o(n),{success:!0}}catch(t){let e=t instanceof Error?t.message:"Unable to sign in. Please verify your credentials.";return v(e),{success:!1,error:e}}finally{h(!1)}},E=async e=>{h(!0),v(null);try{await s(e);let t=await i(e.email,e.password);b(t),m(t.accessToken);let r=await c(t.accessToken);return o(r),{success:!0}}catch(t){let e=t instanceof Error?t.message:"Registration failed. Please review the details provided.";return v(e),{success:!1,error:e}}finally{h(!1)}},S=async()=>{if(a)try{await u(a)}catch(e){console.warn("Remote token revocation failed:",e)}w(),o(null),m(null),v(null)},P=async e=>{try{return await l(e),{success:!0}}catch(e){return{success:!1,error:e instanceof Error?e.message:"Failed to initiate password reset."}}};return(0,t.jsx)(d.Provider,{value:{customer:n,customerAccessToken:a,isLoading:g,authError:y,login:C,register:E,logout:S,recoverPassword:P,refreshCustomer:_,clearError:()=>v(null)},children:e})},"useAuth",0,function(){let e=(0,r.useContext)(d);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}],32341)},25194,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n=(0,r.createContext)(void 0);e.s(["CartProvider",0,function({children:e}){let[o,a]=(0,r.useState)([]),[i,s]=(0,r.useState)(!1);(0,r.useEffect)(()=>{try{let e=localStorage.getItem("gbj_cart");e&&a(JSON.parse(e))}catch{}},[]),(0,r.useEffect)(()=>{try{localStorage.setItem("gbj_cart",JSON.stringify(o))}catch{}},[o]);let u=e=>{a(t=>t.filter(t=>t.product.id!==e))},l=o.reduce((e,t)=>e+t.quantity,0),c=o.reduce((e,t)=>e+(parseFloat(t.product.priceRange.minVariantPrice.amount)||0)*t.quantity,0);return(0,t.jsx)(n.Provider,{value:{cart:o,isOpen:i,openCart:()=>s(!0),closeCart:()=>s(!1),toggleCart:()=>s(e=>!e),addToCart:(e,t)=>{let r=t||e.variants?.[0]?.id;a(t=>t.find(t=>t.product.id===e.id)?t.map(t=>t.product.id===e.id?{...t,quantity:t.quantity+1,variantId:r||t.variantId}:t):[...t,{product:e,quantity:1,variantId:r}]),s(!0)},removeFromCart:u,updateQuantity:(e,t)=>{t<=0?u(e):a(r=>r.map(r=>r.product.id===e?{...r,quantity:t}:r))},cartCount:l,cartTotal:c},children:e})},"useCart",0,function(){let e=(0,r.useContext)(n);if(!e)throw Error("useCart must be used within a CartProvider");return e}])}]);