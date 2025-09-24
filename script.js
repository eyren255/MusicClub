(function(){
        "use strict";

        /** Collections */
        const collections = {
                "Sa Yar Ga Toe Pwell": [
                "စတော်ဘယ်ရီချစ်သဲချင်",
                "မြေပြန့်သူလေး",
                "မျက်သွယ်",
                "ရေစီကြောင်းလေး",
                "ဖက်ထားမယ်",
                "ပြော",
                "ဝှက်ထားတဲ့ကောင်ကင်",
                "အချစ်အတွက် တစ်ဖန်မွေးဖွားခဲ့ပြီ",
                "အချစ်လို့ခေါ်သလား",
                "လရိပ်",
                "မမ",
                "ကျေးဇူးပါကွယ်",
                "နားလည်ပါ",
                "ငယ်ချစ်ပုံပြင်",
                "ချစ်တာတစ်ခုထဲသိတယ်",
                "မြေနီလမ်း",
                "more that I can say(carzoo)",
                "ခရီများအဆုံးထိလျှောက်",
                "The Old you (Piano Only)",
                "ရိုးရှင်သောဘဝ",
                "မကြာခင်မှာကြင်နာမယ်",
                "မင်းတစ်ယောက်သာ",
                "တိတ်တခိုးအချစ်",
                "အတိုင်းထက်အလွန်",
                "အတောင်ပံပါရင်မင်းဆီကို",
                "ယုံကြည်ရာ",
                "နင်စေရင်",
                "ဆွေးတယ်",
                "နွယ်နီ",
                "သူငယ်ချင်း",
                "မောင့်မျက်ရည်၀ိုင်း",
                "နောက်ဆုံးရင်ခွင်",
                "အချစ်မျက်ဝန်း",
                "တို့သတိရနေမှာပါ",
                "အမေ့အိမ်",
                "ကိုယ်မညာတော့ဘူး"
                ],
                "Music Club Song List": []
        };
        let currentCollection = "Sa Yar Ga Toe Pwell";
        function getSongs(){ return collections[currentCollection] || []; }

        // Enhanced Image Viewer State
        let isFullscreen = false;
        
        /** Map human-readable titles to image filenames in folder `Sa Yar Ga Toe Pwell` */
        const filenameByTitle = {
                "စတော်ဘယ်ရီချစ်သဲချင်": "Sa Yar Ga Toe Pwell/စတော်ဘယ်ရီချစ်သဲချင်.png",
                "မြေပြန့်သူလေး": "Sa Yar Ga Toe Pwell/မြေပြန့်သူလေး.png",
                "မျက်သွယ်": "Sa Yar Ga Toe Pwell/မျက်သွယ်.png",
                "ရေစီကြောင်းလေး": "Sa Yar Ga Toe Pwell/ရေစီကြောင်းလေး.png",
                "ဖက်ထားမယ်": "Sa Yar Ga Toe Pwell/ဖက်ထားမယ်.png",
                "ပြော": "Sa Yar Ga Toe Pwell/ပြော.png",
                "ဝှက်ထားတဲ့ကောင်ကင်": "Sa Yar Ga Toe Pwell/ဝှက်ထားတဲ့ကောင်ကင်.png",
                "အချစ်အတွက် တစ်ဖန်မွေးဖွားခဲ့ပြီ": "Sa Yar Ga Toe Pwell/အချစ်အတွက် တစ်ဖန်မွေးဖွားခဲ့ပြီ.png",
                "အချစ်လို့ခေါ်သလား": "Sa Yar Ga Toe Pwell/အချစ်လို့ခေါ်သလား.png",
                "လရိပ်": "Sa Yar Ga Toe Pwell/လရိပ်.png",
                "မမ": "Sa Yar Ga Toe Pwell/မမ.png",
                "ကျေးဇူးပါကွယ်": "Sa Yar Ga Toe Pwell/ကျေးဇူးပါကွယ်.png",
                "နားလည်ပါ": "Sa Yar Ga Toe Pwell/နားလည်ပါ.jpg",
                "ငယ်ချစ်ပုံပြင်": "Sa Yar Ga Toe Pwell/ငယ်ချစ်ပုံပြင်.png",
                "ချစ်တာတစ်ခုထဲသိတယ်": "Sa Yar Ga Toe Pwell/ချစ်တာတစ်ခုထဲသိတယ်.png",
                "မြေနီလမ်း": "Sa Yar Ga Toe Pwell/မြေနီလမ်း.png",
                "more that I can say(carzoo)": "Sa Yar Ga Toe Pwell/more that I can say(carzoo).png",
                "ခရီများအဆုံးထိလျှောက်": "Sa Yar Ga Toe Pwell/ခရီများအဆုံးထိလျှောက်.png",
                "The Old you (Piano Only)": "Sa Yar Ga Toe Pwell/The Old you (Piano Only).png",
                "ရိုးရှင်သောဘဝ": "Sa Yar Ga Toe Pwell/ရိုးရှင်သောဘဝ.png",
                "မကြာခင်မှာကြင်နာမယ်": "Sa Yar Ga Toe Pwell/မကြာခင်မှာကြင်နာမယ်.png",
                "မင်းတစ်ယောက်သာ": "Sa Yar Ga Toe Pwell/မင်းတစ်ယောက်သာ.png",
                "တိတ်တခိုးအချစ်": "Sa Yar Ga Toe Pwell/တိတ်တခိုးအချစ်.png",
                "အတိုင်းထက်အလွန်": "Sa Yar Ga Toe Pwell/အတိုင်းထက်အလွန်.png",
                "အတောင်ပံပါရင်မင်းဆီကို": "Sa Yar Ga Toe Pwell/အတောင်ပံပါရင်မင်းဆီကို.png",
                "ယုံကြည်ရာ": "Sa Yar Ga Toe Pwell/ယုံကြည်ရာ.png",
                "နင်စေရင်": "Sa Yar Ga Toe Pwell/နင်စေရင်.png",
                "ဆွေးတယ်": "Sa Yar Ga Toe Pwell/ဆွေးတယ်.png",
                "နွယ်နီ": "Sa Yar Ga Toe Pwell/နွယ်နီ.png",
                "သူငယ်ချင်း": "Sa Yar Ga Toe Pwell/သူငယ်ချင်း.png",
                "မောင့်မျက်ရည်၀ိုင်း": "Sa Yar Ga Toe Pwell/မောင့်မျက်ရည်၀ိုင်း.png",
                "နောက်ဆုံးရင်ခွင်": "Sa Yar Ga Toe Pwell/နောက်ဆုံးရင်ခွင်.png",
                "အချစ်မျက်ဝန်း": "Sa Yar Ga Toe Pwell/အချစ်မျက်ဝန်း.png",
                "တို့သတိရနေမှာပါ": "Sa Yar Ga Toe Pwell/တို့သတိရနေမှာပါ.png",
                "အမေ့အိမ်": "Sa Yar Ga Toe Pwell/အမေ့အိမ်.png",
                "ကိုယ်မညာတော့ဘူး": "Sa Yar Ga Toe Pwell/ကိုယ်မညာတော့ဘူး.jpg"
        };

    const elements = {
                list: document.getElementById("songList"),
                image: document.getElementById("songImage"),
                fallback: document.getElementById("imageFallback"),
                metaIndex: document.getElementById("metaIndex"),
                metaTitle: document.getElementById("metaTitle"),
                prev: document.getElementById("prevBtn"),
                next: document.getElementById("nextBtn"),
                search: document.getElementById("searchInput"),
                listPanel: document.getElementById("songListPanel"),
                toggleList: document.getElementById("toggleListBtn"),
                landing: null,
                enterBtn: null,
                // New simplified navigation elements
                currentSongTitle: document.getElementById("currentSongTitle"),
                songCounter: document.getElementById("songCounter"),
                searchBtn: document.getElementById("searchBtn"),
                favoriteBtn: document.getElementById("favoriteBtn"),
                zoomBtn: document.getElementById("zoomBtn"),
                // Song drawer elements (sidebar)
                songDrawer: document.getElementById("songListPanel"),
                drawerBackdrop: document.getElementById("drawerBackdrop"),
                closeDrawerBtn: document.getElementById("closeSidebarBtn"),
                clearSearchBtn: document.getElementById("clearSearch"),
                // Tabs in drawer
                tabAll: document.getElementById("allSongsTab"),
                tabFav: document.getElementById("favoritesTab"),
                // Zoom overlay elements
                zoomOverlay: document.getElementById("zoomOverlay"),
                zoomBackdrop: document.getElementById("zoomBackdrop"),
                closeZoomBtn: document.getElementById("closeZoomBtn"),
                zoomInBtn: document.getElementById("zoomInBtn"),
                zoomOutBtn: document.getElementById("zoomOutBtn"),
                zoomResetBtn: document.getElementById("resetZoomBtn"),
                // Loading elements
                loadingOverlay: document.getElementById("imageLoadingOverlay"),
                zoomIndicator: document.getElementById("zoomIndicator"),
                zoomLevel: document.getElementById("zoomLevel")
        };

    let currentIndex = 0; // 0-based
    let filteredIndexes = getSongs().map((_, i) => i);
    let favoritesByCollection = loadJson('favoritesByCollection', {});
    let recentByCollection = loadJson('recentByCollection', {});
    let activeTab = loadJson('activeTab', 'all');
    currentCollection = loadJson('lastCollection', currentCollection);
        // Removed zoomScale - using currentZoom consistently

        function saveJson(key, value){
                try{ localStorage.setItem(key, JSON.stringify(value)); }catch(_){}
        }
        function loadJson(key, fallback){
                try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(_){ return fallback; }
        }

    function getFavorites(){
        return favoritesByCollection[currentCollection] || [];
    }
    function setFavorites(arr){
        favoritesByCollection[currentCollection] = arr;
        saveJson('favoritesByCollection', favoritesByCollection);
    }
    function getRecent(){
        return recentByCollection[currentCollection] || [];
    }
    function setRecent(arr){
        recentByCollection[currentCollection] = arr;
        saveJson('recentByCollection', recentByCollection);
    }

        function renderList(){
                elements.list.innerHTML = "";
        const songs = getSongs();
        let sourceIndexes = filteredIndexes;
        const favorites = getFavorites();
        const recent = getRecent();
        if(activeTab === 'fav') sourceIndexes = sourceIndexes.filter(i => favorites.includes(i));
        if(activeTab === 'recent') sourceIndexes = sourceIndexes.filter(i => recent.includes(i));
        if(songs.length === 0){
            const div = document.createElement('div');
            div.className = 'empty-state';
            div.textContent = 'No songs in this collection.';
            elements.list.appendChild(div);
            return;
        }
        if(sourceIndexes.length === 0){
            const div = document.createElement('div');
            div.className = 'empty-state';
            div.textContent = 'No items match this view yet.';
            elements.list.appendChild(div);
            return;
        }
        sourceIndexes.forEach((songIndex) => {
                        const title = songs[songIndex];
                        const li = document.createElement("li");
                        li.className = "song-item" + (songIndex === currentIndex ? " active" : "");
                        li.setAttribute("data-index", String(songIndex));
            const isFav = favorites.includes(songIndex);
                        // Highlight search matches in title
                        const searchQuery = elements.search.value.trim();
                        const caseSensitive = document.getElementById('caseSensitive')?.checked ?? false;
                        const highlightedTitle = searchQuery ? highlightMatches(title, searchQuery, caseSensitive) : escapeHtml(title);
                        
                        li.innerHTML = `
                                <span class="song-index">${songIndex + 1}</span>
                                <span class="song-title" title="${escapeHtml(title)}">${highlightedTitle}</span>
                                ${isFav ? '<span class="badge">❤</span>' : ''}
                        `;
                        li.addEventListener("click", () => selectIndex(songIndex));
                        elements.list.appendChild(li);
                });
        }

        function escapeHtml(str){
                return str.replace(/[&<>"']/g, function(ch){
                        return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[ch];
                });
        }

        function updateMeta(){
            updateCurrentSongDisplay();
            const songs = getSongs();
            // Update old elements if they exist (for legacy support)
            if (elements.metaIndex) {
                elements.metaIndex.textContent = `${currentIndex + 1} / ${songs.length}`;
            }
            if (elements.metaTitle) {
                elements.metaTitle.textContent = songs[currentIndex] || "—";
            }
        }

        function loadImageForCurrent(){
                const songs = getSongs();
                const title = songs[currentIndex];
                const src = filenameByTitle[title];
                // Always reset fallback state before attempting to load
                elements.fallback.hidden = true;
                elements.image.hidden = false;
                
                // Clear ready states before loading new image
                if (elements.next) elements.next.classList.remove('ready');
                if (elements.prev) elements.prev.classList.remove('ready');
                
                // Reset zoom state for new image
                currentZoom = 1;
                imageTranslateX = 0;
                imageTranslateY = 0;
                
                if(!src){
                        showFallback();
                        hideLoadingOverlay();
                        return;
                }
                
                // Show loading overlay with debounce to avoid flicker
                setTimeout(() => {
                    if (elements.image.classList.contains('is-loading')) {
                        showLoadingOverlay();
                    }
                }, 200);
                
                elements.image.hidden = false;
                elements.fallback.hidden = true;
                elements.image.alt = title;
                elements.image.classList.remove('is-loaded');
                elements.image.classList.add('is-loading');
                elements.image.src = src + `?v=${encodeURIComponent(src.length)}`; // cache-bust lightly
        // Enhanced preloading system
        preloadAdjacentImages();
                // Update navigation state after preloading starts
                setTimeout(() => updateNavigationState(), 100);
                // Auto-fit image when loading new image - use onload for reliability
                const autoFitOnLoad = () => {
                    if (elements.image.naturalWidth && elements.image.naturalHeight) {
                        fitToScreen();
                    }
                };
                
                // Bind to onload event for consistent behavior
                elements.image.onload = autoFitOnLoad;
                
                // Also call immediately if image is already cached/complete
                if (elements.image.complete && elements.image.naturalWidth) {
                    autoFitOnLoad();
                }
        }

        // Enhanced image preloading system
        const imageCache = new Map();
        
        function preloadAdjacentImages() {
                const songs = getSongs();
                const indices = [-2, -1, 1, 2]; // Preload 2 images in each direction
                
                indices.forEach(offset => {
                        const targetIndex = (currentIndex + offset + songs.length) % songs.length;
                        const title = songs[targetIndex];
                        const src = filenameByTitle[title];
                        
                        if (src && !imageCache.has(src)) {
                                const img = new Image();
                                img.onload = () => {
                                        imageCache.set(src, img);
                                        // Subtle visual feedback for loaded images
                                        if (Math.abs(offset) === 1) {
                                                updateNavigationState();
                                        }
                                };
                                img.onerror = () => {
                                        console.warn(`Failed to preload image: ${src}`);
                                };
                                img.src = src + `?v=${encodeURIComponent(src.length)}`;
                        }
                });
                
                // Keep cache size reasonable
                if (imageCache.size > 12) {
                        const entries = Array.from(imageCache.entries());
                        entries.slice(0, 6).forEach(([key]) => imageCache.delete(key));
                        // Update navigation state after cache cleanup
                        setTimeout(() => updateNavigationState(), 50);
                }
        }
        
        function updateNavigationState() {
                const songs = getSongs();
                const nextSrc = filenameByTitle[songs[(currentIndex + 1) % songs.length]];
                const prevSrc = filenameByTitle[songs[(currentIndex - 1 + songs.length) % songs.length]];
                
                // Clear previous ready states first
                elements.next.classList.remove('ready');
                elements.prev.classList.remove('ready');
                
                // Add ready state only if images are currently cached
                if (nextSrc && imageCache.has(nextSrc)) {
                        elements.next.classList.add('ready');
                }
                if (prevSrc && imageCache.has(prevSrc)) {
                        elements.prev.classList.add('ready');
                }
        }

        function showFallback(){
                elements.image.hidden = true;
                elements.fallback.hidden = false;
        }

        function selectIndex(index){
                const songs = getSongs();
                if(index < 0 || index >= songs.length) return;
                currentIndex = index;
                renderList();
                updateMeta();
                loadImageForCurrent(); // This will reset zoom automatically
        updateFavUi();
        pushRecent(index);
                // On small screens, auto-close the list to reveal the image
                if(window.innerWidth <= 900 && elements.listPanel && elements.listPanel.classList.contains("is-open")){
                        hideSongDrawer();
                        const overlayEl = document.getElementById('sidebarOverlay');
                        if(overlayEl){ overlayEl.hidden = true; overlayEl.classList.remove('is-visible'); }
                        if(elements.toggleList){ elements.toggleList.classList.remove('is-on'); elements.toggleList.setAttribute('aria-expanded','false'); }
                }
        }

        function selectPrev(){ selectIndex(currentIndex - 1); }
        function selectNext(){ selectIndex(currentIndex + 1); }

        function handleKeyboard(e){
                // ArrowUp/Down moves selection within list, ArrowLeft/Right also prev/next
                const songs = getSongs();
                switch(e.key){
                        case "ArrowUp": e.preventDefault(); selectPrev(); break;
                        case "ArrowDown": e.preventDefault(); selectNext(); break;
                        case "ArrowLeft": e.preventDefault(); selectPrev(); break;
                        case "ArrowRight": e.preventDefault(); selectNext(); break;
                        case "Home": e.preventDefault(); selectIndex(0); break;
                        case "End": e.preventDefault(); selectIndex(songs.length - 1); break;
                }
        }

        // Enhanced search with fuzzy matching
        function fuzzyMatch(text, query) {
            if (!query) return { match: true, score: 1 };
            if (!text) return { match: false, score: 0 };
            
            const textLower = text.toLowerCase();
            const queryLower = query.toLowerCase();
            
            // Exact match gets highest score
            if (textLower.includes(queryLower)) {
                return { match: true, score: 0.9 };
            }
            
            // Fuzzy matching algorithm
            let score = 0;
            let queryIndex = 0;
            let consecutiveMatches = 0;
            
            for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
                if (textLower[i] === queryLower[queryIndex]) {
                    queryIndex++;
                    consecutiveMatches++;
                    score += consecutiveMatches * 0.1; // Bonus for consecutive matches
                } else {
                    consecutiveMatches = 0;
                }
            }
            
            // Calculate final score
            const completionRatio = queryIndex / queryLower.length;
            const finalScore = completionRatio * (score + 0.3);
            
            return {
                match: completionRatio > 0.6, // At least 60% of query characters must match
                score: finalScore
            };
        }

        function highlightMatches(text, query) {
            if (!query || !text) return text;
            
            const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            return escapeHtml(text).replace(regex, '<span class="search-match-highlight">$1</span>');
        }

        function applySearchFilter(){
                const qRaw = elements.search.value || "";
                const q = qRaw.toLowerCase();
                const qDigits = q.replace(/[^0-9]/g, "");
                
                // Get search options
                const useFuzzySearch = document.getElementById('fuzzySearch')?.checked ?? true;
                const searchInFavoritesOnly = document.getElementById('searchInFavorites')?.checked ?? false;
                const caseSensitive = document.getElementById('caseSensitive')?.checked ?? false;
                
        const songs = getSongs();
        const searchResults = songs
                        .map((title, i) => ({ title, i }))
                        .filter(x => {
                            // Filter by favorites if option is enabled
                            if (searchInFavoritesOnly && !getFavorites().includes(x.i)) {
                                return false;
                            }
                            
                            if (q.length === 0) return true;
                            
                            const searchTitle = caseSensitive ? x.title : x.title.toLowerCase();
                            const searchQuery = caseSensitive ? qRaw : q;
                            
                            // Number matching
                            const indexStr = String(x.i + 1);
                            const matchesNumber = qDigits.length > 0 && indexStr.startsWith(qDigits);
                            
                            if (matchesNumber) return true;
                            
                            // Text matching with case sensitivity support
                            if (useFuzzySearch) {
                                const fuzzyResult = caseSensitive ? 
                                    fuzzyMatch(x.title, qRaw) : 
                                    fuzzyMatch(searchTitle, searchQuery);
                                return fuzzyResult.match;
                            } else {
                                return searchTitle.includes(searchQuery);
                            }
                        })
                        .sort((a, b) => {
                            if (q.length === 0) return 0;
                            
                            // Sort by relevance when using fuzzy search
                            if (useFuzzySearch) {
                                const searchTitle = caseSensitive ? a.title : a.title.toLowerCase();
                                const searchQuery = caseSensitive ? qRaw : q;
                                const scoreA = fuzzyMatch(searchTitle, searchQuery).score;
                                
                                const searchTitleB = caseSensitive ? b.title : b.title.toLowerCase();
                                const scoreB = fuzzyMatch(searchTitleB, searchQuery).score;
                                
                                return scoreB - scoreA; // Higher score first
                            }
                            return 0;
                        });
                        
        filteredIndexes = searchResults.map(x => x.i);
        
        // Update search results counter
        updateSearchResultsCounter(filteredIndexes.length, songs.length);
        
                // Keep currentIndex if still visible; else snap to first visible
                if(!filteredIndexes.includes(currentIndex)){
                        currentIndex = filteredIndexes.length ? filteredIndexes[0] : 0;
                }
                renderList();
                updateMeta();
                loadImageForCurrent();
        }

        function updateSearchResultsCounter(resultsCount, totalCount) {
            const counter = document.getElementById('searchResults');
            const countSpan = document.getElementById('searchCount');
            
            if (!counter || !countSpan) return; // Safety check for missing elements
            
            if (elements.search.value.trim() === '') {
                counter.hidden = true;
                return;
            }
            
            counter.hidden = false;
            countSpan.textContent = `${resultsCount} of ${totalCount}`;
        }

        // Helper functions for new navigation
        function showSongDrawer() {
            if (elements.songDrawer) {
                elements.songDrawer.classList.add('is-open');
                if (elements.toggleList) elements.toggleList.setAttribute('aria-expanded', 'true');
            }
        }
        
        function hideSongDrawer() {
            if (elements.songDrawer) {
                elements.songDrawer.classList.remove('is-open');
                if (elements.toggleList) elements.toggleList.setAttribute('aria-expanded', 'false');
            }
        }
        
        function showZoomOverlay() {
            if (elements.zoomOverlay) {
                elements.zoomOverlay.hidden = false;
            }
        }
        
        function hideZoomOverlay() {
            if (elements.zoomOverlay) {
                elements.zoomOverlay.hidden = true;
            }
        }
        
        // Updated display functions for new UI
        function updateCurrentSongDisplay() {
            const songs = getSongs();
            if (currentIndex >= 0 && currentIndex < songs.length) {
                const songTitle = songs[currentIndex];
                if (elements.currentSongTitle) {
                    elements.currentSongTitle.textContent = songTitle;
                }
                if (elements.songCounter) {
                    elements.songCounter.textContent = `${currentIndex + 1} / ${songs.length}`;
                }
            }
        }

        // Wire events
                elements.prev.addEventListener("click", selectPrev);
                elements.next.addEventListener("click", selectNext);
                document.addEventListener("keydown", handleKeyboard);
                elements.image.addEventListener("error", () => {
                    showFallback();
                    hideLoadingOverlay();
                });
                elements.image.addEventListener("load", function(){
                        // Ensure fallback is hidden when image loads successfully
                        elements.fallback.hidden = true;
                        elements.image.hidden = false;
                        elements.image.classList.remove('is-loading');
                        elements.image.classList.add('is-loaded');
                        
                        // Small delay to avoid flicker on fast loads
                        setTimeout(() => {
                            hideLoadingOverlay();
                        }, 100);
                });

                // No landing logic; standalone mainmenu.html is used now
                elements.search.addEventListener("input", applySearchFilter);
                const clearBtn = document.getElementById('clearSearch');
                if(clearBtn){ clearBtn.addEventListener('click', () => { elements.search.value=''; applySearchFilter(); elements.search.focus(); }); }
                document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ elements.search.value=''; applySearchFilter(); elements.search.focus(); }});
                
                // Search options panel
                const searchOptionsBtn = document.getElementById('searchOptionsBtn');
                const searchOptionsPanel = document.getElementById('searchOptionsPanel');
                
                if(searchOptionsBtn && searchOptionsPanel){
                    searchOptionsBtn.addEventListener('click', () => {
                        searchOptionsPanel.hidden = !searchOptionsPanel.hidden;
                    });
                    
                    // Close options panel when clicking outside
                    document.addEventListener('click', (e) => {
                        if (!searchOptionsBtn.contains(e.target) && !searchOptionsPanel.contains(e.target)) {
                            searchOptionsPanel.hidden = true;
                        }
                    });
                    
                    // Re-apply search when options change
                    ['fuzzySearch', 'searchInFavorites', 'caseSensitive'].forEach(id => {
                        const checkbox = document.getElementById(id);
                        if (checkbox) {
                            checkbox.addEventListener('change', applySearchFilter);
                        }
                    });
                }
                // Help overlay
                const helpBtn = document.getElementById('helpBtn');
                const help = document.getElementById('helpOverlay');
                const helpClose = document.getElementById('helpClose');
                helpBtn?.addEventListener('click', ()=>{ help.hidden = false; });
                helpClose?.addEventListener('click', ()=>{ help.hidden = true; });
                document.addEventListener('keydown', (e)=>{ if(e.key==='?' || (e.key.toLowerCase()==='/' && (e.shiftKey))){ help.hidden=false; }});
        // URL params to preset collection/tab/open list/focus search and song select
                try{
                        const params = new URLSearchParams(location.search);
            const col = params.get('collection');
            if(col && (collections[col])) setCollection(col);
                        const view = params.get('view');
                        if(view === 'fav') setTab('fav');
                        if(view === 'recent') setTab('recent');
                        if(params.get('openList') === '1'){ showSongDrawer(); setTimeout(()=>elements.search?.focus(),100); }
            const presetSearch = params.get('search');
            if(presetSearch){ elements.search.value = ''; setTimeout(()=>{ elements.search.value=''; elements.search.focus(); }, 50); }
            const songParam = params.get('song');
            if(songParam){
                const songs = getSongs();
                let idx = -1;
                if(/^[0-9]+$/.test(songParam)){
                    idx = Math.max(0, Math.min(songs.length-1, parseInt(songParam,10)-1));
                }else{
                    const lower = songParam.toLowerCase();
                    idx = songs.findIndex(t => t.toLowerCase() === lower);
                    if(idx === -1) idx = songs.findIndex(t => t.toLowerCase().includes(lower));
                }
                if(idx >= 0) selectIndex(idx);
            }
                }catch(_){ }
                // Sidebar toggle handled in navigation.js (initSidebar)
                
                // Search button in header
                elements.searchBtn?.addEventListener('click', function() {
                    showSongDrawer();
                    setTimeout(() => elements.search?.focus(), 100);
                });
                
                // Favorite button in header
                elements.favoriteBtn?.addEventListener('click', toggleFavorite);
                
                // Zoom button and controls
                elements.zoomBtn?.addEventListener('click', showZoomOverlay);
                elements.closeZoomBtn?.addEventListener('click', hideZoomOverlay);
                elements.zoomBackdrop?.addEventListener('click', hideZoomOverlay);
        // Tabs in drawer
                elements.tabAll?.addEventListener('click', () => setTab('all'));
                elements.tabFav?.addEventListener('click', () => setTab('fav'));
                
                // Clear search button
                elements.clearSearchBtn?.addEventListener('click', function() {
                    elements.search.value = '';
                    elements.clearSearchBtn.hidden = true;
                    applySearchFilter();
                });
                
                // Show/hide clear button based on search input
                elements.search?.addEventListener('input', function() {
                    const hasText = elements.search.value.trim().length > 0;
                    if (elements.clearSearchBtn) {
                        elements.clearSearchBtn.hidden = !hasText;
                    }
                });
        // Random & Share
        elements.randomBtn?.addEventListener('click', () => {
            const songs = getSongs();
            if(!songs.length) return;
            const r = Math.floor(Math.random() * songs.length);
            selectIndex(r);
        });
                        elements.shareBtn?.addEventListener('click', async () => {
            const url = buildSongUrl();
            try{
                if(navigator.share){
                    await navigator.share({ title: 'Music Club', url });
                }else{
                    await navigator.clipboard.writeText(url);
                                                showToast('Link copied');
                }
            }catch(_){
                try{ await navigator.clipboard.writeText(url); }catch(_e){}
            }
        });
        // Enhanced image controls event listeners
        document.getElementById('zoomInBtn')?.addEventListener('click', zoomIn);
        document.getElementById('zoomOutBtn')?.addEventListener('click', zoomOut);
        document.getElementById('resetZoomBtn')?.addEventListener('click', resetZoom);
        document.getElementById('fullscreenBtn')?.addEventListener('click', toggleFullscreen);
        document.getElementById('fitToScreenBtn')?.addEventListener('click', fitToScreen);
        
        // Window resize handler for responsive image fitting
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (elements.image && elements.image.naturalWidth) {
                    fitToScreen();
                }
            }, 150);
        });
        
        // Initialize image dragging
        handleImageDrag();
        
        // Keyboard shortcuts for image controls
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return; // Don't interfere with search input
            
            switch(e.key) {
                case '+': case '=': e.preventDefault(); zoomIn(); break;
                case '-': e.preventDefault(); zoomOut(); break;
                case '0': e.preventDefault(); resetZoom(); break;
                case 'F11': e.preventDefault(); toggleFullscreen(); break;
            }
            
            // Ctrl+0 for fit to screen
            if (e.ctrlKey && e.key === '0') {
                e.preventDefault();
                fitToScreen();
            }
        });
        
        // Mouse wheel zoom support
        const imageViewer = document.querySelector('.image-container');
        imageViewer?.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                if (e.deltaY < 0) {
                    zoomIn();
                } else {
                    zoomOut();
                }
            }
        }, { passive: false });

        // Enhanced mobile touch gestures
        let touchStartX = null;
        let touchStartY = null;
        let touchStartTime = null;
        let lastTapTime = 0;
        let isPinching = false;
        let initialPinchDistance = 0;
        
        function onTouchStart(e){
                const touches = e.touches;
                if(!touches) return;
                
                touchStartTime = Date.now();
                
                // Handle single touch
                if(touches.length === 1){
                    touchStartX = touches[0].clientX;
                    touchStartY = touches[0].clientY;
                }
                
                // Handle pinch gesture
                if(touches.length === 2){
                    isPinching = true;
                    const dx = touches[0].clientX - touches[1].clientX;
                    const dy = touches[0].clientY - touches[1].clientY;
                    initialPinchDistance = Math.sqrt(dx * dx + dy * dy);
                }
        }
        
        function onTouchMove(e){
                if(isPinching && e.touches.length === 2){
                    e.preventDefault();
                    const touches = e.touches;
                    const dx = touches[0].clientX - touches[1].clientX;
                    const dy = touches[0].clientY - touches[1].clientY;
                    const currentDistance = Math.sqrt(dx * dx + dy * dy);
                    
                    if(initialPinchDistance > 0){
                        const scale = currentDistance / initialPinchDistance;
                        const newZoom = currentZoom * scale;
                        applyZoom(Math.max(0.5, Math.min(3, newZoom)));
                        initialPinchDistance = currentDistance;
                    }
                }
        }
        
        function onTouchEnd(e){
                if(!touchStartX || !touchStartY || !touchStartTime) return;
                
                isPinching = false;
                
                const touchEndTime = Date.now();
                const touchDuration = touchEndTime - touchStartTime;
                
                // Handle tap gestures
                if(touchDuration < 300 && e.changedTouches && e.changedTouches[0]){
                    const endTouch = e.changedTouches[0];
                    const moveDistance = Math.sqrt(
                        Math.pow(endTouch.clientX - touchStartX, 2) + 
                        Math.pow(endTouch.clientY - touchStartY, 2)
                    );
                    
                    // Double tap to zoom
                    if(moveDistance < 10){
                        const now = Date.now();
                        if(now - lastTapTime < 300){
                            if(currentZoom === 1){
                                applyZoom(2);
                            } else {
                                resetZoom();
                            }
                            lastTapTime = 0;
                            touchStartX = touchStartY = null;
                            return;
                        }
                        lastTapTime = now;
                    }
                }
                
                // Handle swipe gestures
                if(e.changedTouches && e.changedTouches[0] && touchDuration > 50){
                    const dx = e.changedTouches[0].clientX - touchStartX;
                    const dy = e.changedTouches[0].clientY - touchStartY;
                    const absX = Math.abs(dx);
                    const absY = Math.abs(dy);
                    
                    // Improved swipe detection with velocity consideration
                    const velocity = absX / touchDuration;
                    const minSwipeDistance = 50;
                    const minVelocity = 0.1;
                    
                    if(absX > minSwipeDistance && absX > absY * 1.5 && velocity > minVelocity){
                        // Provide visual feedback
                        const viewer = document.querySelector('.viewer');
                        viewer.style.transform = dx > 0 ? 'translateX(5px)' : 'translateX(-5px)';
                        setTimeout(() => { viewer.style.transform = ''; }, 150);
                        
                        // Navigate
                        if(dx < 0) {
                            selectNext();
                            showToast('Next song', 'info');
                        } else {
                            selectPrev(); 
                            showToast('Previous song', 'info');
                        }
                    }
                }
                
                touchStartX = touchStartY = touchStartTime = null;
        }
        
        // Enhanced mobile keyboard handling
        function handleMobileKeyboard(){
            const searchInput = elements.search;
            
            // Prevent zoom on focus (iOS)
            searchInput.addEventListener('focus', () => {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
            });
            
            searchInput.addEventListener('blur', () => {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no';
            });
        }
        
        // Initialize mobile enhancements
        if('ontouchstart' in window){
            handleMobileKeyboard();
        }
        
        // Attach to viewer area for better UX
        const touchViewer = document.querySelector(".viewer__image-wrap");
        // Disabled old touch handlers - using unified addPinchZoom() instead
        // touchViewer.addEventListener("touchstart", onTouchStart, {passive:false});
        // touchViewer.addEventListener("touchmove", onTouchMove, {passive:false});
        // touchViewer.addEventListener("touchend", onTouchEnd, {passive:true});
    // Remove mobile zoom gestures

