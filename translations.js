// Sistem Multilingual - Indonesia & English
const translations = {
    id: {
        // Profile section
        role: "Creative Designer & Digital Maker",
        subtitle: "hanya anak yang suka berkarya di internet",

        // Portfolio card
        portfolioTitle: "Portofolio Kami",
        portfolioDesc: "Lihat semua project yang pernah saya kerjakan.",

        // Social media
        instagram: "Instagram",
        tiktok: "TikTok",

        // E-Book section
        ebookBadge: "Gratis",
        ebookTitle: "Kumpulan E-Book",
        ebookDesc: "Mulailah Membaca!",

        // Contact
        contactTitle: "Contact me",

        // Tech Stack
        techTitle: "Tech Stack & Tools",

        // Links
        visitWebsite: "Kunjungi Website Utama",
        botTelegram: "BOT TELEGRAM",

        // Modal
        aboutMe: "Tentang Saya",
        closeModal: "Tutup",

        // Footer
        footer: "Crafted with ❤️ by FAREL"
    },
    en: {
        // Profile section
        role: "Creative Designer & Digital Maker",
        subtitle: "Just a kid who loves creating things on the internet",

        // Portfolio card
        portfolioTitle: "My Portfolio",
        portfolioDesc: "Check out all the projects I've worked on.",

        // Social media
        instagram: "Instagram",
        tiktok: "TikTok",

        // E-Book section
        ebookBadge: "Free",
        ebookTitle: "E-Book Collection",
        ebookDesc: "Start Reading!",

        // Contact
        contactTitle: "Contact me",

        // Tech Stack
        techTitle: "Tech Stack & Tools",

        // Links
        visitWebsite: "Visit Main Website",
        botTelegram: "TELEGRAM BOT",

        // Modal
        aboutMe: "About Me",
        closeModal: "Close",

        // Footer
        footer: "Crafted with ❤️ by FAREL"
    }
};

// Bahasa default
let currentLanguage = localStorage.getItem('language') || 'id';

// Fungsi untuk mengubah bahasa
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageLanguage();
}

// Fungsi untuk mendapatkan teks berdasarkan key
function t(key) {
    return translations[currentLanguage][key] || translations['id'][key];
}

// Fungsi untuk mengupdate semua teks di halaman
function updatePageLanguage() {
    // Update profile
    document.getElementById('role') && (document.getElementById('role').textContent = t('role'));
    document.getElementById('subtitle') && (document.getElementById('subtitle').textContent = t('subtitle'));

    // Update portfolio
    document.getElementById('portfolioTitle') && (document.getElementById('portfolioTitle').textContent = t('portfolioTitle'));
    document.getElementById('portfolioDesc') && (document.getElementById('portfolioDesc').textContent = t('portfolioDesc'));

    // Update social media labels
    document.getElementById('instagramLabel') && (document.getElementById('instagramLabel').textContent = t('instagram'));
    document.getElementById('tiktokLabel') && (document.getElementById('tiktokLabel').textContent = t('tiktok'));

    // Update E-Book
    document.getElementById('ebookBadge') && (document.getElementById('ebookBadge').textContent = t('ebookBadge'));
    document.getElementById('ebookTitle') && (document.getElementById('ebookTitle').textContent = t('ebookTitle'));
    document.getElementById('ebookDesc') && (document.getElementById('ebookDesc').textContent = t('ebookDesc'));

    // Update Contact
    document.getElementById('contactTitle') && (document.getElementById('contactTitle').textContent = t('contactTitle'));

    // Update Tech Stack
    document.getElementById('techTitle') && (document.getElementById('techTitle').textContent = t('techTitle'));

    // Update Links
    document.getElementById('visitWebsiteText') && (document.getElementById('visitWebsiteText').textContent = t('visitWebsite'));
    document.getElementById('botTelegramText') && (document.getElementById('botTelegramText').textContent = t('botTelegram'));

    // Update language buttons
    updateLanguageButtons();
}

// Update styling tombol bahasa aktif
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Inisialisasi halaman saat load
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLanguage;
    updatePageLanguage();
});
