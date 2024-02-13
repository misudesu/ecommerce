
async function fetchProducts (url,body)  {
    const response = await fetch(url,body);
    const data = await response.json();
  
    return data;
  };
test('fetches products from the API', async () => {
  const products = await fetchProducts("https://fakestoreapi.com/products");
  expect(products).toHaveLength(20); 
  expect(products[0].id).toBe(1); 
  
});
test('fetches single products from the API', async () => {
    const products = await fetchProducts("https://fakestoreapi.com/products/1");
    expect(products.id).toBe(1); 
    expect(products.price).toBe(109.95); 
    expect(products.category).toBe("men's clothing")
  });

test('delete single products from the API', async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const productId = 1;
    const products = await fetchProducts(`https://fakestoreapi.com/products/6`, {
        method:"DELETE"
    });
    expect(products.id).toBe(6); 
    expect(products.price).toBe(168); 
    expect(products.category).toBe("jewelery")
  });

 
 
test('updates product price and category through the API', async () => {
  const productId = 1;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const updatedProductData = {
    id: productId,
    price: 129.95, 
    category: "women's clothing", 
  };
  const updatedProductResponse = { ...updatedProductData }; 
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => Promise.resolve(updatedProductResponse),
  });
  const updatedProduct = await fetchProducts(`${apiUrl}/products/${productId}`, {
    method: 'PATCH',
    body: JSON.stringify(updatedProductData),
  });
  expect(updatedProduct.id).toBe(productId); 
  expect(updatedProduct.price).toBe(129.95); 
  expect(updatedProduct.category).toBe("women's clothing"); 
  global.fetch.mockRestore();
});


test('adds a new product through the API', async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const newProductData = {
    title: 'New Product',
    price: 29.95,
    category: "women's clothing",

  };
  const newProductResponse = { id: 123, ...newProductData }; 
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => Promise.resolve(newProductResponse),
  });

 
  const addedProduct = await fetchProducts(`${apiUrl}/products`, {
    method: 'POST',
    body: JSON.stringify(newProductData),
  });

  expect(addedProduct.id).toBe(123); 
  expect(addedProduct.title).toBe('New Product'); 
  expect(addedProduct.price).toBe(29.95); 
  expect(addedProduct.category).toBe("women's clothing"); 
  global.fetch.mockRestore();
});

