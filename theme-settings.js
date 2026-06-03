(function () {
  const storageKey = "nexkart-theme-mode";
  const modes = new Set(["dark", "light"]);

  function currentMode() {
    const saved = localStorage.getItem(storageKey);
    return modes.has(saved) ? saved : "dark";
  }

  function applyMode(mode) {
    const next = modes.has(mode) ? mode : "dark";
    document.documentElement.classList.toggle("nk-light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem(storageKey, next);
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.dataset.active = String(button.dataset.themeChoice === next);
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === next));
    });
  }

  function modalMarkup() {
    return `
      <div class="nk-settings-overlay" data-settings-overlay aria-hidden="true">
        <section class="nk-settings-panel" role="dialog" aria-modal="true" aria-labelledby="nk-settings-title">
          <div class="nk-settings-head">
            <h2 class="nk-settings-title" id="nk-settings-title">Settings</h2>
            <button class="nk-settings-close" type="button" data-settings-close aria-label="Close settings">
              <span class="material-symbols-outlined" data-icon="close">close</span>
            </button>
          </div>
          <div class="nk-settings-menu" role="tablist" aria-label="Settings options">
            <button class="nk-settings-item" type="button" data-settings-view-button="mode" data-active="true">
              <span class="material-symbols-outlined" data-icon="contrast">contrast</span>
              <span class="nk-settings-item-text">
                <span class="nk-settings-item-title">Mode</span>
                <span class="nk-settings-item-note">White and dark theme</span>
              </span>
            </button>
            <button class="nk-settings-item" type="button" data-settings-view-button="support">
              <span class="material-symbols-outlined" data-icon="support_agent">support_agent</span>
              <span class="nk-settings-item-text">
                <span class="nk-settings-item-title">Customer Support</span>
                <span class="nk-settings-item-note">Get help with orders</span>
              </span>
            </button>
            <button class="nk-settings-item" type="button" data-settings-view-button="complaint">
              <span class="material-symbols-outlined" data-icon="report">report</span>
              <span class="nk-settings-item-text">
                <span class="nk-settings-item-title">Complaint</span>
                <span class="nk-settings-item-note">Report a problem</span>
              </span>
            </button>
            <button class="nk-settings-item" type="button" data-settings-view-button="feedback">
              <span class="material-symbols-outlined" data-icon="rate_review">rate_review</span>
              <span class="nk-settings-item-text">
                <span class="nk-settings-item-title">Feedback</span>
                <span class="nk-settings-item-note">Share your experience</span>
              </span>
            </button>
            <button class="nk-settings-item" type="button" data-settings-view-button="help">
              <span class="material-symbols-outlined" data-icon="help">help</span>
              <span class="nk-settings-item-text">
                <span class="nk-settings-item-title">Help Center</span>
                <span class="nk-settings-item-note">FAQs and app info</span>
              </span>
            </button>
          </div>
          <div class="nk-settings-view" data-settings-view="mode" data-active="true">
            <div class="nk-theme-options" role="group" aria-label="Theme mode">
              <button class="nk-theme-option" type="button" data-theme-choice="light">
                <span class="nk-theme-swatch light"></span>
                <span class="nk-theme-name">White Mode</span>
                <span class="nk-theme-note">Bright store view</span>
              </button>
              <button class="nk-theme-option" type="button" data-theme-choice="dark">
                <span class="nk-theme-swatch dark"></span>
                <span class="nk-theme-name">Dark Mode</span>
                <span class="nk-theme-note">Glass dark view</span>
              </button>
            </div>
          </div>
          <div class="nk-settings-view" data-settings-view="support">
            <p class="nk-settings-copy">Customer support is available for order tracking, payment help, returns, and product questions.</p>
            <form class="nk-settings-form" data-settings-form="support">
              <input placeholder="Order ID or phone number" aria-label="Order ID or phone number"/>
              <textarea placeholder="How can we help?" aria-label="Support message"></textarea>
              <button class="nk-settings-submit" type="submit">SEND SUPPORT REQUEST</button>
            </form>
          </div>
          <div class="nk-settings-view" data-settings-view="complaint">
            <p class="nk-settings-copy">Submit a complaint for delivery, refund, seller, or product quality issues.</p>
            <form class="nk-settings-form" data-settings-form="complaint">
              <input placeholder="Complaint subject" aria-label="Complaint subject"/>
              <textarea placeholder="Describe the issue" aria-label="Complaint details"></textarea>
              <button class="nk-settings-submit" type="submit">SUBMIT COMPLAINT</button>
            </form>
          </div>
          <div class="nk-settings-view" data-settings-view="feedback">
            <p class="nk-settings-copy">Tell us what should feel better in NexKart.</p>
            <form class="nk-settings-form" data-settings-form="feedback">
              <input placeholder="Your rating / topic" aria-label="Feedback topic"/>
              <textarea placeholder="Write feedback" aria-label="Feedback message"></textarea>
              <button class="nk-settings-submit" type="submit">SEND FEEDBACK</button>
            </form>
          </div>
          <div class="nk-settings-view" data-settings-view="help">
            <p class="nk-settings-copy">NexKart Help Center</p>
            <p class="nk-settings-copy">Version 1.0 prototype. Common help topics: orders, cancellation, refund status, payments, and account safety.</p>
          </div>
        </section>
      </div>`;
  }

  function openSettings() {
    const overlay = document.querySelector("[data-settings-overlay]");
    if (!overlay) return;
    overlay.dataset.open = "true";
    overlay.setAttribute("aria-hidden", "false");
    overlay.querySelector("[data-theme-choice]")?.focus();
  }

  function closeSettings() {
    const overlay = document.querySelector("[data-settings-overlay]");
    if (!overlay) return;
    overlay.dataset.open = "false";
    overlay.setAttribute("aria-hidden", "true");
  }

  function isMenuButton(button) {
    const iconText = Array.from(button.querySelectorAll(".material-symbols-outlined"))
      .map((icon) => (icon.dataset.icon || icon.textContent || "").trim().toLowerCase())
      .join(" ");
    return iconText.includes("menu") || iconText.includes("settings");
  }

  function addHeaderSettingsButton() {
    const header = document.querySelector("header");
    if (!header || header.querySelector("[data-settings-open]")) return;
    const actions = header.lastElementChild || header;
    const button = document.createElement("button");
    button.className = "nk-settings-button";
    button.type = "button";
    button.dataset.settingsOpen = "true";
    button.setAttribute("aria-label", "Open settings");
    button.innerHTML = '<span class="material-symbols-outlined" data-icon="settings">settings</span>';
    actions.appendChild(button);
  }

  function showView(view) {
    document.querySelectorAll("[data-settings-view]").forEach((panel) => {
      panel.dataset.active = String(panel.dataset.settingsView === view);
    });
    document.querySelectorAll("[data-settings-view-button]").forEach((button) => {
      button.dataset.active = String(button.dataset.settingsViewButton === view);
    });
  }

  function toast(message) {
    let el = document.querySelector("[data-prototype-toast]");
    if (!el) {
      el = document.createElement("div");
      el.dataset.prototypeToast = "true";
      el.style.cssText = "position:fixed;left:50%;bottom:88px;transform:translateX(-50%);z-index:10001;max-width:min(92vw,420px);padding:12px 16px;border-radius:12px;background:rgba(20,20,20,.92);color:white;box-shadow:0 16px 36px rgba(0,0,0,.28);font:700 13px/1.3 Inter,system-ui,sans-serif;text-align:center;opacity:0;transition:opacity .2s ease";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = "1";
    clearTimeout(window.nkSettingsToastTimer);
    window.nkSettingsToastTimer = setTimeout(() => {
      el.style.opacity = "0";
    }, 1700);
  }

  function init() {
    if (!document.querySelector("[data-settings-overlay]")) {
      document.body.insertAdjacentHTML("beforeend", modalMarkup());
    }
    addHeaderSettingsButton();
    applyMode(currentMode());

    document.addEventListener("click", (event) => {
      const settingsButton = event.target.closest("[data-settings-open]");
      if (settingsButton) {
        event.preventDefault();
        openSettings();
        return;
      }

      const button = event.target.closest("button");
      if (button && isMenuButton(button)) {
        event.preventDefault();
        openSettings();
        return;
      }

      if (event.target.closest("[data-settings-close]")) {
        event.preventDefault();
        closeSettings();
        return;
      }

      if (event.target.matches("[data-settings-overlay]")) {
        closeSettings();
        return;
      }

      const viewButton = event.target.closest("[data-settings-view-button]");
      if (viewButton) {
        event.preventDefault();
        showView(viewButton.dataset.settingsViewButton);
        return;
      }

      const theme = event.target.closest("[data-theme-choice]");
      if (theme) {
        event.preventDefault();
        applyMode(theme.dataset.themeChoice);
      }
    });

    document.addEventListener("submit", (event) => {
      const form = event.target.closest("[data-settings-form]");
      if (!form) return;
      event.preventDefault();
      const type = form.dataset.settingsForm;
      const labels = {
        support: "Support request sent",
        complaint: "Complaint submitted",
        feedback: "Feedback sent",
      };
      form.reset();
      toast(labels[type] || "Submitted");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSettings();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
