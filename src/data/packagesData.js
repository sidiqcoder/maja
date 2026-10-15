// Packages Data for Maja Beauty Bar Dubai
// Sourced from Design tab_Maja Fix.pdf & menu in Drive

export const packagesData = {
  hairPackages: {
    title: 'Hair Packages',
    subtitle: 'From signature balayage to unlimited blow-dries, enjoy salon perfection on repeat.',
    image: '/images/packages/hair-package-new.jpeg',
    secondaryImage: '/images/packages/hair-post.jpg',
    items: [
      {
        id: 'hp1',
        title: 'ROOTS REFRESH',
        price: 'AED 525',
        features: [
          'Roots Colour',
          'Davines Hair Treatment',
          'Hair Trim',
          
        ],
        badge: 'Popular',
      },
      {
        id: 'hp2',
        title: 'COMPLETE COLOUR',
        price: 'AED 630',
        features: [
          'Full Head Colour',
          'Davines Hair Treatment',
          'Hair Trim',
          
        ],
        badge: 'Best Value',
      },
      {
        id: 'hp3',
        title: 'SIGNATURE BALAYAGE',
        price: 'From AED 1,050',
        features: [
          'Full Balayage',
          'Toner',
          'Davines Hair Treatment',
          'Hair Trim',
          
        ],
        badge: 'Signature',
      },
      {
        id: 'hp4',
        title: 'BLOW-DRIES ON REPEAT',
        price: 'AED 1,050',
        features: [
          'Unlimited Blow-Dry for 30 Days',
          'One Davines Hair Treatment',
          'One Hair Trim',
        ],
        badge: '30 Days Pass',
      },
    ],
    terms: [
      'Additional charges may apply depending on hair length, thickness and product required.',
      '* Bleach and ammonia-free colour is not included in the package',
      '* Curls is not included in the package',
      'Packages are non-refundable, non-transferable and cannot be combined with other offers or discount cards.',
      'Consultation and advance booking are required.',
    ],
  },

  beautyReset: {
    title: 'The Beauty Reset',
    subtitle: 'A curated selection of Maja favourites available exclusively on Mondays & Tuesdays.',
    badge: 'Mondays & Tuesdays Only',
    image: '/images/packages/beauty-reset-new.jpeg',
    secondaryImage: '/images/packages/reset-post.jpg',
    categories: [
      {
        name: 'Massage',
        items: [
          { name: 'Full Body Sculpt | 60 mins', price: 'AED 250' },
          { name: 'Full Body Sculpt | 90 mins', price: 'AED 350' },
          { name: 'Face Sculpt | 60 mins', price: 'AED 160' },
          { name: 'Relaxation Massage | 60 mins', price: 'AED 230' },
          { name: 'Deep Tissue Massage | 60 mins', price: 'AED 260' },
          { name: 'Hot Stone Massage | 60 mins', price: 'AED 260' },
          { name: 'Warm Candle Melt Massage | 60 mins', price: 'AED 260' },
        ],
      },
      {
        name: 'Waxing',
        items: [
          { name: 'Full Legs', price: 'AED 75' },
          { name: 'Full Arms', price: 'AED 50' },
          { name: 'Full Brazilian', price: 'AED 105' },
          { name: 'Underarms', price: 'AED 35' },
          { name: 'Full Body Waxing without Brazilian', price: 'AED 260' },
          { name: 'Full Body Waxing with Brazilian', price: 'AED 310' },
        ],
      },
      {
        name: 'Lashes & Brows',
        items: [
          { name: 'Eyebrows Shape & Tint', price: 'AED 85' },
          { name: 'Eyebrow Lamination with Tint', price: 'AED 195' },
          { name: 'Eyelash Lamination with Tint', price: 'AED 195' },
          { name: '1D Eyelash Extensions - New Set', price: 'AED 105' },
          { name: '2D Eyelash Extensions - New Set', price: 'AED 150' },
        ],
      },
      {
        name: 'Hair',
        items: [
          { name: 'Short Blow-Dry', price: 'AED 120' },
          { name: 'Medium Blow-Dry', price: 'AED 150' },
          { name: 'Long Blow-Dry', price: 'AED 170' },
          { name: 'Hair Trim', price: 'AED 100' },
          { name: 'Hair Cut', price: 'AED 200' },
        ],
      },
    ],
    terms: [
      'Packages are non-refundable and cannot be combined with other offers, promotions or discount cards.',
      'Packages cannot be redeemed during Eid, UAE public holidays, or on New Year’s Eve and New Year’s Day.',
      'Blow-Dry with Curls',
    ],
  },

  lymphaticDrainage: {
    title: 'Lymphatic Drainage & Body Sculpting',
    subtitle: 'Transformative contouring, detoxifying lymphatic drainage, and red light therapies in curated multi-session bundles.',
    image: '/images/packages/lymphatic-new.jpeg',
    sculptImage: '/images/packages/sculpt-your-way-new.jpeg',
    secondaryImage: '/images/packages/lymphatic-post.jpg',
    sessions60: [
      { treatment: 'Booty & Legs Sculpt', sessions5: 'AED 1,000', sessions10: 'AED 1,800' },
      { treatment: 'Full Body Sculpt', sessions5: 'AED 1,250', sessions10: 'AED 2,300' },
      { treatment: 'Face Sculpt', sessions5: 'AED 1,000', sessions10: 'AED 1,800' },
      { treatment: 'Manual Lymphatic Drainage', sessions5: 'AED 1,300', sessions10: 'AED 2,500' },
      { treatment: 'Full Body Sculpt & Red Light Therapy', sessions5: 'AED 2,000', sessions10: 'AED 3,700' },
      { treatment: 'Ice Madero Full Body Sculpt', sessions5: 'AED 1,500', sessions10: 'AED 2,700' },
    ],
    sessions90: [
      { treatment: 'Full Body Sculpt', sessions5: 'AED 1,600', sessions10: 'AED 3,000' },
      { treatment: 'Full Body Sculpt & Honey', sessions5: 'AED 2,000', sessions10: 'AED 3,500' },
      { treatment: 'Full Body & Face Sculpt', sessions5: 'AED 2,000', sessions10: 'AED 3,500' },
      { treatment: 'Full Body Sculpt & Red Light Therapy', sessions5: 'AED 2,500', sessions10: 'AED 4,800' },
      { treatment: 'Ice Madero Full Body Sculpt', sessions5: 'AED 2,100', sessions10: 'AED 3,800' },
    ],
    sculptYourWay: [
      {
        title: '60 MINS SCULPT YOUR WAY',
        sessions5: 'AED 1,400',
        sessions10: 'AED 2,700',
        includes: [
          '1 x Full Body Sculpt',
          '1 x Full Body Sculpt + Red Light Therapy',
          '1 x Face Sculpt',
          '1 x Ice Madero Full Body Sculpt',
          '1 x Manual Lymphatic Drainage',
        ],
      },
      {
        title: '90 MINS SCULPT YOUR WAY',
        sessions5: 'AED 2,000',
        sessions10: 'AED 3,700',
        includes: [
          '1 x Full Body Sculpt',
          '1 x Full Body Sculpt + Red Light Therapy',
          '1 x Ice Madero Full Body Sculpt',
          '2 x Choice of Manual Lymphatic Drainage, Full Body & Face Sculpt, or Full Body Sculpt + Honey',
        ],
      },
    ],
    terms: [
      'Five-session packages are valid for 3 months; ten-session packages are valid for 6 months.',
      'Packages are non-refundable, non-transferable and cannot be combined with other offers or discount cards.',
      'Advance booking is required and appointments are subject to availability.',
      'Late cancellations and no-shows will result in the session being deducted.',
    ],
  },
};

