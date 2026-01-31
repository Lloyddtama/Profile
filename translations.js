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
        footer: "Crafted with  by FAREL"
        ,
        // Portfolio & Project specific
        portfolioHeaderTitle: "Portfolio",
        portfolioHeaderDesc: "Koleksi proyek yang telah saya kerjakan untuk berbagai klien dan industri.",
        filterAll: "Semua Proyek",
        filterUIUX: "UI/UX Design",
        filterWeb: "Website",
        filterMarketplace: "Marketplace",
        viewDetail: "Lihat Detail",

        // Project detail labels
        projectBack: "Kembali ke Portfolio",
        projectSection1: "Latar Belakang Proyek",
        projectSection2: "Solusi yang Saya Berikan",
        projectSection3: "Hasil & Impact",
        projectSection4: "Gallery",
        projectDurationLabel: "Waktu Pengerjaan",
        projectRoleLabel: "Role/Tanggung Jawab",
        projectTechLabel: "Teknologi & Tools",
        projectLinksLabel: "Link & Demo",
        relatedProjectsTitle: "Proyek Lainnya",
        ctaTitle: "Tertarik dengan Kolaborasi?",
        ctaDesc: "Hubungi saya sekarang untuk membahas project Anda berikutnya.",
        ctaButton: "Hubungi Saya"
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
        footer: "Crafted with  by FAREL"
        ,
        // Portfolio & Project specific
        portfolioHeaderTitle: "Portfolio",
        portfolioHeaderDesc: "A collection of projects I've worked on across clients and industries.",
        filterAll: "All Projects",
        filterUIUX: "UI/UX Design",
        filterWeb: "Website",
        filterMarketplace: "Marketplace",
        viewDetail: "View Details",

        // Project detail labels
        projectBack: "Back to Portfolio",
        projectSection1: "Project Background",
        projectSection2: "Solution I Provided",
        projectSection3: "Results & Impact",
        projectSection4: "Gallery",
        projectDurationLabel: "Duration",
        projectRoleLabel: "Role / Responsibility",
        projectTechLabel: "Technologies & Tools",
        projectLinksLabel: "Links & Demo",
        relatedProjectsTitle: "Other Projects",
        ctaTitle: "Interested in Collaborating?",
        ctaDesc: "Contact me now to discuss your next project.",
        ctaButton: "Contact Me"
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

    // Portfolio page header
    document.getElementById('portfolioHeaderTitle') && (document.getElementById('portfolioHeaderTitle').textContent = t('portfolioHeaderTitle'));
    document.getElementById('portfolioHeaderDesc') && (document.getElementById('portfolioHeaderDesc').textContent = t('portfolioHeaderDesc'));

    // Filter buttons (if present)
    document.getElementById('filterAll') && (document.getElementById('filterAll').textContent = t('filterAll'));
    document.getElementById('filterUIUX') && (document.getElementById('filterUIUX').textContent = t('filterUIUX'));
    document.getElementById('filterWeb') && (document.getElementById('filterWeb').textContent = t('filterWeb'));
    document.getElementById('filterMarketplace') && (document.getElementById('filterMarketplace').textContent = t('filterMarketplace'));

    // Update all 'view detail' spans
    document.querySelectorAll('.view-detail').forEach(el => el.textContent = t('viewDetail'));

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

    // Project detail specific
    document.getElementById('projectBack') && (document.getElementById('projectBack').textContent = t('projectBack'));
    document.getElementById('projectSection1') && (document.getElementById('projectSection1').textContent = t('projectSection1'));
    document.getElementById('projectSection2') && (document.getElementById('projectSection2').textContent = t('projectSection2'));
    document.getElementById('projectSection3') && (document.getElementById('projectSection3').textContent = t('projectSection3'));
    document.getElementById('projectSection4') && (document.getElementById('projectSection4').textContent = t('projectSection4'));
    document.getElementById('projectDurationLabel') && (document.getElementById('projectDurationLabel').textContent = t('projectDurationLabel'));
    document.getElementById('projectRoleLabel') && (document.getElementById('projectRoleLabel').textContent = t('projectRoleLabel'));
    document.getElementById('projectTechLabel') && (document.getElementById('projectTechLabel').textContent = t('projectTechLabel'));
    document.getElementById('projectLinksLabel') && (document.getElementById('projectLinksLabel').textContent = t('projectLinksLabel'));
    document.getElementById('relatedProjectsTitle') && (document.getElementById('relatedProjectsTitle').textContent = t('relatedProjectsTitle'));
    document.getElementById('ctaTitle') && (document.getElementById('ctaTitle').textContent = t('ctaTitle'));
    document.getElementById('ctaDesc') && (document.getElementById('ctaDesc').textContent = t('ctaDesc'));
    document.getElementById('ctaButton') && (document.getElementById('ctaButton').textContent = t('ctaButton'));
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
