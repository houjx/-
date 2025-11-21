import React from 'react';
import { Home, BookOpen, ShoppingCart, User } from 'lucide-react';
import { AppTab } from '../types';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  cartCount: number;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, cartCount }) => {
  const navItems = [
    { id: AppTab.HOME, label: '首页', icon: Home },
    { id: AppTab.COMMUNITY, label: '餐养社区', icon: BookOpen },
    { id: AppTab.CART, label: '购物车', icon: ShoppingCart },
    { id: AppTab.MEMBER, label: '会员', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 pb-safe-area-inset-bottom z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              activeTab === item.id ? 'text-emerald-700' : 'text-stone-400'
            }`}
          >
            <div className="relative">
              <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              {item.id === AppTab.CART && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;