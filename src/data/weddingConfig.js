/**
 * Global Wedding Configuration
 * Personal details for Suruchi & Shubham's Royal Wedding
 */

export const weddingConfig = {
  invocation: '॥ Shree Ganeshaya Namah ॥',
  title: 'WEDDING INVITATION',
  subtitle: 'as they begin their beautiful journey together.',

  // Hosts
  hosts: {
    parents: 'Dashrath Singh Kushwaha & Priya Kushwaha',
    tagline: 'Together with their families, we cordially invite you to celebrate the wedding of'
  },

  // Couple Information
  couple: {
    bride: {
      name: 'Suruchi',
      fullName: 'Suruchi Kushwaha',
      shortName: 'Suruchi',
      role: 'The Bride',
      parents: 'Daughter of Smt. Priya & Sh. Dashrath Singh Kushwaha',
      photo: '/assets/gallery/couple.jpg',
      photoPosition: '20% 32%',
      photoScale: 1.7
    },
    groom: {
      name: 'Shubham',
      fullName: 'Shubham',
      shortName: 'Shubham',
      role: 'The Groom',
      parents: 'Together with his loving family',
      photo: '/assets/gallery/couple.jpg',
      photoPosition: '85% 20%',
      photoScale: 1.7
    }
  },

  // Ancestral Grace / Elders
  elders: {
    familyElder1: {
      name: 'Sh. Dashrath Singh Kushwaha',
      badge: 'Head of Family • Kushwaha House',
      blessing: '“With eternal blessings and love as our children begin their beautiful journey together.”',
      photo: '/assets/family-man.webp'
    },
    familyElder2: {
      name: 'Smt. Priya Kushwaha',
      badge: 'Mother • Kushwaha House',
      blessing: '“May God bless Suruchi and Shubham with lifelong joy, health, and togetherness.”',
      photo: '/assets/family-woman.webp'
    }
  },

  // Dates & Countdown
  dates: {
    // Starting with ceremonies on Dec 7 through main wedding on Dec 9, 2026
    targetCountdownISO: '2026-12-07T15:00:00+05:30',
    mainWeddingDateISO: '2026-12-09T18:00:00+05:30',
    displayRange: 'December 7 – 9, 2026',
    heroDate: 'December 9, 2026',
    mainDayDisplay: 'Wednesday, 9 December 2026',
    venueLine: 'Vani Banquet Hall & Marriage Garden • Bhopal',
    muhuratTime: 'Wednesday, 9 Dec • Baraat & Panigrahan Sanskar'
  },

  // Venue & Maps
  venue: {
    name: 'Vani Banquet Hall & Marriage Garden',
    landmark: 'Near Lilawati Hospital, Islam Nagar',
    city: 'Bhopal, Madhya Pradesh',
    fullAddress: 'Vani Banquet Hall & Marriage Garden, Near Lilawati Hospital, Islam Nagar, Bhopal, Madhya Pradesh 462038',
    dateText: 'Wednesday, 9 December 2026',
    ceremonyMuhurat: 'Evening Onwards • Baraat & Panigrahan Sanskar',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Vani+Banquet+Hall+and+Marriage+Garden+near+Lilawati+Hospital+Islam+Nagar+Bhopal',
    embedUrl: 'https://maps.google.com/maps?q=Vani+Banquet+Hall+and+Marriage+Garden,+near+Lilawati+Hospital,+Islam+Nagar,+Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },

  // Home Location Link
  homeLocationLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6',

  // Wedding Celebrations Schedule (Page 2 of invite)
  ceremonies: [
    {
      eventTag: 'EVENT 1',
      icon: '🪔',
      title: 'Ganesh Poojan & Mata Poojan',
      note: 'Sacred Vedic Prayers & Auspicious Beginnings',
      date: 'Monday, 7 December 2026',
      time: '03:00 PM Onwards',
      venue: 'Family Residence, Bhopal',
      dateCallout: '7 Dec',
      mapLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6'
    },
    {
      eventTag: 'EVENT 2',
      icon: '🏺',
      title: 'Gangajali & Mandap',
      note: 'Sanctifying the Mandap & Holy Waters',
      date: 'Tuesday, 8 December 2026',
      time: '09:00 AM Onwards',
      venue: 'Family Residence, Bhopal',
      dateCallout: '8 Dec',
      mapLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6'
    },
    {
      eventTag: 'EVENT 3',
      icon: '🌼',
      title: 'Haldi Ceremony',
      note: 'Auspicious Golden Turmeric & Floral Blessings',
      date: 'Tuesday, 8 December 2026',
      time: '03:00 PM Onwards',
      venue: 'Family Residence / Celebration Lawn, Bhopal',
      dateCallout: '8 Dec',
      mapLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6'
    },
    {
      eventTag: 'EVENT 4',
      icon: '🎶',
      title: 'Sangeet Night',
      note: 'Musical Extravaganza, Folk Rhythms & Dance Soirée',
      date: 'Tuesday, 8 December 2026',
      time: '07:00 PM Onwards',
      venue: 'Vani Banquet Hall, Bhopal',
      dateCallout: '8 Dec',
      mapLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6'
    },
    {
      eventTag: 'EVENT 5',
      icon: '🔥',
      title: 'Baraat Arrival & Panigrahan Sanskar',
      note: 'Grand Baraat Procession & Sacred Vedic Pheras',
      date: 'Wednesday, 9 December 2026',
      time: 'Evening Onwards (Baraat & Panigrahan)',
      venue: 'Vani Banquet Hall & Marriage Garden, Bhopal',
      dateCallout: '9 Dec',
      mapLink: 'https://maps.app.goo.gl/vLZiko55cekM32is6'
    }
  ],

  // 3D Photo Carousel
  gallery: [
    { url: '/assets/gallery/couple.jpg', caption: 'Suruchi & Shubham' },
    { url: '/assets/gallery/courtyard.jpg', caption: 'The Palace Courtyard' },
    { url: '/assets/gallery/mandap.jpg', caption: 'The Sacred Mandap' },
    { url: '/assets/gallery/haldi.jpg', caption: 'Haldi Morning' },
    { url: '/assets/gallery/lake.jpg', caption: 'Evening Celebrations' },
    { url: '/assets/gallery/jharokha.jpg', caption: 'The Jharokha' },
    { url: '/assets/gallery/gate.jpg', caption: 'Grand Welcome Gates' }
  ],

  // Family Contacts & Logistics
  contacts: [
    {
      name: 'Dashrath Singh Kushwaha',
      role: 'Family Coordinator / Host',
      phone: '+91 98260 83233',
      waNumber: '919826083233'
    },
    {
      name: 'Priya Kushwaha',
      role: 'Host & Coordinator',
      phone: '+91 97707 62197',
      waNumber: '919770762197'
    }
  ],

  // Guest Advisory
  advisory: [
    {
      icon: '#',
      title: 'Wedding Hashtag',
      description: 'Capture your favorite moments and tag them with #SuruchiWedsShubham so we can cherish every memory together.'
    },
    {
      icon: '☀',
      title: 'Bhopal Climate',
      description: 'Bhopal in December brings pleasant sunny afternoons (24°C) and delightfully cool evenings (12°C). Light shawls or jackets recommended for night functions.'
    },
    {
      icon: '🚗',
      title: 'Valet & Parking',
      description: 'Complimentary valet parking is arranged at Vani Banquet Hall & Marriage Garden main gate. Security staff will assist with parking.'
    },
    {
      icon: '👗',
      title: 'Dress Code',
      description: 'Daytime functions: Bright festive yellows, pastels & traditional wear. Sangeet & Panigrahan: Grand Indian ethnic attire, sherwanis, and lehengas.'
    }
  ],

  // Social & RSVP Settings
  hashtag: '#SuruchiWedsShubham',
  rsvpWhatsAppNumber: '919826083233',
  audioTrackUrl: '/assets/audio/shehnai_sitar_royale.mp3'
};
