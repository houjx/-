
import React, { useState } from 'react';
import { Heart, Share2, MessageCircle, Leaf } from 'lucide-react';
import { MOCK_RECIPES } from '../constants';
import { Recipe } from '../types';

interface CommunityProps {
  onViewImage: (url: string) => void;
}

interface RecipeState extends Recipe {
  isLiked: boolean;
}

const Community: React.FC<CommunityProps> = ({ onViewImage }) => {
  const [tab, setTab] = useState<'recipes' | 'culture'>('recipes');
  
  const [recipes, setRecipes] = useState<RecipeState[]>(() => 
    MOCK_RECIPES.map(r => ({ ...r, isLiked: false }))
  );

  const toggleLike = (id: string) => {
    setRecipes(prev => prev.map(recipe => {
      if (recipe.id === id) {
        const isLiked = !recipe.isLiked;
        return {
          ...recipe,
          isLiked,
          likes: isLiked ? recipe.likes + 1 : recipe.likes - 1
        };
      }
      return recipe;
    }));
  };
  
  const recipeHeroImg = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80';
  const forestImg = 'https://images.unsplash.com/photo-1443926818681-717d07443f48?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="pb-24 bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-white sticky top-0 z-20 border-b border-stone-200">
        <div className="px-4 py-4 flex justify-center items-center">
          <div className="bg-stone-100 rounded-full p-1 flex">
            <button 
              onClick={() => setTab('recipes')}
              className={`px-6 py-1.5 rounded-full text-sm font-bold transition-all ${tab === 'recipes' ? 'bg-white text-emerald-700 shadow-sm' : 'text-stone-500'}`}
            >
              产品食谱
            </button>
            <button 
              onClick={() => setTab('culture')}
              className={`px-6 py-1.5 rounded-full text-sm font-bold transition-all ${tab === 'culture' ? 'bg-white text-emerald-700 shadow-sm' : 'text-stone-500'}`}
            >
              品牌文化
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {tab === 'recipes' ? (
          <div className="space-y-6">
            {/* Featured Recipe Hero */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div 
                className="relative h-56 bg-stone-200 cursor-zoom-in"
                onClick={() => onViewImage(recipeHeroImg)}
              >
                <img src={recipeHeroImg} className="w-full h-full object-cover" alt="Featured" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white pointer-events-none">
                  <h3 className="text-xl font-bold">春日鲜味：羊肚菌酿肉</h3>
                  <div className="flex items-center text-xs mt-1 opacity-90">
                    <span className="bg-white/20 px-2 py-0.5 rounded mr-2">本周热门</span>
                    <span>3.4w 阅读</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Feed */}
            <div className="grid grid-cols-1 gap-4">
              {recipes.map(recipe => (
                <div key={recipe.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                  <div 
                    className="w-28 h-28 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-100 cursor-zoom-in"
                    onClick={() => onViewImage(recipe.image)}
                  >
                    <img src={recipe.image} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" alt={recipe.title} loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-0.5">
                    <div>
                      <h4 className="font-bold text-stone-800 text-lg mb-1 leading-tight">{recipe.title}</h4>
                      <p className="text-stone-500 text-xs line-clamp-2 mb-2 leading-relaxed">{recipe.content}</p>
                      <div className="flex gap-2">
                        {recipe.tags.map(tag => (
                          <span key={tag} className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-stone-400 text-sm">
                      <span className="text-xs">by {recipe.author}</span>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => toggleLike(recipe.id)}
                          className={`flex items-center gap-1 transition-colors ${recipe.isLiked ? 'text-red-500' : 'hover:text-stone-600'}`}
                        >
                          <Heart size={14} fill={recipe.isLiked ? "currentColor" : "none"} /> 
                          <span className="text-xs">{recipe.likes}</span>
                        </button>
                        <button className="hover:text-stone-600 transition-colors"><MessageCircle size={14} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Culture Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                <Leaf size={32} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-2">山珍初心</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                我们相信，最好的味道来自大自然。每一朵菌菇，都承载着山林的雨露与阳光。我们致力于将这份纯粹的鲜美，从深山直接送达您的餐桌。
              </p>
            </div>

            <div 
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm group bg-stone-200 cursor-zoom-in"
              onClick={() => onViewImage(forestImg)}
            >
               <img src={forestImg} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" alt="Origin" />
               <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center pointer-events-none">
                 <h3 className="text-2xl font-bold mb-2">寻味之旅</h3>
                 <p className="text-sm">跟随我们的采购团队，深入云南原始森林，探寻菌菇生长的秘密。</p>
                 <button className="mt-4 border border-white px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-stone-900 transition-colors pointer-events-auto">观看纪录片</button>
               </div>
            </div>

             <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-4 border-l-4 border-emerald-500 pl-3">可持续发展承诺</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">01.</span>
                    <span>坚持适度采摘，保护菌丝体，确保来年再生。</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">02.</span>
                    <span>使用可降解环保包装，减少对环境的负担。</span>
                  </li>
                   <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">03.</span>
                    <span>扶持当地农户，提供种植技术培训，助力乡村振兴。</span>
                  </li>
                </ul>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
