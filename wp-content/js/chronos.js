/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */    
  
$("#footer .toggle-footer").on("click", function() { var $this = $(this);
        $this.toggleClass("active") }); var SPMaskBehavior = function(val) { return val.replace(/\D/g, "").length === 11 ? "(00) 00000-0000" : "(00) 0000-00009" },
        spOptions = { onKeyPress: function(val, e, field, options) { field.mask(SPMaskBehavior.apply({}, arguments), options) } };

(function(global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.LazyLoad = factory(); })(this, function() {
    'use strict';
    var runningOnBrowser = typeof window !== "undefined";
    var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
    var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
    var supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
    var defaultSettings = { elements_selector: "img", container: isBot || runningOnBrowser ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", class_loading: "loading", class_loaded: "loaded", class_error: "error", load_delay: 0, auto_unobserve: true, callback_enter: null, callback_exit: null, callback_reveal: null, callback_loaded: null, callback_error: null, callback_finish: null, use_native: false };
    var getInstanceSettings = function getInstanceSettings(customSettings) { return _extends({}, defaultSettings, customSettings); };
    var createInstance = function createInstance(classObj, options) {
        var event;
        var eventString = "LazyLoad::Initialized";
        var instance = new classObj(options);
        try { event = new CustomEvent(eventString, { detail: { instance: instance } }); } catch (err) { event = document.createEvent("CustomEvent");
            event.initCustomEvent(eventString, false, false, { instance: instance }); }
        window.dispatchEvent(event);
    };

    function autoInitialize(classObj, options) {
        if (!options) { return; }
        if (!options.length) { createInstance(classObj, options); } else { for (var i = 0, optionsItem; optionsItem = options[i]; i += 1) { createInstance(classObj, optionsItem); } }
    }

    var addClass = function addClass(element, className) {
        if (supportsClassList) { element.classList.add(className); return; }
        element.className += (element.className ? " " : "") + className;
    };
    var removeClass = function removeClass(element, className) {
        if (supportsClassList) { element.classList.remove(className); return; }
        element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
    };

});