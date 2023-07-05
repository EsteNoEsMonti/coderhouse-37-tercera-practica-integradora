import { Uid } from "./UiD.js";
import { faker } from '@faker-js/faker'

export function mockingProducts() {
  const products = []

  function generateRandomProduct() {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const emojis = ['😀', '😄', '🚀', '🌟', '🎉']; // Emojis para el título del producto

    const id = Uid()
    const code = `PRODUCT-${Uid()}`;
    const title = `Test Product ${Math.floor(Math.random() * 100) + 1} ${emojis[Math.floor(Math.random() * emojis.length)]}`;

    const product = {
      id,
      title,
      description: 'This is a generic description',
      code,
      price: Math.floor(Math.random() * 500) + 100,
      status: true,
      stock: Math.floor(Math.random() * 25) + 10,
      category: categories[Math.floor(Math.random() * categories.length)]
    };

    return product;
  }

  for (let i = 1; i <= 100; i++) {
    const product = generateRandomProduct();
    products.push(product)
  }

  return { products }
}

export function mockingProductsWithFakerJS() {
  const products = [];

  for (let i = 0; i < 100; i++) {
    const product = {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      code: faker.datatype.uuid(),
      price: faker.commerce.price(),
      status: faker.datatype.boolean(),
      stock: faker.datatype.number({ min: 0, max: 100 }),
      category: faker.commerce.department(),
    };

    products.push(product);
  }

  return { products }
}