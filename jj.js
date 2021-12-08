/*! NOI - https://noi.international */
!(function (t) {
  t.fn.loadImage = function (e) {
    return this.each(function () {
      var i = t(this);
      i.length &&
        i.each(function () {
          if (t(this).is("img")) {
            var i = t(this),
              n = this;
            if (
              (i.data("tiny") &&
                i.attr("src", i.data("tiny")).addClass("tiny-preview"),
              i.data("large-src") && i.data("medium-src"))
            )
              if (
                Modernizr.mousehover ||
                (!Modernizr.mousehover &&
                  t(window).width() >= 768 &&
                  window.devicePixelRatio >= 1.5)
              )
                var a = i.data("large-src");
              else a = i.data("medium-src");
            else if (i.data("src")) a = i.data("src");
            t("<img />")
              .attr("src", a)
              .imagesLoaded(function () {
                i.attr("src", a),
                  i.data("object-fit") && objectFitPolyfill(i),
                  setTimeout(function () {
                    i.removeAttr("data-src")
                      .removeAttr("data-large-src")
                      .removeAttr("data-medium-src")
                      .removeClass("tiny-preview");
                  }, 100),
                  setTimeout(function () {
                    i.addClass("loaded");
                  }, 500),
                  "function" == typeof e && e.apply(n);
              });
          } else if (t(this).is(".repeating-bg")) {
            (i = t(this)), (n = this);
            if (
              (i.data("tiny") &&
                i.attr("src", i.data("tiny")).addClass("tiny-preview"),
              i.data("large-src") && i.data("medium-src"))
            )
              if (
                Modernizr.mousehover ||
                (!Modernizr.mousehover &&
                  t(window).width() >= 768 &&
                  window.devicePixelRatio >= 1.5)
              )
                a = i.data("large-src");
              else a = i.data("medium-src");
            else if (i.data("src")) a = i.data("src");
            t("<img />")
              .attr("src", a)
              .imagesLoaded(function () {
                i.attr("style", "background-image: url(" + a + ")"),
                  setTimeout(function () {
                    i.removeAttr("data-src")
                      .removeAttr("data-large-src")
                      .removeAttr("data-medium-src")
                      .removeClass("tiny-preview");
                  }, 100),
                  setTimeout(function () {
                    i.addClass("loaded");
                  }, 500),
                  "function" == typeof e && e.apply(n);
              });
          }
        });
    });
  };
})(jQuery),
  (function (t) {
    t.fn.loadVideo = function (e) {
      return this.each(function () {
        var e = t(this);
        e.length &&
          e.each(function () {
            var e = t(this);
            e.attr("src") || ((e[0].src = e.attr("data-src")), e[0].load()),
              (loadedVideo = function () {
                e.data("object-fit") && objectFitPolyfill(e),
                  setTimeout(function () {
                    e.removeAttr("data-src");
                  }, 100),
                  setTimeout(function () {
                    e.addClass("loaded"), e[0].playing || e[0].play();
                  }, 500);
              }),
              e.on("canplay", loadedVideo),
              (e[0].readyState > 3 || !Modernizr.mousehover) && loadedVideo();
          });
      });
    };
  })(jQuery),
  (IntersectionObserver.prototype.POLL_INTERVAL = 100),
  (IntersectionObserver.prototype.USE_MUTATION_OBSERVER = !1);
var config = { rootMargin: "100px 100px", threshold: 0.01 },
  mediaObserver = new IntersectionObserver(onIntersection, config);
