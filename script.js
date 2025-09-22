(function(){
	"use strict";

	/** Song order as requested (1..30) */
	const songs = [
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
	];

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
		toggleList: document.getElementById("toggleListBtn")
	};

	let currentIndex = 0; // 0-based
	let filteredIndexes = songs.map((_, i) => i);

	function renderList(){
		elements.list.innerHTML = "";
		filteredIndexes.forEach((songIndex, visibleIndex) => {
			const title = songs[songIndex];
			const li = document.createElement("li");
			li.className = "song-item" + (songIndex === currentIndex ? " active" : "");
			li.setAttribute("data-index", String(songIndex));
			li.innerHTML = `
				<span class="song-index">${songIndex + 1}</span>
				<span class="song-title" title="${escapeHtml(title)}">${escapeHtml(title)}</span>
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
		elements.metaIndex.textContent = `${currentIndex + 1} / ${songs.length}`;
		elements.metaTitle.textContent = songs[currentIndex] || "—";
	}

	function loadImageForCurrent(){
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
	}

	function showFallback(){
		elements.image.hidden = true;
		elements.fallback.hidden = false;
	}

	function selectIndex(index){
		if(index < 0 || index >= songs.length) return;
		currentIndex = index;
		renderList();
		updateMeta();
		loadImageForCurrent();
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
		elements.search.addEventListener("input", applySearchFilter);
		// Toggle list for mobile
		elements.toggleList.addEventListener("click", function(){
			const isOpen = elements.listPanel.classList.toggle("is-open");
			elements.toggleList.setAttribute("aria-expanded", String(isOpen));
			if(isOpen){
				// Focus search shortly after open for mobile keyboards
				setTimeout(() => elements.search.focus(), 50);
			}
		});

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

	// Initial render
		renderList();
		selectIndex(0);

})();