// Enhanced image viewer with zoom functionality
let currentZoom = 1;
let imageTranslateX = 0;
let imageTranslateY = 0;
let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;

function applyZoom(zoomLevel, reset = false) {
    if (reset) {
        currentZoom = zoomLevel || 1;
        imageTranslateX = 0;
        imageTranslateY = 0;
    } else {
        // Respect the passed zoom level parameter
        currentZoom = Math.max(0.5, Math.min(5, zoomLevel || currentZoom));
    }

    const img = elements.image;
    const zoomIndicator = document.getElementById('zoomIndicator');
    const zoomLevelDisplay = document.getElementById('zoomLevelDisplay');
    const imageWrap = img.parentElement;
    
    // Fix transform order: translate first, then scale (with transform-origin center)
    img.style.transformOrigin = 'center center';
    img.style.transform = `translate(${imageTranslateX}px, ${imageTranslateY}px) scale(${currentZoom})`;
    
    // Update zoom level displays
    const zoomPercentage = `${Math.round(currentZoom * 100)}%`;
    if (document.getElementById('zoomLevel')) {
        document.getElementById('zoomLevel').textContent = zoomPercentage;
    }
    if (zoomLevelDisplay) {
        zoomLevelDisplay.textContent = zoomPercentage;
    }
    
    // Show zoom indicator when zoomed
    if (currentZoom !== 1) {
        if (zoomIndicator) {
            zoomIndicator.hidden = false;
            setTimeout(() => { zoomIndicator.hidden = true; }, 2000);
        }
        imageWrap.classList.add('zoomed');
    } else {
        if (zoomIndicator) zoomIndicator.hidden = true;
        imageWrap.classList.remove('zoomed');
    }
}

