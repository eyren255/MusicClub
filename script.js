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
		"သူငယ်ချင်း"
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
		"နားလည်ပါ": "Sa Yar Ga Toe Pwell/နားလည်ပါ.png",
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
		"သူငယ်ချင်း": "Sa Yar Ga Toe Pwell/သူငယ်ချင်း.png"
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
		zoomResetBtn: document.getElementById("zoomResetBtn")
	};

	let currentIndex = 0; // 0-based
	let filteredIndexes = getSongs().map((_, i) => i);
	let favorites = loadJson('favorites', []);
	let recent = loadJson('recent', []);
	let activeTab = 'all';
	let zoomScale = 1;

	function saveJson(key, value){
		try{ localStorage.setItem(key, JSON.stringify(value)); }catch(_){}
	}
	function loadJson(key, fallback){
		try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(_){ return fallback; }
	}

	function renderList(){
		elements.list.innerHTML = "";
		const songs = getSongs();
		let sourceIndexes = filteredIndexes;
		if(activeTab === 'fav') sourceIndexes = sourceIndexes.filter(i => favorites.includes(i));
		if(activeTab === 'recent') sourceIndexes = sourceIndexes.filter(i => recent.includes(i));
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
		elements.image.src = src + `?v=${encodeURIComponent(src.length)}`; // cache-bust lightly
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
		});

		// No landing logic; standalone mainmenu.html is used now
		elements.search.addEventListener("input", applySearchFilter);
		// URL params to preset tab/open list/focus search
		try{
			const params = new URLSearchParams(location.search);
			const view = params.get('view');
			if(view === 'fav') setTab('fav');
			if(view === 'recent') setTab('recent');
			if(params.get('openList') === '1'){ elements.listPanel.classList.add('is-open'); elements.toggleList.setAttribute('aria-expanded','true'); setTimeout(()=>elements.search.focus(),50); }
			const presetSearch = params.get('search');
			if(presetSearch){ elements.search.value = ''; setTimeout(()=>{ elements.search.value=''; elements.search.focus(); }, 50); }
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
		// Fullscreen toggle
		elements.fsToggle.addEventListener('click', toggleFullscreen);
		// Zoom controls
		elements.zoomInBtn.addEventListener('click', () => applyZoom(zoomScale * 1.2));
		elements.zoomOutBtn.addEventListener('click', () => applyZoom(zoomScale / 1.2));
		elements.zoomResetBtn.addEventListener('click', () => applyZoom(1, true));
		// Quick switch to Music Club Song List from bottom bar
		const openMusicListBtn = document.getElementById('openMusicListBtn');
		if(openMusicListBtn){ openMusicListBtn.addEventListener('click', () => setCollection('Music Club Song List')); }

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
	// Double-tap zoom
	let lastTap = 0;
	viewer.addEventListener('touchend', function(){
		const now = Date.now();
		if(now - lastTap < 300){ applyZoom(zoomScale > 1 ? 1 : 2); }
		lastTap = now;
	}, {passive:true});
	// Pinch zoom
	let pinchStartDist = null;
	viewer.addEventListener('touchmove', function(e){
		if(e.touches && e.touches.length === 2){
			const dx = e.touches[0].clientX - e.touches[1].clientX;
			const dy = e.touches[0].clientY - e.touches[1].clientY;
			const dist = Math.hypot(dx, dy);
			if(pinchStartDist == null){
				pinchStartDist = dist;
			}else{
				const factor = dist / pinchStartDist;
				applyZoom(Math.max(0.5, Math.min(4, zoomScale * factor)));
				pinchStartDist = dist;
			}
		}else{
			pinchStartDist = null;
		}
	}, {passive:true});

	function applyZoom(scale, reset){
		zoomScale = reset ? 1 : Math.max(0.5, Math.min(4, scale));
		elements.image.style.transform = `scale(${zoomScale})`;
		elements.image.style.transformOrigin = 'center center';
	}

	function toggleFavorite(){
		const idx = currentIndex;
		const pos = favorites.indexOf(idx);
		if(pos === -1) favorites.push(idx); else favorites.splice(pos,1);
		saveJson('favorites', favorites);
		updateFavUi();
		renderList();
	}
	function updateFavUi(){
		const isFav = favorites.includes(currentIndex);
		elements.favToggle.textContent = isFav ? '❤' : '♡';
	}
	function pushRecent(idx){
		recent = [idx, ...recent.filter(i => i !== idx)].slice(0, 10);
		saveJson('recent', recent);
	}

	function setTab(tab){
		activeTab = tab;
		[elements.tabAll, elements.tabFav, elements.tabRecent].forEach(btn => btn.classList.remove('is-active'));
		if(tab === 'all') elements.tabAll.classList.add('is-active');
		if(tab === 'fav') elements.tabFav.classList.add('is-active');
		if(tab === 'recent') elements.tabRecent.classList.add('is-active');
		renderList();
	}

	function setCollection(name){
		currentCollection = name;
		[elements.colMusicList, elements.colSaYar].forEach(btn => btn.classList.remove('is-active'));
		if(name === 'Music Club Song List') elements.colMusicList.classList.add('is-active');
		if(name === 'Sa Yar Ga Toe Pwell') elements.colSaYar.classList.add('is-active');
		filteredIndexes = getSongs().map((_, i) => i);
		currentIndex = 0;
		renderList();
		updateMeta();
		loadImageForCurrent();
	}

	function toggleFullscreen(){
		const el = document.documentElement;
		if(!document.fullscreenElement){
			if(el.requestFullscreen) el.requestFullscreen();
		}else{
			if(document.exitFullscreen) document.exitFullscreen();
		}
	}

	// Initial render
		renderList();
		selectIndex(0);
		updateFavUi();

})();


