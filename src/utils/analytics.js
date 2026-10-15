/**
 * Google Analytics 4 (GA4) Integration for Maja Beauty Bar
 * Supports Vite SPA routing, dynamic page title/path tracking,
 * and automatic luxury salon conversion event tracking.
 */

// Retrieve Measurement ID from Vite environment variables or fallback
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

let isInitialized = false;

/**
 * Initialize GA4 script tag, dataLayer, and global interaction trackers
 */
export function initGA(customId = null) {
  const measurementId = customId || GA_MEASUREMENT_ID;

  if (typeof window === 'undefined') return;

  if (!measurementId) {
    if (import.meta.env.DEV) {
      console.info('[GA4] VITE_GA_MEASUREMENT_ID is not configured. Google Analytics is running in placeholder mode.');
    }
    return;
  }

  if (isInitialized) return;

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

  // Setup automatic outbound click tracking for bookings, WhatsApp, Instagram, and calls
  setupAutomaticConversionTracking();

  isInitialized = true;

  if (import.meta.env.DEV) {
    console.log(`[GA4] Initialized with ID: ${measurementId}`);
  }
}

/**
 * Automatic listener for high-value user conversion interactions across the app
 */
function setupAutomaticConversionTracking() {
  if (typeof window === 'undefined' || window.__ga4_listeners_attached) return;
  window.__ga4_listeners_attached = true;

  document.addEventListener('click', (event) => {
    const targetLink = event.target.closest('a');
    if (!targetLink || !targetLink.href) return;

    const href = targetLink.href.toLowerCase();
    const linkText = (targetLink.innerText || targetLink.getAttribute('aria-label') || '').trim();

    // 1. Fresha Appointment Bookings
    if (href.includes('fresha.com')) {
      trackEvent('begin_checkout', {
        event_category: 'booking',
        event_label: linkText || 'Book Online',
        booking_partner: 'Fresha',
        destination_url: targetLink.href,
      });
      return;
    }

    // 2. WhatsApp Chats / Inquiries
    if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackEvent('contact', {
        method: 'WhatsApp',
        event_category: 'lead',
        event_label: linkText || 'WhatsApp Consultation',
      });
      return;
    }

    // 3. Instagram Profile Visits
    if (href.includes('instagram.com')) {
      trackEvent('social_click', {
        network: 'Instagram',
        event_label: linkText || 'Instagram Link',
      });
      return;
    }

    // 4. Phone Calls
    if (href.startsWith('tel:')) {
      trackEvent('contact', {
        method: 'Phone',
        event_category: 'lead',
        phone_number: href.replace('tel:', ''),
      });
      return;
    }
  }, { passive: true });
}

/**
 * Track SPA Page View on client-side route changes
 * @param {string} path - E.g. '/services', '/nails', '/packages'
 * @param {string} title - Page title from SEO config
 */
export function trackPageView(path, title) {
  if (typeof window === 'undefined') return;

  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  if (window.gtag && isInitialized) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: pageLocation,
    });
  } else if (import.meta.env.DEV) {
    console.log(`[GA4 Track Pageview]: ${pagePath} - "${pageTitle}"`);
  }
}

/**
 * Track Custom Event in GA4
 * @param {string} eventName - Name of the GA4 event
 * @param {Record<string, any>} eventParams - Additional event parameters
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined') return;

  if (window.gtag && isInitialized) {
    window.gtag('event', eventName, eventParams);
  } else if (import.meta.env.DEV) {
    console.log(`[GA4 Track Event]: ${eventName}`, eventParams);
  }
}

/**
 * Conversion Event Helpers for Maja Beauty Bar
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
  },

  // WhatsApp Contact / Consultation Clicks
  trackWhatsAppClick: (source = 'floating_button') => {
    trackEvent('contact', {
      method: 'WhatsApp',
      event_category: 'lead',
      event_label: source,
    });
  },

  // Instagram Profile Clicks
  trackInstagramClick: (source = 'floating_button') => {
    trackEvent('social_click', {
      network: 'Instagram',
      event_label: source,
    });
  },

  // Referral Program Engagement
  trackReferralAction: (action = 'code_generated', details = {}) => {
    trackEvent('referral_program', {
      action,
      ...details,
    });
  },

  // First Visit Pop-up Interaction
  trackFirstVisitOffer: (action = 'view') => {
    trackEvent('promo_offer', {
      promotion_name: 'First Visit 20% OFF',
      action,
    });
  },
};
