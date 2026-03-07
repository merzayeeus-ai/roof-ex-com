import { useEffect } from "react";

export function useSEO(title: string, description?: string, keywords?: string) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      }
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) {
        twDesc.setAttribute("content", description);
      }
    }
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", title);
      }
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) {
        twTitle.setAttribute("content", title);
      }
    }
    if (keywords) {
      let kwMeta = document.querySelector('meta[name="keywords"]');
      if (kwMeta) {
        kwMeta.setAttribute("content", keywords);
      } else {
        kwMeta = document.createElement("meta");
        kwMeta.setAttribute("name", "keywords");
        kwMeta.setAttribute("content", keywords);
        document.head.appendChild(kwMeta);
      }
    }
    const path = window.location.pathname.replace(/\/$/, "") || "";
    const canonicalUrl = `https://roof-ex.com${path}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }
  }, [title, description, keywords]);
}
