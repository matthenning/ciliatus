/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(51),
  /* template */
  __webpack_require__(113),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\mixins\\pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18518174", Component.options)
  } else {
    hotAPI.reload("data-v-18518174", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(134),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\mixins\\table_filter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] table_filter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6aab8a3a", Component.options)
  } else {
    hotAPI.reload("data-v-6aab8a3a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(131),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\loading-card-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loading-card-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5de93ae6", Component.options)
  } else {
    hotAPI.reload("data-v-5de93ae6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(135),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\loading-indicator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loading-indicator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d20a6fb", Component.options)
  } else {
    hotAPI.reload("data-v-6d20a6fb", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CiliatusObject = function () {
    function CiliatusObject(ciliatus, type, id, data, include) {
        var _this = this;

        _classCallCheck(this, CiliatusObject);

        this.ciliatus = ciliatus;
        this.type = type;
        this.id = id;
        this.data = data;
        this.include = include ? include : [];
        this.max_age_seconds = 60;
        this.api_url = global.apiUrl;
        this.refreshing = false;
        this.subscribed = 1;

        this.__verifyId();

        if (!this.data) {
            this.refresh();
        } else {
            this.last_change = 0;
            this.last_refresh = Date.now();
            this.last_persist = 0;
        }

        setInterval(function () {
            if (_this.subscribed > 0) {
                _this.refresh();
            }
        }, 60000);
    }

    _createClass(CiliatusObject, [{
        key: 'refresh',
        value: function refresh(force, timeout) {
            var _this2 = this;

            if (!force && !(this.last_change > this.last_refresh) || this.last_change === undefined || this.last_refresh === undefined) {
                this.refreshing = true;
                // When handling events it can be useful to wait for duplicate events
                timeout = timeout ? timeout * 1000 : 1;
                setTimeout(function () {
                    jQuery.ajax({
                        context: _this2,
                        url: _this2.url(),
                        method: 'GET',
                        success: _this2.handleApiResult
                    });
                }, timeout);
            } else {
                window.console.log('Not updating ' + this.type + ' ' + this.id + '. ' + 'Last change (' + this.last_change + ') is > last refresh (' + this.last_change + ')');
            }
        }
    }, {
        key: 'url',
        value: function url() {
            var includes = this.include.map(function (i) {
                return 'with[]=' + i;
            }).join('&');
            return this.api_url + '/' + this.type + '/' + this.id + '?' + includes;
        }
    }, {
        key: 'handleApiResult',
        value: function handleApiResult(result) {
            this.data = result['data'];
            this.last_change = 0;
            this.last_refresh = Date.now();
            this.last_persist = 0;

            this.__verifyId();

            this.refreshing = false;

            window.eventHubVue.$emit('CiliatusObjectUpdated', this);
        }
    }, {
        key: 'persist',
        value: function persist() {
            var that = this;
            $.ajax({
                url: that.url(),
                data: that.data,
                method: 'PUT',
                success: function success(data) {
                    console.log('OK');
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
            this.last_persist = Date.now();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            this.subscribed += 1;
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.subscribed -= 1;
        }
    }, {
        key: '__verifyId',
        value: function __verifyId() {
            if (this.data && this.data.id !== this.id) {
                console.log('----------------------------');
                console.log('CiliatusModel ' + this.type + ' mismatched ID');
                console.log(this.id + ' <> ' + this.data.id);
                console.log(this);
                return false;
            }

            return true;
        }
    }]);

    return CiliatusObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (CiliatusObject);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(151),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_add_weight-modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_add_weight-modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d97de654", Component.options)
  } else {
    hotAPI.reload("data-v-d97de654", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(144),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\inline-graph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] inline-graph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8768f226", Component.options)
  } else {
    hotAPI.reload("data-v-8768f226", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-peity v0.5.0
 * (c) 2016 Fangdun Cai <cfddream@gmail.com>
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VuePeity=e():t.VuePeity=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n,r;n=i(1);var s=i(6);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),s=n(r),a=["line","bar","pie","donut"];e.default={props:{type:{type:String,required:!0,validator:function(t){return a.indexOf(t)>-1}},data:{type:String,required:!0},options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.chart=new s.default(this.$el,this.type,this.data,this.options),this.chart.draw()},watch:{data:function(t){var e=this;this.$nextTick(function(){e.chart.raw=t,e.chart.draw()})}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:["#4D89F9"],height:16,min:0,padding:.1,width:32},draw:function(t){for(var e=this.values(),i=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),n=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),r=this.prepare(t.width,t.height),s=r.getBoundingClientRect(),a=s.width,o=s.height,h=i-n,u=t.padding,l=this.fill(),c=this.x=function(t){return t*a/e.length},f=this.y=function(t){return o-(h?(t-n)/h*o:1)},p=0;p<e.length;p++){var d,v=c(p+u),g=c(p+1-u)-v,m=e[p],y=f(m),w=y,x=y;h?m<0?w=f(Math.min(i,0)):x=f(Math.max(n,0)):d=1,d=x-w,0===d&&(d=1,i>0&&h&&w--),r.appendChild(this.svgElement("rect",{fill:l.call(this,m,p,e),x:v,y:w,width:g,height:d}))}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:"#c6d9fd",height:16,min:0,stroke:"#4d89f9",strokeWidth:1,width:32},draw:function(t){var e=this.values();1===e.length&&e.push(e[0]);for(var i=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),n=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),r=this.prepare(t.width,t.height),s=r.getBoundingClientRect(),a=t.strokeWidth,o=s.width,h=s.height-a,u=i-n,l=this.x=function(t){return t*(o/(e.length-1))},c=this.y=function(t){var e=h;return u&&(e-=(t-n)/u*h),e+a/2},f=c(Math.max(n,0)),p=[0,f],d=0;d<e.length;d++)p.push(l(d),c(e[d]));p.push(o,f),t.fill&&r.appendChild(this.svgElement("polygon",{fill:t.fill,points:p.join(" ")})),a&&r.appendChild(this.svgElement("polyline",{fill:"none",points:p.slice(2,p.length-2).join(" "),stroke:t.stroke,"stroke-width":a,"stroke-linecap":"square"}))}}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(2),a=i(3),o=i(5),h=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)i.setAttribute(n,e[n]);return i},u=function(){function t(e,i,r,s){n(this,t),this.$el=e,this.type=i,this.raw=r,this.options=Object.assign({},t.defaults[this.type],s)}return r(t,[{key:"svgElement",value:function(){return h.apply(void 0,arguments)}},{key:"prepare",value:function(t,e){return this.$svg||(this.$el.style.display="none",this.$svg=h("svg",{class:"peity"}),this.$el.parentNode.insertBefore(this.$svg,this.$el)),this.$svg.innerHTML="",this.$svg.setAttribute("width",t),this.$svg.setAttribute("height",e),this.$svg}},{key:"fill",value:function(){var t=this.options.fill;return"function"==typeof t?t:function(e,i){return t[i%t.length]}}},{key:"draw",value:function(){t.graphers[this.type].call(this,this.options)}},{key:"values",value:function(){return this.raw.split(this.options.delimiter).map(function(t){return parseFloat(t)})}}]),t}();u.defaults={},u.graphers={},u.register=function(t,e){u.defaults[t]=e.options,u.graphers[t]=e.draw},u.register("bar",s),u.register("donut",o),u.register("line",a),u.register("pie",o),t.exports=u},function(t,e){"use strict";t.exports={options:{fill:["#ff9900","#fff4dd","#ffc66e"],radius:8},draw:function(t){if(!t.delimiter){var e=this.raw.match(/[^0-9\.]/);t.delimiter=e?e[0]:","}var i=this.values().map(function(t){return t>0?t:0});if("/"===t.delimiter){var n=i[0],r=i[1];i=[n,Math.max(0,r-n)]}for(var s=0,a=i.length,o=0;s<a;s++)o+=i[s];o||(a=2,o=1,i=[0,1]);var h=2*t.radius,u=this.prepare(t.width||h,t.height||h),l=u.getBoundingClientRect(),c=l.width,f=l.height,p=c/2,d=f/2,v=Math.min(p,d),g=t.innerRadius;"donut"!==this.type||g||(g=.5*v);var m=Math.PI,y=this.fill(),w=this.scale=function(t,e){var i=t/o*m*2-m/2;return[e*Math.cos(i)+p,e*Math.sin(i)+d]},x=0;for(s=0;s<a;s++){var M,b=i[s],k=b/o;if(0!==k){if(1===k)if(g){var $=p-.01,j=d-v,E=d-g;M=this.svgElement("path",{d:["M",p,j,"A",v,v,0,1,1,$,j,"L",$,E,"A",g,g,0,1,0,p,E].join(" ")})}else M=this.svgElement("circle",{cx:p,cy:d,r:v});else{var A=x+b,C=["M"].concat(w(x,v),"A",v,v,0,k>.5?1:0,1,w(A,v),"L");g?C=C.concat(w(A,g),"A",g,g,0,k>.5?1:0,0,w(x,g)):C.push(p,d),x+=b,M=this.svgElement("path",{d:C.join(" ")})}M.setAttribute("fill",y.call(this,b,s,i)),u.appendChild(M)}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span")},staticRenderFns:[]}}])});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(70);
/**
 * Setup Vue
 */


global.Vue = __webpack_require__(155);

/**
 * Retrive env variables
 */
global.lang = $('body').data('lang');
global.apiUrl = $('body').data('base-url') + '/api/v1';

/**
 * Localization
 */

global.Vue.use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

var locales = __webpack_require__(64);
var locales_array = [];
Object.keys(locales).forEach(function (lang) {
    locales_array[lang] = locales[lang];
});

global.i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
    locale: global.lang,
    messages: locales_array
});

/**
 * Helper function to format time string
 */
var TimeStringFormatter = Object;
TimeStringFormatter.install = function (Vue, options) {
    global.Vue.prototype.$getMatchingTimeDiff = function (obj) {
        if (obj == null) {
            return { val: null, unit: 'no_data' };
        }
        if (obj.years > 1) {
            return { val: obj.years, unit: 'years_ago' };
        }
        if (obj.months > 1) {
            return { val: obj.months, unit: 'months_ago' };
        }
        if (obj.weeks > 1) {
            return { val: obj.weeks, unit: 'weeks_ago' };
        }
        if (obj.days > 1) {
            return { val: obj.days, unit: 'days_ago' };
        }
        if (obj.hours > 1) {
            return { val: obj.hours, unit: 'hours_ago' };
        }
        if (obj.minutes > 1) {
            return { val: obj.minutes, unit: 'minutes_ago' };
        }
        return { val: null, unit: 'just_now' };
    };
};

global.Vue.use(TimeStringFormatter);

/**
 * Require components
 */
__webpack_require__(63);
__webpack_require__(62);
__webpack_require__(6);

global.Vue.config.errorHandler = function (err, vm, info) {
    var handler = void 0,
        current = vm;
    if (vm.$options.errorHandler) {
        handler = vm.$options.errorHandler;
    } else {
        while (current.$parent) {
            current = current.$parent;
            if (handler = current.$options.errorHandler) break;
        }
    }
    if (handler) handler.call(current, err, vm, info);else {
        console.log(err);
        window.notification(global.ciliatusVue.$t('errors.frontend.generic'), 'red darken-1 text-white');
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            intention_ids: [],
            schedule_ids: [],
            trigger_ids: [],
            terrarium_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false
        }
    },

    computed: {
        sequences: function sequences() {
            var that = this;
            return this.$store.state.action_sequences.filter(function (s) {
                return that.ids.includes(s.id) && s.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        intentions: function intentions() {
            var that = this;
            return this.$store.state.action_sequence_intentions.filter(function (i) {
                return that.intention_ids.includes(i.id) && i.data !== null;
            });
        },
        schedules: function schedules() {
            var that = this;
            return this.$store.state.action_sequence_schedules.filter(function (s) {
                return that.schedule_ids.includes(s.id) && s.data !== null;
            });
        },
        triggers: function triggers() {
            var that = this;
            return this.$store.state.action_sequence_triggers.filter(function (t) {
                return that.trigger_ids.includes(t.id) && t.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terrarium_ids.includes(t.id) && t.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/action_sequences/?with[]=intentions&with[]=schedules&with[]=triggers&with[]=terrarium&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (s) {
                        return s.id;
                    });
                    that.terrarium_ids = data.data.map(function (s) {
                        return s.terrarium.id;
                    });
                    that.intention_ids = [].concat.apply([], data.data.map(function (s) {
                        return s.intentions.map(function (i) {
                            return i.id;
                        });
                    }));
                    that.schedule_ids = [].concat.apply([], data.data.map(function (s) {
                        return s.schedules.map(function (s) {
                            return s.id;
                        });
                    }));
                    that.trigger_ids = [].concat.apply([], data.data.map(function (s) {
                        return s.triggers.map(function (t) {
                            return t.id;
                        });
                    }));

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('action_sequences', that.ids, data.data);
                    that.$parent.ensureObjects('terraria', that.terrarium_ids, data.data.map(function (s) {
                        return s.terrarium;
                    }));
                    that.$parent.ensureObjects('action_sequence_intentions', that.intention_ids, [].concat.apply([], data.data.map(function (s) {
                        return s.intentions;
                    })));
                    that.$parent.ensureObjects('action_sequence_schedules', that.schedule_ids, [].concat.apply([], data.data.map(function (s) {
                        return s.schedules;
                    })));
                    that.$parent.ensureObjects('action_sequence_triggers', that.trigger_ids, [].concat.apply([], data.data.map(function (s) {
                        return s.triggers;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.sequences.forEach(function (s) {
                return s.unsubscribe();
            });
            this.intentions.forEach(function (i) {
                return i.unsubscribe();
            });
            this.schedules.forEach(function (s) {
                return s.unsubscribe();
            });
            this.triggers.forEach(function (t) {
                return t.unsubscribe();
            });
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            action_sequences: []
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        action_sequenceId: {
            type: String,
            default: '',
            required: false
        },
        terrariumId: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        }
    },

    methods: {
        update: function update(a) {
            var item = null;
            this.action_sequences.forEach(function (data, index) {
                if (data.id === a.action_sequence.id) {
                    item = index;
                }
            });
            if (item === null) {
                this.action_sequences.push(a.action_sequence);
            } else if (item !== null) {
                this.action_sequences.splice(item, 1, a.action_sequence);
            }
        },

        delete: function _delete(a) {
            var item = null;
            this.action_sequences.forEach(function (data, index) {
                if (data.id === a.action_sequences_id) {
                    item = index;
                }
            });

            if (item !== null) {
                this.action_sequences.splice(item, 1);
            }
        },

        load_data: function load_data() {
            window.eventHubVue.processStarted();
            var that = this;
            $.ajax({
                url: '/api/v1/action_sequences/' + that.action_sequenceId + '?with[]=schedules&with[]=triggers&' + 'with[]=intentions&with[]=terrarium&' + that.sourceFilter,
                method: 'GET',
                success: function success(data) {
                    if (that.action_sequenceId !== '') {
                        that.action_sequences = [data.data];
                    } else {
                        that.action_sequences = data.data;
                    }

                    window.eventHubVue.processEnded();
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                    window.eventHubVue.processEnded();
                }
            });
        }

    },

    created: function created() {
        var _this = this;

        window.echo.private('dashboard-updates').listen('ActionSequenceUpdated', function (e) {
            _this.update(e);
        }).listen('ActionSequenceDeleted', function (e) {
            _this.delete(e);
        });

        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 100);

        if (this.refreshTimeoutSeconds !== null) {
            setInterval(function () {
                that.load_data();
            }, this.refreshTimeoutSeconds * 1000);
        }
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    props: {
        animalId: {
            type: String,
            required: true
        },
        feedingTypes: {
            type: Array,
            required: true
        },
        containerId: {
            type: String,
            required: true
        }
    },

    methods: {
        submit: function submit(e) {
            window.submit_form(e);
        }
    },

    created: function created() {
        $('.modal').modal();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            format: 'yyyy-mm-dd'
        });
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    props: {
        animalId: {
            type: String,
            required: true
        },
        containerId: {
            type: String,
            required: true
        }
    },

    methods: {
        submit: function submit(e) {
            window.submit_form(e);
        }
    },

    created: function created() {
        $('.modal').modal();
        $('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15,
            format: 'yyyy-mm-dd'
        });
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            feeding_types: [],
            animals: [],
            schedules: []
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    methods: {
        get_animal_feeding_schedules_of_type: function get_animal_feeding_schedules_of_type(animal_id, type) {
            return this.schedules.filter(function (el) {
                return el.type == type && el.animal.id == animal_id;
            });
        },
        load_data: function load_data() {
            window.eventHubVue.processStarted();
            var that = this;

            /*
             * Load feeding types
             * then load animals
             * then load feeding schedules
             *
             * @TODO: First two should be parallel
             */

            /*
             * Load feeding types
             */
            $.ajax({
                url: '/api/v1/properties?filter[type]=AnimalFeedingType&all=true',
                method: 'GET',
                success: function success(data) {
                    that.feeding_types = data.data;

                    /*
                     * Load animals
                     */
                    $.ajax({
                        url: '/api/v1/animals?filter[death_date]=null&filter[!properties.type]=ModelNotActive&all=true',
                        method: 'GET',
                        success: function success(data) {
                            that.animals = data.data;

                            /*
                             * Load feeding schedules
                             */
                            $.ajax({
                                url: '/api/v1/animal_feeding_schedules?with[]=animal&all',
                                method: 'GET',
                                success: function success(data) {
                                    that.schedules = data.data;
                                    that.$nextTick(function () {
                                        $('.dropdown-button').dropdown();
                                    });
                                    window.eventHubVue.processEnded();
                                },
                                error: function error(_error) {
                                    console.log(JSON.stringify(_error));
                                    window.eventHubVue.processEnded();
                                }
                            });
                            window.eventHubVue.processEnded();

                            /*
                             * END Load feeding schedules
                             */
                        },
                        error: function error(_error2) {
                            console.log(JSON.stringify(_error2));
                            window.eventHubVue.processEnded();
                        }
                    });

                    window.eventHubVue.processEnded();

                    /*
                     * END Load animals
                     */
                },
                error: function error(_error3) {
                    console.log(JSON.stringify(_error3));
                    window.eventHubVue.processEnded();
                }
            });

            /*
             * END Load feeding types
             */
        }
    },

    created: function created() {

        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 100);

        if (this.refreshTimeoutSeconds !== null) {
            setInterval(function () {
                that.load_data();
            }, this.refreshTimeoutSeconds * 1000);
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        animalId: {
            type: String,
            required: true
        }
    },

    computed: {
        schedules: function schedules() {
            var that = this;
            return this.$store.state.animal_feeding_schedules.filter(function (s) {
                return that.ids.includes(s.id) && s.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/' + that.animalId + '/feeding_schedules?all=true',
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (v) {
                        return v.id;
                    });

                    that.$parent.ensureObjects('animal_feeding_schedules', that.ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            feeding_types: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        animalId: {
            type: String,
            required: true
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a
    },

    computed: {
        feedings: function feedings() {
            var that = this;
            return this.$store.state.animal_feedings.filter(function (a) {
                return that.ids.includes(a.id) && a.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        }
    },

    methods: {
        load_types: function load_types() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/feedings/types',
                method: 'GET',
                success: function success(data) {
                    that.feeding_types = data.data;
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/' + that.animalId + '/feedings?' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (a) {
                        return a.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('animal_feedings', that.ids, data.data);
                },
                error: function error(_error2) {
                    console.log(JSON.stringify(_error2));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.feedings.forEach(function (f) {
                return f.unsubscribe();
            });
        }
    },

    created: function created() {
        this.load_types();

        var that = this;
        setTimeout(function () {
            that.$refs.pagination.order.field = 'created_at';
            that.$refs.pagination.order.direction = 'desc';
            that.$refs.pagination.init();
        }, 100);
    }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            animals: [],
            schedules: []
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        sourceFilter: {
            type: String,
            default: 'filter[death_date]=null',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    methods: {
        get_animal_weighing_schedules: function get_animal_weighing_schedules(animal_id) {
            return this.schedules.filter(function (el) {
                return el.animal.id == animal_id;
            });
        },
        load_data: function load_data() {
            window.eventHubVue.processStarted();
            var that = this;

            /*
             * load animals
             * then load weighing schedules
             */
            $.ajax({
                url: '/api/v1/animals?filter[!properties.type]=ModelNotActive&all=true&' + that.sourceFilter,
                method: 'GET',
                success: function success(data) {
                    that.animals = data.data;

                    /*
                     * Load weighing schedules
                     */
                    $.ajax({
                        url: '/api/v1/animal_weighing_schedules?with[]=animal&all=true',
                        method: 'GET',
                        success: function success(data) {
                            that.schedules = data.data;
                            that.$nextTick(function () {
                                $('.dropdown-button').dropdown();
                            });
                            window.eventHubVue.processEnded();
                        },
                        error: function error(_error) {
                            console.log(JSON.stringify(_error));
                            window.eventHubVue.processEnded();
                        }
                    });
                    window.eventHubVue.processEnded();

                    /*
                     * END Load weighing schedules
                     */
                },
                error: function error(_error2) {
                    console.log(JSON.stringify(_error2));
                    window.eventHubVue.processEnded();
                }
            });

            window.eventHubVue.processEnded();

            /*
             * END Load animals
             */
        }
    },

    created: function created() {

        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 100);

        if (this.refreshTimeoutSeconds !== null) {
            setInterval(function () {
                that.load_data();
            }, this.refreshTimeoutSeconds * 1000);
        }
    }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        animalId: {
            type: String,
            required: true
        }
    },

    computed: {
        schedules: function schedules() {
            var that = this;
            return this.$store.state.animal_weighing_schedules.filter(function (s) {
                return that.ids.includes(s.id) && s.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/' + that.animalId + '/weighing_schedules?all=true',
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (v) {
                        return v.id;
                    });

                    that.$parent.ensureObjects('animal_weighing_schedules', that.ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            file_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        animalId: {
            type: String,
            required: true
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a
    },

    computed: {
        weighings: function weighings() {
            var that = this;
            return this.$store.state.animal_weighings.filter(function (a) {
                return that.ids.includes(a.id) && a.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/' + that.animalId + '/weighings?' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (a) {
                        return a.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('animal_weighings', that.ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.weighings.forEach(function (w) {
                return w.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.order.field = 'created_at';
            that.$refs.pagination.order.direction = 'desc';
            that.$refs.pagination.init();
        }, 100);
    }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animal_add_feeding_modal_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animal_add_feeding_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__animal_add_feeding_modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_add_weight_modal_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animal_add_weight_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__animal_add_weight_modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            terrarium_ids: [],
            initial: true,
            feeding_types: []
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        animalId: {
            type: String,
            default: null,
            required: false
        },
        subscribeAdd: {
            type: Boolean,
            default: true,
            required: false
        },
        subscribeDelete: {
            type: Boolean,
            default: true,
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        containerId: {
            type: String,
            default: 'animals-masonry-grid',
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        },

        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        showFilters: {
            type: Boolean,
            default: false,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue___default.a,
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default.a,
        'animal-add-feeding-modal': __WEBPACK_IMPORTED_MODULE_1__animal_add_feeding_modal_vue___default.a,
        'animal-add-weight-modal': __WEBPACK_IMPORTED_MODULE_2__animal_add_weight_modal_vue___default.a,
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_4__loading_card_widget___default.a
    },

    computed: {
        animals: function animals() {
            var that = this;
            return this.$store.state.animals.filter(function (a) {
                return that.ids.includes(a.id) && a.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terrarium_ids.includes(t.id);
            });
        }
    },

    watch: {
        'animals': function animals() {
            this.rerender();
        }
    },

    methods: {

        submit: function submit(e) {
            window.submit_form(e);
        },

        load_data: function load_data() {
            var that = this;
            if (this.animalId === null) {
                $.ajax({
                    url: '/api/v1/animals/?with[]=terrarium&pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                    method: 'GET',
                    success: function success(data) {
                        that.ids = data.data.map(function (a) {
                            return a.id;
                        });
                        that.$refs.pagination.meta = data.meta;
                        that.$parent.ensureObjects('animals', that.ids, data.data);
                        that.terrarium_ids = data.data.map(function (a) {
                            return a.terrarium_id;
                        });
                        that.$parent.ensureObjects('terraria', null, data.data.map(function (a) {
                            return a.terrarium;
                        }));
                        that.rerender();
                    },
                    error: function error(_error) {
                        console.log(JSON.stringify(_error));
                    }
                });
            } else {
                this.ids = [this.animalId];
                this.$parent.ensureObject('animals', this.animalId);
            }

            $.ajax({
                url: '/api/v1/animals/feedings/types',
                method: 'GET',
                success: function success(data) {
                    that.feeding_types = data.data;
                },
                error: function error(_error2) {
                    console.log(JSON.stringify(_error2));
                }
            });
        },

        rerender: function rerender() {
            this.$nextTick(function () {
                var grid = $('#' + this.containerId + '.masonry-grid');
                if (grid.length > 0) {
                    grid.masonry('reloadItems');
                    grid.masonry('layout');
                }
                $('.modal').modal();
                $('.tooltipped').tooltip({ delay: 50 });
                $('.datepicker').pickadate({
                    selectMonths: true,
                    selectYears: 15,
                    format: 'yyyy-mm-dd'
                });
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.animals.forEach(function (a) {
                return a.unsubscribe();
            });
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init();
        }, 100);
    }

});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: false,
            recording: false,
            recording_capability: true,
            result: null,
            recognition: null,
            transcript: ''
        };
    },


    props: {},

    methods: {
        submit_interceptor: function submit_interceptor(e) {
            if (!this.recording_capability) {
                window.notification(global.ciliatusVue.$t('errors.frontend.no_recording_capability'), 'red darken-1 text-white');
                return;
            }
            if (this.loading) {
                e.preventDefault();
                return;
            }

            this.loading = true;
            window.eventHubVue.processStarted();
        },

        parse_result: function parse_result(data) {
            if (data.source_id !== 'api-io-widget-form') {
                return;
            }

            this.result = data.data;
            this.loading = false;
            window.eventHubVue.processEnded();
            var result_text = '';

            if (this.result.data.api_result.result !== undefined) {
                result_text = this.result.data.api_result.result.fulfillment.speech;
            } else {
                result_text = this.result.data.api_result;
            }

            $('#api-io-widget-result-modal-content').html(result_text);
            $('#api-io-widget-result-modal').modal('open');
            var msg = new SpeechSynthesisUtterance(result_text);
            window.speechSynthesis.speak(msg);
            //$('#ask-me-something').val('');
        },

        record: function record() {
            if (!this.recording_capability) {
                window.notification(global.ciliatusVue.$t('errors.frontend.no_recording_capability'), 'red darken-1 text-white');
                return;
            }
            this.recording = !this.recording;
            if (this.recording) {
                this.recognition.start();
            } else {
                this.stop();
            }
        },
        stop_recording: function stop_recording() {
            this.recording = false;
            this.recognition.stop();
        }
    },

    created: function created() {
        var _this = this;

        this.recording_capability = true;

        if (!('webkitSpeechRecognition' in window)) {
            this.recording_capability = false;
        } else {
            window.eventHubVue.$on('FormSubmitReturnedSuccess', this.parse_result);
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = $('body').data('lang');

            this.recognition.onstart = function () {
                _this.recording = true;
                $('#ask-me-something-label').addClass('active');
            };

            this.recognition.onresult = function (e) {
                var transcript = '';

                for (var i = e.resultIndex; i < e.results.length; ++i) {
                    transcript += e.results[i][0].transcript;
                }

                _this.transcript = transcript.replace('/\S/', function (m) {
                    return m.toUpperCase();
                });
            };

            this.recognition.onerror = function () {
                _this.recording = false;
            };

            this.recognition.onend = function () {
                $('#api-io-widget-form').submit();
                _this.recording = false;
                _this.loading = true;
            };
        }

        this.$nextTick(function () {
            return $('#api-io-widget-result-modal').modal();
        });
    }

});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            file_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        belongsToType: {
            type: String,
            required: true
        },
        belongsToId: {
            type: String,
            required: true
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a
    },

    computed: {
        entries: function entries() {
            var that = this;
            return this.$store.state.biography_entries.filter(function (e) {
                return that.ids.includes(e.id) && e.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        files: function files() {
            var that = this;
            return this.$store.state.files.filter(function (f) {
                return that.file_ids.includes(f.id) && f.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/biography_entries/?with[]=files&' + 'filter[belongsTo_type]=' + that.belongsToType + '&' + 'filter[belongsTo_id]=' + that.belongsToId + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (c) {
                        return c.id;
                    });
                    that.file_ids = [].concat.apply([], data.data.map(function (f) {
                        return f.files.map(function (f) {
                            return f.id;
                        });
                    }));

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('biography_entries', that.ids, data.data);
                    that.$parent.ensureObjects('files', that.file_ids, [].concat.apply([], data.data.map(function (f) {
                        return f.files;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.entries.forEach(function (e) {
                return e.unsubscribe();
            });
            this.files.forEach(function (f) {
                return f.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.order.field = 'created_at';
            that.$refs.pagination.order.direction = 'desc';
            that.$refs.pagination.init();
        }, 100);
    }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            physical_sensor_id: '',
            bus_type: '',
            gpio_pin: '',
            gpio_default_high: false,
            i2c_address: '',
            i2c_multiplexer_address: '',
            i2c_multiplexer_port: ''
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        formUri: {
            type: String,
            default: null,
            required: false
        },
        physicalSensorId: {
            type: String,
            default: null,
            required: false
        },
        busType: {
            type: String,
            default: null,
            required: false
        },
        gpioPin: {
            type: String,
            default: null,
            required: false
        },
        gpioDefaultHigh: {
            type: Boolean,
            default: false,
            required: false
        },
        i2cAddress: {
            type: String,
            default: null,
            required: false
        },
        i2cMultiplexerAddress: {
            type: String,
            default: null,
            required: false
        },
        i2cMultiplexerPort: {
            type: String,
            default: null,
            required: false
        }
    },

    methods: {
        change_bus_type: function change_bus_type(e) {
            this.bus_type = e;
        }
    },

    created: function created() {
        var that = this;
        this.$nextTick(function () {
            that.physical_sensor_id = that.physicalSensorId;
            if (that.busType !== null) {
                that.bus_type = that.busType;
                that.gpio_pin = that.gpioPin;
                that.gpio_default_high = that.gpioDefaultHigh;
                that.i2c_address = that.i2cAddress;
                that.i2c_multiplexer_address = that.i2cMultiplexerAddress;
                that.i2c_multiplexer_port = that.i2cMultiplexerPort;
            }
            $('select').material_select();
            $('#bus_type').on('change', function () {
                that.change_bus_type($(this)[0].value);
            });
        });
    }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            caresheet_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        animalId: {
            type: String,
            required: true
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    computed: {
        caresheets: function caresheets() {
            var that = this;
            return this.$store.state.caresheets.filter(function (c) {
                return that.caresheet_ids.includes(c.id) && c.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/animals/' + that.animalId + '/caresheets/?' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.caresheet_ids = data.data.map(function (c) {
                        return c.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('caresheets', that.caresheet_ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.caresheets.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.order.field = 'created_at';
            that.$refs.pagination.order.direction = 'desc';
            that.$refs.pagination.init();
        }, 100);
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: {
            type: Number,
            required: false,
            default: Math.floor(Math.random() * 1000000)
        },
        source: {
            type: String,
            required: true
        },
        FilterColumn: {
            type: String,
            default: 'created_at',
            required: false
        },
        ShowFilterForm: {
            type: Boolean,
            default: false,
            required: false
        },
        FilterFromDate: {
            type: String,
            default: new Date(new Date().setDate(new Date().getDate() - 2)).toYmd(),
            required: false
        },
        FilterToDate: {
            type: String,
            default: new Date().toYmd(),
            required: false
        }
    },

    data: function data() {
        return {
            chart: null,
            options: {},
            data: null
        };
    },


    components: {
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default.a
    },

    methods: {
        get_filter_from_date: function get_filter_from_date() {
            if ($('#filter_from_' + this.id).val() == undefined) {
                return this.FilterFromDate;
            }

            return $('#filter_from_' + this.id).val();
        },
        get_filter_to_date: function get_filter_to_date() {
            if ($('#filter_to_' + this.id).val() == undefined) {
                return this.FilterToDate + " 23:59:59";
            }

            return $('#filter_to_' + this.id).val() + " 23:59:59";
        },

        init: function init() {
            this.build();
        },
        build: function build() {
            $('#chartjs_' + this.id + '_loading').show();
            var that = this;
            var url = this.source + '?filter[' + this.FilterColumn + ']=ge:' + this.get_filter_from_date() + ':and:le:' + this.get_filter_to_date() + '&filter[is_anomaly]=0';

            $.ajax({
                url: url,
                method: 'GET',
                success: function success(data) {
                    that.data = [];
                    $.each(data.data, function (srg) {
                        var group = data.data[srg];
                        var group_data = group.map(function (sr) {
                            return { y: sr.value, x: sr.created_at };
                        });
                        that.data.push({
                            label: group[0].logical_sensor_name,
                            data: group_data
                        });
                    });

                    that.draw();
                },
                error: function error(_error) {
                    $('#chartjs_' + that.id + '_loading').hide();
                    console.log(JSON.stringify(_error));
                }
            });
        },
        draw: function draw() {
            if (this.data === null) {
                return;
            }

            var that = this;
            var c = new Chart(document.getElementById('chartjs_' + this.id), {
                type: 'line',
                data: {
                    datasets: that.data
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time'
                        }]
                    }
                }
            });

            $('#chartjs_' + that.id + '_loading').hide();
        }
    },

    created: function created() {
        window.eventHubVue.processStarted();

        window.eventHubVue.$on('ForceRerender', this.draw);

        var that = this;
        this.$nextTick(function () {
            $('.datepicker').pickadate({
                format: 'yyyy-mm-dd'
            });

            that.build();
        });

        window.eventHubVue.processEnded();
    }
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            pump_ids: [],
            valve_ids: [],
            generic_component_ids: [],
            physical_sensor_ids: [],
            controlunit_ids: [],
            component_types: ['pumps', 'valves', 'generic_components', 'physical_sensors']
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceApiUrl: {
            type: String,
            required: true
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    computed: {
        pumps: function pumps() {
            var that = this;
            return this.$store.state.pumps.filter(function (p) {
                return that.pump_ids.includes(p.id) && p.data !== null;
            });
        },
        valves: function valves() {
            var that = this;
            return this.$store.state.valves.filter(function (v) {
                return that.valve_ids.includes(v.id) && v.data !== null;
            });
        },
        generic_components: function generic_components() {
            var that = this;
            return this.$store.state.generic_components.filter(function (g) {
                return that.generic_component_ids.includes(g.id) && g.data !== null;
            });
        },
        physical_sensors: function physical_sensors() {
            var that = this;
            return this.$store.state.physical_sensors.filter(function (p) {
                return that.physical_sensor_ids.includes(p.id) && p.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/' + that.sourceApiUrl + '?' + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.pump_ids = data.data.filter(function (c) {
                        return c.class === 'Pump';
                    }).map(function (c) {
                        return c.id;
                    });
                    that.valve_ids = data.data.filter(function (c) {
                        return c.class === 'Valve';
                    }).map(function (c) {
                        return c.id;
                    });
                    that.generic_component_ids = data.data.filter(function (c) {
                        return c.class === 'GenericComponent';
                    }).map(function (c) {
                        return c.id;
                    });
                    that.physical_sensor_ids = data.data.filter(function (c) {
                        return c.class === 'PhysicalSensor';
                    }).map(function (c) {
                        return c.id;
                    });
                    that.controlunit_ids = data.data.map(function (c) {
                        return c.controlunit_id;
                    });

                    that.$parent.ensureObjects('pumps', that.pump_ids, data.data.filter(function (c) {
                        return c.class === 'Pump';
                    }));
                    that.$parent.ensureObjects('valves', that.valve_ids, data.data.filter(function (c) {
                        return c.class === 'Valve';
                    }));
                    that.$parent.ensureObjects('generic_components', that.generic_component_ids, data.data.filter(function (c) {
                        return c.class === 'GenericComponent';
                    }));
                    that.$parent.ensureObjects('physical_sensors', that.physical_sensor_ids, data.data.filter(function (c) {
                        return c.class === 'PhysicalSensor';
                    }));
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.map(function (c) {
                        return c.controlunit;
                    }));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.pumps.forEach(function (p) {
                return p.unsubscribe();
            });
            this.valves.forEach(function (v) {
                return v.unsubscribe();
            });
            this.generic_components.forEach(function (g) {
                return g.unsubscribe();
            });
            this.physical_sensors.forEach(function (p) {
                return p.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        controlunitId: {
            type: String,
            default: '',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        controlunit: function controlunit() {
            var _this = this;

            return this.$store.state.controlunits.filter(function (v) {
                return v.id = _this.controlunitId;
            })[0];
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('controlunits', this.controlunitId);
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            pump_ids: [],
            valve_ids: [],
            generic_component_ids: [],
            physical_sensor_ids: [],
            component_types: ['pumps', 'valves', 'generic_components', 'physical_sensors']
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    computed: {
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.ids.includes(c.id) && c.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        pumps: function pumps() {
            var that = this;
            return this.$store.state.pumps.filter(function (p) {
                return that.pump_ids.includes(p.id) && p.data !== null;
            });
        },
        valves: function valves() {
            var that = this;
            return this.$store.state.valves.filter(function (v) {
                return that.valve_ids.includes(v.id) && v.data !== null;
            });
        },
        generic_components: function generic_components() {
            var that = this;
            return this.$store.state.generic_components.filter(function (g) {
                return that.generic_component_ids.includes(g.id) && g.data !== null;
            });
        },
        physical_sensors: function physical_sensors() {
            var that = this;
            return this.$store.state.physical_sensors.filter(function (p) {
                return that.physical_sensor_ids.includes(p.id) && p.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/controlunits/?' + 'with[]=physical_sensors&with[]=valves&with[]=pumps&with[]=generic_components&with[]=generic_components.type&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (c) {
                        return c.id;
                    });
                    that.pump_ids = [].concat.apply([], data.data.map(function (c) {
                        return c.pumps.map(function (p) {
                            return p.id;
                        });
                    }));
                    that.valve_ids = [].concat.apply([], data.data.map(function (c) {
                        return c.valves.map(function (v) {
                            return v.id;
                        });
                    }));
                    that.generic_component_ids = [].concat.apply([], data.data.map(function (c) {
                        return c.generic_components.map(function (g) {
                            return g.id;
                        });
                    }));
                    that.physical_sensors_ids = [].concat.apply([], data.data.map(function (c) {
                        return c.physical_sensors.map(function (p) {
                            return p.id;
                        });
                    }));

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('controlunits', that.ids, data.data, ['physical_sensors', 'valves', 'pumps', 'generic_components']);
                    that.$parent.ensureObjects('pumps', that.pump_ids, [].concat.apply([], data.data.map(function (c) {
                        return c.pumps;
                    })));
                    that.$parent.ensureObjects('valves', that.valve_ids, [].concat.apply([], data.data.map(function (c) {
                        return c.valves;
                    })));
                    that.$parent.ensureObjects('generic_components', that.generic_component_ids, [].concat.apply([], data.data.map(function (c) {
                        return c.generic_components;
                    })));
                    that.$parent.ensureObjects('physical_sensors', that.physical_sensors_ids, [].concat.apply([], data.data.map(function (c) {
                        return c.physical_sensors;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.pumps.forEach(function (p) {
                return p.unsubscribe();
            });
            this.valves.forEach(function (v) {
                return v.unsubscribe();
            });
            this.generic_components.forEach(function (g) {
                return g.unsubscribe();
            });
            this.physical_sensors.forEach(function (p) {
                return p.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_add_weight_modal_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animal_add_weight_modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__animal_add_weight_modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            action_sequence_intention_ids: [],
            action_sequence_schedule_ids: [],
            action_sequence_trigger_ids: [],
            animal_feeding_schedule_ids: [],
            animal_weighing_schedule_ids: [],
            suggestion_ids: [],
            terrarium_ids: [],
            controlunit_ids: [],
            physical_sensor_ids: [],
            terraria_ok_count: 0
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        containerId: {
            type: String,
            default: 'dashboard-masonry-grid',
            required: false
        }
    },

    components: {
        'animal-add-weight-modal': __WEBPACK_IMPORTED_MODULE_0__animal_add_weight_modal_vue___default.a
    },

    computed: {
        suggestions: function suggestions() {
            var that = this;
            return this.$store.state.suggestions.filter(function (s) {
                return that.suggestion_ids.includes(s.id) && s.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terrarium_ids.includes(t.id) && t.data !== null;
            });
        },
        physical_sensors: function physical_sensors() {
            var that = this;
            return this.$store.state.physical_sensors.filter(function (p) {
                return that.physical_sensor_ids.includes(p.id) && p.data !== null;
            });
        },
        animal_feeding_schedules: function animal_feeding_schedules() {
            var that = this;
            return this.$store.state.animal_feeding_schedules.filter(function (s) {
                return that.animal_feeding_schedule_ids.includes(s.id) && s.data !== null;
            });
        },
        animal_weighing_schedules: function animal_weighing_schedules() {
            var that = this;
            return this.$store.state.animal_weighing_schedules.filter(function (s) {
                return that.animal_weighing_schedule_ids.includes(s.id) && s.data !== null;
            });
        },
        action_sequence_schedules: function action_sequence_schedules() {
            var that = this;
            return this.$store.state.action_sequence_schedules.filter(function (s) {
                return that.action_sequence_schedule_ids.includes(s.id) && s.data !== null;
            });
        },
        action_sequence_intentions: function action_sequence_intentions() {
            var that = this;
            return this.$store.state.action_sequence_intentions.filter(function (i) {
                return that.action_sequence_intention_ids.includes(i.id) && i.data !== null;
            });
        },
        action_sequence_triggers: function action_sequence_triggers() {
            var that = this;
            return this.$store.state.action_sequence_triggers.filter(function (t) {
                return that.action_sequence_trigger_ids.includes(t.id) && t.data !== null;
            });
        }
    },

    methods: {
        evalDeleteSuggestion: function evalDeleteSuggestion(e) {
            var _this = this;

            this.suggestions.forEach(function (suggestion, index) {
                if (suggestion.id === e.target_id) {
                    _this.$parent.removeObject(suggestion);
                }
            });

            this.$nextTick(function () {
                this.refresh_grid();
            });
        },

        handleCiliatusObjectUpdated: function handleCiliatusObjectUpdated(object_information) {
            var _this2 = this;

            this.$nextTick(function () {
                return _this2.refresh_grid();
            });
        },

        handleCiliatusObjectDeleted: function handleCiliatusObjectDeleted(object_information) {
            var _this3 = this;

            this.$nextTick(function () {
                return _this3.refresh_grid();
            });
        },

        refresh_grid: function refresh_grid() {
            $('.dropdown-button').dropdown({
                constrain_width: false
            });
            $('.modal').modal();
            var grid = $('#' + this.containerId + '.masonry-grid');
            if (grid.length > 0) {
                grid.masonry('reloadItems');
                grid.masonry('layout');
            }
            $('.tooltipped').tooltip({ delay: 50 });
            $('.datepicker').pickadate({
                selectMonths: true,
                selectYears: 15,
                format: 'yyyy-mm-dd'
            });
        },

        submit: function submit(e) {
            window.submit_form(e);
        },

        link_post: function link_post(e) {
            e.preventDefault();

            var old = e;
            var parentElement = e.target.href ? e.target : e.target.parentElement;
            var oldContent = parentElement.innerHTML;
            $(parentElement).html('<div class="preloader-wrapper tiny active">' + '<div class="spinner-layer spinner-green-only">' + '<div class="circle-clipper left">' + '<div class="circle"></div>' + '</div><div class="gap-patch">' + '<div class="circle"></div>' + '</div><div class="circle-clipper right">' + '<div class="circle"></div>' + '</div>' + '</div>' + '</div>');

            $.post(parentElement.href, null, function (e) {
                $(parentElement).html(oldContent);
            });
        },

        load_data: function load_data(initial) {
            window.eventHubVue.processStarted();
            var that = this;
            $.ajax({
                url: '/api/v1/dashboard',
                method: 'GET',
                success: function success(data) {
                    that.suggestion_ids = data.data.suggestions.map(function (s) {
                        return s.id;
                    });
                    that.controlunit_ids = data.data.controlunits.map(function (c) {
                        return c.id;
                    });
                    that.terrarium_ids = data.data.terraria.map(function (t) {
                        return t.id;
                    });
                    that.physical_sensor_ids = data.data.physical_sensors.map(function (t) {
                        return t.id;
                    });
                    that.animal_feeding_schedule_ids = data.data.animal_feeding_schedules.map(function (s) {
                        return s.id;
                    });
                    that.animal_weighing_schedule_ids = data.data.animal_weighing_schedules.map(function (s) {
                        return s.id;
                    });
                    that.action_sequence_schedule_ids = data.data.action_sequence_schedules.map(function (s) {
                        return s.id;
                    });
                    that.action_sequence_trigger_ids = data.data.action_sequence_triggers.map(function (s) {
                        return s.id;
                    });
                    that.action_sequence_intention_ids = data.data.action_sequence_intentions.map(function (s) {
                        return s.id;
                    });
                    that.terraria_ok_count = data.data.terraria_ok_count;

                    that.$parent.ensureObjects('suggestions', that.suggestion_ids, data.data.suggestions);
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.controlunits);
                    that.$parent.ensureObjects('terraria', that.terrarium_ids, data.data.terraria);
                    that.$parent.ensureObjects('physical_sensors', that.physical_sensor_ids, data.data.physical_sensors);
                    that.$parent.ensureObjects('animal_feeding_schedules', that.animal_feeding_schedule_ids, data.data.animal_feeding_schedules);
                    that.$parent.ensureObjects('animal_weighing_schedules', that.animal_weighing_schedule_ids, data.data.animal_weighing_schedules);
                    that.$parent.ensureObjects('action_sequence_schedules', that.action_sequence_schedule_ids, data.data.action_sequence_schedules);
                    that.$parent.ensureObjects('action_sequence_triggers', that.action_sequence_trigger_ids, data.data.action_sequence_triggers);
                    that.$parent.ensureObjects('action_sequence_intentions', that.action_sequence_intention_ids, data.data.action_sequence_intentions);

                    that.$nextTick(function () {
                        if (initial) {
                            var container = $('#' + that.containerId);
                            container.masonry({
                                columnWidth: '.col',
                                itemSelector: '.col'
                            });
                        }

                        that.refresh_grid();
                    });

                    window.eventHubVue.processEnded();
                },
                error: function error(_error) {
                    window.notification('An error occured :(', 'red darken-1 text-white');
                    console.log(JSON.stringify(_error));
                    window.eventHubVue.processEnded();
                }
            });
        }
    },

    created: function created() {
        var _this4 = this;

        var that = this;
        setTimeout(function () {
            that.load_data(true);
        }, 100);

        if (this.refreshTimeoutSeconds !== null) {
            setInterval(function () {
                that.load_data();
            }, this.refreshTimeoutSeconds * 1000);
        }
        window.echo.private('dashboard-updates').listen('ReadFlagSet', function (e) {
            _this4.evalDeleteSuggestion(e);
        });

        window.eventHubVue.$on('CiliatusObjectUpdated', this.handleCiliatusObjectUpdated);
        window.eventHubVue.$on('CiliatusObjectDeleted', this.handleCiliatusObjectDeleted);
    }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: {
            type: Number,
            required: false,
            default: Math.floor(Math.random() * 1000000)
        },
        source: {
            type: String,
            required: true
        },
        FilterColumn: {
            type: String,
            default: 'created_at',
            required: false
        },
        ShowFilterForm: {
            type: Boolean,
            default: false,
            required: false
        },
        FilterFromDate: {
            type: String,
            default: new Date(new Date().setDate(new Date().getDate() - 2)).toYmd(),
            required: false
        },
        FilterToDate: {
            type: String,
            default: new Date().toYmd(),
            required: false
        },
        ColumnIdField: {
            type: String,
            required: true
        },
        ColumnNameField: {
            type: String,
            required: true
        },
        LabelsDivId: {
            type: String,
            default: null,
            required: false
        },
        TimeAxisLabel: {
            type: String,
            default: 'created_at',
            required: false
        }
    },

    data: function data() {
        return {
            chart: null,
            options: {},
            data: [],
            columns: [],
            colors: [],
            graph: null,
            debug: null
        };
    },


    components: {
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default.a
    },

    methods: {
        set_rollperiod: function set_rollperiod(e) {
            this.graph.adjustRoll(parseInt($('#dygraph_' + this.id + '_rollperiodselector').val()));
        },
        get_filter_from_date: function get_filter_from_date() {
            if ($('#filter_from_' + this.id).val() == undefined) {
                return this.FilterFromDate;
            }

            return "{{b64(" + $('#filter_from_' + this.id).val().base64encode() + ")}}";
        },
        get_filter_to_date: function get_filter_to_date() {
            if ($('#filter_to_' + this.id).val() == undefined) {
                return this.FilterToDate + " 23:59:59";
            }

            return "{{b64(" + ($('#filter_to_' + this.id).val() + " 23:59:59").base64encode() + ")}}";
        },

        init: function init() {
            this.build();
        },
        build: function build() {
            $('#dygraph_' + this.id + '_loading').show();
            var that = this;
            var url = this.source + '?filter[' + this.FilterColumn + ']=ge:' + this.get_filter_from_date() + ':and:le:' + this.get_filter_to_date() + '&filter[is_anomaly]=0&order[' + this.FilterColumn + ']=desc';

            $.ajax({
                url: url,
                method: 'GET',
                success: function success(data) {
                    var groupBy = function groupBy(xs, key) {
                        return xs.reduce(function (rv, x) {
                            (rv[x[key]] = rv[x[key]] || []).push(x);
                            return rv;
                        }, {});
                    };
                    var _columns = Object.values(groupBy(data.data, that.ColumnIdField));

                    var color_repo = {
                        'temperature_celsius': ['#f44336', '#c62828', '#b71c1c'],
                        'humidity_percent': ['#2196f3', '#1565c0', '#0d47a1'],
                        'default': ['#ff9800', '#009688', '#03a9f4', '#e91e63', '#9c27b0']
                    };
                    var color_repo_used = {
                        'temperature_celsius': 0,
                        'humidity_percent': 0,
                        'default': 0
                    };

                    that.columns = [that.FilterColumn];
                    that.colors = [];
                    _columns.forEach(function (c) {
                        var repo_name = '';
                        if (color_repo[c[0]['value_type']] !== undefined) {
                            repo_name = c[0]['value_type'];
                        } else {
                            repo_name = 'default';
                        }
                        var color = '';
                        var color_num = color_repo_used[repo_name];
                        if (color_repo[repo_name].length <= color_num) {
                            color_num = color_repo_used.default;
                            console.log('Out of colors for ' + repo_name);
                            repo_name = 'default';
                            if (color_repo.default.length <= color_repo_used.default) {
                                console.log('Default color is used up. Falling back to black');
                                color = '#000000';
                            } else {
                                color = color_repo.default[color_num];
                            }
                        } else {
                            color = color_repo[repo_name][color_num];
                        }
                        that.colors.push(color);
                        color_repo_used[repo_name] += 1;

                        that.columns.push(c[0][that.ColumnNameField]);
                    });

                    var rows = [];
                    var i = 0;
                    _columns.forEach(function (c) {
                        c.forEach(function (d) {
                            var series = [];
                            series.push(new Date(d[that.FilterColumn]));
                            for (var j = 0; j < _columns.length; j++) {
                                if (i === j) {
                                    series.push(d.value);
                                } else {
                                    series.push(null);
                                }
                            }
                            rows.push(series);
                        });

                        i += 1;
                    });

                    rows.sort(function (a, b) {
                        if (a[0] > b[0]) {
                            return 1;
                        }

                        if (a[0] < b[0]) {
                            return -1;
                        }

                        return 0;
                    });

                    rows.map(function (r, i) {
                        r.map(function (c, j) {
                            if (c === null) {
                                if (i > 0) {
                                    return rows[i - 1][j];
                                }
                            }
                            return c;
                        });
                    });

                    that.data = rows;

                    that.draw();
                },
                error: function error(_error) {
                    $('#dygraph_' + that.id + '_loading').hide();
                    console.log(JSON.stringify(_error));
                }
            });
        },
        draw: function draw() {
            if (this.data === null || this.data.length < 1) {
                $('#dygraph_' + this.id + '_loading').hide();
                return;
            }

            this.options = {
                connectSeparatedPoints: true,
                strokeWidth: 1.5,
                rollPeriod: 4,
                showRoller: false,
                showRangeSelector: true,
                rangeSelectorPlotFillGradientColor: '#ffcc80',
                rangeSelectorPlotFillColor: '#ffcc80',
                rangeSelectorPlotLineWidth: 1,
                rangeSelectorPlotStrokeColor: '#ff6d00',
                rangeSelectorBackgroundStrokeColor: '#757575',
                rangeSelectorBackgroundStrokeWidth: 1,
                legend: 'always',
                colors: this.colors,
                axisLineColor: '#D4D4D4',
                labels: this.columns,
                legendFormatter: function legendFormatter(data) {
                    if (data.x == null) {
                        // This happens when there's no selection and {legend: 'always'} is set.
                        return '<br>' + data.series.map(function (series) {
                            return series.dashHTML + ' ' + series.labelHTML;
                        }).join('<br>');
                    }

                    //var html = this.getLabels()[0] + ': ' + data.xHTML;
                    var html = that.TimeAxisLabel + ': ' + data.xHTML;
                    data.series.forEach(function (series) {
                        if (!series.isVisible) {
                            return;
                        }
                        var yData = series.yHTML === undefined ? '' : series.yHTML;
                        var labeledData = series.labelHTML + ': ' + yData;
                        if (series.isHighlighted) {
                            labeledData = '<b>' + labeledData + '</b>';
                        }
                        html += '<br>' + series.dashHTML + ' ' + labeledData;
                    });
                    return html;
                },
                axes: {
                    x: {
                        axisLabelFormatter: function axisLabelFormatter(d) {
                            return d.toLocaleDateString();
                        },
                        valueFormatter: function valueFormatter(ms) {
                            return new Date(ms).toLocaleString();
                        }
                    }
                }
            };

            if (this.LabelsDivId !== null) {
                this.options.labelsDiv = this.LabelsDivId;
                this.options.labelsSeparateLines = true;
            }

            var that = this;

            try {
                this.graph = new Dygraph(document.getElementById('dygraph_' + this.id), this.data, this.options);

                this.graph.ready(function () {
                    $('#dygraph_' + that.id + '_loading').hide();
                });
            } catch (ex) {
                $('#dygraph_' + that.id + '_loading').hide();
                console.log(ex);
            }
        }
    },

    created: function created() {
        window.eventHubVue.processStarted();

        window.eventHubVue.$on('ForceRerender', this.draw);

        var that = this;
        this.$nextTick(function () {
            $('.datepicker').pickadate({
                format: 'yyyy-mm-dd'
            });

            that.build();
        });

        window.eventHubVue.processEnded();
    }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        },
        showOptionSelect: {
            type: Boolean,
            default: false,
            required: false
        },
        backgroundSelectorClassName: {
            type: String,
            default: null,
            required: false
        },
        backgroundSelectorId: {
            type: String,
            default: null,
            required: false
        }
    },

    computed: {
        files: function files() {
            var that = this;
            return this.$store.state.files.filter(function (f) {
                return that.ids.includes(f.id) && f.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/files?' + that.sourceFilter + '&' + 'filter[usage]=ne:thumb:or:null&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (g) {
                        return g.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('files', that.ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.files.forEach(function (f) {
                return f.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init();
        }, 100);
    }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        fileId: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        file: function file() {
            var _this = this;

            return this.$store.state.files.filter(function (f) {
                return f.id = _this.fileId;
            })[0];
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('files', this.fileId, null, ['properties']);
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            component_properties: [],
            component_states: [],
            component_intentions: [],
            generic_component_type: {
                name_singular: '',
                name_plural: '',
                icon: '3d_rotation'
            }
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        genericComponentType: {
            type: Object,
            default: null,
            required: false
        },
        properties: {
            type: Array,
            default: null,
            required: false
        },
        states: {
            type: Array,
            default: null,
            required: false
        },
        intentions: {
            type: Array,
            default: null,
            required: false
        },
        defaultRunningState: {
            type: String,
            default: null,
            required: false
        },
        sensorreadingTypes: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        }
    },

    methods: {

        add_property: function add_property() {
            this.component_properties.push({ name: '' });
        },

        add_state: function add_state() {
            this.component_states.push({ name: '' });
        },

        add_intention: function add_intention() {
            this.component_intentions.push({ default_intention_intention: '', default_intention_type: '' });
            this.$nextTick(function () {
                $('select').material_select();
            });
        }

    },

    created: function created() {
        var that = this;
        this.$nextTick(function () {
            if (that.genericComponentType !== null) {
                that.generic_component_type = that.genericComponentType;
                $('#' + that.generic_component_type.id).attr('data-method', 'PUT');

                that.default_running_state = that.defaultRunningState;

                if (that.properties !== null) {
                    that.properties.forEach(function (el) {
                        that.component_properties.push({ name: el });
                    });
                }
                if (that.states !== null) {
                    that.states.forEach(function (el) {
                        that.component_states.push({ name: el });
                    });
                }
                if (that.intentions !== null) {
                    that.intentions.forEach(function (el) {
                        that.component_intentions.push({ intention: el.value, type: el.name });
                    });
                }
            }
        });
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            controlunit_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        generic_components: function generic_components() {
            var that = this;
            return this.$store.state.generic_components.filter(function (g) {
                return that.ids.includes(g.id) && g.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/generic_components/?with[]=component_properties&with[]=states&with[]=type&with[]=controlunit&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (g) {
                        return g.id;
                    });
                    that.controlunit_ids = data.data.map(function (g) {
                        return g.controlunit_id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('generic_components', that.ids, data.data, ['component_properties', 'states', 'type']);
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.map(function (g) {
                        return g.controlunit;
                    }));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.generic_components.forEach(function (g) {
                return g.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    props: {
        genericComponentId: {
            type: String,
            default: '',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        generic_component: function generic_component() {
            var _this = this;

            var component = this.$store.state.generic_components.filter(function (p) {
                return p.id = _this.genericComponentId;
            });
            return component.length > 0 ? component[0] : {};
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('generic_components', this.genericComponentId, null, ['properties', 'states', 'type']);
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 2000);
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {
        id: {
            type: String,
            required: false,
            default: Math.floor(Math.random() * 1000000)
        },
        type: {
            type: String,
            default: 'line',
            required: false
        },
        eventType: {
            type: String,
            default: null,
            required: false
        },
        source: {
            type: String,
            required: true
        },
        HorizontalAxisTitle: {
            type: String,
            default: '',
            required: false
        },
        VerticalAxisTitle: {
            type: String,
            default: '',
            required: false
        },
        VerticalAxisGridlinesCount: {
            type: Number,
            default: 5,
            required: false
        },
        Height: {
            type: Number,
            default: 300,
            required: false
        },
        BackgroundColor: {
            type: String,
            default: '',
            required: false
        },
        FilterColumn: {
            type: String,
            default: null,
            required: true
        },
        ShowFilterForm: {
            type: Boolean,
            default: false,
            required: false
        },
        FilterFromDate: {
            type: String,
            default: new Date(new Date().setMonth(new Date().getMonth() - 3)).toYmd(),
            required: false
        },
        FilterToDate: {
            type: String,
            default: new Date().toYmd(),
            required: false
        }
    },
    data: function data() {
        return {
            chart: null,
            options: {},
            data: []
        };
    },


    methods: {
        get_filter_from_date: function get_filter_from_date() {
            if ($('#filter_from_' + this.id).val() == undefined) {
                return this.FilterFromDate;
            }

            return $('#filter_from_' + this.id).val();
        },
        get_filter_to_date: function get_filter_to_date() {
            if ($('#filter_to_' + this.id).val() == undefined) {
                return this.FilterToDate + " 23:59:59";
            }

            return $('#filter_to_' + this.id).val() + " 23:59:59";
        },
        init: function init() {
            this.data = new google.visualization.DataTable();
            this.build();
        },
        build: function build() {
            $('#dygraph_' + this.id + '_loading').show();
            var that = this;
            var url = this.source + '&filter[' + this.FilterColumn + ']=ge:' + this.get_filter_from_date() + ':and:le:' + this.get_filter_to_date();

            $.ajax({
                url: url,
                method: 'GET',
                success: function success(data) {

                    that.data.removeRows(0, that.data.getNumberOfRows());
                    that.data.removeColumns(0, that.data.getNumberOfColumns());

                    $.each(data.data.columns, function (item, col) {
                        that.data.addColumn(col.type, col.name);
                        if (col.type == 'date') {
                            //parse dates
                            $.each(data.data.rows, function (ritem, r) {
                                data.data.rows[ritem][item] = new Date(r[item]);
                            });
                        }
                    });

                    that.data.addRows(data.data.rows);

                    that.chart = new google.visualization.LineChart(document.getElementById('google_chart_' + that.id));
                    that.draw();
                },
                error: function error(_error) {
                    $('#dygraph_' + this.id + '_loading').hide();
                    console.log(JSON.stringify(_error));
                }
            });
        },
        draw: function draw() {
            this.options = {
                hAxis: {
                    title: this.HorizontalAxisTitle,
                    titleTextStyle: 'chartTextColor',
                    gridlines: {
                        count: this.VerticalAxisGridlinesCount,
                        color: '#666'
                    }
                },
                vAxis: {
                    title: this.VerticalAxisTitle,
                    titleTextStyle: 'chartTextColor',
                    gridlines: {
                        color: '#666'
                    }
                },
                annotations: {
                    textStyle: 'chartTextColor'
                },
                height: this.Height,
                width: '100%',
                backgroundColor: 'transparent',
                curveType: 'function',
                pointSize: 4,
                tooltip: {
                    isHtml: true
                }
            };

            if (this.chart) {
                this.chart.draw(this.data, this.options);
            }

            $('#dygraph_' + this.id + '_loading').hide();
        }
    },

    created: function created() {
        var _this = this;

        window.eventHubVue.processStarted();

        google.charts.load('current', { packages: ['corechart', this.type] });
        google.charts.setOnLoadCallback(this.init);

        window.eventHubVue.$on('ForceRerender', this.draw);
        if (this.eventType !== null) {
            window.echo.private('dashboard-updates').listen(this.eventType, function (e) {
                _this.build();
            });
        }

        this.$nextTick(function () {
            $('.datepicker').pickadate({
                format: 'yyyy-mm-dd'
            });
        });

        window.eventHubVue.processEnded();
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_peity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_peity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_peity__);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            points_array: []
        };
    },


    props: ['points', 'type', 'options', 'sourceField', 'sourceType', 'sourceId'],

    components: {
        Peity: __WEBPACK_IMPORTED_MODULE_0_vue_peity___default.a
    },

    computed: {
        points_string: function points_string() {
            return this.points_array.map(function (p) {
                return Math.round(p * 10) / 10;
            }).toString();
        }
    },

    methods: {
        rerender: function rerender() {
            var tmp = this.points_array;
            this.points_array = [0];

            this.$nextTick(function () {
                this.points_array = tmp;
            });
        }
    },

    created: function created() {
        var _this = this;

        this.points_array = this.points;

        window.eventHubVue.$on('CiliatusObjectUpdated', function (obj) {
            if (obj.id === _this.sourceId && obj.type === _this.sourceType) {
                _this.points_array = obj.data[_this.sourceField];
                _this.rerender();
            }
        });
    }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_0__loading_indicator_vue___default.a
    }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    props: {
        size: {
            type: Number,
            default: 100,
            required: false
        }
    },

    methods: {},

    created: function created() {}
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            physical_sensor_id: [],
            logical_sensor_threshold_ids: []
        };
    },


    props: {
        logicalSensorId: {
            type: String,
            required: true
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        logical_sensor: function logical_sensor() {
            var _this = this;

            var sensor = this.$store.state.logical_sensors.filter(function (l) {
                return l.id === _this.logicalSensorId;
            });
            return sensor.length > 0 ? sensor[0] : {};
        },
        physical_sensor: function physical_sensor() {
            var _this2 = this;

            var sensor = this.$store.state.physical_sensors.filter(function (p) {
                return p.id === _this2.physical_sensor_id;
            });
            return sensor.length > 0 ? sensor[0] : {};
        },
        logical_sensor_thresholds: function logical_sensor_thresholds() {
            var _this3 = this;

            return this.$store.state.logical_sensor_thresholds.filter(function (l) {
                return _this3.logical_sensor_threshold_ids.includes(l.id);
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/logical_sensors/' + that.logicalSensorId + '?with[]=physical_sensor&with[]=thresholds',
                method: 'GET',
                success: function success(data) {
                    that.physical_sensor_id = data.data.physical_sensor_id;
                    that.logical_sensor_threshold_ids = data.data.thresholds.map(function (t) {
                        return t.id;
                    });

                    that.$parent.ensureObject('logical_sensors', that.logicalSensorId, data.data);
                    that.$parent.ensureObject('physical_sensors', that.physical_sensor_id, data.data.physical_sensor);
                    that.$parent.ensureObjects('logical_sensor_thresholds', that.logical_sensor_threshold_ids, data.data.thresholds);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            threshold_ids: [],
            meta: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        logical_sensors: function logical_sensors() {
            var that = this;
            return this.$store.state.logical_sensors.filter(function (l) {
                return that.ids.includes(l.id) && l.data !== null;
            });
        },
        thresholds: function thresholds() {
            var that = this;
            return this.$store.state.logical_sensor_thresholds.filter(function (l) {
                return that.threshold_ids.includes(l.id) && l.data !== null;
            });
        }
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/logical_sensors/?with[]=thresholds&all=true&' + that.sourceFilter,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (l) {
                        return l.id;
                    });
                    that.threshold_ids = [].concat.apply([], data.data.map(function (l) {
                        return l.thresholds.map(function (t) {
                            return t.id;
                        });
                    }));

                    that.meta = data.meta;

                    that.$parent.ensureObjects('logical_sensors', that.ids);
                    that.$parent.ensureObjects('logical_sensor_thresholds', that.threshold_ids, [].concat.apply([], data.data.map(function (l) {
                        return l.thresholds;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 100);
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            physical_sensor_ids: [],
            controlunit_ids: [],
            terraria_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        logical_sensors: function logical_sensors() {
            var that = this;
            return this.$store.state.logical_sensors.filter(function (l) {
                return that.ids.includes(l.id) && l.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        physical_sensors: function physical_sensors() {
            var that = this;
            return this.$store.state.physical_sensors.filter(function (p) {
                return that.physical_sensor_ids.includes(p.id) && p.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terraria_ids.includes(t.id) && t.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        terrarium: function terrarium(logical_sensor) {
            var _this = this;

            var terrarium = this.terraria.filter(function (l) {
                return l.data.id === _this.physical_sensors.filter(function (p) {
                    return p.data.id === logical_sensor.data.physical_sensor.id;
                })[0].data.terrarium.id;
            });

            if (terrarium.length > 0) {
                return terrarium[0];
            }

            return null;
        },
        controlunit: function controlunit(logical_sensor) {
            var _this2 = this;

            var controlunit = this.controlunits.filter(function (l) {
                return l.data.id === _this2.physical_sensors.filter(function (p) {
                    return p.data.id === logical_sensor.data.physical_sensor.id;
                })[0].data.controlunit.id;
            });

            if (controlunit.length > 0) {
                return controlunit[0];
            }

            return null;
        },
        physical_sensor: function physical_sensor(logical_sensor) {
            var physical_sensor = this.physical_sensors.filter(function (p) {
                return p.data.id === logical_sensor.data.physical_sensor.id;
            });
            if (physical_sensor.length > 0) {
                return physical_sensor[0];
            }

            return null;
        },


        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/logical_sensors/?with[]=physical_sensor&with[]=physical_sensor.terrarium&with[]=physical_sensor.controlunit&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (l) {
                        return l.id;
                    });
                    that.physical_sensor_ids = data.data.map(function (l) {
                        return l.physical_sensor.id;
                    });
                    that.controlunit_ids = data.data.filter(function (l) {
                        return l.physical_sensor.controlunit;
                    }).map(function (l) {
                        return l.physical_sensor;
                    }).map(function (p) {
                        return p.controlunit.id;
                    });
                    that.terraria_ids = data.data.filter(function (l) {
                        return l.physical_sensor.terrarium;
                    }).map(function (l) {
                        return l.physical_sensor;
                    }).map(function (p) {
                        return p.terrarium.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('logical_sensors', that.ids, data.data);
                    that.$parent.ensureObjects('physical_sensors', that.physical_sensor_ids, [].concat.apply([], data.data.map(function (p) {
                        return p.physical_sensor;
                    })));
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, [].concat.apply([], that.physical_sensors.map(function (p) {
                        return p.data.controlunit;
                    })));
                    that.$parent.ensureObjects('terraria', that.terraria_ids, [].concat.apply([], that.physical_sensors.map(function (p) {
                        return p.data.terrarium;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
            this.logical_sensors.forEach(function (l) {
                return l.unsubscribe();
            });
            this.physical_sensors.forEach(function (p) {
                return p.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            logs: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            window.eventHubVue.processStarted();
            var that = this;
            $.ajax({
                url: '/api/v1/logs/?' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.logs = data.data;
                    that.$refs.pagination.meta = data.meta;
                    window.eventHubVue.processEnded();
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                    window.eventHubVue.processEnded();
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {}
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('created_at', 'desc');
        }, 100);
    }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            meta: [],
            filter: {},
            filter_string: '',
            order: {
                field: 'display_name',
                direction: 'asc'
            },
            order_string: '',
            page: 1
        };
    },


    props: {
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        enableFilters: {
            type: Boolean,
            default: false,
            required: false
        },
        showFilters: {
            type: Boolean,
            default: false,
            required: false
        },
        filterFields: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        mini: {
            type: Boolean,
            default: false
        }
    },

    methods: {

        toggle_filters: function toggle_filters() {
            this.showFilters = !this.showFilters;
        },

        set_order: function set_order(field) {
            if (this.order.field === field || field === null) {
                if (this.order.direction === 'asc') {
                    this.order.direction = 'desc';
                } else {
                    this.order.direction = 'asc';
                }
            } else {
                this.order.field = field;
            }

            this.render_order_string();
            this.$parent.load_data();
        },

        render_order_string: function render_order_string() {
            if (!this.order.string || !this.order.direction) {
                this.order_string = '';
            }
            this.order_string = 'order[' + this.order.field + ']=' + this.order.direction;
        },

        set_filter: function set_filter() {
            this.render_filter_string();
            this.$parent.load_data();
        },

        render_filter_string: function render_filter_string() {
            this.filter_string = '&';
            if (this.sourceFilter !== '') {
                this.filter_string += this.sourceFilter + '&';
            }
            for (var prop in this.filter) {
                if (this.filter.hasOwnProperty(prop)) {
                    if (this.filter[prop] !== null && this.filter[prop] !== '') {

                        this.filter_string += 'filter[' + prop + ']=like:*' + this.filter[prop] + '*&';
                    }
                }
            }
        },

        set_page: function set_page(page) {
            this.page = page ? page : 1;
            this.$parent.unsubscribe_all();
            this.$parent.load_data();
        },

        init: function init(order_field, order_direction) {
            if (order_field) {
                this.order.field = order_field;
            }

            if (order_direction) {
                this.order.direction = order_direction;
            }

            this.render_filter_string();
            this.render_order_string();
            this.set_page();
        }

    }

});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            meta: [],
            applied_filter: {},
            filter_string: ''
        };
    },


    props: {
        filterFields: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        cols: {
            type: Number,
            required: true
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        }
    },

    computed: {
        filters: function filters() {
            var _this = this;

            var filters = [];

            var _loop = function _loop(i) {
                var filter = _this.filterFields.filter(function (f) {
                    return f.col === i;
                });
                filters.push(filter.length > 0 ? filter[0] : { name: '', class: '', noFilter: true, col: i });
            };

            for (var i = 0; i < this.cols; i++) {
                _loop(i);
            }

            return filters;
        }
    },

    methods: {

        toggle_filters: function toggle_filters() {
            this.showFilters = !this.showFilters;
        },

        set_order: function set_order(field) {
            this.$parent.$refs.pagination.set_order(field);
        },

        set_filter: function set_filter() {
            this.$parent.$refs.pagination.set_filter();
        }

    }

});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            logical_sensor_ids: []
        };
    },


    props: {
        physicalSensorId: {
            type: String,
            default: '',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        physical_sensor: function physical_sensor() {
            var _this = this;

            var sensor = this.$store.state.physical_sensors.filter(function (p) {
                return p.id = _this.physicalSensorId;
            });
            return sensor.length > 0 ? sensor[0] : {};
        },
        logical_sensors: function logical_sensors() {
            var _this2 = this;

            return this.$store.state.logical_sensors.filter(function (l) {
                return _this2.logical_sensor_ids.includes(l.id);
            });
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('physical_sensors', this.physicalSensorId);

            var that = this;

            $.ajax({
                url: '/api/v1/logical_sensors/?all=true&filter[physical_sensor_id]=' + that.physicalSensorId,
                method: 'GET',
                success: function success(data) {
                    that.logical_sensor_ids = data.data.map(function (l) {
                        return l.id;
                    });

                    that.$parent.ensureObjects('logical_sensors', that.logical_sensor_ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.load_data();
        }, 2000);
    }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            controlunit_ids: [],
            terraria_ids: [],
            logical_sensor_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        physical_sensors: function physical_sensors() {
            var that = this;
            return this.$store.state.physical_sensors.filter(function (p) {
                return that.ids.includes(p.id) && p.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        logical_sensors: function logical_sensors() {
            var that = this;
            return this.$store.state.logical_sensors.filter(function (l) {
                return that.logical_sensor_ids.includes(l.id) && l.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terraria_ids.includes(t.id) && t.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/physical_sensors/?with[]=terrarium&with[]=controlunit&with[]=logical_sensors&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (p) {
                        return p.id;
                    });
                    that.controlunit_ids = data.data.map(function (p) {
                        return p.controlunit_id;
                    });
                    that.terraria_ids = data.data.map(function (p) {
                        return p.terrarium ? p.terrarium.id : null;
                    });
                    that.logical_sensor_ids = [].concat.apply([], data.data.map(function (p) {
                        return p.logical_sensors.map(function (l) {
                            return l.id;
                        });
                    }));

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('physical_sensors', that.ids, data.data);
                    that.$parent.ensureObjects('logical_sensors', that.logical_sensor_ids, [].concat.apply([], data.data.map(function (p) {
                        return p.logical_sensors;
                    })));
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.map(function (p) {
                        return p.controlunit;
                    }));
                    that.$parent.ensureObjects('terraria', that.terraria_ids, data.data.map(function (p) {
                        return p.terrarium;
                    }));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
            this.logical_sensors.forEach(function (l) {
                return l.unsubscribe();
            });
            this.physical_sensors.forEach(function (p) {
                return p.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        pumpId: {
            type: String,
            default: '',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        pump: function pump() {
            var _this = this;

            return this.$store.state.pumps.filter(function (v) {
                return v.id = _this.pumpId;
            })[0];
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('pumps', this.pumpId);
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            valve_ids: [],
            controlunit_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        pumps: function pumps() {
            var that = this;
            return this.$store.state.pumps.filter(function (p) {
                return that.ids.includes(p.id) && p.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });;
        },
        valves: function valves() {
            var that = this;
            return this.$store.state.valves.filter(function (v) {
                return that.valve_ids.includes(v.id) && v.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/pumps/?with[]=valves&with[]=controlunit&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (p) {
                        return p.id;
                    });
                    that.controlunit_ids = data.data.map(function (p) {
                        return p.controlunit_id;
                    });
                    that.valve_ids = [].concat.apply([], data.data.map(function (p) {
                        return p.valves.map(function (v) {
                            return v.id;
                        });
                    }));

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('pumps', that.ids, data.data);
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.map(function (p) {
                        return p.controlunit;
                    }));
                    that.$parent.ensureObjects('valves', that.valve_ids, [].concat.apply([], data.data.map(function (p) {
                        return p.valves;
                    })));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.pumps.forEach(function (p) {
                return p.unsubscribe();
            });
            this.valves.forEach(function (v) {
                return v.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            echo: window.echo,
            ready: false,
            system: {
                emergency_stop: false
            }
        };
    },
    created: function created() {
        var _this = this;

        var that = this;

        $.ajax({
            url: '/api/v1/dashboard/system_status?all=true',
            method: 'GET',
            success: function success(data) {
                that.system = data.data;
            },
            error: function error(_error) {
                console.log(JSON.stringify(_error));
            }
        });

        window.echo.private('dashboard-updates').listen('SystemStatusUpdated', function (e) {
            _this.system = e.system_status;
        });

        setTimeout(function () {
            that.ready = true;
        }, 2000);
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loading_indicator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inline_graph_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inline_graph_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__inline_graph_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            animal_ids: [],
            initial: true
        };
    },


    props: {
        refreshTimeoutSeconds: {
            type: Number,
            default: null,
            required: false
        },
        terrariumId: {
            type: String,
            default: null,
            required: false
        },
        subscribeAdd: {
            type: Boolean,
            default: true,
            required: false
        },
        subscribeDelete: {
            type: Boolean,
            default: true,
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        containerClasses: {
            type: String,
            default: '',
            required: false
        },
        containerId: {
            type: String,
            default: 'terraria-masonry-grid',
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        },

        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        showFilters: {
            type: Boolean,
            default: false,
            required: false
        },
        temperatureGraphMin: {
            type: Number,
            default: 10,
            required: false
        },
        temperatureGraphMax: {
            type: Number,
            default: 40,
            required: false
        },
        humidityGraphMin: {
            type: Number,
            default: 1,
            required: false
        },
        humidityGraphMax: {
            type: Number,
            default: 99,
            required: false
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_3__mixins_pagination_vue___default.a,
        'inline-graph': __WEBPACK_IMPORTED_MODULE_2__inline_graph_vue___default.a,
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_1__loading_indicator_vue___default.a,
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.ids.includes(t.id) && t.data !== null;
            });
        },
        animals: function animals() {
            var that = this;
            return this.$store.state.animals.filter(function (a) {
                return that.animal_ids.includes(a.id) && a.data !== null;
            });
        },
        pagination: function pagination() {
            return this.$refs.pagination;
        }
    },

    watch: {
        'terraria': function terraria() {
            this.rerender();
        }
    },

    methods: {
        action_sequence_modal: function action_sequence_modal(terrarium_id, action) {
            $('#' + terrarium_id + '_' + action).modal('open');
        },

        submit: function submit(e) {
            window.submit_form(e);
        },

        load_data: function load_data() {
            if (this.terrariumId === null) {
                var that = this;

                $.ajax({
                    url: '/api/v1/terraria/?with[]=animals&pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                    method: 'GET',
                    success: function success(data) {
                        that.ids = data.data.map(function (t) {
                            return t.id;
                        });
                        that.animal_ids = [].concat.apply([], data.data.map(function (p) {
                            return p.animals.map(function (l) {
                                return l.id;
                            });
                        }));
                        that.$refs.pagination.meta = data.meta;

                        that.$parent.ensureObjects('terraria', that.ids, data.data);
                        that.$parent.ensureObjects('animals', that.animal_ids, [].concat.apply([], data.data.map(function (p) {
                            return p.animals;
                        })));
                    },
                    error: function error(_error) {
                        console.log(JSON.stringify(_error));
                    }
                });
            } else {
                this.ids = [this.terrariumId];
                this.$parent.ensureObject('terraria', this.terrariumId);
            }
        },

        rerender: function rerender() {
            this.$nextTick(function () {
                var grid = $('#' + this.containerId + '.masonry-grid');
                if (grid.length > 0) {
                    grid.masonry('reloadItems');
                    grid.masonry('layout');
                }
                $('.modal').modal();
                $('.tooltipped').tooltip({ delay: 50 });
            });
        },
        unsubscribe_all: function unsubscribe_all() {
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
            this.animals.forEach(function (a) {
                return a.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init();
        }, 100);
    }

});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        users: function users() {
            var that = this;
            return this.$store.state.users.filter(function (u) {
                return that.ids.includes(u.id) && u.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/users/?pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (u) {
                        return u.id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('users', that.ids, data.data);
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.users.forEach(function (u) {
                return u.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__loading_card_widget__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        valveId: {
            type: String,
            default: '',
            required: false
        },
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        }
    },

    components: {
        'loading-card-widget': __WEBPACK_IMPORTED_MODULE_0__loading_card_widget___default.a
    },

    computed: {
        valve: function valve() {
            var _this = this;

            return this.$store.state.valves.filter(function (v) {
                return v.id = _this.valveId;
            })[0];
        }
    },

    methods: {
        load_data: function load_data() {
            this.$parent.ensureObject('valves', this.valveId);
        }
    },

    created: function created() {
        this.load_data();
    }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ids: [],
            pump_ids: [],
            terraria_ids: [],
            controlunit_ids: []
        };
    },


    props: {
        wrapperClasses: {
            type: String,
            default: '',
            required: false
        },
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        hideCols: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: false
        },
        itemsPerPage: {
            type: Number,
            default: 9,
            required: false
        }
    },

    computed: {
        valves: function valves() {
            var that = this;
            return this.$store.state.valves.filter(function (v) {
                return that.ids.includes(v.id) && v.data !== null;
            }).sort(function (a, b) {
                var c = a.data[that.$refs.pagination.order.field] > b.data[that.$refs.pagination.order.field];
                if (c && that.$refs.pagination.order.direction === 'asc' || !c && that.$refs.pagination.order.direction === 'desc') {
                    return 1;
                }
                return -1;
            });
        },
        pumps: function pumps() {
            var that = this;
            return this.$store.state.pumps.filter(function (p) {
                return that.pump_ids.includes(p.id) && p.data !== null;
            });
        },
        terraria: function terraria() {
            var that = this;
            return this.$store.state.terraria.filter(function (t) {
                return that.terraria_ids.includes(t.id) && t.data !== null;
            });
        },
        controlunits: function controlunits() {
            var that = this;
            return this.$store.state.controlunits.filter(function (c) {
                return that.controlunit_ids.includes(c.id) && c.data !== null;
            });
        }
    },

    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_0__mixins_pagination_vue___default.a,
        'table-filter': __WEBPACK_IMPORTED_MODULE_1__mixins_table_filter_vue___default.a
    },

    methods: {
        load_data: function load_data() {
            var that = this;

            $.ajax({
                url: '/api/v1/valves/?with[]=pump&with[]=terrarium&with[]=controlunit&' + that.sourceFilter + '&' + 'pagination[per_page]=' + that.itemsPerPage + '&page=' + that.$refs.pagination.page + that.$refs.pagination.filter_string + that.$refs.pagination.order_string,
                method: 'GET',
                success: function success(data) {
                    that.ids = data.data.map(function (v) {
                        return v.id;
                    });
                    that.pump_ids = data.data.map(function (v) {
                        return v.pump_id;
                    });
                    that.terraria_ids = data.data.map(function (v) {
                        return v.terrarium_id;
                    });
                    that.controlunit_ids = data.data.map(function (v) {
                        return v.controlunit_id;
                    });

                    that.$refs.pagination.meta = data.meta;

                    that.$parent.ensureObjects('valves', that.ids, data.data);
                    that.$parent.ensureObjects('pumps', that.pump_ids, data.data.map(function (v) {
                        return v.pump;
                    }));
                    that.$parent.ensureObjects('terraria', that.terraria_ids, data.data.map(function (v) {
                        return v.terrarium;
                    }));
                    that.$parent.ensureObjects('controlunits', that.controlunit_ids, data.data.map(function (v) {
                        return v.controlunit;
                    }));
                },
                error: function error(_error) {
                    console.log(JSON.stringify(_error));
                }
            });
        },

        unsubscribe_all: function unsubscribe_all() {
            this.pumps.forEach(function (p) {
                return p.unsubscribe();
            });
            this.valves.forEach(function (v) {
                return v.unsubscribe();
            });
            this.terraria.forEach(function (t) {
                return t.unsubscribe();
            });
            this.controlunits.forEach(function (c) {
                return c.unsubscribe();
            });
        }
    },

    created: function created() {
        var that = this;
        setTimeout(function () {
            that.$refs.pagination.init('name');
        }, 100);
    }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_peity__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_peity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_peity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_system_indicator_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_system_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_system_indicator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loading_indicator_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_loading_indicator_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vue_loading_indicator_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_dashboard_widget_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vue_dashboard_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vue_dashboard_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vue_google_graph_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vue_google_graph_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vue_google_graph_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vue_dygraph_graph_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vue_dygraph_graph_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vue_dygraph_graph_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vue_chartjs_graph_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vue_chartjs_graph_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vue_chartjs_graph_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vue_inline_graph_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vue_inline_graph_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__vue_inline_graph_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vue_animals_widget_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vue_animals_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__vue_animals_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vue_animal_feedings_widget_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vue_animal_feedings_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__vue_animal_feedings_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vue_animal_feeding_schedules_widget_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vue_animal_feeding_schedules_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__vue_animal_feeding_schedules_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vue_animal_feeding_schedules_matrix_widget_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vue_animal_feeding_schedules_matrix_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__vue_animal_feeding_schedules_matrix_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vue_animal_weighing_schedules_matrix_widget_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__vue_animal_weighing_schedules_matrix_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__vue_animal_weighing_schedules_matrix_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vue_animal_weighings_widget_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__vue_animal_weighings_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__vue_animal_weighings_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vue_animal_weighing_schedules_widget_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vue_animal_weighing_schedules_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__vue_animal_weighing_schedules_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vue_terraria_widget_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vue_terraria_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__vue_terraria_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vue_controlunit_widget_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__vue_controlunit_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__vue_controlunit_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vue_controlunits_list_widget_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__vue_controlunits_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__vue_controlunits_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vue_files_list_widget_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__vue_files_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__vue_files_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vue_files_show_widget_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__vue_files_show_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__vue_files_show_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vue_action_sequences_list_widget_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__vue_action_sequences_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__vue_action_sequences_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vue_action_sequences_widget_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vue_action_sequences_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__vue_action_sequences_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vue_pump_widget_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vue_pump_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__vue_pump_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vue_pumps_list_widget_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__vue_pumps_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__vue_pumps_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__vue_valve_widget_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__vue_valve_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__vue_valve_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__vue_valves_list_widget_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__vue_valves_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__vue_valves_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vue_physical_sensor_widget_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vue_physical_sensor_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__vue_physical_sensor_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__vue_physical_sensors_list_widget_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__vue_physical_sensors_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__vue_physical_sensors_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__vue_logical_sensor_widget_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__vue_logical_sensor_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__vue_logical_sensor_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__vue_logical_sensors_list_widget_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__vue_logical_sensors_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__vue_logical_sensors_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__vue_logical_sensor_thresholds_widget_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__vue_logical_sensor_thresholds_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__vue_logical_sensor_thresholds_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__vue_generic_components_widget_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__vue_generic_components_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__vue_generic_components_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__vue_generic_components_list_widget_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__vue_generic_components_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__vue_generic_components_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__vue_users_list_widget_vue__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__vue_users_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__vue_users_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__vue_biography_entries_widget_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__vue_biography_entries_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__vue_biography_entries_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__vue_caresheets_widget_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__vue_caresheets_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__vue_caresheets_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__vue_logs_widget_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__vue_logs_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__vue_logs_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__vue_components_list_widget_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__vue_components_list_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__vue_components_list_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__vue_api_io_widget_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__vue_api_io_widget_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__vue_api_io_widget_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__vue_bus_type_edit_form_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__vue_bus_type_edit_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__vue_bus_type_edit_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__vue_generic_component_type_create_form_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__vue_generic_component_type_create_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__vue_generic_component_type_create_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ciliatus_object__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_vuex__ = __webpack_require__(10);
















































/**
 * Vuex
 */


global.Vue.use(__WEBPACK_IMPORTED_MODULE_42_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_42_vuex__["a" /* default */].Store({
    state: {
        action_sequences: [],
        action_sequence_intentions: [],
        action_sequence_schedules: [],
        action_sequence_triggers: [],
        animals: [],
        animal_weighings: [],
        animal_feedings: [],
        animal_feeding_types: [],
        animal_weighing_schedules: [],
        animal_feeding_schedules: [],
        biography_entries: [],
        caresheets: [],
        controlunits: [],
        files: [],
        generic_components: [],
        logical_sensors: [],
        logical_sensor_thresholds: [],
        physical_sensors: [],
        pumps: [],
        suggestions: [],
        terraria: [],
        users: [],
        valves: [],

        max_object_age_seconds: 60
    }
});

/**
 * ciliatusVue
 */
global.ciliatusVue = new global.Vue({

    el: '#body',

    i18n: global.i18n,
    store: store,

    data: {
        terraria: [],
        files: [],
        animals: []
    },

    props: {
        sourceFilter: {
            type: String,
            default: '',
            required: false
        },
        belongsTo_type: {
            type: String,
            default: '',
            required: false
        },
        belongsTo_id: {
            type: String,
            default: '',
            required: false
        }
    },

    methods: {
        ensureObject: function ensureObject(type, id, data, include) {
            if (!type || !id && !data) {
                return;
            }

            if (!id) {
                id = data.id;
            }

            var obj = [];
            if ((obj = this.$store.state[type].filter(function (o) {
                return o.id === id;
            })).length < 1) {
                this.$store.state[type].push(new __WEBPACK_IMPORTED_MODULE_41__ciliatus_object__["default"](this, type, id, data, include));
            } else {
                obj.forEach(function (o) {
                    return o.subscribe();
                });
            }
        },
        ensureObjects: function ensureObjects(type, ids, data, include) {
            var _this = this;

            if (!ids && !data) {
                return;
            }

            if (!ids) {
                data.forEach(function (obj) {
                    return _this.ensureObject(type, null, obj);
                });
            } else {
                var that = this;
                ids.forEach(function (id) {
                    that.ensureObject(type, id, data ? data.filter(function (o) {
                        return o && o.id === id;
                    })[0] : undefined, include);
                });
            }
        },
        removeObject: function removeObject(object) {
            this.$store.state[object.type].splice(this.$store.state[object.type].findIndex(function (o) {
                return o.id === object.id;
            }), 1);
            window.eventHubVue.$emit('CiliatusObjectDeleted', { type: object.type, id: object.id });
        },
        __deleteEventName: function __deleteEventName(type) {
            var event_names = {
                action_sequences: 'ActionSequenceDeleted',
                action_sequence_intentions: 'ActionSequenceIntentionDeleted',
                action_sequence_schedules: 'ActionSequenceScheduleDeleted',
                action_sequence_triggers: 'ActionSequenceTriggerDeleted',
                animals: 'AnimalDeleted',
                animal_weighings: 'AnimalWeighingEventDeleted',
                animal_feedings: 'AnimalFeedingEventDeleted',
                animal_weighing_schedules: 'AnimalWeighingSchedulePropertyDeleted',
                animal_feeding_schedules: 'AnimalFeedingSchedulePropertyDeleted',
                biography_entries: 'BiographyEntryEventDeleted',
                caresheets: 'CaresheetDeleted',
                controlunits: 'ControlunitDeleted',
                files: 'FileDeleted',
                generic_components: 'GenericComponentDeleted',
                logical_sensors: 'LogicalSensorDeleted',
                logical_sensor_thresholds: 'LogicalSensorThresholdsDeleted',
                physical_sensors: 'PhysicalSensorDeleted',
                pumps: 'PumpDeleted',
                suggestions: 'SuggestionDeleted',
                terraria: 'TerrariumDeleted',
                users: 'UserDeleted',
                valves: 'ValveDeleted'
            };

            return event_names[type];
        },
        __updateEventName: function __updateEventName(type) {
            var event_names = {
                action_sequences: 'ActionSequenceUpdated',
                action_sequence_intentions: 'ActionSequenceIntentionUpdated',
                action_sequence_schedules: 'ActionSequenceScheduleUpdated',
                action_sequence_triggers: 'ActionSequenceTriggerUpdated',
                animals: 'AnimalUpdated',
                animal_weighings: 'AnimalWeighingEventUpdated',
                animal_feedings: 'AnimalFeedingEventUpdated',
                animal_weighing_schedules: 'AnimalWeighingSchedulePropertyUpdated',
                animal_feeding_schedules: 'AnimalFeedingSchedulePropertyUpdated',
                biography_entries: 'BiographyEntryEventUpdated',
                caresheets: 'CaresheetUpdated',
                controlunits: 'ControlunitUpdated',
                files: 'FileUpdated',
                generic_components: 'GenericComponentUpdated',
                logical_sensors: 'LogicalSensorUpdated',
                logical_sensor_thresholds: 'LogicalSensorThresholdsUpdated',
                physical_sensors: 'PhysicalSensorUpdated',
                pumps: 'PumpUpdated',
                suggestions: 'SuggestionUpdated',
                terraria: 'TerrariumUpdated',
                users: 'UserUpdated',
                valves: 'ValveUpdated'
            };

            return event_names[type];
        }
    },

    created: function created() {
        var that = this;
        var event_name = void 0;
        Object.keys(this.$store.state).forEach(function (k) {
            if (event_name = that.__updateEventName(k)) {
                window.echo.private('dashboard-updates').listen(event_name, function (e) {
                    that.$store.state[k].filter(function (obj) {
                        return obj.id === e.id;
                    }).forEach(function (obj) {
                        return obj.refresh(false, .2);
                    });
                });
            }

            if (event_name = that.__deleteEventName(k)) {
                window.echo.private('dashboard-updates').listen(event_name, function (e) {
                    that.$store.state[k].filter(function (obj) {
                        return obj.id === e.id;
                    }).forEach(function (obj) {
                        return that.removeObject(obj);
                    });
                });
            }
        });
    },


    components: {
        'system-indicator': __WEBPACK_IMPORTED_MODULE_1__vue_system_indicator_vue___default.a,
        'loading-indicator': __WEBPACK_IMPORTED_MODULE_2__vue_loading_indicator_vue___default.a,

        'dashboard-widget': __WEBPACK_IMPORTED_MODULE_3__vue_dashboard_widget_vue___default.a,
        'peity': __WEBPACK_IMPORTED_MODULE_0_vue_peity___default.a,
        'google-graph': __WEBPACK_IMPORTED_MODULE_4__vue_google_graph_vue___default.a,
        'dygraph-graph': __WEBPACK_IMPORTED_MODULE_5__vue_dygraph_graph_vue___default.a,
        'chartjs-graph': __WEBPACK_IMPORTED_MODULE_6__vue_chartjs_graph_vue___default.a,
        'inline-graph': __WEBPACK_IMPORTED_MODULE_7__vue_inline_graph_vue___default.a,
        'animals-widget': __WEBPACK_IMPORTED_MODULE_8__vue_animals_widget_vue___default.a,
        'animal_feedings-widget': __WEBPACK_IMPORTED_MODULE_9__vue_animal_feedings_widget_vue___default.a,
        'animal_feeding_schedules-widget': __WEBPACK_IMPORTED_MODULE_10__vue_animal_feeding_schedules_widget_vue___default.a,
        'animal_feeding_schedules-matrix-widget': __WEBPACK_IMPORTED_MODULE_11__vue_animal_feeding_schedules_matrix_widget_vue___default.a,
        'animal_weighing_schedules-matrix-widget': __WEBPACK_IMPORTED_MODULE_12__vue_animal_weighing_schedules_matrix_widget_vue___default.a,
        'animal_weighings-widget': __WEBPACK_IMPORTED_MODULE_13__vue_animal_weighings_widget_vue___default.a,
        'animal_weighing_schedules-widget': __WEBPACK_IMPORTED_MODULE_14__vue_animal_weighing_schedules_widget_vue___default.a,
        'terraria-widget': __WEBPACK_IMPORTED_MODULE_15__vue_terraria_widget_vue___default.a,
        'controlunit-widget': __WEBPACK_IMPORTED_MODULE_16__vue_controlunit_widget_vue___default.a,
        'controlunits-list-widget': __WEBPACK_IMPORTED_MODULE_17__vue_controlunits_list_widget_vue___default.a,
        'files-list-widget': __WEBPACK_IMPORTED_MODULE_18__vue_files_list_widget_vue___default.a,
        'files-show-widget': __WEBPACK_IMPORTED_MODULE_19__vue_files_show_widget_vue___default.a,
        'action_sequences-list-widget': __WEBPACK_IMPORTED_MODULE_20__vue_action_sequences_list_widget_vue___default.a,
        'action_sequences-widget': __WEBPACK_IMPORTED_MODULE_21__vue_action_sequences_widget_vue___default.a,
        'pump-widget': __WEBPACK_IMPORTED_MODULE_22__vue_pump_widget_vue___default.a,
        'pumps-list-widget': __WEBPACK_IMPORTED_MODULE_23__vue_pumps_list_widget_vue___default.a,
        'valve-widget': __WEBPACK_IMPORTED_MODULE_24__vue_valve_widget_vue___default.a,
        'valves-list-widget': __WEBPACK_IMPORTED_MODULE_25__vue_valves_list_widget_vue___default.a,
        'physical_sensor-widget': __WEBPACK_IMPORTED_MODULE_26__vue_physical_sensor_widget_vue___default.a,
        'physical_sensors-list-widget': __WEBPACK_IMPORTED_MODULE_27__vue_physical_sensors_list_widget_vue___default.a,
        'logical_sensor-widget': __WEBPACK_IMPORTED_MODULE_28__vue_logical_sensor_widget_vue___default.a,
        'logical_sensors-list-widget': __WEBPACK_IMPORTED_MODULE_29__vue_logical_sensors_list_widget_vue___default.a,
        'logical_sensor_thresholds-widget': __WEBPACK_IMPORTED_MODULE_30__vue_logical_sensor_thresholds_widget_vue___default.a,
        'generic_components-widget': __WEBPACK_IMPORTED_MODULE_31__vue_generic_components_widget_vue___default.a,
        'generic_components-list-widget': __WEBPACK_IMPORTED_MODULE_32__vue_generic_components_list_widget_vue___default.a,
        'users-list-widget': __WEBPACK_IMPORTED_MODULE_33__vue_users_list_widget_vue___default.a,
        'biography_entries-widget': __WEBPACK_IMPORTED_MODULE_34__vue_biography_entries_widget_vue___default.a,
        'caresheets-widget': __WEBPACK_IMPORTED_MODULE_35__vue_caresheets_widget_vue___default.a,
        'logs-widget': __WEBPACK_IMPORTED_MODULE_36__vue_logs_widget_vue___default.a,
        'components-list-widget': __WEBPACK_IMPORTED_MODULE_37__vue_components_list_widget_vue___default.a,

        'api-io-widget': __WEBPACK_IMPORTED_MODULE_38__vue_api_io_widget_vue___default.a,

        'bus-type-edit-form': __WEBPACK_IMPORTED_MODULE_39__vue_bus_type_edit_form_vue___default.a,
        'generic_component_type_create-form': __WEBPACK_IMPORTED_MODULE_40__vue_generic_component_type_create_form_vue___default.a
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {window.eventHubVue = new global.Vue({
    props: {
        globalLoadingBarCount: {
            type: Number,
            default: 0,
            required: false
        }
    },

    methods: {
        processStarted: function processStarted() {
            this.globalLoadingBarCount++;
            this.checkLoadingBarState();
        },

        processEnded: function processEnded() {
            this.globalLoadingBarCount--;
            this.checkLoadingBarState();
        },

        checkLoadingBarState: function checkLoadingBarState() {
            if (this.globalLoadingBarCount > 0) {
                $('.main-loader').addClass('spinning-logo');
                //$('#global-loading-bar').show();
            } else {
                $('.main-loader').one('animationiteration webkitAnimationIteration', function () {
                    $(this).removeClass('spinning-logo');
                });
                //$('#global-loading-bar').hide();
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = { "de": { "buttons": { "next": "Weiter", "save": "Speichern", "delete": "L\xF6schen", "delete_type": "{type} L\xF6schen", "delete_all_type": "Alle {type} l\xF6schen", "loadgraph": "Graph laden", "upload": "Hochladen", "start_setup": "Setup starten", "add": "Hinzuf\xFCgen", "add_intention": "Neue Intention", "add_property": "Neue Eigenschaft", "add_state": "Neuer Zustand", "create": "Hinzuf\xFCgen", "edit": "Bearbeiten", "details": "Details", "download": "Herunterladen", "emergency_stop": "Notaus", "emergency_resume": "Notus aufheben", "revoke": "Widerrufen", "irrigate": "Bew\xE4ssern", "ventilate": "L\xFCften", "heat_up": "Heizen", "cool_down": "K\xFChlen", "start": "Starten", "close": "Schlie\xDFen", "select_all_read": "Alles lesen", "select_all_list": "Alles auflisten", "select_all_write": "Alles schreiben" }, "errors": { "retrievegraphdata": "Graphdaten konnten nicht ermittelt werden.", "auth": { "failed": "Authentifizierung fehlgeschlagen." }, "frontend": { "generic": "Ein Fehler ist aufgetreten. Details in der Konsole.", "no_recording_capability": "Der Browser scheint keine Sprachsteuerung zu unterst\xFCtzen." }, "codes": { "common": { "101": "Objekt konnte nicht gefunden werden.", "102": "Verwandtes Objekt konnte nicht gefunden werden: {related}_object.", "103": "Zeitstempel konnte nicht geparst werden: {timestamp}.", "104": "Fehlende Felder: {missing}_fields", "105": "Klasse nicht gefunden.", "106": "Ung\xFCltige UUID: {uuid}" }, "custom": { "11": [], "12": [], "13": [], "14": [], "15": { "201": "Vergleichstyp wurde nicht gefunden." }, "16": [], "17": [], "18": { "201": "Ein F\xFCtterungsplan f\xFCr diese Nahrungsart existiert bei diesem Tier bereits." }, "19": [], "1A": [], "1B": [], "1C": [], "1D": [], "1E": [], "1F": [], "20": { "201": "Keine Datei zum hochladen.", "202": "Datei ist zu gro\xDF. Maximum: {max}_size MB." }, "21": { "201": "Generische Komponente ist korrupt." }, "22": [], "23": [], "24": [], "25": [], "26": [], "27": [], "28": [], "29": { "201": "Der Rohwert liegt au\xDFerhalb des G\xFCltigkeitsbereichs.", "202": "Innerhalb dieser reading group gibt es bereits einen Wert f\xFCr diesen Logischen Sensor." }, "2A": [], "2B": { "201": "Beim Generieren der Aktionssequenz ist ein unbekannter Fehler aufgetreten." }, "2C": { "201": "Der Benutzername ist bereits vergeben.", "202": "Die E-Mail Adresse ist bereits vergeben.", "203": "Die Passw\xF6rter sind unterschiedlich.", "204": "Es wurde kein Passwort vergeben." }, "2D": [], "2E": [] } } }, "labels": { "User": "Benutzer", "user": "Benutzer", "users": "Benutzer|Benutzer", "Terrarium": "Terrarium", "terrarium": "Terrarium", "terraria": "Terrarium|Terrarien", "Animal": "Tier", "animal": "Tier", "animals": "Tier|Tiere", "Controlunit": "Steuereinheit", "controlunit": "Steuereinheit", "controlunits": "Steuereinheit|Steuereinheiten", "Pump": "Pumpe", "pump": "Pumpe", "pumps": "Pumpe|Pumpen", "Valve": "Ventil", "valve": "Ventil", "valves": "Ventil|Ventile", "PhysicalSensor": "Physischer Sensor", "physical_sensor": "Physischer Sensor", "physical_sensors": "Physischer Sensor|Physische Sensoren", "LogicalSensor": "Logischer Sensor", "logical_sensor": "Logischer Sensor", "logical_sensors": "Logischer Sensor|Logische Sensoren", "LogicalSensorThreshold": "Logischer Sensor Schwellenwert", "logical_sensor_threshold": "Logischer Sensor Schwellenwert", "logical_sensor_thresholds": "Logischer Sensor Schwellenwert|Logische Sensor Schwellenwerte", "File": "Datei", "file": "Datei", "files": "Dateien", "Log": "Systemlog", "log": "Log", "logs": "Systemlog|Systemlogs", "Action": "Aktion", "action": "Aktion", "actions": "Aktionen", "ActionSequence": "Aktionssequenz", "action_sequence": "Aktionssequenz", "action_sequences": "Aktionssequenz|Aktionssequenzen", "ActionSequenceSchedule": "Aktionssequenz Zeitplan", "action_sequence_schedule": "Aktionssequenz Zeitplan", "action_sequence_schedules": "Aktionssequenz Zeitplan|Aktionssequenz Zeitpl\xE4ne", "ActionSequenceTrigger": "Aktionssequenz Ausl\xF6ser", "action_sequence_trigger": "Aktionssequenz Ausl\xF6ser", "action_sequence_triggers": "Aktionssequenz Ausl\xF6ser|Aktionssequenz Ausl\xF6ser", "ActionSequenceIntention": "Aktionssequenz Intention", "action_sequence_intention": "Aktionssequenz Intention", "action_sequence_intentions": "Aktionssequenz Intention|Aktionssequenz Intentionen", "Trigger": "Ausl\xF6ser", "trigger": "Ausl\xF6ser", "triggers": "Ausl\xF6ser", "admin_panel": "Admin Panel", "admin_panels": "Admin Panel", "AnimalFeeding": "F\xFCtterung", "animal_feeding": "F\xFCtterung", "animal_feedings": "F\xFCtterung|F\xFCtterungen", "AnimalFeedingSchedule": "F\xFCtterungsplan", "animal_feeding_schedule": "F\xFCtterungsplan", "animal_feeding_schedules": "F\xFCtterungsplan|F\xFCtterungspl\xE4ne", "AnimalWeighing": "Gewicht", "animal_weighing": "Gewicht", "animal_weighings": "Gewicht|Gewichte", "AnimalWeighingSchedule": "Wiegeplan", "animal_weighing_schedule": "Wiegeplan", "animal_weighing_schedules": "Wiegeplan|Wiegepl\xE4ne", "BiographyEntryEvent": "Biografieeintrag", "biography_entry": "Biografieeintrag", "biography_entries": "Biografieeintrag|Biografieeintr\xE4ge", "CaresheetEvent": "Begleitblatt", "caresheet": { "sensor_history_days": "Zeitrahmen f\xFCr Sensorwerte", "data_history_days": "Zeitrahmen f\xFCr Tier- und Terrarieninformationen" }, "caresheets": "Begleitblatt|Begleitbl\xE4tter", "critical_state": "Kritischer Zustand", "critical_states": "Kritischer Zustand|Kritische Zust\xE4nde", "GenericComponent": "Generische Komponente", "generic_component": "Generische Komponente", "generic_components": "Generische Komponente|Generische Komponenten", "GenericComponentType": "Generischer Komponententyp", "generic_component_type": "Generischer Komponententyp", "generic_component_types": "Generischer Komponententyp|Generische Komponententypen", "SuggestionEvent": "Vorschlag", "suggestion": "Vorschlag", "suggestions": "Vorschl\xE4ge", "connecting": "Verbinde", "title": "Titel", "text": "Text", "tags": "Tags", "status": "Status", "health": "Gesundheit", "birth": "Geburt", "gender": "Geschlecht", "gender_male": "M\xE4nnlich", "gender_female": "Weiblich", "date": "Datum", "date_birth": "Geburtstag", "date_death": "Todestag", "model": "Modell", "type": "Typ", "email": "E-Mail", "name": "Name", "name_singular": "Name (Singular)", "name_plural": "Name (Plural)", "display_name": "Anzeigename", "common_name": "Gemeiner Name", "latin_name": "Lateinischer Name", "temperature": "Temperatur", "temperature_celsius": "Temperatur", "humidity": "Feuchtigkeit", "humidity_percent": "Feuchtigkeit", "heartbeat": "Puls", "last_heartbeat": "Letzter Puls", "noanimals": "Keine Tiere", "create": "Erstelle", "settings": "Einstellung|Einstellungen", "notifications": "Benachrichtigung|Benachrichtigungen", "notification_type": "Nachrichten Kanal", "details": "Details", "rawlimits": "Schwellenwerte", "rawlimitlo": "Unterer Schwellenwert", "rawlimithi": "Oberer Schwellenwert", "size": "Gr\xF6\xDFe", "current_value": "Aktueller Wert", "created_at": "Erstellt", "updated_at": "Letztes Update", "recovered_at": "Erholt", "read_at": "Gelesen", "download": "Herunterladen", "properties": "Eigenschaften", "preview": "Vorschau", "source": "Quelle", "target": "Ziel", "associated_with": "Assoziiert mit", "starts_at": "Beginnt um", "ends_at": "Endet um", "starts_after": "Startet nach", "thresholds": "Schwellenwerte", "abilities": "F\xE4higkeit|F\xE4higkeiten", "bugtracker": "Bugtracker", "wiki": "Wiki", "auto_nightmode": "Auto Nachtmodus", "permanent_nightmode": "Permanenter Nachtmodus", "language": "Sprache", "belongsTo_type": "Geh\xF6rt zu (Typ)", "belongsTo_id": "Geh\xF6rt zu (ID)", "belongsTo": "Geh\xF6rt zu", "users_guide": "Benutzerhandbuch", "doku": "Dokumentation", "tech_doku": "Techn. Dokumentation", "step": "Schritt", "phone_number": "Telefonnummer", "template": "Vorlage", "timezone": "Zeitzone", "critical": "Kritisch", "ok": "OK", "running": "Laufend", "runs_since": "L\xE4uft seit", "queued": "Wartend", "criticalstates": "Kritische Zust\xE4nde", "since": "Seit", "state": "Zustand", "irrigate": "Bew\xE4ssern", "duration": "Dauer", "on": "An", "off": "Aus", "just_fed": "F\xFCtterung hinzuf\xFCgen", "add_weight": "Gewicht hinzuf\xFCgen", "active": "Aktiv", "copy_thresholds": "Schwellenwerte kopieren", "daily": "T\xE4glich", "last_feeding": "Letzte F\xFCtterung", "crickets": "Heimchen", "mixed_fruits": "Fruchtbrei", "beetle_jelly": "BeetleJelly", "due": "F\xE4llig", "overdue": "\xDCberf\xE4llig", "meal_type": "Nahrungsart", "interval_days": "Intervall in Tagen", "interval": "Intervall", "password": "Passwort", "weight": "Gewicht", "no_data": "Keine Daten", "overview": "\xDCbersicht", "environment": "Umgebung", "now": "Jetzt", "scheduled": "Geplant", "sequence": "Sequenz", "weighprogression": "Gewichtsverlauf", "from": "Von", "tO": "Bis", "feedings": "F\xFCtterungen", "temp_and_hum_history": "Temperatur- und Feuchtigkeitsverlauf", "biography": "Biografie", "bio_categories": "Biografiekategorien", "icon": "Symbol", "average": "Durchschnitt", "min": "Minimum", "min_short": "Min", "max": "Maximum", "max_short": "Max", "during_day": "Tags", "during_night": "Nachts", "total": "Total", "infrastructure": "Infrastruktur", "timeframe_start": "Zeitrahmen ab", "timeframe_end": "Zeitrahmen bis", "reference_value": "Vergleichswert", "reference_value_duration_threshold_minutes": "Vergleichswert unter/\xFCberschritten seit (Minuten)", "for": "f\xFCr", "minimum_timeout": "Timeout", "minimum_timeout_minutes": "Timeout (Minuten)", "emergency_stop": "Notaus", "increases": "Erh\xF6ht", "increase": "Erh\xF6ht", "decreases": "Senkt", "decrease": "Senkt", "personal_access_token": "Zugriffstoken", "personal_access_tokens": "Zugriffstoken", "expires": "L\xE4uft ab", "security": "Sicherheit", "general": "Allgemein", "component": "Komponente", "to": "Bis", "daily_reminders": "T\xE4gliche Erinnerungen", "yesterday": "Gestern", "tomorrow": "Morgen", "today": "Heute", "runonce": "Nur einmal ausf\xFChren", "intention": "Intention", "deceased": "Verstorben", "software_version": "Software Version", "use_as_background": "Als Hintergrund verwenden", "relation_map": "Beziehungskarte", "start_action_sequence": "Aktionssequenz starten", "suggestions_unit": "Mind. Vorkommnisse", "suggestion_timeframe_unit": "Zeitrahmen (Einheit)", "suggestions_timeframe": "Zeitrahmen", "bus": "Bus", "i2c_bus_num": "I2C Bus Nummer", "i2c_address": "I2C Adresse", "i2c_multiplexer_address": "I2C Multiplexer Adresse", "i2c_multiplexer_port": "I2C Multiplexer Port", "gpio_pin": "GPIO Pin", "gpio_default_high": "GPIO Standard High", "configuration": "Konfiguration", "yes": "Ja", "no": "Nein", "rawvalue": "Rohwert", "adjust_rawvalue": "Rohwertkorrektur", "filter": "Filter", "logout": "Ausloggen", "login": "Einloggen", "remember_me": "Eingeloggt bleiben", "ask_me_something": "Frag mich etwas", "ventilate": "L\xFCften", "heat_up": "Heizen", "cool_down": "K\xFChlen", "between": "zwischen", "and": "und", "association": "Verkn\xFCpfung", "choose_logfile": "Log-Datei ausw\xE4hlen", "no_image": "Kein Bild", "features": "Features", "rollperiod": "Rollperiode", "add_preset": "Voreinstellung hinzuf\xFCgen", "inactive": "Inaktiv", "soft_state": "Soft state", "reason": "Grund", "possibly_affected_animals": "M\xF6glicherweise betroffene Tiere", "scope": "G\xFCltigkeitsbereich", "client_server_time_diff": "Client\/Server Zeitdifferenz", "id": "ID", "loading_dots": "Laden...", "search_ciliatus": "Ciliatus durchsuchen ..." }, "languages": { "german": "Deutsch", "english": "Englisch" }, "menu": { "welcome": "Willkommen", "dashboard": "\xDCbersicht", "general": "Allgemein", "administration": "Administration", "create": "Erstellen", "edit": "Editieren", "delete": "L\xF6schen", "infrastructure": "Infrastruktur", "help": "Hilfe", "logout": "Abmelden", "animals": "Tiere", "terraria": "Terrarien", "users": "Benutzer", "animal_feeding_types": "Nahrungsarten", "logs": "Protokoll", "categories": "Kategorien", "monitoring": "\xDCberwachung", "automation": "Automatisierung", "ciliatus_logs": "Ciliatus Logs", "system_logs": "System Logs", "system_status": "System Status" }, "messages": { "logical_sensor_thresholds": { "copy_warning": "Alle preexistenten Schwellenwerte des Zielsensors werden entfernt." }, "users": { "setup_telegram_ok": "Telegram ist eingerichtet.", "setup_telegram_err": "Telegram ist noch nicht eingerichtet.", "setup_telegram_description": "Bitte \xF6ffnen Sie Telegram in Ihrem <a href=\"https://web.telegram.org/#/im?p=@\">Browser</a> oder auf ihrem Smartphone und kontaktieren Sie <b>@</b> mit untenstehendem Aktivierungscode." }, "critical_state_generic": "Kritisch: {critical}_state", "critical_state_notification_logical_sensors": { "humidity_percent": { "UNKNOWN": "Kritisch: Der Sensor {logical}_sensor meldet eine Feuchtigkeit von {humidity}_percent%.", "LOWERLIMIT_DECEEDED": "Kritisch: Der Sensor {logical}_sensor meldet eine zu niedrige Feuchtigkeit von {humidity}_percent%.", "UPPERLIMIT_EXCEEDED": "Kritisch: Der Sensor {logical}_sensor meldet eine zu hohe Feuchtigkeit von {humidity}_percent%." }, "temperature_celsius": { "UNKNOWN": "Kritisch: Der Sensor {logical}_sensor meldet eine Temperatur von {temperature}_celsius\xB0C.", "LOWERLIMIT_DECEEDED": "Kritisch: Der Sensor {logical}_sensor meldet eine zu niedrige Temperatur von {temperature}_celsius\xB0C.", "UPPERLIMIT_EXCEEDED": "Kritisch: Der Sensor {logical}_sensor meldet eine zu hohe Temperatur von {temperature}_celsius\xB0C." } }, "critical_state_recovery_notification_logical_sensors": { "humidity_percent": { "UNKNOWN": "OK: Der Sensor {logical}_sensor meldet eine Feuchtigkeit von {humidity}_percent%.", "LOWERLIMIT_DECEEDED": "OK: Der Sensor {logical}_sensor meldet eine Feuchtigkeit von {humidity}_percent%.", "UPPERLIMIT_EXCEEDED": "OK: Der Sensor {logical}_sensor meldet eine Feuchtigkeit von {humidity}_percent%." }, "temperature_celsius": { "UNKNOWN": "OK: Der Sensor {terrarium} meldet eine Temperatur von {temperature}_celsius\xB0C.", "LOWERLIMIT_DECEEDED": "OK: Der Sensor {terrarium} meldet eine Temperatur von {temperature}_celsius\xB0C.", "UPPERLIMIT_EXCEEDED": "OK: Der Sensor {terrarium} meldet eine Temperatur von {temperature}_celsius\xB0C." } }, "critical_state_notification_controlunits": { "UNKNOWN": "Kritisch: Die Steuereinheit {controlunit} befindet sich in einem unbekannten Zustand.", "HEARTBEAT_CRITICAL": "Kritisch: Die Steuereinheit {controlunit} sendet keine Daten.", "TIME_DIFF_CRITICAL": "Kritisch: Die Steuereinheit {controlunit} hat eine zu hohe Zeitdifferenz." }, "critical_state_recovery_notification_controlunits": { "UNKNOWN": "OK: Die Steuereinheit {controlunit} ist nicht mehr in einem unbekannten Zustand.", "HEARTBEAT_CRITICAL": "OK: Die Steuereinheit {controlunit} sendet wieder Daten.", "TIME_DIFF_CRITICAL": "OK: Die Steuereinheit {controlunit} hat wieder eine akzeptable Zeitdifferenz." }, "daily": { "intro": "T\xE4gliche Erinnerungen", "feedings_due": "F\xE4llige F\xFCtterungen:", "weighings_due": "F\xE4lliges Wiegen:" }, "own_token_expires": "Token '{name}' l\xE4uft in {days} Tagen ab.", "suggestions": { "humidity_percent": { "UPPERLIMIT_EXCEEDED": "Feuchtigkeit reduzieren t\xE4glich um {hour}{00} Uhr", "LOWERLIMIT_DECEEDED": "Feuchtigkeit erh\xF6hen t\xE4glich um {hour}{00} Uhr", "UNKNOWN": "Feuchtigkeit regulieren t\xE4glich um {hour}{00} Uhr" }, "temperature_celsius": { "UPPERLIMIT_EXCEEDED": "Feuchtigkeit reduzieren t\xE4glich um {hour}{00} Uhr", "LOWERLIMIT_DECEEDED": "Temperatur erh\xF6hen t\xE4glich um {hour}{00} Uhr", "UNKNOWN": "Temperatur regulieren t\xE4glich um {hour}{00} Uhr" } } }, "product": { "name": "ciliatus" }, "setup": { "welcome": "Willkommen zu Ciliatus", "create_user": "Erstelle Deinen Benutzer", "done": "Geschafft!", "what_now": "Was nun?", "login": "Einloggen", "tooltip_login": "Logge Dich mit Deinem soeben erstellten Nutzer bei Ciliatus an.", "add_terrarium": "Terrarium anlegen", "tooltip_add_terrarium": "Erstelle Dein erstes Terrarium in Ciliatus.", "add_animal": "Tier anlegen", "tooltip_add_animal": "Erstelle Dein erstes Tier und ordne es einem Terrarium zu.", "setup_telegram": "Telegram einrichten", "tooltip_setup_telegram": "Lerne, wie Du Telegram mit Ciliatus konfigurieren kannst.", "setup_controlunit": "Kontrolleinheit erstellen", "tooltip_setup_controlunit": "Lerne eine Kontrolleinheit und zugeordnete Sensoren anzulegen um damit zu beginnen Sensordaten zu Deinen Terrarien zu \xFCbermitteln.", "err_completed": "Das Setup wurde bereits durchgef\xFChrt." }, "tooltips": { "ctrltoselect": "Strg+Klick zum selektieren", "active": "Aktiv", "showondefaultdashboard": "Auf Default Dashboard anzeigen", "autoirrigation": "Automatische Bew\xE4sserung", "sendnotificationsfor": "Benachrichtigungen versenden f\xFCr", "loadandrendergraph": "Daten werden ermittelt und Graph wird gerendert", "disables_option": "Deaktiviert \"{option}\"", "phone_number": "Mobilnummer", "contact_bot": "Den Bot kontaktieren", "wait_confirmation": "Auf Best\xE4tigung warten", "set_state_to": "Zustand von <b>{target}</b> auf <b>{state}</b> \xE4ndern f\xFCr <b>{minutes} Minuten</b>", "start_after_started": "Startet wenn Schritt <b>{id}<\/b> gestartet wurde", "start_after_finished": "Startet wenn Schritt <b>{id}<\/b> beendet wurde", "sendnotifications": "Benachrichtigungen versenden", "no_schedules": "Keine Zeitpl\xE4ne", "runonce": "Einmalig", "heartbeat_critical": "Heartbeat ist kritisch!", "copy_thresholds_warning": "Alle existierenden Schwellenwerte des Zielsensors werden entfernt.", "animal_feeding_schedule_matrix": "Diese Matrix enth\xE4lt alle definierten F\xFCtterungspl\xE4ne. Die Zahl in einer Spalte stellt das Intervall dar, gefolgt von den verbleibenden Tagen bis zur n\xE4chsten F\xE4lligkeit.", "animal_weighing_schedule_matrix": "Diese Matrix enth\xE4lt alle definierten Wiegepl\xE4ne. Die Zahl in einer Spalte stellt das Intervall gefolgt vom n\xE4chsten F\xE4lligkeitsdatum dar.", "done": "Erledigt", "skip": "\xDCberspringen", "material_icons_list": "Die komplette Symbolliste ist unter <a href=\"https:\/\/material.io\/icons\/\">material.io<\/a> einsehbar.", "no_data": "Keine Daten.", "connecting_to_server": "Verbindung zum Ciliatus Server wird hergestellt. Sollte dies l\xE4nger als einige Sekunden dauern, \xFCberpr\xFCfen Sie bitte Ihre Internetverbindung.", "generic_components": { "about": "Generische Komponenten sind Komponenten eines benutzerdefinierten Typs.", "type_about": "Generische Komponententypen definieren Name, Eigenschaften und m\xF6gliche Zust\xE4nde f\xFCr generische Komponenten. Sie dienen als Vorlage beim Erstellen einer neuen generischen Komponente.", "property_templates": "Definiert die Eigenschaften eines generischen Komponententyps. Beim Erstellen einer neuen Komponente diesen Typs wird man aufgefordert, diese Eigenschaften auszuf\xFCllen.", "state_templates": "Definiert m\xF6gliche Zust\xE4nde die eine Komponente diesen Typs haben kann. Beim Erstellen einer Aktionssequenz kann man aus den hier definierten Zust\xE4nden den gew\xFCnschten Zustand ausw\xE4hlen.<br /><br />Die Checkbox links definiert den standardm\xE4\xDFigen 'laufend'-Zustand.", "type_delete_warning": "Beim L\xF6schen eines Komponententyps werden <strong>alle Komponenten dieses Typs</strong> gel\xF6scht.", "intentions": "Intentionen von generischen Komponenten erm\xF6glichen deren automatisches Einbinden in Aktionssequenzen." }, "minimum_timeout_minutes": "Definiert die Dauer der minimalen Pause, bevor die Aktionssequenz durch diesen Ausl\xF6ser nach einem Durchlauf erneut gestartet werden kann.", "reference_value": "Der Wert, mit dem der Sensorwert verglichen werden soll.", "reference_value_duration_threshold_minutes": "Dauer in Minuten, die der Sensorwert den Grenzwert unter/\xFCberschritten haben muss, bevor die Aktionssequenz ausgel\xF6st wird.", "emergency_stop": "H\xE4lt sofort alle Aktionssequenzen an und verhindert das Starten neuer Aktionssequenzen bis der Notaus aufgehoben wird.", "emergency_resume": "Hebt den Notaus auf und erlaubt den Start von Aktionssequenzen.", "leave_empty_for_auto": "Frei lassen f\xFCr automatisch", "intention_increase_decrease": "Definiert ob die Intention dieser Aktionssequenz das Erh\xF6hen oder Senken des Sensorwerts ist.", "suggestions_unit": "Mindestanzahl von Kritischen Zust\xE4nden innerhalb des Zeitrahmens, bevor ein Vorschlag generiert werden soll.", "suggestion_timeframe_unit": "Zeitrahmen der zur Analyse herangezogen werden soll (Einheit)", "suggestions_timeframe": "Zeitrahmen der zur Analyse herangezogen werden soll (Wert)", "show_suggestions": "Vorschl\xE4ge anzeigen", "bus_type_edit_form": "Erm\xF6glicht Ciliatus das automatische Generieren von Kontroleinheitskonfigurationen.", "gpio_default_high": "GPIO Pin wird im Betrieb auf High gezogen. Zum aktivieren der Komponente auf Low.", "adjust_rawvalue": "Beim Empfangen eines Werts durch diesen Sensor kann der Wert korrigiert werden.", "experimental_feature": "Dieses Feature ist experimentell.", "action_sequence_schedules": { "skip": "Heutigen Durchlauf \xFCberspringen." }, "associate_new": "Verkn\xFCpfe <i class=\"mdi mdi-18px mdi-{source}\"></i> {source}_type \"{source}_name\" mit <i class=\"material-icons\">{target}_icon</i> {target}_type", "floating": { "add": "Neu", "edit": "Bearbeiten", "delete": "L\xF6schen" }, "ciliatus_up_to_date": "Aktuell", "ciliatus_not_up_to_date": "Update verf\xFCgbar: <a href=\"{url}\">GitHub</a>", "no_feeding_types": "Es wurden noch keine Futtertypen definiert.", "max_file_size": "Die maximale Dateigr\xF6\xDFe betr\xE4gt {size}.", "animal_weighing": { "trend": "Trend der letzten 60 Tage bis zum letzten Wiegen" }, "logical_sensor_thresholds": { "limits": "Nicht-kritischer Wertebereich. Werte au\xDFerhalb des Bereichs werden als kritisch angesehen", "lowerlimit": "Sensorwert ist kritisch, falls er unter diesem Wert liegt", "upperlimit": "Sensorwert ist kritisch, falls er \xFCber diesem Wert liegt", "starts_at": "Zeitpunkt, ab dem der Grenzwert gelten soll" }, "logical_sensor_rawvalue_limit": "G\xFCltigkeitsbereich dieses Sensors. Sensorwerte au\xDFerhalb dieses Bereichs werden abgelehnt, wenn sie \xFCber die API gesendet werden.", "caresheet": { "sensor_history_days": "Zeitraum der in die Berechnung von Durschnitts-\/Max-\/Min-Werten einbezogen werden soll", "data_history_days": "Zeitraum aus dem Biographieintr\xE4ge, F\xFCtterungen und Gewichtsverlauf einbezogen werden soll" }, "set_as_background": "Als Hintergrund setzen", "critical_state_actuality": "Daten werden zum jetzigen Zeitpunkt ermittelt und k\xF6nnten zum Zeitpunkt des kritischen Zustand unterschiedlich gewesen sein.", "i2c": { "bus_num": "F\xFCr Raspberry Pi: 0 f\xFCr RPI1, 1 f\xFCr alle anderen Modelle" } }, "units": { "years": "Jahr|Jahre", "months": "Monat|Monate", "weeks": "Woche|Wochen", "days": "Tag|Tage", "hours": "Stunde|Stunden", "minutes": "Minute|Minuten", "seconds": "Sekunde|Sekunden", "temperature_celsius": "\xB0C", "humidity_percent": "%", "years_ago": "vor {val} Jahren", "months_ago": "vor {val} Monaten", "weeks_ago": "vor {val} Wochen", "days_ago": "vor {val} Tagen", "hours_ago": "vor {val} Stunden", "minutes_ago": "vor {val} Minuten", "years_in": "in {val} Jahren", "months_in": "in {val} Monaten", "weeks_in": "in {val} Wochen", "days_in": "in {val} Tagen", "hours_in": "in {val} Stunden", "minutes_in": "in {val} Minuten", "years_since": "seit einem Jahr|seit {val} Jahren", "months_since": "seit einem Monat|seit {val} Monaten", "weeks_since": "seit einer Woche|seit {val} Wochen", "days_since": "seit einem Tag|seit {val} Tagen", "hours_since": "seit einer Stunde|seit {val} Stunden", "minutes_since": "seit einer Minute|seit {val} Minuten", "just_now": "gerade eben", "lesser": "<", "greater": ">", "equals": "=", "no_data": "" }, "weekdays": { "0": "Sonntag", "1": "Montag", "2": "Dienstag", "3": "Mittwoch", "4": "Donnerstag", "5": "Freitag", "6": "Samstag", "sunday": "Sonntag", "monday": "Montag", "tuesday": "Dienstag", "wednesday": "Mittwoch", "thursday": "Donnerstag", "friday": "Freitag", "saturday": "Samstag" } }, "en": { "buttons": { "next": "Next", "save": "Save", "delete": "Delete", "delete_type": "Delete {type}", "delete_all_type": "Delete all {type}", "loadgraph": "Load graph", "upload": "Upload", "start_setup": "Start Setup", "add": "Add", "add_intention": "Add Intention", "add_property": "Add Property", "add_state": "Add State", "create": "Add", "edit": "Edit", "details": "Details", "download": "Download", "emergency_stop": "Emergency stop", "emergency_resume": "Remove emergency stop", "revoke": "Revoke", "irrigate": "Irrigate", "ventilate": "Ventilate", "heat_up": "Heat up", "cool_down": "Cool down", "start": "Start", "close": "Close", "select_all_read": "Read all", "select_all_list": "List all", "select_all_write": "Write all" }, "errors": { "retrievegraphdata": "Could not retrieve graph data.", "auth": { "failed": "Authentication failed." }, "frontend": { "generic": "An error occured. Check the console for details.", "no_recording_capability": "The browser doesn't seem to support voice control." }, "codes": { "common": { "101": "Object not found.", "102": "Related object not found: {related}_object.", "103": "Could not parse timestamp {timestamp}.", "104": "Missing fields: {missing}_fields", "105": "Class not found.", "106": "Invalid UUID: {uuid}" }, "custom": { "11": [], "12": [], "13": [], "14": [], "15": { "201": "Unknown comparison." }, "16": [], "17": [], "18": { "201": "A feeding schedule for this type of food already exists for this animal." }, "19": [], "1A": [], "1B": [], "1C": [], "1D": [], "1E": [], "1F": [], "20": { "201": "No file to upload.", "202": "File is too big. Maximum: {max}_size MB." }, "21": { "201": "Generic component is corrupted." }, "22": [], "23": [], "24": [], "25": [], "26": [], "27": [], "28": [], "29": { "201": "Raw value is outside of the sensor's valid range.", "202": "There already is a sensor reading of this Logical Sensor withing the reading group." }, "2A": [], "2B": { "201": "Unknown error while generating Action Sequence." }, "2C": { "201": "Username already taken.", "202": "E-Mail address already taken.", "203": "The passwords don't match.", "204": "No password set." }, "2D": [], "2E": [] } } }, "labels": { "User": "User", "user": "User", "users": "User|Users", "Terrarium": "Terrarium", "terrarium": "Terrarium", "terraria": "Terrarium|Terraria", "Animal": "Animal", "animal": "Animal", "animals": "Animal|Animals", "Controlunit": "Control Unit", "controlunit": "Control Unit", "controlunits": "Control Unit|Control Units", "Pump": "Pump", "pump": "Pump", "pumps": "Pump|Pumps", "Valve": "Valve", "valve": "Valve", "valves": "Valve|Valves", "PhysicalSensor": "Physical Sensor", "physical_sensor": "Physical Sensor", "physical_sensors": "Physical Sensor|Physical Sensors", "LogicalSensor": "Logical Sensor", "logical_sensor": "Logical Sensor", "logical_sensors": "Logical Sensor|Logical Sensors", "LogicalSensorThreshold": "Logical Sensor Threshold", "logical_sensor_threshold": "Logical Sensor Threshold", "logical_sensor_thresholds": "Logical Sensor Threshold|Logical Sensor Thresholds", "File": "File", "file": "File", "files": "Files", "Log": "System log", "log": "Log", "logs": "System log|System logs", "Action": "Action", "action": "Action", "actions": "Actions", "ActionSequence": "Action sequence", "action_sequence": "Action sequence", "action_sequences": "Action sequence|Action sequences", "ActionSequenceSchedule": "Action sequence schedule", "action_sequence_schedule": "Action sequence schedule", "action_sequence_schedules": "Action sequence schedule|Action sequence schedules", "ActionSequenceTrigger": "Action sequence trigger", "action_sequence_trigger": "Action sequence trigger", "action_sequence_triggers": "Action sequence trigger|Action sequence triggers", "ActionSequenceIntention": "Action sequence intention", "action_sequence_intention": "Action sequence intention", "action_sequence_intentions": "Action sequence intention|Action sequence intentions", "Trigger": "Trigger", "trigger": "Trigger", "triggers": "Trigger|Triggers", "admin_panel": "Admin panel", "admin_panels": "Admin panel", "AnimalFeeding": "Feeding", "animal_feeding": "Feeding", "animal_feedings": "Feeding|Feedings", "AnimalFeedingSchedule": "Feeding schedule", "animal_feeding_schedule": "Feeding schedule", "animal_feeding_schedules": "Feeding schedule|Feeding schedules", "AnimalWeighing": "Weighing", "animal_weighing": "Weighing", "animal_weighings": "Weighing|Weighings", "AnimalWeighingSchedule": "Weighing schedule", "animal_weighing_schedule": "Weighing schedule", "animal_weighing_schedules": "Weighing schedule|Weighing schedules", "BiographyEntryEvent": "Biography entry", "biography_entry": "Biography entry", "biography_entries": "Biography entry|Biography entries", "CaresheetEvent": "Care Sheet", "caresheet": { "sensor_history_days": "Sensorreading timespan", "data_history_days": "Animal and terrarium data timespan" }, "caresheets": "Care Sheet|Care Sheets", "critical_state": "Critical State", "critical_states": "Critical State|Critical States", "GenericComponent": "Generic Component", "generic_component": "Generic Component", "generic_components": "Generic Component|Generic Components", "GenericComponentType": "Generic Component Type", "generic_component_type": "Generic Component Type", "generic_component_types": "Generic Component Type|Generic Component Types", "SuggestionEvent": "Suggestion", "suggestion": "Suggestion", "suggestions": "Suggestions", "connecting": "Connecting", "title": "Title", "text": "Text", "tags": "Tags", "status": "Status", "health": "Health", "birth": "Birth", "gender": "Gender", "gender_male": "Male", "gender_female": "Female", "date": "Date", "date_birth": "Day of birth", "date_death": "Day of death", "model": "Model", "type": "Type", "email": "E-Mail", "name": "Name", "name_singular": "Name (Singular)", "name_plural": "Name (Plural)", "display_name": "Display Name", "common_name": "Common Name", "latin_name": "Latin Name", "temperature": "Temperature", "temperature_celsius": "Temperature", "humidity": "Humidity", "humidity_percent": "Humidity", "heartbeat": "Heartbeat", "last_heartbeat": "Last Heartbeat", "noanimals": "No Animals", "create": "Create", "settings": "Setting|Settings", "notifications": "Notification|Notifications", "notification_type": "Notification channel", "details": "Details", "rawlimits": "Thresholds", "rawlimitlo": "Lower threshold", "rawlimithi": "Upper threshold", "size": "Size", "current_value": "Current value", "created_at": "Creation", "updated_at": "Last update", "recovered_at": "Recovered", "read_at": "Read at", "download": "Download", "properties": "Properties", "preview": "Preview", "source": "Source", "target": "Target", "associated_with": "Associated with", "starts_at": "Starts at", "ends_at": "Ends at", "starts_after": "Starts after", "thresholds": "Thresholds", "abilities": "Ability|Abilities", "bugtracker": "Bugtracker", "wiki": "Wiki", "auto_nightmode": "Auto night mode", "permanent_nightmode": "Permanent night mode", "language": "Language", "belongsTo_type": "Belongs to (type)", "belongsTo_id": "Belongs to (ID)", "belongsTo": "Belongs to", "users_guide": "User's Guide", "doku": "Documentation", "tech_doku": "Tech. Documentation", "step": "Step", "phone_number": "Phone number", "template": "Template", "timezone": "Timezone", "critical": "Critical", "ok": "OK", "running": "Running", "runs_since": "Running since", "queued": "Queued", "criticalstates": "Critical States", "since": "Since", "state": "State", "irrigate": "Irrigate", "duration": "Duration", "on": "On", "off": "Off", "just_fed": "Add feeding", "add_weight": "Add weight", "active": "Aktiv", "copy_thresholds": "Copy thresholds", "daily": "Daily", "last_feeding": "Last feeding", "crickets": "Crickets", "mixed_fruits": "Fruits", "beetle_jelly": "BeetleJelly", "due": "Due", "overdue": "Overdue", "meal_type": "Meal type", "interval_days": "Interval in days", "interval": "Interval", "password": "Password", "weight": "Weight", "no_data": "No Data", "overview": "Overview", "environment": "Environment", "now": "Now", "scheduled": "Scheduled", "sequence": "Sequence", "weighprogression": "Weight progression", "from": "From", "tO": "To", "feedings": "Feedings", "temp_and_hum_history": "Temperature and Humidity History", "biography": "Biography", "bio_categories": "Biography categories", "icon": "Icon", "average": "Average", "min": "Minimum", "min_short": "Min", "max": "Maximum", "max_short": "Max", "during_day": "Daytime", "during_night": "Nighttime", "total": "Total", "infrastructure": "Infrastructure", "timeframe_start": "Timeframe from", "timeframe_end": "Timeframe to", "reference_value": "Reference value", "reference_value_duration_threshold_minutes": "Reference value undershot\/exceeded for (Minutes)", "for": "for", "minimum_timeout": "Timeout", "minimum_timeout_minutes": "Timeout (minutes)", "emergency_stop": "Emergency stop", "increases": "Increases", "increase": "Increases", "decreases": "Decreases", "decrease": "Decreases", "personal_access_token": "Access Token", "personal_access_tokens": "Access Tokens", "expires": "Expires", "security": "Security", "general": "General", "component": "Component", "to": "To", "daily_reminders": "Daily Reminders", "yesterday": "Yesterday", "tomorrow": "Tomorrow", "today": "Today", "runonce": "Only run once", "intention": "Intention", "deceased": "Deceased", "software_version": "Software Version", "use_as_background": "Use as background image", "relation_map": "Relation map", "start_action_sequence": "Start Action Sequence", "suggestions_unit": "Min. Occurences", "suggestion_timeframe_unit": "Timeframe (Unit)", "suggestions_timeframe": "Timeframe", "bus": "Bus", "i2c_bus_num": "I2C bus number", "i2c_address": "I2C address", "i2c_multiplexer_address": "I2C multiplexer address", "i2c_multiplexer_port": "I2C multiplexer port", "gpio_pin": "GPIO pin", "gpio_default_high": "GPIO Default High", "configuration": "Configuration", "yes": "Yes", "no": "No", "rawvalue": "Raw value", "adjust_rawvalue": "Raw value correction", "filter": "Filter", "logout": "Log off", "login": "Log in", "remember_me": "Stay logged in", "ask_me_something": "Ask me something", "ventilate": "Ventilate", "heat_up": "Heat", "cool_down": "Cool", "between": "between", "and": "and", "association": "Association", "choose_logfile": "Choose a log file", "no_image": "No image", "features": "Features", "rollperiod": "Roll period", "add_preset": "Add preset", "inactive": "Inactive", "soft_state": "Soft state", "reason": "Reason", "possibly_affected_animals": "Possibly affected animals", "scope": "Scope", "client_server_time_diff": "Client\/Server time difference", "id": "ID", "loading_dots": "Loading...", "search_ciliatus": "Search Ciliatus ..." }, "languages": { "german": "German", "english": "English" }, "menu": { "welcome": "Welcome", "dashboard": "Dashboard", "general": "General", "administration": "Administration", "create": "Create", "edit": "Edit", "delete": "Delete", "infrastructure": "Infrastructure", "help": "Help", "logout": "Log out", "animals": "Animals", "terraria": "Terraria", "users": "Users", "animal_feeding_types": "Food types", "logs": "Logs", "categories": "Categories", "monitoring": "Monitoring", "automation": "Automation", "ciliatus_logs": "Ciliatus Logs", "system_logs": "System Logs", "system_status": "System Status" }, "messages": { "logical_sensor_thresholds": { "copy_warning": "All existing thresholds associated with the target sensor will be deleted." }, "users": { "setup_telegram_ok": "Telegram is set up.", "setup_telegram_err": "Telegram has not yet been set up.", "setup_telegram_description": "Please point your browser to <a href=\"https:\/\/web.telegram.org\/#\/im?p=@\">Telegram Web<\/a> or use your smartphone to contact <b>@<\/b> with your verification code below." }, "critical_state_generic": "Critical: {critical}_state", "critical_state_notification_logical_sensors": { "humidity_percent": { "UNKNOWN": "Critical: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C.", "LOWERLIMIT_DECEEDED": "Critical: The sensor {logical}_sensor reports a too low humidity of {humidity}_percent%C.", "UPPERLIMIT_EXCEEDED": "Critical: The sensor {logical}_sensor reports a too high humidity of {humidity}_percent%C." }, "temperature_celsius": { "UNKNOWN": "Critical: The sensor {logical}_sensor reports a temperature of {temperature}_celsius\xB0C.", "LOWERLIMIT_DECEEDED": "Critical: The sensor {logical}_sensor reports a too low temperature of {temperature}_celsius\xB0C.", "UPPERLIMIT_EXCEEDED": "Critical: The sensor {logical}_sensor reports a too high temperature of {temperature}_celsius\xB0C." } }, "critical_state_recovery_notification_logical_sensors": { "humidity_percent": { "UNKNOWN": "OK: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C.", "LOWERLIMIT_DECEEDED": "OK: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C.", "UPPERLIMIT_EXCEEDED": "OK: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C." }, "temperature_celsius": { "UNKNOWN": "OK: The sensor {logical}_sensor reports a temperature of {temperature}_celsius\xB0C.", "LOWERLIMIT_DECEEDED": "OK: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C.", "UPPERLIMIT_EXCEEDED": "OK: The sensor {logical}_sensor reports a humidity of {humidity}_percent%C." } }, "critical_state_notification_controlunits": { "UNKNOWN": "Critical: The controlunit {controlunit} is in an unknown state.", "HEARTBEAT_CRITICAL": "Critical: The controlunit {controlunit} is not sending data.", "TIME_DIFF_CRITICAL": "Critical: The controlunit {controlunit} has a too large time difference." }, "critical_state_recovery_notification_controlunits": { "UNKNOWN": "OK: The controlunit {controlunit} is no longer in an unknown state.", "HEARTBEAT_CRITICAL": "OK: The controlunit {controlunit} is sending data again.", "TIME_DIFF_CRITICAL": "OK: The controlunit {controlunit} has an acceptable time difference again." }, "daily": { "intro": "Daily reminders", "feedings_due": "Feedings due:", "weighings_due": "Weighings due:" }, "own_token_expires": "Token '{name}' expires in {days} days.", "suggestions": { "humidity_percent": { "UPPERLIMIT_EXCEEDED": "Decrease humidity daily at {hour}{00}", "LOWERLIMIT_DECEEDED": "Increase humidity daily at {hour}{00}", "UNKNOWN": "Regulate humidity daily at {hour}{00}" }, "temperature_celsius": { "UPPERLIMIT_EXCEEDED": "Decrease temperature daily at {hour}{00}", "LOWERLIMIT_DECEEDED": "Increase temperature daily at {hour}{00}", "UNKNOWN": "Regulate temperature daily at {hour}{00}" } } }, "product": { "name": "ciliatus" }, "setup": { "welcome": "Welcome to Ciliatus", "create_user": "Create your user", "done": "Done!", "what_now": "What now?", "login": "Log in", "tooltip_login": "Log in to Ciliatus with the user you just created.", "add_terrarium": "Create Terrarium", "tooltip_add_terrarium": "Create your first terrarium in Ciliatus.", "add_animal": "Create animal", "tooltip_add_animal": "Create your first animal and assign it to a terrarium.", "setup_telegram": "Setup Telegram", "tooltip_setup_telegram": "Learn how to configure Telegram with Ciliatus.", "setup_controlunit": "Create Controlunit", "tooltip_setup_controlunit": "Learn how to setup a controlunit to start feeding Ciliatus with sensor readings.", "err_completed": "Setup is already completed." }, "tooltips": { "ctrltoselect": "Ctrl-click to deselect", "active": "Active", "showondefaultdashboard": "Show on default dashboard", "autoirrigation": "Automatic irrigation (if available)", "sendnotificationsfor": "Send notifications for", "loadandrendergraph": "Collection data and rendering graph", "disables_option": "Disables \"{option}\"", "phone_number": "Mobile number", "contact_bot": "Contacting the bot", "wait_confirmation": "Waiting for confirmation", "set_state_to": "Set state of <b>{target}<\/b> to <b>{state}<\/b> for <b>{minutes} minutes<\/b>", "start_after_started": "Starts as soon as step <b>{id}<\/b> was started", "start_after_finished": "Starts as soon as step <b>{id}<\/b> finished", "sendnotifications": "Send notifications", "no_schedules": "No schedules", "runonce": "Run once", "heartbeat_critical": "Heartbeat is critical!", "copy_thresholds_warning": "All existing thresholds on the target sensor will be removed.", "animal_feeding_schedule_matrix": "This matrix contains all defined feeding schedules. A number in a column represents the schedule's interval in days followed by the remaining time in days until it's due next.", "animal_weighing_schedule_matrix": "This matrix contains all defined weighing schedules. A number in a column represents the schedule's interval in days followed by the next due date.", "done": "Done", "skip": "Skip", "material_icons_list": "Visit <a href=\"https:\/\/material.io\/icons\/\">material.io<\/a> for a complete icon overview.", "no_data": "No data.", "connecting_to_server": "Connecting to Ciliatus Server. If this takes longer then a few seconds please check your internet connection.", "generic_components": { "about": "Generic components are components of a user defined type.", "type_about": "Generic component types define name, properties and possible states of a generic component. They are used as a template when creating a new generic component.", "property_templates": "Define properties for this generic component type. Each time you create a new component of this type you will be prompted to fill in these properties.", "state_templates": "Define possible states for a component of this type. When creating an action sequence you can chose a state from this list as a desired state.<br \/><br \/>The radio box on the left defines the default 'running' state.", "type_delete_warning": "When deleting a component type <strong>all components of this type<\/strong> will also be deleted.", "intentions": "Intentionen of generic components allows them to be automatically used within action sequences." }, "minimum_timeout_minutes": "Defines the minimum timeout before the action sequence can be started by this trigger after the last time it was triggered.", "reference_value": "Reference value which will be compared to the sensor values.", "reference_value_duration_threshold_minutes": "Duration in minutes for which the sensor value has to be greater\/lower\/equal to the reference value before triggering the action sequence.", "emergency_stop": "Instantly stops all running action sequences and prohibits action sequences from starting.", "emergency_resume": "Revokes the emergency stop and allows action sequences to start.", "leave_empty_for_auto": "Leave empty for automatic", "intention_increase_decrease": "Defines whether the intention of this action sequence is to increase or decrease the sensor's readings", "suggestions_unit": "Minimum number of critical states within the timeframe before a suggestion should be generated.", "suggestion_timeframe_unit": "Timeframe used for analysis (Unit)", "suggestions_timeframe": "Timeframe used for analysis (Value)", "show_suggestions": "Show suggestions", "bus_type_edit_form": "Allows Ciliatus to automatically generate controlunit configurations.", "gpio_default_high": "GPIO Pin will be pulled to high. When activating a component to low.", "adjust_rawvalue": "When receiving a reading from this sensor you can adjust the raw value.", "experimental_feature": "This is an experimental feature.", "action_sequence_schedules": { "skip": "Skip today's run." }, "associate_new": "Associate <i class=\"material-icons\">{source}_icon<\/i> {source}_type \"{source}_name\" with <i class=\"material-icons\">{target}_icon<\/i> {target}_type", "floating": { "add": "New", "edit": "Edit", "delete": "Delete" }, "ciliatus_up_to_date": "Up to date", "ciliatus_not_up_to_date": "Update available: <a href=\"{url}\">GitHub<\/a>", "no_feeding_types": "There are no food types defined yet.", "max_file_size": "The maximum file size is {size}.", "animal_weighing": { "trend": "Trend within the last 60 days from the last weighing" }, "logical_sensor_thresholds": { "limits": "Non-critical range. Values outside this range will be considered critical", "lowerlimit": "Sensor reading will be considered critical, if below this value", "upperlimit": "Sensor reading will be considered critical, if above this value", "starts_at": "Time from which on this threshold is active" }, "logical_sensor_rawvalue_limit": "Valid value range for this sensor. Values outside this range submitted via the API will be rejected", "caresheet": { "sensor_history_days": "Timespan for sensor readings to include in the average\/min\/max calculation", "data_history_days": "Timespan of animal feedings, weighings and biography entries to include" }, "set_as_background": "Set as background", "critical_state_actuality": "This is current information which could have been different at the time of the critical state.", "i2c": { "bus_num": "For Raspberry Pi: Use 0 for RPI1, 1 for all other models" } }, "units": { "years": "year|years", "months": "month|months", "weeks": "week|weeks", "days": "day|days", "hours": "hour|hours", "minutes": "minute|minutes", "seconds": "second|seconds", "temperature_celsius": "\xB0C", "humidity_percent": "%", "years_ago": "{val} years ago", "months_ago": "{val} months ago", "weeks_ago": "{val} weeks ago", "days_ago": "{val} days ago", "hours_ago": "{val} hours ago", "minutes_ago": "{val} minutes ago", "years_in": "in {val} years", "months_in": "in {val} months", "weeks_in": "in {val} weeks", "days_in": "in {val} days", "hours_in": "in {val} hours", "minutes_in": "in {val} minutes", "years_since": "since one year ago|since {val} years ago", "months_since": "since one month ago|since {val} months ago", "weeks_since": "since one week ago|since {val} weeks ago", "days_since": "since one day ago|since {val} days ago", "hours_since": "since one hours ago|since {val} hours ago", "minutes_since": "since one minute ago|since {val} minutes ago", "just_now": "just now", "lesser": "<", "greater": ">", "equals": "=", "no_data": "" }, "weekdays": { "0": "Sunday", "1": "Monday", "2": "Tuesday", "3": "Wednesday", "4": "Thursday", "5": "Friday", "6": "Saturday", "sunday": "Sunday", "monday": "Monday", "tuesday": "Tuesday", "wednesday": "Wednesday", "thursday": "Thursday", "friday": "Friday", "saturday": "Saturday" } } };

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(66)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(68);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * vue-i18n v7.3.2 
 * (c) 2017 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * utilites
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function getOldChoiceIndexFixed (choice) {
  return choice
    ? choice > 1
      ? 1
      : 0
    : 1
}

function getChoiceIndex (choice, choicesLength) {
  choice = Math.abs(choice);

  if (choicesLength === 2) { return getOldChoiceIndexFixed(choice) }

  return choice ? Math.min(choice, 2) : 0
}

function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') { return null }
  var choices = message.split('|');

  choice = getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

var canUseDateTimeFormat =
  typeof Intl !== 'undefined' && typeof Intl.DateTimeFormat !== 'undefined';

var canUseNumberFormat =
  typeof Intl !== 'undefined' && typeof Intl.NumberFormat !== 'undefined';

/*  */

function extend (Vue) {
  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
    var ref;
  };

  Vue.prototype.$n = function (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
    var ref;
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root.$i18n;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    if (this._subscribing) {
      this._i18n.unsubscribeDataChanging(this);
      delete this._subscribing;
    }

    if (this._i18nWatcher) {
      this._i18nWatcher();
      delete this._i18nWatcher;
    }

    if (this._localeWatcher) {
      this._localeWatcher();
      delete this._localeWatcher;
    }

    this._i18n = null;
  }
};

/*  */

var component = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var data = ref.data;
    var children = ref.children;
    var parent = ref.parent;

    var i18n = parent.$i18n;

    children = (children || []).filter(function (child) {
      return child.tag || (child.text = child.text.trim())
    });

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return children
    }

    var path = props.path;
    var locale = props.locale;

    var params = {};
    var places = props.places || {};

    var hasPlaces = Array.isArray(places)
      ? places.length > 0
      : Object.keys(places).length > 0;

    var everyPlace = children.every(function (child) {
      if (child.data && child.data.attrs) {
        var place = child.data.attrs.place;
        return (typeof place !== 'undefined') && place !== ''
      }
    });

    if (hasPlaces && children.length > 0 && !everyPlace) {
      warn('If places prop is set, all child elements must have place prop set.');
    }

    if (Array.isArray(places)) {
      places.forEach(function (el, i) {
        params[i] = el;
      });
    } else {
      Object.keys(places).forEach(function (key) {
        params[key] = places[key];
      });
    }

    children.forEach(function (child, i) {
      var key = everyPlace
        ? ("" + (child.data.attrs.place))
        : ("" + i);
      params[key] = child;
    });

    return h(props.tag, data, i18n.i(path, locale, params))
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t$1(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  if (localeEqual(el, vnode) && looseEqual(binding.value, binding.oldValue)) { return }

  t$1(el, binding, vnode);
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('not exist Vue instance in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('not exist VueI18n instance in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t$1 (el, binding, vnode) {
  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  if (!path && !locale && !args) {
    warn('not support value type');
    return
  }

  if (!path) {
    warn('required `path` in v-t directive');
    return
  }

  var vm = vnode.context;
  el._vt = el.textContent = (ref$1 = vm.$i18n).t.apply(ref$1, [ path ].concat( makeParams(locale, args) ));
  el._locale = vm.$i18n.locale;
  var ref$1;
}

function parseValue (value) {
  var path;
  var locale;
  var args;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
  }

  return { path: path, locale: locale, args: args }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ("development" !== 'production' && install.installed) {
    warn('already installed.');
    return
  }
  install.installed = true;

  /* istanbul ignore if */
  if ("development" !== 'production' && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  Object.defineProperty(Vue.prototype, '$i18n', {
    get: function get () { return this._i18n }
  });

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update });
  Vue.component(component.name, component);

  // use object-based merge strategy
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = strats.methods;
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};

var RE_TOKEN_LIST_VALUE = /^(\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== '}') {
        sub += char;
        char = format[position++];
      }

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path paerser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if ((code >= 0x61 && code <= 0x7A) || (code >= 0x41 && code <= 0x5A)) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) { return 'number' }

  return 'else'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





function empty (target) {
  /* istanbul ignore else */
  if (Array.isArray(target)) {
    return target.length === 0
  } else {
    return false
  }
}

var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (empty(paths)) {
    return null
  } else {
    var length = paths.length;
    var ret = null;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        last = null;
        break
      }
      last = value;
      i++;
    }

    ret = last;
    return ret
  }
};

/*  */

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || new BaseFormatter();
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : !!options.silentTranslationWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];

  this._exist = function (message, key) {
    if (!message || !key) { return false }
    return !isNull(this$1._path.getPathValue(message, key))
  };

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: {},messages: {},dateTimeFormats: {},numberFormats: {},locale: {},fallbackLocale: {},missing: {},formatter: {},silentTranslationWarn: {} };

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm) {
  if (!isNull(result)) { return result }
  if (this.missing) {
    this.missing.apply(null, [locale, key, vm]);
  } else {
    if ("development" !== 'production' && !this._silentTranslationWarn) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }
  return key
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if ("development" !== 'production' && !this._silentTranslationWarn) {
          warn(("Value of key '" + key + "' is not a string!"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ("development" !== 'production' && !this._silentTranslationWarn) {
        warn(("Value of key '" + key + "' is not a string!"));
      }
      return null
    }
  }

  // Check for the existance of links within the translated string
  if (ret.indexOf('@:') >= 0) {
    ret = this._link(locale, message, ret, host, interpolateMode, values);
  }

  return !values ? ret : this._render(ret, interpolateMode, values)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values
) {
    var this$1 = this;

  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(/(@:[\w\-_|.]+)/g);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    // Remove the leading @:
    var linkPlaceholder = link.substr(2);
    // Translate the link
    var translated = this$1._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values
    );

    if (this$1._isFallbackRoot(translated)) {
      if ("development" !== 'production' && !this$1._silentTranslationWarn) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this$1._root) { throw Error('unexpected error') }
      var root = this$1._root;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this$1._warnDefault(locale, linkPlaceholder, translated, host);

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._render = function _render (message, interpolateMode, values) {
  var ret = this._formatter.interpolate(message, values);
  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var res =
    this._interpolate(locale, messages[locale], key, host, interpolateMode, args);
  if (!isNull(res)) { return res }

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args);
  if (!isNull(res)) {
    if ("development" !== 'production' && !this._silentTranslationWarn) {
      warn(("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale."));
    }
    return res
  } else {
    return null
  }
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];

  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
    var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ("development" !== 'production' && !this._silentTranslationWarn) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).t.apply(ref, [ key ].concat( values ))
  } else {
    return this._warnDefault(locale, key, ret, host)
  }
    var ref;
};

VueI18n.prototype.t = function t (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
    var ref;
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ("development" !== 'production' && !this._silentTranslationWarn) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host)
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
    host,
    choice
) {
    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];

    if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }
  return fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
    var ref;
};

VueI18n.prototype.tc = function tc (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
    var ref;
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  this._vm.messages[locale] = message;
};

  VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  this._vm.messages[locale] = Vue.util.extend(this._vm.messages[locale] || {}, message);
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.dateTimeFormats[locale] = format;
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.dateTimeFormats[locale] = Vue.util.extend(this._vm.dateTimeFormats[locale] || {}, format);
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if (true) {
      warn(("Fall back to '" + fallback + "' datetime formats from '" + locale + " datetime formats."));
    }
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if ("development" !== 'production' && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not support Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (true) {
      warn(("Fall back to datetime localization of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
        key = args[0];
      }
      if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.numberFormats[locale] = format;
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.numberFormats[locale] = Vue.util.extend(this._vm.numberFormats[locale] || {}, format);
};

VueI18n.prototype._localizeNumber = function _localizeNumber (
  value,
  locale,
  fallback,
  numberFormats,
  key
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if (true) {
      warn(("Fall back to '" + fallback + "' number formats from '" + locale + " number formats."));
    }
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._numberFormatters[id];
    if (!formatter) {
      formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._n = function _n (value, locale, key) {
  /* istanbul ignore if */
  if ("development" !== 'production' && !VueI18n.availabilities.numberFormat) {
    warn('Cannot format a Date value due to not support Intl.NumberFormat.');
    return ''
  }

  if (!key) {
    return new Intl.NumberFormat(locale).format(value)
  }

  var ret =
    this._localizeNumber(value, locale, this.fallbackLocale, this._getNumberFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (true) {
      warn(("Fall back to number localization of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.n(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key)
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

VueI18n.availabilities = {
  dateTimeFormat: canUseDateTimeFormat,
  numberFormat: canUseNumberFormat
};
VueI18n.install = install;
VueI18n.version = '7.3.2';

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueI18n);
}

/* harmony default export */ __webpack_exports__["a"] = (VueI18n);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\action_sequences-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] action_sequences-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-779a643c", Component.options)
  } else {
    hotAPI.reload("data-v-779a643c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(110),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\action_sequences-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] action_sequences-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02aa2605", Component.options)
  } else {
    hotAPI.reload("data-v-02aa2605", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(145),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_add_feeding-modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_add_feeding-modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-988cd154", Component.options)
  } else {
    hotAPI.reload("data-v-988cd154", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(124),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_feeding_schedules-matrix-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_feeding_schedules-matrix-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4412c114", Component.options)
  } else {
    hotAPI.reload("data-v-4412c114", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(143),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_feeding_schedules-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_feeding_schedules-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82c4c0a0", Component.options)
  } else {
    hotAPI.reload("data-v-82c4c0a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(149),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_feedings-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_feedings-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd3f709c", Component.options)
  } else {
    hotAPI.reload("data-v-cd3f709c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_weighing_schedules-matrix-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_weighing_schedules-matrix-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-391af5f4", Component.options)
  } else {
    hotAPI.reload("data-v-391af5f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(132),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_weighing_schedules-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_weighing_schedules-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fc487fe", Component.options)
  } else {
    hotAPI.reload("data-v-5fc487fe", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(141),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animal_weighings-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animal_weighings-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a4ba0b8", Component.options)
  } else {
    hotAPI.reload("data-v-7a4ba0b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(150),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\animals-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] animals-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9003c26", Component.options)
  } else {
    hotAPI.reload("data-v-d9003c26", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(114),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\api-io-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] api-io-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a23c295", Component.options)
  } else {
    hotAPI.reload("data-v-1a23c295", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\biography_entries-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] biography_entries-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7695a880", Component.options)
  } else {
    hotAPI.reload("data-v-7695a880", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\bus_type_edit-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bus_type_edit-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40caa194", Component.options)
  } else {
    hotAPI.reload("data-v-40caa194", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(111),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\caresheets-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] caresheets-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05618d09", Component.options)
  } else {
    hotAPI.reload("data-v-05618d09", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(127),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\chartjs-graph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] chartjs-graph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dca3765", Component.options)
  } else {
    hotAPI.reload("data-v-4dca3765", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(152),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\components-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] components-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dddd1da2", Component.options)
  } else {
    hotAPI.reload("data-v-dddd1da2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(128),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\controlunit-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] controlunit-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5035607a", Component.options)
  } else {
    hotAPI.reload("data-v-5035607a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(115),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\controlunits-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] controlunits-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-218170ea", Component.options)
  } else {
    hotAPI.reload("data-v-218170ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(154),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\dashboard-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc69bb20", Component.options)
  } else {
    hotAPI.reload("data-v-fc69bb20", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(37),
  /* template */
  __webpack_require__(136),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\dygraph-graph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dygraph-graph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e35f5d2", Component.options)
  } else {
    hotAPI.reload("data-v-6e35f5d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(147),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\files-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] files-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1773e8c", Component.options)
  } else {
    hotAPI.reload("data-v-a1773e8c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(148),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\files-show-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] files-show-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c121560a", Component.options)
  } else {
    hotAPI.reload("data-v-c121560a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(119),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\generic_component_type_create-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] generic_component_type_create-form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34c7c76d", Component.options)
  } else {
    hotAPI.reload("data-v-34c7c76d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(146),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\generic_components-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] generic_components-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9bc6f4d2", Component.options)
  } else {
    hotAPI.reload("data-v-9bc6f4d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(118),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\generic_components-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] generic_components-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28dfb130", Component.options)
  } else {
    hotAPI.reload("data-v-28dfb130", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(112),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\google-graph.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] google-graph.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c333a8d", Component.options)
  } else {
    hotAPI.reload("data-v-0c333a8d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(126),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\logical_sensor-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] logical_sensor-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a87bb84", Component.options)
  } else {
    hotAPI.reload("data-v-4a87bb84", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(121),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\logical_sensor_thresholds-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] logical_sensor_thresholds-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ef626cd", Component.options)
  } else {
    hotAPI.reload("data-v-3ef626cd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(123),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\logical_sensors-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] logical_sensors-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40cf11c6", Component.options)
  } else {
    hotAPI.reload("data-v-40cf11c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(50),
  /* template */
  __webpack_require__(153),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\logs-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] logs-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6784bc2", Component.options)
  } else {
    hotAPI.reload("data-v-e6784bc2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\physical_sensor-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] physical_sensor-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-787d603c", Component.options)
  } else {
    hotAPI.reload("data-v-787d603c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(116),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\physical_sensors-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] physical_sensors-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2407172c", Component.options)
  } else {
    hotAPI.reload("data-v-2407172c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(142),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\pump-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pump-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-813d1874", Component.options)
  } else {
    hotAPI.reload("data-v-813d1874", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(125),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\pumps-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pumps-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48c31d4e", Component.options)
  } else {
    hotAPI.reload("data-v-48c31d4e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(133),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\system-indicator.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] system-indicator.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61fa9e78", Component.options)
  } else {
    hotAPI.reload("data-v-61fa9e78", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(129),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\terraria-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] terraria-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52858374", Component.options)
  } else {
    hotAPI.reload("data-v-52858374", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(59),
  /* template */
  __webpack_require__(130),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\users-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] users-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57661b6a", Component.options)
  } else {
    hotAPI.reload("data-v-57661b6a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(117),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\valve-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] valve-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28ad1b74", Component.options)
  } else {
    hotAPI.reload("data-v-28ad1b74", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\laragon\\www\\dev-01.ciliatus.io\\resources\\assets\\js\\vue\\valves-list-widget.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] valves-list-widget.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72f1ca7c", Component.options)
  } else {
    hotAPI.reload("data-v-72f1ca7c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-playlist-play"
  }), _vm._v("\n        " + _vm._s(_vm.action_sequences.length) + " " + _vm._s(_vm.$tc("labels.action_sequences", 2)) + "\n    ")]), _vm._v(" "), _vm._l((_vm.action_sequences), function(as) {
    return _c('div', [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "card-sub-header"
    }, [_c('a', {
      attrs: {
        "href": '/action_sequences/' + as.id + '/edit'
      }
    }, [_c('strong', [_vm._v(_vm._s(as.name))])]), _vm._v(" "), _c('a', {
      staticClass: "right",
      attrs: {
        "href": '/action_sequences/' + as.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-pencil"
    })])]), _vm._v(" "), _vm._l((as.intentions), function(asi) {
      return _c('div', {
        staticClass: "row row-no-margin"
      }, [_c('i', {
        staticClass: "mdi mdi-18px mdi-compass"
      }), _vm._v(" "), (asi.intention === 'increase') ? _c('span', [_vm._v(_vm._s(_vm.$t('labels.increases')))]) : _vm._e(), _vm._v(" "), (asi.intention === 'decrease') ? _c('span', [_vm._v(_vm._s(_vm.$t('labels.decreases')))]) : _vm._e(), _vm._v("\n\n                " + _vm._s(_vm.$t('labels.' + asi.type)) + "\n\n                "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (asi.states.running),
          expression: "asi.states.running"
        }]
      }, [_c('span', {
        staticClass: "new badge",
        attrs: {
          "data-badge-caption": _vm.$t('labels.active')
        }
      })])])
    }), _vm._v(" "), _vm._l((as.triggers), function(ast) {
      return _c('div', [_c('i', {
        staticClass: "mdi mdi-18px mdi-vanish"
      }), _vm._v(" " + _vm._s(ast.logical_sensor.name) + " " + _vm._s(_vm.$t('units.' + ast.reference_value_comparison_type)) + " " + _vm._s(ast.reference_value) + "\n                "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (ast.states.running),
          expression: "ast.states.running"
        }]
      }, [_c('span', {
        staticClass: "new badge",
        attrs: {
          "data-badge-caption": _vm.$t('labels.active')
        }
      })])])
    }), _vm._v(" "), _vm._l((as.schedules), function(ass) {
      return _c('div', [_c('i', {
        staticClass: "mdi mdi-18px mdi-clock"
      }), _vm._v(" " + _vm._s(ass.timestamps.starts) + " "), _c('i', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (!ass.runonce),
          expression: "!ass.runonce"
        }]
      }, [_vm._v(_vm._s(_vm.$t("labels.daily")))]), _vm._v(" "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (ass.states.running),
          expression: "ass.states.running"
        }]
      }, [_c('span', {
        staticClass: "new badge",
        attrs: {
          "data-badge-caption": _vm.$t('labels.active')
        }
      })])])
    })], 2), _vm._v(" "), (_vm.action_sequences.length < 1) ? _c('div', [_vm._v("\n            " + _vm._s(_vm.$t('tooltips.no_data')) + "\n        ")]) : _vm._e()])
  }), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/action_sequences/create?preset[terrarium]=' + _vm.terrariumId
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.add")))])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02aa2605", module.exports)
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 2,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          noFilter: true,
          path: 'name',
          col: 0
        },
        {
          name: 'created_at',
          noFilter: true,
          path: 'created_at',
          col: 1
        }
      ]
    }
  }), _vm._v(" "), _c('tbody', _vm._l((_vm.caresheets), function(caresheet) {
    return _c('tr', [(caresheet.data) ? [_c('td', [_c('span', [_c('a', {
      attrs: {
        "href": '/animals/' + _vm.animalId + '/caresheets/' + caresheet.data.id
      }
    }, [_vm._v("\n                                " + _vm._s(caresheet.data.title) + "\n                            ")])])]), _vm._v(" "), _c('td', [_c('span', [_vm._v(_vm._s(caresheet.data.timestamps.created))])])] : [_c('td', {
      attrs: {
        "colspan": "2"
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.loading')))])]], 2)
  }))], 1), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05618d09", module.exports)
  }
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.ShowFilterForm === true) ? _c('div', [_c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.from'),
      "name": "filter_from",
      "id": 'filter_from_' + _vm.id,
      "data-default": _vm.FilterFromDate
    },
    domProps: {
      "value": _vm.FilterFromDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_from_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.from')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.to'),
      "name": "filter_to",
      "id": 'filter_to_' + _vm.id,
      "data-default": _vm.FilterToDate
    },
    domProps: {
      "value": _vm.FilterToDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_to_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.to')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    on: {
      "click": _vm.build
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.loadgraph')))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": 'google_chart_' + _vm.id + '_loading'
    }
  }, [_vm._m(0, false, false)]), _vm._v(" "), _c('div', {
    attrs: {
      "id": 'google_chart_' + _vm.id
    }
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "preloader-wrapper small active"
  }, [_c('div', {
    staticClass: "spinner-layer spinner-green-only"
  }, [_c('div', {
    staticClass: "circle-clipper left"
  }, [_c('div', {
    staticClass: "circle"
  })]), _c('div', {
    staticClass: "gap-patch"
  }, [_c('div', {
    staticClass: "circle"
  })]), _c('div', {
    staticClass: "circle-clipper right"
  }, [_c('div', {
    staticClass: "circle"
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c333a8d", module.exports)
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s10"
  }, [(_vm.meta.hasOwnProperty('pagination')) ? _c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    class: ['hide-on-small-only', {
      'disabled': _vm.meta.pagination.current_page == 1,
      'waves-effect': _vm.meta.pagination.current_page != 1
    }]
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(1)
      }
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-page-first"
  })])]), _vm._v(" "), (!_vm.mini) ? _c('li', {
    class: {
      'disabled': _vm.meta.pagination.current_page == 1, 'waves-effect': _vm.meta.pagination.current_page != 1
    }
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page - 1)
      }
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-chevron-left"
  })])]) : _vm._e(), _vm._v(" "), (!_vm.mini && _vm.meta.pagination.current_page - 3 > 0) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page - 3)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page - 3))])]) : _vm._e(), _vm._v(" "), (!_vm.mini && _vm.meta.pagination.current_page - 2 > 0) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page - 2)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page - 2))])]) : _vm._e(), _vm._v(" "), (_vm.meta.pagination.current_page - 1 > 0) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page - 1)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page - 1))])]) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page))])]), _vm._v(" "), (_vm.meta.pagination.current_page + 1 <= _vm.meta.pagination.total_pages) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page + 1)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page + 1))])]) : _vm._e(), _vm._v(" "), (!_vm.mini && _vm.meta.pagination.current_page + 2 <= _vm.meta.pagination.total_pages) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page + 2)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page + 2))])]) : _vm._e(), _vm._v(" "), (!_vm.mini && _vm.meta.pagination.current_page + 3 <= _vm.meta.pagination.total_pages) ? _c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page + 3)
      }
    }
  }, [_vm._v(_vm._s(_vm.meta.pagination.current_page + 3))])]) : _vm._e(), _vm._v(" "), (!_vm.mini) ? _c('li', {
    class: {
      'disabled': _vm.meta.pagination.current_page == _vm.meta.pagination.total_pages, 'waves-effect': _vm.meta.pagination.current_page != _vm.meta.pagination.total_pages
    }
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.current_page + 1)
      }
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-chevron-right"
  })])]) : _vm._e(), _vm._v(" "), _c('li', {
    class: ['hide-on-small-only', {
      'disabled': _vm.meta.pagination.current_page == _vm.meta.pagination.total_pages,
      'waves-effect': _vm.meta.pagination.current_page != _vm.meta.pagination.total_pages
    }]
  }, [_c('a', {
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        _vm.set_page(_vm.meta.pagination.total_pages)
      }
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-page-last"
  })])])]) : _vm._e()]), _vm._v(" "), (_vm.enableFilters) ? _c('div', {
    staticClass: "col s2 right-align"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "waves-effect"
  }, [_c('a', {
    attrs: {
      "href": "#!"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-filter-variant",
    on: {
      "click": _vm.toggle_filters
    }
  })])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showFilters && _vm.enableFilters),
      expression: "showFilters && enableFilters"
    }],
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, _vm._l((_vm.filterFields), function(field) {
    return _c('div', {
      staticClass: "input-field inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.filter[field.path]),
        expression: "filter[field.path]"
      }],
      attrs: {
        "id": 'filter_' + field.name,
        "type": "text",
        "placeholder": _vm.$t('labels.' + field.name)
      },
      domProps: {
        "value": (_vm.filter[field.path])
      },
      on: {
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
          _vm.set_filter($event)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.filter, field.path, $event.target.value)
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'filter_' + field.name
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.' + field.name)))])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18518174", module.exports)
  }
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "white-text"
  }, [_c('div', {
    staticClass: "input-field inline",
    staticStyle: {
      "min-width": "180px"
    }
  }, [_c('form', {
    staticClass: "ciliatus-search-wrapper",
    attrs: {
      "action": "/api/v1/apiai/send_request",
      "data-method": "POST",
      "id": "api-io-widget-form",
      "data-no-confirm": true
    },
    on: {
      "submit": _vm.submit_interceptor
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-lightbulb-on-outline prefix"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.transcript),
      expression: "transcript"
    }],
    staticClass: "validate",
    attrs: {
      "name": "speech",
      "id": "ask-me-something",
      "type": "text",
      "readonly": _vm.loading,
      "autocomplete": "off"
    },
    domProps: {
      "value": (_vm.transcript)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.transcript = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "white-text",
    attrs: {
      "for": "ask-me-something",
      "id": "ask-me-something-label"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('labels.ask_me_something')) + "\n                ")])])]), _vm._v(" "), _c('a', {
    staticClass: "btn-floating waves-effect waves-light",
    on: {
      "mousedown": _vm.record,
      "mouseup": _vm.stop_recording
    }
  }, [_c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.recording && !_vm.loading),
      expression: "!recording && !loading"
    }],
    staticClass: "mdi mdi-24px mdi-microphone"
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.recording && !_vm.loading),
      expression: "recording && !loading"
    }],
    staticClass: "mdi mdi-24px mdi-microphone-outline"
  }), _vm._v(" "), _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "mdi mdi-24px mdi-loading mdi-spin"
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1a23c295", module.exports)
  }
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 5,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'software_version',
          path: 'software_version',
          col: 1,
          class: 'hide-on-small-only'
        },
        {
          name: 'heartbeat',
          path: 'heartbeat_at',
          noFilter: true,
          col: 2
        },
        {
          name: 'client_server_time_diff',
          noSort: true,
          noFilter: true,
          col: 3,
          class: 'hide-on-med-and-down'
        },
        {
          noSort: true,
          noFilter: true,
          col: 4,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.controlunits), function(controlunit) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + controlunit.data.id
      }
    }, [_vm._v(_vm._s(controlunit.data.name))]), _vm._v(" "), (!controlunit.data.active) ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('labels.inactive')))]) : _vm._e()])]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_vm._v("\n                                " + _vm._s(controlunit.data.software_version) + "\n                            ")])]), _vm._v(" "), _c('td', [_vm._v("\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(controlunit.data.timestamps.last_heartbeat_diff).unit, {
        val: _vm.$getMatchingTimeDiff(controlunit.data.timestamps.last_heartbeat_diff).val
      }
    )) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-med-and-down"
    }, [_c('span', [_vm._v("\n                                " + _vm._s(controlunit.data.client_server_time_diff_seconds) + "s\n                            ")])]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/controlunits/' + controlunit.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', {
      attrs: {
        "colspan": "5"
      }
    }, _vm._l((_vm.component_types), function(type) {
      return (controlunit.data) ? _c('div', [((_vm.component_list = _vm._self[type].filter(function (c) { return c.data.controlunit_id === controlunit.id; })).length > 0) ? [_vm._v("\n                                    " + _vm._s(_vm.$tc('labels.' + type, 2)) + ":\n                                    "), _vm._l((_vm.component_list), function(component) {
        return _c('span', [_c('i', {
          class: 'mdi mdi-18px mdi-' + component.data.icon
        }), _vm._v(" "), _c('a', {
          attrs: {
            "href": component.data.url
          }
        }, [_vm._v(_vm._s(component.data.name))])])
      })] : _vm._e()], 2) : _vm._e()
    }))])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-218170ea", module.exports)
  }
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 5,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'model',
          path: 'model',
          col: 1
        },
        {
          name: 'controlunit',
          noSort: true,
          path: 'controlunit.name',
          col: 2,
          class: 'hide-on-small-only'
        },
        {
          name: 'terrarium',
          noSort: true,
          path: 'terrarium.display_name',
          col: 3,
          class: 'hide-on-med-and-down'
        },
        {
          noSort: true,
          noFilter: true,
          col: 4,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.physical_sensors), function(physical_sensor) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-switch"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/physical_sensors/' + physical_sensor.data.id
      }
    }, [_vm._v(_vm._s(physical_sensor.data.name))]), _vm._v(" "), (!physical_sensor.data.active) ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('labels.inactive')))]) : _vm._e()])]), _vm._v(" "), _c('td', [_c('span', [_vm._v("\n                                " + _vm._s(physical_sensor.data.model) + "\n                            ")])]), _vm._v(" "), (_vm.hideCols.indexOf('controlunit') === -1) ? _c('td', {
      staticClass: "hide-on-small-only"
    }, [((_vm.controlunit = _vm.controlunits.filter(function (c) { return c.data.id === physical_sensor.data.controlunit_id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + _vm.controlunit[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.controlunit[0].data.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.hideCols.indexOf('terrarium') === -1) ? _c('td', {
      staticClass: "hide-on-med-and-down"
    }, [(physical_sensor.data.terrarium &&
      (_vm.terrarium = _vm.terraria.filter(function (t) { return t.data.id === physical_sensor.data.terrarium.id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-trackpad"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/terraria/' + _vm.terrarium[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.terrarium[0].data.display_name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/physical_sensors/' + physical_sensor.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', {
      attrs: {
        "colspan": "4"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$t('labels.last_heartbeat')) + ":\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(physical_sensor.data.timestamps.last_heartbeat_diff).unit, {
        val: _vm.$getMatchingTimeDiff(physical_sensor.data.timestamps.last_heartbeat_diff).val
      }
    )) + "\n                            "), _c('br'), _vm._v("\n                            " + _vm._s(_vm.$tc('labels.logical_sensors', 2)) + ":\n                            "), _vm._l((_vm.logical_sensors.filter(function (l) { return l.data.physical_sensor_id === physical_sensor.data.id; })), function(logical_sensor, index) {
      return _c('span', [_c('i', {
        staticClass: "mdi mdi-24px mdi-pulse"
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": '/logical_sensors/' + logical_sensor.data.id
        }
      }, [_vm._v(_vm._s(logical_sensor.data.name))]), _vm._v(" "), (index < _vm.logical_sensors.filter(function (l) { return l.data.physical_sensor_id === physical_sensor.data.id; }).length - 1) ? [_vm._v(", ")] : _vm._e()], 2)
    })], 2), _vm._v(" "), _c('td', {
      staticClass: "hide-on-med-and-down"
    })])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2407172c", module.exports)
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.valve.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-pipe-disconnected"
  }), _vm._v("\n            " + _vm._s(_vm.$tc("labels.valves", 1)) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title activator"
  }, [_vm._v("\n                " + _vm._s(_vm.valve.data.name) + "\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(_vm.$t('labels.model')) + ": " + _vm._s(_vm.valve.data.model) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/valves/' + _vm.valve.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/valves/' + _vm.valve.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28ad1b74", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.generic_component.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    class: 'mdi mdi-18px mdi-' + _vm.generic_component.data.type.icon
  }), _vm._v("\n            " + _vm._s(_vm.generic_component.data.type.name_singular) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.generic_component.data.name) + "\n            ")]), _vm._v(" "), _vm._l((_vm.generic_component.data.properties), function(property, index) {
    return _c('div', [_vm._v("\n                " + _vm._s(property.name) + ": " + _vm._s(property.value)), _c('br')])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/generic_components/' + _vm.generic_component.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/generic_components/' + _vm.generic_component.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28dfb130", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.containerClasses
  }, [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "card"
  }, [_c('form', {
    attrs: {
      "action": '/api/v1/generic_component_types/' + (_vm.generic_component_type.id === undefined ? '' : _vm.generic_component_type.id),
      "data-method": _vm.generic_component_type.id === undefined ? 'POST' : 'PUT',
      "id": _vm.generic_component_type,
      "data-redirect-success": "/categories#tab_generic_components_types"
    }
  }, [_c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$tc('labels.generic_component_types', 1)))])]), _vm._v(" "), _c('div', {
    staticClass: "col s12 m6 l6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12 m6 l6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.generic_component_type.name_singular),
      expression: "generic_component_type.name_singular"
    }],
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('labels.name_singular'),
      "name": "name_singular",
      "id": "name_singular"
    },
    domProps: {
      "value": (_vm.generic_component_type.name_singular)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.generic_component_type, "name_singular", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "name_singular"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.name_singular')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m6 l6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.generic_component_type.name_plural),
      expression: "generic_component_type.name_plural"
    }],
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('labels.name_plural'),
      "name": "name_plural",
      "id": "name_plural"
    },
    domProps: {
      "value": (_vm.generic_component_type.name_plural)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.generic_component_type, "name_plural", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "name_plural"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.name_plural')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col s12 m6 l6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('select', {
    attrs: {
      "name": "icon",
      "id": "icon"
    },
    domProps: {
      "value": _vm.generic_component_type.icon
    }
  }, [_c('option', {
    attrs: {
      "value": "3d_rotation"
    }
  }, [_vm._v("3d_rotation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ac_unit"
    }
  }, [_vm._v("ac_unit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "access_alarm"
    }
  }, [_vm._v("access_alarm")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "access_alarms"
    }
  }, [_vm._v("access_alarms")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "access_time"
    }
  }, [_vm._v("access_time")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accessibility"
    }
  }, [_vm._v("accessibility")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "accessible"
    }
  }, [_vm._v("accessible")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "account_balance"
    }
  }, [_vm._v("account_balance")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "account_balance_wallet"
    }
  }, [_vm._v("account_balance_wallet")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "account_box"
    }
  }, [_vm._v("account_box")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "account_circle"
    }
  }, [_vm._v("account_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "adb"
    }
  }, [_vm._v("adb")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add"
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_a_photo"
    }
  }, [_vm._v("add_a_photo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_alarm"
    }
  }, [_vm._v("add_alarm")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_alert"
    }
  }, [_vm._v("add_alert")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_box"
    }
  }, [_vm._v("add_box")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_circle"
    }
  }, [_vm._v("add_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_circle_outline"
    }
  }, [_vm._v("add_circle_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_location"
    }
  }, [_vm._v("add_location")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_shopping_cart"
    }
  }, [_vm._v("add_shopping_cart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_to_photos"
    }
  }, [_vm._v("add_to_photos")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "add_to_queue"
    }
  }, [_vm._v("add_to_queue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "adjust"
    }
  }, [_vm._v("adjust")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_flat"
    }
  }, [_vm._v("airline_seat_flat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_flat_angled"
    }
  }, [_vm._v("airline_seat_flat_angled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_individual_suite"
    }
  }, [_vm._v("airline_seat_individual_suite")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_legroom_extra"
    }
  }, [_vm._v("airline_seat_legroom_extra")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_legroom_normal"
    }
  }, [_vm._v("airline_seat_legroom_normal")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_legroom_reduced"
    }
  }, [_vm._v("airline_seat_legroom_reduced")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_recline_extra"
    }
  }, [_vm._v("airline_seat_recline_extra")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airline_seat_recline_normal"
    }
  }, [_vm._v("airline_seat_recline_normal")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airplanemode_active"
    }
  }, [_vm._v("airplanemode_active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airplanemode_inactive"
    }
  }, [_vm._v("airplanemode_inactive")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airplay"
    }
  }, [_vm._v("airplay")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "airport_shuttle"
    }
  }, [_vm._v("airport_shuttle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "alarm"
    }
  }, [_vm._v("alarm")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "alarm_add"
    }
  }, [_vm._v("alarm_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "alarm_off"
    }
  }, [_vm._v("alarm_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "alarm_on"
    }
  }, [_vm._v("alarm_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "album"
    }
  }, [_vm._v("album")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "all_inclusive"
    }
  }, [_vm._v("all_inclusive")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "all_out"
    }
  }, [_vm._v("all_out")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "android"
    }
  }, [_vm._v("android")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "announcement"
    }
  }, [_vm._v("announcement")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "apps"
    }
  }, [_vm._v("apps")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "archive"
    }
  }, [_vm._v("archive")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_back"
    }
  }, [_vm._v("arrow_back")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_downward"
    }
  }, [_vm._v("arrow_downward")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_drop_down"
    }
  }, [_vm._v("arrow_drop_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_drop_down_circle"
    }
  }, [_vm._v("arrow_drop_down_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_drop_up"
    }
  }, [_vm._v("arrow_drop_up")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_forward"
    }
  }, [_vm._v("arrow_forward")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "arrow_upward"
    }
  }, [_vm._v("arrow_upward")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "art_track"
    }
  }, [_vm._v("art_track")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "aspect_ratio"
    }
  }, [_vm._v("aspect_ratio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assessment"
    }
  }, [_vm._v("assessment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment"
    }
  }, [_vm._v("assignment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment_ind"
    }
  }, [_vm._v("assignment_ind")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment_late"
    }
  }, [_vm._v("assignment_late")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment_return"
    }
  }, [_vm._v("assignment_return")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment_returned"
    }
  }, [_vm._v("assignment_returned")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assignment_turned_in"
    }
  }, [_vm._v("assignment_turned_in")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assistant"
    }
  }, [_vm._v("assistant")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "assistant_photo"
    }
  }, [_vm._v("assistant_photo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "attach_file"
    }
  }, [_vm._v("attach_file")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "attach_money"
    }
  }, [_vm._v("attach_money")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "attachment"
    }
  }, [_vm._v("attachment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "audiotrack"
    }
  }, [_vm._v("audiotrack")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "autorenew"
    }
  }, [_vm._v("autorenew")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "av_timer"
    }
  }, [_vm._v("av_timer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "backspace"
    }
  }, [_vm._v("backspace")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "backup"
    }
  }, [_vm._v("backup")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "battery_alert"
    }
  }, [_vm._v("battery_alert")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "battery_charging_full"
    }
  }, [_vm._v("battery_charging_full")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "battery_full"
    }
  }, [_vm._v("battery_full")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "battery_std"
    }
  }, [_vm._v("battery_std")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "battery_unknown"
    }
  }, [_vm._v("battery_unknown")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "beach_access"
    }
  }, [_vm._v("beach_access")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "beenhere"
    }
  }, [_vm._v("beenhere")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "block"
    }
  }, [_vm._v("block")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bluetooth"
    }
  }, [_vm._v("bluetooth")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bluetooth_audio"
    }
  }, [_vm._v("bluetooth_audio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bluetooth_connected"
    }
  }, [_vm._v("bluetooth_connected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bluetooth_disabled"
    }
  }, [_vm._v("bluetooth_disabled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bluetooth_searching"
    }
  }, [_vm._v("bluetooth_searching")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "blur_circular"
    }
  }, [_vm._v("blur_circular")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "blur_linear"
    }
  }, [_vm._v("blur_linear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "blur_off"
    }
  }, [_vm._v("blur_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "blur_on"
    }
  }, [_vm._v("blur_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "book"
    }
  }, [_vm._v("book")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bookmark"
    }
  }, [_vm._v("bookmark")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bookmark_border"
    }
  }, [_vm._v("bookmark_border")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_all"
    }
  }, [_vm._v("border_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_bottom"
    }
  }, [_vm._v("border_bottom")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_clear"
    }
  }, [_vm._v("border_clear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_color"
    }
  }, [_vm._v("border_color")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_horizontal"
    }
  }, [_vm._v("border_horizontal")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_inner"
    }
  }, [_vm._v("border_inner")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_left"
    }
  }, [_vm._v("border_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_outer"
    }
  }, [_vm._v("border_outer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_right"
    }
  }, [_vm._v("border_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_style"
    }
  }, [_vm._v("border_style")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_top"
    }
  }, [_vm._v("border_top")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "border_vertical"
    }
  }, [_vm._v("border_vertical")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "branding_watermark"
    }
  }, [_vm._v("branding_watermark")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_1"
    }
  }, [_vm._v("brightness_1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_2"
    }
  }, [_vm._v("brightness_2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_3"
    }
  }, [_vm._v("brightness_3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_4"
    }
  }, [_vm._v("brightness_4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_5"
    }
  }, [_vm._v("brightness_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_6"
    }
  }, [_vm._v("brightness_6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_7"
    }
  }, [_vm._v("brightness_7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_auto"
    }
  }, [_vm._v("brightness_auto")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_high"
    }
  }, [_vm._v("brightness_high")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_low"
    }
  }, [_vm._v("brightness_low")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brightness_medium"
    }
  }, [_vm._v("brightness_medium")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "broken_image"
    }
  }, [_vm._v("broken_image")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "brush"
    }
  }, [_vm._v("brush")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bubble_chart"
    }
  }, [_vm._v("bubble_chart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "bug_report"
    }
  }, [_vm._v("bug_report")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "build"
    }
  }, [_vm._v("build")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "burst_mode"
    }
  }, [_vm._v("burst_mode")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "business"
    }
  }, [_vm._v("business")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "business_center"
    }
  }, [_vm._v("business_center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cached"
    }
  }, [_vm._v("cached")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cake"
    }
  }, [_vm._v("cake")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call"
    }
  }, [_vm._v("call")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_end"
    }
  }, [_vm._v("call_end")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_made"
    }
  }, [_vm._v("call_made")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_merge"
    }
  }, [_vm._v("call_merge")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_missed"
    }
  }, [_vm._v("call_missed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_missed_outgoing"
    }
  }, [_vm._v("call_missed_outgoing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_received"
    }
  }, [_vm._v("call_received")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_split"
    }
  }, [_vm._v("call_split")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "call_to_action"
    }
  }, [_vm._v("call_to_action")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera"
    }
  }, [_vm._v("camera")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera_alt"
    }
  }, [_vm._v("camera_alt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera_enhance"
    }
  }, [_vm._v("camera_enhance")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera_front"
    }
  }, [_vm._v("camera_front")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera_rear"
    }
  }, [_vm._v("camera_rear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "camera_roll"
    }
  }, [_vm._v("camera_roll")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cancel"
    }
  }, [_vm._v("cancel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "card_giftcard"
    }
  }, [_vm._v("card_giftcard")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "card_membership"
    }
  }, [_vm._v("card_membership")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "card_travel"
    }
  }, [_vm._v("card_travel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "casino"
    }
  }, [_vm._v("casino")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cast"
    }
  }, [_vm._v("cast")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cast_connected"
    }
  }, [_vm._v("cast_connected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "center_focus_strong"
    }
  }, [_vm._v("center_focus_strong")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "center_focus_weak"
    }
  }, [_vm._v("center_focus_weak")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "change_history"
    }
  }, [_vm._v("change_history")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chat"
    }
  }, [_vm._v("chat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chat_bubble"
    }
  }, [_vm._v("chat_bubble")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chat_bubble_outline"
    }
  }, [_vm._v("chat_bubble_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check"
    }
  }, [_vm._v("check")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check_box"
    }
  }, [_vm._v("check_box")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check_box_outline_blank"
    }
  }, [_vm._v("check_box_outline_blank")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "check_circle"
    }
  }, [_vm._v("check_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chevron_left"
    }
  }, [_vm._v("chevron_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chevron_right"
    }
  }, [_vm._v("chevron_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "child_care"
    }
  }, [_vm._v("child_care")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "child_friendly"
    }
  }, [_vm._v("child_friendly")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "chrome_reader_mode"
    }
  }, [_vm._v("chrome_reader_mode")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "class"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "clear"
    }
  }, [_vm._v("clear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "clear_all"
    }
  }, [_vm._v("clear_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "close"
    }
  }, [_vm._v("close")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "closed_caption"
    }
  }, [_vm._v("closed_caption")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud"
    }
  }, [_vm._v("cloud")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_circle"
    }
  }, [_vm._v("cloud_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_done"
    }
  }, [_vm._v("cloud_done")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_download"
    }
  }, [_vm._v("cloud_download")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_off"
    }
  }, [_vm._v("cloud_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_queue"
    }
  }, [_vm._v("cloud_queue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "cloud_upload"
    }
  }, [_vm._v("cloud_upload")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "code"
    }
  }, [_vm._v("code")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "collections"
    }
  }, [_vm._v("collections")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "collections_bookmark"
    }
  }, [_vm._v("collections_bookmark")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "color_lens"
    }
  }, [_vm._v("color_lens")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "colorize"
    }
  }, [_vm._v("colorize")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "comment"
    }
  }, [_vm._v("comment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "compare"
    }
  }, [_vm._v("compare")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "compare_arrows"
    }
  }, [_vm._v("compare_arrows")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "computer"
    }
  }, [_vm._v("computer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "confirmation_number"
    }
  }, [_vm._v("confirmation_number")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "contact_mail"
    }
  }, [_vm._v("contact_mail")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "contact_phone"
    }
  }, [_vm._v("contact_phone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "contacts"
    }
  }, [_vm._v("contacts")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "content_copy"
    }
  }, [_vm._v("content_copy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "content_cut"
    }
  }, [_vm._v("content_cut")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "content_paste"
    }
  }, [_vm._v("content_paste")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "control_point"
    }
  }, [_vm._v("control_point")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "control_point_duplicate"
    }
  }, [_vm._v("control_point_duplicate")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "copyright"
    }
  }, [_vm._v("copyright")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "create"
    }
  }, [_vm._v("create")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "create_new_folder"
    }
  }, [_vm._v("create_new_folder")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "credit_card"
    }
  }, [_vm._v("credit_card")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop"
    }
  }, [_vm._v("crop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_16_9"
    }
  }, [_vm._v("crop_16_9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_3_2"
    }
  }, [_vm._v("crop_3_2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_5_4"
    }
  }, [_vm._v("crop_5_4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_7_5"
    }
  }, [_vm._v("crop_7_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_din"
    }
  }, [_vm._v("crop_din")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_free"
    }
  }, [_vm._v("crop_free")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_landscape"
    }
  }, [_vm._v("crop_landscape")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_original"
    }
  }, [_vm._v("crop_original")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_portrait"
    }
  }, [_vm._v("crop_portrait")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_rotate"
    }
  }, [_vm._v("crop_rotate")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "crop_square"
    }
  }, [_vm._v("crop_square")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dashboard"
    }
  }, [_vm._v("dashboard")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "data_usage"
    }
  }, [_vm._v("data_usage")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "date_range"
    }
  }, [_vm._v("date_range")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dehaze"
    }
  }, [_vm._v("dehaze")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "delete"
    }
  }, [_vm._v("delete")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "delete_forever"
    }
  }, [_vm._v("delete_forever")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "delete_sweep"
    }
  }, [_vm._v("delete_sweep")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "description"
    }
  }, [_vm._v("description")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "desktop_mac"
    }
  }, [_vm._v("desktop_mac")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "desktop_windows"
    }
  }, [_vm._v("desktop_windows")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "details"
    }
  }, [_vm._v("details")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "developer_board"
    }
  }, [_vm._v("developer_board")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "developer_mode"
    }
  }, [_vm._v("developer_mode")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "device_hub"
    }
  }, [_vm._v("device_hub")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "devices"
    }
  }, [_vm._v("devices")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "devices_other"
    }
  }, [_vm._v("devices_other")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dialer_sip"
    }
  }, [_vm._v("dialer_sip")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dialpad"
    }
  }, [_vm._v("dialpad")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions"
    }
  }, [_vm._v("directions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_bike"
    }
  }, [_vm._v("directions_bike")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_boat"
    }
  }, [_vm._v("directions_boat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_bus"
    }
  }, [_vm._v("directions_bus")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_car"
    }
  }, [_vm._v("directions_car")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_railway"
    }
  }, [_vm._v("directions_railway")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_run"
    }
  }, [_vm._v("directions_run")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_subway"
    }
  }, [_vm._v("directions_subway")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_transit"
    }
  }, [_vm._v("directions_transit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "directions_walk"
    }
  }, [_vm._v("directions_walk")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "disc_full"
    }
  }, [_vm._v("disc_full")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dns"
    }
  }, [_vm._v("dns")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "do_not_disturb"
    }
  }, [_vm._v("do_not_disturb")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "do_not_disturb_alt"
    }
  }, [_vm._v("do_not_disturb_alt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "do_not_disturb_off"
    }
  }, [_vm._v("do_not_disturb_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "do_not_disturb_on"
    }
  }, [_vm._v("do_not_disturb_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dock"
    }
  }, [_vm._v("dock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "domain"
    }
  }, [_vm._v("domain")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "done"
    }
  }, [_vm._v("done")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "done_all"
    }
  }, [_vm._v("done_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "donut_large"
    }
  }, [_vm._v("donut_large")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "donut_small"
    }
  }, [_vm._v("donut_small")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "drafts"
    }
  }, [_vm._v("drafts")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "drag_handle"
    }
  }, [_vm._v("drag_handle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "drive_eta"
    }
  }, [_vm._v("drive_eta")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "dvr"
    }
  }, [_vm._v("dvr")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "edit"
    }
  }, [_vm._v("edit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "edit_location"
    }
  }, [_vm._v("edit_location")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "eject"
    }
  }, [_vm._v("eject")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "email"
    }
  }, [_vm._v("email")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "enhanced_encryption"
    }
  }, [_vm._v("enhanced_encryption")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "equalizer"
    }
  }, [_vm._v("equalizer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "error"
    }
  }, [_vm._v("error")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "error_outline"
    }
  }, [_vm._v("error_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "euro_symbol"
    }
  }, [_vm._v("euro_symbol")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ev_station"
    }
  }, [_vm._v("ev_station")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "event"
    }
  }, [_vm._v("event")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "event_available"
    }
  }, [_vm._v("event_available")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "event_busy"
    }
  }, [_vm._v("event_busy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "event_note"
    }
  }, [_vm._v("event_note")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "event_seat"
    }
  }, [_vm._v("event_seat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exit_to_app"
    }
  }, [_vm._v("exit_to_app")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "expand_less"
    }
  }, [_vm._v("expand_less")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "expand_more"
    }
  }, [_vm._v("expand_more")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "explicit"
    }
  }, [_vm._v("explicit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "explore"
    }
  }, [_vm._v("explore")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure"
    }
  }, [_vm._v("exposure")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure_neg_1"
    }
  }, [_vm._v("exposure_neg_1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure_neg_2"
    }
  }, [_vm._v("exposure_neg_2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure_plus_1"
    }
  }, [_vm._v("exposure_plus_1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure_plus_2"
    }
  }, [_vm._v("exposure_plus_2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "exposure_zero"
    }
  }, [_vm._v("exposure_zero")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "extension"
    }
  }, [_vm._v("extension")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "face"
    }
  }, [_vm._v("face")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fast_forward"
    }
  }, [_vm._v("fast_forward")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fast_rewind"
    }
  }, [_vm._v("fast_rewind")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "favorite"
    }
  }, [_vm._v("favorite")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "favorite_border"
    }
  }, [_vm._v("favorite_border")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "featured_play_list"
    }
  }, [_vm._v("featured_play_list")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "featured_video"
    }
  }, [_vm._v("featured_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "feedback"
    }
  }, [_vm._v("feedback")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fiber_dvr"
    }
  }, [_vm._v("fiber_dvr")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fiber_manual_record"
    }
  }, [_vm._v("fiber_manual_record")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fiber_new"
    }
  }, [_vm._v("fiber_new")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fiber_pin"
    }
  }, [_vm._v("fiber_pin")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fiber_smart_record"
    }
  }, [_vm._v("fiber_smart_record")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "file_download"
    }
  }, [_vm._v("file_download")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "file_upload"
    }
  }, [_vm._v("file_upload")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter"
    }
  }, [_vm._v("filter")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_1"
    }
  }, [_vm._v("filter_1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_2"
    }
  }, [_vm._v("filter_2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_3"
    }
  }, [_vm._v("filter_3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_4"
    }
  }, [_vm._v("filter_4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_5"
    }
  }, [_vm._v("filter_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_6"
    }
  }, [_vm._v("filter_6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_7"
    }
  }, [_vm._v("filter_7")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_8"
    }
  }, [_vm._v("filter_8")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_9"
    }
  }, [_vm._v("filter_9")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_9_plus"
    }
  }, [_vm._v("filter_9_plus")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_b_and_w"
    }
  }, [_vm._v("filter_b_and_w")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_center_focus"
    }
  }, [_vm._v("filter_center_focus")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_drama"
    }
  }, [_vm._v("filter_drama")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_frames"
    }
  }, [_vm._v("filter_frames")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_hdr"
    }
  }, [_vm._v("filter_hdr")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_list"
    }
  }, [_vm._v("filter_list")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_none"
    }
  }, [_vm._v("filter_none")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_tilt_shift"
    }
  }, [_vm._v("filter_tilt_shift")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "filter_vintage"
    }
  }, [_vm._v("filter_vintage")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "find_in_page"
    }
  }, [_vm._v("find_in_page")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "find_replace"
    }
  }, [_vm._v("find_replace")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fingerprint"
    }
  }, [_vm._v("fingerprint")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "first_page"
    }
  }, [_vm._v("first_page")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fitness_center"
    }
  }, [_vm._v("fitness_center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flag"
    }
  }, [_vm._v("flag")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flare"
    }
  }, [_vm._v("flare")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flash_auto"
    }
  }, [_vm._v("flash_auto")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flash_off"
    }
  }, [_vm._v("flash_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flash_on"
    }
  }, [_vm._v("flash_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flight"
    }
  }, [_vm._v("flight")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flight_land"
    }
  }, [_vm._v("flight_land")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flight_takeoff"
    }
  }, [_vm._v("flight_takeoff")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flip"
    }
  }, [_vm._v("flip")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flip_to_back"
    }
  }, [_vm._v("flip_to_back")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "flip_to_front"
    }
  }, [_vm._v("flip_to_front")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "folder"
    }
  }, [_vm._v("folder")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "folder_open"
    }
  }, [_vm._v("folder_open")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "folder_shared"
    }
  }, [_vm._v("folder_shared")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "folder_special"
    }
  }, [_vm._v("folder_special")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "font_download"
    }
  }, [_vm._v("font_download")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_align_center"
    }
  }, [_vm._v("format_align_center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_align_justify"
    }
  }, [_vm._v("format_align_justify")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_align_left"
    }
  }, [_vm._v("format_align_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_align_right"
    }
  }, [_vm._v("format_align_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_bold"
    }
  }, [_vm._v("format_bold")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_clear"
    }
  }, [_vm._v("format_clear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_color_fill"
    }
  }, [_vm._v("format_color_fill")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_color_reset"
    }
  }, [_vm._v("format_color_reset")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_color_text"
    }
  }, [_vm._v("format_color_text")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_indent_decrease"
    }
  }, [_vm._v("format_indent_decrease")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_indent_increase"
    }
  }, [_vm._v("format_indent_increase")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_italic"
    }
  }, [_vm._v("format_italic")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_line_spacing"
    }
  }, [_vm._v("format_line_spacing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_list_bulleted"
    }
  }, [_vm._v("format_list_bulleted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_list_numbered"
    }
  }, [_vm._v("format_list_numbered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_paint"
    }
  }, [_vm._v("format_paint")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_quote"
    }
  }, [_vm._v("format_quote")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_shapes"
    }
  }, [_vm._v("format_shapes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_size"
    }
  }, [_vm._v("format_size")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_strikethrough"
    }
  }, [_vm._v("format_strikethrough")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_textdirection_l_to_r"
    }
  }, [_vm._v("format_textdirection_l_to_r")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_textdirection_r_to_l"
    }
  }, [_vm._v("format_textdirection_r_to_l")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "format_underlined"
    }
  }, [_vm._v("format_underlined")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "forum"
    }
  }, [_vm._v("forum")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "forward"
    }
  }, [_vm._v("forward")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "forward_10"
    }
  }, [_vm._v("forward_10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "forward_30"
    }
  }, [_vm._v("forward_30")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "forward_5"
    }
  }, [_vm._v("forward_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "free_breakfast"
    }
  }, [_vm._v("free_breakfast")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fullscreen"
    }
  }, [_vm._v("fullscreen")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "fullscreen_exit"
    }
  }, [_vm._v("fullscreen_exit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "functions"
    }
  }, [_vm._v("functions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "g_translate"
    }
  }, [_vm._v("g_translate")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gamepad"
    }
  }, [_vm._v("gamepad")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "games"
    }
  }, [_vm._v("games")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gavel"
    }
  }, [_vm._v("gavel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gesture"
    }
  }, [_vm._v("gesture")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "get_app"
    }
  }, [_vm._v("get_app")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gif"
    }
  }, [_vm._v("gif")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "golf_course"
    }
  }, [_vm._v("golf_course")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gps_fixed"
    }
  }, [_vm._v("gps_fixed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gps_not_fixed"
    }
  }, [_vm._v("gps_not_fixed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gps_off"
    }
  }, [_vm._v("gps_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "grade"
    }
  }, [_vm._v("grade")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gradient"
    }
  }, [_vm._v("gradient")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "grain"
    }
  }, [_vm._v("grain")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "graphic_eq"
    }
  }, [_vm._v("graphic_eq")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "grid_off"
    }
  }, [_vm._v("grid_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "grid_on"
    }
  }, [_vm._v("grid_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "group"
    }
  }, [_vm._v("group")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "group_add"
    }
  }, [_vm._v("group_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "group_work"
    }
  }, [_vm._v("group_work")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hd"
    }
  }, [_vm._v("hd")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hdr_off"
    }
  }, [_vm._v("hdr_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hdr_on"
    }
  }, [_vm._v("hdr_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hdr_strong"
    }
  }, [_vm._v("hdr_strong")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hdr_weak"
    }
  }, [_vm._v("hdr_weak")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "headset"
    }
  }, [_vm._v("headset")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "headset_mic"
    }
  }, [_vm._v("headset_mic")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "healing"
    }
  }, [_vm._v("healing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hearing"
    }
  }, [_vm._v("hearing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "help"
    }
  }, [_vm._v("help")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "help_outline"
    }
  }, [_vm._v("help_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "high_quality"
    }
  }, [_vm._v("high_quality")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "highlight"
    }
  }, [_vm._v("highlight")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "highlight_off"
    }
  }, [_vm._v("highlight_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "history"
    }
  }, [_vm._v("history")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "home"
    }
  }, [_vm._v("home")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hot_tub"
    }
  }, [_vm._v("hot_tub")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hotel"
    }
  }, [_vm._v("hotel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hourglass_empty"
    }
  }, [_vm._v("hourglass_empty")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "hourglass_full"
    }
  }, [_vm._v("hourglass_full")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "http"
    }
  }, [_vm._v("http")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "https"
    }
  }, [_vm._v("https")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "image"
    }
  }, [_vm._v("image")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "image_aspect_ratio"
    }
  }, [_vm._v("image_aspect_ratio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "import_contacts"
    }
  }, [_vm._v("import_contacts")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "import_export"
    }
  }, [_vm._v("import_export")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "important_devices"
    }
  }, [_vm._v("important_devices")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "inbox"
    }
  }, [_vm._v("inbox")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "indeterminate_check_box"
    }
  }, [_vm._v("indeterminate_check_box")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "info"
    }
  }, [_vm._v("info")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "info_outline"
    }
  }, [_vm._v("info_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "input"
    }
  }, [_vm._v("input")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_chart"
    }
  }, [_vm._v("insert_chart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_comment"
    }
  }, [_vm._v("insert_comment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_drive_file"
    }
  }, [_vm._v("insert_drive_file")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_emoticon"
    }
  }, [_vm._v("insert_emoticon")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_invitation"
    }
  }, [_vm._v("insert_invitation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_link"
    }
  }, [_vm._v("insert_link")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "insert_photo"
    }
  }, [_vm._v("insert_photo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "invert_colors"
    }
  }, [_vm._v("invert_colors")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "invert_colors_off"
    }
  }, [_vm._v("invert_colors_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "iso"
    }
  }, [_vm._v("iso")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard"
    }
  }, [_vm._v("keyboard")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_arrow_down"
    }
  }, [_vm._v("keyboard_arrow_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_arrow_left"
    }
  }, [_vm._v("keyboard_arrow_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_arrow_right"
    }
  }, [_vm._v("keyboard_arrow_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_arrow_up"
    }
  }, [_vm._v("keyboard_arrow_up")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_backspace"
    }
  }, [_vm._v("keyboard_backspace")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_capslock"
    }
  }, [_vm._v("keyboard_capslock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_hide"
    }
  }, [_vm._v("keyboard_hide")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_return"
    }
  }, [_vm._v("keyboard_return")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_tab"
    }
  }, [_vm._v("keyboard_tab")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "keyboard_voice"
    }
  }, [_vm._v("keyboard_voice")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "kitchen"
    }
  }, [_vm._v("kitchen")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "label"
    }
  }, [_vm._v("label")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "label_outline"
    }
  }, [_vm._v("label_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "landscape"
    }
  }, [_vm._v("landscape")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "language"
    }
  }, [_vm._v("language")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "laptop"
    }
  }, [_vm._v("laptop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "laptop_chromebook"
    }
  }, [_vm._v("laptop_chromebook")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "laptop_mac"
    }
  }, [_vm._v("laptop_mac")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "laptop_windows"
    }
  }, [_vm._v("laptop_windows")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "last_page"
    }
  }, [_vm._v("last_page")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "launch"
    }
  }, [_vm._v("launch")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "layers"
    }
  }, [_vm._v("layers")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "layers_clear"
    }
  }, [_vm._v("layers_clear")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "leak_add"
    }
  }, [_vm._v("leak_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "leak_remove"
    }
  }, [_vm._v("leak_remove")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "lens"
    }
  }, [_vm._v("lens")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "library_add"
    }
  }, [_vm._v("library_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "library_books"
    }
  }, [_vm._v("library_books")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "library_music"
    }
  }, [_vm._v("library_music")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "lightbulb_outline"
    }
  }, [_vm._v("lightbulb_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "line_style"
    }
  }, [_vm._v("line_style")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "line_weight"
    }
  }, [_vm._v("line_weight")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "linear_scale"
    }
  }, [_vm._v("linear_scale")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "link"
    }
  }, [_vm._v("link")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "linked_camera"
    }
  }, [_vm._v("linked_camera")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "list"
    }
  }, [_vm._v("list")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "live_help"
    }
  }, [_vm._v("live_help")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "live_tv"
    }
  }, [_vm._v("live_tv")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_activity"
    }
  }, [_vm._v("local_activity")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_airport"
    }
  }, [_vm._v("local_airport")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_atm"
    }
  }, [_vm._v("local_atm")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_bar"
    }
  }, [_vm._v("local_bar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_cafe"
    }
  }, [_vm._v("local_cafe")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_car_wash"
    }
  }, [_vm._v("local_car_wash")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_convenience_store"
    }
  }, [_vm._v("local_convenience_store")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_dining"
    }
  }, [_vm._v("local_dining")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_drink"
    }
  }, [_vm._v("local_drink")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_florist"
    }
  }, [_vm._v("local_florist")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_gas_station"
    }
  }, [_vm._v("local_gas_station")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_grocery_store"
    }
  }, [_vm._v("local_grocery_store")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_hospital"
    }
  }, [_vm._v("local_hospital")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_hotel"
    }
  }, [_vm._v("local_hotel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_laundry_service"
    }
  }, [_vm._v("local_laundry_service")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_library"
    }
  }, [_vm._v("local_library")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_mall"
    }
  }, [_vm._v("local_mall")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_movies"
    }
  }, [_vm._v("local_movies")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_offer"
    }
  }, [_vm._v("local_offer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_parking"
    }
  }, [_vm._v("local_parking")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_pharmacy"
    }
  }, [_vm._v("local_pharmacy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_phone"
    }
  }, [_vm._v("local_phone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_pizza"
    }
  }, [_vm._v("local_pizza")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_play"
    }
  }, [_vm._v("local_play")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_post_office"
    }
  }, [_vm._v("local_post_office")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_printshop"
    }
  }, [_vm._v("local_printshop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_see"
    }
  }, [_vm._v("local_see")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_shipping"
    }
  }, [_vm._v("local_shipping")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "local_taxi"
    }
  }, [_vm._v("local_taxi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "location_city"
    }
  }, [_vm._v("location_city")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "location_disabled"
    }
  }, [_vm._v("location_disabled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "location_off"
    }
  }, [_vm._v("location_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "location_on"
    }
  }, [_vm._v("location_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "location_searching"
    }
  }, [_vm._v("location_searching")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "lock"
    }
  }, [_vm._v("lock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "lock_open"
    }
  }, [_vm._v("lock_open")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "lock_outline"
    }
  }, [_vm._v("lock_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks"
    }
  }, [_vm._v("looks")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_3"
    }
  }, [_vm._v("looks_3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_4"
    }
  }, [_vm._v("looks_4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_5"
    }
  }, [_vm._v("looks_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_6"
    }
  }, [_vm._v("looks_6")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_one"
    }
  }, [_vm._v("looks_one")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "looks_two"
    }
  }, [_vm._v("looks_two")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "loop"
    }
  }, [_vm._v("loop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "loupe"
    }
  }, [_vm._v("loupe")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "low_priority"
    }
  }, [_vm._v("low_priority")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "loyalty"
    }
  }, [_vm._v("loyalty")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mail"
    }
  }, [_vm._v("mail")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mail_outline"
    }
  }, [_vm._v("mail_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "map"
    }
  }, [_vm._v("map")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "markunread"
    }
  }, [_vm._v("markunread")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "markunread_mailbox"
    }
  }, [_vm._v("markunread_mailbox")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "memory"
    }
  }, [_vm._v("memory")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "menu"
    }
  }, [_vm._v("menu")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "merge_type"
    }
  }, [_vm._v("merge_type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "message"
    }
  }, [_vm._v("message")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mic"
    }
  }, [_vm._v("mic")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mic_none"
    }
  }, [_vm._v("mic_none")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mic_off"
    }
  }, [_vm._v("mic_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mms"
    }
  }, [_vm._v("mms")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mode_comment"
    }
  }, [_vm._v("mode_comment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mode_edit"
    }
  }, [_vm._v("mode_edit")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "monetization_on"
    }
  }, [_vm._v("monetization_on")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "money_off"
    }
  }, [_vm._v("money_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "monochrome_photos"
    }
  }, [_vm._v("monochrome_photos")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mood"
    }
  }, [_vm._v("mood")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mood_bad"
    }
  }, [_vm._v("mood_bad")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "more"
    }
  }, [_vm._v("more")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "more_horiz"
    }
  }, [_vm._v("more_horiz")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "more_vert"
    }
  }, [_vm._v("more_vert")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "motorcycle"
    }
  }, [_vm._v("motorcycle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "mouse"
    }
  }, [_vm._v("mouse")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "move_to_inbox"
    }
  }, [_vm._v("move_to_inbox")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "movie"
    }
  }, [_vm._v("movie")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "movie_creation"
    }
  }, [_vm._v("movie_creation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "movie_filter"
    }
  }, [_vm._v("movie_filter")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "multiline_chart"
    }
  }, [_vm._v("multiline_chart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "music_note"
    }
  }, [_vm._v("music_note")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "music_video"
    }
  }, [_vm._v("music_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "my_location"
    }
  }, [_vm._v("my_location")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nature"
    }
  }, [_vm._v("nature")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nature_people"
    }
  }, [_vm._v("nature_people")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "navigate_before"
    }
  }, [_vm._v("navigate_before")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "navigate_next"
    }
  }, [_vm._v("navigate_next")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "navigation"
    }
  }, [_vm._v("navigation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "near_me"
    }
  }, [_vm._v("near_me")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "network_cell"
    }
  }, [_vm._v("network_cell")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "network_check"
    }
  }, [_vm._v("network_check")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "network_locked"
    }
  }, [_vm._v("network_locked")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "network_wifi"
    }
  }, [_vm._v("network_wifi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "new_releases"
    }
  }, [_vm._v("new_releases")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "next_week"
    }
  }, [_vm._v("next_week")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "nfc"
    }
  }, [_vm._v("nfc")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "no_encryption"
    }
  }, [_vm._v("no_encryption")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "no_sim"
    }
  }, [_vm._v("no_sim")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "not_interested"
    }
  }, [_vm._v("not_interested")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "note"
    }
  }, [_vm._v("note")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "note_add"
    }
  }, [_vm._v("note_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notifications"
    }
  }, [_vm._v("notifications")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notifications_active"
    }
  }, [_vm._v("notifications_active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notifications_none"
    }
  }, [_vm._v("notifications_none")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notifications_off"
    }
  }, [_vm._v("notifications_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "notifications_paused"
    }
  }, [_vm._v("notifications_paused")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "offline_pin"
    }
  }, [_vm._v("offline_pin")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ondemand_video"
    }
  }, [_vm._v("ondemand_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "opacity"
    }
  }, [_vm._v("opacity")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "open_in_browser"
    }
  }, [_vm._v("open_in_browser")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "open_in_new"
    }
  }, [_vm._v("open_in_new")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "open_with"
    }
  }, [_vm._v("open_with")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pages"
    }
  }, [_vm._v("pages")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pageview"
    }
  }, [_vm._v("pageview")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "palette"
    }
  }, [_vm._v("palette")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pan_tool"
    }
  }, [_vm._v("pan_tool")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "panorama"
    }
  }, [_vm._v("panorama")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "panorama_fish_eye"
    }
  }, [_vm._v("panorama_fish_eye")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "panorama_horizontal"
    }
  }, [_vm._v("panorama_horizontal")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "panorama_vertical"
    }
  }, [_vm._v("panorama_vertical")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "panorama_wide_angle"
    }
  }, [_vm._v("panorama_wide_angle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "party_mode"
    }
  }, [_vm._v("party_mode")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pause"
    }
  }, [_vm._v("pause")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pause_circle_filled"
    }
  }, [_vm._v("pause_circle_filled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pause_circle_outline"
    }
  }, [_vm._v("pause_circle_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "payment"
    }
  }, [_vm._v("payment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "people"
    }
  }, [_vm._v("people")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "people_outline"
    }
  }, [_vm._v("people_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_camera_mic"
    }
  }, [_vm._v("perm_camera_mic")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_contact_calendar"
    }
  }, [_vm._v("perm_contact_calendar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_data_setting"
    }
  }, [_vm._v("perm_data_setting")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_device_information"
    }
  }, [_vm._v("perm_device_information")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_identity"
    }
  }, [_vm._v("perm_identity")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_media"
    }
  }, [_vm._v("perm_media")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_phone_msg"
    }
  }, [_vm._v("perm_phone_msg")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "perm_scan_wifi"
    }
  }, [_vm._v("perm_scan_wifi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "person"
    }
  }, [_vm._v("person")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "person_add"
    }
  }, [_vm._v("person_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "person_outline"
    }
  }, [_vm._v("person_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "person_pin"
    }
  }, [_vm._v("person_pin")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "person_pin_circle"
    }
  }, [_vm._v("person_pin_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "personal_video"
    }
  }, [_vm._v("personal_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pets"
    }
  }, [_vm._v("pets")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone"
    }
  }, [_vm._v("phone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_android"
    }
  }, [_vm._v("phone_android")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_bluetooth_speaker"
    }
  }, [_vm._v("phone_bluetooth_speaker")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_forwarded"
    }
  }, [_vm._v("phone_forwarded")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_in_talk"
    }
  }, [_vm._v("phone_in_talk")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_iphone"
    }
  }, [_vm._v("phone_iphone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_locked"
    }
  }, [_vm._v("phone_locked")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_missed"
    }
  }, [_vm._v("phone_missed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phone_paused"
    }
  }, [_vm._v("phone_paused")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink"
    }
  }, [_vm._v("phonelink")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink_erase"
    }
  }, [_vm._v("phonelink_erase")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink_lock"
    }
  }, [_vm._v("phonelink_lock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink_off"
    }
  }, [_vm._v("phonelink_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink_ring"
    }
  }, [_vm._v("phonelink_ring")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "phonelink_setup"
    }
  }, [_vm._v("phonelink_setup")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo"
    }
  }, [_vm._v("photo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_album"
    }
  }, [_vm._v("photo_album")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_camera"
    }
  }, [_vm._v("photo_camera")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_filter"
    }
  }, [_vm._v("photo_filter")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_library"
    }
  }, [_vm._v("photo_library")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_size_select_actual"
    }
  }, [_vm._v("photo_size_select_actual")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_size_select_large"
    }
  }, [_vm._v("photo_size_select_large")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "photo_size_select_small"
    }
  }, [_vm._v("photo_size_select_small")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "picture_as_pdf"
    }
  }, [_vm._v("picture_as_pdf")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "picture_in_picture"
    }
  }, [_vm._v("picture_in_picture")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "picture_in_picture_alt"
    }
  }, [_vm._v("picture_in_picture_alt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pie_chart"
    }
  }, [_vm._v("pie_chart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pie_chart_outlined"
    }
  }, [_vm._v("pie_chart_outlined")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pin_drop"
    }
  }, [_vm._v("pin_drop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "place"
    }
  }, [_vm._v("place")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "play_arrow"
    }
  }, [_vm._v("play_arrow")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "play_circle_filled"
    }
  }, [_vm._v("play_circle_filled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "play_circle_outline"
    }
  }, [_vm._v("play_circle_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "play_for_work"
    }
  }, [_vm._v("play_for_work")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "playlist_add"
    }
  }, [_vm._v("playlist_add")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "playlist_add_check"
    }
  }, [_vm._v("playlist_add_check")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "playlist_play"
    }
  }, [_vm._v("playlist_play")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "plus_one"
    }
  }, [_vm._v("plus_one")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "poll"
    }
  }, [_vm._v("poll")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "polymer"
    }
  }, [_vm._v("polymer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pool"
    }
  }, [_vm._v("pool")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "portable_wifi_off"
    }
  }, [_vm._v("portable_wifi_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "portrait"
    }
  }, [_vm._v("portrait")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "power"
    }
  }, [_vm._v("power")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "power_input"
    }
  }, [_vm._v("power_input")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "power_settings_new"
    }
  }, [_vm._v("power_settings_new")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "pregnant_woman"
    }
  }, [_vm._v("pregnant_woman")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "present_to_all"
    }
  }, [_vm._v("present_to_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "print"
    }
  }, [_vm._v("print")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "priority_high"
    }
  }, [_vm._v("priority_high")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "public"
    }
  }, [_vm._v("public")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "publish"
    }
  }, [_vm._v("publish")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "query_builder"
    }
  }, [_vm._v("query_builder")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "question_answer"
    }
  }, [_vm._v("question_answer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "queue"
    }
  }, [_vm._v("queue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "queue_music"
    }
  }, [_vm._v("queue_music")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "queue_play_next"
    }
  }, [_vm._v("queue_play_next")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "radio"
    }
  }, [_vm._v("radio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "radio_button_checked"
    }
  }, [_vm._v("radio_button_checked")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "radio_button_unchecked"
    }
  }, [_vm._v("radio_button_unchecked")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rate_review"
    }
  }, [_vm._v("rate_review")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "receipt"
    }
  }, [_vm._v("receipt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "recent_actors"
    }
  }, [_vm._v("recent_actors")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "record_voice_over"
    }
  }, [_vm._v("record_voice_over")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "redeem"
    }
  }, [_vm._v("redeem")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "redo"
    }
  }, [_vm._v("redo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "refresh"
    }
  }, [_vm._v("refresh")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove"
    }
  }, [_vm._v("remove")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove_circle"
    }
  }, [_vm._v("remove_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove_circle_outline"
    }
  }, [_vm._v("remove_circle_outline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove_from_queue"
    }
  }, [_vm._v("remove_from_queue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove_red_eye"
    }
  }, [_vm._v("remove_red_eye")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "remove_shopping_cart"
    }
  }, [_vm._v("remove_shopping_cart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "reorder"
    }
  }, [_vm._v("reorder")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "repeat"
    }
  }, [_vm._v("repeat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "repeat_one"
    }
  }, [_vm._v("repeat_one")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "replay"
    }
  }, [_vm._v("replay")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "replay_10"
    }
  }, [_vm._v("replay_10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "replay_30"
    }
  }, [_vm._v("replay_30")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "replay_5"
    }
  }, [_vm._v("replay_5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "reply"
    }
  }, [_vm._v("reply")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "reply_all"
    }
  }, [_vm._v("reply_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "report"
    }
  }, [_vm._v("report")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "report_problem"
    }
  }, [_vm._v("report_problem")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "restaurant"
    }
  }, [_vm._v("restaurant")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "restaurant_menu"
    }
  }, [_vm._v("restaurant_menu")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "restore"
    }
  }, [_vm._v("restore")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "restore_page"
    }
  }, [_vm._v("restore_page")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ring_volume"
    }
  }, [_vm._v("ring_volume")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "room"
    }
  }, [_vm._v("room")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "room_service"
    }
  }, [_vm._v("room_service")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rotate_90_degrees_ccw"
    }
  }, [_vm._v("rotate_90_degrees_ccw")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rotate_left"
    }
  }, [_vm._v("rotate_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rotate_right"
    }
  }, [_vm._v("rotate_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rounded_corner"
    }
  }, [_vm._v("rounded_corner")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "router"
    }
  }, [_vm._v("router")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rowing"
    }
  }, [_vm._v("rowing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rss_feed"
    }
  }, [_vm._v("rss_feed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "rv_hookup"
    }
  }, [_vm._v("rv_hookup")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "satellite"
    }
  }, [_vm._v("satellite")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "save"
    }
  }, [_vm._v("save")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "scanner"
    }
  }, [_vm._v("scanner")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "schedule"
    }
  }, [_vm._v("schedule")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "school"
    }
  }, [_vm._v("school")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "screen_lock_landscape"
    }
  }, [_vm._v("screen_lock_landscape")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "screen_lock_portrait"
    }
  }, [_vm._v("screen_lock_portrait")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "screen_lock_rotation"
    }
  }, [_vm._v("screen_lock_rotation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "screen_rotation"
    }
  }, [_vm._v("screen_rotation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "screen_share"
    }
  }, [_vm._v("screen_share")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sd_card"
    }
  }, [_vm._v("sd_card")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sd_storage"
    }
  }, [_vm._v("sd_storage")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "search"
    }
  }, [_vm._v("search")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "security"
    }
  }, [_vm._v("security")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "select_all"
    }
  }, [_vm._v("select_all")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "send"
    }
  }, [_vm._v("send")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sentiment_dissatisfied"
    }
  }, [_vm._v("sentiment_dissatisfied")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sentiment_neutral"
    }
  }, [_vm._v("sentiment_neutral")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sentiment_satisfied"
    }
  }, [_vm._v("sentiment_satisfied")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sentiment_very_dissatisfied"
    }
  }, [_vm._v("sentiment_very_dissatisfied")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sentiment_very_satisfied"
    }
  }, [_vm._v("sentiment_very_satisfied")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings"
    }
  }, [_vm._v("settings")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_applications"
    }
  }, [_vm._v("settings_applications")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_backup_restore"
    }
  }, [_vm._v("settings_backup_restore")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_bluetooth"
    }
  }, [_vm._v("settings_bluetooth")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_brightness"
    }
  }, [_vm._v("settings_brightness")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_cell"
    }
  }, [_vm._v("settings_cell")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_ethernet"
    }
  }, [_vm._v("settings_ethernet")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_input_antenna"
    }
  }, [_vm._v("settings_input_antenna")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_input_component"
    }
  }, [_vm._v("settings_input_component")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_input_composite"
    }
  }, [_vm._v("settings_input_composite")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_input_hdmi"
    }
  }, [_vm._v("settings_input_hdmi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_input_svideo"
    }
  }, [_vm._v("settings_input_svideo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_overscan"
    }
  }, [_vm._v("settings_overscan")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_phone"
    }
  }, [_vm._v("settings_phone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_power"
    }
  }, [_vm._v("settings_power")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_remote"
    }
  }, [_vm._v("settings_remote")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_system_daydream"
    }
  }, [_vm._v("settings_system_daydream")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "settings_voice"
    }
  }, [_vm._v("settings_voice")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "share"
    }
  }, [_vm._v("share")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "shop"
    }
  }, [_vm._v("shop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "shop_two"
    }
  }, [_vm._v("shop_two")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "shopping_basket"
    }
  }, [_vm._v("shopping_basket")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "shopping_cart"
    }
  }, [_vm._v("shopping_cart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "short_text"
    }
  }, [_vm._v("short_text")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "show_chart"
    }
  }, [_vm._v("show_chart")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "shuffle"
    }
  }, [_vm._v("shuffle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_cellular_4_bar"
    }
  }, [_vm._v("signal_cellular_4_bar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_cellular_connected_no_internet_4_bar"
    }
  }, [_vm._v("signal_cellular_connected_no_internet_4_bar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_cellular_no_sim"
    }
  }, [_vm._v("signal_cellular_no_sim")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_cellular_null"
    }
  }, [_vm._v("signal_cellular_null")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_cellular_off"
    }
  }, [_vm._v("signal_cellular_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_wifi_4_bar"
    }
  }, [_vm._v("signal_wifi_4_bar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_wifi_4_bar_lock"
    }
  }, [_vm._v("signal_wifi_4_bar_lock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "signal_wifi_off"
    }
  }, [_vm._v("signal_wifi_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sim_card"
    }
  }, [_vm._v("sim_card")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sim_card_alert"
    }
  }, [_vm._v("sim_card_alert")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "skip_next"
    }
  }, [_vm._v("skip_next")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "skip_previous"
    }
  }, [_vm._v("skip_previous")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "slideshow"
    }
  }, [_vm._v("slideshow")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "slow_motion_video"
    }
  }, [_vm._v("slow_motion_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "smartphone"
    }
  }, [_vm._v("smartphone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "smoke_free"
    }
  }, [_vm._v("smoke_free")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "smoking_rooms"
    }
  }, [_vm._v("smoking_rooms")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sms"
    }
  }, [_vm._v("sms")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sms_failed"
    }
  }, [_vm._v("sms_failed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "snooze"
    }
  }, [_vm._v("snooze")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sort"
    }
  }, [_vm._v("sort")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sort_by_alpha"
    }
  }, [_vm._v("sort_by_alpha")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "spa"
    }
  }, [_vm._v("spa")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "space_bar"
    }
  }, [_vm._v("space_bar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "speaker"
    }
  }, [_vm._v("speaker")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "speaker_group"
    }
  }, [_vm._v("speaker_group")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "speaker_notes"
    }
  }, [_vm._v("speaker_notes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "speaker_notes_off"
    }
  }, [_vm._v("speaker_notes_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "speaker_phone"
    }
  }, [_vm._v("speaker_phone")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "spellcheck"
    }
  }, [_vm._v("spellcheck")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "star"
    }
  }, [_vm._v("star")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "star_border"
    }
  }, [_vm._v("star_border")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "star_half"
    }
  }, [_vm._v("star_half")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stars"
    }
  }, [_vm._v("stars")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stay_current_landscape"
    }
  }, [_vm._v("stay_current_landscape")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stay_current_portrait"
    }
  }, [_vm._v("stay_current_portrait")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stay_primary_landscape"
    }
  }, [_vm._v("stay_primary_landscape")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stay_primary_portrait"
    }
  }, [_vm._v("stay_primary_portrait")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stop"
    }
  }, [_vm._v("stop")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "stop_screen_share"
    }
  }, [_vm._v("stop_screen_share")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "storage"
    }
  }, [_vm._v("storage")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "store"
    }
  }, [_vm._v("store")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "store_mall_directory"
    }
  }, [_vm._v("store_mall_directory")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "straighten"
    }
  }, [_vm._v("straighten")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "streetview"
    }
  }, [_vm._v("streetview")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "strikethrough_s"
    }
  }, [_vm._v("strikethrough_s")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "style"
    }
  }, [_vm._v("style")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subdirectory_arrow_left"
    }
  }, [_vm._v("subdirectory_arrow_left")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subdirectory_arrow_right"
    }
  }, [_vm._v("subdirectory_arrow_right")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subject"
    }
  }, [_vm._v("subject")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subscriptions"
    }
  }, [_vm._v("subscriptions")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subtitles"
    }
  }, [_vm._v("subtitles")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "subway"
    }
  }, [_vm._v("subway")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "supervisor_account"
    }
  }, [_vm._v("supervisor_account")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "surround_sound"
    }
  }, [_vm._v("surround_sound")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "swap_calls"
    }
  }, [_vm._v("swap_calls")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "swap_horiz"
    }
  }, [_vm._v("swap_horiz")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "swap_vert"
    }
  }, [_vm._v("swap_vert")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "swap_vertical_circle"
    }
  }, [_vm._v("swap_vertical_circle")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "switch_camera"
    }
  }, [_vm._v("switch_camera")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "switch_video"
    }
  }, [_vm._v("switch_video")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sync"
    }
  }, [_vm._v("sync")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sync_disabled"
    }
  }, [_vm._v("sync_disabled")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "sync_problem"
    }
  }, [_vm._v("sync_problem")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "system_update"
    }
  }, [_vm._v("system_update")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "system_update_alt"
    }
  }, [_vm._v("system_update_alt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tab"
    }
  }, [_vm._v("tab")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tab_unselected"
    }
  }, [_vm._v("tab_unselected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tablet"
    }
  }, [_vm._v("tablet")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tablet_android"
    }
  }, [_vm._v("tablet_android")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tablet_mac"
    }
  }, [_vm._v("tablet_mac")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tag_faces"
    }
  }, [_vm._v("tag_faces")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tap_and_play"
    }
  }, [_vm._v("tap_and_play")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "terrain"
    }
  }, [_vm._v("terrain")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "text_fields"
    }
  }, [_vm._v("text_fields")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "text_format"
    }
  }, [_vm._v("text_format")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "textsms"
    }
  }, [_vm._v("textsms")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "texture"
    }
  }, [_vm._v("texture")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "theaters"
    }
  }, [_vm._v("theaters")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "thumb_down"
    }
  }, [_vm._v("thumb_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "thumb_up"
    }
  }, [_vm._v("thumb_up")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "thumbs_up_down"
    }
  }, [_vm._v("thumbs_up_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "time_to_leave"
    }
  }, [_vm._v("time_to_leave")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timelapse"
    }
  }, [_vm._v("timelapse")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timeline"
    }
  }, [_vm._v("timeline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timer"
    }
  }, [_vm._v("timer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timer_10"
    }
  }, [_vm._v("timer_10")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timer_3"
    }
  }, [_vm._v("timer_3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "timer_off"
    }
  }, [_vm._v("timer_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "title"
    }
  }, [_vm._v("title")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "toc"
    }
  }, [_vm._v("toc")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "today"
    }
  }, [_vm._v("today")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "toll"
    }
  }, [_vm._v("toll")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tonality"
    }
  }, [_vm._v("tonality")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "touch_app"
    }
  }, [_vm._v("touch_app")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "toys"
    }
  }, [_vm._v("toys")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "track_changes"
    }
  }, [_vm._v("track_changes")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "traffic"
    }
  }, [_vm._v("traffic")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "train"
    }
  }, [_vm._v("train")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tram"
    }
  }, [_vm._v("tram")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transfer_within_a_station"
    }
  }, [_vm._v("transfer_within_a_station")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "transform"
    }
  }, [_vm._v("transform")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "translate"
    }
  }, [_vm._v("translate")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trending_down"
    }
  }, [_vm._v("trending_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trending_flat"
    }
  }, [_vm._v("trending_flat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "trending_up"
    }
  }, [_vm._v("trending_up")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tune"
    }
  }, [_vm._v("tune")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "turned_in"
    }
  }, [_vm._v("turned_in")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "turned_in_not"
    }
  }, [_vm._v("turned_in_not")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tv"
    }
  }, [_vm._v("tv")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "unarchive"
    }
  }, [_vm._v("unarchive")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "undo"
    }
  }, [_vm._v("undo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "unfold_less"
    }
  }, [_vm._v("unfold_less")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "unfold_more"
    }
  }, [_vm._v("unfold_more")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "update"
    }
  }, [_vm._v("update")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "usb"
    }
  }, [_vm._v("usb")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "verified_user"
    }
  }, [_vm._v("verified_user")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vertical_align_bottom"
    }
  }, [_vm._v("vertical_align_bottom")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vertical_align_center"
    }
  }, [_vm._v("vertical_align_center")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vertical_align_top"
    }
  }, [_vm._v("vertical_align_top")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vibration"
    }
  }, [_vm._v("vibration")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "video_call"
    }
  }, [_vm._v("video_call")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "video_label"
    }
  }, [_vm._v("video_label")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "video_library"
    }
  }, [_vm._v("video_library")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "videocam"
    }
  }, [_vm._v("videocam")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "videocam_off"
    }
  }, [_vm._v("videocam_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "videogame_asset"
    }
  }, [_vm._v("videogame_asset")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_agenda"
    }
  }, [_vm._v("view_agenda")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_array"
    }
  }, [_vm._v("view_array")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_carousel"
    }
  }, [_vm._v("view_carousel")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_column"
    }
  }, [_vm._v("view_column")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_comfy"
    }
  }, [_vm._v("view_comfy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_compact"
    }
  }, [_vm._v("view_compact")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_day"
    }
  }, [_vm._v("view_day")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_headline"
    }
  }, [_vm._v("view_headline")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_list"
    }
  }, [_vm._v("view_list")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_module"
    }
  }, [_vm._v("view_module")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_quilt"
    }
  }, [_vm._v("view_quilt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_stream"
    }
  }, [_vm._v("view_stream")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "view_week"
    }
  }, [_vm._v("view_week")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vignette"
    }
  }, [_vm._v("vignette")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "visibility"
    }
  }, [_vm._v("visibility")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "visibility_off"
    }
  }, [_vm._v("visibility_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "voice_chat"
    }
  }, [_vm._v("voice_chat")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "voicemail"
    }
  }, [_vm._v("voicemail")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "volume_down"
    }
  }, [_vm._v("volume_down")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "volume_mute"
    }
  }, [_vm._v("volume_mute")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "volume_off"
    }
  }, [_vm._v("volume_off")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "volume_up"
    }
  }, [_vm._v("volume_up")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vpn_key"
    }
  }, [_vm._v("vpn_key")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "vpn_lock"
    }
  }, [_vm._v("vpn_lock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wallpaper"
    }
  }, [_vm._v("wallpaper")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "warning"
    }
  }, [_vm._v("warning")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "watch"
    }
  }, [_vm._v("watch")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "watch_later"
    }
  }, [_vm._v("watch_later")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wb_auto"
    }
  }, [_vm._v("wb_auto")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wb_cloudy"
    }
  }, [_vm._v("wb_cloudy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wb_incandescent"
    }
  }, [_vm._v("wb_incandescent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wb_iridescent"
    }
  }, [_vm._v("wb_iridescent")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wb_sunny"
    }
  }, [_vm._v("wb_sunny")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wc"
    }
  }, [_vm._v("wc")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "web"
    }
  }, [_vm._v("web")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "web_asset"
    }
  }, [_vm._v("web_asset")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "weekend"
    }
  }, [_vm._v("weekend")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "whatshot"
    }
  }, [_vm._v("whatshot")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "widgets"
    }
  }, [_vm._v("widgets")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wifi"
    }
  }, [_vm._v("wifi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wifi_lock"
    }
  }, [_vm._v("wifi_lock")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wifi_tethering"
    }
  }, [_vm._v("wifi_tethering")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "work"
    }
  }, [_vm._v("work")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "wrap_text"
    }
  }, [_vm._v("wrap_text")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "youtube_searched_for"
    }
  }, [_vm._v("youtube_searched_for")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "zoom_in"
    }
  }, [_vm._v("zoom_in")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "zoom_out"
    }
  }, [_vm._v("zoom_out")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "zoom_out_map"
    }
  }, [_vm._v("zoom_out_map")])]), _vm._v(" "), _c('label', {
    attrs: {
      "for": "icon"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.icon')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s('<i>' + _vm.$t('tooltips.material_icons_list') + '</i>')
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('labels.intention')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('tooltips.generic_components.intentions')))])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.add_intention
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.add_intention'))), _c('i', {
    staticClass: "mdi mdi-18px mdi-plus left"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._l((_vm.component_intentions), function(intention, index) {
    return [_c('div', {
      staticClass: "input-field col s12 m5 l5"
    }, [_c('select', {
      attrs: {
        "name": "default_intention_intention[]",
        "id": "default_intention_intention"
      }
    }, [_c('option', {
      attrs: {
        "value": "increase"
      },
      domProps: {
        "selected": intention.intention == 'increase'
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.increases')) + "\n                                        ")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "decrease"
      },
      domProps: {
        "selected": intention.intention == 'decrease'
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.decreases')) + "\n                                        ")])]), _vm._v(" "), _c('label', {
      attrs: {
        "for": "default_intention_intention"
      }
    }, [_vm._v("\n                                        " + _vm._s(_vm.$t('labels.intention')) + "\n                                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "input-field col s12 m5 l5"
    }, [_c('select', {
      attrs: {
        "name": "default_intention_type[]",
        "id": "default_intention_type"
      }
    }, _vm._l((_vm.sensorreadingTypes), function(srt, index) {
      return _c('option', {
        domProps: {
          "value": srt,
          "selected": intention.type == srt
        }
      }, [_vm._v(_vm._s(_vm.$t('labels.' + srt)) + "\n                                        ")])
    })), _vm._v(" "), _c('label', {
      attrs: {
        "for": "default_intention_type"
      }
    }, [_vm._v(_vm._s(_vm.$tc('labels.logical_sensors', 1)))])]), _vm._v(" "), _c('div', {
      staticClass: "input-field col s2 m2 l2"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.component_intentions.splice(index, 1)
        }
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])]
  })], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12 m6 l6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('labels.properties')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('tooltips.generic_components.property_templates')))])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.add_property
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.add_property')) + "\n                                        "), _c('i', {
    staticClass: "mdi mdi-18px mdi-plus left"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col s12",
    attrs: {
      "id": "generic_component_type_create_props"
    }
  }, _vm._l((_vm.component_properties), function(item, index) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "input-field col s10 m10 l10"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      attrs: {
        "type": "text",
        "name": "property_name[]"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(item, "name", $event.target.value)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "input-field col s2 m2 l2"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.component_properties.splice(index, 1)
        }
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "col s12 m6 l6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('labels.state')))]), _vm._v(" "), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.$t('tooltips.generic_components.state_templates'))
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col s12"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.add_state
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.add_state')) + "\n                                        "), _c('i', {
    staticClass: "mdi mdi-18px mdi-plus left"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "col s12",
    attrs: {
      "id": "generic_component_state_create_props"
    }
  }, _vm._l((_vm.component_states), function(item, index) {
    return _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "input-field col s2 m2 l2"
    }, [_c('input', {
      attrs: {
        "name": "default_running_state",
        "id": 'default_running_state_' + item.name,
        "type": "radio"
      },
      domProps: {
        "value": item.name,
        "checked": _vm.default_running_state == item.name
      },
      on: {
        "click": function($event) {
          _vm.default_running_state = item.name
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'default_running_state_' + item.name,
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.generic_components.type_default_running_state') + '</div>'
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "input-field col s8 m8 l8"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.name),
        expression: "item.name"
      }],
      attrs: {
        "type": "text",
        "name": "state[]"
      },
      domProps: {
        "value": (item.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(item, "name", $event.target.value)
        }
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "input-field col s2 m2 l2"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.component_states.splice(index, 1)
        }
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])])
  }))])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.next')) + "\n                                "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34c7c76d", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("\n                    " + _vm._s(_vm.$tc('labels.animals', 1)) + "\n                ")]), _vm._v(" "), _c('th', [_vm._v("\n                    " + _vm._s(_vm.$t('labels.scheduled')) + "\n                ")])])]), _vm._v(" "), _c('tbody', _vm._l((_vm.animals), function(animal) {
    return _c('tr', [_c('td', [_c('a', {
      attrs: {
        "href": '/animals/' + animal.id
      }
    }, [_vm._v(_vm._s(animal.display_name))])]), _vm._v(" "), _c('td', _vm._l((_vm.get_animal_weighing_schedules(animal.id)), function(schedule) {
      return _c('span', [_c('a', {
        attrs: {
          "href": '/animals/' + animal.id + '/weighing_schedules/' + schedule.id + '/edit'
        }
      }, [_vm._v("\n                            " + _vm._s(schedule.interval_days) + ":\n                        ")]), _vm._v(" "), _c('i', [_vm._v(_vm._s(schedule.timestamps.next) + " (" + _vm._s(schedule.due_days) + " " + _vm._s(_vm.$tc('units.days', schedule.due_days)) + ")")])])
    }))])
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-391af5f4", module.exports)
  }
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-format-vertical-align-center"
  }), _vm._v("\n            " + _vm._s(_vm.$tc("labels.logical_sensor_thresholds", 2)) + "\n        ")]), _vm._v(" "), _vm._l((_vm.logical_sensors), function(logical_sensor) {
    return [(logical_sensor.data) ? [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "card-sub-header"
    }, [_c('a', {
      attrs: {
        "href": '/logical_sensors/' + logical_sensor.data.id
      }
    }, [_c('strong', [_vm._v(_vm._s(logical_sensor.data.name))])])]), _vm._v(" "), ((_vm.threshold_list = _vm.thresholds.filter(function (t) { return t.data.logical_sensor_id === logical_sensor.data.id; })).length > 0) ? _vm._l((_vm.threshold_list), function(threshold) {
      return _c('div', {
        staticClass: "row row-no-margin"
      }, [_c('i', {
        staticClass: "mdi mdi-18px mdi-format-vertical-align-center"
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(threshold.data.timestamps.starts) + ":")]), _vm._v(" "), (threshold.data.rawvalue_lowerlimit !== null) ? _c('span', [_vm._v("\n                                " + _vm._s(_vm.$t("labels.min_short")) + ": " + _vm._s(threshold.data.rawvalue_lowerlimit) + "\n                            ")]) : _vm._e(), _vm._v(" "), (threshold.data.rawvalue_upperlimit !== null) ? _c('span', [_vm._v("\n                                " + _vm._s(_vm.$t("labels.max_short")) + ": " + _vm._s(threshold.data.rawvalue_upperlimit) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c('span', {
        staticClass: "right"
      }, [_c('a', {
        attrs: {
          "href": '/logical_sensor_thresholds/' + threshold.data.id + '/edit'
        }
      }, [_c('i', {
        staticClass: "mdi mdi-18px mdi-pencil"
      })])])])
    }) : _c('div', {
      staticClass: "row row-no-margin"
    }, [_vm._v("\n                        " + _vm._s(_vm.$t("tooltips.no_data")) + "\n                    ")])], 2), _vm._v(" "), _c('div', {
      staticClass: "card-action"
    }, [_c('a', {
      attrs: {
        "href": '/logical_sensor_thresholds/create?preset[belongsTo_type]=LogicalSensor&preset[belongsTo_id]=' + logical_sensor.data.id
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.$t("buttons.add")) + "\n                    ")])])] : _vm._e()]
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ef626cd", module.exports)
  }
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.containerClasses
  }, [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "card"
  }, [_c('form', {
    attrs: {
      "action": _vm.formUri,
      "data-method": "PUT"
    }
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('span', {
    staticClass: "activator truncate"
  }, [_c('span', [_c('i', {
    staticClass: "mdi mdi-18px mdi-tag"
  }), _vm._v("\n                            " + _vm._s(_vm.$t('labels.properties')) + "\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t('labels.bus')))]), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('tooltips.bus_type_edit_form')))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bus_type),
      expression: "bus_type"
    }],
    attrs: {
      "name": "ControlunitConnectivity::bus_type",
      "id": "bus_type"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.bus_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option'), _vm._v(" "), _c('option', {
    attrs: {
      "value": "gpio"
    }
  }, [_vm._v("GPIO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "i2c"
    }
  }, [_vm._v("I2C")])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bus_type == 'i2c'),
      expression: "bus_type == 'i2c'"
    }],
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12 m6 l4"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.i2c_address),
      expression: "i2c_address"
    }],
    attrs: {
      "type": "text",
      "id": "i2c_address",
      "placeholder": _vm.$t('labels.i2c_address'),
      "name": "ControlunitConnectivity::i2c_address"
    },
    domProps: {
      "value": (_vm.i2c_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.i2c_address = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "i2c_address"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.i2c_address')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m6 l4"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.i2c_multiplexer_address),
      expression: "i2c_multiplexer_address"
    }],
    attrs: {
      "type": "text",
      "id": "i2c_multiplexer_address",
      "placeholder": _vm.$t('labels.i2c_multiplexer_address'),
      "name": "ControlunitConnectivity::i2c_multiplexer_address"
    },
    domProps: {
      "value": (_vm.i2c_multiplexer_address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.i2c_multiplexer_address = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "i2c_multiplexer_address"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.i2c_multiplexer_address')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m6 l4"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.i2c_multiplexer_port),
      expression: "i2c_multiplexer_port"
    }],
    attrs: {
      "type": "text",
      "id": "i2c_multiplexer_port",
      "placeholder": _vm.$t('labels.i2c_multiplexer_port'),
      "name": "ControlunitConnectivity::i2c_multiplexer_port"
    },
    domProps: {
      "value": (_vm.i2c_multiplexer_port)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.i2c_multiplexer_port = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "i2c_multiplexer_port"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.i2c_multiplexer_port')))])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bus_type == 'gpio'),
      expression: "bus_type == 'gpio'"
    }],
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12 m6 l6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gpio_pin),
      expression: "gpio_pin"
    }],
    attrs: {
      "type": "text",
      "id": "gpio_pin",
      "placeholder": _vm.$t('labels.gpio_pin'),
      "name": "ControlunitConnectivity::gpio_pin"
    },
    domProps: {
      "value": (_vm.gpio_pin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.gpio_pin = $event.target.value
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "gpio_pin"
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.gpio_pin')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m6 l6 tooltipped",
    attrs: {
      "data-position": "top",
      "data-delay": "50",
      "data-html": "true",
      "data-tooltip": '<div style=\'max-width: 300px\'>' +
        _vm.$t('tooltips.gpio_default_high') + '</div>'
    }
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.gpio_default_high),
      expression: "gpio_default_high"
    }],
    attrs: {
      "id": "gpio_default_high",
      "name": "ControlunitConnectivity::gpio_default_high"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.gpio_default_high = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.no')))]), _vm._v(" "), _c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.yes')))])]), _vm._v(" "), _c('label', {
    attrs: {
      "for": "gpio_default_high"
    }
  }, [_vm._v("\n                                " + _vm._s(_vm.$t('labels.gpio_default_high')) + "\n                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "input-field col s12"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.save')) + "\n                                "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40caa194", module.exports)
  }
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 5,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'physical_sensor',
          noSort: true,
          path: 'physical_sensor.name',
          col: 1
        },
        {
          name: 'terrarium',
          noSort: true,
          path: 'terrarium.name',
          col: 2,
          class: 'hide-on-med-and-down'
        },
        {
          name: 'type',
          path: 'type',
          col: 3,
          class: 'hide-on-small-only'
        },
        {
          name: 'rawvalue',
          path: 'rawvalue',
          col: 4,
          class: 'hide-on-small-only'
        },
        {
          noSort: true,
          noFilter: true,
          col: 5,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.logical_sensors), function(logical_sensor) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-pulse"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/logical_sensors/' + logical_sensor.data.id
      }
    }, [_vm._v(_vm._s(logical_sensor.data.name))])])]), _vm._v(" "), (_vm.hideCols.indexOf('physical_sensor') === -1) ? _c('td', [(_vm.ps = _vm.physical_sensor(logical_sensor)) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-switch"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/physical_sensors/' + _vm.ps.data.id
      }
    }, [_vm._v("\n                                    " + _vm._s(_vm.ps.data.name) + "\n                                ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.hideCols.indexOf('terrarium') === -1) ? _c('td', {
      staticClass: "hide-on-med-and-down"
    }, [(_vm.t = _vm.terrarium(logical_sensor)) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-trackpad"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/terraria/' + _vm.t.data.id
      }
    }, [_vm._v(_vm._s(_vm.t.data.display_name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_vm._v("\n                            " + _vm._s(logical_sensor.data.type) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_vm._v(_vm._s(Math.round(logical_sensor.data.rawvalue, 2)))]), _vm._v(" "), (logical_sensor.data.rawvalue_adjustment !== 0) ? _c('span', [(logical_sensor.data.rawvalue_adjustment > 0) ? _c('span', [_c('span', {
      staticClass: "green-text darken-2"
    }, [_vm._v("(+" + _vm._s(logical_sensor.data.rawvalue_adjustment) + ")")])]) : _c('span', [_c('span', {
      staticClass: "red darken-2"
    }, [_vm._v("(" + _vm._s(logical_sensor.data.rawvalue_adjustment) + ")")])])]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/logical_sensors/' + logical_sensor.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', [_vm._v("\n                            " + _vm._s(_vm.$t('labels.rawlimitlo')) + ": " + _vm._s(logical_sensor.data.rawvalue_lowerlimit)), _c('br'), _vm._v("\n                            " + _vm._s(_vm.$t('labels.rawlimithi')) + ": " + _vm._s(logical_sensor.data.rawvalue_upperlimit) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [(_vm.c = _vm.controlunit(logical_sensor)) ? _c('span', [_vm._v("\n                                " + _vm._s(_vm.$tc('labels.controlunits', 1)) + ":\n                                "), _c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + _vm.c.data.id
      }
    }, [_vm._v(_vm._s(_vm.c.data.name))])]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('labels.model')) + ": " + _vm._s(_vm.physical_sensor(logical_sensor).data.model))])]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-med-and-down"
    }, [(_vm.t = _vm.terrarium(logical_sensor)) ? _c('span', [_vm._v("\n                                " + _vm._s(_vm.$tc('labels.terraria', 1)) + " " + _vm._s(_vm.$t('labels.temperature_celsius')) + ":\n                                " + _vm._s(_vm.t.data.cooked_temperature_celsius) + "°C"), _c('br'), _vm._v("\n\n                                " + _vm._s(_vm.$tc('labels.terraria', 1)) + " " + _vm._s(_vm.$t('labels.humidity_percent')) + ":\n                                " + _vm._s(_vm.t.data.cooked_humidity_percent) + "%\n                            ")]) : _vm._e()]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }), _vm._v(" "), _c('td')])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-40cf11c6", module.exports)
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "data-field": "id"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$tc('labels.animals', 1)) + "\n                ")]), _vm._v(" "), _vm._l((_vm.feeding_types), function(type) {
    return _c('th', [_vm._v("\n                    " + _vm._s(type.name) + "\n                ")])
  })], 2)]), _vm._v(" "), _c('tbody', _vm._l((_vm.animals), function(animal) {
    return _c('tr', [_c('td', [_c('a', {
      attrs: {
        "href": '/animals/' + animal.id
      }
    }, [_vm._v(_vm._s(animal.display_name))])]), _vm._v(" "), _vm._l((_vm.feeding_types), function(type) {
      return _c('td', _vm._l((_vm.get_animal_feeding_schedules_of_type(animal.id, type.name)), function(schedule) {
        return _c('span', [_c('a', {
          attrs: {
            "href": '/animals/' + animal.id + '/feeding_schedules/' + schedule.id + '/edit'
          }
        }, [_vm._v(_vm._s(schedule.interval_days))]), _vm._v(" "), _c('i', [_vm._v("(" + _vm._s(schedule.due_days) + " " + _vm._s(_vm.$tc('units.days', schedule.due_days)) + ")")]), _vm._v(" "), (schedule.due_days < 0) ? _c('i', {
          staticClass: "mdi mdi-24px mdi-exclamation"
        }) : (schedule.due_days < 1) ? _c('i', {
          staticClass: "mdi mdi-24px mdi-exclamation orange-text"
        }) : _vm._e()])
      }))
    })], 2)
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4412c114", module.exports)
  }
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 4,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'model',
          path: 'model',
          col: 1
        },
        {
          name: 'controlunit',
          noSort: true,
          path: 'controlunit.name',
          col: 2
        },
        {
          noSort: true,
          noFilter: true,
          col: 3,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.pumps), function(pump) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-water-pump"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/pumps/' + pump.data.id
      }
    }, [_vm._v(_vm._s(pump.data.name))]), _vm._v(" "), (!pump.data.active) ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('labels.inactive')))]) : _vm._e()])]), _vm._v(" "), _c('td', [_c('span', [_vm._v("\n                                " + _vm._s(pump.data.model) + "\n                            ")])]), _vm._v(" "), (_vm.hideCols.indexOf('controlunit') === -1) ? _c('td', [((_vm.controlunit = _vm.controlunits.filter(function (c) { return c.data.id === pump.data.controlunit_id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + _vm.controlunit[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.controlunit[0].data.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/pumps/' + pump.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', {
      attrs: {
        "colspan": "3"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.$tc('labels.valves', 2)) + ":\n                            "), _vm._l((_vm.valves.filter(function (v) { return v.data.pump_id === pump.data.id; })), function(valve, index) {
      return _c('span', [_c('i', {
        staticClass: "mdi mdi-24px mdi-pipe-disconnected"
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": '/valves/' + valve.data.id
        }
      }, [_vm._v(_vm._s(valve.data.name))]), _vm._v(" "), (index < _vm.valves.filter(function (v) { return v.data.pump_id === pump.data.id; }).length - 1) ? [_vm._v(", ")] : _vm._e()], 2)
    })], 2)])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48c31d4e", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.logical_sensor.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-pipe-disconnected"
  }), _vm._v("\n            " + _vm._s(_vm.$t("labels.logical_sensor")) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title activator"
  }, [_vm._v("\n                " + _vm._s(_vm.logical_sensor.data.name) + "\n                "), _c('i', {
    staticClass: "mdi mdi-18px mdi-dots-vertical"
  })]), _vm._v(" "), (_vm.logical_sensor.data.type.length) ? _c('div', [_c('span', [_vm._v(_vm._s(_vm.$t("labels.type")) + ": " + _vm._s(_vm.$t("labels." + _vm.logical_sensor.data.type)))])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/logical_sensors/' + _vm.logical_sensor.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/logical_sensors/' + _vm.logical_sensor.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])]), _vm._v(" "), _c('div', {
    staticClass: "card-reveal"
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$tc("labels.physical_sensors", 1)) + "\n                "), _c('i', {
    staticClass: "mdi mdi-24px mdi-close"
  })]), _vm._v(" "), _c('div', [(_vm.physical_sensor && _vm.physical_sensor.data) ? _c('span', [_vm._v("\n                    " + _vm._s(_vm.$t("labels.physical_sensor")) + ":\n                    "), _c('a', {
    attrs: {
      "href": '/physical_sensors/' + _vm.physical_sensor.data.id
    }
  }, [_vm._v(_vm._s(_vm.physical_sensor.data.name))])]) : _vm._e()]), _vm._v(" "), _c('span', {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$tc("labels.logical_sensor_thresholds", 2)))]), _vm._v(" "), _vm._l((_vm.logical_sensor_thresholds), function(lst) {
    return _c('div', [_vm._v("\n                " + _vm._s(_vm.$t("labels.starts_at")) + " " + _vm._s(lst.data.timestamps.starts) + ":\n                "), _c('strong', [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (lst.data.rawvalue_lowerlimit && !lst.data.rawvalue_upperlimit),
        expression: "lst.data.rawvalue_lowerlimit && !lst.data.rawvalue_upperlimit"
      }]
    }, [_vm._v("\n                        min " + _vm._s(lst.data.rawvalue_lowerlimit) + _vm._s(_vm.$t("units." + _vm.logical_sensor.data.type)) + "\n                    ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!lst.data.rawvalue_lowerlimit && lst.data.rawvalue_upperlimit),
        expression: "!lst.data.rawvalue_lowerlimit && lst.data.rawvalue_upperlimit"
      }]
    }, [_vm._v("\n                        max " + _vm._s(lst.data.rawvalue_upperlimit) + _vm._s(_vm.$t("units." + _vm.logical_sensor.data.type)) + "\n                    ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (lst.data.rawvalue_lowerlimit && lst.data.rawvalue_upperlimit),
        expression: "lst.data.rawvalue_lowerlimit && lst.data.rawvalue_upperlimit"
      }]
    }, [_vm._v("\n                        " + _vm._s(lst.data.rawvalue_lowerlimit) + " - " + _vm._s(lst.data.rawvalue_upperlimit) + _vm._s(_vm.$t("units." + _vm.logical_sensor.data.type)) + "\n                    ")])]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (lst.data.id === _vm.logical_sensor.data.current_threshold_id),
        expression: "lst.data.id === logical_sensor.data.current_threshold_id"
      }]
    }, [_c('span', {
      staticClass: "new badge teal",
      attrs: {
        "data-badge-caption": _vm.$t('labels.active')
      }
    })])])
  })], 2)]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a87bb84", module.exports)
  }
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.ShowFilterForm === true) ? _c('div', [_c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.from'),
      "name": "filter_from",
      "id": 'filter_from_' + _vm.id,
      "data-default": _vm.FilterFromDate
    },
    domProps: {
      "value": _vm.FilterFromDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_from_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.from')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.to'),
      "name": "filter_to",
      "id": 'filter_to_' + _vm.id,
      "data-default": _vm.FilterToDate
    },
    domProps: {
      "value": _vm.FilterToDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_to_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.to')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m4 l4"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    on: {
      "click": _vm.build
    }
  }, [_vm._v(_vm._s(_vm.$t('buttons.loadgraph')))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": 'chartjs_' + _vm.id + '_loading'
    }
  }, [_c('loading-indicator', {
    attrs: {
      "size": 100
    }
  })], 1), _vm._v(" "), _c('canvas', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": 'chartjs_' + _vm.id
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dca3765", module.exports)
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.controlunit.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-water-pump"
  }), _vm._v("\n            " + _vm._s(_vm.$tc("labels.controlunits", 1)) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title activator"
  }, [_vm._v("\n                " + _vm._s(_vm.controlunit.data.name) + "\n            ")]), _vm._v(" "), _c('div', [(!_vm.controlunit.data.active) ? _c('div', [_c('strong', [_vm._v(_vm._s(_vm.$t('labels.inactive')))])]) : _vm._e(), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(_vm.$t('labels.last_heartbeat')) + ":\n                    "), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controlunit.data.timestamps.last_heartbeat_diff.days > 0),
      expression: "controlunit.data.timestamps.last_heartbeat_diff.days > 0"
    }],
    staticClass: "tooltipped",
    attrs: {
      "data-position": "bottom",
      "data-delay": "50",
      "data-tooltip": _vm.controlunit.data.timestamps.last_heartbeat
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('units.days_ago', {
    val: _vm.controlunit.data.timestamps.last_heartbeat_diff.days
  })) + "\n                    ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&
        _vm.controlunit.data.timestamps.last_heartbeat_diff.hours > 0),
      expression: "controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&\n                                  controlunit.data.timestamps.last_heartbeat_diff.hours > 0"
    }],
    staticClass: "tooltipped",
    attrs: {
      "data-position": "bottom",
      "data-delay": "50",
      "data-tooltip": _vm.controlunit.data.timestamps.last_heartbeat
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('units.hours_ago', {
    val: _vm.controlunit.data.timestamps.last_heartbeat_diff.hours
  })) + "\n                    ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&
        _vm.controlunit.data.timestamps.last_heartbeat_diff.hours < 1 &&
        _vm.controlunit.data.timestamps.last_heartbeat_diff.minutes > 1),
      expression: "controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&\n                                  controlunit.data.timestamps.last_heartbeat_diff.hours < 1 &&\n                                  controlunit.data.timestamps.last_heartbeat_diff.minutes > 1"
    }],
    staticClass: "tooltipped",
    attrs: {
      "data-position": "bottom",
      "data-delay": "50",
      "data-tooltip": _vm.controlunit.data.timestamps.last_heartbeat
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('units.minutes_ago', {
    val: _vm.controlunit.data.timestamps.last_heartbeat_diff.minutes
  })) + "\n                    ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&
        _vm.controlunit.data.timestamps.last_heartbeat_diff.hours < 1 &&
        _vm.controlunit.data.timestamps.last_heartbeat_diff.minutes < 2),
      expression: "controlunit.data.timestamps.last_heartbeat_diff.days < 1 &&\n                                  controlunit.data.timestamps.last_heartbeat_diff.hours < 1 &&\n                                  controlunit.data.timestamps.last_heartbeat_diff.minutes < 2"
    }],
    staticClass: "tooltipped",
    attrs: {
      "data-position": "bottom",
      "data-delay": "50",
      "data-tooltip": _vm.controlunit.data.timestamps.last_heartbeat
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('units.just_now')) + "\n                    ")])]), _vm._v(" "), _c('div', [_vm._v("\n                    " + _vm._s(_vm.$t('labels.client_server_time_diff')) + ": " + _vm._s(_vm.controlunit.data.client_server_time_diff_seconds) + "s\n                ")]), _vm._v(" "), (_vm.controlunit.data.software_version) ? _c('div', [_vm._v("\n                    " + _vm._s(_vm.$t('labels.software_version')) + ": " + _vm._s(_vm.controlunit.data.software_version) + "\n                ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/controlunits/' + _vm.controlunit.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/controlunits/' + _vm.controlunit.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5035607a", module.exports)
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('pagination', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.terrariumId === null),
      expression: "terrariumId === null"
    }],
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "show-filters": _vm.showFilters,
      "filter-fields": [{
        name: 'display_name',
        path: 'display_name'
      }]
    }
  }), _vm._v(" "), _c('div', {
    class: _vm.containerClasses,
    attrs: {
      "id": _vm.containerId
    }
  }, _vm._l((_vm.terraria), function(terrarium) {
    return _c('div', {
      class: _vm.wrapperClasses
    }, [(terrarium.data) ? [(terrarium.data.capabilities.irrigate) ? _c('div', {
      staticClass: "modal",
      attrs: {
        "id": terrarium.data.id + '_irrigate'
      }
    }, [_c('form', {
      attrs: {
        "action": '/api/v1/terraria/' + terrarium.data.id + '/action_sequence',
        "data-method": "POST",
        "id": 'form_irrigate_' + terrarium.data.id
      },
      on: {
        "submit": _vm.submit
      }
    }, [_c('div', {
      staticClass: "modal-content"
    }, [_c('h4', [_vm._v(_vm._s(_vm.$t('labels.irrigate')))]), _vm._v(" "), _c('p', [_c('input', {
      attrs: {
        "type": "hidden",
        "name": "template",
        "value": "irrigate"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "runonce",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "schedule_now",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "id": 'duration_minutes_irrigate_' + terrarium.data.id,
        "type": "text",
        "placeholder": _vm.$tc('units.minutes', 2),
        "name": "duration_minutes",
        "value": "1"
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'duration_minutes_irrigate_' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.duration')) + " " + _vm._s((_vm.$tc('units.minutes', 2))))])])]), _vm._v(" "), _c('div', {
      staticClass: "modal-footer"
    }, [_c('button', {
      staticClass: "modal-action modal-close btn waves-effect waves-green",
      attrs: {
        "type": "submit"
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.start')))])])])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.ventilate) ? _c('div', {
      staticClass: "modal",
      attrs: {
        "id": terrarium.data.id + '_ventilate'
      }
    }, [_c('form', {
      attrs: {
        "action": '/api/v1/terraria/' + terrarium.data.id + '/action_sequence',
        "data-method": "POST",
        "id": 'form_ventilate_' + terrarium.data.id
      },
      on: {
        "submit": _vm.submit
      }
    }, [_c('div', {
      staticClass: "modal-content"
    }, [_c('h4', [_vm._v(_vm._s(_vm.$t('labels.ventilate')))]), _vm._v(" "), _c('p', [_c('input', {
      attrs: {
        "type": "hidden",
        "name": "template",
        "value": "ventilate"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "runonce",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "schedule_now",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "id": 'duration_minutes_ventilate_' + terrarium.data.id,
        "type": "text",
        "placeholder": _vm.$tc('units.minutes', 2),
        "name": "duration_minutes",
        "value": "3"
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'duration_minutes_ventilate_' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.duration')) + " " + _vm._s((_vm.$tc('units.minutes', 2))))])])]), _vm._v(" "), _c('div', {
      staticClass: "modal-footer"
    }, [_c('button', {
      staticClass: "modal-action modal-close btn waves-effect waves-green",
      attrs: {
        "type": "submit"
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.start')))])])])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.heat_up) ? _c('div', {
      staticClass: "modal",
      attrs: {
        "id": terrarium.data.id + '_heat_up'
      }
    }, [_c('form', {
      attrs: {
        "action": '/api/v1/terraria/' + terrarium.data.id + '/action_sequence',
        "data-method": "POST",
        "id": 'form_heat_up_' + terrarium.data.id
      },
      on: {
        "submit": _vm.submit
      }
    }, [_c('div', {
      staticClass: "modal-content"
    }, [_c('h4', [_vm._v(_vm._s(_vm.$t('labels.heat_up')))]), _vm._v(" "), _c('p', [_c('input', {
      attrs: {
        "type": "hidden",
        "name": "template",
        "value": "heat_up"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "runonce",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "schedule_now",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "id": 'duration_minutes_heat_up_' + terrarium.data.id,
        "type": "text",
        "placeholder": _vm.$tc('units.minutes', 2),
        "name": "duration_minutes",
        "value": "3"
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'duration_minutes_heat_up_' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.duration')) + " " + _vm._s((_vm.$tc('units.minutes', 2))))])])]), _vm._v(" "), _c('div', {
      staticClass: "modal-footer"
    }, [_c('button', {
      staticClass: "modal-action modal-close btn waves-effect waves-green",
      attrs: {
        "type": "submit"
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.start')))])])])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.cool_down) ? _c('div', {
      staticClass: "modal",
      attrs: {
        "id": terrarium.data.id + '_cool_down'
      }
    }, [_c('form', {
      attrs: {
        "action": '/api/v1/terraria/' + terrarium.data.id + '/action_sequence',
        "data-method": "POST",
        "id": 'form_cool_down_' + terrarium.data.id
      },
      on: {
        "submit": _vm.submit
      }
    }, [_c('div', {
      staticClass: "modal-content"
    }, [_c('h4', [_vm._v(_vm._s(_vm.$t('labels.cool_down')))]), _vm._v(" "), _c('p', [_c('input', {
      attrs: {
        "type": "hidden",
        "name": "template",
        "value": "cool_down"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "runonce",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "type": "hidden",
        "name": "schedule_now",
        "value": "On"
      }
    }), _vm._v(" "), _c('input', {
      attrs: {
        "id": 'duration_minutes_cool_down_' + terrarium.data.id,
        "type": "text",
        "placeholder": _vm.$tc('units.minutes', 2),
        "name": "duration_minutes",
        "value": "3"
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'duration_minutes_cool_down_' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(_vm.$t('labels.duration')) + " " + _vm._s((_vm.$tc('units.minutes', 2))))])])]), _vm._v(" "), _c('div', {
      staticClass: "modal-footer"
    }, [_c('button', {
      staticClass: "modal-action modal-close btn waves-effect waves-green",
      attrs: {
        "type": "submit"
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.start')))])])])]) : _vm._e()] : _vm._e(), _vm._v(" "), (terrarium.data) ? _c('div', {
      staticClass: "card"
    }, [_c('div', {
      staticClass: "card-image terrarium-card-image",
      style: (terrarium.data.default_background_filepath ?
        'background-image: url(\'' + terrarium.data.default_background_filepath + '\');' :
        'background-image: url(\'/svg/Ciliatus_Logo.svg\'); background-position: top center;')
    }, [_c('div', [(terrarium.data) ? _c('inline-graph', {
      attrs: {
        "points": terrarium.data.humidity_history,
        "options": {
          'fill': null,
          'strokeWidth': '2',
          'stroke': '#2196f3',
          width: '100%',
          height: '140px',
          min: _vm.humidityGraphMin,
          max: _vm.humidityGraphMax
        },
        "source-type": "terraria",
        "source-id": terrarium.id,
        "source-field": "humidity_history",
        "type": "line"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticStyle: {
        "position": "relative",
        "top": "-145px"
      }
    }, [(terrarium.data) ? _c('inline-graph', {
      attrs: {
        "points": terrarium.data.temperature_history,
        "options": {
          'fill': null,
          'strokeWidth': '2',
          'stroke': '#b71c1c',
          width: '100%',
          height: '140px',
          min: _vm.temperatureGraphMin,
          max: _vm.temperatureGraphMax
        },
        "source-type": "terraria",
        "source-id": terrarium.id,
        "source-field": "temperature_history",
        "type": "line"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "card-title"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/terraria/' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(terrarium.data.display_name))])]), _vm._v(" "), _c('loading-indicator', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.refreshing),
        expression: "terrarium.refreshing"
      }],
      attrs: {
        "size": 20
      }
    }), _vm._v(" "), _vm._m(0, true, false)], 1)]), _vm._v(" "), (terrarium.data.cooked_temperature_celsius !== null ||
      terrarium.data.cooked_humidity_percent !== null ||
      terrarium.data.heartbeat_critical) ? _c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.data.cooked_temperature_celsius !== null),
        expression: "terrarium.data.cooked_temperature_celsius !== null"
      }],
      class: {
        'red-text': terrarium.data.temperature_critical, 'darken-3': terrarium.data.temperature_critical
      }
    }, [_vm._v("\n\n                        " + _vm._s(_vm.$t("labels.temperature")) + ": " + _vm._s(terrarium.data.cooked_temperature_celsius) + "°C\n\n                        "), (terrarium.data.heartbeat_critical) ? _c('i', {
      staticClass: "mdi mdi-sync-off deep-orange-text tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.heartbeat_critical') + '</div>'
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.data.cooked_humidity_percent !== null),
        expression: "terrarium.data.cooked_humidity_percent !== null"
      }],
      class: {
        'red-text': terrarium.data.humidity_critical, 'darken-3': terrarium.data.humidity_critical
      }
    }, [_vm._v("\n\n                        " + _vm._s(_vm.$t("labels.humidity")) + ": " + _vm._s(terrarium.data.cooked_humidity_percent) + "%\n\n                        "), (terrarium.data.heartbeat_critical) ? _c('i', {
      staticClass: "mdi mdi-sync-off deep-orange-text tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.heartbeat_critical') + '</div>'
      }
    }) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "card-reveal"
    }, [_c('div', [_c('strong', [_vm._v(_vm._s(terrarium.data.display_name))]), _vm._v(" "), _c('i', {
      staticClass: "mdi mdi-24px mdi-close right card-title card-title-small"
    })]), _vm._v(" "), _vm._l((_vm.animals.filter(function (a) { return a.data.terrarium_id === terrarium.id; })), function(animal) {
      return _c('p', [_c('i', {
        staticClass: "mdi mdi-18px mdi-paw"
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": '/animals/' + animal.data.id
        }
      }, [_vm._v(_vm._s(animal.data.display_name))]), _vm._v(" "), _c('i', [_vm._v(_vm._s(animal.data.common_name))])])
    }), _vm._v(" "), (terrarium.data.capabilities.irrigate) ? _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-weather-pouring"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.action_sequence_modal(terrarium.data.id, 'irrigate')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.irrigate')))])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.ventilate) ? _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-weather-windy"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.action_sequence_modal(terrarium.data.id, 'ventilate')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.ventilate')))])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.heat_up) ? _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-weather-sunny"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.action_sequence_modal(terrarium.data.id, 'heat_up')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.heat_up')))])]) : _vm._e(), _vm._v(" "), (terrarium.data.capabilities.cool_down) ? _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-snowflake"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.action_sequence_modal(terrarium.data.id, 'cool_down')
        }
      }
    }, [_vm._v(_vm._s(_vm.$t('buttons.cool_down')))])]) : _vm._e()], 2)]) : _c('div', [_c('loading-card-widget')], 1)], 2)
  }))], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#!"
    }
  }, [_c('i', {
    staticClass: "mdi mdi-24px mdi-dots-vertical right activator white-text"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52858374", module.exports)
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 4,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'id',
          path: 'id',
          col: 0,
          class: 'hide-on-med-and-down'
        },
        {
          name: 'name',
          path: 'name',
          col: 1
        },
        {
          name: 'email',
          noFilter: true,
          col: 2
        },
        {
          noSort: true,
          noFilter: true,
          col: 3,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _c('tbody', _vm._l((_vm.users), function(user) {
    return _c('tr', [_c('td', {
      staticClass: "hide-on-med-and-down"
    }, [_vm._v(_vm._s(user.data.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.data.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.data.email))]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/users/' + user.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])])
  }))], 1), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57661b6a", module.exports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("\n        " + _vm._s(_vm.$t('labels.loading_dots')) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content center"
  }, [_c('loading-indicator', {
    attrs: {
      "size": 40
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5de93ae6", module.exports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-clock"
  }), _vm._v("\n                " + _vm._s(_vm.$tc("labels.animal_weighing_schedules", 2)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_vm._l((_vm.schedules), function(schedule) {
    return _c('div', {
      staticClass: "row no-margin"
    }, [(schedule.data) ? [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.timestamps.next != null),
        expression: "schedule.data.timestamps.next != null"
      }]
    }, [_vm._v(_vm._s(schedule.data.timestamps.next))]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.timestamps.next == null),
        expression: "schedule.data.timestamps.next == null"
      }]
    }, [_vm._v(_vm._s(_vm.$t("labels.now")))]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('a', {
      attrs: {
        "href": '/animals/' + _vm.animalId + '/weighing_schedules/' + schedule.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-pencil"
    })])]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.due_days == 0),
        expression: "schedule.data.due_days == 0"
      }],
      staticClass: "new badge",
      attrs: {
        "data-badge-caption": _vm.$t('labels.due')
      }
    }), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.due_days < 0),
        expression: "schedule.data.due_days < 0"
      }],
      staticClass: "new badge red",
      attrs: {
        "data-badge-caption": _vm.$t('labels.overdue')
      }
    })])] : _vm._e()], 2)
  }), _vm._v(" "), (_vm.schedules.length < 1) ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('labels.no_data')))])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/animals/' + _vm.animalId + '/weighing_schedules/create'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.add")))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5fc487fe", module.exports)
  }
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.echo.connector.pusher.connection.state !== 'connected' &&
        _vm.echo.connector.pusher.connection.state !== 'initialized' &&
        _vm.ready),
      expression: "echo.connector.pusher.connection.state !== 'connected'\n                  && echo.connector.pusher.connection.state !== 'initialized'\n                  && ready"
    }],
    staticClass: "side-menu-info"
  }, [_c('div', {
    staticClass: "side-menu-info-title"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-wifi-off"
  }), _vm._v(" " + _vm._s(_vm.$t('labels.connecting')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "side-menu-info-content"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('tooltips.connecting_to_server')))])])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.system.emergency_stop === true),
      expression: "system.emergency_stop === true"
    }],
    staticClass: "side-menu-info"
  }, [_c('div', {
    staticClass: "side-menu-info-title"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-power"
  }), _vm._v(" " + _vm._s(_vm.$t('labels.emergency_stop')) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "side-menu-info-content"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('tooltips.emergency_stop')))])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61fa9e78", module.exports)
  }
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_vm._l((_vm.filters), function(filter) {
    return (_vm.hideCols.indexOf(filter.name) === -1) ? [_c('th', {
      class: filter.class,
      attrs: {
        "data-field": filter.name
      }
    }, [(!filter.noSort && _vm.$parent.$refs.pagination) ? [_c('a', {
      attrs: {
        "href": "#!"
      },
      on: {
        "click": function($event) {
          _vm.set_order(filter.path)
        }
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.$t('labels.' + filter.name)) + "\n                    ")]), _vm._v(" "), (_vm.$parent.$refs.pagination) ? _c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.$parent.$refs.pagination.order.field === filter.path &&
          _vm.$parent.$refs.pagination.order.direction === 'asc'),
        expression: "$parent.$refs.pagination.order.field === filter.path &&\n                               $parent.$refs.pagination.order.direction === 'asc'"
      }],
      staticClass: "mdi mdi-18px mdi-menu-up"
    }) : _vm._e(), _vm._v(" "), (_vm.$parent.$refs.pagination) ? _c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.$parent.$refs.pagination.order.field === filter.path &&
          _vm.$parent.$refs.pagination.order.direction === 'desc'),
        expression: "$parent.$refs.pagination.order.field === filter.path &&\n                               $parent.$refs.pagination.order.direction === 'desc'"
      }],
      staticClass: "mdi mdi-18px mdi-menu-down"
    }) : _vm._e()] : (filter.name) ? [_vm._v("\n                    " + _vm._s(_vm.$t('labels.' + filter.name)) + "\n                ")] : _vm._e(), _vm._v(" "), (!filter.noFilter && _vm.$parent.$refs.pagination) ? [(_vm.$parent.$refs.pagination) ? _c('div', {
      staticClass: "input-field inline"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.$parent.$refs.pagination.filter[filter.path]),
        expression: "$parent.$refs.pagination.filter[filter.path]"
      }],
      attrs: {
        "id": 'filter_' + filter.name,
        "type": "text"
      },
      domProps: {
        "value": (_vm.$parent.$refs.pagination.filter[filter.path])
      },
      on: {
        "keyup": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
          _vm.set_filter($event)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.$parent.$refs.pagination.filter, filter.path, $event.target.value)
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": 'filter_' + filter.name
      }
    }, [_vm._v("Filter")])]) : _vm._e()] : _vm._e()], 2)] : _vm._e()
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6aab8a3a", module.exports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "overlay-loader center"
  }, [_c('img', {
    staticClass: "loader-icon spinning-logo",
    style: ('width: ' + _vm.size + 'px; width: ' + _vm.size + 'px;'),
    attrs: {
      "src": "https://dev-43256.ciliatus.io/svg/Ciliatus_Logo.svg"
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d20a6fb", module.exports)
  }
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.ShowFilterForm === true) ? _c('div', [_c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('div', {
    staticClass: "input-field col s12 m6 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.from'),
      "name": "filter_from",
      "id": 'filter_from_' + _vm.id,
      "data-default": _vm.FilterFromDate
    },
    domProps: {
      "value": _vm.FilterFromDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_from_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.from')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s12 m6 l4"
  }, [_c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.to'),
      "name": "filter_to",
      "id": 'filter_to_' + _vm.id,
      "data-default": _vm.FilterToDate
    },
    domProps: {
      "value": _vm.FilterToDate
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": 'filter_to_' + _vm.id
    }
  }, [_vm._v(_vm._s(_vm.$t('labels.to')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s8 m8 l2"
  }, [_c('button', {
    staticClass: "btn waves-effect waves-light",
    on: {
      "click": _vm.build
    }
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-refresh"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "input-field col s4 m4 l2"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "id": 'dygraph_' + _vm.id + '_rollperiodselector',
      "placeholder": _vm.$t('labels.rollperiod')
    },
    domProps: {
      "value": 4
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key)) { return null; }
        _vm.set_rollperiod($event)
      }
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t('labels.rollperiod')))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "center",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": 'dygraph_' + _vm.id + '_loading'
    }
  }, [_c('loading-indicator', {
    attrs: {
      "size": 100
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": 'dygraph_' + _vm.id
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e35f5d2", module.exports)
  }
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 6,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'model',
          path: 'model',
          col: 1
        },
        {
          name: 'pump',
          noSort: true,
          col: 2
        },
        {
          name: 'controlunit',
          noSort: true,
          col: 3,
          class: 'hide-on-small-only'
        },
        {
          name: 'terrarium',
          noSort: true,
          col: 4,
          class: 'hide-on-med-and-down'
        },
        {
          noSort: true,
          noFilter: true,
          col: 5,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.valves), function(valve) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-pipe-disconnected"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/valves/' + valve.data.id
      }
    }, [_vm._v(_vm._s(valve.data.name))]), _vm._v(" "), (!valve.data.active) ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('labels.inactive')))]) : _vm._e()])]), _vm._v(" "), _c('td', [_c('span', [_vm._v("\n                                " + _vm._s(valve.data.model) + "\n                            ")])]), _vm._v(" "), (_vm.hideCols.indexOf('pump') === -1) ? _c('td', [((_vm.pump = _vm.pumps.filter(function (p) { return p.data.id === valve.data.pump_id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-water-pump"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/pumps/' + _vm.pump[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.pump[0].data.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.hideCols.indexOf('controlunit') === -1) ? _c('td', {
      staticClass: "hide-on-small-only"
    }, [((_vm.controlunit = _vm.controlunits.filter(function (c) { return c.data.id === valve.data.controlunit_id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + _vm.controlunit[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.controlunit[0].data.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.hideCols.indexOf('terrarium') === -1) ? _c('td', {
      staticClass: "hide-on-med-and-down"
    }, [((_vm.terrarium = _vm.terraria.filter(function (t) { return t.data.id === valve.data.terrarium_id; })).length > 0) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-trackpad"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/terraria/' + _vm.terrarium[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.terrarium[0].data.display_name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/valves/' + valve.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _vm._m(0, true, false)])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "collapsible-body"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  }), _vm._v(" "), _c('td', {
    staticClass: "hide-on-small-only"
  }), _vm._v(" "), _c('td', {
    staticClass: "hide-on-med-and-down"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72f1ca7c", module.exports)
  }
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "timeline"
  }, _vm._l((_vm.entries), function(entry) {
    return _c('div', {
      staticClass: "timeline-event"
    }, [(entry.data) ? [_c('div', {
      staticClass: "timeline-date"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (entry.data.timestamps.created_diff.days > 0),
        expression: "entry.data.timestamps.created_diff.days > 0"
      }],
      staticClass: "tooltipped",
      attrs: {
        "data-position": "bottom",
        "data-delay": "50",
        "data-tooltip": entry.data.timestamps.created
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t('units.days_ago', {
      val: entry.data.timestamps.created_diff.days
    })) + "\n                    ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (entry.data.timestamps.created_diff.days < 1 &&
          entry.data.timestamps.created_diff.hours > 0),
        expression: "entry.data.timestamps.created_diff.days < 1 &&\n                                  entry.data.timestamps.created_diff.hours > 0"
      }],
      staticClass: "tooltipped",
      attrs: {
        "data-position": "bottom",
        "data-delay": "50",
        "data-tooltip": entry.data.timestamps.created
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t('units.hours_ago', {
      val: entry.data.timestamps.created_diff.hours
    })) + "\n                    ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (entry.data.timestamps.created_diff.days < 1 &&
          entry.data.timestamps.created_diff.hours < 1 &&
          entry.data.timestamps.created_diff.minutes > 1),
        expression: "entry.data.timestamps.created_diff.days < 1 &&\n                                  entry.data.timestamps.created_diff.hours < 1 &&\n                                  entry.data.timestamps.created_diff.minutes > 1"
      }],
      staticClass: "tooltipped",
      attrs: {
        "data-position": "bottom",
        "data-delay": "50",
        "data-tooltip": entry.data.timestamps.created
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t('units.minutes_ago', {
      val: entry.data.timestamps.created_diff.minutes
    })) + "\n                    ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (entry.data.timestamps.created_diff.days < 1 &&
          entry.data.timestamps.created_diff.hours < 1 &&
          entry.data.timestamps.created_diff.minutes < 2),
        expression: "entry.data.timestamps.created_diff.days < 1 &&\n                                  entry.data.timestamps.created_diff.hours < 1 &&\n                                  entry.data.timestamps.created_diff.minutes < 2"
      }],
      staticClass: "tooltipped",
      attrs: {
        "data-position": "bottom",
        "data-delay": "50",
        "data-tooltip": entry.data.timestamps.created
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.$t('units.just_now')) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "card timeline-content"
    }, [_c('div', {
      staticClass: "card-content"
    }, [_c('h5', [_vm._v(_vm._s(entry.data.title))]), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s(entry.data.text)
      }
    }), _vm._v(" "), _c('p', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.files.filter(function (f) { return f.data.belongsTo_id === entry.data.id; }).length > 0),
        expression: "files.filter(f => f.data.belongsTo_id === entry.data.id).length > 0"
      }],
      staticStyle: {
        "margin-top": "15px"
      }
    }, _vm._l((_vm.files.filter(function (f) { return f.data.belongsTo_id === entry.data.id; })), function(file, index) {
      return _c('span', {
        staticStyle: {
          "margin-right": "15px"
        }
      }, [_c('i', {
        class: 'mdi mdi-18px mdi-' + file.data.icon
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": file.data.url
        }
      }, [_vm._v(_vm._s(file.data.display_name))])])
    }))]), _vm._v(" "), _c('div', {
      staticClass: "card-action"
    }, [_c('a', {
      attrs: {
        "href": '/biography_entries/' + entry.data.id + '/edit'
      }
    }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]), _vm._v(" "), _c('div', {
      staticClass: "timeline-badge teal darken-2 white-text"
    }, [(entry.data.category) ? _c('i', {
      class: 'mdi mdi-18px tooltipped' + entry.data.category.icon,
      attrs: {
        "data-position": "top",
        "data-delay": "50",
        "data-tooltip": entry.data.category.name
      }
    }) : _vm._e()])] : _vm._e()], 2)
  }))]), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7695a880", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 3,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'terrarium',
          path: 'terrarium.display_name',
          noSort: true,
          col: 1
        },
        {
          noSort: true,
          noFilter: true,
          col: 2
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.sequences), function(sequence) {
    return [(sequence.data) ? _c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-playlist-play"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/action_sequences/' + sequence.data.id + '/edit'
      }
    }, [_vm._v(_vm._s(sequence.data.name))])])]), _vm._v(" "), _c('td', [((_vm.terrarium = _vm.terraria.filter(function (t) { return t.id === sequence.data.terrarium.id; })).length > 0) ? _c('span', [(_vm.terrarium[0].data) ? [_c('i', {
      staticClass: "mdi mdi-24px mdi-trackpad"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/terraria/' + _vm.terrarium[0].data.id
      }
    }, [_vm._v(_vm._s(_vm.terrarium[0].data.name))])] : _vm._e()], 2) : _vm._e()]), _vm._v(" "), _c('td', [_c('span', [_c('a', {
      attrs: {
        "href": '/action_sequences/' + sequence.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', {
      staticClass: "table-details-collapsible",
      attrs: {
        "colspan": "3"
      }
    }, [((_vm.sequence_schedules = _vm.schedules.filter(function (s) { return s.data.action_sequence_id === sequence.data.id; })).length > 0) ? _c('ul', [_c('strong', [_vm._v(_vm._s(_vm.$tc('labels.action_sequence_schedules', 2)))]), _vm._v(" "), _vm._l((_vm.sequence_schedules), function(schedule, index) {
      return _c('li', [(schedule.data) ? [_c('i', {
        staticClass: "mdi mdi-18px mdi-clock"
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(schedule.data.timestamps.starts))]), _vm._v(" "), (schedule.data.timestamps.runonce) ? _c('span', [_c('i', [_vm._v(_vm._s(_vm.$t('labels.runonce')))])]) : _c('span', [_c('i', [_vm._v(_vm._s(_vm.$t('labels.daily')))])])] : _vm._e()], 2)
    })], 2) : _vm._e(), _vm._v(" "), ((_vm.sequence_triggers = _vm.triggers.filter(function (t) { return t.data.action_sequence_id === sequence.data.id; })).length > 0) ? _c('ul', [_c('strong', [_vm._v(_vm._s(_vm.$tc('labels.action_sequence_triggers', 2)))]), _vm._v(" "), _vm._l((_vm.sequence_triggers), function(trigger, index) {
      return _c('li', [(trigger.data) ? [_c('i', {
        staticClass: "mdi mdi-18px mdi-vanish"
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('labels.' + trigger.data.logical_sensor.type)))]), _vm._v(" "), (trigger.data.reference_value_comparison_type == 'greater') ? _c('span', [_vm._v(">")]) : _vm._e(), _vm._v(" "), (trigger.data.reference_value_comparison_type == 'lesser') ? _c('span', [_vm._v("<")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(trigger.data.reference_value))]), _vm._v(" "), _c('span', [_vm._v("\n                                            " + _vm._s(_vm.$t('labels.between')) + " " + _vm._s(trigger.data.timeframe.start) + "\n                                            " + _vm._s(_vm.$t('labels.and')) + " " + _vm._s(trigger.data.timeframe.end) + ",\n                                        ")]), _vm._v(" "), _c('span', [_vm._v("\n                                            " + _vm._s(_vm.$t('labels.minimum_timeout')) + ": " + _vm._s(trigger.data.minimum_timeout_minutes) + "\n                                            " + _vm._s(_vm.$tc('units.minutes', trigger.data.minimum_timeout_minutes)) + "\n                                        ")])] : _vm._e()], 2)
    })], 2) : _vm._e(), _vm._v(" "), ((_vm.sequence_intentions = _vm.intentions.filter(function (i) { return i.data.action_sequence_id === sequence.data.id; })).length > 0) ? _c('ul', [_c('strong', [_vm._v(_vm._s(_vm.$tc('labels.action_sequence_intentions', 2)))]), _vm._v(" "), _vm._l((_vm.sequence_intentions), function(intention, index) {
      return _c('li', [(intention.data) ? [_c('i', {
        staticClass: "mdi mdi-18px mdi-compass"
      }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('labels.' + intention.data.intention)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('labels.' + intention.data.type)))]), _vm._v(" "), _c('span', [_vm._v("\n                                            " + _vm._s(_vm.$t('labels.between')) + " " + _vm._s(intention.data.timeframe.start) + "\n                                            " + _vm._s(_vm.$t('labels.and')) + " " + _vm._s(intention.data.timeframe.end) + ",\n                                        ")]), _vm._v(" "), _c('span', [_vm._v("\n                                            " + _vm._s(_vm.$t('labels.minimum_timeout')) + ": " + _vm._s(intention.data.minimum_timeout_minutes) + "\n                                            " + _vm._s(_vm.$tc('units.minutes', intention.data.minimum_timeout_minutes)) + "\n                                        ")])] : _vm._e()], 2)
    })], 2) : _vm._e()])])]) : _vm._e()]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-779a643c", module.exports)
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.physical_sensor.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-switch"
  }), _vm._v("\n            " + _vm._s(_vm.$t("labels.physical_sensor")) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title"
  }, [_vm._v("\n                " + _vm._s(_vm.physical_sensor.data.name) + "\n            ")]), _vm._v(" "), _vm._l((_vm.logical_sensors), function(logical_sensor) {
    return _c('div', [(logical_sensor.data) ? [_c('a', {
      attrs: {
        "href": '/logical_sensors/' + logical_sensor.data.id
      }
    }, [_vm._v(_vm._s(logical_sensor.data.name))]), _vm._v(" "), _c('i', [_vm._v(_vm._s(_vm.$t("labels." + logical_sensor.data.type)))])] : _vm._e()], 2)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/physical_sensors/' + _vm.physical_sensor.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/physical_sensors/' + _vm.physical_sensor.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-787d603c", module.exports)
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "modal",
    staticStyle: {
      "min-height": "800px"
    },
    attrs: {
      "id": 'modal_add_weighing_' + _vm.animalId
    }
  }, [_c('form', {
    attrs: {
      "action": '/api/v1/animals/' + _vm.animalId + '/weighings',
      "data-method": "POST",
      "onsubmit": "window.submit_form"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t("labels.add_weight")))]), _vm._v(" "), _c('p', [_c('input', {
    attrs: {
      "type": "text",
      "name": "weight",
      "id": "weight",
      "placeholder": _vm.$t('labels.weight'),
      "value": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "weight"
    }
  }, [_vm._v(_vm._s(_vm.$t("labels.weight")) + "/g")]), _vm._v(" "), _c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.date'),
      "name": "created_at"
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t('labels.date')))])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn modal-action modal-close waves-effect waves-light",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("buttons.save")) + "\n                        "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-weight-kilogram"
  }), _vm._v("\n                " + _vm._s(_vm.$tc("labels.animal_weighings", 2)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_vm._l((_vm.weighings), function(weighing) {
    return _c('div', [(weighing.data) ? _c('div', {
      staticClass: "row row-no-margin",
      staticStyle: {
        "width": "100%"
      }
    }, [(weighing.data.timestamps.created_diff.days > 1) ? _c('span', [_vm._v("\n                            " + _vm._s(_vm.$t('units.days_ago', {
      val: weighing.data.timestamps.created_diff.days
    })) + "\n                        ")]) : _vm._e(), _vm._v(" "), (weighing.data.timestamps.created_diff.days <= 1 &&
      weighing.data.timestamps.created_diff.hours > 1) ? _c('span', [_vm._v("\n                            " + _vm._s(_vm.$t('units.hours_ago', {
      val: weighing.data.timestamps.created_diff.hours
    })) + "\n                        ")]) : _vm._e(), _vm._v(" "), (weighing.data.timestamps.created_diff.days <= 1 &&
      weighing.data.timestamps.created_diff.hours <= 1) ? _c('span', [_vm._v("\n                            " + _vm._s(_vm.$t('units.just_now')) + "\n                        ")]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(" - " + _vm._s(weighing.data.amount) + "g")]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": '/animals/' + _vm.animalId + '/weighings/' + weighing.data.id + '/delete'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])]) : _vm._e()])
  }), _vm._v(" "), (_vm.weighings.length < 1) ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('labels.no_data')))])]) : _vm._e(), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false,
      "mini": true
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '#modal_add_weighing_' + _vm.animalId,
      "onclick": '$(\'#modal_add_weighing_' + _vm.animalId + '\').modal(); $(\'#modal_add_weighing_' + _vm.animalId + ' select\').material_select(); $(\'#modal_add_weighing_' + _vm.animalId + '\').modal(\'open\');'
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("buttons.add")) + "\n                ")])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a4ba0b8", module.exports)
  }
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [(_vm.pump.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-water-pump"
  }), _vm._v("\n            " + _vm._s(_vm.$tc("labels.pumps", 1)) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('span', {
    staticClass: "card-title activator"
  }, [_vm._v("\n                " + _vm._s(_vm.pump.data.name) + "\n            ")]), _vm._v(" "), _c('div', [_vm._v("\n                " + _vm._s(_vm.$t('labels.model')) + ": " + _vm._s(_vm.pump.data.model) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/pumps/' + _vm.pump.data.id
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.details")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/pumps/' + _vm.pump.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))])])]) : _c('div', [_c('loading-card-widget')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-813d1874", module.exports)
  }
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-clock"
  }), _vm._v("\n            " + _vm._s(_vm.$tc("labels.animal_feeding_schedules", 2)) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_vm._l((_vm.schedules), function(schedule) {
    return _c('div', {
      staticClass: "row no-margin"
    }, [(schedule.data) ? [(schedule.data.timestamps.next != null) ? _c('span', [_vm._v(_vm._s(schedule.data.timestamps.next) + " - ")]) : _vm._e(), _vm._v("\n                    " + _vm._s(schedule.data.type) + "\n\n                    "), _c('span', {
      staticClass: "right"
    }, [_c('a', {
      attrs: {
        "href": '/animals/' + _vm.animalId + '/feeding_schedules/' + schedule.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-pencil"
    })])]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.due_days === 0),
        expression: "schedule.data.due_days === 0"
      }],
      staticClass: "new badge",
      attrs: {
        "data-badge-caption": _vm.$t('labels.due')
      }
    }), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (schedule.data.due_days < 0),
        expression: "schedule.data.due_days < 0"
      }],
      staticClass: "new badge red",
      attrs: {
        "data-badge-caption": _vm.$t('labels.overdue')
      }
    })])] : _vm._e()], 2)
  }), _vm._v(" "), (_vm.schedules.length < 1) ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('labels.no_data')))])]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/animals/' + _vm.animalId + '/feeding_schedules/create'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.add")))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-82c4c0a0", module.exports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('peity', {
    attrs: {
      "type": _vm.type,
      "options": _vm.options,
      "data": _vm.points_string
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8768f226", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    attrs: {
      "id": 'modal_just_fed_' + _vm.animalId
    }
  }, [_c('form', {
    attrs: {
      "action": '/api/v1/animals/' + _vm.animalId + '/feedings',
      "data-method": "POST"
    },
    on: {
      "submit": _vm.submit
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t("labels.just_fed")))]), _vm._v(" "), (_vm.feedingTypes.length > 0) ? _c('select', {
    attrs: {
      "name": "meal_type"
    }
  }, _vm._l((_vm.feedingTypes), function(ft) {
    return _c('option', {
      domProps: {
        "value": ft
      }
    }, [_vm._v(_vm._s(ft))])
  })) : _c('span', [_c('strong', [_vm._v(_vm._s(_vm.$t('tooltips.no_feeding_types')))])]), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t("labels.meal_type")))]), _vm._v(" "), _c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.date'),
      "name": "created_at"
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t('labels.date')))])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [(_vm.feedingTypes.length > 0) ? _c('button', {
    staticClass: "btn modal-action modal-close waves-effect waves-light",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.save")) + "\n                "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })]) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-988cd154", module.exports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 4,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'type',
          noSort: true,
          path: 'type.name_singular',
          col: 1,
          class: 'hide-on-small-only'
        },
        {
          name: 'controlunit',
          noSort: true,
          path: 'controlunit.name',
          col: 2,
          class: 'hide-on-small-only'
        },
        {
          noSort: true,
          noFilter: true,
          col: 3,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.generic_components), function(generic_component) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [_c('span', [_c('i', {
      class: 'mdi mdi-24px mdi-' + generic_component.data.type.icon
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/generic_components/' + generic_component.data.id
      }
    }, [_vm._v(_vm._s(generic_component.data.name))]), _vm._v(" "), (!generic_component.data.active) ? _c('span', [_vm._v(" - " + _vm._s(_vm.$t('labels.inactive')))]) : _vm._e()])]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/generic_component_types/' + generic_component.data.type.id
      }
    }, [_vm._v(_vm._s(generic_component.data.type.name_singular))])])]), _vm._v(" "), (_vm.hideCols.indexOf('controlunit') === -1) ? _c('td', {
      staticClass: "hide-on-small-only"
    }, [(generic_component.data.controlunit) ? _c('span', [_c('i', {
      staticClass: "mdi mdi-24px mdi-developer-board"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/controlunits/' + generic_component.data.controlunit.id
      }
    }, [_vm._v(_vm._s(generic_component.data.controlunit.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/generic_components/' + generic_component.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [_c('td', {
      attrs: {
        "colspan": "4"
      }
    }, _vm._l((generic_component.data.component_properties), function(prop, index) {
      return _c('div', [_vm._v("\n                                " + _vm._s(prop.name) + ": " + _vm._s(prop.value) + "\n                            ")])
    }))])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9bc6f4d2", module.exports)
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 4,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'display_name',
          path: 'display_name',
          col: 0
        },
        {
          name: 'type',
          path: 'mimetype',
          col: 1
        },
        {
          name: 'size',
          path: 'size',
          noFilter: true,
          col: 2
        },
        {
          name: 'created_at',
          path: 'created_at',
          noFilter: true,
          col: 3
        },
        {
          noSort: true,
          noFilter: true,
          col: 4,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.files), function(file) {
    return [_c('tbody', [_c('tr', {
      staticClass: "collapsible-header"
    }, [_c('td', [(_vm.showOptionSelect) ? _c('span', [_c('input', {
      attrs: {
        "name": "file",
        "type": "radio",
        "id": file.data.id
      },
      domProps: {
        "value": file.data.id
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": file.data.id
      }
    })]) : _vm._e(), _vm._v(" "), _c('span', [_c('i', {
      class: 'mdi mdi-24px mdi-' + file.data.icon
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/files/' + file.data.id
      }
    }, [_vm._v(_vm._s(file.data.display_name))])])]), _vm._v(" "), _c('td', [_c('span', [_vm._v("\n                                " + _vm._s(file.data.mimetype) + "\n                            ")])]), _vm._v(" "), _c('td', [(file.data.size / 1024 > 1024) ? _c('span', [_vm._v("\n                                " + _vm._s(Math.round(file.data.size / 1024 / 1024, 1)) + " MB\n                            ")]) : _c('span', [_vm._v("\n                                " + _vm._s(Math.round(file.data.size / 1024, 0)) + " KB\n                            ")])]), _vm._v(" "), _c('td', [_vm._v("\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(file.data.timestamps.created_diff).unit, {
        val: _vm.$getMatchingTimeDiff(file.data.timestamps.created_diff).val
      }
    )) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticClass: "hide-on-small-only"
    }, [(_vm.backgroundSelectorClassName && _vm.backgroundSelectorId && file.data.mimetype.indexOf('image') !== -1) ? _c('span', [_c('a', {
      attrs: {
        "href": '/files/set-background/' + _vm.backgroundSelectorClassName + '/' + _vm.backgroundSelectorId + '/' + file.data.id
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-image tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.set_as_background') + '</div>'
      }
    })])]) : _vm._e(), _vm._v(" "), _c('span', [_c('a', {
      attrs: {
        "href": '/files/' + file.data.id + '/edit'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-24px mdi-pencil"
    })])])])]), _vm._v(" "), _c('tr', {
      staticClass: "collapsible-body"
    }, [(_vm.showOptionSelect) ? _c('td') : _vm._e(), _vm._v(" "), _c('td', {
      attrs: {
        "colspan": "4"
      }
    }, [(file.data.mimetype.startsWith('image') && file.data.thumb != undefined) ? _c('img', {
      attrs: {
        "src": file.data.thumb.path_external
      }
    }) : _vm._e()])])])]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a1773e8c", module.exports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.containerClasses
  }, [_c('div', {
    staticClass: "col s12 m12 l4"
  }, [(_vm.file.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-attachment"
  }), _vm._v("\n                " + _vm._s(_vm.$tc("labels.files", 1)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.$t("labels.size")) + ": " + _vm._s((_vm.file.data.size / 1024 / 1024).toFixed(2)) + " MB")]), _c('br'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("labels.type")) + ": " + _vm._s(_vm.file.data.mimetype))])]), _vm._v(" "), _c('div', [_c('p', [_c('strong', [_vm._v(_vm._s(_vm.$t('labels.associated_with')) + ":")])]), _vm._v(" "), _vm._l((_vm.file.data.models), function(model) {
    return _c('p', [_c('i', {
      class: 'mdi mdi-18px mdi-' + model.icon
    }), _vm._v(" "), (!model.name && !model.display_name) ? _c('a', {
      attrs: {
        "href": model.url
      }
    }, [_vm._v(_vm._s(model.title))]) : _vm._e(), _vm._v(" "), (model.name && !model.display_name) ? _c('a', {
      attrs: {
        "href": model.url
      }
    }, [_vm._v(_vm._s(model.name))]) : _vm._e(), _vm._v(" "), (model.display_name) ? _c('a', {
      attrs: {
        "href": model.url
      }
    }, [_vm._v(_vm._s(model.display_name))]) : _vm._e(), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": '/files/associate/' + model.class + '/' + model.id + '/' + _vm.file.data.id
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '/files/' + _vm.file.data.id + '/edit'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.edit")))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": '/files/' + _vm.file.data.id + '/download/' + _vm.file.data.display_name
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.download")))])])]) : _c('div', [_c('loading-card-widget')], 1)]), _vm._v(" "), (_vm.file.data && _vm.file.data.is_image && _vm.file.data.thumb !== _vm.undefiend) ? _c('div', {
    staticClass: "col s12 m12 l8"
  }, [(_vm.file.data) ? _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('span', [_vm._v(_vm._s(_vm.$t('labels.preview')))])]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('img', {
    attrs: {
      "src": _vm.file.data.thumb.path_external
    }
  })])]) : _c('div', [_c('loading-card-widget')], 1)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c121560a", module.exports)
  }
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('div', {
    staticClass: "modal",
    staticStyle: {
      "min-height": "800px"
    },
    attrs: {
      "id": 'modal_add_feeding_' + _vm.animalId
    }
  }, [_c('form', {
    attrs: {
      "action": '/api/v1/animals/' + _vm.animalId + '/feedings',
      "data-method": "POST",
      "onsubmit": "window.submit_form"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t("labels.just_fed")))]), _vm._v(" "), _c('select', {
    attrs: {
      "name": "meal_type",
      "id": "meal_type"
    }
  }, _vm._l((_vm.feeding_types), function(ft) {
    return _c('option', {
      domProps: {
        "value": ft
      }
    }, [_vm._v(_vm._s(ft))])
  })), _vm._v(" "), _c('label', {
    attrs: {
      "for": "meal_type"
    }
  }, [_vm._v(_vm._s(_vm.$t("labels.meal_type")))]), _vm._v(" "), _c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.date'),
      "name": "created_at"
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t('labels.date')))])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn modal-action modal-close waves-effect waves-light",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.save")) + "\n                        "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-silverware-variant"
  }), _vm._v("\n                " + _vm._s(_vm.$tc("labels.animal_feedings", 2)) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_vm._l((_vm.feedings), function(feeding) {
    return _c('div', [_c('div', {
      staticClass: "row row-no-margin"
    }, [(feeding.data.timestamps.created_diff.days > 1) ? _c('span', [_vm._v(_vm._s(_vm.$t('units.days_ago', {
      val: feeding.data.timestamps.created_diff.days
    })))]) : _vm._e(), _vm._v(" "), (feeding.data.timestamps.created_diff.days <= 1 && feeding.data.timestamps.created_diff.hours > 1) ? _c('span', [_vm._v(_vm._s(_vm.$t('units.hours_ago', {
      val: feeding.data.timestamps.created_diff.hours
    })))]) : _vm._e(), _vm._v(" "), (feeding.data.timestamps.created_diff.days <= 1 && feeding.data.timestamps.created_diff.hours <= 1) ? _c('span', [_vm._v(_vm._s(_vm.$t('units.just_now')))]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(" - " + _vm._s(feeding.data.type))]), _vm._v(" "), _c('span', {
      staticClass: "right"
    }, [_c('a', {
      staticClass: "red-text",
      attrs: {
        "href": '/animals/' + _vm.animalId + '/feedings/' + feeding.data.id + '/delete'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-delete"
    })])])])])
  }), _vm._v(" "), (_vm.feedings.length < 1) ? _c('div', [_c('p', [_vm._v(_vm._s(_vm.$t('labels.no_data')))])]) : _vm._e(), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false,
      "mini": true
    }
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "card-action"
  }, [_c('a', {
    attrs: {
      "href": '#modal_add_feeding_' + _vm.animalId,
      "onclick": '$(\'#modal_add_feeding_' + _vm.animalId + '\').modal(); $(\'#modal_add_feeding_' + _vm.animalId + ' select\').material_select(); $(\'#modal_add_feeding_' + _vm.animalId + '\').modal(\'open\');'
    }
  }, [_vm._v(_vm._s(_vm.$t("buttons.add")))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cd3f709c", module.exports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('pagination', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.animalId === null),
      expression: "animalId === null"
    }],
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "show-filters": _vm.showFilters,
      "filter-fields": [{
          name: 'display_name',
          path: 'display_name'
        },
        {
          name: 'common_name',
          path: 'common_name'
        },
        {
          name: 'latin_name',
          path: 'latin_name'
        }
      ]
    }
  }), _vm._v(" "), _c('div', {
    class: _vm.containerClasses,
    attrs: {
      "id": _vm.containerId
    }
  }, _vm._l((_vm.animals), function(animal) {
    return _c('div', {
      class: _vm.wrapperClasses
    }, [(animal.data) ? [_c('animal-add-feeding-modal', {
      attrs: {
        "animalId": animal.data.id,
        "feedingTypes": _vm.feeding_types,
        "containerId": 'modal_add_weight_' + animal.data.id
      }
    }), _vm._v(" "), _c('animal-add-weight-modal', {
      attrs: {
        "animalId": animal.data.id,
        "containerId": 'modal_add_weight_' + animal.data.id
      }
    })] : _vm._e(), _vm._v(" "), (animal.data) ? _c('div', {
      staticClass: "card"
    }, [_c('div', {
      staticClass: "card-image terrarium-card-image",
      style: (animal.data.default_background_filepath ? 'background-image: url(\'' + animal.data.default_background_filepath + '\');' : 'background-image: url(\'/svg/Ciliatus_Logo.svg\'); background-position: top center;')
    }, [_c('div', {
      staticClass: "card-title"
    }, [_c('span', [_c('a', {
      attrs: {
        "href": '/animals/' + animal.data.id
      }
    }, [_vm._v(_vm._s(animal.data.display_name))])]), _vm._v(" "), _c('loading-indicator', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (animal.data.loading_data),
        expression: "animal.data.loading_data"
      }],
      attrs: {
        "size": 20
      }
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!"
      }
    }, [(!animal.data.death_date) ? _c('i', {
      staticClass: "mdi mdi-24px mdi-dots-vertical right activator white-text"
    }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "card-content"
    }, [_c('div', [_c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (animal.data.latin_name),
        expression: "animal.data.latin_name"
      }]
    }, [_vm._v(_vm._s(animal.data.latin_name) + ",")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (animal.data.common_name && !animal.data.latin_name),
        expression: "animal.data.common_name && !animal.data.latin_name"
      }]
    }, [_vm._v(_vm._s(animal.data.common_name) + ",")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (animal.data.birth_date || animal.data.death_date),
        expression: "animal.data.birth_date || animal.data.death_date"
      }]
    }, [_vm._v(_vm._s(animal.data.age_value) + " " + _vm._s(_vm.$tc("units." + animal.data.age_unit, animal.data.age_value)))]), _vm._v(" "), (animal.data.gender === 'female') ? _c('i', {
      staticClass: "mdi mdi-gender-female"
    }) : _vm._e(), _vm._v(" "), (animal.data.gender === 'male') ? _c('i', {
      staticClass: "mdi mdi-gender-male"
    }) : _vm._e(), _vm._v(" "), (animal.data.last_feeding && !animal.data.death_date) ? _c('span', [_c('br'), _vm._v(" "), _c('i', {
      staticClass: "mdi mdi-silverware-variant"
    }), _vm._v("\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(animal.data.last_feeding.timestamps.created_diff).unit, {
        val: _vm.$getMatchingTimeDiff(animal.data.last_feeding.timestamps.created_diff).val
      }
    )) + "\n                            " + _vm._s(animal.data.last_feeding.name) + "\n                        ")]) : _vm._e(), _vm._v(" "), (animal.data.last_weighing && !animal.data.death_date) ? _c('span', [_c('br'), _vm._v(" "), _c('i', {
      staticClass: "mdi mdi-download"
    }), _vm._v("\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(animal.data.last_weighing.timestamps.created_diff).unit, {
        val: _vm.$getMatchingTimeDiff(animal.data.last_weighing.timestamps.created_diff).val
      }
    )) + "\n                            " + _vm._s(animal.data.last_weighing.value) + _vm._s(animal.data.last_weighing.name) + "\n                            "), (animal.data.last_weighing.trend && animal.data.last_weighing.trend > 0) ? _c('span', {
      staticClass: "green-text tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.animal_weighing.trend') + '</div>'
      }
    }, [_vm._v("\n                                (+ " + _vm._s(animal.data.last_weighing.trend) + "%)\n                            ")]) : _vm._e(), _vm._v(" "), (animal.data.last_weighing.trend && animal.data.last_weighing.trend < 0) ? _c('span', {
      staticClass: "red-text tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.animal_weighing.trend') + '</div>'
      }
    }, [_vm._v("\n                                (" + _vm._s(animal.data.last_weighing.trend) + "%)\n                            ")]) : _vm._e(), _vm._v(" "), (animal.data.last_weighing.trend && animal.data.last_weighing.trend == 0) ? _c('span', {
      staticClass: "tooltipped",
      attrs: {
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.animal_weighing.trend') + '</div>'
      }
    }, [_vm._v("\n                                (+/- 0%)\n                            ")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), (!animal.data.death_date) ? _c('div', {
      staticClass: "card-reveal"
    }, [_c('div', [_c('strong', [_vm._v(_vm._s(animal.data.display_name))]), _vm._v(" "), _c('i', {
      staticClass: "mdi mdi-24px mdi-close right card-title card-title-small"
    })]), _vm._v(" "), (_vm.terrarium = _vm.terraria.filter(function (t) { return t.id === animal.data.terrarium_id; })[0]) ? _c('p', [(_vm.terrarium.data) ? [_c('i', {
      staticClass: "mdi mdi-18px mdi-trackpad"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": '/terraria/' + _vm.terrarium.data.id
      }
    }, [_vm._v(_vm._s(_vm.terrarium.data.display_name))])] : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-silverware-variant"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!",
        "href": '#modal_just_fed_' + animal.data.id,
        "onclick": '$(\'#modal_just_fed_' + animal.data.id + '\').modal(); $(\'#modal_just_fed_' + animal.data.id + ' select\').material_select(); $(\'#modal_just_fed_' + animal.data.id + '\').modal(\'open\');'
      }
    }, [_vm._v(_vm._s(_vm.$t("labels.just_fed")))])]), _vm._v(" "), _c('p', [_c('i', {
      staticClass: "mdi mdi-18px mdi-weight-kilogram"
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": "#!",
        "href": '#modal_add_weight_' + animal.data.id,
        "onclick": '$(\'#modal_add_weight_' + animal.data.id + '\').modal(); $(\'#modal_add_weight_' + animal.data.id + ' select\').material_select(); $(\'#modal_add_weight_' + animal.data.id + '\').modal(\'open\');'
      }
    }, [_vm._v(_vm._s(_vm.$t("labels.add_weight")))])])]) : _vm._e()]) : _c('div', [_c('loading-card-widget')], 1)], 2)
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d9003c26", module.exports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    attrs: {
      "id": _vm.containerId
    }
  }, [_c('form', {
    attrs: {
      "action": '/api/v1/animals/' + _vm.animalId + '/weighings',
      "data-method": "POST"
    },
    on: {
      "submit": _vm.submit
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('h4', [_vm._v(_vm._s(_vm.$t("labels.add_weight")))]), _vm._v(" "), _c('input', {
    attrs: {
      "name": "weight",
      "id": "weight",
      "placeholder": _vm.$t('labels.weight') + '/g'
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "weight"
    }
  }, [_vm._v(_vm._s(_vm.$t("labels.weight")) + "/g")]), _vm._v(" "), _c('input', {
    staticClass: "datepicker",
    attrs: {
      "type": "date",
      "placeholder": _vm.$t('labels.date'),
      "name": "created_at"
    }
  }), _vm._v(" "), _c('label', [_vm._v(_vm._s(_vm.$t('labels.date')))])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn modal-action modal-close waves-effect waves-light"
  }, [_vm._v(_vm._s(_vm.$t("buttons.save")) + "\n                "), _c('i', {
    staticClass: "mdi mdi-18px mdi-floppy left"
  })])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d97de654", module.exports)
  }
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight collapsible",
    attrs: {
      "data-collapsible": "expandable"
    }
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 3,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'name',
          path: 'name',
          col: 0
        },
        {
          name: 'controlunit',
          path: 'controlunit.name',
          col: 1,
          class: 'hide-on-small-only'
        },
        {
          noSort: true,
          noFilter: true,
          col: 2,
          class: 'hide-on-small-only'
        }
      ]
    }
  }), _vm._v(" "), _vm._l((_vm.component_types), function(type) {
    return [((_vm.component_list = _vm._self[type]).length > 0) ? [_vm._l((_vm.component_list), function(component) {
      return [(component.data) ? _c('tbody', [_c('tr', {
        staticClass: "collapsible-header"
      }, [_c('td', [_c('span', [_c('i', {
        class: 'mdi mdi-18px mdi-' + component.data.icon
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": component.data.url
        }
      }, [_vm._v(_vm._s(component.data.name))])])]), _vm._v(" "), (_vm.hideCols.indexOf('controlunit') === -1) ? _c('td', {
        staticClass: "hide-on-small-only"
      }, [(component.data.controlunit) ? _c('span', [_c('i', {
        staticClass: "mdi mdi-24px mdi-developer-board"
      }), _vm._v(" "), _c('a', {
        attrs: {
          "href": '/controlunits/' + component.data.controlunit.id
        }
      }, [_vm._v(_vm._s(component.data.controlunit.name))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('td', {
        staticClass: "hide-on-small-only"
      }, [_c('span', [_c('a', {
        attrs: {
          "href": component.data.url + '/edit'
        }
      }, [_c('i', {
        staticClass: "mdi mdi-24px mdi-pencil"
      })])])])]), _vm._v(" "), _vm._m(0, true, false)]) : _vm._e()]
    })] : _vm._e()]
  })], 2), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "collapsible-body"
  }, [_c('td', {
    attrs: {
      "colspan": "3"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dddd1da2", module.exports)
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    class: _vm.wrapperClasses
  }, [_c('table', {
    staticClass: "responsive highlight"
  }, [_c('table-filter', {
    ref: "table_filter",
    attrs: {
      "cols": 5,
      "hide-cols": _vm.hideCols,
      "filter-fields": [{
          name: 'source',
          path: 'name',
          col: 0
        },
        {
          name: 'action',
          path: 'action',
          col: 1
        },
        {
          name: 'target',
          path: 'target_name',
          col: 2
        },
        {
          name: 'associated_with',
          path: 'associatedWith_name',
          col: 3
        },
        {
          name: 'created_at',
          path: 'created_at',
          col: 4
        }
      ]
    }
  }), _vm._v(" "), _c('tbody', _vm._l((_vm.logs), function(log) {
    return _c('tr', [_c('td', [(log.source != null) ? _c('span', [_c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (log.source),
        expression: "log.source"
      }],
      class: 'mdi mdi-24px mdi-' + log.source.icon
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": log.source.url
      }
    }, [_vm._v(_vm._s(log.source.name))])]) : _c('span', [_vm._v("\n                            " + _vm._s(log.source_name) + "\n                        ")])]), _vm._v(" "), _c('td', [(log.action == 'start') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-play"
    }) : _vm._e(), _vm._v(" "), (log.action == 'finish') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-check"
    }) : _vm._e(), _vm._v(" "), (log.action == 'create') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-plus"
    }) : _vm._e(), _vm._v(" "), (log.action == 'delete') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-delete"
    }) : _vm._e(), _vm._v(" "), (log.action == 'update') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-update"
    }) : _vm._e(), _vm._v(" "), (log.action == 'recover') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-backup-restore"
    }) : _vm._e(), _vm._v(" "), (log.action == 'notify_recovered') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-bell-outline"
    }) : _vm._e(), _vm._v(" "), (log.action == 'notify') ? _c('span', {
      staticClass: "mdi mdi-24px mdi-bell-ring"
    }) : _vm._e(), _vm._v("\n                        " + _vm._s(log.action) + "\n                    ")]), _vm._v(" "), _c('td', [(log.target != null) ? _c('span', [_c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (log.target),
        expression: "log.target"
      }],
      class: 'mdi mdi-24px mdi-' + log.target.icon
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": log.target.url
      }
    }, [_vm._v(_vm._s(log.target.name))])]) : _c('span', [_vm._v("\n                            " + _vm._s(log.target_name) + "\n                        ")])]), _vm._v(" "), _c('td', [(log.associated != null) ? _c('span', [_c('i', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (log.associated),
        expression: "log.associated"
      }],
      class: 'mdi mdi-24px mdi-' + log.associated.icon
    }), _vm._v(" "), _c('a', {
      attrs: {
        "href": log.associated.url
      }
    }, [_vm._v(_vm._s(log.associated.name))])]) : _c('span', [_vm._v("\n                            " + _vm._s(log.associated_name) + "\n                        ")])]), _vm._v(" "), _c('td', [_vm._v("\n                        " + _vm._s(log.timestamps.created) + "\n                    ")])])
  }))], 1), _vm._v(" "), _c('pagination', {
    ref: "pagination",
    attrs: {
      "source-filter": _vm.sourceFilter,
      "enable-filters": false
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e6784bc2", module.exports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days <= 0; })), function(schedule) {
    return _c('div', [_c('animal-add-weight-modal', {
      attrs: {
        "animalId": schedule.data.animal.id,
        "containerId": 'modal_add_weight_' + schedule.data.id
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    class: [_vm.containerClasses, 'masonry-grid'],
    attrs: {
      "id": _vm.containerId
    }
  }, [(_vm.suggestions.length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection info with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-lightbulb-on-outline white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.suggestions.length) + " " + _vm._s(_vm.$tc("labels.suggestions", _vm.suggestions.length)) + "\n                ")]), _vm._v(" "), _vm._l((_vm.suggestions), function(suggestion) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(suggestion.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 60px)"
      }
    }, [_c('a', {
      staticClass: "white-text",
      attrs: {
        "href": suggestion.data.belongsTo_object.url
      }
    }, [_vm._v("\n                                " + _vm._s(suggestion.data.belongsTo_object.display_name || suggestion.data.belongsTo_object.name) + ":\n                            ")]), _vm._v("\n                            " + _vm._s(_vm.$t('messages.suggestions.' + suggestion.data.name + '.' + suggestion.data.violation_type, {
      hour: suggestion.data.value,
      name: suggestion
    })) + "\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/properties/read/Event/' + suggestion.data.id
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-check"
    })])]) : _c('div', [_vm._v("\n                        " + _vm._s(_vm.$t('labels.loading')) + "\n                    ")])])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.controlunits.filter(function (c) { return !c.data.state_ok; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection critical with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-developer-board white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.controlunits.filter(function (c) { return !c.data.state_ok; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.controlunits", _vm.controlunits.filter(function (c) { return !c.data.state_ok; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.critical")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.controlunits.filter(function (c) { return !c.data.state_ok; })), function(controlunit) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(controlunit.data) ? _c('div', [_c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/controlunits/' + controlunit.data.id
      }
    }, [_vm._v(_vm._s(controlunit.data.name))]), _vm._v(" "), _c('span', [_vm._v("(" + _vm._s(_vm.$t("labels.last_heartbeat")) + ": " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(controlunit.data.timestamps.last_heartbeat_diff).unit, {
        val: _vm.$getMatchingTimeDiff(controlunit.data.timestamps.last_heartbeat_diff).val
      }
    )) + ")")])]) : _c('div', [_vm._v("\n                        " + _vm._s(_vm.$t('labels.loading')) + "\n                    ")])])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.terraria.filter(function (t) { return !t.data.state_ok; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection critical with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-trackpad white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.terraria.filter(function (t) { return !t.data.state_ok; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.terraria", _vm.terraria.filter(function (t) { return !t.data.state_ok; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.critical")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.terraria.filter(function (t) { return !t.data.state_ok; })), function(terrarium) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(terrarium.data) ? _c('div', [_c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/terraria/' + terrarium.data.id
      }
    }, [_vm._v(_vm._s(terrarium.data.display_name))]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.data.humidity_critical === true &&
          terrarium.data.temperature_critical !== true),
        expression: "terrarium.data.humidity_critical === true &&\n                                      terrarium.data.temperature_critical !== true"
      }]
    }, [_vm._v("\n                            (" + _vm._s(_vm.$t("labels.humidity")) + ": " + _vm._s(terrarium.data.cooked_humidity_percent) + "%)\n                        ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.data.humidity_critical === true &&
          terrarium.data.temperature_critical === true),
        expression: "terrarium.data.humidity_critical === true &&\n                                      terrarium.data.temperature_critical === true"
      }]
    }, [_vm._v("\n                            (" + _vm._s(_vm.$t("labels.humidity")) + ": " + _vm._s(terrarium.data.cooked_humidity_percent) + "%,\n                            " + _vm._s(_vm.$t("labels.temperature")) + ": " + _vm._s(terrarium.data.cooked_temperature_celsius) + "°C)\n                        ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (terrarium.data.humidity_critical !== true &&
          terrarium.data.temperature_critical === true),
        expression: "terrarium.data.humidity_critical !== true &&\n                                      terrarium.data.temperature_critical === true"
      }]
    }, [_vm._v("\n                            (" + _vm._s(_vm.$t("labels.temperature")) + ": " + _vm._s(terrarium.data.cooked_temperature_celsius) + "°C)\n                        ")])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.physical_sensors.filter(function (p) { return !p.data.state_ok; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection critical with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-switch white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.physical_sensors.filter(function (p) { return !p.data.state_ok; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.physical_sensors", _vm.physical_sensors.filter(function (p) { return !p.data.state_ok; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.critical")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.physical_sensors.filter(function (p) { return !p.data.state_ok; })), function(physical_sensor) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(physical_sensor.data) ? _c('div', [_c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/physical_sensors/' + physical_sensor.data.id
      }
    }, [_vm._v(_vm._s(physical_sensor.data.name))]), _vm._v(" "), _c('span', [_vm._v("(" + _vm._s(_vm.$t("labels.last_heartbeat")) + ":\n                            " + _vm._s(_vm.$t(
      'units.' + _vm.$getMatchingTimeDiff(physical_sensor.data.timestamps.last_heartbeat_diff).unit, {
        val: _vm.$getMatchingTimeDiff(physical_sensor.data.timestamps.last_heartbeat_diff).val
      }
    )) + ")\n                        ")])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days < 0; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection warning with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-silverware white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days < 0; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.animal_feedings", _vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days < 0; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.overdue")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days < 0; })), function(schedule) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(schedule.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 60px)"
      }
    }, [_vm._v("\n                            " + _vm._s(schedule.data.animal.display_name) + ": " + _vm._s(schedule.data.type) + "\n                            (" + _vm._s(_vm.$tc("units.days_since", (schedule.data.due_days * -1), {
      val: (schedule.data.due_days * -1)
    })) + ")\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/feeding_schedules/' + schedule.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/feeding_schedules/' + schedule.data.id + '/done'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-check"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days < 0; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection warning with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-weight-kilogram white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days < 0; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.animal_weighings", _vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days < 0; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.overdue")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days < 0; })), function(schedule) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(schedule.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 60px)"
      }
    }, [_vm._v("\n                            " + _vm._s(schedule.data.animal.display_name) + "\n                            (" + _vm._s(_vm.$tc("units.days_since", (schedule.data.due_days * -1), {
      val: (schedule.data.due_days * -1)
    })) + ")\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/weighing_schedules/' + schedule.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '#modal_add_weight_' + schedule.data.id,
        "onclick": '$(\'#modal_add_weight_' + schedule.data.id + '\').modal(); $(\'#modal_add_weight_' + schedule.data.id + '\').modal(\'open\');'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-check"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days === 0; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-silverware white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days === 0; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.animal_feedings", _vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days === 0; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.due")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.animal_feeding_schedules.filter(function (s) { return s.data.due_days === 0; })), function(schedule) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(schedule.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 60px)"
      }
    }, [_vm._v("\n                            " + _vm._s(schedule.data.animal.display_name) + ": " + _vm._s(schedule.data.type) + "\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/feeding_schedules/' + schedule.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/feeding_schedules/' + schedule.data.id + '/done'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-check"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days === 0; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-weight-kilogram white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days === 0; }).length) + " \n                    " + _vm._s(_vm.$tc("labels.animal_weighings", _vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days === 0; }).length)) + " \n                    " + _vm._s(_vm.$t("labels.due")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.animal_weighing_schedules.filter(function (s) { return s.data.due_days === 0; })), function(schedule) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(schedule.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 60px)"
      }
    }, [_vm._v("\n                            " + _vm._s(schedule.data.animal.display_name) + " " + _vm._s(_vm.$t('labels.today')) + "\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/animals/' + schedule.data.animal.id + '/weighing_schedules/' + schedule.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '#modal_add_weight_' + schedule.data.id,
        "onclick": '$(\'#modal_add_weight_' + schedule.data.id + '\').modal(); $(\'#modal_add_weight_' + schedule.data.id + '\').modal(\'open\');'
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-check"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.action_sequence_schedules.filter(function (s) { return s.data.due_days === 0; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-playlist-play white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.action_sequence_schedules.filter(function (s) { return s.data.states.is_due === true; }).length) + "\n                    " + _vm._s(_vm.$tc("labels.action_sequences", _vm.action_sequence_schedules.filter(function (s) { return s.data.due_days === 0; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.due")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.action_sequence_schedules.filter(function (s) { return s.data.due_days === 0; })), function(schedule) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(schedule.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 30px)"
      }
    }, [_vm._v("\n                            " + _vm._s(schedule.data.timestamps.starts) + ": " + _vm._s(schedule.data.sequence.name) + "\n                        ")]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text tooltipped",
      attrs: {
        "href": '/api/v1/action_sequence_schedules/' + schedule.data.id + '/skip',
        "data-delay": "50",
        "data-html": "true",
        "data-tooltip": '<div style=\'max-width: 300px\'>' + _vm.$t('tooltips.action_sequence_schedules.skip') + '</div>'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.action_sequence_triggers.filter(function (t) { return t.should_be_started; }).length > 0 ||
    _vm.action_sequence_intentions.filter(function (t) { return t.should_be_started; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-playlist-play white-text"
  }), _vm._v("\n                    " + _vm._s((_vm.action_sequence_triggers.filter(function (t) { return t.should_be_started; }).length +
    _vm.action_sequence_intentions.filter(function (t) { return t.should_be_started; }).length)) + "\n                    " + _vm._s(_vm.$tc("labels.action_sequences", _vm.action_sequence_intentions.filter(function (t) { return t.should_be_started; }).length)) + " \n                    " + _vm._s(_vm.$t("labels.should_be_running")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.action_sequence_triggers.filter(function (t) { return t.should_be_started; })), function(trigger) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(trigger.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 30px)"
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-vanish"
    }), _vm._v(" "), (trigger.data.timestamps.last_start !== null) ? _c('a', {
      staticClass: "white-text"
    }, [_vm._v("\n                                " + _vm._s(trigger.data.timestamps.last_start.split(" ")[1]) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/action_sequences/' + trigger.data.sequence.id + '/edit'
      }
    }, [_vm._v("\n                                " + _vm._s(trigger.data.sequence.name) + "\n                            ")])]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/action_sequence_triggers/' + trigger.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })])]) : _vm._e()])
  }), _vm._v(" "), _vm._l((_vm.action_sequence_intentions.filter(function (t) { return t.should_be_started; })), function(intention) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(intention.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 30px)"
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-compass"
    }), _vm._v(" "), (intention.data.timestamps.last_start !== null) ? _c('a', {
      staticClass: "white-text"
    }, [_vm._v("\n                                " + _vm._s(intention.data.timestamps.last_start.split(" ")[1]) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/action_sequences/' + intention.data.sequence.id + '/edit'
      }
    }, [_vm._v("\n                                " + _vm._s(intention.data.sequence.name) + "\n                            ")])]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/action_sequence_intentions/' + intention.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.action_sequence_triggers.filter(function (t) { return t.running; }).length > 0 ||
    _vm.action_sequence_intentions.filter(function (t) { return t.running; }).length > 0) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-playlist-play white-text"
  }), _vm._v("\n                    " + _vm._s((_vm.action_sequence_triggers.filter(function (t) { return t.running; }).length +
    _vm.action_sequence_intentions.filter(function (t) { return t.running; }).length)) + "\n                    " + _vm._s(_vm.$tc("labels.action_sequences", _vm.action_sequence_intentions.filter(function (t) { return t.running; }).length)) + "\n                    " + _vm._s(_vm.$t("labels.running")) + "\n                ")]), _vm._v(" "), _vm._l((_vm.action_sequence_triggers.filter(function (t) { return t.running; })), function(trigger) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(trigger.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 30px)"
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-vanish"
    }), _vm._v(" "), (trigger.data.timestamps.last_start !== null) ? _c('a', {
      staticClass: "white-text"
    }, [_vm._v("\n                                " + _vm._s(trigger.data.timestamps.last_start.split(" ")[1]) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/action_sequences/' + trigger.data.sequence.id + '/edit'
      }
    }, [_vm._v("\n                                " + _vm._s(trigger.data.sequence.name) + "\n                            ")])]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/action_sequence_triggers/' + trigger.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })])]) : _vm._e()])
  }), _vm._v(" "), _vm._l((_vm.action_sequence_intentions.filter(function (t) { return t.running; })), function(intention) {
    return _c('li', {
      staticClass: "collection-item"
    }, [(intention.data) ? _c('div', {
      staticClass: "white-text"
    }, [_c('span', {
      staticStyle: {
        "display": "inline-block",
        "width": "calc(100% - 30px)"
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-compass"
    }), _vm._v(" "), (intention.data.timestamps.last_start !== null) ? _c('a', {
      staticClass: "white-text"
    }, [_vm._v("\n                                " + _vm._s(intention.data.timestamps.last_start.split(" ")[1]) + "\n                            ")]) : _vm._e(), _vm._v(" "), _c('a', {
      staticClass: "white-text",
      attrs: {
        "href": '/action_sequences/' + intention.data.sequence.id + '/edit'
      }
    }, [_vm._v("\n                                " + _vm._s(intention.data.sequence.name) + "\n                            ")])]), _vm._v(" "), _c('a', {
      staticClass: "secondary-content white-text",
      attrs: {
        "href": '/api/v1/action_sequence_intentions/' + intention.data.id + '/skip'
      },
      on: {
        "click": _vm.link_post
      }
    }, [_c('i', {
      staticClass: "mdi mdi-18px mdi-update"
    })])]) : _vm._e()])
  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.terraria.filter(function (t) { return !t.data.state_ok; }).length < 1) ? _c('div', {
    class: _vm.wrapperClasses
  }, [_c('ul', {
    staticClass: "collection ok with-header"
  }, [_c('li', {
    staticClass: "collection-header"
  }, [_c('i', {
    staticClass: "mdi mdi-18px mdi-trackpad white-text"
  }), _vm._v("\n                    " + _vm._s(_vm.terraria_ok_count) + "\n                    " + _vm._s(_vm.$tc("labels.terraria", _vm.terraria_ok_count)) + "\n                ")]), _vm._v(" "), _c('li', {
    staticClass: "collection-item"
  }, [_c('div', {
    staticClass: "white-text"
  }, [_vm._v("\n                        " + _vm._s(_vm.terraria_ok_count) + "\n                        " + _vm._s(_vm.$tc("labels.terraria", _vm.terraria_ok_count)) + "\n                        " + _vm._s(_vm.$t("labels.ok")) + "\n                    ")])])])]) : _vm._e()])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc69bb20", module.exports)
  }
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.8
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */


// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if ("development" !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (true) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor,
  isOnce
) {
  // render fns generated by compiler < 2.5.4 does not provide v-once
  // information to runtime so be conservative
  var isOldVersion = arguments.length < 3;
  // if a static tree is generated by v-once, it is cached on the instance;
  // otherwise it is purely static and can be cached on the shared options
  // across all instances.
  var renderFns = this.$options.staticRenderFns;
  var cached = isOldVersion || isOnce
    ? (this._staticTrees || (this._staticTrees = []))
    : (renderFns.cached || (renderFns.cached = []));
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        // _rendered is a flag added by renderSlot, but may not be present
        // if the slot is passed from manually written render functions
        if (slot._rendered || (slot[0] && slot[0].elm)) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (true) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (true) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.8';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = { value: value };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    if (value$1) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state, once$$1) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + "," + (el.staticInFor ? 'true' : 'false') + "," + (once$$1 ? 'true' : 'false') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state, true)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(69).setImmediate))

/***/ }),
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })
/******/ ]);