function showLoadingOverlay() {
    const overlay = document.getElementById('imageLoadingOverlay');
    const viewer = document.querySelector('.viewer');
    overlay.hidden = false;
    viewer.setAttribute('aria-busy', 'true');
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('imageLoadingOverlay');
    const viewer = document.querySelector('.viewer');
    overlay.hidden = true;
    viewer.setAttribute('aria-busy', 'false');
}

function zoomIn() {
    applyZoom(currentZoom * 1.25);
    showImageControls(); // Show controls when zooming
}

function zoomOut() {
    applyZoom(currentZoom * 0.8);
    showImageControls(); // Show controls when zooming
}

function resetZoom() {
    applyZoom(1, true);
    showImageControls(); // Show controls when resetting
}

// Enhanced fullscreen functionality
function toggleFullscreen() {
    const imageContainer = document.getElementById('imageContainer');
    
    if (!isFullscreen) {
        // Enter fullscreen
        isFullscreen = true;
        imageContainer.classList.add('fullscreen-mode');
        document.body.style.overflow = 'hidden';
        
        // Try to use browser fullscreen API if available
        if (imageContainer.requestFullscreen) {
            imageContainer.requestFullscreen().catch(() => {
                // Fallback to CSS fullscreen if browser fullscreen fails
            });
        } else if (imageContainer.webkitRequestFullscreen) {
            imageContainer.webkitRequestFullscreen();
        } else if (imageContainer.msRequestFullscreen) {
            imageContainer.msRequestFullscreen();
        }
        
        // Update button icon
        const fullscreenBtn = document.getElementById('fullscreenBtn');
        if (fullscreenBtn) fullscreenBtn.innerHTML = '⛶';
        
        showImageControls();
    } else {
        // Exit fullscreen
        exitFullscreen();
    }
}

