// localStorage-backed async wrapper. Falls back to in-memory if storage is unavailable.
const NS = 'bchfinal:';

const memory = new Map();

const ls = (() => {
  try {
    const t = '__t__';
    localStorage.setItem(t, t);
    localStorage.removeItem(t);
    return localStorage;
  } catch {
    return null;
  }
})();

export const storage = {
  get: async (k) => {
    try {
      if (ls) {
        const v = ls.getItem(k);
        return v == null ? null : JSON.parse(v);
      }
      return memory.has(k) ? memory.get(k) : null;
    } catch { return null; }
  },
  set: async (k, v) => {
    try {
      if (ls) ls.setItem(k, JSON.stringify(v));
      else memory.set(k, v);
    } catch {}
  },
  remove: async (k) => {
    try {
      if (ls) ls.removeItem(k);
      else memory.delete(k);
    } catch {}
  },
  keys: async () => {
    try {
      if (ls) return Object.keys(ls);
      return Array.from(memory.keys());
    } catch { return []; }
  }
};

export async function resetAll() {
  const all = await storage.keys();
  await Promise.all(all.filter((k) => k.startsWith(NS)).map((k) => storage.remove(k)));
}

export const NAMESPACE = NS;
