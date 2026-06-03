(function () {
  const categories = [
    ["Grocery", "local_grocery_store"],
    ["Fashion", "checkroom"],
    ["Mobile", "smartphone"],
    ["Beauty", "spa"],
    ["Appliances", "kitchen"],
    ["Toys", "toys"],
    ["Food & Health", "health_and_safety"],
    ["Auto Accessories", "directions_car"],
    ["2 Wheelers", "electric_scooter"],
    ["Sports", "sports_soccer"],
    ["Books", "menu_book"],
    ["Furniture", "chair"],
  ];

  function categoryCard([name, icon], index) {
    const rotate = index % 2 === 0 ? "group-hover:rotate-6" : "group-hover:-rotate-6";
    const delay = `delay-${Math.min(400, 100 + (index % 4) * 100)}`;
    return `
      <a class="flex-shrink-0 flex flex-col items-center group cursor-pointer glass-card p-xs rounded-xl ${delay}" href="/product_listing_dark_mode/code.html?q=${encodeURIComponent(name)}" data-home-category="${name}">
        <div class="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant group-hover:bg-primary-container transition-all group-hover:border-primary ${rotate}">
          <span class="material-symbols-outlined text-primary group-hover:text-on-primary-container text-3xl" data-icon="${icon}">${icon}</span>
        </div>
        <span class="font-label-caps text-label-caps mt-sm text-on-surface-variant group-hover:text-primary transition-colors uppercase text-center max-w-[96px]">${name}</span>
      </a>`;
  }

  function mountCategories() {
    const heading = Array.from(document.querySelectorAll("h2")).find((el) =>
      /shop by categories/i.test(el.textContent || "")
    );
    const section = heading?.closest("section");
    const row = section?.querySelector(".flex.gap-md.overflow-x-auto");
    if (!row) return;
    row.innerHTML = categories.map(categoryCard).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountCategories);
  } else {
    mountCategories();
  }
})();