function exitFullscreen() {
    const imageContainer = document.getElementById('imageContainer');
    
    isFullscreen = false;
    imageContainer.classList.remove('fullscreen-mode');
    document.body.style.overflow = '';
    
    // Exit browser fullscreen if active
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    
    // Update button icon
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) fullscreenBtn.innerHTML = '⛶';
}

// Fit image to screen while maintaining aspect ratio
function fitToScreen() {
    const img = elements.image;
    const container = document.getElementById('imageContainer');
    
    if (!img || !img.naturalWidth || !img.naturalHeight) return;
    
    const containerRect = container.getBoundingClientRect();
    
    // Calculate target zoom to fit image within container (90% of available space)
    const targetZoom = Math.min(
        (containerRect.width * 0.9) / img.naturalWidth,
        (containerRect.height * 0.9) / img.naturalHeight
    );
    
    // Reset position and apply zoom
    imageTranslateX = 0;
    imageTranslateY = 0;
    applyZoom(Math.max(0.5, Math.min(5, targetZoom)), true);
    
    if (window.showImageControls) showImageControls();
}

// Add pinch-to-zoom support for mobile with conflict prevention
function addPinchZoom() {
    const img = elements.image;
    let initialDistance = 0;
    let initialZoom = 1;
    let isPinching = false;
    
    function getTouchDistance(touches) {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    function onTouchStart(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            isPinching = true;
            // Cancel any ongoing drag
            if (isDragging) {
                isDragging = false;
                img.parentElement.classList.remove('dragging');
            }
            initialDistance = getTouchDistance(e.touches);
            initialZoom = currentZoom;
            showImageControls();
        }
    }
    
    function onTouchMove(e) {
        if (e.touches.length === 2 && isPinching) {
            e.preventDefault();
            const distance = getTouchDistance(e.touches);
            const scale = distance / initialDistance;
            const newZoom = Math.max(0.5, Math.min(5, initialZoom * scale));
            applyZoom(newZoom);
        }
    }
    
    function onTouchEnd(e) {
        if (e.touches.length < 2) {
            isPinching = false;
        }
    }
    
    img.addEventListener('touchstart', onTouchStart, { passive: false });
    img.addEventListener('touchmove', onTouchMove, { passive: false });
    img.addEventListener('touchend', onTouchEnd, { passive: false });
    
    // Export for conflict detection
    window.isPinching = () => isPinching;
}

