import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  RefreshCw, 
  ExternalLink,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Search,
  Tag,
  Loader2,
  Mail
} from 'lucide-react';
import { Product, fetchProductsFromSheet } from './services/productService';

const SHOPEE_ORANGE = "#EE4D2D";

export default function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchProductsFromSheet();
      setAllProducts(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  const dynamicCategories = useMemo(() => {
    const cats = new Set(allProducts.map(p => p.category));
    return ["Tất cả", ...Array.from(cats)];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    let result = allProducts;
    if (selectedCategory !== "Tất cả") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return result;
  }, [allProducts, selectedCategory, searchQuery]);

  const formatPrice = (price: number) => {
    if (price === 0) return "Liên hệ";
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#EE4D2D] p-1.5 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Hot Deal <span className="text-[#EE4D2D]">Store</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium hover:text-[#EE4D2D] transition-colors">Sản phẩm</a>
            <a href="#why-us" className="text-sm font-medium hover:text-[#EE4D2D] transition-colors">Lý do chọn</a>
            <a href="https://collshp.com/tunyz898?view=storefront" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#EE4D2D] transition-colors flex items-center gap-1">
              Gian hàng Shopee
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#catalog" className="bg-[#EE4D2D] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#d43f25] transition-all shadow-md">
              Xem Deal Hot
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#EE4D2D] text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
              <ShieldCheck className="w-4 h-4" />
              Link Sản Phẩm Chính Hãng
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight uppercase">
              DEAL HOT mỗi ngày – <span className="text-[#EE4D2D]">Cung cấp những gì bạn cần với giá tốt nhất</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Tổng hợp những sản phẩm chất lượng nhất với mức giá ưu đãi cực sốc. 
              Tiết kiệm thời gian, mua sắm thông minh ngay hôm nay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#catalog" 
                className="w-full sm:w-auto px-8 py-4 bg-[#EE4D2D] text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-200 hover:bg-[#d43f25] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Xem deal hot hôm nay
                <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Cập nhật liên tục
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Danh mục sản phẩm</h2>
              <p className="text-gray-600">Khám phá hàng ngàn ưu đãi hấp dẫn được tuyển chọn</p>
            </div>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Tìm sản phẩm..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EE4D2D]/20 focus:border-[#EE4D2D] transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                    ? "bg-[#EE4D2D] text-white shadow-lg shadow-orange-100" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="min-h-[400px] relative">
            {isLoading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-[#EE4D2D] animate-spin" />
                <p className="text-gray-500 font-medium">Đang tải deal hot...</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${product.id}/400/400`;
                          }}
                        />
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${
                              product.badge === 'Deal hot' ? 'bg-red-500' : 
                              product.badge === 'Bán chạy' ? 'bg-orange-500' : 'bg-blue-500'
                            }`}>
                              {product.badge}
                            </span>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                            <Tag className="w-4 h-4 text-[#EE4D2D]" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{product.category}</span>
                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h3>
                        
                        <div className="mt-auto">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg font-extrabold text-[#EE4D2D]">
                              {formatPrice(product.discountPrice)}
                            </span>
                            {product.originalPrice > product.discountPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                          
                          <a 
                            href={product.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 bg-[#EE4D2D] text-white rounded-xl text-sm font-bold hover:bg-[#d43f25] transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-50"
                          >
                            Mua Ngay
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          
          {!isLoading && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Không tìm thấy sản phẩm</h3>
              <p className="text-gray-500">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lý do nên mua qua website này</h2>
            <div className="w-20 h-1.5 bg-[#EE4D2D] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
                title: "Chọn lọc deal thật",
                desc: "Chúng tôi chỉ tổng hợp những sản phẩm có đánh giá tốt và giá thực sự ưu đãi."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
                title: "Không tăng giá",
                desc: "Cam kết giá hiển thị là giá thực tế từ sàn, không nâng giá ảo để làm khuyến mãi."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
                title: "Link Chính Hãng",
                desc: "Tất cả link sản phẩm đều dẫn trực tiếp tới gian hàng chính hãng (Mall) hoặc Shop yêu thích."
              },
              {
                icon: <RefreshCw className="w-8 h-8 text-purple-500" />,
                title: "Cập nhật hằng ngày",
                desc: "Hệ thống tự động cập nhật deal mới mỗi giờ để bạn không bỏ lỡ bất kỳ cơ hội nào."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-all group">
                <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm w-fit group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#EE4D2D] p-1.5 rounded-lg">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Hot Deal <span className="text-[#EE4D2D]">Store</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Website chia sẻ các sản phẩm chất lượng với giá ưu đãi tốt nhất từ các sàn thương mại điện tử uy tín.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <a href="mailto:hotdeal.today.together@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-[#EE4D2D] transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  hotdeal.today.together@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/caster.hyun.3/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-[#EE4D2D] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#EE4D2D] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#EE4D2D] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#catalog" className="hover:text-white transition-colors">Sản phẩm hot</a></li>
                <li><a href="https://collshp.com/tunyz898?view=storefront" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Gian hàng Shopee <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Bản tin Deal Hot</h4>
              <p className="text-gray-400 mb-4 text-sm">Đăng ký để nhận thông báo về các mã giảm giá độc quyền sớm nhất.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="bg-gray-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#EE4D2D] w-full"
                />
                <button className="bg-[#EE4D2D] px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-[#d43f25] transition-colors">
                  Gửi
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} DealHot. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] max-w-2xl mx-auto leading-relaxed italic">
              Disclaimer: Website chia sẻ các sản phẩm chất lượng với giá ưu đãi. Chúng tôi không trực tiếp bán hàng, các giao dịch sẽ được thực hiện trên sàn TMĐT Shopee. Website không thu thập dữ liệu cá nhân người dùng.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

