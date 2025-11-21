import React from 'react';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, updateQuantity, removeItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-stone-50 pb-24 text-stone-400">
        <ShoppingBag size={64} className="mb-4 opacity-20" />
        <p className="text-lg font-medium">购物车空空如也</p>
        <p className="text-sm mt-2">去挑选一些美味的菌菇吧</p>
      </div>
    );
  }

  return (
    <div className="pb-32 min-h-screen bg-stone-50">
      <div className="bg-white px-4 py-4 shadow-sm sticky top-0 z-10">
        <h1 className="text-xl font-bold text-center text-stone-800">购物车 ({items.length})</h1>
      </div>

      <div className="p-4 space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl p-3 shadow-sm flex gap-3 items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1 flex flex-col justify-between h-20">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-stone-800 text-sm line-clamp-1">{item.name}</h3>
                <button onClick={() => removeItem(item.id)} className="text-stone-400 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-xs text-stone-500 bg-stone-100 w-fit px-1 rounded">{item.category === 'monthly' ? '月度订阅' : '标准规格'}</p>
              <div className="flex justify-between items-end">
                <span className="font-bold text-emerald-700">¥{item.price}</span>
                <div className="flex items-center bg-stone-100 rounded-full px-2 py-1 gap-3">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity <= 1}
                    className="text-stone-600 disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="text-stone-600"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Bar */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-stone-200 p-4 shadow-lg z-40 pb-safe-area-inset-bottom">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm text-stone-500">合计:</span>
            <span className="text-2xl font-bold text-emerald-700">¥{total.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => alert('结算功能开发中')}
            className="bg-emerald-800 text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
          >
            立即结算
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;