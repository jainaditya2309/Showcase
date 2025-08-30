// Project data array
const projects = [
    // Clone Projects
    {
        category: "Clone Projects",
        title: "Netflix Clone",
        image: "img/netfilx.png",
        video: "video/netfilx.mp4",
        liveLink: "https://jainaditya2309.github.io/Netflix/",
        githubLink: "https://github.com/jainaditya2309/Netflix",
        tech: "HTML, CSS, JS"
    },
    {
        category: "Clone Projects",
        title: "Twitter Clone",
        image: "img/twiter.png",
        video: "video/twiter.mp4",
        liveLink: "https://jainaditya2309.github.io/Twiter-clone/",
        githubLink: "https://github.com/jainaditya2309/Twiter-clone",
        tech: "HTML, Tailwind CSS"
    },
    
    // Basic Websites
    {
        category: "Basic Websites",
        title: "WindUp",
        image: "img/windup.png",
        video: "video/windup.mp4",
        liveLink: "https://jainaditya2309.github.io/Wind-Up/",
        githubLink: "https://github.com/jainaditya2309/Wind-UP",
        tech: "HTML, CSS, JS"
    },
    {
        category: "Basic Websites",
        title: "Click Cart",
        image: "img/click cart.png",
        video: "video/click cart.mp4",
        liveLink: "https://jainaditya2309.github.io/Click-cart/",
        githubLink: "https://github.com/jainaditya2309/Click-cart",
        tech: "HTML, CSS, JS"
    },
    {
        category: "Basic Websites",
        title: "Urban Eats",
        image: "img/urban eats.png",
        video: "video/urbaneat.mp4",
        liveLink: "https://jainaditya2309.github.io/Urban-eats/",
        githubLink: "https://github.com/jainaditya2309/Urban-eats",
        tech: "HTML, CSS, JS"
    },
    
    // React Projects
    {
        category: "React Projects",
        title: "Password Manager",
        image: "img/vaultx.png",
        video: "video/pasward.mp4",
        liveLink: "https://vault-x-six.vercel.app/",
        githubLink: "https://github.com/jainaditya2309/vault-X",
        tech: "React, Tailwind, MongoDB, LocalStorage"
    },
    {
        category: "React Projects",
        title: "Todo List",
        image: "img/todo.png",
        video: "video/todo.mp4",
        liveLink: "https://todo-list-kappa-gules.vercel.app/",
        githubLink: "https://github.com/jainaditya2309/TODO-list",
        tech: "React, Tailwind, MongoDB, LocalStorage"
    },
    
    // Basic Next.js Projects
    {
        category: "Basic Next.js Projects",
        title: "URL Shortener",
        image: "img/url.png",
        video: "video/url.mp4",
        liveLink: "https://urlite-eight.vercel.app/",
        githubLink: "https://github.com/jainaditya2309/URL-lite",
        tech: "Next.js, Node, Express, Tailwind, MongoDB"
    },
    {
        category: "Basic Next.js Projects",
        title: "LinkNest",
        image: "img/link.png",
        video: "video/linktree.mp4",
        liveLink: "#",
        githubLink: "https://github.com/jainaditya2309/Link-Nest-",
        docsLink: "documents/linknest.html",
        tech: "Next.js, Node, Express, Tailwind, MongoDB"
    },
    
    // Minor Project
    {
        category: "Minor Project",
        title: "ChaiExpress",
        image: "img/chai.png",
        video: "video/chai.mp4",
        liveLink: "https://chai-express-six.vercel.app/",
        githubLink: "https://github.com/jainaditya2309/Chai-Express",
        docsLink: "documents/chai_express.html",
        tech: "Next.js, Node, Express, Tailwind, MongoDB, Razorpay, Auth"
    },
    
    // Major Projects
    {
        category: "Major Projects",
        title: "MultiMantra",
        image: "img/multimantra.png",
        video: "video/multimantra.mp4",
        liveLink: "#",
        githubLink: "https://github.com/jainaditya2309/Multi-Mantra-",
        docsLink: "documents/multimantra.html",
        tech: "Next.js, Node, Express, Tailwind, MongoDB, Razorpay, Auth, Chatbot (Rule-based)"
    },
    {
        category: "Major Projects",
        title: "BuildupX",
        image: "img/buildup.png",
        video: "video/buildupx.mp4",
        liveLink: "#",
        githubLink: "https://github.com/jainaditya2309/BuildupX",
        docsLink: "documents/buildupx.html",
        tech: "Next.js, Tailwind, Mongo Atlas, Gemini API, Auth,PWA "
    }
];

// Group projects by category
function groupProjectsByCategory() {
    const categories = {};
    projects.forEach(project => {
        if (!categories[project.category]) {
            categories[project.category] = [];
        }
        categories[project.category].push(project);
    });
    return categories;
}

