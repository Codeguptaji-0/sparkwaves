import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
}

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.png',
  ogUrl,
  schema
}: SEOProps) {
  const schemaString = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to select and update or create meta tags
    const updateOrCreateMeta = (attributeName: 'name' | 'property', attributeValue: string, contentValue: string) => {
      const selector = `meta[${attributeName}="${attributeValue}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', contentValue);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', contentValue);
        document.head.appendChild(element);
      }
    };

    // Helper to update or create canonical link tag
    const updateOrCreateCanonical = (hrefValue: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (element) {
        element.setAttribute('href', hrefValue);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        element.setAttribute('href', hrefValue);
        document.head.appendChild(element);
      }
    };

    // 2. Update primary meta tags
    updateOrCreateMeta('name', 'title', title);
    updateOrCreateMeta('name', 'description', description);
    
    if (keywords) {
      updateOrCreateMeta('name', 'keywords', keywords);
    } else {
      // Default fallback keywords if not provided
      updateOrCreateMeta('name', 'keywords', 'Sparkwaves, SaaS, Web Development, Cloud Infrastructure, Data Intelligence');
    }

    // 3. Update Open Graph (Facebook / LinkedIn / WhatsApp)
    const currentUrl = ogUrl || window.location.href;
    updateOrCreateMeta('property', 'og:title', ogTitle || title);
    updateOrCreateMeta('property', 'og:description', ogDescription || description);
    updateOrCreateMeta('property', 'og:url', currentUrl);
    
    // Resolve absolute path for OG image if it starts with relative /
    const absoluteOgImage = ogImage.startsWith('/') 
      ? `${window.location.origin}${ogImage}`
      : ogImage;
    updateOrCreateMeta('property', 'og:image', absoluteOgImage);
    updateOrCreateMeta('property', 'og:image:width', '1200');
    updateOrCreateMeta('property', 'og:image:height', '630');

    // 4. Update Twitter Card tags
    updateOrCreateMeta('name', 'twitter:title', ogTitle || title);
    updateOrCreateMeta('name', 'twitter:description', ogDescription || description);
    updateOrCreateMeta('name', 'twitter:url', currentUrl);
    updateOrCreateMeta('name', 'twitter:image', absoluteOgImage);

    // 5. Update Canonical Link
    const canonicalUrl = ogUrl || currentUrl;
    updateOrCreateCanonical(canonicalUrl);

    // 6. Update JSON-LD Schema
    if (schemaString) {
      const schemaId = 'seo-schema-jsonld';
      let scriptEl = document.getElementById(schemaId);
      if (schemaString) {
        if (scriptEl) {
          scriptEl.textContent = schemaString;
        } else {
          scriptEl = document.createElement('script');
          scriptEl.setAttribute('id', schemaId);
          scriptEl.setAttribute('type', 'application/ld+json');
          scriptEl.textContent = schemaString;
          document.head.appendChild(scriptEl);
        }
      }
    } else {
      const scriptEl = document.getElementById('seo-schema-jsonld');
      if (scriptEl) {
        scriptEl.remove();
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, schemaString]);
}
