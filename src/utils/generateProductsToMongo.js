import { Uid } from "./UiD.js";

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

let productsArr = []

for (let i = 1; i <= 7; i++) {
  const product = generateRandomProduct();
  productsArr.push(product)
}

console.log('🌙 ', 'copiar este resultado y pegarlo en un json, luego importar en mongod', '->', JSON.stringify(productsArr))
