const API_BASE = "http://localhost:8000/api";

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products/`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(`${API_BASE}/products/${slug}/`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
