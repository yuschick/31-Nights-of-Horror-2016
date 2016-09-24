"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('horror-calendar/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('horror-calendar/app', ['exports', 'ember', 'horror-calendar/resolver', 'ember-load-initializers', 'horror-calendar/config/environment'], function (exports, _ember, _horrorCalendarResolver, _emberLoadInitializers, _horrorCalendarConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _horrorCalendarConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _horrorCalendarConfigEnvironment['default'].podModulePrefix,
    Resolver: _horrorCalendarResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _horrorCalendarConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('horror-calendar/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'horror-calendar/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _horrorCalendarConfigEnvironment) {

  var name = _horrorCalendarConfigEnvironment['default'].APP.name;
  var version = _horrorCalendarConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define("horror-calendar/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('horror-calendar/components/imdb-badge', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        store: _ember['default'].inject.service(),

        actions: {
            trackClick: function trackClick(id) {
                this.get('store').findRecord('movies', id).then(function (movie) {
                    // console.log(movie.get('tracking.imdb'));
                    movie.incrementProperty('tracking.imdb');
                    movie.save();
                });
            }
        }
    });
});
define("horror-calendar/components/lf-outlet", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternals.StaticOutlet;
    }
  });
});
define("horror-calendar/components/lf-overlay", ["exports", "liquid-fire/components/lf-overlay"], function (exports, _liquidFireComponentsLfOverlay) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfOverlay["default"];
    }
  });
});
define("horror-calendar/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("horror-calendar/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("horror-calendar/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("horror-calendar/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("horror-calendar/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("horror-calendar/components/liquid-modal", ["exports", "liquid-fire/components/liquid-modal"], function (exports, _liquidFireComponentsLiquidModal) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidModal["default"];
    }
  });
});
define("horror-calendar/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("horror-calendar/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('horror-calendar/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("horror-calendar/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("horror-calendar/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define("horror-calendar/components/lm-container", ["exports", "liquid-fire/components/lm-container"], function (exports, _liquidFireComponentsLmContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLmContainer["default"];
    }
  });
});
define('horror-calendar/components/movie-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('horror-calendar/components/movie-trailer', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
    exports['default'] = _ember['default'].Component.extend({
        store: _ember['default'].inject.service(),

        trackClick: function trackClick(id) {
            this.get('store').findRecord('movies', id).then(function (movie) {
                // console.log(movie.get('tracking.trailer'));
                movie.incrementProperty('tracking.trailer');
                movie.save();
            });
        },

        actions: {
            toggleTrailer: function toggleTrailer(id) {
                var $container = (0, _jquery['default'])('.trailer-container'),
                    self = this;
                $container.toggleClass('active');
                this.controller.toggleProperty('showTrailer');
                (0, _jquery['default'])('.arrow').toggleClass('tuck');
                (0, _jquery['default'])('.wallpaper-image').toggleClass('trailer');

                if (this.controller.get('showTrailer')) {
                    self.trackClick(id);
                }
            }
        }
    });
});
define('horror-calendar/components/nav-arrows', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			fadeWallpaper: function fadeWallpaper() {
				(0, _jquery['default'])('.card-sub-header, .wallpaper-image').removeClass('active');
				(0, _jquery['default'])('.card-content, .trailer-content').fadeOut(10);
			}
		}
	});
});
define('horror-calendar/components/title-bar', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('horror-calendar/components/wallpaper-image', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('horror-calendar/components/watch-icons', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        store: _ember['default'].inject.service(),

        actions: {
            trackClick: function trackClick(id, platform) {
                this.get('store').findRecord('movies', id).then(function (movie) {
                    // console.log(movie.get('tracking.'+platform));
                    movie.incrementProperty('tracking.' + platform);
                    movie.save();
                });
            }
        }
    });
});
define('horror-calendar/components/youtube-trailer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('horror-calendar/controllers/movie-trailer', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		showTrailer: false
	});
});
define('horror-calendar/controllers/watch-icons', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('horror-calendar/helpers/date-text', ['exports', 'ember'], function (exports, _ember) {
	exports.dateText = dateText;

	function dateText(day) {
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var dayFromDate = new Date("October " + parseInt(day) + ", 2016");
		return days[dayFromDate.getDay()] + ', October ' + parseInt(day);
	}

	exports['default'] = _ember['default'].Helper.helper(dateText);
});
define('horror-calendar/helpers/decrement-num', ['exports', 'ember'], function (exports, _ember) {
  exports.decrementNum = decrementNum;

  function decrementNum(params /*, hash*/) {
    return parseInt(parseInt(params[0]) - 1);
  }

  exports['default'] = _ember['default'].Helper.helper(decrementNum);
});
define('horror-calendar/helpers/display-nav-arrows', ['exports', 'ember'], function (exports, _ember) {
  exports.displayNavArrows = displayNavArrows;

  function displayNavArrows(params, vals) {
    if (parseInt(vals.id) === 1 && vals.dir === 'prev' || parseInt(vals.id) === 31 && vals.dir === 'next') {
      return true;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(displayNavArrows);
});
define('horror-calendar/helpers/increment-num', ['exports', 'ember'], function (exports, _ember) {
  exports.incrementNum = incrementNum;

  function incrementNum(params /*, hash*/) {
    return parseInt(parseInt(params[0]) + 1);
  }

  exports['default'] = _ember['default'].Helper.helper(incrementNum);
});
define('horror-calendar/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define("horror-calendar/helpers/prevent-orphan", ["exports", "ember"], function (exports, _ember) {
		exports.preventOrphan = preventOrphan;

		function preventOrphan(params) {
				var text = params[0];
				var n = text.toLowerCase().lastIndexOf(" ");
				var pat = new RegExp(" ", "i");
				return text.slice(0, n) + text.slice(n).replace(pat, "&nbsp;");
		}

		exports["default"] = _ember["default"].Helper.helper(preventOrphan);
});
define('horror-calendar/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('horror-calendar/initializers/allow-link-action', ['exports', 'ember-link-action/initializers/allow-link-action'], function (exports, _emberLinkActionInitializersAllowLinkAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionInitializersAllowLinkAction['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionInitializersAllowLinkAction.initialize;
    }
  });
});
define('horror-calendar/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'horror-calendar/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _horrorCalendarConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_horrorCalendarConfigEnvironment['default'].APP.name, _horrorCalendarConfigEnvironment['default'].APP.version)
  };
});
define('horror-calendar/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('horror-calendar/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('horror-calendar/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('horror-calendar/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('horror-calendar/initializers/export-application-global', ['exports', 'ember', 'horror-calendar/config/environment'], function (exports, _ember, _horrorCalendarConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_horrorCalendarConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _horrorCalendarConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_horrorCalendarConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('horror-calendar/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("horror-calendar/initializers/liquid-fire", ["exports", "liquid-fire/router-dsl-ext", "liquid-fire/ember-internals"], function (exports, _liquidFireRouterDslExt, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('horror-calendar/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('horror-calendar/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("horror-calendar/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('horror-calendar/mixins/link-action', ['exports', 'ember-link-action/mixins/link-action'], function (exports, _emberLinkActionMixinsLinkAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLinkActionMixinsLinkAction['default'];
    }
  });
});
define('horror-calendar/models/movies', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr(),
		year: _emberData['default'].attr(),
		summary: _emberData['default'].attr(),
		notes: _emberData['default'].attr(),
		image: _emberData['default'].attr(),
		imdb: _emberData['default'].attr(),
		trailer: _emberData['default'].attr(),
		watch: _emberData['default'].attr(),
		label: _emberData['default'].attr(),
		tracking: _emberData['default'].attr()
	});
});
define('horror-calendar/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('horror-calendar/router', ['exports', 'ember', 'horror-calendar/config/environment'], function (exports, _ember, _horrorCalendarConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _horrorCalendarConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.route('movie', { path: '/:movie_id' });
    });

    exports['default'] = Router;
});
define('horror-calendar/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('horror-calendar/routes/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel() {
            var now = new Date();
            var month = now.getMonth(),
                date = now.getDate();

            if (month === 9 && date !== 1) {
                this.transitionTo('movie', date - 1);
            } else {
                this.transitionTo('movie', 1);
            }
        }
    });
});
define('horror-calendar/routes/movie', ['exports', 'ember', 'jquery', 'ember-delay/delay'], function (exports, _ember, _jquery, _emberDelayDelay) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            var self = this;
            return (0, _emberDelayDelay['default'])(100).then(function () {
                return self.store.findRecord('movies', params.movie_id);
            });
        },
        afterModel: function afterModel(movies) {
            if (movies.get('label')) {
                (0, _emberDelayDelay['default'])(200).then(function () {
                    (0, _jquery['default'])('.card-sub-header').addClass('active');
                });
            }

            (0, _emberDelayDelay['default'])(250).then(function () {
                (0, _jquery['default'])('.wallpaper-image').addClass('active');
                (0, _jquery['default'])('.card-content, .trailer-content').fadeIn(50);
            });
        }
    });
});
define('horror-calendar/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('horror-calendar/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('horror-calendar/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("horror-calendar/services/liquid-fire-modals", ["exports", "liquid-fire/modals"], function (exports, _liquidFireModals) {
  exports["default"] = _liquidFireModals["default"];
});
define("horror-calendar/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define("horror-calendar/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 10
          }
        },
        "moduleName": "horror-calendar/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "component", ["title-bar"], [], ["loc", [null, [1, 0], [1, 25]]]], ["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/components/imdb-badge", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "horror-calendar/templates/components/imdb-badge.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "imdb");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "imdbRatingPlugin");
        dom.setAttribute(el2, "data-user", "ur62892685");
        dom.setAttribute(el2, "data-style", "p4");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "src", "http://g-ecx.images-amazon.com/images/G/01/imdb/plugins/rating/images/imdb_31x14.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" IMDB Script ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [0]);
        var element2 = dom.childAt(element1, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'data-title');
        morphs[1] = dom.createAttrMorph(element1, 'href');
        morphs[2] = dom.createAttrMorph(element2, 'alt');
        morphs[3] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["attribute", "data-title", ["concat", [["get", "imdb", ["loc", [null, [2, 72], [2, 76]]]]]]], ["attribute", "href", ["concat", ["http://www.imdb.com/title/", ["get", "imdb", ["loc", [null, [2, 133], [2, 137]]]]]]], ["attribute", "alt", ["concat", [["get", "title", ["loc", [null, [2, 260], [2, 265]]]], " (", ["get", "year", ["loc", [null, [2, 271], [2, 275]]]], ") on IMDb"]]], ["element", "action", ["trackClick", ["get", "movieId", ["loc", [null, [2, 310], [2, 317]]]]], ["preventDefault", false], ["loc", [null, [2, 288], [2, 340]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/components/movie-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 12
            },
            "end": {
              "line": 9,
              "column": 12
            }
          },
          "moduleName": "horror-calendar/templates/components/movie-card.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "card-sub-header");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "movie.label", ["loc", [null, [7, 26], [7, 41]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 16
            },
            "end": {
              "line": 26,
              "column": 16
            }
          },
          "moduleName": "horror-calendar/templates/components/movie-card.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "notes");
          var el2 = dom.createTextNode("[");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("]");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "movie.notes", ["loc", [null, [25, 41], [25, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 6
          }
        },
        "moduleName": "horror-calendar/templates/components/movie-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "card-container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card-inner-container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "card-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "card-content");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "poster");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "sub-container");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "year");
        var el7 = dom.createTextNode("\n                        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element2, [1, 1]);
        var element4 = dom.childAt(element2, [3]);
        var element5 = dom.childAt(element4, [3]);
        var morphs = new Array(11);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element1, 3, 3);
        morphs[2] = dom.createAttrMorph(element3, 'src');
        morphs[3] = dom.createAttrMorph(element3, 'alt');
        morphs[4] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 0, 0);
        morphs[6] = dom.createMorphAt(element5, 3, 3);
        morphs[7] = dom.createUnsafeMorphAt(dom.childAt(element4, [5]), 0, 0);
        morphs[8] = dom.createMorphAt(element4, 7, 7);
        morphs[9] = dom.createMorphAt(element4, 9, 9);
        morphs[10] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["inline", "date-text", [["get", "movie.id", ["loc", [null, [4, 30], [4, 38]]]]], [], ["loc", [null, [4, 18], [4, 40]]]], ["block", "if", [["get", "movie.label", ["loc", [null, [5, 18], [5, 29]]]]], [], 0, null, ["loc", [null, [5, 12], [9, 19]]]], ["attribute", "src", ["concat", ["/assets/images/posters/", ["get", "movie.image", ["loc", [null, [13, 51], [13, 62]]]]]]], ["attribute", "alt", ["concat", [["get", "movie.title", ["loc", [null, [13, 73], [13, 84]]]], "  (", ["get", "movie.year", ["loc", [null, [13, 91], [13, 101]]]], ")"]]], ["content", "movie.title", ["loc", [null, [16, 20], [16, 35]]]], ["content", "movie.year", ["loc", [null, [19, 30], [19, 44]]]], ["inline", "component", ["imdb-badge"], ["imdb", ["subexpr", "@mut", [["get", "movie.imdb", ["loc", [null, [21, 50], [21, 60]]]]], [], []], "title", ["subexpr", "@mut", [["get", "movie.title", ["loc", [null, [21, 67], [21, 78]]]]], [], []], "year", ["subexpr", "@mut", [["get", "movie.year", ["loc", [null, [21, 84], [21, 94]]]]], [], []], "movieId", ["subexpr", "@mut", [["get", "movie.id", ["loc", [null, [21, 103], [21, 111]]]]], [], []]], ["loc", [null, [21, 20], [21, 113]]]], ["inline", "prevent-orphan", [["get", "movie.summary", ["loc", [null, [23, 37], [23, 50]]]]], [], ["loc", [null, [23, 19], [23, 53]]]], ["block", "if", [["get", "movie.notes", ["loc", [null, [24, 22], [24, 33]]]]], [], 1, null, ["loc", [null, [24, 16], [26, 23]]]], ["inline", "component", ["watch-icons"], ["list", ["subexpr", "@mut", [["get", "movie.watch", ["loc", [null, [27, 47], [27, 58]]]]], [], []], "title", ["subexpr", "@mut", [["get", "movie.title", ["loc", [null, [27, 65], [27, 76]]]]], [], []], "movieId", ["subexpr", "@mut", [["get", "movie.id", ["loc", [null, [27, 85], [27, 93]]]]], [], []]], ["loc", [null, [27, 16], [27, 95]]]], ["inline", "component", ["movie-trailer"], ["vid", ["subexpr", "@mut", [["get", "movie.trailer", ["loc", [null, [30, 40], [30, 53]]]]], [], []], "movieId", ["subexpr", "@mut", [["get", "movie.id", ["loc", [null, [30, 62], [30, 70]]]]], [], []]], ["loc", [null, [30, 8], [30, 72]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("horror-calendar/templates/components/movie-trailer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "horror-calendar/templates/components/movie-trailer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el1 = dom.createElement("svg");
          dom.setAttribute(el1, "viewBox", "0 0 44.736 44.737");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("g");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("path");
          dom.setAttribute(el3, "d", "M22.368,44.737C10.034,44.737,0,34.702,0,22.369C0,10.035,10.034,0,22.368,0 c12.335,0,22.368,10.035,22.368,22.369C44.736,34.702,34.703,44.737,22.368,44.737z M22.368,4.943 c-9.607,0-17.424,7.816-17.424,17.426c0,9.608,7.817,17.425,17.424,17.425c9.608,0,17.425-7.816,17.425-17.425 C39.792,12.76,31.976,4.943,22.368,4.943z");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("polygon");
          dom.setAttribute(el2, "points", "15.444,33.827 35.292,22.369 15.444,10.91");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          dom.setNamespace(null);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Watch Trailer");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 4
            }
          },
          "moduleName": "horror-calendar/templates/components/movie-trailer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          dom.setNamespace("http://www.w3.org/2000/svg");
          var el1 = dom.createElement("svg");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "viewbox", "0 0 20 20");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("path");
          dom.setAttribute(el2, "d", "M5,5 L20,20 M20,5 L5,20");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 60
            }
          },
          "moduleName": "horror-calendar/templates/components/movie-trailer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", ["youtube-trailer"], ["vid", ["subexpr", "@mut", [["get", "vid", ["loc", [null, [18, 54], [18, 57]]]]], [], []]], ["loc", [null, [18, 20], [18, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "horror-calendar/templates/components/movie-trailer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "trailer-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "trailer-content");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["toggleTrailer", ["get", "movieId", ["loc", [null, [3, 54], [3, 61]]]]], [], ["loc", [null, [3, 29], [3, 63]]]], ["block", "unless", [["get", "showTrailer", ["loc", [null, [4, 14], [4, 25]]]]], [], 0, 1, ["loc", [null, [4, 4], [16, 15]]]], ["block", "if", [["get", "showTrailer", ["loc", [null, [18, 6], [18, 17]]]]], [], 2, null, ["loc", [null, [18, 0], [18, 67]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("horror-calendar/templates/components/nav-arrows", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 6,
                "column": 6
              }
            },
            "moduleName": "horror-calendar/templates/components/nav-arrows.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "arrow prev");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.setNamespace("http://www.w3.org/2000/svg");
            var el2 = dom.createElement("svg");
            dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
            dom.setAttribute(el2, "viewbox", "0 0 6 10");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("path");
            dom.setAttribute(el3, "d", "m5 0l-5 5 5 5 1-1-4-4 4-4");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "horror-calendar/templates/components/nav-arrows.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["movie", ["subexpr", "decrement-num", [["get", "id", ["loc", [null, [2, 34], [2, 36]]]]], [], ["loc", [null, [2, 19], [2, 37]]]]], ["invokeAction", "fadeWallpaper"], 0, null, ["loc", [null, [2, 0], [6, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 0
              },
              "end": {
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "horror-calendar/templates/components/nav-arrows.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "arrow next");
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.setNamespace("http://www.w3.org/2000/svg");
            var el2 = dom.createElement("svg");
            dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
            dom.setAttribute(el2, "viewbox", "0 0 6 10");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("path");
            dom.setAttribute(el3, "d", "m1 0l5 5-5 5-1-1 4-4-4-4");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "horror-calendar/templates/components/nav-arrows.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["movie", ["subexpr", "increment-num", [["get", "id", ["loc", [null, [10, 34], [10, 36]]]]], [], ["loc", [null, [10, 19], [10, 37]]]]], ["invokeAction", "fadeWallpaper"], 0, null, ["loc", [null, [10, 0], [14, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 11
          }
        },
        "moduleName": "horror-calendar/templates/components/nav-arrows.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["subexpr", "display-nav-arrows", [], ["id", ["get", "id", ["loc", [null, [1, 33], [1, 35]]]], "dir", "prev"], ["loc", [null, [1, 10], [1, 47]]]]], [], 0, null, ["loc", [null, [1, 0], [7, 11]]]], ["block", "unless", [["subexpr", "display-nav-arrows", [], ["id", ["get", "id", ["loc", [null, [9, 33], [9, 35]]]], "dir", "next"], ["loc", [null, [9, 10], [9, 47]]]]], [], 1, null, ["loc", [null, [9, 0], [15, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("horror-calendar/templates/components/title-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 9
          }
        },
        "moduleName": "horror-calendar/templates/components/title-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createElement("span");
        var el4 = dom.createTextNode("31");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Nights of Horror 2016");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://codepen.io/Yuschick/full/VvPrVp/");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createTextNode("2015 Calendar ");
        dom.appendChild(el3, el4);
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el4 = dom.createElement("svg");
        dom.setAttribute(el4, "xmlns", "http://www.w3.org/2000/svg");
        dom.setAttribute(el4, "x", "0");
        dom.setAttribute(el4, "y", "0");
        dom.setAttribute(el4, "viewbox", "0 0 6 10");
        var el5 = dom.createElement("path");
        dom.setAttribute(el5, "d", "m1 0l5 5-5 5-1-1 4-4-4-4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/components/wallpaper-image", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "horror-calendar/templates/components/wallpaper-image.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "class", "wallpaper-image");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        return morphs;
      },
      statements: [["attribute", "src", ["concat", ["/assets/images/wallpapers/", ["get", "image", ["loc", [null, [1, 38], [1, 43]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/components/watch-icons", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "target", "_blank");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "src", "/assets/images/netflix.jpg");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1, 0]);
            var element7 = dom.childAt(element6, [0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element6, 'href');
            morphs[1] = dom.createElementMorph(element6);
            morphs[2] = dom.createAttrMorph(element7, 'alt');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "list.netflix", ["loc", [null, [6, 19], [6, 31]]]]]]], ["element", "action", ["trackClick", ["get", "movieId", ["loc", [null, [6, 73], [6, 80]]]], "netflix"], ["preventDefault", false], ["loc", [null, [6, 51], [6, 113]]]], ["attribute", "alt", ["concat", ["Watch ", ["get", "title", ["loc", [null, [6, 165], [6, 170]]]], " on Netflix"]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "target", "_blank");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "src", "/assets/images/amazon.png");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1, 0]);
            var element5 = dom.childAt(element4, [0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element4, 'href');
            morphs[1] = dom.createElementMorph(element4);
            morphs[2] = dom.createAttrMorph(element5, 'alt');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "list.amazon", ["loc", [null, [10, 19], [10, 30]]]]]]], ["element", "action", ["trackClick", ["get", "movieId", ["loc", [null, [10, 72], [10, 79]]]], "amazon"], ["preventDefault", false], ["loc", [null, [10, 50], [10, 111]]]], ["attribute", "alt", ["concat", ["Watch ", ["get", "title", ["loc", [null, [10, 162], [10, 167]]]], " on Amazon"]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 15,
                "column": 4
              }
            },
            "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "target", "_blank");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "src", "/assets/images/hulu.png");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1, 0]);
            var element3 = dom.childAt(element2, [0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element2, 'href');
            morphs[1] = dom.createElementMorph(element2);
            morphs[2] = dom.createAttrMorph(element3, 'alt');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "list.hulu", ["loc", [null, [14, 19], [14, 28]]]]]]], ["element", "action", ["trackClick", ["get", "movieId", ["loc", [null, [14, 70], [14, 77]]]], "hulu"], ["preventDefault", false], ["loc", [null, [14, 48], [14, 107]]]], ["attribute", "alt", ["concat", ["Watch ", ["get", "title", ["loc", [null, [14, 156], [14, 161]]]], " on Hulu"]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            },
            "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "target", "_blank");
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "src", "/assets/images/youtube.gif");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 0]);
            var element1 = dom.childAt(element0, [0]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'href');
            morphs[1] = dom.createElementMorph(element0);
            morphs[2] = dom.createAttrMorph(element1, 'alt');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "list.youtube", ["loc", [null, [18, 19], [18, 31]]]]]]], ["element", "action", ["trackClick", ["get", "movieId", ["loc", [null, [18, 73], [18, 80]]]], "youtube"], ["preventDefault", false], ["loc", [null, [18, 51], [18, 113]]]], ["attribute", "alt", ["concat", ["Watch ", ["get", "title", ["loc", [null, [18, 165], [18, 170]]]], " on Youtube"]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "watch-container");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Where to watch:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element8 = dom.childAt(fragment, [0, 3]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element8, 1, 1);
          morphs[1] = dom.createMorphAt(element8, 3, 3);
          morphs[2] = dom.createMorphAt(element8, 5, 5);
          morphs[3] = dom.createMorphAt(element8, 7, 7);
          return morphs;
        },
        statements: [["block", "if", [["get", "list.netflix", ["loc", [null, [5, 10], [5, 22]]]]], [], 0, null, ["loc", [null, [5, 4], [7, 11]]]], ["block", "if", [["get", "list.amazon", ["loc", [null, [9, 10], [9, 21]]]]], [], 1, null, ["loc", [null, [9, 4], [11, 11]]]], ["block", "if", [["get", "list.hulu", ["loc", [null, [13, 10], [13, 19]]]]], [], 2, null, ["loc", [null, [13, 4], [15, 11]]]], ["block", "if", [["get", "list.youtube", ["loc", [null, [17, 10], [17, 22]]]]], [], 3, null, ["loc", [null, [17, 4], [19, 11]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 7
          }
        },
        "moduleName": "horror-calendar/templates/components/watch-icons.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "list", ["loc", [null, [1, 6], [1, 10]]]]], [], 0, null, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("horror-calendar/templates/components/youtube-trailer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "horror-calendar/templates/components/youtube-trailer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "youtube-container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("iframe");
        dom.setAttribute(el2, "width", "720");
        dom.setAttribute(el2, "height", "405");
        dom.setAttribute(el2, "frameborder", "0");
        dom.setAttribute(el2, "allowfullscreen", "");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        return morphs;
      },
      statements: [["attribute", "src", ["concat", ["https://www.youtube.com/embed/", ["get", "vid", ["loc", [null, [2, 74], [2, 77]]]], "?rel=0&autoplay=1&controls=0&showinfo=0"]]]],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 38
          }
        },
        "moduleName": "horror-calendar/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "component", ["wallpaper-image"], ["image", ["subexpr", "@mut", [["get", "model.image", ["loc", [null, [1, 36], [1, 47]]]]], [], []]], ["loc", [null, [1, 0], [1, 49]]]], ["inline", "component", ["nav-arrows"], ["id", ["subexpr", "@mut", [["get", "model.id", ["loc", [null, [2, 28], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]], ["inline", "component", ["movie-card"], ["movie", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 31], [3, 36]]]]], [], []]], ["loc", [null, [3, 0], [3, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("horror-calendar/templates/movie", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 38
          }
        },
        "moduleName": "horror-calendar/templates/movie.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "component", ["wallpaper-image"], ["image", ["subexpr", "@mut", [["get", "model.image", ["loc", [null, [1, 36], [1, 47]]]]], [], []]], ["loc", [null, [1, 0], [1, 49]]]], ["inline", "component", ["nav-arrows"], ["id", ["subexpr", "@mut", [["get", "model.id", ["loc", [null, [2, 28], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]], ["inline", "component", ["movie-card"], ["movie", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 31], [3, 36]]]]], [], []]], ["loc", [null, [3, 0], [3, 38]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('horror-calendar/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define("horror-calendar/transitions", ["exports"], function (exports) {
  exports["default"] = function () {};
});
define('horror-calendar/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('horror-calendar/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('horror-calendar/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('horror-calendar/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('horror-calendar/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('horror-calendar/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('horror-calendar/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('horror-calendar/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('horror-calendar/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('horror-calendar/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('horror-calendar/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('horror-calendar/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('horror-calendar/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('horror-calendar/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('horror-calendar/config/environment', ['ember'], function(Ember) {
  var prefix = 'horror-calendar';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("horror-calendar/app")["default"].create({"name":"horror-calendar","version":"0.0.0+3478ae66"});
}

/* jshint ignore:end */
//# sourceMappingURL=horror-calendar.map