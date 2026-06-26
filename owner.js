const OWNER_STORAGE_KEY = "yinyunqing-owner-content";
const OWNER_SESSION_KEY = "yinyunqing-owner-session";
const OWNER_USERNAME = "YINYUNQING";
const OWNER_PASSWORD_HASH = "4babb458e978fc87cb236d620d6d21395c3a995768dbf17a08812056fc020e85";

const loginView = document.querySelector("[data-owner-login]");
const dashboardView = document.querySelector("[data-owner-dashboard]");
const loginForm = document.querySelector("[data-owner-login-form]");
const loginMessage = document.querySelector("[data-owner-login-message]");
const exportOutput = document.querySelector("[data-owner-export-output]");

function createInitialContent() {
  return {
    experience: [],
    featured: [],
    music: [],
    illustration: [],
  };
}

function loadOwnerContent() {
  try {
    return { ...createInitialContent(), ...JSON.parse(localStorage.getItem(OWNER_STORAGE_KEY)) };
  } catch {
    return createInitialContent();
  }
}

function saveOwnerContent(content) {
  localStorage.setItem(OWNER_STORAGE_KEY, JSON.stringify(content));
}

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function setLoggedIn(isLoggedIn) {
  loginView.hidden = isLoggedIn;
  dashboardView.hidden = !isLoggedIn;
  if (isLoggedIn) renderOwnerLists();
}

function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries([...formData.entries()].map(([key, value]) => [key, String(value).trim()]));
}

function addRecord(type, record) {
  const content = loadOwnerContent();
  content[type].unshift({
    ...record,
    id: `${type}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
  });
  saveOwnerContent(content);
  renderOwnerLists();
}

function deleteRecord(type, id) {
  const content = loadOwnerContent();
  content[type] = content[type].filter((item) => item.id !== id);
  saveOwnerContent(content);
  renderOwnerLists();
}

function renderOwnerLists() {
  const content = loadOwnerContent();
  document.querySelectorAll("[data-owner-list]").forEach((node) => {
    const type = node.dataset.ownerList;
    const items = content[type] || [];
    if (!items.length) {
      node.innerHTML = '<p class="owner-list-empty">暂无新增内容</p>';
      return;
    }

    node.innerHTML = items
      .map((item) => {
        const title = item.title || item.date || "未命名";
        const detail = item.role || item.meta || item.description || item.quote || item.url || "";
        return `
          <article class="owner-list-item">
            <div>
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(detail)}</p>
            </div>
            <button type="button" data-owner-delete="${escapeHtml(item.id)}" data-owner-type="${type}">删除</button>
          </article>
        `;
      })
      .join("");
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = getFormData(loginForm);
  const passwordHash = await sha256(data.password || "");

  if (data.username === OWNER_USERNAME && passwordHash === OWNER_PASSWORD_HASH) {
    sessionStorage.setItem(OWNER_SESSION_KEY, "active");
    setLoggedIn(true);
    loginForm.reset();
    return;
  }

  loginMessage.textContent = "账号或密码不正确";
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-owner-form]");
  if (!form) return;
  event.preventDefault();
  addRecord(form.dataset.ownerForm, getFormData(form));
  form.reset();
});

document.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-owner-delete]");
  if (deleteButton) {
    deleteRecord(deleteButton.dataset.ownerType, deleteButton.dataset.ownerDelete);
    return;
  }

  if (event.target.closest("[data-owner-logout]")) {
    sessionStorage.removeItem(OWNER_SESSION_KEY);
    setLoggedIn(false);
    return;
  }

  if (event.target.closest("[data-owner-export]")) {
    exportOutput.hidden = false;
    exportOutput.value = JSON.stringify(loadOwnerContent(), null, 2);
  }
});

setLoggedIn(sessionStorage.getItem(OWNER_SESSION_KEY) === "active");
