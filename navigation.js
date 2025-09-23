// Enhanced Navigation JavaScript for Music Club

(function() {
    'use strict';
    
    // DOM Elements
    const backToTop = document.getElementById('backToTop');
    const quickNavBtn = document.getElementById('quickNavBtn');
    const quickNavMenu = document.getElementById('quickNavMenu');
    const quickNavClose = document.getElementById('quickNavClose');
    
    // Back to Top Functionality
    let scrollThreshold = 300;
    
    function updateBackToTopVisibility() {
        if (window.pageYOffset > scrollThreshold) {
            if (backToTop && backToTop.hidden) {
                backToTop.hidden = false;
                backToTop.style.animation = 'slideUp 0.3s ease';
            }
        } else {
            if (backToTop && !backToTop.hidden) {
                backToTop.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => {
                    backToTop.hidden = true;
                }, 200);
            }
        }
    }
    
    // Smooth scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Quick Navigation Menu
    function showQuickNav() {
        if (quickNavMenu) {
            quickNavMenu.hidden = false;
            quickNavMenu.setAttribute('aria-hidden', 'false');
            // Focus first item
            const firstItem = quickNavMenu.querySelector('.quick-nav__item');
            if (firstItem) {
                setTimeout(() => firstItem.focus(), 50);
            }
        }
    }
    
    function hideQuickNav() {
        if (quickNavMenu) {
            quickNavMenu.hidden = true;
            quickNavMenu.setAttribute('aria-hidden', 'true');
            // Return focus to trigger
            if (quickNavBtn) {
                quickNavBtn.focus();
            }
        }
    }
    
    // Enhanced Keyboard Navigation
    function handleGlobalKeydown(e) {
        // Alt + Q: Quick Navigation
        if (e.altKey && e.key.toLowerCase() === 'q') {
            e.preventDefault();
            if (quickNavMenu && quickNavMenu.hidden) {
                showQuickNav();
            } else {
                hideQuickNav();
            }
            return;
        }
        
        // Alt + T: Back to Top
        if (e.altKey && e.key.toLowerCase() === 't') {
            e.preventDefault();
            scrollToTop();
            return;
        }
        
        // Alt + H: Home
        if (e.altKey && e.key.toLowerCase() === 'h') {
            e.preventDefault();
            window.location.href = 'mainmenu.html';
            return;
        }
        
        // Ctrl + 1: Songs
        if (e.ctrlKey && e.key === '1') {
            e.preventDefault();
            window.location.href = 'app.html';
            return;
        }
        
        // Ctrl + 2: Learn
        if (e.ctrlKey && e.key === '2') {
            e.preventDefault();
            window.location.href = 'learn.html';
            return;
        }
        
        // Ctrl + K: Focus Search (if on song page)
        if (e.ctrlKey && e.key.toLowerCase() === 'k') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                e.preventDefault();
                searchInput.focus();
                searchInput.select();
            }
            return;
        }
        
        // Escape: Close modals/menus
        if (e.key === 'Escape') {
            if (quickNavMenu && !quickNavMenu.hidden) {
                e.preventDefault();
                hideQuickNav();
            }
        }
        
        // Enhanced shortcuts for song navigation (if script.js is loaded)
        if (e.key === 'l' || e.key === 'L') {
            const toggleBtn = document.getElementById('toggleListBtn');
            if (toggleBtn && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                toggleBtn.click();
            }
        }
        
        if (e.key === 'f' || e.key === 'F') {
            const favBtn = document.getElementById('favToggle');
            if (favBtn && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                favBtn.click();
            }
        }
        
        if (e.key === 'r' || e.key === 'R') {
            const randomBtn = document.getElementById('randomBtn');
            if (randomBtn && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                randomBtn.click();
            }
        }
        
        if (e.key === 's' || e.key === 'S') {
            const shareBtn = document.getElementById('shareBtn');
            if (shareBtn && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                shareBtn.click();
            }
        }
    }
    
    // Quick Navigation Menu Keyboard Navigation
    function handleQuickNavKeydown(e) {
        if (!quickNavMenu || quickNavMenu.hidden) return;
        
        const items = Array.from(quickNavMenu.querySelectorAll('.quick-nav__item, .quick-nav__header button'));
        const currentIndex = items.indexOf(document.activeElement);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
                items[nextIndex].focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
                items[prevIndex].focus();
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                document.activeElement.click();
                break;
            case 'Escape':
                e.preventDefault();
                hideQuickNav();
                break;
        }
    }
    
    // Enhanced tooltips with keyboard shortcuts
    function addShortcutTooltips() {
        // Add keyboard shortcut hints to existing buttons if they exist
        const shortcuts = {
            'prevBtn': 'Previous song (Left Arrow)',
            'nextBtn': 'Next song (Right Arrow)',
            'randomBtn': 'Random song (R)',
            'favToggle': 'Toggle favorite (F)',
            'shareBtn': 'Share song (S)',
            'toggleListBtn': 'Toggle list (L)'
        };
        
        Object.entries(shortcuts).forEach(([id, tooltip]) => {
            const element = document.getElementById(id);
            if (element) {
                element.setAttribute('title', tooltip);
            }
        });
    }
    
    // Show toast notification
    function showToast(message, duration = 2000) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.hidden = false;
            toast.style.animation = 'slideUp 0.3s ease';
            
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => {
                    toast.hidden = true;
                }, 200);
            }, duration);
        }
    }
    
    // Initialize navigation features
    function init() {
        // Back to Top
        if (backToTop) {
            backToTop.addEventListener('click', scrollToTop);
            window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
            updateBackToTopVisibility(); // Check initial state
        }
        
        // Quick Navigation
        if (quickNavBtn) {
            quickNavBtn.addEventListener('click', showQuickNav);
        }
        
        if (quickNavClose) {
            quickNavClose.addEventListener('click', hideQuickNav);
        }
        
        // Click outside to close quick nav
        if (quickNavMenu) {
            quickNavMenu.addEventListener('click', (e) => {
                if (e.target === quickNavMenu) {
                    hideQuickNav();
                }
            });
        }
        
        // Global keyboard shortcuts
        document.addEventListener('keydown', handleGlobalKeydown);
        document.addEventListener('keydown', handleQuickNavKeydown);
        
        // Add shortcut tooltips
        addShortcutTooltips();
        
        // Accessibility improvements
        document.querySelectorAll('a, button').forEach(element => {
            if (!element.hasAttribute('aria-label') && element.title) {
                element.setAttribute('aria-label', element.title);
            }
        });
        
        // Add smooth scrolling to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export functions for use by other scripts
    window.musicClubNavigation = {
        showQuickNav,
        hideQuickNav,
        scrollToTop,
        showToast
    };
})();

// Additional CSS for fade out animation
const additionalStyles = `
@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
}
`;

// Inject additional styles
if (!document.getElementById('navigation-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'navigation-styles';
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
}