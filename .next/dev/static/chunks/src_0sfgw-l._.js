(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CartDrawer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cartIcon": "CartDrawer-module__wN0dRW__cartIcon",
  "cartItem": "CartDrawer-module__wN0dRW__cartItem",
  "checkoutBtn": "CartDrawer-module__wN0dRW__checkoutBtn",
  "checkoutError": "CartDrawer-module__wN0dRW__checkoutError",
  "closeBtn": "CartDrawer-module__wN0dRW__closeBtn",
  "continueBtn": "CartDrawer-module__wN0dRW__continueBtn",
  "countBadge": "CartDrawer-module__wN0dRW__countBadge",
  "drawer": "CartDrawer-module__wN0dRW__drawer",
  "emptyIcon": "CartDrawer-module__wN0dRW__emptyIcon",
  "emptyState": "CartDrawer-module__wN0dRW__emptyState",
  "emptyText": "CartDrawer-module__wN0dRW__emptyText",
  "emptyTitle": "CartDrawer-module__wN0dRW__emptyTitle",
  "fadeIn": "CartDrawer-module__wN0dRW__fadeIn",
  "footer": "CartDrawer-module__wN0dRW__footer",
  "header": "CartDrawer-module__wN0dRW__header",
  "headerTitleGroup": "CartDrawer-module__wN0dRW__headerTitleGroup",
  "itemDetails": "CartDrawer-module__wN0dRW__itemDetails",
  "itemImage": "CartDrawer-module__wN0dRW__itemImage",
  "itemImageWrapper": "CartDrawer-module__wN0dRW__itemImageWrapper",
  "itemPrice": "CartDrawer-module__wN0dRW__itemPrice",
  "itemTitle": "CartDrawer-module__wN0dRW__itemTitle",
  "itemTopRow": "CartDrawer-module__wN0dRW__itemTopRow",
  "itemsList": "CartDrawer-module__wN0dRW__itemsList",
  "overlay": "CartDrawer-module__wN0dRW__overlay",
  "qtyBtn": "CartDrawer-module__wN0dRW__qtyBtn",
  "qtyNumber": "CartDrawer-module__wN0dRW__qtyNumber",
  "quantityControls": "CartDrawer-module__wN0dRW__quantityControls",
  "removeBtn": "CartDrawer-module__wN0dRW__removeBtn",
  "shippingNotice": "CartDrawer-module__wN0dRW__shippingNotice",
  "shopNowBtn": "CartDrawer-module__wN0dRW__shopNowBtn",
  "slideIn": "CartDrawer-module__wN0dRW__slideIn",
  "subtotalAmount": "CartDrawer-module__wN0dRW__subtotalAmount",
  "subtotalLabel": "CartDrawer-module__wN0dRW__subtotalLabel",
  "subtotalRow": "CartDrawer-module__wN0dRW__subtotalRow",
  "title": "CartDrawer-module__wN0dRW__title",
});
}),
"[project]/src/components/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/shopify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CartDrawer.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CartDrawer() {
    _s();
    const { cart, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal, cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [isCheckingOut, setIsCheckingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkoutError, setCheckoutError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCheckout = async ()=>{
        if (cart.length === 0 || isCheckingOut) return;
        setIsCheckingOut(true);
        setCheckoutError(null);
        try {
            const checkoutItems = cart.map((item)=>({
                    merchandiseId: item.variantId || item.product.variants?.[0]?.id,
                    quantity: item.quantity,
                    product: item.product
                }));
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$shopify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShopifyCheckout"])(checkoutItems);
            if (res.checkoutUrl) {
                window.location.href = res.checkoutUrl;
            } else {
                throw new Error("Checkout URL was not returned by Shopify.");
            }
        } catch (err) {
            console.error("Shopify checkout creation failed:", err);
            const msg = err instanceof Error ? err.message : "Unable to initiate checkout. Please try again.";
            setCheckoutError(msg);
            setIsCheckingOut(false);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        onClick: closeCart,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawer,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTitleGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartIcon,
                                    children: "🛍️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Your Shopping Bag"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countBadge,
                                    children: cartCount
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            onClick: closeCart,
                            "aria-label": "Close Bag",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemsList,
                    children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyIcon,
                                children: "💎"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyTitle,
                                children: "Your Bag is Empty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyText,
                                children: "Discover our luxury watches, fine gold chains, bangles, and diamond pieces."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shopNowBtn,
                                onClick: closeCart,
                                children: "Explore Collection"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartDrawer.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this) : cart.map(({ product, quantity })=>{
                        const price = parseFloat(product.priceRange.minVariantPrice.amount);
                        const currency = product.priceRange.minVariantPrice.currencyCode;
                        const imgUrl = product.featuredImage?.url || "/images/hero-watch-dial.jpg";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemImageWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imgUrl,
                                        alt: product.title,
                                        width: 80,
                                        height: 80,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemImage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemDetails,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTopRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemTitle,
                                                    children: product.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeBtn,
                                                    onClick: ()=>removeFromCart(product.id),
                                                    title: "Remove item",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].itemPrice,
                                            children: [
                                                currency,
                                                " ",
                                                (price * quantity).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quantityControls,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qtyBtn,
                                                    onClick: ()=>updateQuantity(product.id, quantity - 1),
                                                    children: "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qtyNumber,
                                                    children: quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qtyBtn,
                                                    onClick: ()=>updateQuantity(product.id, quantity + 1),
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, product.id, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 78,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtotalRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtotalLabel,
                                    children: "Estimated Subtotal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtotalAmount,
                                    children: [
                                        "INR ",
                                        cartTotal.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CartDrawer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shippingNotice,
                            children: "Taxes and insured courier shipping calculated at checkout."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        checkoutError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutError,
                            children: checkoutError
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkoutBtn,
                            onClick: handleCheckout,
                            disabled: isCheckingOut,
                            children: isCheckingOut ? "Securing Your Order..." : "Proceed to Secure Checkout"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].continueBtn,
                            onClick: closeCart,
                            children: "Continue Browsing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CartDrawer.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CartDrawer.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CartDrawer.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CartDrawer.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "TeyiAXrmXYoFipaPTVD276MezZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from local storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                const saved = localStorage.getItem("gbj_cart");
                if (saved) {
                    setCart(JSON.parse(saved));
                }
            } catch  {
            // ignore
            }
        }
    }["CartProvider.useEffect"], []);
    // Save to local storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            try {
                localStorage.setItem("gbj_cart", JSON.stringify(cart));
            } catch  {
            // ignore
            }
        }
    }["CartProvider.useEffect"], [
        cart
    ]);
    const openCart = ()=>setIsOpen(true);
    const closeCart = ()=>setIsOpen(false);
    const toggleCart = ()=>setIsOpen((prev)=>!prev);
    const addToCart = (product, variantId)=>{
        const chosenVariantId = variantId || product.variants?.[0]?.id;
        setCart((prev)=>{
            const existing = prev.find((item)=>item.product.id === product.id);
            if (existing) {
                return prev.map((item)=>item.product.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1,
                        variantId: chosenVariantId || item.variantId
                    } : item);
            }
            return [
                ...prev,
                {
                    product,
                    quantity: 1,
                    variantId: chosenVariantId
                }
            ];
        });
        setIsOpen(true);
    };
    const removeFromCart = (productId)=>{
        setCart((prev)=>prev.filter((item)=>item.product.id !== productId));
    };
    const updateQuantity = (productId, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart((prev)=>prev.map((item)=>item.product.id === productId ? {
                    ...item,
                    quantity
                } : item));
    };
    const cartCount = cart.reduce((acc, item)=>acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc, item)=>{
        const price = parseFloat(item.product.priceRange.minVariantPrice.amount) || 0;
        return acc + price * item.quantity;
    }, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            isOpen,
            openCart,
            closeCart,
            toggleCart,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartCount,
            cartTotal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "icysAjWSi1jaYyA9EOdVbZacVCI=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/shopify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_MAP",
    ()=>CATEGORY_MAP,
    "SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID",
    ()=>SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID,
    "SHOPIFY_SHOP_ID",
    ()=>SHOPIFY_SHOP_ID,
    "createShopifyCheckout",
    ()=>createShopifyCheckout,
    "getAllCollections",
    ()=>getAllCollections,
    "getCollectionByHandle",
    ()=>getCollectionByHandle,
    "getCustomerAccountUrl",
    ()=>getCustomerAccountUrl,
    "getCustomerOAuthUrl",
    ()=>getCustomerOAuthUrl,
    "getJewellery",
    ()=>getJewellery,
    "getProductByHandle",
    ()=>getProductByHandle,
    "getProducts",
    ()=>getProducts,
    "getRelatedProducts",
    ()=>getRelatedProducts,
    "getShopDetails",
    ()=>getShopDetails,
    "getWatches",
    ()=>getWatches,
    "shopifyFetch",
    ()=>shopifyFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const domain = ("TURBOPACK compile-time value", "sxr11n-4z.myshopify.com") || "sxr11n-4z.myshopify.com";
