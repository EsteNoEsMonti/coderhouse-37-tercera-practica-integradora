import { productsRepository } from "../../../repositories/product.repository.js";
import { Uid } from "../../../utils/UiD.js";
import { mockingProducts, mockingProductsWithFakerJS } from "../../../utils/mockingModule.js";

export async function getProductsController(req, res, next) {
  try {
    const urlsrt = `http://localhost:8080${req.originalUrl}`;
    const result = await productsRepository.getPaginatedElements(
      req.query,
      urlsrt
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getMockingProducts(req, res, next) {
  try {
    const { products } = await mockingProducts()
    res.json(products)
  } catch (error) {
    next(error);
  }
}
export async function getMockingProductsWithFakerJS(req, res, next) {
  try {
    const { products } = await mockingProductsWithFakerJS()
    res.json(products)
  } catch (error) {
    next(error);
  }
}
