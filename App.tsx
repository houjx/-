
import React, { useState } from 'react';
import { AppTab, CartItem, Product } from './types';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Community from './components/Community';
import Cart from './components/Cart';
import Member from './components/Member';
import ImageViewer from './components/ImageViewer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const renderScreen = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Home addToCart={addToCart} onViewImage={setViewingImage} />;
      case AppTab.COMMUNITY:
        return <Community onViewImage={setViewingImage} />;
      case AppTab.CART:
        return (
          <Cart 
            items={cart} 
            updateQuantity={updateCartQuantity} 
            removeItem={removeFromCart} 
          />
        );
      case AppTab.MEMBER:
        return <Member onViewImage={setViewingImage} />;
      default:
        return <Home addToCart={addToCart} onViewImage={setViewingImage} />;
    }
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-stone-100 min-h-screen font-sans text-stone-900 max-w-md mx-auto relative shadow-2xl overflow-hidden">
      <div className="min-h-screen bg-stone-50">
        {renderScreen()}
      </div>
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        cartCount={cartTotalItems}
      />
      
      <ImageViewer 
        imageUrl={viewingImage} 
        onClose={() => setViewingImage(null)} 
      />
    </div>
  );
};

export default App;