function onIntersection(t) {
  t.forEach(function (t) {
    var e = "video" == t.target.tagName.toLowerCase();
    t.intersectionRatio > 0 || !0 === t.isIntersecting
      ? e
        ? t.target.hasAttribute("src")
          ? t.target.playing || t.target.play()
          : $(t.target).loadVideo()
        : ($(t.target).loadImage(), mediaObserver.unobserve(t.target))
      : e && t.target.playing && t.target.pause();
  });
}
function addEvent(t, e, i) {
  t.addEventListener
    ? t.addEventListener(e, i, !1)
    : t.attachEvent && t.attachEvent("on" + e, i);
}
function parseVideo(t) {
  if (
    (t.match(
      /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
    ),
    RegExp.$3.indexOf("youtu") > -1)
  )
    var e = "youtube";
  else if (RegExp.$3.indexOf("vimeo") > -1) e = "vimeo";
  return { type: e, id: RegExp.$6 };
}
function isInViewport(t) {
  var e = t.getBoundingClientRect();
  return (
    e.top >= 0 &&
    e.left >= 0 &&
    e.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    e.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function readyForLoading(t) {
  var e = t.getBoundingClientRect();
  return (
    e.top >= 0 &&
    e.left >= 0 &&
    e.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    e.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function padZero(t) {
  return t <= 9 && (t = "0" + t), t;
}
function isExternal(t) {
  var e = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
  return (
    ("string" == typeof e[1] &&
      0 < e[1].length &&
      e[1].toLowerCase() !== location.protocol) ||
    ("string" == typeof e[2] &&
      0 < e[2].length &&
      e[2].replace(
        new RegExp(
          ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
        ),
        ""
      ) !== location.host)
  );
}
!(function (t, e, i) {
  i = i || window;
  var n = !1;
  i.addEventListener(t, function () {
    n ||
      ((n = !0),
      requestAnimationFrame(function () {
        i.dispatchEvent(new CustomEvent(e)), (n = !1);
      }));
  });
})("resize", "rafResize"),
  (function () {
    if ("function" == typeof window.CustomEvent) return !1;
    function t(t, e) {
      e = e || { bubbles: !1, cancelable: !1, detail: null };
      var i = document.createEvent("CustomEvent");
      return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
    }
    (t.prototype = window.Event.prototype), (window.CustomEvent = t);
  })(),
  (function (t) {
    t.fn.lazyLoad = function (e) {
      t.extend({}, { horizontal: !1 }, e);
      return this.each(function () {
        t(this)
          .find(
            "img[data-src],video[data-src],img[data-large-src],img[data-bg]"
          )
          .each(function (t) {
            mediaObserver.observe(this);
          });
      });
    };
  })(jQuery),
  (function (t) {
    t.fn.fixObjectFit = function (e) {
      t.extend({}, { type: "img" }, e);
      return this.each(function () {
        var e = t(this);
        if (e.is("#overlay")) var i = "contain";
        else i = "cover";
        e.find("img, video").each(function (e) {
          var n = t(this);
          n.attr("data-object-fit", i),
            "cover" == i && n.attr("data-object-position", "50% 0");
        });
      });
    };
  })(jQuery),
  (function (t) {
    t.fn.unLoadImages = function () {
      return this.each(function (e) {
        t("img", this).attr(
          "src",
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        ),
          t("video", this).each(function () {
            t(this).attr("src") && t(this).attr("src", "");
          }),
          t(this).removeClass("loaded");
      });
    };
  })(jQuery),
  (jQuery.fn.redraw = function () {
    return this.each(function () {
      (this.style.display = "none"),
        this.offsetHeight,
        (this.style.display = "block");
    });
  }),
  (jQuery.fn.redraw = function () {
    return this.each(function () {
      (this.style.display = "none"),
        this.offsetHeight,
        (this.style.display = null);
    });
  });
var visibleSlide,
  html = document.documentElement,
  body = document.body,
  work = document.getElementById("work"),
  imageContainer = document.getElementById("image-container"),
  workContainer = document.getElementById("fixed-container"),
  mediaContainer = document.getElementById("fixed-media"),
  captionContainer = document.getElementById("caption"),
  planet = document.getElementById("planet-container"),
  currentDot = document.getElementById("current-dot"),
  count = document.getElementById("count"),
  timeline = document.getElementById("timeline"),
  dots = document.getElementById("dots"),
  ajaxInProgress = !1,
  hasMouse = Modernizr.mousehover,
  supportsWebp = !1,
  opacityEasing = "cubicBezier(0.420, 0.000, 0.580, 1.000)",
  slideEasing = "easeInOutQuint",
  human = !1,
  isAnimating = !1,
  windowWidth = window.innerWidth,
  windowHeight = window.innerHeight,
  bodyHeight = body.scrollHeight,
  slideHeight = windowHeight / 4,
  scrollbarWidth = 0,
  pad = getComputedStyle(body).getPropertyValue("--pad").replace("px", ""),
  dotSize = getComputedStyle(body).getPropertyValue("--dot").replace("px", ""),
  menuHeight = document.getElementById("menu").offsetHeight,
  iOSvh = vhCheck({ cssVarName: "ios-fix", updateOnTouch: !0 }),
  scrollDuration = 800,
  slideDuration = 800,
  opacityDuration = 400,
  scrollTop = window.pageYOffset,
  prevScrollTop = scrollTop,
  scrollBottom = body.scrollHeight - windowHeight - scrollTop,
  autoScroll = !1,
  pageLoaded = !1,
  visibleIndex = 1,
  scrollIndex = 0,
  totalScreens = 0,
  workPreview = 0,
  previewOffsetTop = 0,
  dotTop = 0,
  dragging = !1,
  clicking = !1;
let imageArray = [],
  videoArray = [],
  preloadImages = (e, t) => {
    if (((t = t || 0), e && e.length > t)) {
      var o = new Image();
      (o.onload = function () {
        preloadImages(e, t + 1);
      }),
        (o.src = e[t]);
    } else preloadVideos(videoArray, 0);
  },
  preloadVideos = (e, t) => {
    if (((t = t || 0), e && e.length > t)) {
      var o = document.createElement("video");
      (o.oncanplay = function () {
        preloadVideos(e, t + 1);
      }),
        (o.src = e[t]);
    }
  };
var renderer,
  scene,
  camera,
  myCanvas = document.getElementById("planet-canvas"),
  containerW = myCanvas.offsetWidth,
  containerH = containerW;
(renderer = new THREE.WebGLRenderer({
  canvas: myCanvas,
  antialias: !0,
})).setClearColor(1118481),
  renderer.setPixelRatio(window.devicePixelRatio),
  renderer.setSize(containerW, containerH),
  (camera = new THREE.PerspectiveCamera(75, containerW / containerH, 0.1, 1e3)),
  (scene = new THREE.Scene());
var light = new THREE.AmbientLight(1118481, 1);
scene.add(light);
var light2 = new THREE.PointLight(16777215, 1);
scene.add(light2), light2.position.set(0, 10, 0);
var light3 = new THREE.PointLight(255, 1);
light3.position.set(0, -10, 0), scene.add(light3);
var geometry = new THREE.SphereGeometry(1, 128, 128),
  material = new THREE.MeshLambertMaterial({
    color: 255,
    flatShading: !0,
    reflectivity: 0.01,
  }),
  sphere = new THREE.Mesh(geometry, material);
(sphere.position.z = -2.8), scene.add(sphere);
var noiPlanet = {
  xRot: 0.002,
  yRot: 0.003,
  zRot: -23.5,
  fillColor: "#cccccc",
  segments: 64,
  spot1Color: "#00cc00",
  spot1xPos: 0.7,
  spot1yPos: 0.5,
  spot1Intensity: 0.3,
  spot2Color: "#0000ff",
  spot2xPos: 0.3,
  spot2yPos: 0.5,
  spot2Intensity: 0.7,
};
function commuteColor(e) {
  return e.replace("#", "0x");
}
function animatePlanet() {
  sphere.material.color.setHex(commuteColor(noiPlanet.fillColor)),
    light2.color.setHex(commuteColor(noiPlanet.spot1Color)),
    light2.position.set(
      noiPlanet.spot1xPos,
      noiPlanet.spot1yPos,
      noiPlanet.spot1Intensity
    ),
    light3.color.setHex(commuteColor(noiPlanet.spot2Color)),
    light3.position.set(
      noiPlanet.spot2xPos,
      noiPlanet.spot2yPos,
      noiPlanet.spot2Intensity
    );
  const e = 5e-4 * Date.now();
  (light2.position.x = 40 * Math.sin(e * noiPlanet.spot1xPos)),
    (light2.position.y = 50 * Math.cos(e * noiPlanet.spot1yPos)),
    (light2.position.z = 40 * Math.cos(e * noiPlanet.spot1Intensity)),
    (light3.position.x = 40 * Math.sin(e * noiPlanet.spot2xPos)),
    (light3.position.y = 50 * Math.cos(e * noiPlanet.spot2yPos)),
    (light3.position.z = 40 * Math.cos(e * noiPlanet.spot2Intensity)),
    scrollTop < windowHeight - menuHeight && renderer.render(scene, camera),
    requestAnimationFrame(animatePlanet);
}
function resizePlanet() {
  (myCanvas.style.width = ""),
    (myCanvas.style.height = ""),
    (containerW = myCanvas.offsetWidth),
    (containerH = containerW),
    (camera.aspect = containerW / containerH),
    camera.updateProjectionMatrix(),
    renderer.setSize(containerW, containerH),
    renderer.render(scene, camera);
}
let first = !0,
  handleScroll = (e = !1) => {
    if (
      ((prevScrollTop = scrollTop),
      dragging || (scrollTop = window.pageYOffset),
      (prevScrollTop == scrollTop && !dragging) || !pageLoaded)
    )
      return (
        html.classList.remove("scrolling"),
        window.requestAnimationFrame(handleScroll),
        !1
      );
    if (
      (autoScroll || clicking || html.classList.add("scrolling"),
      dragging ||
        (scrollTop >= (windowHeight - menuHeight) / 2
          ? html.classList.add("work-visible")
          : html.classList.remove("work-visible"),
        scrollTop >= windowHeight - menuHeight
          ? html.classList.add("timeline-visible")
          : html.classList.remove("timeline-visible"),
        (planet.style.opacity =
          scrollTop > (windowHeight - menuHeight) / 4 &&
          scrollTop <= (3 * (windowHeight - menuHeight)) / 4
            ? 1 -
              (scrollTop - (windowHeight - menuHeight) / 4) /
                ((windowHeight - menuHeight) / 2)
            : scrollTop > (3 * (windowHeight - menuHeight)) / 4
            ? 0
            : 1)),
      scrollTop > (3 * windowHeight) / 2 &&
        html.classList.remove("initial-scroll"),
      autoScroll ||
        (scrollIndex =
          scrollTop > windowHeight - menuHeight
            ? Math.min(
                totalScreens,
                Math.ceil(
                  (scrollTop - (windowHeight - menuHeight)) / slideHeight
                )
              )
            : scrollTop == windowHeight - menuHeight
            ? 1
            : 0),
      !autoScroll && !dragging)
    ) {
      let e = windowHeight - menuHeight;
      scrollTop > e
        ? ((dotTop = Math.round(
            ((scrollTop - e) * timeline.offsetHeight) /
              document.getElementById("work").offsetHeight
          )),
          (currentDot.style.top = dotTop + "px"),
          (count.style.top = dotTop + "px"),
          (currentDot.style.transform = "rotate(" + 2 * dotTop + "deg)"))
        : ((currentDot.style.top = 0), (count.style.top = 0));
    }
    if (
      (1 == scrollIndex &&
        1 == visibleIndex &&
        scrollTop > prevScrollTop &&
        first &&
        (gtag("config", "UA-1024668-23", {
          page_title: document.getElementById("screen-1").dataset.title,
          page_path: `/${document
            .getElementById("screen-1")
            .dataset.title.replace(/\s+/g, "-")
            .toLowerCase()}`,
        }),
        (first = !1)),
      scrollIndex > 0 && scrollIndex !== visibleIndex)
    ) {
      (visibleSlide = document.getElementById("screen-" + scrollIndex)),
        (document.getElementById("index").innerHTML = padZero(scrollIndex));
      let e = visibleSlide.dataset.src,
        t = "mp4" == e.substring(e.lastIndexOf(".") + 1, e.length),
        o = "jpg" == e.substring(e.lastIndexOf(".") + 1, e.length);
      visibleSlide.dataset.count !==
        document.getElementById("screen-" + visibleIndex).dataset.count &&
        gtag("config", "UA-1024668-23", {
          page_title: visibleSlide.dataset.title,
          page_path: `/${visibleSlide.dataset.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`,
        }),
        windowWidth < 768 && o && (e = visibleSlide.dataset.mobileSrc),
        imageContainer.classList.remove("has-bg"),
        (imageContainer.style.backgroundColor = ""),
        visibleSlide.dataset.bg &&
          (imageContainer.classList.add("has-bg"),
          visibleSlide.dataset.bgColor &&
            windowWidth >= 768 &&
            (imageContainer.style.backgroundColor =
              visibleSlide.dataset.bgColor)),
        (imageContainer.innerHTML = t
          ? `<video id="media" src="${e}" width="1440" height="900" preload autoplay loop muted playsinline>`
          : `<img id="media" src="${e}" width="1440" height="900" alt="">`),
        (captionContainer.innerHTML = visibleSlide.dataset.caption),
        (visibleIndex = scrollIndex),
        (first = !0),
        imageContainer.classList.contains("has-bg") &&
          windowWidth >= 768 &&
          ((document.getElementById("media").style.width =
            Math.round(document.getElementById("media").offsetWidth) + "px"),
          (document.getElementById("media").style.height =
            Math.round(document.getElementById("media").offsetHeight) + "px"));
    }
    window.requestAnimationFrame(handleScroll);
  },
  handleResize = (e = !1) => {
    if (
      ((pad = parseInt(
        getComputedStyle(body).getPropertyValue("--pad").replace("px", "")
      )),
      (dotSize = getComputedStyle(body)
        .getPropertyValue("--dot")
        .replace("px", "")),
      (workPreview = parseInt(
        getComputedStyle(body)
          .getPropertyValue("--work-preview")
          .replace("px", "")
      )),
      (previewOffsetTop = Math.round(
        Math.max(
          0,
          (workContainer.offsetHeight - 0.625 * workContainer.offsetWidth) / 2
        )
      )),
      (menuHeight = document.getElementById("menu").offsetHeight),
      resizePlanet(),
      e && pageLoaded && html.classList.add("resizing"),
      (windowWidth = window.innerWidth),
      (windowHeight = window.innerHeight),
      (bodyHeight = body.scrollHeight),
      (slideHeight = windowHeight / 4),
      (mediaContainer.style.marginTop = -previewOffsetTop + "px"),
      (work.style.marginTop = previewOffsetTop + workPreview + "px"),
      document.getElementById("media") &&
        ((document.getElementById("media").style.width = ""),
        (document.getElementById("media").style.height = ""),
        imageContainer.classList.contains("has-bg") &&
          windowWidth >= 768 &&
          ((document.getElementById("media").style.width =
            Math.round(document.getElementById("media").offsetWidth) + "px"),
          (document.getElementById("media").style.height =
            Math.round(document.getElementById("media").offsetHeight) + "px"))),
      workContainer.offsetWidth / workContainer.offsetHeight < 1.6
        ? workContainer.classList.add("portrait-container")
        : workContainer.classList.remove("portrait-container"),
      void 0 !== visibleSlide &&
        ((autoScroll = !0),
        scrollTop < windowHeight - menuHeight
          ? window.scrollTo(0, 0)
          : window.scrollTo(
              0,
              visibleSlide.getBoundingClientRect().top +
                scrollTop -
                windowHeight +
                1
            ),
        (autoScroll = !1)),
      hasMouse)
    ) {
      var t = document.createElement("div");
      (t.className = "scrollbar-measure"),
        body.appendChild(t),
        (scrollbarWidth = t.offsetWidth - t.clientWidth),
        body.removeChild(t),
        scrollbarWidth &&
          html.style.setProperty("--scrollbar-width", scrollbarWidth + "px");
    }
    (initialLoad = !1),
      setTimeout(function () {
        html.classList.remove("resizing");
      }, 150);
  },
  detectClient = (e, t = !1) => {
    const o = {
      aa: "Anti Agency",
      ac: "Art + Commerce",
      af: "Academy",
      ahmm: "Allford Hall Monaghan Morris",
      ap: "Art Partner",
      ba: "B&amp;A",
      bb: "Beavertown",
      bt: "Bold Tendencies",
      bdp: "BDP",
      buf: "BUF",
      cs: "Capita",
      cv: "Caviar",
      cw: "CAMERA WORK",
      cy: "CASEY",
      df: "DNA Fit",
      dp: "Depop",
      ds: "Deus",
      dl: "Dewi Lewis",
      en: "Emil Nava",
      fj: "Fjord",
      fi: "Finisterre",
      fr: "Feedr",
      gleam: "Gleam",
      gu: "Growing Underground",
      hmn: "Hyun Mi Nielsen",
      ii: "Iconoclast Image",
      iv: "Inez &amp; Vinoodh",
      mk: "MACK",
      nb: "Nick Brandt",
      nm: "Next Management",
      noi: "NOI",
      oc: "Ocean Cleanup",
      pf: "Pulse Films",
      pp: "Passion Pictures",
      pz: "Partizan",
      rs: "Rattling Stick",
      rep: "rep",
      sa: "Saatchi Gallery",
      sb: "Street Bees",
      sg: "Smuggler",
      sm: "SprÃ¼th Magers",
      sv: "Svalbard GSV",
      tt: "Two Thirds",
    };
    e in o && (document.getElementById("heading").innerHTML = "NOI Ã— " + o[e]);
  };
document.addEventListener("DOMContentLoaded", () => {
  navigator.platform.toLowerCase().indexOf("mac") >= 0 &&
    html.classList.add("macos"),
    navigator.userAgent.toLowerCase().indexOf("edge") >= 0 &&
      html.classList.add("edge");
  const e = new URLSearchParams(window.location.search);
  let t = e.get("tag"),
    o = "content.json";
  if (t) {
    const t = e.get("client");
    t && detectClient(t, !0);
  } else {
    const i = e.toString().replace("=", "");
    (t = "main"), detectClient(i, !1), "gleam" == i && (o = "gleam.json");
  }
  animatePlanet(),
    window
      .fetch(o)
      .then((e) => e.json())
      .then((e) => {
        let o = "",
          i = 0;
        e.forEach((e, n) => {
          if (!t || -1 !== e.tags.indexOf(t)) {
            let t = document.createElement("div");
            (t.className = "dot"),
              (t.dataset.slide = i + 1),
              (t.style.flex = e.media.length),
              dots.appendChild(t),
              t.addEventListener("click", () => {
                window.scrollTo(
                  0,
                  document
                    .getElementById("screen-" + t.dataset.slide)
                    .getBoundingClientRect().top +
                    scrollTop -
                    windowHeight +
                    1
                ),
                  (scrollIndex = t.dataset.slide),
                  (currentDot.style.top = t.offsetTop + "px"),
                  (count.style.top = t.offsetTop + "px");
              }),
              e.media.forEach((t, l) => {
                i++;
                let a = e.url
                    ? `<a href='${e.url}' target='blank' class='title'>${e.name}</a>`
                    : `<div>${e.name}</div>`,
                  r = e.url
                    ? `<a href='${e.url}' target='blank'>View site <span class='emoji'>ðŸ”—</span></a>`
                    : "",
                  s = "";
                t.background &&
                  ((s = ' data-bg="1"'),
                  t.backgroundColor &&
                    (s += ` data-bg-color="${t.backgroundColor}"`));
                let d =
                    "mp4" ==
                    t.url.substring(t.url.lastIndexOf(".") + 1, t.url.length),
                  c =
                    "jpg" ==
                    t.url.substring(t.url.lastIndexOf(".") + 1, t.url.length);
                (t.mobileUrl = c
                  ? t.url.replace(/(\.[\w\d_-]+)$/i, "-mobile$1")
                  : t.url),
                  supportsWebp &&
                    c &&
                    ((t.url = t.url.replace("jpg", "webp")),
                    c && (t.mobileUrl = t.mobileUrl.replace("jpg", "webp"))),
                  (o += `<div id="screen-${i}" class="screen" data-count="${
                    n + 1
                  }" data-title="${
                    e.name
                  }" data-caption="${a}<span class='description'>${
                    e.caption
                  }</span>${r}" data-src="content/${
                    t.url
                  }" data-mobile-src="content/${t.mobileUrl}"${s}></div>`);
                let g = document.createElement("link");
                if (windowWidth >= 768 || !c) {
                  g.href = `content/${t.url}`;
                  var m = t.url;
                } else {
                  g.href = `content/${t.mobileUrl}`;
                  m = t.mobileUrl;
                }
                1 == i
                  ? ((g.rel = "preload"),
                    t.background &&
                      (imageContainer.classList.add("has-bg"),
                      t.backgroundColor &&
                        (workContainer.style.backgroundColor =
                          t.backgroundColor)),
                    d
                      ? ((imageContainer.innerHTML = `<video id="media" src="content/${m}" width="1440" height="900" preload autoplay loop muted playsinline>`),
                        (g.as = "image"))
                      : ((imageContainer.innerHTML = `<img id="media" src="content/${m}" width="1440" height="900" alt="">`),
                        (g.as = "video")),
                    (captionContainer.innerHTML = `${a}<span class='description'>${e.caption}</span>${r}`),
                    imageContainer.classList.contains("has-bg") &&
                      windowWidth >= 768 &&
                      ((document.getElementById("media").style.width =
                        Math.round(
                          document.getElementById("media").offsetWidth
                        ) + "px"),
                      (document.getElementById("media").style.height =
                        Math.round(
                          document.getElementById("media").offsetHeight
                        ) + "px")))
                  : (d
                      ? videoArray.push(`content/${m}`)
                      : imageArray.push(`content/${m}`),
                    (g.rel = "prefetch"),
                    (g.as = d ? "image" : "video"));
              });
          }
        }),
          (totalScreens = i),
          (document.getElementById("work").innerHTML = o),
          (document.getElementById("total").innerHTML = padZero(totalScreens)),
          (bodyHeight = body.scrollHeight);
      }),
    "onorientationchange" in window
      ? window.addEventListener("onorientationchange", () => {
          setTimeout(() => {
            handleResize(!0);
          }, 100);
        })
      : window.addEventListener("rafResize", handleResize),
    handleResize(!1),
    handleScroll(),
    document.getElementById("studio-button").addEventListener("click", () => {
      (autoScroll = !0),
        html.classList.remove("timeline-visible"),
        anime({
          targets: "html, body",
          scrollTop: [scrollTop, 0],
          duration: scrollDuration,
          easing: slideEasing,
          update: function (e) {
            75 == Math.round(e.progress) && (scrollIndex = 1);
          },
          complete: function () {
            autoScroll = !1;
          },
        });
    }),
    document.getElementById("work-button").addEventListener("click", () => {
      anime({
        targets: "html, body",
        scrollTop: [scrollTop, windowHeight - menuHeight],
        duration: scrollDuration,
        easing: slideEasing,
        complete: function () {
          html.classList.add("initial-scroll");
        },
      });
    });
  var i,
    n = new Draggabilly(currentDot, { axis: "y", containment: timeline }),
    l = 0;
  n.on("pointerDown", (e, t) => {
    html.classList.add("dragging");
  }),
    n.on("dragStart", (e, t) => {
      (dragging = !0),
        (dotTop = parseInt(currentDot.style.top.replace("px", ""))),
        (l = dotTop);
    }),
    n.on("dragMove", (e, t, o) => {
      l !== Math.round(n.position.y) &&
        ((l = Math.round(n.position.y)),
        (count.style.top = l + "px"),
        (scrollTop = Math.round(
          (n.position.y * document.getElementById("work").offsetHeight) /
            timeline.offsetHeight +
            (windowHeight - menuHeight)
        )));
    }),
    n.on("dragEnd", (e, t) => {
      (currentDot.style.cssText = "top: " + l + "px"),
        (count.style.cssText = "top: " + l + "px"),
        (autoScroll = !0),
        window.scrollTo(0, scrollTop),
        (autoScroll = !1),
        (dragging = !1),
        html.classList.remove("dragging");
    }),
    imageContainer.addEventListener("click", () => {
      (clicking = !0),
        html.classList.add("clicking"),
        window.scrollTo(
          0,
          Math.ceil(windowHeight - menuHeight + scrollIndex * slideHeight + 1)
        ),
        setTimeout(() => {
          (clicking = !1), html.classList.remove("clicking");
        }, 300);
    }),
    document.addEventListener("keydown", (e) => {
      if (38 === e.keyCode || 40 === e.keyCode) {
        if (38 === e.keyCode)
          if ((e.preventDefault(), 1 == scrollIndex)) {
            var t = 0;
            anime({
              targets: "html, body",
              scrollTop: [scrollTop, t],
              duration: scrollDuration,
              easing: slideEasing,
            });
          } else {
            t = Math.floor(
              windowHeight - menuHeight + (scrollIndex - 2) * slideHeight + 1
            );
            (clicking = !0),
              html.classList.add("clicking"),
              window.scrollTo(0, t);
          }
        else if (40 === e.keyCode)
          if ((e.preventDefault(), 0 == scrollIndex)) {
            t = windowHeight - menuHeight;
            anime({
              targets: "html, body",
              scrollTop: [scrollTop, t],
              duration: scrollDuration,
              easing: slideEasing,
              complete: function () {
                html.classList.add("initial-scroll");
              },
            });
          } else {
            t = Math.ceil(
              windowHeight - menuHeight + scrollIndex * slideHeight + 1
            );
            (clicking = !0),
              html.classList.add("clicking"),
              window.scrollTo(0, t);
          }
        setTimeout(() => {
          (clicking = !1), html.classList.remove("clicking");
        }, 500);
      }
    });
  var a = document.getElementById("liftoff");
  (a.volume = 0.03),
    document.querySelectorAll("#email, #contact-button").forEach((e) => {
      e.addEventListener("mouseenter", function () {
        clearTimeout(i),
          (i = setTimeout(function () {
            a.play(), e.classList.add("liftoff");
          }, 150));
      }),
        e.addEventListener("mouseleave", function () {
          clearTimeout(i),
            a.pause(),
            (a.currentTime = 0),
            e.classList.remove("liftoff");
        });
    }),
    anime
      .timeline({ easing: opacityEasing })
      .add({
        targets: "#planet-container",
        opacity: [0, 1],
        duration: 200,
        delay: 200,
      })
      .add({ targets: "#ni", opacity: [1, 0], duration: 500, delay: 2e3 })
      .add({
        targets: "#about, #menu",
        opacity: [0, 1],
        duration: 1500,
        complete: function () {
          html.classList.remove("has-intro");
        },
      })
      .add(
        {
          targets: "#fixed-media",
          translateY: [workPreview, 0],
          easing: slideEasing,
          duration: 250,
          complete: function () {
            preloadImages(imageArray, 0);
          },
        },
        "-=500"
      );
}),
  window.addEventListener("load", () => {
    handleResize(!1),
      setTimeout(function () {
        window.scrollTo(0, 0), (pageLoaded = !0);
      }, 150);
  }),
  window.addEventListener("beforeunload", () => {});
