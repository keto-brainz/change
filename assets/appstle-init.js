(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("head")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0603/3814/3392/t/4/assets/appstle-subscription.js?v=1656575281");

      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2) > div:nth-child(2) > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "false",
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "samrose3.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and save",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "api_key": "",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": true,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": false,
        "appstlePlanName": "FREE",
        "appstlePlanFeatures": {"subscriptionCount":50,"analytics":true,"enableSubscriptionManagement":false,"enableDunningManagement":false,"enableCustomerPortalSettings":false,"enableShippingProfiles":false,"enableProductSwapAutomation":false,"enableAdvancedSellingPlans":false,"enableSummaryReports":false,"enableCustomEmailDomain":false,"enableWidgetPlacement":false,"enableIntegrations":false,"enableSmsAlert":false,"enableCustomEmailHtml":false,"enableCancellationManagement":false,"enableBundling":false,"enableAutomation":false,"enableExternalApi":false,"enableCartWidget":false,"enableAutoSync":false},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": ":root {\n  --font-body-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Helvetica Neue, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  --font-body-style: normal;\n  --font-body-weight: 400;\n  --font-heading-family: Raleway, sans-serif;\n  --font-heading-style: normal;\n  --font-heading-weight: 400;\n  --font-body-scale: 1.0;\n  --font-heading-scale: 1.0;\n  --color-base-text: 33, 37, 41;\n  --color-shadow: 33, 37, 41;\n  --color-base-background-1: 255, 255, 255;\n  --color-base-background-2: 243, 243, 243;\n  --color-base-solid-button-labels: 255, 255, 255;\n  --color-base-outline-button-labels: 33, 37, 41;\n  --color-base-accent-1: 28, 28, 28;\n  --color-base-accent-2: 255, 212, 59;\n  --color-foreground: var(--color-base-text);\n  --color-background: var(--color-base-background-1);\n}\n\nbody {\n  color: rgba(var(--color-foreground), 0.75);\n  letter-spacing: 0.06rem; \n  line-height: calc(1 + 0.8 \/ var(--font-body-scale));\n  font-family: var(--font-body-family) !important;\n  font-style: var(--font-body-style);\n  font-weight: var(--font-body-weight);\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family: var(--font-heading-family) !important;\n    font-style: var(--font-heading-style) !important;\n    font-weight: var(--font-heading-weight) !important;\n    letter-spacing: calc(var(--font-heading-scale) * .06rem) !important;\n    color: rgb(var(--color-foreground)) !important;\n    line-height: calc(1 + 0.3 \/ max(1, var(--font-heading-scale))) !important;\n    word-break: break-word;\n    font-size: calc(var(--font-heading-scale) * 2.4rem);\n    margin-bottom: 1rem;    margin-top: 0;\n}\n\nbutton {\n  font-family: var(--font-body-family) !important;\n  font-size: 15px !important;\n  letter-spacing: 1px;\n  line-height: calc(1 + .2 \/ var(--font-body-scale));\n  text-decoration: none;\n  color: rgb(255, 255, 255) !important;\n  -webkit-appearance: none;\n  appearance: none;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  background-color: rgb(28, 28, 28) !important;\n  min-width: 120px !important;\n  min-height: 45px !important;\n  padding: 0 30px !important;\n}\n\n.card,\n.card-header {\n  border-radius: 0 !important;\n}\n\n.card {\n  box-shadow: none !important;\n  border: 1px solid rgba(var(--color-foreground), 0.08) !important;\n}\n\n.accordion-wrapper > .card {\n  box-shadow: none !important;\n  border: 0 !important;\n}\n\n.accordion-wrapper > .card > .card-header {\n  background: #F6F7F7 !important;\n}\n\n@media screen and (max-width: 1024px) {\n  .appstle-customer-portal .appstle_font_size {\n    font-size: 13px !important;\n  }\n}",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);
