(function () {
  const categories = [
    "Grocery",
    "Fashion",
    "Mobile",
    "Beauty",
    "Appliances",
    "Toys",
    "Food & Health",
    "Auto Accessories",
    "2 Wheelers",
    "Sports",
    "Books",
    "Furniture",
  ];

  const catalog = {
    grocery: [
      ["Organic Basmati Rice", "5 kg long grain rice", 699, 899, "rice_bowl", "#bef264", "#4d7c0f"],
      ["Cold Pressed Groundnut Oil", "1 L pure cooking oil", 289, 349, "water_drop", "#fde68a", "#b45309"],
      ["Premium Coffee Beans", "Arabica roast 500 g", 449, 599, "coffee", "#fdba74", "#7c2d12"],
      ["Green Tea Box", "Classic wellness tea", 199, 299, "emoji_food_beverage", "#86efac", "#15803d"],
      ["Mixed Dry Fruits", "Almonds, cashew and raisins", 599, 799, "nutrition", "#fda4af", "#be123c"],
      ["Whole Wheat Pasta", "Italian style pasta", 159, 220, "ramen_dining", "#fcd34d", "#92400e"],
    ],
    fashion: [
      ["Urban Denim Jacket", "Washed casual jacket", 1299, 2499, "checkroom", "#fda4af", "#be123c"],
      ["Classic Cotton Shirt", "Breathable formal shirt", 799, 1499, "styler", "#93c5fd", "#1d4ed8"],
      ["AirFlex Sneakers", "Lightweight daily sneakers", 1799, 2999, "steps", "#fdba74", "#c2410c"],
      ["Canvas Backpack", "Office and college backpack", 999, 1699, "backpack", "#c4b5fd", "#6d28d9"],
      ["Aviator Sunglasses", "UV protected metal frame", 699, 1299, "visibility", "#fde68a", "#b45309"],
      ["Formal Oxford Shoes", "Polished office footwear", 2199, 3499, "footprint", "#d6d3d1", "#44403c"],
    ],
    mobile: [
      ["NexTech Ultra Pro 5G", "Flagship phone with 200MP camera", 74999, 89999, "smartphone", "#7dd3fc", "#2563eb"],
      ["Aura Zenith Fold", "Foldable display smartphone", 119999, 139999, "phone_iphone", "#c4b5fd", "#6d28d9"],
      ["NexTech Lite SE", "Budget 5G daily phone", 18999, 24999, "phone_android", "#86efac", "#15803d"],
      ["CloudPods Earbuds", "ANC true wireless earbuds", 2499, 4999, "earbuds", "#f0abfc", "#a21caf"],
      ["SwiftCharge Power Bank", "20000mAh fast charge", 1499, 2499, "battery_charging_full", "#fde68a", "#b45309"],
      ["Tempered Glass Pack", "Edge-to-edge screen guard", 299, 599, "security", "#bae6fd", "#0284c7"],
    ],
    beauty: [
      ["HydraGlow Serum", "Vitamin C daily face serum", 599, 999, "spa", "#f0abfc", "#a21caf"],
      ["Matte Lip Color", "Long wear lipstick", 399, 699, "brush", "#fda4af", "#be123c"],
      ["Charcoal Face Wash", "Deep cleanse face wash", 249, 399, "face", "#d4d4d8", "#3f3f46"],
      ["Silk Repair Shampoo", "Keratin smooth shampoo", 349, 549, "shower", "#93c5fd", "#1d4ed8"],
      ["Aloe Body Lotion", "Hydrating body lotion", 299, 499, "local_florist", "#86efac", "#15803d"],
      ["Makeup Brush Set", "12 piece brush kit", 799, 1299, "palette", "#f9a8d4", "#be185d"],
    ],
    appliances: [
      ["Smart LED TV 43", "4K streaming smart TV", 24999, 34999, "tv", "#7dd3fc", "#2563eb"],
      ["Front Load Washer", "7 kg inverter washing machine", 31999, 42999, "local_laundry_service", "#93c5fd", "#1d4ed8"],
      ["Double Door Fridge", "Convertible cooling refrigerator", 28999, 36999, "kitchen", "#a7f3d0", "#047857"],
      ["Microwave Oven", "Convection oven 28 L", 10999, 15999, "microwave", "#fdba74", "#c2410c"],
      ["Air Conditioner", "1.5 ton split AC", 35999, 46999, "ac_unit", "#bae6fd", "#0284c7"],
      ["Mixer Grinder", "750W kitchen mixer", 2499, 3999, "blender", "#fde68a", "#b45309"],
    ],
    toys: [
      ["Builder Blocks Set", "Creative block set for kids", 899, 1499, "toys", "#fde68a", "#b45309"],
      ["Remote Control Car", "Rechargeable racing car", 1299, 2199, "directions_car", "#fca5a5", "#dc2626"],
      ["Puzzle Brain Game", "STEM logic puzzle", 399, 699, "extension", "#c4b5fd", "#6d28d9"],
      ["Plush Teddy Bear", "Soft cuddle toy", 599, 999, "sentiment_satisfied", "#f9a8d4", "#be185d"],
      ["Science Experiment Box", "DIY learning kit", 999, 1599, "science", "#86efac", "#15803d"],
      ["Mini Drone Toy", "Indoor flying toy", 2499, 3999, "flight", "#93c5fd", "#1d4ed8"],
    ],
    "food-health": [
      ["Whey Protein Pack", "Chocolate protein 1 kg", 1999, 2999, "fitness_center", "#93c5fd", "#1d4ed8"],
      ["Multivitamin Tablets", "Daily wellness supplement", 499, 799, "medication", "#86efac", "#15803d"],
      ["Organic Honey", "Pure forest honey", 299, 499, "hive", "#fde68a", "#b45309"],
      ["Diabetic Care Kit", "Glucose monitor bundle", 1499, 2499, "health_and_safety", "#fca5a5", "#dc2626"],
      ["Yoga Wellness Tea", "Caffeine-free herbal tea", 249, 399, "emoji_food_beverage", "#bef264", "#4d7c0f"],
      ["Protein Snack Bars", "Pack of 6 energy bars", 399, 549, "nutrition", "#fdba74", "#c2410c"],
    ],
    "auto-accessories": [
      ["Car Vacuum Cleaner", "Portable high-suction vacuum", 1599, 2499, "cleaning_services", "#c4b5fd", "#6d28d9"],
      ["Dashboard Phone Mount", "360 degree magnetic holder", 399, 799, "settings_cell", "#93c5fd", "#1d4ed8"],
      ["Tyre Inflator", "Digital air compressor", 1999, 2999, "tire_repair", "#fdba74", "#c2410c"],
      ["Car Freshener Trio", "Long lasting fragrance", 249, 399, "air", "#86efac", "#15803d"],
      ["Jump Starter Kit", "Emergency battery booster", 3499, 4999, "bolt", "#fde68a", "#b45309"],
      ["Car Wash Shampoo", "Glossy foam cleaner", 349, 599, "local_car_wash", "#7dd3fc", "#2563eb"],
    ],
    "2-wheelers": [
      ["Electric Scooter Lite", "City commute e-scooter", 64999, 79999, "electric_scooter", "#86efac", "#15803d"],
      ["Bike Helmet Matte", "ISI certified helmet", 1299, 2499, "sports_motorsports", "#d6d3d1", "#44403c"],
      ["Motorbike Gloves", "All-weather riding gloves", 899, 1499, "back_hand", "#fca5a5", "#dc2626"],
      ["Scooter Rain Cover", "Waterproof vehicle cover", 699, 999, "rainy", "#93c5fd", "#1d4ed8"],
      ["Bike Chain Lube", "Smooth ride lubricant", 249, 399, "settings", "#fde68a", "#b45309"],
      ["Riding Jacket", "Armored biker jacket", 3999, 5999, "motorcycle", "#c4b5fd", "#6d28d9"],
    ],
    sports: [
      ["Yoga Mat Pro", "Anti-skid exercise mat", 799, 1299, "self_improvement", "#86efac", "#15803d"],
      ["Adjustable Dumbbells", "Home strength set", 2499, 3999, "fitness_center", "#d6d3d1", "#44403c"],
      ["Cricket Bat Elite", "English willow profile", 2999, 4999, "sports_cricket", "#fde68a", "#b45309"],
      ["Football Training Ball", "Match size football", 699, 1199, "sports_soccer", "#fdba74", "#c2410c"],
      ["Badminton Racket", "Carbon lightweight racket", 1299, 2199, "sports_tennis", "#93c5fd", "#1d4ed8"],
      ["Camping Lantern", "Rechargeable outdoor light", 999, 1499, "camping", "#facc15", "#854d0e"],
    ],
    books: [
      ["Atomic Habits", "Self-improvement bestseller", 399, 599, "menu_book", "#fde68a", "#b45309"],
      ["Business Strategy Guide", "Modern startup playbook", 499, 799, "auto_stories", "#93c5fd", "#1d4ed8"],
      ["Kids Story Bundle", "Illustrated story set", 699, 999, "book", "#f9a8d4", "#be185d"],
      ["Cookbook Classics", "Home recipes collection", 349, 599, "restaurant_menu", "#fdba74", "#c2410c"],
      ["Exam Prep Notebook", "Practice question bank", 299, 499, "school", "#86efac", "#15803d"],
      ["Mystery Novel Pack", "Three thriller novels", 599, 899, "local_library", "#c4b5fd", "#6d28d9"],
    ],
    furniture: [
      ["Ergo Office Chair", "Lumbar support work chair", 6999, 9999, "chair", "#93c5fd", "#1d4ed8"],
      ["Nordic Coffee Table", "Minimal wooden table", 3499, 5499, "table_restaurant", "#fdba74", "#92400e"],
      ["Queen Storage Bed", "Hydraulic storage bed", 24999, 34999, "bed", "#c4b5fd", "#6d28d9"],
      ["Compact Bookshelf", "Five-tier shelf unit", 2999, 4499, "shelves", "#86efac", "#15803d"],
      ["Recliner Sofa", "Single seater recliner", 15999, 22999, "weekend", "#fda4af", "#be123c"],
      ["Dining Chair Pair", "Set of two chairs", 3999, 5999, "chair_alt", "#fde68a", "#b45309"],
    ],
  };

  const aliases = new Map([
    ["grosery", "grocery"],
    ["groceries", "grocery"],
    ["kirana", "grocery"],
    ["fasion", "fashion"],
    ["fashion", "fashion"],
    ["mobile", "mobile"],
    ["mobiles", "mobile"],
    ["smartphones", "mobile"],
    ["beauty", "beauty"],
    ["buetis", "beauty"],
    ["beauties", "beauty"],
    ["appliances", "appliances"],
    ["toys", "toys"],
    ["food & health", "food-health"],
    ["food and health", "food-health"],
    ["food health", "food-health"],
    ["health", "food-health"],
    ["auto accessories", "auto-accessories"],
    ["auto", "auto-accessories"],
    ["2 wheels", "2-wheelers"],
    ["2 wheelers", "2-wheelers"],
    ["two wheelers", "2-wheelers"],
    ["sport", "sports"],
    ["sports", "sports"],
    ["book", "books"],
    ["books", "books"],
    ["furniture", "furniture"],
  ]);

  function isListingPage() {
    return /product_listing/i.test(location.pathname);
  }

  function searchQuery() {
    return new URLSearchParams(location.search).get("q") || "";
  }

  function slugFor(value) {
    const normalized = value.trim().toLowerCase().replace(/\s+/g, " ");
    if (aliases.has(normalized)) return aliases.get(normalized);
    const slug = normalized.replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return aliases.get(slug) || slug;
  }

  function labelFor(slug) {
    return categories.find((category) => slugFor(category) === slug) || "Mobile";
  }

  function svgImage(name, icon, from, to, category) {
    const safe = name.replace(/&/g, "and");
    const safeCategory = category.replace(/&/g, "and");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="720" height="540" viewBox="0 0 720 540">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="${from}"/>
            <stop offset="1" stop-color="${to}"/>
          </linearGradient>
        </defs>
        <rect width="720" height="540" rx="34" fill="#111827"/>
        <rect x="26" y="26" width="668" height="488" rx="30" fill="url(#g)"/>
        <circle cx="588" cy="92" r="78" fill="#fff" opacity=".18"/>
        <circle cx="118" cy="432" r="104" fill="#fff" opacity=".16"/>
        <rect x="170" y="108" width="380" height="230" rx="30" fill="#fff" opacity=".88"/>
        <text x="360" y="252" text-anchor="middle" font-family="Arial, sans-serif" font-size="86" fill="${to}">${icon}</text>
        <text x="360" y="416" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="800" fill="#fff">${safe}</text>
        <text x="360" y="462" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#fff" opacity=".82">${safeCategory}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function card(category, product, index) {
    const [name, detail, price, mrp, icon, from, to] = product;
    const discount = Math.round(((mrp - price) / mrp) * 100);
    const rating = (4.2 + (index % 7) / 10).toFixed(1);
    return `
      <div class="group bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" data-product-card="true" tabindex="0" role="button" aria-label="View ${name}">
        <div class="relative aspect-[4/3] bg-surface-container overflow-hidden">
          <img alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${svgImage(name, icon, from, to, category)}"/>
          <div class="absolute top-xs left-xs bg-primary-container text-on-primary-container font-label-caps text-[10px] px-base py-1 rounded-sm">${discount}% OFF</div>
          <button class="absolute top-xs right-xs bg-background/80 p-xs rounded-full hover:bg-background text-on-surface-variant hover:text-error transition-colors" aria-label="Wishlist ${name}">
            <span class="material-symbols-outlined" data-icon="favorite">favorite</span>
          </button>
        </div>
        <div class="p-md">
          <div class="flex items-center gap-xs mb-xs">
            <span class="font-label-caps text-label-caps text-primary bg-primary-container/20 px-xs py-0.5 rounded">${category}</span>
            <div class="flex items-center ml-auto">
              <span class="material-symbols-outlined text-[14px] text-tertiary filled-icon" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="text-body-sm font-bold ml-1 text-on-surface">${rating}</span>
              <span class="text-body-sm text-on-surface-variant ml-1">(${420 + index * 37})</span>
            </div>
          </div>
          <h3 class="font-headline-lg-mobile text-body-md font-bold mb-xs text-on-surface group-hover:text-primary transition-colors">${name}</h3>
          <p class="text-body-sm text-on-surface-variant mb-md line-clamp-2">${detail}</p>
          <div class="flex items-end gap-sm">
            <span class="font-headline-lg text-primary">Rs ${price.toLocaleString("en-IN")}</span>
            <span class="text-body-sm text-on-surface-variant line-through mb-1">Rs ${mrp.toLocaleString("en-IN")}</span>
          </div>
          <button class="w-full mt-md bg-primary hover:bg-primary-container text-on-primary font-label-caps py-xs rounded-lg flex items-center justify-center gap-xs active:scale-95 transition-all">
            <span class="material-symbols-outlined text-[20px]" data-icon="add_shopping_cart">add_shopping_cart</span>
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>`;
  }

  function categoryStrip(activeSlug) {
    return `
      <section class="mb-md" data-category-strip>
        <h3 class="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-xs">Categories</h3>
        <div class="flex gap-xs overflow-x-auto pb-sm hide-scrollbar">
          ${categories.map((category) => {
            const slug = slugFor(category);
            const active = slug === activeSlug;
            return `<button class="px-md py-xs rounded-full border font-label-caps whitespace-nowrap transition-all ${active ? "bg-primary text-on-primary border-primary" : "bg-surface-container-highest border-outline-variant text-on-surface"}" data-category-link="${category}">${category}</button>`;
          }).join("")}
        </div>
      </section>`;
  }

  function mount() {
    if (!isListingPage()) return;

    const query = searchQuery();
    const activeSlug = catalog[slugFor(query)] ? slugFor(query) : "mobile";
    const activeLabel = labelFor(activeSlug);
    const products = catalog[activeSlug] || catalog.mobile;
    const grid = document.querySelector("main .grid.grid-cols-1");
    if (!grid) return;

    const chips = document.querySelector(".lg\\:hidden.flex.gap-xs");
    const insertAfter = chips?.previousElementSibling || null;
    if (chips) chips.remove();

    document.querySelector("[data-category-strip]")?.remove();

    grid.innerHTML = products.map((product, index) => card(activeLabel, product, index)).join("");

    const title = document.querySelector("main h2");
    if (title) title.textContent = `Showing results for "${activeLabel}"`;

    const count = title?.parentElement?.querySelector("p");
    if (count) count.textContent = `${products.length} ${activeLabel.toLowerCase()} items found`;

    const activeCrumb = document.querySelector("main nav .text-primary");
    if (activeCrumb) activeCrumb.textContent = activeLabel;

    document.querySelectorAll("[data-category-link]").forEach((button) => {
      button.addEventListener("click", () => {
        location.href = `/product_listing_dark_mode/code.html?q=${encodeURIComponent(button.dataset.categoryLink)}`;
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