function toggleFullscreen() {
    const viewer = document.querySelector('.viewer');
    
    if (!document.fullscreenElement) {
        if (viewer.requestFullscreen) {
            viewer.requestFullscreen();
            viewer.classList.add('fullscreen');
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            viewer.classList.remove('fullscreen');
        }
    }
}

// Enhanced image dragging for zoomed images with better mobile support
function handleImageDrag() {
    const img = elements.image;
    const imageWrap = img.parentElement;
    
    let startX, startY, initialTranslateX, initialTranslateY;
    let dragStartTime = 0;
    let hasMoved = false;
    
    function onPointerStart(clientX, clientY, e) {
        if (currentZoom <= 1) return;
        // Don't start drag if pinching
        if (window.isPinching && window.isPinching()) return;
        e?.preventDefault();
        isDragging = true;
        hasMoved = false;
        dragStartTime = Date.now();
        startX = clientX;
        startY = clientY;
        initialTranslateX = imageTranslateX;
        initialTranslateY = imageTranslateY;
        
        imageWrap.classList.add('dragging');
        img.style.cursor = 'grabbing';
        
        // Show controls when starting to drag
        showImageControls();
    }
    
    function onPointerMove(clientX, clientY, e) {
        if (!isDragging || currentZoom <= 1) return;
        e?.preventDefault();
        
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
        
        // Threshold for considering it a drag vs click
        if (!hasMoved && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
            hasMoved = true;
        }
        
        imageTranslateX = initialTranslateX + deltaX / currentZoom;
        imageTranslateY = initialTranslateY + deltaY / currentZoom;
        
        // Apply bounds checking using natural image dimensions to prevent dragging too far
        const wrapRect = imageWrap.getBoundingClientRect();
        const imgNaturalWidth = img.naturalWidth || img.width;
        const imgNaturalHeight = img.naturalHeight || img.height;
        
        // Guard against unloaded images (naturalWidth/Height = 0)
        if (imgNaturalWidth === 0 || imgNaturalHeight === 0) {
            // Image not loaded yet, skip bounds checking
            applyZoom(currentZoom);
            return;
        }
        
        // Calculate displayed image size (respecting object-fit: contain behavior)
        const aspectRatio = imgNaturalWidth / imgNaturalHeight;
        const wrapAspectRatio = wrapRect.width / wrapRect.height;
        
        let displayedWidth, displayedHeight;
        if (aspectRatio > wrapAspectRatio) {
            displayedWidth = wrapRect.width;
            displayedHeight = wrapRect.width / aspectRatio;
        } else {
            displayedWidth = wrapRect.height * aspectRatio;
            displayedHeight = wrapRect.height;
        }
        
        // Calculate max translation based on zoom level
        const maxTranslateX = Math.max(0, (displayedWidth * currentZoom - wrapRect.width) / (2 * currentZoom));
        const maxTranslateY = Math.max(0, (displayedHeight * currentZoom - wrapRect.height) / (2 * currentZoom));
        
        imageTranslateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, imageTranslateX));
        imageTranslateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, imageTranslateY));
        
        applyZoom(currentZoom);
    }
    
    function onPointerEnd() {
        if (!isDragging) return;
        isDragging = false;
        imageWrap.classList.remove('dragging');
        img.style.cursor = currentZoom > 1 ? 'grab' : '';
        
        // If it wasn't really a drag, consider it a click for showing controls
        if (!hasMoved && Date.now() - dragStartTime < 300) {
            setTimeout(() => toggleImageControls(), 10);
        }
    }
    
    // Mouse events
    function onMouseDown(e) {
        onPointerStart(e.clientX, e.clientY, e);
    }
    
    function onMouseMove(e) {
        onPointerMove(e.clientX, e.clientY, e);
    }
    
    function onMouseUp() {
        onPointerEnd();
    }
    
    img.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    // Touch events with improved support
    function onTouchStart(e) {
        if (currentZoom <= 1 || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        onPointerStart(touch.clientX, touch.clientY, e);
    }
    
    function onTouchMove(e) {
        if (!isDragging || currentZoom <= 1 || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        onPointerMove(touch.clientX, touch.clientY, e);
    }
    
    function onTouchEnd(e) {
        if (!isDragging) return;
        e.preventDefault();
        onPointerEnd();
    }
    
    img.addEventListener('touchstart', onTouchStart, { passive: false });
    img.addEventListener('touchmove', onTouchMove, { passive: false });
    img.addEventListener('touchend', onTouchEnd, { passive: false });
    
    // Prevent context menu on long press when zoomed
    img.addEventListener('contextmenu', (e) => {
        if (currentZoom > 1) {
            e.preventDefault();
        }
    });
}

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast') || createToast();
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 3000);
}

