import { useEffect, useState } from "react";

export function useHashRoute() {
  const [hash, setHash] = useState<string>(() => window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (to: string) => {
    if (to === hash) return;
    window.location.hash = to;
  };

  return { hash, navigate };
}

export function parseRoute(hash: string): { name: "home" } | { name: "item"; slug: string } {
  const clean = hash.replace(/^#/, "") || "/";
  if (clean.startsWith("/item/")) {
    const slug = clean.slice("/item/".length);
    return { name: "item", slug };
  }
  return { name: "home" };
}
