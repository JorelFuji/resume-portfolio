export type SeoMeta = {
  title: string
  description: string
  canonical?: string
  image?: string
  noIndex?: boolean
}

export function buildTitle(pageTitle: string, siteName: string) {
  // Home should just be the site name, internal pages get "Page — Site"
  if (!pageTitle || pageTitle.trim() === siteName.trim()) return siteName
  return `${pageTitle} — ${siteName}`
}

export function setDocumentMeta(meta: SeoMeta, siteName: string) {
  const title = buildTitle(meta.title, siteName)
  document.title = title

  setMetaTag('name', 'description', meta.description)

  // Open Graph
  setMetaTag('property', 'og:title', title)
  setMetaTag('property', 'og:description', meta.description)
  setMetaTag('property', 'og:type', 'website')

  if (meta.image) setMetaTag('property', 'og:image', meta.image)
  if (meta.canonical) setLinkTag('canonical', meta.canonical)

  // Robots
  setMetaTag('name', 'robots', meta.noIndex ? 'noindex,nofollow' : 'index,follow')
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  if (!content) return
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  if (!href) return
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}