function createToast() {
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.hidden = true;
    document.body.appendChild(toast);
    return toast;
}

    function toggleFavorite(){
        const idx = currentIndex;
        const favorites = getFavorites();
        const pos = favorites.indexOf(idx);
        if(pos === -1) favorites.push(idx); else favorites.splice(pos,1);
        setFavorites(favorites);
        updateFavUi();
        renderList();
    }
        function updateFavUi(){
        const isFav = getFavorites().includes(currentIndex);
            if (elements.favoriteBtn) {
                elements.favoriteBtn.textContent = isFav ? '❤' : '♡';
                elements.favoriteBtn.classList.toggle('is-active', isFav);
            }
            // Legacy support for old element if it exists
            if (elements.favToggle) {
                elements.favToggle.textContent = isFav ? '❤' : '♡';
            }
        }
        function pushRecent(idx){
        const recent = [idx, ...getRecent().filter(i => i !== idx)].slice(0, 10);
        setRecent(recent);
        }

        function setTab(tab){
                activeTab = tab;
        saveJson('activeTab', activeTab);
        [elements.tabAll, elements.tabFav, elements.tabRecent].forEach(btn => { btn.classList.remove('is-active'); btn.removeAttribute('aria-current'); });
                if(tab === 'all'){ elements.tabAll.classList.add('is-active'); elements.tabAll.setAttribute('aria-current','true'); }
                if(tab === 'fav'){ elements.tabFav.classList.add('is-active'); elements.tabFav.setAttribute('aria-current','true'); }
        if(tab === 'recent'){ elements.tabRecent.classList.add('is-active'); elements.tabRecent.setAttribute('aria-current','true'); }
                renderList();
        }

        function setCollection(name){
                currentCollection = name;
        saveJson('lastCollection', currentCollection);
        [elements.colMusicList, elements.colSaYar].forEach(btn => { btn.classList.remove('is-active'); btn.removeAttribute('aria-current'); });
                if(name === 'Music Club Song List'){ elements.colMusicList.classList.add('is-active'); elements.colMusicList.setAttribute('aria-current','true'); }
                if(name === 'Sa Yar Ga Toe Pwell'){ elements.colSaYar.classList.add('is-active'); elements.colSaYar.setAttribute('aria-current','true'); }
                filteredIndexes = getSongs().map((_, i) => i);
                currentIndex = 0;
                renderList();
                updateMeta();
                loadImageForCurrent();
        }

    // removed 'new' feature

    function buildSongUrl(){
        const base = location.origin + location.pathname.replace(/[^\/]*$/, '') + 'app.html';
        const params = new URLSearchParams();
        params.set('collection', currentCollection);
        params.set('song', String(currentIndex + 1));
        return `${base}?${params.toString()}`;
    }

    function showToast(message){
        const t = document.getElementById('toast');
        if(!t) return;
        t.textContent = message;
        t.hidden = false;
        clearTimeout(showToast._tid);
        showToast._tid = setTimeout(()=>{ t.hidden = true; }, 1400);
    }

    // Settings drawer removed

