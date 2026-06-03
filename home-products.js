(function () {
  const categories = [
    ["Electronics", "smartphone", "#7dd3fc", "#2563eb"],
    ["Fashion", "checkroom", "#fda4af", "#be123c"],
    ["Home", "chair", "#86efac", "#15803d"],
    ["Beauty", "spa", "#f0abfc", "#a21caf"],
    ["Sports", "sports_soccer", "#fdba74", "#c2410c"],
    ["Grocery", "local_grocery_store", "#bef264", "#4d7c0f"],
    ["Toys", "toys", "#fde68a", "#b45309"],
    ["Automotive", "directions_car", "#c4b5fd", "#6d28d9"],
  ];

  const names = [
    "Nova X1 Smartphone", "PulseFit Smartwatch", "Sonic ANC Headphones", "AeroBook Laptop",
    "Crystal 4K Monitor", "SwiftCharge Power Bank", "Mini Bluetooth Speaker", "Pro Gaming Mouse",
    "Mechanical Keyboard", "VisionCam Webcam", "CloudPods Earbuds", "HomeHub Router",
    "Urban Denim Jacket", "Classic Cotton Shirt", "AirFlex Sneakers", "TrailRunner Shoes",
    "Luxe Leather Wallet", "Daily Canvas Backpack", "Aviator Sunglasses", "Minimal Analog Watch",
    "Breeze Linen Kurta", "Comfy Joggers", "Travel Duffel Bag", "Formal Oxford Shoes",
    "Nordic Table Lamp", "Ergo Office Chair", "SoftWeave Bedsheet", "Ceramic Dinner Set",
    "Aroma Diffuser", "Smart LED Bulb Pack", "Wall Art Frame Set", "Kitchen Knife Set",
    "Nonstick Cookware", "Cotton Bath Towel", "Storage Organizer", "Memory Foam Pillow",
    "HydraGlow Serum", "Matte Lip Color", "Charcoal Face Wash", "Silk Repair Shampoo",
    "Vitamin C Cream", "Aloe Body Lotion", "Beard Grooming Kit", "Floral Eau De Parfum",
    "Makeup Brush Set", "Nail Care Kit", "Sunscreen Gel", "Hair Styling Dryer",
    "Yoga Mat Pro", "Steel Water Bottle", "Adjustable Dumbbells", "Cycling Helmet",
    "Cricket Bat Elite", "Football Training Ball", "Badminton Racket", "Running Waist Bag",
    "Resistance Band Kit", "Fitness Tracker Ring", "Sports Gym Bag", "Camping Lantern",
    "Organic Basmati Rice", "Cold Pressed Oil", "Premium Coffee Beans", "Green Tea Box",
    "Mixed Dry Fruits", "Breakfast Cereal", "Dark Chocolate Pack", "Honey Almond Granola",
    "Protein Snack Bars", "Herbal Masala Mix", "Whole Wheat Pasta", "Fruit Juice Combo",
    "Builder Blocks Set", "Remote Control Car", "Puzzle Brain Game", "Plush Teddy Bear",
    "Art Color Kit", "Science Experiment Box", "Wooden Train Set", "Mini Drone Toy",
    "Story Book Bundle", "Magnetic Tiles", "Kids Learning Tablet", "Board Game Classic",
    "Car Vacuum Cleaner", "Dashboard Phone Mount", "Microfiber Cloth Set", "Tyre Inflator",
    "Bike Helmet Matte", "Car Freshener Trio", "Jump Starter Kit", "Seat Cushion Support",
    "Motorbike Gloves", "Tool Socket Set", "Portable Air Pump", "Car Wash Shampoo",
    "Solar Garden Lights", "Pet Comfort Bed", "Wireless Doorbell", "Digital Luggage Scale",
  ];

  function imageFor(product, index) {
    const [category, icon, from, to] = categories[index % categories.length];
    const label = product.replace(/&/g, "and");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="${from}"/>
            <stop offset="1" stop-color="${to}"/>
          </linearGradient>
          <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".24"/>
          </filter>
        </defs>
        <rect width="640" height="640" rx="40" fill="#111827"/>
        <rect x="28" y="28" width="584" height="584" rx="34" fill="url(#g)" opacity=".95"/>
        <circle cx="500" cy="112" r="86" fill="#fff" opacity=".18"/>
        <circle cx="118" cy="512" r="112" fill="#fff" opacity=".14"/>
        <rect x="126" y="136" width="388" height="312" rx="34" fill="#fff" opacity=".88" filter="url(#s)"/>
        <text x="320" y="284" text-anchor="middle" font-family="Arial, sans-serif" font-size="92" fill="${to}">${icon}</text>
        <text x="320" y="504" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#fff">${label}</text>
        <text x="320" y="548" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#fff" opacity=".82">${category}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function productCard(product, index) {
    const [category] = categories[index % categories.length];
    const price = 299 + index * 73;
    const mrp = Math.round(price * (1.25 + (index % 5) * 0.08));
    const rating = (4.1 + (index % 9) / 10).toFixed(1);
    const discount = Math.max(15, Math.round(((mrp - price) / mrp) * 100));

    return `
      <div class="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant rounded-xl overflow-hidden group hover:border-primary transition-all flex flex-col h-full glass-card relative cursor-pointer" data-product-card="true" tabindex="0" role="button" aria-label="View ${product}">
        <div class="relative h-48 bg-surface-container overflow-hidden">
          <img alt="${product}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" src="${imageFor(product, index)}"/>
          <div class="absolute top-2 left-2 z-10">
            <span class="bg-primary text-on-primary text-[10px] font-bold px-xs py-[2px] rounded uppercase shadow-sm">${discount}% Off</span>
          </div>
          <div class="absolute top-2 right-2 flex flex-col gap-xs z-10">
            <button class="w-8 h-8 rounded-full bg-surface-container/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-error hover:scale-110 transition-all ripple" aria-label="Add ${product} to wishlist">
              <span class="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</span>
            </button>
          </div>
        </div>
        <div class="p-sm flex-1 flex flex-col">
          <div class="flex justify-between items-start mb-xs">
            <span class="text-on-surface-variant font-label-caps uppercase text-[10px]">${category}</span>
            <div class="flex items-center text-tertiary">
              <span class="material-symbols-outlined text-[14px]" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="text-[10px] ml-xs font-bold">${rating}</span>
            </div>
          </div>
          <h4 class="font-body-md font-semibold text-on-surface mb-xs line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">${product}</h4>
          <div class="mt-auto flex items-baseline gap-xs">
            <span class="font-headline-lg-mobile text-primary">Rs ${price.toLocaleString("en-IN")}</span>
            <span class="text-on-surface-variant line-through text-[12px] opacity-60">Rs ${mrp.toLocaleString("en-IN")}</span>
          </div>
          <button class="mt-sm bg-primary text-on-primary px-md py-xs rounded-full font-label-caps uppercase text-[10px] transition-all btn-shimmer ripple">Add to Cart</button>
        </div>
      </div>`;
  }

  function mountProducts() {
    const heading = Array.from(document.querySelectorAll("h2")).find((el) =>
      /featured selection/i.test(el.textContent || "")
    );
    const section = heading?.closest("section");
    const grid = section?.querySelector(".grid");
    if (!grid) return;

    const products = names.slice(0, 100);
    grid.className = "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-gutter";
    grid.innerHTML = products.map(productCard).join("");

    const subtitle = section.querySelector("p");
    if (subtitle) subtitle.textContent = "100 clickable products across electronics, fashion, home, beauty, sports, grocery, toys, and auto.";

    grid.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const card = event.target.closest("[data-product-card]");
      if (card) card.click();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountProducts);
  } else {
    mountProducts();
  }
})();
