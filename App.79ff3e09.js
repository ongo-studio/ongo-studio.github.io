// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/controller/Form.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFormSubmit = void 0;

function handleFormSubmit(e) {
  $(e).on('submit', function (e) {
    e.preventDefault();
  });
}

exports.handleFormSubmit = handleFormSubmit;
},{}],"src/controller/Home.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Home(conf) {
  var greeting = conf.greeting;
  var greetingArr = greeting.split(" "); //first part of the string

  var fp = greetingArr.shift();

  function renderHome() {
    $('#home-greeting').text(getHomeGreeting());
    $('#home-txt').html(getHomeTxt());
  }

  function getHomeGreeting() {
    return fp;
  }

  function getHomeTxt() {
    var greeting = greetingArr.join(" ");
    return "<h2>" + greeting + " <b>\xF6ng\xF6</b></h2>";
  }

  return {
    renderHome: renderHome
  };
}

exports.default = Home;
},{}],"src/controller/Menu.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Menu(items) {
  var menu = '';

  function getMenuItem(item, active) {
    if (active === void 0) {
      active = false;
    }

    return "<a class=\"" + (active ? 'active' : '') + " nav-link\" href=\"#" + item.link + "\">" + item.name + "</a>";
  }

  function getMenu() {
    items.forEach(function (e, i) {
      if (i === 0) menu += getMenuItem(e, true);else menu += getMenuItem(e);
    });
    return menu;
  }

  function handleScroll() {
    $(window).on('scroll', function () {
      $('#menu a').each(function (i, e) {
        var currEl = e.getAttribute('href');
        var navHeight = $('#menu').outerHeight();
        var halfHeight = $(currEl).outerHeight() / 2;

        if ($(currEl).position().top <= $(window).scrollTop() + navHeight + halfHeight) {
          toggleActive(e);
        }
      });
    });
  }

  function handleMenuItemClick() {
    $('.nav-link').each(function (i, e) {
      e.onclick = function () {
        toggleActive(e);
      };
    });
  }

  function toggleActive(e) {
    $(".active").toggleClass('active');
    $(e).toggleClass("active");
  }

  function renderMenu() {
    $('nav').append(getMenu());
  }

  return {
    handleMenuItemClick: handleMenuItemClick,
    handleScroll: handleScroll,
    renderMenu: renderMenu
  };
}

exports.default = Menu;
},{}],"src/public/assets/images/console.svg":[function(require,module,exports) {
module.exports = "/console.44152ff6.svg";
},{}],"src/public/assets/images/phone.svg":[function(require,module,exports) {
module.exports = "/phone.3303c55d.svg";
},{}],"src/public/assets/images/pen.svg":[function(require,module,exports) {
module.exports = "/pen.9748c8f5.svg";
},{}],"src/controller/Services.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var console = require('../public/assets/images/console.svg');

var phone = require('../public/assets/images/phone.svg');

var pen = require('../public/assets/images/pen.svg');

var imgs = [console, phone, pen];

function Services(conf) {
  var title = conf.title;
  var cards = conf.cards;

  function renderServices() {
    $('#services').append(getServices());
  }

  function getCard(img, title, text) {
    return "\n            <section class=\"services-section\">\n                <img src=\"" + img + "\">\n                <div>\n                    <h2>" + title + "</h2>\n                    <p class=\"code\">\n                        " + text + "\n                    </p>\n                </div>\n            </section>\n        ";
  }

  function getServices() {
    var services = "<h2 class=\"title\">" + title + "</h2><div>";
    cards.map(function (e, i) {
      services += getCard(imgs[i], e.title, e.text);
    });
    services += '</div>';
    return services;
  }

  return {
    renderServices: renderServices
  };
}

