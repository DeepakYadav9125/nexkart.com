(function () {
  const routes = {
    home: "/home_screen_dark_glassmorphism_live/code.html",
    listing: "/product_listing_dark_mode/code.html",
    detail: "/product_detail_dark_glassmorphism_branded/code.html",
    cart: "/shopping_cart_dark_glassmorphism_branded/code.html",
    account: "/my_account_dark_glassmorphism/code.html",
    payment: "/payment_gateway_dark_glassmorphism_branded/code.html",
    savedPayment: "/payment_gateway_saved_cards_dark_glassmorphism/code.html",
  };

  function go(path) {
    window.location.href = path;
  }

  function normalizedText(node) {
    return (node?.innerText || node?.textContent || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function iconText(node) {
    return Array.from(node.querySelectorAll(".material-symbols-outlined"))
      .map((icon) => (icon.dataset.icon || icon.textContent || "").trim().toLowerCase())
      .join(" ");
  }

  function ensureToast() {
    let toast = document.querySelector("[data-prototype-toast]");
    if (toast) return toast;

    toast = document.createElement("div");
    toast.dataset.prototypeToast = "true";
    toast.style.cssText = [
      "position:fixed",
      "left:50%",
      "bottom:88px",
      "transform:translateX(-50%) translateY(12px)",
      "z-index:9999",
      "max-width:min(92vw,420px)",
      "padding:12px 16px",
      "border-radius:12px",
      "background:rgba(20,20,20,.92)",
      "color:white",
      "box-shadow:0 16px 36px rgba(0,0,0,.28)",
      "font:600 13px/1.3 Inter, system-ui, sans-serif",
      "opacity:0",
      "pointer-events:none",
      "transition:opacity .2s ease, transform .2s ease",
      "text-align:center",
    ].join(";");
    document.body.appendChild(toast);
    return toast;
  }

  let toastTimer;
  function toast(message) {
    const el = ensureToast();
    el.textContent = message;
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-50%) translateY(12px)";
    }, 1600);
  }

  function looksLikeProductCard(el) {
    if (!el) return false;
    const text = normalizedText(el);
    return Boolean(el.querySelector("img") && (text.includes("off") || text.includes("nexkart assured") || text.includes("rs") || text.includes("₹")));
  }

  function productCardFrom(target) {
    let node = target.closest(".group, [class*='shadow'], [class*='card'], article, section, div");
    for (let i = 0; node && i < 7; i += 1) {
      if (looksLikeProductCard(node)) return node;
      node = node.parentElement;
    }
    return null;
  }

  function updateQuantity(button, delta) {
    const container = button.closest("div");
    const candidates = Array.from((container || document).querySelectorAll("span, div"))
      .filter((el) => /^\d+$/.test((el.textContent || "").trim()));
    const current = candidates.find((el) => Number(el.textContent.trim()) < 99);
    if (!current) {
      toast(delta > 0 ? "Quantity increased" : "Quantity updated");
      return;
    }
    const next = Math.max(1, Number(current.textContent.trim()) + delta);
    current.textContent = String(next);
    toast(`Quantity: ${next}`);
  }

  function toggleFavorite(button) {
    const icon = button.querySelector(".material-symbols-outlined") || button;
    const filled = String(icon.style.fontVariationSettings || "").includes("'FILL' 1");
    icon.style.fontVariationSettings = filled
      ? "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
      : "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24";
    button.classList.toggle("text-secondary", !filled);
    toast(filled ? "Removed from wishlist" : "Added to wishlist");
  }

  function handleClick(event) {
    if (event.target.closest("#adminLoginForm, #loginGate, #refreshBtn, #logoutBtn")) return;

    const clickable = event.target.closest("a, button, [role='button'], [data-logo-home], .group");
    if (!clickable) return;

    const text = normalizedText(clickable);
    const icons = iconText(clickable);
    const joined = `${text} ${icons}`;
    const href = clickable.getAttribute("href");
    const directButton = event.target.closest("button");

    if (href && href !== "#") return;
    event.preventDefault();

    if (clickable.dataset.homeCategory) {
      return go(`${routes.listing}?q=${encodeURIComponent(clickable.dataset.homeCategory)}`);
    }

    if (clickable.matches("[data-logo-home]")) return go(routes.home);

    if (clickable.matches("[data-product-card]") && !directButton) {
      return go(routes.detail);
    }

    if (joined.includes("arrow_back")) {
      if (window.history.length > 1) window.history.back();
      else go(routes.home);
      return;
    }

    if (joined.includes("home")) return go(routes.home);
    if (joined.includes("account") || joined.includes("person")) return go(routes.account);
    if (joined.includes("cart") || joined.includes("shopping_cart") || joined.includes("shopping_bag")) return go(routes.cart);
    const categoryRoutes = [
      ["grocery", "Grocery"], ["grosery", "Grocery"], ["groceries", "Grocery"],
      ["fashion", "Fashion"], ["fasion", "Fashion"],
      ["mobile", "Mobile"], ["smartphone", "Mobile"],
      ["beauty", "Beauty"], ["buetis", "Beauty"],
      ["appliance", "Appliances"],
      ["toys", "Toys"],
      ["food", "Food & Health"], ["health", "Food & Health"],
      ["auto accessories", "Auto Accessories"], ["auto", "Auto Accessories"],
      ["2 wheel", "2 Wheelers"], ["two wheel", "2 Wheelers"],
      ["sport", "Sports"],
      ["book", "Books"],
      ["furniture", "Furniture"],
    ];
    const matchedCategory = categoryRoutes.find(([needle]) => joined.includes(needle));
    if (matchedCategory) return go(`${routes.listing}?q=${encodeURIComponent(matchedCategory[1])}`);
    if (joined.includes("category") || joined.includes("categories") || joined.includes("grid_view")) return go(routes.listing);
    if (joined.includes("shop now") || joined.includes("view all") || joined.includes("view all products") || joined.includes("explore")) return go(routes.listing);
    if (joined.includes("checkout") || joined.includes("place order") || joined.includes("buy now")) return go(routes.payment);
    if (joined.includes("pay") || joined.includes("saved card")) return go(routes.savedPayment);
    if (joined.includes("add to cart")) return go(routes.cart);
    if (joined.includes("favorite")) return toggleFavorite(clickable);
    if (joined.includes("add") && icons.includes("add")) return updateQuantity(clickable, 1);
    if (joined.includes("remove") && icons.includes("remove")) return updateQuantity(clickable, -1);
    if (joined.includes("save for later")) return toast("Saved for later");
    if (joined.includes("filter") || joined.includes("sort") || joined.includes("brand") || joined.includes("price")) return toast("Filter option selected");
    if (joined.includes("notification")) return toast("No new notifications");
    if (joined.includes("search")) return toast("Type a search and press Enter");
    if (joined.includes("change")) return toast("Address selection opened");
    if (joined.includes("join now")) return go(routes.account);

    const card = productCardFrom(event.target);
    if (card && !directButton) return go(routes.detail);

    toast("Prototype action ready");
  }

  function handleKeydown(event) {
    if (event.key !== "Enter") return;
    const input = event.target.closest("input");
    if (!input) return;
    const query = input.value.trim();
    if (!query) {
      toast("Enter a product to search");
      return;
    }
    window.location.href = `${routes.listing}?q=${encodeURIComponent(query)}`;
  }

  function makeLogoClickable() {
    const candidates = [
      ...document.querySelectorAll("img[alt*='NexKart' i], img[alt*='logo' i]"),
      ...Array.from(document.querySelectorAll("h1, header span, nav span")).filter((el) =>
        /^nexkart$/i.test((el.textContent || "").trim())
      ),
    ];

    candidates.forEach((logo) => {
      if (logo.closest("a, button")) return;
      logo.dataset.logoHome = "true";
      logo.setAttribute("role", "button");
      logo.setAttribute("tabindex", "0");
      logo.setAttribute("aria-label", "Go to NexKart home");
      logo.style.cursor = "pointer";
      logo.addEventListener("click", () => go(routes.home));
      logo.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          go(routes.home);
        }
      });
    });
  }

  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", makeLogoClickable);
  } else {
    makeLogoClickable();
  }
})();
