
import { Product, Recipe, UserProfile } from './types';

// 使用经过验证的高稳定性 Unsplash 图片 ID
export const MOCK_PRODUCTS: Product[] = [
  // --- 单品 Single ---
  {
    id: 's1',
    name: '香格里拉松茸 (顶级)',
    description: '清晨采摘，空运直达，刺身级口感。',
    price: 398,
    // 稳定的菌菇特写 (Replaced broken link)
    image: 'https://images.unsplash.com/photo-1740797936651-c9148df80e07?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'single',
    tags: ['新鲜', '野生', '顺丰空运']
  },
  {
    id: 's2',
    name: '云南野生羊肚菌',
    description: '肉质厚实，煲汤浓郁，春季限定。',
    price: 168,
    // 纹理清晰的菌类
    image: 'https://media.istockphoto.com/id/2167859796/zh/%E7%85%A7%E7%89%87/tasty-raw-mushrooms-collection-healthy-food-concept.jpg?s=2048x2048&w=is&k=20&c=OaB3VZare0gb9Fi6kdpONnv6NhFEAN25hcRndNINttU=',
    category: 'single',
    tags: ['煲汤', '滋补']
  },
  {
    id: 's3',
    name: '新鲜见手青 (需熟食)',
    description: '鲜味之王，口感脆嫩，炒制首选。',
    price: 128,
    // 案板上的新鲜菌菇
    image: 'https://i2.chuimg.com/330fd339a030416d9525001c849a1134_750w_500h.jpg?imageView2/2/w/660/interlace/1/q/90',
    category: 'single',
    tags: ['地道', '风味']
  },
  {
    id: 's4',
    name: '特级干巴菌',
    description: '虽然其貌不扬，但香气扑鼻，炒饭一绝。',
    price: 450,
    // 深色菌类/干货质感
    image: 'https://5b0988e595225.cdn.sohucs.com/images/20180803/1b8d0313e91a4446a3ef28916147375b.jpeg',
    category: 'single',
    tags: ['稀有', '浓香']
  },
  
  // --- 月订 Monthly ---
  {
    id: 'm1',
    name: '家庭尊享月卡 (4次)',
    description: '每周六配送，涵盖当季4种顶级野生菌。',
    price: 1299,
    // 满满一篮食材
    image: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0425%2Fa1cf520aj00q9az75004pd200ia00rfg00ia00rf.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
    category: 'monthly',
    isSubscription: true,
    tags: ['家庭装', '省心']
  },
  {
    id: 'm2',
    name: '煲汤养生月卡 (4次)',
    description: '专为煲汤搭配，包含虫草花、姬松茸等。',
    price: 399,
    // 汤锅场景
    image: 'https://qcloud.dpfile.com/pc/mbqzAQ4tc-9sgaeK0Pgu2aFBDughDfmgwycM29vwYcuA3A68eIBgYttkq1hBHcPP.jpg',
    category: 'monthly',
    isSubscription: true,
    tags: ['养生', '妈妈最爱']
  },
  {
    id: 'm3',
    name: '全季珍稀菌皇卡 (季付)',
    description: '锁定整个产季的顶级货源，优先发货。',
    price: 3699,
    // 森林环境中的菌类
    image: 'https://images.unsplash.com/photo-1443926818681-717d07443f48?auto=format&fit=crop&w=800&q=80',
    category: 'monthly',
    isSubscription: true,
    tags: ['尊贵', 'VIP通道']
  },

  // --- 周订 Weekly ---
  {
    id: 'w1',
    name: '本周尝鲜包 (2-3人)',
    description: '随机3种时令鲜菇，适合小家庭周末加餐。',
    price: 88,
    // 菌菇纹理
    image: 'https://images.unsplash.com/photo-1583398092179-283c2f622342?auto=format&fit=crop&w=800&q=80',
    category: 'weekly',
    isSubscription: true,
    tags: ['入门首选']
  },
  {
    id: 'w2',
    name: '一人食轻享包',
    description: '份量适中，搭配独家快手菜谱。',
    price: 49,
    // 精致小份餐/碗
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    category: 'weekly',
    isSubscription: true,
    tags: ['独居', '方便']
  },
  {
    id: 'w3',
    name: '周末火锅菌蔬包',
    description: '已洗净切好，开袋即煮，懒人福音。',
    price: 79,
    // 火锅食材/烹饪
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    category: 'weekly',
    isSubscription: true,
    tags: ['免洗', '火锅']
  },

  // --- 定制 Custom ---
  {
    id: 'c1',
    name: '极致火锅菌菇拼盘',
    description: '精选7种耐煮鲜菇，涮火锅的神仙搭配。',
    price: 158,
    // 火锅场景
    image: 'https://images.unsplash.com/photo-1565288971201-9d4387574177?auto=format&fit=crop&w=800&q=80',
    category: 'custom',
    tags: ['火锅', '聚会']
  },
  {
    id: 'c2',
    name: '商务伴手礼盒 (定制)',
    description: '高端黑金包装，支持企业Logo定制。',
    price: 599,
    // 礼品/高级食材
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
    category: 'custom',
    tags: ['送礼', '高端']
  },
  {
    id: 'c3',
    name: '米其林餐厅专供版',
    description: '包含黑松露、羊肚菌等珍稀品种，大厨首选。',
    price: 2888,
    // 高级摆盘
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    category: 'custom',
    tags: ['奢华', '限量']
  },
  {
    id: 'c4',
    name: '松露油 & 菌菇酱礼盒',
    description: '手工熬制，封存鲜美，无论是拌面还是佐餐都是一绝。',
    price: 268,
    // 酱料罐
    image: 'https://images.unsplash.com/photo-1621856537224-41a9df6f1936?auto=format&fit=crop&w=800&q=80',
    category: 'custom',
    tags: ['深加工', '佐餐']
  }
];

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: '松茸土鸡汤',
    author: '菌菇小厨',
    likes: 1240,
    // 鸡汤
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    content: '原汁原味，只需少许盐巴即可激发鲜味...',
    tags: ['滋补', '汤品']
  },
  {
    id: 'r2',
    title: '黑松露意面',
    author: 'Chef David',
    likes: 856,
    // 意面
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    content: '中西结合，黑松露的香气与奶油完美融合...',
    tags: ['西餐', '快手菜']
  },
  {
    id: 'r3',
    title: '干炸见手青',
    author: '云南味道',
    likes: 3302,
    // 炒菜
    image: 'https://img-cdn.yndaily.com/catchimages/20241126/1732581480481087232.jpg?x-image-process=image/quality,q_95/strip/strip',
    content: '一定要炒熟！大火爆炒，蒜片增香...',
    tags: ['地道', '下饭']
  },
   {
    id: 'r4',
    title: '素炒杂菌',
    author: '轻食主义',
    likes: 520,
    // 素食
    image: 'https://miaobi-lite.bj.bcebos.com/miaobi/5mao/b%275LqR5Y2X6JiR6I%2BH6KOF55uY5pa55rOVXzE3MzMyNTU5ODkuNTc3NzA4NQ%3D%3D%27/0.png',
    content: '简单清爽，保留了菌子的脆嫩口感...',
    tags: ['素食', '减脂']
  }
];

export const MOCK_USER: UserProfile = {
  name: '张三',
  level: 'Gold',
  points: 8540,
  nextLevelPoints: 10000,
  // 用户头像 - 稳定ID
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
};