function toggleFullscreen() {
    const viewer = document.querySelector('.viewer');
    
    if (!document.fullscreenElement) {
        if (viewer.requestFullscreen) {
            viewer.requestFullscreen();
        } else if (viewer.webkitRequestFullscreen) {
            viewer.webkitRequestFullscreen();
        } else if (viewer.mozRequestFullScreen) {
            viewer.mozRequestFullScreen();
        } else if (viewer.msRequestFullscreen) {
            viewer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Fullscreen event listeners
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
    const imageContainer = document.getElementById('imageContainer');
    const browserIsFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || 
                           document.mozFullScreenElement || document.msFullscreenElement);
    
    // Sync our internal state with browser fullscreen state
    isFullscreen = browserIsFullscreen;
    
    // Toggle CSS class for fallback styling
    if (imageContainer) {
        imageContainer.classList.toggle('fullscreen-mode', browserIsFullscreen);
    }
    
    // Update controls visibility and refit image for new viewport
    if (isFullscreen) {
        if (window.showImageControls) {
            showImageControls();
        }
        // Refit image to new fullscreen viewport
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fitToScreen();
            });
        });
    }
}

        // Simple image controls toggle functionality
        let controlsTimeout;
        let imageControlsVisible = true;
        
        function showImageControls() {
            const controls = document.querySelector('.image-controls');
            if (!controls) return;
            
            controls.classList.remove('hidden');
            controls.classList.add('visible');
            imageControlsVisible = true;
            
            // Clear existing timeout
            clearTimeout(controlsTimeout);
            
            // Auto-hide after 4 seconds if not in fullscreen and on mobile
            const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || 
                                   document.mozFullScreenElement || document.msFullscreenElement);
            if (!isFullscreen && window.innerWidth <= 768) {
                controlsTimeout = setTimeout(() => {
                    hideImageControls();
                }, 4000);
            }
        }
        
        function hideImageControls() {
            const controls = document.querySelector('.image-controls');
            if (!controls) return;
            
            controls.classList.remove('visible');
            controls.classList.add('hidden');
            imageControlsVisible = false;
        }
        
        function toggleImageControls() {
            if (imageControlsVisible) {
                hideImageControls();
            } else {
                showImageControls();
            }
        }
        
        // Show/hide controls when user taps the image area
        function initImageClickHandler() {
            const imageWrap = document.querySelector('.viewer__image-wrap');
            if (imageWrap) {
                imageWrap.addEventListener('click', (e) => {
                    // Only toggle on tap/click if not dragging and not pinching
                    if (!isDragging && (!window.isPinching || !window.isPinching())) {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleImageControls();
                    }
                });
            }
        }
        
        // Initialize enhanced image functionality
        addPinchZoom();
        handleImageDrag();
        initImageClickHandler();
        
        // Show controls initially
        showImageControls();

        // NEW NAVIGATION SYSTEM EVENT LISTENERS
        
        // More Menu functionality
        const moreMenuBtn = document.getElementById('moreMenuBtn');
        const moreMenu = document.getElementById('moreMenu');
        if(moreMenuBtn && moreMenu){
            moreMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                moreMenu.hidden = !moreMenu.hidden;
            });
            
            // Close more menu when clicking outside
            document.addEventListener('click', (e) => {
                if(!moreMenu.contains(e.target) && !moreMenuBtn.contains(e.target)){
                    moreMenu.hidden = true;
                }
            });
            
            // Close more menu when pressing escape
            document.addEventListener('keydown', (e) => {
                if(e.key === 'Escape' && !moreMenu.hidden){
                    moreMenu.hidden = true;
                }
            });
        }
        
        // Update current song info in top controls
        function updateCurrentSongInfo(){
            const currentCollectionEl = document.getElementById('currentCollection');
            const songPositionEl = document.getElementById('songPosition');
            
            if(currentCollectionEl){
                currentCollectionEl.textContent = currentCollection;
            }
            
            if(songPositionEl){
                const songs = getSongs();
                songPositionEl.textContent = `${currentIndex + 1} / ${songs.length}`;
            }
        }
        
        // Override updateMeta to also update current song info
        const originalUpdateMeta = updateMeta;
        updateMeta = function(){
            originalUpdateMeta();
            updateCurrentSongInfo();
        };
        
        // Floating zoom controls visibility
        const zoomControls = document.getElementById('zoomControls');
        let zoomControlsTimeout;
        
        function showZoomControls(){
            if(zoomControls){
                zoomControls.classList.add('visible');
                clearTimeout(zoomControlsTimeout);
                
                // Auto-hide after 3 seconds
                zoomControlsTimeout = setTimeout(() => {
                    hideZoomControls();
                }, 3000);
            }
        }
        
        function hideZoomControls(){
            if(zoomControls){
                zoomControls.classList.remove('visible');
            }
        }
        
        // Show zoom controls when image is interacted with
        const imageWrapEl = document.querySelector('.viewer__image-wrap');
        if(imageWrapEl){
            imageWrapEl.addEventListener('mouseenter', showZoomControls);
            imageWrapEl.addEventListener('touchstart', showZoomControls);
        }
        
        // Show zoom controls when zooming with wheel
        if(imageViewer){
            imageViewer.addEventListener('wheel', (e) => {
                if(e.ctrlKey || e.metaKey){
                    showZoomControls();
                }
            });
        }
        
        // Bottom nav favorite updates are now handled by navigation.js
        
        // Haptic feedback is now handled by navigation.js
        
        // Enhanced touch gestures for song navigation
        let touchStartXNav = null;
        let touchStartYNav = null;
        let touchStartTimeNav = null;
        
        function handleNavTouchStart(e){
            if(e.touches.length === 1){
                touchStartXNav = e.touches[0].clientX;
                touchStartYNav = e.touches[0].clientY;
                touchStartTimeNav = Date.now();
            }
        }
        
        function handleNavTouchEnd(e){
            if(!touchStartXNav || !touchStartYNav || !touchStartTimeNav) return;
            
            const touchEndTime = Date.now();
            const touchDuration = touchEndTime - touchStartTimeNav;
            
            if(touchDuration > 50 && touchDuration < 500 && e.changedTouches && e.changedTouches[0]){
                const endTouch = e.changedTouches[0];
                const deltaX = endTouch.clientX - touchStartXNav;
                const deltaY = Math.abs(endTouch.clientY - touchStartYNav);
                
                // Horizontal swipe with minimal vertical movement
                if(Math.abs(deltaX) > 50 && deltaY < 100){
                    if(deltaX > 0){
                        selectPrev(); // Swipe right = previous
                    } else {
                        selectNext(); // Swipe left = next
                    }
                    addHapticFeedback();
                }
            }
            
            touchStartXNav = touchStartYNav = touchStartTimeNav = null;
        }
        
        // Add swipe navigation to main image area
        if(imageWrapEl){
            imageWrapEl.addEventListener('touchstart', handleNavTouchStart, {passive: true});
            imageWrapEl.addEventListener('touchend', handleNavTouchEnd, {passive: true});
        }
        
        // Initialize current song info on load
        updateCurrentSongInfo();

        // Initial render
                renderList();
                selectIndex(0);
                updateFavUi();

})();


