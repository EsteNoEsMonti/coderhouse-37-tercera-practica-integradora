import { cartRepository } from "../../../repositories/cart.repository.js";

export async function getCart(req, res, next) {
  try {
    const productosEnCarro = await cartRepository.getProductsInCartById(
      req.params.cid
    );
    res.json(productosEnCarro);
  } catch (error) {
    next(error);
  }
}
