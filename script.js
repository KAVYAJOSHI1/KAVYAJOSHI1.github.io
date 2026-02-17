// Loading animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('fade-out');
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Fetch GitHub repositories
    fetchGitHubProjects();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Enhanced form submission with animation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Animate button
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'var(--gradient-secondary)';

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--glass);
                    backdrop-filter: blur(20px);
                    border: 1px solid var(--success);
                    border-radius: 16px;
                    padding: 30px;
                    text-align: center;
                    color: var(--text-primary);
                    box-shadow: var(--shadow-glow);
                    z-index: 10000;
                    animation: fadeIn 0.5s ease;
                ">
                    <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: 15px;"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon!</p>
                </div>
            `;
            document.body.appendChild(successMessage);

            // Reset form and remove message
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'var(--gradient-primary)';
                successMessage.remove();
            }, 3000);
        }, 2000);
    });
}

// Enhanced navigation active state
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '2px solid var(--primary)';

    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }

    type();
}

// Initialize typing effect
setTimeout(() => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 120);
    }
}, 1500);

// Enhanced hover effects for cards
document.querySelectorAll('.glass-hover').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.setProperty('--glow-color', `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`);
    });
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const targetText = stat.textContent;
        const target = parseInt(targetText);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (targetText.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                stat.textContent = Math.ceil(current) + (targetText.includes('+') ? '+' : '');
            }
        }, 40);
    });
}

// Trigger stats animation when hero section is visible
const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateStats, 2000);
                heroObserver.unobserve(entry.target);
            }
        });
    });

    heroObserver.observe(heroSection);
}

// Easter egg: Konami code
let konamiCode = [];
const sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > sequence.length) {
        konamiCode.shift();
    }

    if (konamiCode.join(',') === sequence.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        alert('🎉 Konami Code activated! You found the easter egg!');
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Function to fetch GitHub projects
async function fetchGitHubProjects() {
    const username = 'KAVYAJOSHI1';
    const projectsContainer = document.querySelector('.more-projects-grid');
    if (!projectsContainer) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
        if (!response.ok) throw new Error('Failed to fetch repositories');

        const repos = await response.json();
        const maxRepos = 6; // Limit to 6 recent repos

        // Filter out forks if desired, or just take the top ones
        const recentRepos = repos
            .filter(repo => !repo.fork)
            .slice(0, maxRepos);

        recentRepos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'project-card glass glass-hover animate-on-scroll';

            const description = repo.description || 'No description available.';
            const language = repo.language || 'Code';

            repoCard.innerHTML = `
                <div class="project-icon"><i class="fas fa-code-branch"></i></div>
                <h3 class="project-title">${repo.name}</h3>
                <p class="project-description">${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</p>
                <div class="tech-stack">
                    <span class="tech-tag">${language}</span>
                    <span class="tech-tag"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> View Repo
                    </a>
                </div>
            `;

            projectsContainer.appendChild(repoCard);
            observer.observe(repoCard);
        });

    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        projectsContainer.innerHTML = '<p class="text-secondary">Could not load projects at this time.</p>';
    }
}