// Create project card HTML
function createProjectCard(project) {
    // Check if the project is LinkNest, BuildupX, or MultiMantra
    const needsErrorPage = ['LinkNest', 'BuildupX', 'MultiMantra'].includes(project.title);
    const livePreviewLink = needsErrorPage ? 'preview-error.html' : project.liveLink;
    const linkTarget = needsErrorPage ? '_self' : '_blank';
    
    // Check if project has documentation
    const docsButton = project.docsLink ? 
        `<a href="${project.docsLink}" target="_blank" rel="noopener noreferrer" class="btn btn-docs">
            <i class="fas fa-file-alt"></i> Docs
        </a>` : '';
    
    return `
        <div class="project-card" data-aos="fade-up">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tech">${project.tech}</p>
            <div class="project-buttons">
                <button class="btn btn-video" onclick="openVideoModal('${project.video}', ${project.isExternalVideo || false})">
                    <i class="fas fa-play"></i> Watch Video
                </button>
                <a href="${livePreviewLink}" target="${linkTarget}" rel="noopener noreferrer" class="btn btn-live">
                    <i class="fas fa-external-link-alt"></i> Live Preview
                </a>
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-github">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${docsButton}
            </div>
        </div>
    `;
}

// Create category section HTML
function createCategorySection(categoryName, categoryProjects) {
    const projectCards = categoryProjects.map(project => createProjectCard(project)).join('');
    
    return `
        <div class="category-section">
            <h2 class="category-title">${categoryName}</h2>
            <div class="projects-grid">
                ${projectCards}
            </div>
        </div>
    `;
}

// Render all projects
function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    const categorizedProjects = groupProjectsByCategory();
    
    // Define the order of categories
    const categoryOrder = [
        "Clone Projects",
        "Basic Websites",
        "React Projects",
        "Basic Next.js Projects",
        "Minor Project",
        "Major Projects"
    ];
    
    let html = '';
    categoryOrder.forEach(category => {
        if (categorizedProjects[category]) {
            html += createCategorySection(category, categorizedProjects[category]);
        }
    });
    
    projectContainer.innerHTML = html;
}

// Video modal functionality
function openVideoModal(videoSrc, isExternal) {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    const source = video.querySelector('source');
    
    if (isExternal || videoSrc.includes('drive.google.com')) {
        // For Google Drive links, open in a new tab
        window.open(videoSrc, '_blank');
        return;
    }
    
    source.src = videoSrc;
    video.load();
    modal.style.display = 'block';
    
    // Add animation
    modal.style.animation = 'fadeIn 0.3s ease';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all category sections
    setTimeout(() => {
        const categorySections = document.querySelectorAll('.category-section');
        categorySections.forEach(section => {
            observer.observe(section);
        });
    }, 100);
}

// Smooth scroll for scroll indicator
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const projectsSection = document.querySelector('.projects');
    
    scrollIndicator.addEventListener('click', () => {
        projectsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Initialize floating animation for dots
function initFloatingDots() {
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        dot.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add ripple effect to buttons
function addRippleEffect() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            const button = e.target;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
}

// Add CSS for ripple effect
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Error handling for images
function handleImageErrors() {
    setTimeout(() => {
        const images = document.querySelectorAll('.project-image');
        images.forEach(img => {
            img.addEventListener('error', function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
                this.alt = 'Image not found';
            });
        });
    }, 500);
}

// Loading animation
function showLoadingAnimation() {
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = `
        <div class="loading-animation">
            <div class="spinner"></div>
            <p>Loading awesome projects...</p>
        </div>
    `;
    
    // Add loading styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-animation {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem;
            color: #fff;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #ffd700;
            animation: spin 1s ease-in-out infinite;
            margin-bottom: 1rem;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    showLoadingAnimation();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        renderProjects();
        initScrollAnimations();
        initSmoothScroll();
        initParallaxEffect();
        initFloatingDots();
        addRippleStyles();
        addRippleEffect();
        handleImageErrors();
        createDynamicBalls();
        initMouseFollowingBalls();
    }, 1000);
    
    // Modal event listeners
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', closeVideoModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
    
    // Add mouse movement effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            const floatingDots = document.querySelector('.floating-dots');
            if (floatingDots) {
                floatingDots.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
        });
    }
});

// Simple mouse following effect for balls
function initMouseFollowingBalls() {
    const balls = document.querySelectorAll('.animated-ball');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        balls.forEach((ball, index) => {
            const speed = 15 + (index * 5);
            const offsetX = (mouseX - 0.5) * speed;
            const offsetY = (mouseY - 0.5) * speed;
            
            ball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    });
}

// Simple dynamic balls on scroll
function createDynamicBalls() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const balls = document.querySelectorAll('.animated-ball');
        
        balls.forEach((ball, index) => {
            const speed = 0.8 + (index * 0.15);
            const yPos = -(scrolled * speed);
            
            ball.style.transform = `translateY(${yPos}px)`;
        });
    });
}// Add some console styling for fun
console.log('%c🚀 Aditya Jain Portfolio Website Loaded! 🚀', 'color: #ffd700; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript', 'color: #667eea; font-size: 14px;');
