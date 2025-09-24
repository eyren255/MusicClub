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
    
    // Enhanced Sidebar functionality
    function initSidebar() {
        const toggleListBtn = document.getElementById('toggleListBtn');
        const closeSidebarBtn = document.getElementById('closeSidebarBtn');
        const sidebarPanel = document.getElementById('songListPanel');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        
        function openSidebar() {
            if(sidebarPanel) {
                sidebarPanel.classList.remove('sidebar--hidden');
                sidebarPanel.classList.add('is-open');
                if(sidebarOverlay) {
                    sidebarOverlay.classList.add('is-visible');
                }
                if(toggleListBtn) {
                    toggleListBtn.setAttribute('aria-expanded', 'true');
                    toggleListBtn.innerHTML = '✕ Close';
                    toggleListBtn.title = 'Hide Songs (L)';
                }
                // Only prevent body scroll on mobile
                if(window.innerWidth <= 768) {
                    document.body.style.overflow = 'hidden';
                }
            }
        }
        
        function closeSidebar() {
            if(sidebarPanel) {
                sidebarPanel.classList.add('sidebar--hidden');
                sidebarPanel.classList.remove('is-open');
                if(sidebarOverlay) {
                    sidebarOverlay.classList.remove('is-visible');
                }
                if(toggleListBtn) {
                    toggleListBtn.setAttribute('aria-expanded', 'false');
                    toggleListBtn.innerHTML = '☰ Songs';
                    toggleListBtn.title = 'Show Songs (L)';
                }
                document.body.style.overflow = '';
            }
        }
        
        // Toggle sidebar
        if(toggleListBtn) {
            toggleListBtn.addEventListener('click', function() {
                const isOpen = sidebarPanel && sidebarPanel.classList.contains('is-open');
                if(isOpen) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            });
        }
        
        // Close sidebar button
        if(closeSidebarBtn) {
            closeSidebarBtn.addEventListener('click', closeSidebar);
        }
        
        // Close sidebar when clicking overlay
        if(sidebarOverlay) {
            sidebarOverlay.addEventListener('click', closeSidebar);
        }
        
        // Add Escape key handling to existing keyboard handler
        const originalHandleGlobalKeydown = handleGlobalKeydown;
        handleGlobalKeydown = function(e) {
            // Handle Escape for sidebar
            if(e.key === 'Escape' && sidebarPanel && sidebarPanel.classList.contains('is-open')) {
                e.preventDefault();
                closeSidebar();
                return;
            }
            
            // Call original handler
            return originalHandleGlobalKeydown(e);
        };
    }
    
    // Always-draggable photos functionality
    function initAlwaysDraggablePhotos() {
        const imageWrap = document.querySelector('.viewer__image-wrap');
        const songImage = document.getElementById('songImage');
        
        if(imageWrap && songImage) {
            let isDragging = false;
            let startX, startY, currentTransform = {x: 0, y: 0};
            
            function startDrag(e) {
                isDragging = true;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                startX = clientX - currentTransform.x;
                startY = clientY - currentTransform.y;
                songImage.style.cursor = 'grabbing';
            }
            
            function drag(e) {
                if(!isDragging) return;
                e.preventDefault();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                currentTransform.x = clientX - startX;
                currentTransform.y = clientY - startY;
                songImage.style.transform = `translate(${currentTransform.x}px, ${currentTransform.y}px)`;
            }
            
            function stopDrag() {
                isDragging = false;
                songImage.style.cursor = 'grab';
            }
            
            // Mouse events
            songImage.addEventListener('mousedown', startDrag);
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
            
            // Touch events
            songImage.addEventListener('touchstart', startDrag, {passive: false});
            document.addEventListener('touchmove', drag, {passive: false});
            document.addEventListener('touchend', stopDrag);
            
            // Reset position when changing songs
            function resetImagePosition() {
                currentTransform = {x: 0, y: 0};
                if(songImage) {
                    songImage.style.transform = 'translate(0px, 0px)';
                }
            }
            
            // Hook into song changes if available
            setTimeout(() => {
                if(window.selectIndex) {
                    const originalSelectIndex = window.selectIndex;
                    window.selectIndex = function(...args) {
                        resetImagePosition();
                        return originalSelectIndex.apply(this, args);
                    };
                }
            }, 500);
        }
    }
    
    // Enhanced bottom navigation functionality
    function initBottomNavigation() {
        // Get bottom navigation elements
        const bottomPrevBtn = document.getElementById('bottomPrevBtn');
        const bottomNextBtn = document.getElementById('bottomNextBtn');
        const bottomFavBtn = document.getElementById('bottomFavBtn');
        const bottomRandomBtn = document.getElementById('bottomRandomBtn');
        const bottomFullscreenBtn = document.getElementById('bottomFullscreenBtn');
        
        // Connect bottom nav to existing functions
        if(bottomPrevBtn) {
            bottomPrevBtn.addEventListener('click', () => {
                const prevBtn = document.getElementById('prevBtn');
                if(prevBtn) prevBtn.click();
            });
        }
        
        if(bottomNextBtn) {
            bottomNextBtn.addEventListener('click', () => {
                const nextBtn = document.getElementById('nextBtn');
                if(nextBtn) nextBtn.click();
            });
        }
        
        if(bottomFavBtn) {
            bottomFavBtn.addEventListener('click', () => {
                const favBtn = document.getElementById('favToggle');
                if(favBtn) favBtn.click();
            });
        }
        
        if(bottomRandomBtn) {
            bottomRandomBtn.addEventListener('click', () => {
                const randomBtn = document.getElementById('randomBtn');
                if(randomBtn) randomBtn.click();
            });
        }
        
        if(bottomFullscreenBtn) {
            bottomFullscreenBtn.addEventListener('click', () => {
                const fullscreenBtn = document.getElementById('fullscreenBtn');
                if(fullscreenBtn) fullscreenBtn.click();
            });
        }
        
        // Update favorite button visual state in bottom nav
        function updateBottomNavFavorite() {
            const bottomFavIcon = bottomFavBtn && bottomFavBtn.querySelector('.bottom-nav__icon');
            if(bottomFavIcon) {
                const favorites = typeof window.getFavorites === 'function' ? window.getFavorites() : [];
                const isFav = typeof window.currentIndex !== 'undefined' && favorites.includes(window.currentIndex);
                
                bottomFavBtn.classList.toggle('is-favorite', isFav);
                bottomFavIcon.textContent = isFav ? '♥' : '♡';
            }
        }
        
        // Update bottom nav favorite when the page loads
        setTimeout(updateBottomNavFavorite, 200);
        
        // Hook into existing updateFavUi function if available
        setTimeout(() => {
            if(typeof window.updateFavUi === 'function') {
                const originalUpdateFavUi = window.updateFavUi;
                window.updateFavUi = function() {
                    originalUpdateFavUi();
                    updateBottomNavFavorite();
                };
            }
        }, 300);
        
        // Add haptic feedback for mobile interactions
        function addHapticFeedback() {
            if('vibrate' in navigator) {
                navigator.vibrate(50);
            }
        }
        
        // Add haptic feedback to bottom nav buttons
        const bottomNavBtns = document.querySelectorAll('.bottom-nav__btn');
        bottomNavBtns.forEach(btn => {
            btn.addEventListener('click', addHapticFeedback);
        });
        
        // Export function for use by script.js
        window.updateBottomNavFavorite = updateBottomNavFavorite;
        
        // Initial update
        setTimeout(updateBottomNavFavorite, 500);
    }
    
    // Enhanced touch gestures for mobile
    function initTouchGestures() {
        const imageContainer = document.getElementById('imageContainer');
        if(!imageContainer) return;
        
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        
        function handleTouchStart(e) {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }
        
        function handleTouchEnd(e) {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipeGesture();
        }
        
        function handleSwipeGesture() {
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            const minSwipeDistance = 50;
            
            // Only process if horizontal swipe is longer than vertical
            if(Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
                if(deltaX > 0) {
                    // Swipe right - previous song
                    const prevBtn = document.getElementById('prevBtn');
                    if(prevBtn) {
                        prevBtn.click();
                        addHapticFeedback();
                    }
                } else {
                    // Swipe left - next song
                    const nextBtn = document.getElementById('nextBtn');
                    if(nextBtn) {
                        nextBtn.click();
                        addHapticFeedback();
                    }
                }
            }
        }
        
        imageContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
        imageContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
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
        
        // New Sidebar functionality
        initSidebar();
        
        // Always-draggable photos
        initAlwaysDraggablePhotos();
        
        // Enhanced bottom navigation with favorite updates  
        initBottomNavigation();
        
        // Touch gestures for mobile
        initTouchGestures();
        
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