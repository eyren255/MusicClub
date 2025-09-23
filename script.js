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
			li.innerHTML = `
				<span class="song-index">${songIndex + 1}</span>
				<span class="song-title" title="${escapeHtml(title)}">${escapeHtml(title)}</span>
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
		if(!src){
			showFallback();
			return;
		}
		elements.image.hidden = false;
		elements.fallback.hidden = true;
		elements.image.alt = title;
		elements.image.classList.remove('is-loaded');
		elements.image.classList.add('is-loading');
		elements.image.src = src + `?v=${encodeURIComponent(src.length)}`; // cache-bust lightly
        // Preload neighbors
        try{
            const songs = getSongs();
            const nextIdx = Math.min(songs.length - 1, currentIndex + 1);
            const prevIdx = Math.max(0, currentIndex - 1);
            [nextIdx, prevIdx].forEach(i => {
                const t = songs[i];
                const p = filenameByTitle[t];
                if(p){ const im = new Image(); im.src = p; }
            });
        }catch(_){ }
		applyZoom(1, true);
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

	function applySearchFilter(){
		const qRaw = elements.search.value || "";
		const q = qRaw.toLowerCase();
		const qDigits = q.replace(/[^0-9]/g, "");
        const songs = getSongs();
        filteredIndexes = songs
			.map((title, i) => ({ title, i }))
			.filter(x => {
				const matchesTitle = x.title.toLowerCase().includes(q);
				const indexStr = String(x.i + 1);
				const matchesNumber = qDigits.length > 0 && indexStr.startsWith(qDigits);
				return matchesTitle || matchesNumber || q.length === 0;
			})
			.map(x => x.i);
		// Keep currentIndex if still visible; else snap to first visible
		if(!filteredIndexes.includes(currentIndex)){
			currentIndex = filteredIndexes.length ? filteredIndexes[0] : 0;
		}
		renderList();
		updateMeta();
		loadImageForCurrent();
	}

	// Wire events
		elements.prev.addEventListener("click", selectPrev);
		elements.next.addEventListener("click", selectNext);
		document.addEventListener("keydown", handleKeyboard);
		elements.image.addEventListener("error", showFallback);
		elements.image.addEventListener("load", function(){
			// Ensure fallback is hidden when image loads successfully
			elements.fallback.hidden = true;
			elements.image.hidden = false;
			elements.image.classList.remove('is-loading');
			elements.image.classList.add('is-loaded');
		});

		// No landing logic; standalone mainmenu.html is used now
		elements.search.addEventListener("input", applySearchFilter);
		const clearBtn = document.getElementById('clearSearch');
		if(clearBtn){ clearBtn.addEventListener('click', () => { elements.search.value=''; applySearchFilter(); elements.search.focus(); }); }
		document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ elements.search.value=''; applySearchFilter(); elements.search.focus(); }});
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
			if(isOpen){
				// Focus search shortly after open for mobile keyboards
				setTimeout(() => elements.search.focus(), 50);
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
        // Remove zoom/fullscreen logic per request (keep favorite only)

	// Touch swipe navigation
	let touchStartX = null;
	let touchStartY = null;
	function onTouchStart(e){
		if(!e.touches || e.touches.length !== 1) return;
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	}
	function onTouchEnd(e){
		if(touchStartX == null || touchStartY == null) return;
		const dx = (e.changedTouches && e.changedTouches[0].clientX || 0) - touchStartX;
		const dy = (e.changedTouches && e.changedTouches[0].clientY || 0) - touchStartY;
		const absX = Math.abs(dx);
		const absY = Math.abs(dy);
		if(absX > 40 && absX > absY){
			if(dx < 0) selectNext(); else selectPrev();
		}
		touchStartX = touchStartY = null;
	}
	// Attach to viewer area for better UX
	const viewer = document.querySelector(".viewer__image-wrap");
	viewer.addEventListener("touchstart", onTouchStart, {passive:true});
	viewer.addEventListener("touchend", onTouchEnd, {passive:true});
    // Remove mobile zoom gestures

function applyZoom(){ /* disabled */ }

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

	// Initial render
		renderList();
		selectIndex(0);
		updateFavUi();

})();


