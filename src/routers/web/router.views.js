import { Router } from "express";
import {
  cartView,
  chatView,
  loginView,
  newProductView,
  productView,
  regisView,
  ticketView
} from "../../controllers/views/controller.all.views.js";
import { authJwtView } from "../../mid/authentication.js";
import { soloRol } from "../../mid/authorization.js";
import { getMockingProducts, getMockingProductsWithFakerJS } from "../../controllers/api/products/controller.getall.products.js";
import { loggerController } from "../../controllers/views/controller.logger.js";

export const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  res.redirect("/login");
});

viewsRouter.get("/newproducts", authJwtView, soloRol("admin"), newProductView);

//vistas de productos paginado
//nota falta ver como hacer para que siempre aparezca en mi url page como req (ver como redirigir)
viewsRouter.get("/products", authJwtView, productView);

//vista de carritos
viewsRouter.get("/carts/:cid", authJwtView, cartView);

// vista de carritos
viewsRouter.get("/carts/:cid/purchase", authJwtView, ticketView);

// Login
viewsRouter.get("/login", loginView);

// Register
viewsRouter.get("/register", regisView);

// Chat
viewsRouter.get("/chat", soloRol("user"), chatView);

// mocking de productos
viewsRouter.get("/mockingproducts", getMockingProducts);
viewsRouter.get("/mockingproductswhitfakesjs", getMockingProductsWithFakerJS);

// logger
viewsRouter.get('/loggerTest', loggerController)
