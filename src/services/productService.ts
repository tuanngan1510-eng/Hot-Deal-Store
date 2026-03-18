import Papa from 'papaparse';

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

const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7aQF2H57VZ9_r4KIsbTuKKu4Lv4wrwwHsdvNSotwg6dWvWREdzNmUhMVhrUXSQ0ILdrNOUZNITbZB/pub?gid=0&single=true&output=csv";
const SHEET_URL = import.meta.env.VITE_SHEET_URL || DEFAULT_SHEET_URL;

export const fetchProductsFromSheet = async (): Promise<Product[]> => {
  try {
    const response = await fetch(SHEET_URL);
    const csvData = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: false, // We'll find the header manually because of the empty rows
        skipEmptyLines: true,
        complete: (results) => {
          const rows = results.data as string[][];
          
          // Find the header row (starts with "Hạng mục")
          const headerIndex = rows.findIndex(row => row[0] === "Hạng mục");
          if (headerIndex === -1) {
            resolve([]);
            return;
          }
          
          const dataRows = rows.slice(headerIndex + 1);
          const products: Product[] = dataRows
            .filter(row => row[1]) // Ensure product name exists
            .map((row, index) => {
              // Parse prices (remove currency symbols and dots)
              const parsePrice = (priceStr: string) => {
                if (!priceStr) return 0;
                return parseInt(priceStr.replace(/[^\d]/g, "")) || 0;
              };

              return {
                id: `sheet-${index}`,
                category: row[0] || "Khác",
                name: row[1],
                affiliateUrl: row[2] || "https://shopee.vn",
                image: row[3] || `https://picsum.photos/seed/${index}/400/400`,
                originalPrice: parsePrice(row[4]),
                discountPrice: parsePrice(row[5]),
                badge: index % 3 === 0 ? "Deal hot" : (index % 3 === 1 ? "Bán chạy" : "Giảm sâu")
              };
            });
          
          resolve(products);
        },
        error: (error: Error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching products from sheet:", error);
    return [];
  }
};
