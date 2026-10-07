import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', () => {
  // Theme state: 'light' | 'dark'
  const initialTheme = localStorage.getItem('theme') || 'light'
  const theme = ref(initialTheme)

  const isDark = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (newTheme) => {
    theme.value = newTheme
  }

  const applyTheme = (val) => {
    document.documentElement.setAttribute('data-theme', val)
    localStorage.setItem('theme', val)
  }

  watch(theme, (newVal) => {
    applyTheme(newVal)
  }, { immediate: true })

  // Locale state: 'EN' | 'ID'
  const initialLocale = localStorage.getItem('locale') || 'EN'
  const locale = ref(initialLocale)

  const toggleLocale = () => {
    locale.value = locale.value === 'EN' ? 'ID' : 'EN'
    localStorage.setItem('locale', locale.value)
  }

  const setLocale = (newLocale) => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  const translations = {
    EN: {
      nav: {
        home: 'Home',
        about: 'About',
        browse: 'Browse',
        events: 'Event List',
        eventDetailSample: 'Event Detail (Sample)',
        category: 'Category',
        contact: 'Contact',
        eventDetail: 'Event Detail',
      },
      home: {
        badge: 'Welcome to Gatherly',
        title: 'Connect, Discover, and Experience',
        subtitle: 'Join our vibrant community to explore the best events tailored for you.',
        discoverBtn: 'Discover Events',
        learnMoreBtn: 'Learn More',
        feat1Title: 'Curated Events',
        feat1Desc: 'Specially handpicked events for meaningful and unforgettable experiences.',
        feat2Title: 'Global Reach',
        feat2Desc: 'Connect with millions of community members from around the world.',
        feat3Title: 'Community Driven',
        feat3Desc: 'Full support among members to create inspiring gatherings.',
        sitemapTitle: 'Website Structure / Site-Map',
        sitemapDesc: 'A quick overview of how this application is structured via Vue Router.',
      },
      about: {
        title: 'About Gatherly',
        subtitle: 'Building the future of event experiences, one community at a time.',
        missionTitle: 'Our Mission',
        missionDesc: 'Our mission is to provide the best platform for event organizers and attendees to connect seamlessly, dynamically, and efficiently in the digital age.',
        visionTitle: 'Our Vision',
        visionDesc: 'To become the largest event and community network that inspires global collaboration and creates unforgettable moments.',
      },
      contact: {
        title: 'Contact Us',
        subtitle: "We'd love to hear from you. Please fill out the form below or reach out via our contact info.",
        officeTitle: 'Our Office',
        officeAddr: '123 Event Street, Tech City, 10101',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
        nameLabel: 'Name',
        namePlaceholder: 'John Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'john@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'How can we help you?',
        sendBtn: 'Send Message',
      },
      browse: {
        title: 'Browse & Discover',
        subtitle: 'Find the events and categories that matter most to you.',
      },
      category: {
        title: 'Explore by Category',
        eventsLabel: 'Events',
        items: [
          { name: 'Music & Concerts', icon: '🎵', count: 24 },
          { name: 'Technology', icon: '💻', count: 18 },
          { name: 'Art & Design', icon: '🎨', count: 12 },
          { name: 'Business', icon: '💼', count: 30 },
          { name: 'Health & Wellness', icon: '🧘', count: 15 },
          { name: 'Food & Drink', icon: '🍹', count: 22 },
        ],
      },
      eventList: {
        title: 'Upcoming Events',
        subtitle: 'Discover the latest gatherings and activities happening near you.',
        datePrefix: 'Oct',
        categoryTag: 'Community',
        eventTitlePrefix: 'Community Gathering',
        location: '📍 Main Auditorium, City Center',
        desc: 'Community gathering event to share experiences, new insights, and professional networking.',
        viewDetails: 'View Details →',
      },
      eventDetail: {
        backBtn: '← Back to Events',
        tag: 'Community Event',
        eventTitlePrefix: 'Community Gathering',
        date: 'October 15, 2026',
        location: 'Main Auditorium, City Center',
        attendees: '500+ Attendees',
        aboutTitle: 'About This Event',
        aboutP1: 'This event is designed to bring together professionals, practitioners, and enthusiasts in an inspiring and collaborative atmosphere.',
        aboutP2: 'Gain valuable insights from top speakers, join interactive Q&A sessions, and expand your professional network.',
        agendaTitle: 'Agenda',
        agenda1Time: '09:00 AM',
        agenda1Text: 'Registration & Welcome Coffee',
        agenda2Time: '10:00 AM',
        agenda2Text: 'Opening Keynote Speech',
        agenda3Time: '11:30 AM',
        agenda3Text: 'Networking Session',
        agenda4Time: '01:00 PM',
        agenda4Text: 'Closing Remarks',
        regTitle: 'Registration',
        priceFree: 'Free',
        ticketDesc: 'Secure your spot today before it runs out.',
        registerBtn: 'Register Now',
        spots: 'Only 45 spots left!',
      },
    },
    ID: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        browse: 'Jelajahi',
        events: 'Daftar Acara',
        eventDetailSample: 'Detail Acara (Contoh)',
        category: 'Kategori',
        contact: 'Kontak',
        eventDetail: 'Detail Acara',
      },
      home: {
        badge: 'Selamat Datang di Gatherly',
        title: 'Terhubung, Jelajahi, dan Alami',
        subtitle: 'Bergabunglah dengan komunitas kami untuk menjelajahi acara-acara terbaik bagi Anda.',
        discoverBtn: 'Jelajahi Acara',
        learnMoreBtn: 'Pelajari Lebih Lanjut',
        feat1Title: 'Acara Pilihan',
        feat1Desc: 'Acara terkurasi secara khusus untuk pengalaman yang bermakna dan berkesan bagi Anda.',
        feat2Title: 'Jangkauan Global',
        feat2Desc: 'Terhubung dengan jutaan anggota komunitas dari berbagai belahan dunia.',
        feat3Title: 'Berbasis Komunitas',
        feat3Desc: 'Dukungan penuh antar anggota untuk menciptakan acara yang inspiratif.',
        sitemapTitle: 'Struktur Situs / Site-Map',
        sitemapDesc: 'Gambaran umum bagaimana struktur aplikasi ini diatur melalui Vue Router.',
      },
      about: {
        title: 'Tentang Gatherly',
        subtitle: 'Membangun masa depan pengalaman acara, satu komunitas dalam satu waktu.',
        missionTitle: 'Misi Kami',
        missionDesc: 'Misi kami adalah memberikan platform terbaik bagi penyelenggara dan peserta acara untuk saling terhubung secara mudah, dinamis, dan efisien di era digital.',
        visionTitle: 'Visi Kami',
        visionDesc: 'Menjadi jaringan acara dan komunitas terbesar yang menginspirasi kolaborasi global serta menciptakan momen yang tak terlupakan.',
      },
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Kami ingin mendengar dari Anda. Silakan isi formulir di bawah ini atau hubungi kami melalui informasi kontak.',
        officeTitle: 'Kantor Kami',
        officeAddr: 'Jl. Event No. 123, Kota Teknologi, 10101',
        phoneTitle: 'Telepon',
        emailTitle: 'Email',
        nameLabel: 'Nama',
        namePlaceholder: 'Budi Santoso',
        emailLabel: 'Email',
        emailPlaceholder: 'budi@example.com',
        messageLabel: 'Pesan',
        messagePlaceholder: 'Bagaimana kami bisa membantu Anda?',
        sendBtn: 'Kirim Pesan',
      },
      browse: {
        title: 'Jelajahi & Temukan',
        subtitle: 'Temukan acara dan kategori yang paling penting bagi Anda.',
      },
      category: {
        title: 'Jelajahi Berdasarkan Kategori',
        eventsLabel: 'Acara',
        items: [
          { name: 'Musik & Konser', icon: '🎵', count: 24 },
          { name: 'Teknologi', icon: '💻', count: 18 },
          { name: 'Seni & Desain', icon: '🎨', count: 12 },
          { name: 'Bisnis', icon: '💼', count: 30 },
          { name: 'Kesehatan & Kebugaran', icon: '🧘', count: 15 },
          { name: 'Makanan & Minuman', icon: '🍹', count: 22 },
        ],
      },
      eventList: {
        title: 'Acara Mendatang',
        subtitle: 'Temukan kegiatan dan acara terbaru yang berlangsung di sekitar Anda.',
        datePrefix: 'Okt',
        categoryTag: 'Komunitas',
        eventTitlePrefix: 'Gathering Komunitas',
        location: '📍 Auditorium Utama, Pusat Kota',
        desc: 'Acara kumpul komunitas untuk saling berbagi pengalaman, wawasan baru, serta jejaring profesional.',
        viewDetails: 'Lihat Detail →',
      },
      eventDetail: {
        backBtn: '← Kembali ke Daftar Acara',
        tag: 'Acara Komunitas',
        eventTitlePrefix: 'Gathering Komunitas',
        date: '15 Oktober 2026',
        location: 'Auditorium Utama, Pusat Kota',
        attendees: '500+ Peserta',
        aboutTitle: 'Tentang Acara Ini',
        aboutP1: 'Acara ini dirancang untuk membawa bersama para profesional, praktisi, dan antusias dalam suasana yang inspiratif dan kolaboratif.',
        aboutP2: 'Dapatkan wawasan berharga dari pembicara ternama, ikuti sesi tanya jawab interaktif, dan perluas relasi Anda.',
        agendaTitle: 'Agenda',
        agenda1Time: '09:00 WIB',
        agenda1Text: 'Pendaftaran & Kopi Sambutan',
        agenda2Time: '10:00 WIB',
        agenda2Text: 'Pidato Pembuka Keynote',
        agenda3Time: '11:30 WIB',
        agenda3Text: 'Sesi Jejaring & Ramah Tamah',
        agenda4Time: '13:00 WIB',
        agenda4Text: 'Penutupan',
        regTitle: 'Pendaftaran',
        priceFree: 'Gratis',
        ticketDesc: 'Amankan tempat Anda hari ini sebelum kehabisan.',
        registerBtn: 'Daftar Sekarang',
        spots: 'Tersisa 45 tempat lagi!',
      },
    },
  }

  const t = computed(() => translations[locale.value] || translations.EN)

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
    locale,
    toggleLocale,
    setLocale,
    t,
  }
})
