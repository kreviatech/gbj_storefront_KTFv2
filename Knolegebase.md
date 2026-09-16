SHOPIFY API DETAILS

API LINK:
https://sxr11n-4z.myshopify.com/api/2024-01/graphql.json

API KEY / STOREFRONT ACCESS TOKEN:
4da9ff19bf90d914bb2f52ec1b000fe7

AUTHENTICATION HEADER:
X-Shopify-Storefront-Access-Token: 4da9ff19bf90d914bb2f52ec1b000fe7

CONTENT TYPE:
application/json

---

title: Options for building headless
description: Learn how you can get started building a custom storefront on Shopify.
source_url:
html: 'https://shopify.dev/docs/storefronts/headless/getting-started/build-options'
md: >-
https://shopify.dev/docs/storefronts/headless/getting-started/build-options.md

---

# Options for building headless

There are many options to build custom storefronts that integrate with Shopify using the Storefront API.

The Hydrogen stack is Shopify's opinionated fullstack approach. There are alternative tools and options for any stack that you might choose.

![A diagram that outlines custom storefront use cases and corresponding build options](https://shopify.dev/assets/assets/images/custom-storefronts/build-options-rr-CZ-LPww7.png)

| Customization type                                                                                                                   | Build with                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Build a custom storefront with a React Router app and Shopify's frontend commerce tooling                                            | [Hydrogen](https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started)     |
| Build a custom storefront using a third-party React framework and Shopify's library of components, reusable functions, and utilities | [Hydrogen React](https://shopify.dev/docs/api/hydrogen-react)                          |
| Build headless using the framework of your choice and Shopify's backend using only the Storefront API                                | [Headless channel](https://shopify.dev/docs/storefronts/headless/bring-your-own-stack) |

---

## Hydrogen and Oxygen

Built on React Router, [Hydrogen](https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started) is a Shopify storefront toolkit that provides a set of components, functions, and utilities used for building custom storefronts on React Router apps. Hydrogen is built and optimized to use data coming from the [Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api).

---

## Channels

You can use the Shopify admin to manage your commerce data across multiple channels to make sure that all customer touchpoints are in sync. You can also create a custom channel complementary to your online store channel, such as a mobile app, or create your own custom website to replace your online store.

### The Hydrogen channel

The Hydrogen channel enables deployment of Hydrogen storefronts to Shopify's included edge hosting environment, Oxygen. It automatically creates and populates public and private environment variables necessary for integration with the Storefront API.

The [Shopify GitHub integration for Oxygen](https://shopify.dev/docs/storefronts/headless/hydrogen/deployments/github) enables you to connect a Git repository to the [Hydrogen channel](#the-hydrogen-channel) within the Shopify admin. You can use GitHub to host and collaborate on your Hydrogen storefront code. GitHub provides tools to track the history of changes, recover earlier versions of the storefront, and manage your code in a central repository.

The Hydrogen channel also provides order attribution, so that you can clearly see in your Shopify admin the GMV that's made through the channel.

You can install the Hydrogen channel through the [Shopify App Store](https://apps.shopify.com/hydrogen).

[Learn how to get started using the Hydrogen channel in relation to Oxygen](https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started).

### The Headless channel

Make headless and self-hosted Hydrogen experiences possible in the Headless channel without needing to create a custom app.

The Headless channel provides a single place to create and manage access tokens for the [Storefront API](https://shopify.dev/docs/api/storefront). You can use the channel to create multiple custom storefronts. Storefronts that you create through the channel automatically include [public and private access tokens](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api#authentication-and-authorization) with shop permission for the Storefront API. In the channel you can rotate your private access token and manage storefront permissions.

Additionally, the channel gives you all of Shopify's channel features, such as product publishing and order attribution, and analytics and reporting sales by channel.

Order attribution is at the channel level, and a Headless storefront is treated as a channel.

![An image of a developer installing the Headless channel. The channel provides public and private access tokens, options to manage storefront permissions, and tools for order attribution. Requests to the API for storefront data can be made from public and private contexts. The data is sent to the storefront, which serves data and passes back data such as what is used for attributing orders to the channel](https://shopify.dev/assets/assets/images/custom-storefronts/storefront-api/headless-channel-b70XV1OD.png)

---

## Additional SDKs

Shopify provides a range of SDKs and software tools to accelerate your development process. Learn about the [different tools](https://shopify.dev/docs/storefronts/headless/additional-sdks) that you can use to create unique buying experiences anywhere your customers are, including websites, apps, and video games.

---

## Next steps

Build a custom storefront with the following options:

- [Add the Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api) and get started building with the Storefront API.
- [Get started with Hydrogen React](https://shopify.dev/docs/api/hydrogen-react).
- [Get started with Hydrogen](https://shopify.dev/docs/storefronts/headless/hydrogen/getting-started) and begin building a custom storefront.

---
