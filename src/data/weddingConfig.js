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
      photo: 'assets/img/bride_suruchi_portrait.jpg',
      photoPosition: 'center 15%',
      photoScale: 1
    },
    groom: {
      name: 'Shubham',
      fullName: 'Shubham Kushwaha',
      shortName: 'Shubham',
      role: 'The Groom',
      photo: 'assets/img/groom_shubham_portrait.jpg',
      photoPosition: 'center 15%',
      photoScale: 1
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
      dressCode: 'Red & White',
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
      dressCode: 'Yellow',
      date: 'Tuesday, 8 December 2026',
      time: '03:00 PM Onwards',
      venue: 'Vani Banquet Hall & Marriage Garden, Bhopal',
      dateCallout: '8 Dec',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Vani+Banquet+Hall+and+Marriage+Garden+near+Lilawati+Hospital+Islam+Nagar+Bhopal'
    },
    {
      eventTag: 'EVENT 4',
      icon: '🎶',
      title: 'Sangeet Night',
      note: 'Musical Extravaganza, Folk Rhythms & Dance Soirée',
      date: 'Tuesday, 8 December 2026',
      time: '07:00 PM Onwards',
      venue: 'Vani Banquet Hall & Marriage Garden, Bhopal',
      dateCallout: '8 Dec',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Vani+Banquet+Hall+and+Marriage+Garden+near+Lilawati+Hospital+Islam+Nagar+Bhopal'
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
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Vani+Banquet+Hall+and+Marriage+Garden+near+Lilawati+Hospital+Islam+Nagar+Bhopal'
    }
  ],

  // 3D Photo Carousel
  gallery: [
    { url: 'assets/gallery/photo_9_temple_steps_hand_in_hand.jpg', caption: 'Hand in Hand, Heart in Heart • Suruchi & Shubham' },
    { url: 'assets/gallery/photo_1_sunset_embrace.jpg', caption: 'A Promise at Sunset • Suruchi & Shubham' },
    { url: 'assets/gallery/photo_2_holy_river_diya.jpg', caption: 'Sacred Aarti at River Ghats' },
    { url: 'assets/gallery/photo_3_palace_jharokha_arch.jpg', caption: 'Gilded Palace Jharokha' },
    { url: 'assets/gallery/photo_4_bride_suruchi.jpg', caption: 'The Radiant Bride • Suruchi' },
    { url: 'assets/gallery/photo_5_palace_stairs_walk.jpg', caption: 'Stepping into Forever Together' },
    { url: 'assets/gallery/photo_6_groom_shubham.jpg', caption: 'The Regal Groom • Shubham' },
    { url: 'assets/gallery/photo_7_sunset_reflection.jpg', caption: 'Golden Reflections at Twilight' },
    { url: 'assets/gallery/photo_8_temple_steps_serenade.jpg', caption: 'Devotion & Grace at the Royal Shrine' },
    { url: 'assets/gallery/photo_10_jharokha_window_promise.jpg', caption: 'Whispers of Love in Carved Stone' },
    { url: 'assets/gallery/photo_11_palace_facade_together.jpg', caption: 'Together in Royal Grandeur' }
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
      icon: '🥻',
      title: 'Dress Code',
      description: 'Haldi: Yellow • Mata Poojan: Red & White • Sangeet & Vivah: Festive Indian Ethnic Attire',
      details: [
        { event: 'Mata Poojan', code: 'Red & White' },
        { event: 'Haldi Ceremony', code: 'Yellow' },
        { event: 'Sangeet & Vivah', code: 'Festive Indian Ethnic Attire' }
      ]
    }
  ],

  // Social & RSVP Settings
  hashtag: '#SuruchiWedsShubham',
  rsvpWhatsAppNumber: '919826083233',
  audioTrackUrl: 'assets/audio/shehnai_sitar_royale.mp3'
};
