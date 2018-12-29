eaml.tag = {
	Button: function(text, width, height) {
		this.TEXT = text;
		this.WIDTH = width;
		this.HEIGHT = height;
		this.X = a.style.left;
		this.Y = a.style.top;

		var a = document.createElement("button");
		var b = document.createTextNode(text);
		a.style.backgroundColor = "#efefef";
		a.style.border = "0";
		a.style.borderRadius = "5px";
		a.style.padding = "15px";
		a.style.fontFamily = "arial condensed";

		a.onfocus = function() {
			a.style.outline = "none";
		};
		a.ontouchstart = function() {
			a.style.backgroundColor = "#e0e0e0";
		};
		a.ontouchend = function() {
			a.style.backgroundColor = "#efefef";
		};
		if (width >= 0)
		{
			a.style.width = width + "px";
		}
		if (height >= 0)
		{
			a.style.height = height + "px";
		}
		this.setWidth = function(px) {
			a.style.width = px + "px";
		};
		this.setHeight = function(px) {
			a.style.height = px + "px";
		};
		this.setSize = function(px1, px2) {
			a.style.height = px2 + "px";
			a.style.width = px1 + "px";
		};
		this.setX = function(px) {
			a.style.position = "absolute";
			a.style.left = px + "px";
		};
		this.setY = function(px) {
			a.style.position = "absolute";
			a.style.top = px + "px";
		};
		this.setPosition = function(px1, px2) {
			a.style.position = "absolute";
			a.style.top = px2 + "px";
			a.style.left = px1 + "px";
		};
		this.show = function() {
			a.appendChild(b);
			document.body.appendChild(a);
		};
		this.onAbort = function(funct) {
			a.onabort = function() {
				funct();
			};
		};
		this.onAfterPrint = function(funct) {
			a.onafterprint = function() {
				funct();
			};
		};
		this.onAnimationEnd = function(funct) {
			a.onanimationend = function() {
				funct();
			};
		};
		this.onAnimationIteration = function(funct) {
			a.onanimationiteration = function() {
				funct();
			};
		};
		this.onAnimationStart = function(funct) {
			a.onanimationstart = function() {
				funct();
			};
		};
		this.onBeforePrint = function(funct) {
			a.onbeforeprint = function() {
				funct();
			};
		};
		this.onBeforeUnload = function(funct) {
			a.onbeforeunload = function() {
				funct();
			};
		};
		this.onBlur = function(funct) {
			a.onblur = function() {
				funct();
			};
		};
		this.onCanPlay = function(funct) {
			a.oncanplay = function() {
				funct();
			};
		};
		this.onCanPlayThrough = function(funct) {
			a.oncanplaythrough = function() {
				funct();
			};
		};
		this.onChange = function(funct) {
			a.onchange = function() {
				funct();
			};
		};
		this.onClick = function(funct) {
			a.onclick = function() {
				funct();
			};
		};
		this.onContextMenu = function(funct) {
			a.oncontextmenu = function() {
				funct();
			};
		};
		this.onCopy = function(funct) {
			a.oncopy = function() {
				funct();
			};
		};
		this.onCut = function(funct) {
			a.oncut = function() {
				funct();
			};
		};
		this.onDoubleClick = function(funct) {
			a.ondblclick = function() {
				funct();
			};
		};
		this.onDrag = function(funct) {
			a.ondrag = function() {
				funct();
			};
		};
		this.onDragEnd = function(funct) {
			a.ondragend = function() {
				funct();
			};
		};
		this.onDragEnter = function(funct) {
			a.ondragenter = function() {
				funct();
			};
		};
		this.onDragLeave = function(funct) {
			a.ondragleave = function() {
				funct();
			};
		};
		this.onDragOver = function(funct) {
			a.on = function() {
				funct();
			};
		};
		this.onDragStart = function(funct) {
			a.ondragstart = function() {
				funct();
			};
		};
		this.onDrop = function(funct) {
			a.onDrop = function() {
				funct();
			};
		};
		this.onDurationChange = function(funct) {
			a.ondurationchange = function() {
				funct();
			};
		};
		this.onEnded = function(funct) {
			a.onended = function() {
				funct();
			};
		};
		this.onError = function(funct) {
			a.onerror = function() {
				funct();
			};
		};
		this.onFocus = function(funct) {
			a.onfocus = function() {
				funct();
			};
		};
		this.onFocusIn = function(funct) {
			a.onfocusin = function() {
				funct();
			};
		};
		this.onFocusOut = function(funct) {
			a.onfocusout = function() {
				funct();
			};
		};
		this.onFullscreenChange = function(funct) {
			a.onfullscreenchange = function() {
				funct();
			};
		};
		this.onFullscreenError = function(funct) {
			a.onfullscreenerror = function() {
				funct();
			};
		};
		this.onHashChange = function(funct) {
			a.onhashchange = function() {
				funct();
			};
		};
		this.onInput = function(funct) {
			a.oninput = function() {
				funct();
			};
		};
		this.onInvalid = function(funct) {
			a.oninvalid = function() {
				funct();
			};
		};
		this.onKeyDown = function(funct) {
			a.onkeydown = function() {
				funct();
			};
		};
		this.onKeyPress = function(funct) {
			a.onkeypress = function() {
				funct();
			};
		};
		this.onKeyUp = function(funct) {
			a.onkeyup = function() {
				funct();
			};
		};
		this.onLoad = function(funct) {
			a.onload = function() {
				funct();
			};
		};
		this.onLoadedData = function(funct) {
			a.onloadeddata = function() {
				funct();
			};
		};
		this.onLoadedMetaData = function(funct) {
			a.onloadedmetadata = function() {
				funct();
			};
		};
		this.onLoadStart = function(funct) {
			a.onloadstart = function() {
				funct();
			};
		};
		this.onMessage = function(funct) {
			a.onmessage = function() {
				funct();
			};
		};
		this.onMouseDown = function(funct) {
			a.onmousedown = function() {
				funct();
			};
		};
		this.onMouseEnter = function(funct) {
			a.onmouseenter = function() {
				funct();
			};
		};
		this.onMouseLeave = function(funct) {
			a.onmouseleave = function() {
				funct();
			};
		};
		this.onMouseMove = function(funct) {
			a.onmousemove = function() {
				funct();
			};
		};
		this.onMouseOver = function(funct) {
			a.onmouseover = function() {
				funct();
			};
		};
		this.onMouseOut = function(funct) {
			a.onmouseout = function() {
				funct();
			};
		};
		this.onMouseUp = function(funct) {
			a.onmouseup = function() {
				funct();
			};
		};
		this.onOffline = function(funct) {
			a.onoffline = function() {
				funct();
			};
		};
		this.onOnline = function(funct) {
			a.ononline = function() {
				funct();
			};
		};
		this.onOpen = function(funct) {
			a.onopen = function() {
				funct();
			};
		};
		this.onPageHide = function(funct) {
			a.onpagehide = function() {
				funct();
			};
		};
		this.onPageShow = function(funct) {
			a.onpageshow = function() {
				funct();
			};
		};
		this.onPaste = function(funct) {
			a.onpaste = function() {
				funct();
			};
		};
		this.onPause = function(funct) {
			a.onpause = function() {
				funct();
			};
		};
		this.onPlay = function(funct) {
			a.onplay = function() {
				funct();
			};
		};
		this.onPlaying = function(funct) {
			a.onplaying = function() {
				funct();
			};
		};
		this.onPopState = function(funct) {
			a.onpopstate = function() {
				funct();
			};
		};
		this.onProgress = function(funct) {
			a.onprogress = function() {
				funct();
			};
		};
		this.onRateChange = function(funct) {
			a.onratechange = function() {
				funct();
			};
		};
		this.onResize = function(funct) {
			a.onresize = function() {
				funct();
			};
		};
		this.onReset = function(funct) {
			a.onreset = function() {
				funct();
			};
		};
		this.onScroll = function(funct) {
			a.onscroll = function() {
				funct();
			};
		};
		this.onSearch = function(funct) {
			a.onsearch = function() {
				funct();
			};
		};
		this.onSeeked = function(funct) {
			a.onseeked = function() {
				funct();
			};
		};
		this.onSeeking = function(funct) {
			a.onseeking = function() {
				funct();
			};
		};
		this.onSelect = function(funct) {
			a.onselect = function() {
				funct();
			};
		};
		this.onShow = function(funct) {
			a.onshow = function() {
				funct();
			};
		};
		this.onStalled = function(funct) {
			a.onstalled = function() {
				funct();
			};
		};
		this.onStorage = function(funct) {
			a.onstorage = function() {
				funct();
			};
		};
		this.onSubmit = function(funct) {
			a.onsubmit = function() {
				funct();
			};
		};
		this.onSuspend = function(funct) {
			a.onsuspend = function() {
				funct();
			};
		};
		this.onTimeUpdate = function(funct) {
			a.ontimeupdate = function() {
				funct();
			};
		};
		this.onToggle = function(funct) {
			a.ontoggle = function() {
				funct();
			};
		};
		this.onTouch = function(funct) {
			a.ontouch = function() {
				funct();
			};
		};
		this.onTouchCancel = function(funct) {
			a.ontouchcancel = function() {
				funct();
			};
		};
		this.onTouchEnd = function(funct) {
			a.ontouchend = function() {
				funct();
			};
		};
		this.onTouchMove = function(funct) {
			a.ontouchmove = function() {
				funct();
			};
		};
		this.onTouchStart = function(funct) {
			a.ontouchstart = function() {
				funct();
			};
		};
		this.onTransitionEnd = function(funct) {
			a.ontransitionend = function() {
				funct();
			};
		};
		this.onUnload = function(funct) {
			a.onunload = function() {
				funct();
			};
		};
		this.onVolumeChange = function(funct) {
			a.onvolumechange = function() {
				funct();
			};
		};
		this.onWaiting = function(funct) {
			a.onwaiting = function() {
				funct();
			};
		};
		this.onWheel = function(funct) {
			a.onwheel = function() {
				funct();
			};
		};
	}};
