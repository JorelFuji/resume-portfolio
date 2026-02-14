export function buildTitle(pageTitle, siteName) {
    // Home should just be the site name, internal pages get "Page — Site"
    if (!pageTitle || pageTitle.trim() === siteName.trim())
        return siteName;
    return `${pageTitle} — ${siteName}`;
}
export function setDocumentMeta(meta, siteName) {
    const title = buildTitle(meta.title, siteName);
    document.title = title;
    setMetaTag('name', 'description', meta.description);
    // Open Graph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:type', 'website');
    if (meta.image)
        setMetaTag('property', 'og:image', meta.image);
    if (meta.canonical)
        setLinkTag('canonical', meta.canonical);
    // Robots
    setMetaTag('name', 'robots', meta.noIndex ? 'noindex,nofollow' : 'index,follow');
}
function setMetaTag(attr, key, content) {
    if (!content)
        return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}
function setLinkTag(rel, href) {
    if (!href)
        return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}
