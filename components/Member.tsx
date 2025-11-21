
import React from 'react';
import { ChevronRight, Gift, Star, CreditCard, Settings, HelpCircle, Crown, Clock, Ticket, Coins } from 'lucide-react';
import { MOCK_USER } from '../constants';

interface MemberProps {
  onViewImage: (url: string) => void;
}

const Member: React.FC<MemberProps> = ({ onViewImage }) => {
  const user = MOCK_USER;
  
  const bgImage = 'https://images.unsplash.com/photo-1443926818681-717d07443f48?auto=format&fit=crop&w=1200&q=80';
  const promoImage = 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80';

  // Tier Styles refined for premium look
  const tierStyles = {
    Red: 'bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white ring-4 ring-red-50',
    Silver: 'bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 text-slate-900 ring-4 ring-slate-50',
    Gold: 'bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 text-amber-950 ring-4 ring-amber-50',
    Black: 'bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-amber-200 ring-4 ring-neutral-200',
  };

  const progressPercent = (user.points / user.nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      {/* Header Background */}
      <div className="bg-stone-900 h-48 relative overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('${bgImage}')` }}></div>
         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </div>

      <div className="px-4 -mt-36 relative z-10">
        {/* User Info Header */}
        <div className="flex justify-between items-center mb-6 px-2">
           <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden shadow-lg cursor-pointer"
                onClick={() => onViewImage(user.avatar)}
              >
                <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h2 className="text-xl font-bold tracking-wide">{user.name}</h2>
                <div className="flex items-center text-[10px] font-bold bg-white/10 backdrop-blur-sm border border-white/10 w-fit px-2 py-0.5 rounded-full mt-1 text-stone-200">
                  <span>{user.level.toUpperCase()} MEMBER</span>
                </div>
              </div>
           </div>
           <button className="text-white/80 hover:text-white">
             <Settings size={20} />
           </button>
        </div>

        {/* Membership Card */}
        <div className={`rounded-2xl p-6 shadow-2xl ${tierStyles[user.level]} relative overflow-hidden min-h-[200px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.02]`}>
           {/* Texture overlay */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
           
           <div className="flex justify-between items-start relative z-10">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <Crown size={20} fill="currentColor" className="opacity-80"/>
                 <h3 className="font-serif text-xl font-bold tracking-widest italic">
                   SHANZHEN
                 </h3>
               </div>
               <p className="text-[10px] opacity-60 font-medium tracking-widest uppercase">Premium Club</p>
             </div>
             <div className="text-right">
               <div className="text-xs opacity-70 mb-1">当前成长值</div>
               <div className="text-3xl font-bold tabular-nums leading-none">{user.points}</div>
             </div>
           </div>

           <div className="relative z-10 mt-6">
             <div className="flex justify-between text-[10px] mb-2 font-bold opacity-70 uppercase tracking-wider">
               <span>Current: {user.level}</span>
               <span>Next: Black</span>
             </div>
             <div className="h-1.5 bg-black/20 rounded-full overflow-hidden backdrop-blur-sm">
               <div 
                className="h-full bg-current opacity-90 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                style={{ width: `${progressPercent}%` }}
               ></div>
             </div>
             <p className="text-[10px] mt-3 opacity-80 flex items-center gap-1">
               <Clock size={10} /> 再积 {user.nextLevelPoints - user.points} 分可升级黑金会员
             </p>
           </div>
        </div>

        {/* Points & Wallet - Distinct from Growth Value */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-stone-100 flex justify-around items-center text-center">
            <div className="flex flex-col items-center gap-1 cursor-pointer active:opacity-60">
               <span className="text-xl font-bold text-emerald-700">854</span>
               <span className="text-xs text-stone-500 font-medium">山珍币</span>
            </div>
            <div className="w-px h-8 bg-stone-200"></div>
            <div className="flex flex-col items-center gap-1 cursor-pointer active:opacity-60">
               <span className="text-xl font-bold text-emerald-700">3</span>
               <span className="text-xs text-stone-500 font-medium">优惠券</span>
            </div>
             <div className="w-px h-8 bg-stone-200"></div>
            <div className="flex flex-col items-center gap-1 cursor-pointer active:opacity-60">
               <span className="text-xl font-bold text-emerald-700">¥0.00</span>
               <span className="text-xs text-stone-500 font-medium">余额</span>
            </div>
        </div>

        {/* Member Tasks/Benefits Grid */}
        <div className="mt-4 bg-white rounded-xl p-5 shadow-sm border border-stone-100">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-stone-800 flex items-center gap-2 text-sm">
              <Gift size={16} className="text-emerald-600" />
              会员权益
            </h3>
            <span className="text-xs text-stone-400 flex items-center">全部权益 <ChevronRight size={12} /></span>
          </div>
          <div className="grid grid-cols-4 gap-y-6">
            {[
              { label: '积分兑换', icon: Coins, color: 'text-orange-500 bg-orange-50' },
              { label: '生日礼遇', icon: Star, color: 'text-red-500 bg-red-50' },
              { label: '专属客服', icon: HelpCircle, color: 'text-blue-500 bg-blue-50' },
              { label: '新品尝鲜', icon: Ticket, color: 'text-purple-500 bg-purple-50' },
              { label: '免运费', icon: CreditCard, color: 'text-emerald-500 bg-emerald-50' },
              { label: '活动优先', icon: Crown, color: 'text-yellow-600 bg-yellow-50' },
              { label: '线下活动', icon: Gift, color: 'text-pink-500 bg-pink-50' },
              { label: '更多权益', icon: ChevronRight, color: 'text-stone-400 bg-stone-50' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-stone-600 active:scale-95 transition-transform cursor-pointer">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color} mb-1`}>
                  <item.icon size={18} />
                </div>
                <span className="text-[11px] font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Ad */}
        <div className="mt-4 rounded-xl overflow-hidden shadow-sm relative h-24 cursor-pointer" onClick={() => onViewImage(promoImage)}>
          <img src={promoImage} className="w-full h-full object-cover brightness-75" alt="promo" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white pointer-events-none">
             <h4 className="font-bold text-lg">邀请好友得好礼</h4>
             <p className="text-xs opacity-90">双方各得 50 山珍币</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
