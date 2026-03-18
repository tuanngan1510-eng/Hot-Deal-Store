export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  category: string;
  badge?: 'Deal hot' | 'Bán chạy' | 'Giảm sâu';
  affiliateUrl: string;
}

export const categories = ["Tất cả", "Điện tử", "Thời trang", "Gia dụng", "Làm đẹp"];

export const products: Product[] = [
  {
    id: "1",
    name: "Tai nghe Bluetooth Marshall Major IV",
    image: "https://picsum.photos/seed/marshall/400/400",
    originalPrice: 4500000,
    discountPrice: 3290000,
    category: "Điện tử",
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "2",
    name: "Áo thun Cotton Unisex Local Brand",
    image: "https://picsum.photos/seed/tshirt/400/400",
    originalPrice: 350000,
    discountPrice: 199000,
    category: "Thời trang",
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "3",
    name: "Nồi chiên không dầu Philips 5L",
    image: "https://picsum.photos/seed/philips/400/400",
    originalPrice: 2800000,
    discountPrice: 1850000,
    category: "Gia dụng",
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "4",
    name: "Sữa rửa mặt CeraVe Hydrating Cleanser",
    image: "https://picsum.photos/seed/cerave/400/400",
    originalPrice: 450000,
    discountPrice: 380000,
    category: "Làm đẹp",
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "5",
    name: "Bàn phím cơ không dây Keychron K2",
    image: "https://picsum.photos/seed/keychron/400/400",
    originalPrice: 2200000,
    discountPrice: 1650000,
    category: "Điện tử",
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "6",
    name: "Giày Sneaker Nike Air Force 1",
    image: "https://picsum.photos/seed/nike/400/400",
    originalPrice: 3200000,
    discountPrice: 2850000,
    category: "Thời trang",
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "7",
    name: "Máy hút bụi cầm tay Xiaomi",
    image: "https://picsum.photos/seed/xiaomi/400/400",
    originalPrice: 1500000,
    discountPrice: 990000,
    category: "Gia dụng",
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "8",
    name: "Son môi MAC Matte Lipstick",
    image: "https://picsum.photos/seed/mac/400/400",
    originalPrice: 650000,
    discountPrice: 490000,
    category: "Làm đẹp",
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn"
  },
  {
    id: "9",
    name: "Chuột Gaming Logitech G502",
    image: "https://picsum.photos/seed/logitech/400/400",
    originalPrice: 1200000,
    discountPrice: 850000,
    category: "Điện tử",
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn"
  }
];
