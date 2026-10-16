/**
 * Unified Analytics & Pixel Integration for Maja Beauty Bar
 * Supports:
 * 1. Google Analytics 4 (GA4) with SPA dynamic route tracking
 * 2. Meta Pixel (Facebook & Instagram Ads) with automatic Lead, Contact, & InitiateCheckout tracking
 */

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1756144429011846';

let isGAInitialized = false;

/**
 * Initialize GA4 and attach automatic event trackers
 */
export function initGA(customId = null) {
  const measurementId = customId || GA_MEASUREMENT_ID;

  if (typeof window === 'undefined') return;

  // Setup click listeners for high-intent conversions (Fresha, WhatsApp, Instagram, Calls)
  setupAutomaticConversionTracking();

  if (!measurementId) {
    if (import.meta.env.DEV) {
      console.info('[Analytics] VITE_GA_MEASUREMENT_ID is not configured. GA4 is running in placeholder mode.');
    }
    return;
  }

  if (isGAInitialized) return;

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());

  // Configure GA4: Disable automatic page_view so SPA client routes can be tracked accurately
  window.gtag('config', measurementId, {
    send_page_view: false,
    cookie_flags: 'SameSite=None;Secure',
  });

  // Inject Google Tag script if not already present
  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`);
  if (!existingScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  isGAInitialized = true;

  if (import.meta.env.DEV) {
    console.log(`[GA4] Initialized with ID: ${measurementId}`);
  }
}

/**
 * Automatic listener for high-value user conversion interactions across the app
 * Sends signals simultaneously to both Google Analytics 4 and Meta Pixel (Facebook & Instagram)
 */
function setupAutomaticConversionTracking() {
  if (typeof window === 'undefined' || window.__analytics_listeners_attached) return;
  window.__analytics_listeners_attached = true;

  document.addEventListener('click', (event) => {
    const targetLink = event.target.closest('a');
    if (!targetLink || !targetLink.href) return;

    const href = targetLink.href.toLowerCase();
    const linkText = (targetLink.innerText || targetLink.getAttribute('aria-label') || '').trim();

    // 1. Fresha Appointment Bookings -> InitiateCheckout
    if (href.includes('fresha.com')) {
      // Google Analytics 4
      trackEvent('begin_checkout', {
        event_category: 'booking',
        event_label: linkText || 'Book Online',
        booking_partner: 'Fresha',
        destination_url: targetLink.href,
      });

      // Meta Pixel
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Salon Appointment',
          content_category: 'Booking',
          partner: 'Fresha',
          currency: 'AED',
        });
      }

      if (import.meta.env.DEV) {
        console.log('[Analytics] Tracked Fresha Booking click (InitiateCheckout)');
      }
      return;
    }

    // 2. WhatsApp Chats / Inquiries -> Contact & Lead
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      // Google Analytics 4
      trackEvent('contact', {
        method: 'WhatsApp',
        event_category: 'lead',
        event_label: linkText || 'WhatsApp Consultation',
      });

      // Meta Pixel: Track both Contact and Lead for optimal ad algorithm targeting
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
          content_name: linkText || 'WhatsApp Consultation',
          content_category: 'Lead',
        });
        window.fbq('track', 'Lead', {
          content_name: linkText || 'WhatsApp Consultation Lead',
          currency: 'AED',
        });
      }

      if (import.meta.env.DEV) {
        console.log('[Analytics] Tracked WhatsApp Consultation click (Contact & Lead)');
      }
      return;
    }

    // 3. Instagram Profile Visits -> Social Engagement
    if (href.includes('instagram.com')) {
      trackEvent('social_click', {
        network: 'Instagram',
        event_label: linkText || 'Instagram Link',
      });

      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'InstagramClick', {
          network: 'Instagram',
          event_label: linkText || 'Instagram Link',
        });
      }
      return;
    }

    // 4. Direct Phone Calls -> Contact
    if (href.startsWith('tel:')) {
      const phoneNumber = href.replace('tel:', '');
      trackEvent('contact', {
        method: 'Phone',
        event_category: 'lead',
        phone_number: phoneNumber,
      });

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
          method: 'Phone',
          content_name: 'Phone Call',
        });
      }
      return;
    }
  }, { passive: true });
}

/**
 * Track SPA Page View on client-side route changes
 * Fires both GA4 'page_view' and Meta Pixel 'PageView'
 * @param {string} path - E.g. '/services', '/nails', '/packages'
 * @param {string} title - Page title from SEO config
 */
export function trackPageView(path, title) {
  if (typeof window === 'undefined') return;

  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  // 1. Google Analytics 4
  if (window.gtag && isGAInitialized) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: pageLocation,
    });
  }

  // 2. Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }

  if (import.meta.env.DEV) {
    console.log(`[PageView Tracked]: ${pagePath} - "${pageTitle}"`);
  }
}

/**
 * Track Custom Event in GA4
 * @param {string} eventName - Name of the GA4 event
 * @param {Record<string, any>} eventParams - Additional event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return;

  if (window.gtag && isGAInitialized) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * High-Level Conversion Event Helpers for Maja Beauty Bar
 */
export const AnalyticsEvents = {
  // Appointment / Fresha Booking Clicks
  trackBookingClick: (source = 'unknown', serviceName = null) => {
    trackEvent('begin_checkout', {
      event_category: 'booking',
      event_label: source,
      service_name: serviceName,
      booking_partner: 'Fresha',
    });

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: serviceName || 'Salon Appointment',
        content_category: 'Booking',
        event_source: source,
        currency: 'AED',
      });
    }
  },

  // WhatsApp Contact / Consultation Clicks
  trackWhatsAppClick: (source = 'floating_button') => {
    trackEvent('contact', {
      method: 'WhatsApp',
      event_category: 'lead',
      event_label: source,
    });

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact', {
        content_name: 'WhatsApp Consultation',
        event_label: source,
      });
      window.fbq('track', 'Lead', {
        content_name: 'WhatsApp Lead',
        event_label: source,
        currency: 'AED',
      });
    }
  },

  // Instagram Profile Clicks
  trackInstagramClick: (source = 'floating_button') => {
    trackEvent('social_click', {
      network: 'Instagram',
      event_label: source,
    });

    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'InstagramClick', {
        event_label: source,
      });
    }
  },

  // Referral Program Engagement
  trackReferralAction: (action = 'code_generated', details = {}) => {
    trackEvent('referral_program', {
      action,
      ...details,
    });

    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'ReferralAction', {
        action,
        ...details,
      });
    }
  },

  // First Visit Pop-up Interaction
  trackFirstVisitOffer: (action = 'view') => {
    trackEvent('promo_offer', {
      promotion_name: 'First Visit 20% OFF',
      action,
    });

    if (typeof window.fbq === 'function') {
      if (action === 'copy_promo_code') {
        window.fbq('track', 'Lead', {
          content_name: 'First Visit 20% OFF Promo Voucher',
          currency: 'AED',
        });
      } else {
        window.fbq('trackCustom', 'FirstVisitPromo', { action });
      }
    }
  },
};