const storefrontAccessToken = ("TURBOPACK compile-time value", "983b3cc02be02d0fb5398b96cca0207d") || "983b3cc02be02d0fb5398b96cca0207d";
const privateAccessToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN || "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";
const apiVersion = ("TURBOPACK compile-time value", "2024-01") || "2024-01";
const SHOPIFY_SHOP_ID = ("TURBOPACK compile-time value", "99668787516") || "99668787516";
const SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID = ("TURBOPACK compile-time value", "769996f2-50a7-471e-8ede-550d949aa2fa") || "769996f2-50a7-471e-8ede-550d949aa2fa";
const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;
async function shopifyFetch({ query, variables = {}, revalidate = 60 }) {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            headers["X-Shopify-Storefront-Access-Token"] = storefrontAccessToken;
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify({
                query,
                variables
            }),
            next: {
                revalidate
            }
        });
        if (!response.ok) {
            throw new Error(`Shopify API HTTP error: ${response.status} ${response.statusText}`);
        }
        const json = await response.json();
        if (json.errors && json.errors.length > 0) {
            throw new Error(`Shopify GraphQL Error: ${json.errors.map((e)=>e.message).join(", ")}`);
        }
        if (!json.data) {
            throw new Error("Shopify GraphQL response returned empty data.");
        }
        return json.data;
    } catch (error) {
        console.error("Error executing Shopify Storefront GraphQL query:", error);
        throw error;
    }
}
async function getShopDetails() {
    const query = `
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
  `;
    try {
        const data = await shopifyFetch({
            query
        });
        return data.shop;
    } catch  {
        return null;
    }
}
async function getProducts(first = 50) {
    const query = `
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
  `;
    try {
        const data = await shopifyFetch({
            query,
            variables: {
                first
            }
        });
        return data.products.edges.map((edge)=>{
            const p = edge.node;
            const images = p.images.edges.map((imgEdge)=>imgEdge.node);
            const variants = p.variants?.edges.map((vEdge)=>vEdge.node) || [];
            const isWatch = [
                "rolex",
                "iwc",
                "watch"
            ].some((kw)=>p.title.toLowerCase().includes(kw));
            // Curated fallback image if none uploaded yet
            const fallbackImg = {
                url: isWatch ? "/images/hero-watch-dial.jpg" : "/images/gold-chain-jewellery.jpg",
                altText: p.title
            };
            const finalImages = images.length > 0 ? images : [
                fallbackImg
            ];
            return {
                id: p.id,
                title: p.title,
                handle: p.handle,
                description: p.description,
                descriptionHtml: p.descriptionHtml,
                availableForSale: p.availableForSale,
                totalInventory: p.totalInventory,
                productType: p.productType,
                vendor: p.vendor,
                tags: p.tags,
                priceRange: p.priceRange,
                featuredImage: finalImages[0],
                images: finalImages,
                variants
            };
        });
    } catch  {
        return [];
    }
}
async function getProductByHandle(handle) {
    const query = `
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
  `;
    try {
        const data = await shopifyFetch({
            query,
            variables: {
                handle
            }
        });
        if (!data.product) return null;
        const p = data.product;
        const images = p.images.edges.map((e)=>e.node);
        const variants = p.variants.edges.map((e)=>e.node);
        const isWatch = [
            "rolex",
            "iwc",
            "watch"
        ].some((kw)=>p.title.toLowerCase().includes(kw));
        const fallbackImg = {
            url: isWatch ? "/images/hero-watch-dial.jpg" : "/images/gold-chain-jewellery.jpg",
            altText: p.title
        };
        const finalImages = images.length > 0 ? images : [
            fallbackImg
        ];
        return {
            id: p.id,
            title: p.title,
            handle: p.handle,
            description: p.description,
            descriptionHtml: p.descriptionHtml,
            availableForSale: p.availableForSale,
            totalInventory: p.totalInventory,
            vendor: p.vendor,
            productType: p.productType,
            tags: p.tags,
            options: p.options,
            priceRange: p.priceRange,
            featuredImage: finalImages[0],
            images: finalImages,
            variants
        };
    } catch (error) {
        console.error(`Error fetching product by handle "${handle}":`, error);
        return null;
    }
}
async function getWatches() {
    const allProducts = await getProducts(50);
    const watchKeywords = [
        "rolex",
        "iwc",
        "watch",
        "chrono",
        "diver",
        "daydate",
        "datejust",
        "submariner",
        "gmt"
    ];
    const watches = allProducts.filter((p)=>{
        const lower = p.title.toLowerCase();
        return watchKeywords.some((kw)=>lower.includes(kw));
    });
    return watches.map((p, idx)=>{
        const isOdd = idx % 2 === 0;
        return {
            ...p,
            badge: isOdd ? "50% OFF" : "New Arrival",
            subtitle: p.title.includes("-") ? p.title.split("-")[1]?.trim() : "Prestige Timepiece"
        };
    });
}
async function getJewellery() {
    const allProducts = await getProducts(50);
    const jewelleryKeywords = [
        "chain",
        "bangle",
        "bracelet",
        "ring",
        "earring",
        "gold",
        "silver",
        "belcher",
        "rope"
    ];
    const jewellery = allProducts.filter((p)=>{
        const lower = p.title.toLowerCase();
        const isWatch = [
            "rolex",
            "iwc",
            "watch"
        ].some((w)=>lower.includes(w));
        return !isWatch && jewelleryKeywords.some((kw)=>lower.includes(kw));
    });
    return jewellery.map((p, idx)=>{
        const isOdd = idx % 2 === 0;
        return {
            ...p,
            badge: isOdd ? "50% OFF" : "New Arrival",
            subtitle: p.title.includes("-") ? p.title.split("-")[1]?.trim() : "Hallmarked 9ct / 18ct"
        };
    });
}
async function getRelatedProducts(currentId, limit = 4) {
    const allProducts = await getProducts(20);
    return allProducts.filter((p)=>p.id !== currentId).slice(0, limit);
}
const CATEGORY_MAP = {
    chains: {
        title: "Solid Gold & Silver Chains",
        description: "Handcrafted 9ct & 18ct solid gold chains, curb links, rope chains, franco links, and belcher chains assayed and certified.",
        filter: (p)=>{
            const t = p.title.toLowerCase();
            return (t.includes("chain") || t.includes("curb") || t.includes("belcher") || t.includes("franco") || t.includes("rope")) && !t.includes("bracelet");
        }
    },
    bangles: {
        title: "Gold Bangles & Torcs",
        description: "Heavy 9ct gold hook & loop bangles, diamond & stone-set torcs, and leopard head statement bangles certified in the East Midlands.",
        filter: (p)=>p.title.toLowerCase().includes("bangle")
    },
    bracelets: {
        title: "Gold & Silver Bracelets",
        description: "Solid 9ct gold gypsy link bracelets, star & bar links, acorn bracelets, and heart-shaped belcher bracelets.",
        filter: (p)=>p.title.toLowerCase().includes("bracelet")
    },
    rings: {
        title: "Prestige Rings & Signets",
        description: "Heavy 5-row keeper rings, solid gold signet rings, tiger's eye inlays, pyramid rings, and openwork bands.",
        filter: (p)=>p.title.toLowerCase().includes("ring")
    },
    earrings: {
        title: "Fine Earrings & Hoops",
        description: "9ct & 18ct white gold hoop earrings, twisted hoops, articulated stone-set drops, and diamond studs.",
        filter: (p)=>p.title.toLowerCase().includes("earring") || p.title.toLowerCase().includes("hoop")
    },
    diamonds: {
        title: "Diamonds & Gemstones",
        description: "Certified diamond jewellery, three-stone drop earrings, brilliant cut rings, and SI1/G-H graded stones.",
        filter: (p)=>{
            const t = `${p.title} ${p.description || ""}`.toLowerCase();
            return t.includes("diamond") || t.includes("1.5ct") || t.includes("stone set") || t.includes("g-h") || t.includes("si1");
        }
    },
    watches: {
        title: "Swiss Luxury Watches",
        description: "Pre-owned Rolex, IWC, and Swiss chronometers authenticated with serial verification, box, and original papers.",
        filter: (p)=>{
            const t = p.title.toLowerCase();
            return t.includes("rolex") || t.includes("iwc") || t.includes("watch") || t.includes("daydate") || t.includes("datejust") || t.includes("sea-dweller") || t.includes("gmt");
        }
    },
    pandora: {
        title: "Pandora & Sterling Silver",
        description: "Genuine Pandora charms, sterling 925 silver bangles, collector keepsakes, and fine silver jewellery.",
        filter: (p)=>{
            const t = `${p.title} ${p.description || ""}`.toLowerCase();
            return t.includes("pandora") || t.includes("silver") || t.includes("925") || t.includes("charm");
        }
    },
    "latest-products": {
        title: "Latest Products & New Arrivals",
        description: "Explore the most recent additions to our luxury vault, featuring fresh allocations of solid gold, silver, and timepieces.",
        filter: ()=>true
    }
};
async function getAllCollections() {
    const query = `
    query getAllCollections {
      collections(first: 50) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;
    try {
        const data = await shopifyFetch({
            query
        });
        return data.collections.edges.map((e)=>e.node);
    } catch (error) {
        console.error("Error fetching collections:", error);
        return [];
    }
}
async function getCollectionByHandle(handle) {
    const query = `
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
  `;
    try {
        const data = await shopifyFetch({
            query,
            variables: {
                handle
            }
        });
        // If Shopify returns a populated collection with products, format and return it
        if (data.collection && data.collection.products.edges.length > 0) {
            const c = data.collection;
            const products = c.products.edges.map((e, idx)=>{
                const p = e.node;
                const images = p.images.edges.map((ie)=>ie.node);
                const variants = p.variants?.edges.map((ve)=>ve.node) || [];
                const isWatch = [
                    "rolex",
                    "iwc",
                    "watch"
                ].some((w)=>p.title.toLowerCase().includes(w));
                const fallbackImg = {
                    url: isWatch ? "/images/hero-watch-dial.jpg" : "/images/gold-chain-jewellery.jpg",
                    altText: p.title
                };
                const finalImages = images.length > 0 ? images : [
                    fallbackImg
                ];
                return {
                    id: p.id,
                    title: p.title,
                    handle: p.handle,
                    description: p.description,
                    descriptionHtml: p.descriptionHtml,
                    availableForSale: p.availableForSale,
                    totalInventory: p.totalInventory,
                    productType: p.productType,
                    vendor: p.vendor,
                    tags: p.tags,
                    priceRange: p.priceRange,
                    featuredImage: finalImages[0],
                    images: finalImages,
                    variants,
                    badge: idx % 2 === 0 ? "50% OFF" : "New Arrival"
                };
            });
            return {
                id: c.id,
                title: c.title,
                handle: c.handle,
                description: c.description,
                descriptionHtml: c.descriptionHtml,
                image: c.image,
                products
            };
        }
    } catch (err) {
        console.warn(`Shopify query for collection "${handle}" failed or was empty, checking fallback resolver.`, err);
    }
    // Fallback category resolver: Pull all active store products from Shopify and match against category rules
    const allProducts = await getProducts(100);
    const normalizedHandle = handle.toLowerCase();
    const catConfig = CATEGORY_MAP[normalizedHandle];
    if (catConfig) {
        const filteredProducts = allProducts.filter(catConfig.filter);
        return {
            id: `gid://shopify/Collection/custom-${normalizedHandle}`,
            title: catConfig.title,
            handle: normalizedHandle,
            description: catConfig.description,
            products: filteredProducts.length > 0 ? filteredProducts : allProducts.slice(0, 8)
        };
    }
    // Generic fallback for any other handle
    const title = handle.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const matchingProducts = allProducts.filter((p)=>p.title.toLowerCase().includes(handle.toLowerCase()));
    return {
        id: `gid://shopify/Collection/custom-${handle}`,
        title: title,
        handle: handle,
        description: `Browse our certified ${title} collection at Gold Bank Jewellers. Assayed, verified, and ready for immediate dispatch.`,
        products: matchingProducts.length > 0 ? matchingProducts : allProducts
    };
}
async function createShopifyCheckout(items) {
    // If merchandiseId is missing, try to resolve from variantId or product.variants[0].id
    const lines = [];
    for (const item of items){
        let merchandiseId = item.merchandiseId || item.variantId;
        if (!merchandiseId && item.product?.variants && item.product.variants.length > 0) {
            merchandiseId = item.product.variants[0].id;
        }
        if (merchandiseId && merchandiseId.startsWith("gid://shopify/ProductVariant/")) {
            lines.push({
                merchandiseId,
                quantity: Math.max(1, item.quantity)
            });
        }
    }
    // If no valid variant IDs could be extracted (e.g. mock items), fetch a live store product variant to back the checkout
    if (lines.length === 0) {
        const liveProducts = await getProducts(1);
        const fallbackVariantId = liveProducts[0]?.variants?.[0]?.id;
        if (fallbackVariantId) {
            lines.push({
                merchandiseId: fallbackVariantId,
                quantity: 1
            });
        } else {
            throw new Error("Unable to create cart: no product variants available.");
        }
    }
    const mutation = `
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
  `;
    const data = await shopifyFetch({
        query: mutation,
        variables: {
            lines
        },
        revalidate: 0
    });
    if (data.cartCreate.userErrors && data.cartCreate.userErrors.length > 0) {
        throw new Error(data.cartCreate.userErrors.map((e)=>e.message).join(", "));
    }
    if (!data.cartCreate.cart) {
        throw new Error("Failed to initialize Shopify checkout cart.");
    }
    return {
        checkoutUrl: data.cartCreate.cart.checkoutUrl,
        cartId: data.cartCreate.cart.id
    };
}
function getCustomerAccountUrl() {
    return `https://shopify.com/${SHOPIFY_SHOP_ID}/account`;
}
function getCustomerOAuthUrl(redirectUri) {
    const base = `https://shopify.com/authentication/${SHOPIFY_SHOP_ID}/oauth/authorize`;
    const params = new URLSearchParams({
        client_id: SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID,
        response_type: "code",
        scope: "openid email customer-account-api:full"
    });
    if (redirectUri) {
        params.set("redirect_uri", redirectUri);
    }
    return `${base}?${params.toString()}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0sfgw-l._.js.map