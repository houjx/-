
import React, { useState } from 'react';
import { Search, Calendar, Package, ChefHat, ShoppingBag, X, ZoomIn } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface HomeProps {
  addToCart: (product: Product) => void;
  onViewImage: (url: string) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart, onViewImage }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'single', label: '菌类单品', icon: ShoppingBag, color: 'bg-blue-500', sub: '源头直采' },
    { id: 'monthly', label: '月度订阅', icon: Calendar, color: 'bg-emerald-500', sub: '全年鲜美' },
    { id: 'weekly', label: '周周尝鲜', icon: Package, color: 'bg-orange-500', sub: '时令精选' },
    { id: 'custom', label: '专属定制', icon: ChefHat, color: 'bg-purple-500', sub: '场景搭配' },
  ];

  // Dynamic Banner Configuration based on Category
  const getBannerConfig = (category: string) => {
    switch(category) {
      case 'single':
        return {
          title: '当季·鲜味直达',
          subtitle: 'FRESH ARRIVAL',
          // 新鲜菌菇
          image: 'https://images.unsplash.com/photo-1605218427368-35b0f985d97b?auto=format&fit=crop&w=1000&q=80',
          tag: '# 现采现发'
        };
      case 'monthly':
        return {
          title: '月度·味蕾计划',
          subtitle: 'MONTHLY PLAN',
          // 食材箱
          image: 'https://images.unsplash.com/photo-1598511796318-7b820752bbc8?auto=format&fit=crop&w=1000&q=80',
          tag: '# 省心之选'
        };
      case 'weekly':
        return {
          title: '每周·尝鲜体验',
          subtitle: 'WEEKLY TASTE',
          // 烹饪/美食
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
          tag: '# 不时不食'
        };
      case 'custom':
        return {
          title: '专属·场景定制',
          subtitle: 'CUSTOM SCENARIO',
          // 高级餐厅/宴请
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
          tag: '# 宴请必备'
        };
      default:
        return {
          title: '山珍·SHANZHEN',
          subtitle: 'PREMIUM MUSHROOMS',
          // 默认首页 Banner：纹理清晰的菌菇
          image: 'https://images.unsplash.com/photo-1533232683784-34d7130b7053?auto=format&fit=crop&w=1000&q=80',
          tag: '# 本季主打: 见手青'
        };
    }
  };

  const banner = getBannerConfig(activeCategory);

  return (
    <div className="pb-24 bg-stone-50 min-h-screen">
      {/* Dynamic Header & Hero */}
      <div className="relative bg-emerald-900 text-white rounded-b-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group cursor-pointer" onClick={() => onViewImage(banner.image)}>
        <div className="absolute inset-0 opacity-60 mix-blend-overlay">
            <img 
              key={banner.image} // Force re-render for animation
              src={banner.image} 
              className="w-full h-full object-cover animate-[fadeIn_1s_ease-out]" 
              alt="background" 
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 to-emerald-900/90"></div>
        
        <div className="relative px-6 pt-14 pb-20">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold tracking-wider font-serif transition-all duration-300">{banner.title}</h1>
              <p className="text-xs text-emerald-200 tracking-widest opacity-80">{banner.subtitle}</p>
            </div>
            <div className="bg-white/10 p-2.5 rounded-full backdrop-blur-md border border-white/10" onClick={(e) => { e.stopPropagation(); /* Add search logic later */ }}>
              <Search size={20} />
            </div>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-800/50 backdrop-blur rounded-full text-xs border border-emerald-700/50 text-emerald-100 mb-3">
              {banner.tag}
            </span>
            <h2 className="text-3xl font-bold mb-2 leading-tight">
              {activeCategory === 'all' ? <>自然馈赠 <br/> <span className="text-emerald-300">鲜美到家</span></> : 
               <>甄选品质 <br/> <span className="text-emerald-300">源头直供</span></>}
            </h2>
          </div>
        </div>
      </div>

      {/* King Kong Navigation */}
      <div className="px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex justify-between items-start">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex flex-col items-center w-1/4 group"
            >
              <div className={`${activeCategory === cat.id ? 'bg-stone-800' : cat.color} w-12 h-12 rounded-2xl shadow-lg shadow-stone-200 flex items-center justify-center text-white mb-2 transform group-active:scale-95 transition-all duration-300`}>
                <cat.icon size={22} strokeWidth={2.5} />
              </div>
              <span className={`text-xs font-bold ${activeCategory === cat.id ? 'text-stone-800' : 'text-stone-600'}`}>
                {cat.label}
              </span>
              <span className="text-[10px] text-stone-400 scale-90 origin-top">{cat.sub}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chips / Filters */}
      <div className="px-4 mt-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
           <button onClick={() => setActiveCategory('all')} className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-colors ${activeCategory === 'all' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'}`}>
             全部推荐
           </button>
           {['火锅必备', '春季限定', '滋补汤料', '干货礼盒'].map((tag, idx) => (
             <button key={idx} className="whitespace-nowrap px-5 py-2 rounded-full text-xs font-medium bg-white text-stone-600 border border-stone-200 shadow-sm">
               {tag}
             </button>
           ))}
        </div>
      </div>

      {/* Product List */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-stone-800 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
            {activeCategory === 'all' ? '精选好物' : categories.find(c => c.id === activeCategory)?.label}
          </h3>
          {activeCategory !== 'all' && (
            <button onClick={() => setActiveCategory('all')} className="text-stone-400 text-xs flex items-center bg-stone-100 px-2 py-1 rounded-full">
              清除筛选 <X size={12} className="ml-1"/>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col group">
              {/* Image Container - Click to Zoom */}
              <div 
                className="aspect-[4/3] overflow-hidden relative bg-stone-200 cursor-zoom-in"
                onClick={() => onViewImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="text-white drop-shadow-md" size={24} />
                </div>
                {product.isSubscription && (
                  <div className="absolute top-0 left-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-br-lg shadow-sm z-10">
                    周期订阅
                  </div>
                )}
                {product.tags?.[0] && !product.isSubscription && (
                   <div className="absolute top-0 left-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-br-lg shadow-sm z-10">
                    {product.tags[0]}
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h4 className="font-bold text-stone-800 mb-1 text-base">{product.name}</h4>
                  <p className="text-xs text-stone-500 line-clamp-2 mb-3 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags?.slice(0, 2).map(t => (
                      <span key={t} className="text-[10px] bg-stone-50 text-stone-500 border border-stone-100 px-1.5 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-3 border-t border-stone-50">
                  <div className="flex flex-col">
                    <span className="text-emerald-700 font-bold text-lg leading-none">¥{product.price}</span>
                    {product.isSubscription && <span className="text-[10px] text-stone-400">/ 期</span>}
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-stone-800 text-white p-2.5 rounded-full shadow-lg shadow-stone-200 active:scale-90 active:bg-emerald-600 transition-all duration-300"
                  >
                    <ShoppingBag size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
           <div className="text-center py-12 text-stone-400">
              <p>暂无该分类商品</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Home;