exports.default = Services;
},{"../public/assets/images/console.svg":"src/public/assets/images/console.svg","../public/assets/images/phone.svg":"src/public/assets/images/phone.svg","../public/assets/images/pen.svg":"src/public/assets/images/pen.svg"}],"src/controller/Contact.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function Contact(conf) {
  var title = conf.title;
  var filesText = conf.filesText;
  var btnText = conf.btnText;
  var namePlaceholder = conf.namePlaceholder;
  var emailPlaceholder = conf.emailPlaceholder;
  var messagePlaceholder = conf.messagePlaceholder;

  function renderContact() {
    $('#form-title').text(getTexts().title);
    $('#attachments-title').text(getTexts().filesText);
    $('#submit-btn').text(getTexts().btnText);
    $("#name").attr("placeholder", getTexts().namePlaceholder);
    $("#email").attr("placeholder", getTexts().emailPlaceholder);
    $("#message").attr("placeholder", getTexts().messagePlaceholder);
  }

  function getTexts() {
    return {
      title: title,
      filesText: filesText,
      btnText: btnText,
      namePlaceholder: namePlaceholder,
      emailPlaceholder: emailPlaceholder,
      messagePlaceholder: messagePlaceholder
    };
  }

  return {
    renderContact: renderContact
  };
}

exports.default = Contact;
},{}],"src/config.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONFIG = {
  menuItems: [{
    name: "Home",
    link: "home"
  }, {
    name: "Sobre",
    link: "about"
  }, {
    name: "Serviços",
    link: "services"
  }, {
    name: "Contato",
    link: "contact"
  }],
  homeContent: {
    greeting: 'Olá, nós somos'
  },
  aboutContent: {
    title: "Sobre nós",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \n               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \n               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in \n               voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  servicesContent: {
    title: "O que fazemos?",
    cards: [{
      title: "Desenvolvimento",
      text: "desenvolvimento de software como: webapps, hotsites, landing pages, android apps."
    }, {
      title: "UI / UX",
      text: "desenvolvimento da jornada e experiência do usuário, UX writing, criação de protótipos."
    }, {
      title: "Design",
      text: "Naming, branding, posts e vídeos para mídias sociais."
    }]
  },
  contactContent: {
    title: "Entre em contato",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "Seu email",
    messagePlaceholder: "Descreva brevemente o motivo de seu contato ...",
    filesText: "anexar",
    btnText: "enviar"
  }
};
exports.default = CONFIG;
},{}],"src/controller/About.controller.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function About(conf) {
  var title = conf.title;
  var text = conf.text;

  function renderAbout() {
    $("#about-title").text(title);
    $("#about-txt").text(text);
  }

  return {
    renderAbout: renderAbout
  };
}

exports.default = About;
},{}],"src/App.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Form_controller_1 = require("./controller/Form.controller");

var Home_controller_1 = __importDefault(require("./controller/Home.controller"));

var Menu_controller_1 = __importDefault(require("./controller/Menu.controller"));

var Services_controller_1 = __importDefault(require("./controller/Services.controller"));

var Contact_controller_1 = __importDefault(require("./controller/Contact.controller"));

var config_1 = __importDefault(require("./config"));

var About_controller_1 = __importDefault(require("./controller/About.controller"));

var menu = Menu_controller_1.default(config_1.default.menuItems);
var about = About_controller_1.default(config_1.default.aboutContent);
var home = Home_controller_1.default(config_1.default.homeContent);
var services = Services_controller_1.default(config_1.default.servicesContent);
var contact = Contact_controller_1.default(config_1.default.contactContent);
$(menu.renderMenu);
$(about.renderAbout);
$(menu.handleMenuItemClick);
$(menu.handleScroll);
$(home.renderHome);
$(services.renderServices);
$(contact.renderContact);
$(Form_controller_1.handleFormSubmit);
},{"./controller/Form.controller":"src/controller/Form.controller.ts","./controller/Home.controller":"src/controller/Home.controller.ts","./controller/Menu.controller":"src/controller/Menu.controller.ts","./controller/Services.controller":"src/controller/Services.controller.ts","./controller/Contact.controller":"src/controller/Contact.controller.ts","./config":"src/config.ts","./controller/About.controller":"src/controller/About.controller.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34505" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/App.ts"], null)
//# sourceMappingURL=/App.79ff3e09.js.map