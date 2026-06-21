import { useEffect } from "react";

const SITE_URL = "https://hsfinances.com.au";

function setMetaTag(name, content, attr = "name") {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(path) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", `${SITE_URL}${path === "/" ? "" : path}`);
}

/**
 * usePageMeta — sets document.title, meta description, og tags, canonical
 * URL, and robots directive for the current route. Call once near the top
 * of every page component.
 *
 * @param {string} title         Full <title> text (keep under ~60 chars)
 * @param {string} description   Meta description (keep under ~155 chars)
 * @param {string} path          Route path, e.g. "/services/ai-automation"
 * @param {boolean} noindex      Set true for pages that should NOT be indexed
 */
export function usePageMeta(title, description, path = "/", noindex = false) {
  useEffect(() => {
    if (title) document.title = title;
    setMetaTag("description", description);
    setMetaTag("og:title", title, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:url", `${SITE_URL}${path === "/" ? "" : path}`, "property");
    setCanonical(path);
    setMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, path, noindex]);
}
