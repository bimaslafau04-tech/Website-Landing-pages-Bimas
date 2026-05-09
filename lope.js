// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Tutup menu saat link diklik (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ========== SMOOTH SCROLL MANUAL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    });
});

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i.fa-chevron-down');
        
        // Tutup FAQ lain
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.remove('active');
                const otherIcon = otherAnswer.previousElementSibling.querySelector('i.fa-chevron-down');
                if (otherIcon) otherIcon.style.transform = 'rotate(0)';
            }
        });
        
        answer.classList.toggle('active');
        if (icon) {
            icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
        }
    });
});

// ========== FORM HANDLING ==========
const form = document.getElementById('contactForm');
const feedbackDiv = document.getElementById('formFeedback');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = document.getElementById('nama')?.value.trim();
        
        if (!nama) {
            if (feedbackDiv) {
                feedbackDiv.innerHTML = '<div style="background: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 8px; font-size: 0.8rem;"><i class="fas fa-exclamation-triangle"></i> Nama lengkap wajib diisi</div>';
            }
            return;
        }
        
        // Simpan ke localStorage
        const inquiries = JSON.parse(localStorage.getItem('bramvisual_inquiries') || '[]');
        inquiries.push({
            nama: nama,
            wa: document.getElementById('wa')?.value || '',
            layanan: document.getElementById('layanan')?.value || '',
            pesan: document.getElementById('pesan')?.value || '',
            tanggal: new Date().toLocaleString('id-ID')
        });
        localStorage.setItem('bramvisual_inquiries', JSON.stringify(inquiries));
        
        if (feedbackDiv) {
            feedbackDiv.innerHTML = '<div style="background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 8px; font-size: 0.8rem;"><i class="fas fa-check-circle"></i> Pesan terkirim! Kami akan hubungi Anda via WhatsApp maksimal 1x24 jam.</div>';
        }
        
        form.reset();
        
        setTimeout(() => {
            if (feedbackDiv) feedbackDiv.innerHTML = '';
        }, 5000);
    });
}

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let wa = document.getElementById("wa").value;
    let layanan = document.getElementById("layanan").value;
    let pesan = document.getElementById("pesan").value;

    let nomorAdmin = "6285185325938";

    let text = 
`Halo Bram Visuals!

Nama: ${nama}
No WA: ${wa}
Layanan: ${layanan}

Pesan:
${pesan}`;

    let url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const wa = document.getElementById("wa").value;
    const layanan = document.getElementById("layanan").value;
    const pesan = document.getElementById("pesan").value;

    const nomorAdmin = "6285185325938"; // GANTI nomor WA kamu

    const text =
`Hai Saya Mau Order Nih!

Nama: ${nama}
Nomor WA: ${wa}
Layanan: ${layanan}

Pesan:
${pesan}`;

    const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});