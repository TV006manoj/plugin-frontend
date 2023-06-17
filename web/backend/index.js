import { createShopifyAuth } from "@shopify/koa-shopify-auth"
import { verifyRequest } from "@shopify/koa-shopify-auth"
import Koa from "koa"
import Router from "koa-router"
import dotenv from "dotenv"
import session from "koa-session"
import { Shopify } from "@shopify/shopify-api"

dotenv.config();

const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY } = process.env;

const app = new Koa();
const router = new Router();
app.keys = [SHOPIFY_API_SECRET];

app.use(session(app));

const scopes = [
  "read_products",
  "write_products",
  "read_script_tags",
  "write_script_tags",
  "read_checkouts",
  "write_checkouts",
];

app.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET,
    scopes,
    afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;

      // Perform required actions on all pages
      console.log("Action on all pages");

      // Perform required actions when a product is added or removed from the basket
      router.post("/cart/add.js", verifyRequest(), (ctx) => {
        console.log("Action on product added to basket");
        ctx.response.status = 204;
      });

      router.post("/cart/change.js", verifyRequest(), (ctx) => {
        console.log("Action on product removed from basket");
        ctx.response.status = 204;
      });

      // Perform required actions when email address captured
      router.post("/contact#contact_form", verifyRequest(), (ctx) => {
        console.log("Action on email address captured");
        ctx.response.status = 204;
      });

      // Perform required actions on order confirmation
      router.get("/checkout/thank_you", verifyRequest(), (ctx) => {
        console.log("Action on order confirmation");
        ctx.response.status = 204;
      });

      ctx.redirect("/");
    },
  })
);

router.get("/", async (ctx) => {
  ctx.body = "Hello, Shopify!";
});

app.use(router.routes());
app.use(router.allowedMethods());

(async () => {
  await Shopify.Utils.loadEnvironment({
    API_KEY: SHOPIFY_API_KEY,
    API_SECRET_KEY: SHOPIFY_API_SECRET,
  });
  const server = app.listen(8000, () => {
    console.log("App is running on port 3000");
  });
})();
