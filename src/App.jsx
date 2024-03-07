import Nav from './nav/Nav';
import ProductPage from './product-page/ProductPage';
import { useState } from 'react';
import { CartContext } from './CartContext';

function App() {
  const [cart, setCart] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <header>
        <Nav cart={cart} />
      </header>
      <main>
        <ProductPage setCart={setCart} />
      </main>
    </CartContext.Provider>
  )
}

export default App
