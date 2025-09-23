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
                "အမေ့အိမ်"
                ],
                "Music Club Song List": []
        };
        let currentCollection = "Sa Yar Ga Toe Pwell";
        function getSongs(){ return collections[currentCollection] || []; }

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
                "အမေ့အိမ်": "Sa Yar Ga Toe Pwell/အမေ့အိမ်.png"
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
                // Favorites/Recent & tools
                tabAll: document.getElementById("tabAll"),
                tabFav: document.getElementById("tabFav"),
        tabRecent: document.getElementById("tabRecent"),
                favToggle: document.getElementById("favToggle"),
                fsToggle: document.getElementById("fsToggle"),
                zoomInBtn: document.getElementById("zoomInBtn"),
                zoomOutBtn: document.getElementById("zoomOutBtn"),
                zoomResetBtn: document.getElementById("zoomResetBtn"),
        colMusicList: document.getElementById("colMusicList"),
        colSaYar: document.getElementById("colSaYar"),
        randomBtn: document.getElementById('randomBtn'),
        shareBtn: document.getElementById('shareBtn')
        };

    let currentIndex = 0; // 0-based
    let filteredIndexes = getSongs().map((_, i) => i);
    let favoritesByCollection = loadJson('favoritesByCollection', {});
    let recentByCollection = loadJson('recentByCollection', {});
    let activeTab = loadJson('activeTab', 'all');
    currentCollection = loadJson('lastCollection', currentCollection);
        let zoomScale = 1;

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
                const songs = getSongs();
                elements.metaIndex.textContent = `${currentIndex + 1} / ${songs.length}`;
                elements.metaTitle.textContent = songs[currentIndex] || "—";
        }

        function loadImageForCurrent(){
                const songs = getSongs();
                const title = songs[currentIndex];
                const src = filenameByTitle[title];
                // Always reset fallback state before attempting to load
                elements.fallback.hidden = true;
                elements.image.hidden = false;
                
                // Clear ready states before loading new image
                elements.next.classList.remove('ready');
                elements.prev.classList.remove('ready');
                
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
                // Reset zoom when loading new image
                applyZoom(1, true);
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
                // Reset zoom when changing images for better UX
                resetZoom();
                loadImageForCurrent();
        updateFavUi();
        pushRecent(index);
                // On small screens, auto-close the list to reveal the image
                if(window.innerWidth <= 900 && elements.listPanel.classList.contains("is-open")){
                        elements.listPanel.classList.remove("is-open");
                        elements.toggleList.setAttribute("aria-expanded", "false");
                }
        }

        function selectPrev(){ selectIndex(currentIndex - 1); }
        function selectNext(){ selectIndex(currentIndex + 1); }

        function handleKeyboard(e){
                // ArrowUp/Down moves selection within list, ArrowLeft/Right also prev/next
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
            
            if (elements.search.value.trim() === '') {
                counter.hidden = true;
                return;
            }
            
            counter.hidden = false;
            countSpan.textContent = `${resultsCount} of ${totalCount}`;
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
                        if(params.get('openList') === '1'){ elements.listPanel.classList.add('is-open'); elements.toggleList.setAttribute('aria-expanded','true'); setTimeout(()=>elements.search.focus(),50); }
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
                // Toggle list for mobile
                elements.toggleList.addEventListener("click", function(){
                        const isOpen = elements.listPanel.classList.toggle("is-open");
                        elements.toggleList.setAttribute("aria-expanded", String(isOpen));
                        elements.toggleList.classList.toggle('is-on', isOpen);
                        if(isOpen){
                                // Focus search and scroll list into view on mobile
                                setTimeout(() => {
                                        elements.search.focus();
                                        elements.listPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 50);
                        } else {
                                // If just closed, still bring user toward the list area
                                elements.listPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                });
        // Tabs
                elements.tabAll.addEventListener('click', () => setTab('all'));
                elements.tabFav.addEventListener('click', () => setTab('fav'));
                elements.tabRecent.addEventListener('click', () => setTab('recent'));
                // Collection tabs
                elements.colMusicList.addEventListener('click', () => setCollection('Music Club Song List'));
                elements.colSaYar.addEventListener('click', () => setCollection('Sa Yar Ga Toe Pwell'));
        // Favorites toggle
                elements.favToggle.addEventListener('click', toggleFavorite);
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
        });
        
        // Mouse wheel zoom support
        const imageViewer = document.querySelector('.viewer__image-wrap');
        imageViewer.addEventListener('wheel', (e) => {
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
        touchViewer.addEventListener("touchstart", onTouchStart, {passive:false});
        touchViewer.addEventListener("touchmove", onTouchMove, {passive:false});
        touchViewer.addEventListener("touchend", onTouchEnd, {passive:true});
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
        currentZoom = Math.max(0.5, Math.min(5, zoomLevel));
    }

    const img = elements.image;
    const zoomIndicator = document.getElementById('zoomIndicator');
    const imageWrap = img.parentElement;
    
    img.style.transform = `scale(${currentZoom}) translate(${imageTranslateX}px, ${imageTranslateY}px)`;
    
    // Show zoom indicator when zoomed
    if (currentZoom !== 1) {
        zoomIndicator.hidden = false;
        document.getElementById('zoomLevel').textContent = `${Math.round(currentZoom * 100)}%`;
        imageWrap.classList.add('zoomed');
        setTimeout(() => { zoomIndicator.hidden = true; }, 2000);
    } else {
        zoomIndicator.hidden = true;
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
}

function zoomOut() {
    applyZoom(currentZoom * 0.8);
}

function resetZoom() {
    applyZoom(1, true);
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

// Image dragging for zoomed images
function handleImageDrag() {
    const img = elements.image;
    const imageWrap = img.parentElement;
    
    let startX, startY, initialTranslateX, initialTranslateY;
    
    function onMouseDown(e) {
        if (currentZoom <= 1) return;
        e.preventDefault();
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialTranslateX = imageTranslateX;
        initialTranslateY = imageTranslateY;
        img.style.cursor = 'grabbing';
    }
    
    function onMouseMove(e) {
        if (!isDragging || currentZoom <= 1) return;
        e.preventDefault();
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        imageTranslateX = initialTranslateX + deltaX / currentZoom;
        imageTranslateY = initialTranslateY + deltaY / currentZoom;
        applyZoom(currentZoom);
    }
    
    function onMouseUp() {
        if (!isDragging) return;
        isDragging = false;
        img.style.cursor = currentZoom > 1 ? 'grab' : '';
    }
    
    img.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
    // Touch support
    function onTouchStart(e) {
        if (currentZoom <= 1 || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        onMouseDown({ clientX: touch.clientX, clientY: touch.clientY, preventDefault: () => {} });
    }
    
    function onTouchMove(e) {
        if (!isDragging || currentZoom <= 1 || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        onMouseMove({ clientX: touch.clientX, clientY: touch.clientY, preventDefault: () => {} });
    }
    
    function onTouchEnd(e) {
        if (!isDragging) return;
        onMouseUp();
    }
    
    img.addEventListener('touchstart', onTouchStart, { passive: false });
    img.addEventListener('touchmove', onTouchMove, { passive: false });
    img.addEventListener('touchend', onTouchEnd, { passive: false });
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
                elements.favToggle.textContent = isFav ? '❤' : '♡';
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

function toggleFullscreen(){ /* disabled */ }

        // Auto-hide toolbar functionality for mobile
        let lastScrollTop = 0;
        let scrollTimeout;
        let isScrolling = false;
        
        function handleScrollDirection() {
            if (window.innerWidth > 768) return; // Only apply on mobile devices
            
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
            
            // Only trigger if scroll is significant enough (prevents jitter)
            if (scrollDelta < 5) return;
            
            isScrolling = true;
            clearTimeout(scrollTimeout);
            
            // Remove previous scroll classes
            document.body.classList.remove('scrolling-up', 'scrolling-down', 'toolbar-visible');
            
            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                // Scrolling down - hide toolbars
                document.body.classList.add('scrolling-down');
            } else if (currentScrollTop < lastScrollTop) {
                // Scrolling up - show toolbars
                document.body.classList.add('scrolling-up');
            }
            
            lastScrollTop = currentScrollTop;
            
            // Auto-show toolbars after scrolling stops
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                document.body.classList.remove('scrolling-up', 'scrolling-down');
                document.body.classList.add('toolbar-visible');
                
                // Hide again after 3 seconds if no interaction
                setTimeout(() => {
                    if (!isScrolling && window.pageYOffset > 100) {
                        document.body.classList.remove('toolbar-visible');
                        document.body.classList.add('scrolling-down');
                    }
                }, 3000);
            }, 150);
        }
        
        // Add scroll event listener with throttling
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScrollDirection();
                    ticking = false;
                });
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
        
        // Show toolbars when user taps the image area
        const imageWrap = document.querySelector('.viewer__image-wrap');
        if (imageWrap) {
            imageWrap.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    document.body.classList.remove('scrolling-up', 'scrolling-down');
                    document.body.classList.add('toolbar-visible');
                    
                    // Hide again after 3 seconds
                    setTimeout(() => {
                        if (window.pageYOffset > 100) {
                            document.body.classList.remove('toolbar-visible');
                            document.body.classList.add('scrolling-down');
                        }
                    }, 3000);
                }
            });
        }
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            }, 100);
        });

        // Initial render
                renderList();
                selectIndex(0);
                updateFavUi();

})();


