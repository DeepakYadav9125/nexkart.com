(function () {
  const sections = [
    {
      type: "hero",
      cards: [
        ["Phone (4a) series", "From Rs 34,199", "smartphone", "#f8fafc", "#60a5fa"],
        ["Decor favs", "Under Rs 299", "interests", "#facc15", "#f97316"],
        ["Top smartwatch deals", "From Rs 899", "watch", "#fde68a", "#ea580c"],
      ],
    },
    {
      title: "Interesting finds",
      theme: "yellow",
      products: [
        ["Explore Now", "Min. 70% Off", "checkroom", "#e5e7eb", "#111827"],
        ["Most Loved", "Top Rated", "earbuds", "#dbeafe", "#1d4ed8"],
        ["Most Loved", "From Rs 6,999", "smartphone", "#bfdbfe", "#2563eb"],
        ["New Range", "Special offer", "toys", "#fee2e2", "#dc2626"],
      ],
    },
    {
      title: "Shop for a Cool Summer",
      theme: "orange",
      products: [
        ["Face Wash", "Min. 50% Off", "spa", "#dbeafe", "#0f172a"],
        ["Men's Slippers & Flip Flops", "Min. 70% Off", "steps", "#dcfce7", "#15803d"],
        ["Men's Casual Shoes", "Min. 70% Off", "footprint", "#e5e7eb", "#475569"],
        ["Men's Track Pants", "Min. 50% Off", "checkroom", "#dbeafe", "#1e40af"],
      ],
    },
    {
      title: "Trends you may like",
      theme: "yellow",
      products: [
        ["Studded", "Premium watches", "watch", "#fef3c7", "#b45309"],
        ["Biophilic Decor", "Fresh home style", "local_florist", "#dcfce7", "#15803d"],
        ["SmellDelicious", "Perfume deals", "science", "#fee2e2", "#be123c"],
        ["IndieInspo", "Ethnic fashion", "styler", "#fde68a", "#92400e"],
      ],
    },
    {
      title: "Home Decor & Furnishing",
      theme: "orange",
      products: [
        ["Key Holders", "Special offer", "key", "#dbeafe", "#1d4ed8"],
        ["Wall Clocks", "Min. 50% Off", "schedule", "#fef3c7", "#b45309"],
        ["Torches", "Specials", "flashlight_on", "#e5e7eb", "#111827"],
        ["Mosquito Nets", "Top Sellers", "bed", "#dcfce7", "#15803d"],
      ],
    },
    {
      title: "Appliance for Cool Summer",
      theme: "orange",
      products: [
        ["True Wireless", "Min. 50% Off", "earbuds", "#e5e7eb", "#111827"],
        ["Speakers", "Min. 50% Off", "speaker", "#f3f4f6", "#374151"],
        ["Neckband", "Min. 50% Off", "headphones", "#e0f2fe", "#0369a1"],
        ["Wireless Headphones", "Min. 50% Off", "headphones", "#f3f4f6", "#111827"],
      ],
    },
  ];

  function image(title, icon, from, to) {
    const safe = title.replace(/&/g, "and");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="${from}"/>
            <stop offset="1" stop-color="${to}"/>
          </linearGradient>
        </defs>
        <rect width="640" height="400" rx="18" fill="#f8fafc"/>
        <rect x="16" y="16" width="608" height="368" rx="16" fill="url(#g)" opacity=".92"/>
        <circle cx="520" cy="70" r="72" fill="#fff" opacity=".18"/>
        <rect x="88" y="62" width="464" height="230" rx="18" fill="#fff" opacity=".86"/>
        <text x="320" y="210" text-anchor="middle" font-family="Arial, sans-serif" font-size="82" fill="${to}">${icon}</text>
        <text x="320" y="344" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#fff">${safe}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function heroCard([title, subtitle, icon, from, to]) {
    return `
      <a class="min-w-[280px] md:min-w-0 rounded-xl overflow-hidden bg-white text-slate-950 shadow-sm block" href="/product_listing_dark_mode/code.html?q=${encodeURIComponent(title)}">
        <img class="w-full h-44 object-cover" alt="${title}" src="${image(title, icon, from, to)}"/>
        <div class="p-sm">
          <h3 class="font-black text-xl">${title}</h3>
          <p class="font-bold text-slate-700">${subtitle}</p>
        </div>
      </a>`;
  }

  function productCard([title, subtitle, icon, from, to]) {
    return `
      <a class="bg-white rounded-lg overflow-hidden text-slate-950 block" href="/product_listing_dark_mode/code.html?q=${encodeURIComponent(title)}">
        <img class="w-full h-40 object-cover" alt="${title}" src="${image(title, icon, from, to)}"/>
        <div class="p-xs">
          <p class="font-medium leading-tight">${title}</p>
          <p class="font-black leading-tight">${subtitle}</p>
        </div>
      </a>`;
  }

  function dealSection(section) {
    const isYellow = section.theme === "yellow";
    return `
      <section class="px-margin-mobile md:px-margin-desktop py-md reveal active" data-after-category-section>
        <div class="${isYellow ? "bg-yellow-300" : "bg-orange-600"} rounded-xl p-sm md:p-md">
          <div class="flex items-center justify-between mb-sm">
            <h2 class="font-headline-lg-mobile md:font-headline-lg text-[24px] font-black ${isYellow ? "text-black" : "text-white"}">${section.title}</h2>
            ${isYellow ? "" : '<span class="material-symbols-outlined bg-white text-black rounded-full px-2 py-1">arrow_forward</span>'}
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-sm bg-white/90 rounded-xl p-xs">
            ${section.products.map(productCard).join("")}
          </div>
        </div>
      </section>`;
  }

  function mount() {
    const categoryHeading = Array.from(document.querySelectorAll("h2")).find((el) =>
      /shop by categories/i.test(el.textContent || "")
    );
    const categorySection = categoryHeading?.closest("section");
    if (!categorySection || document.querySelector("[data-after-category-section]")) return;

    const html = `
      <section class="px-margin-mobile md:px-margin-desktop py-md reveal active" data-after-category-section>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-md overflow-x-auto">
          ${sections[0].cards.map(heroCard).join("")}
        </div>
      </section>
      ${sections.slice(1).map(dealSection).join("")}`;

    categorySection.insertAdjacentHTML("afterend", html);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
