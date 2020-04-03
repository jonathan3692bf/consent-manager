'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var events_1 = __importDefault(require('events'))
var react_1 = __importDefault(require('react'))
var banner_1 = __importDefault(require('./banner'))
var preference_dialog_1 = __importDefault(require('./preference-dialog'))
var cancel_dialog_1 = __importDefault(require('./cancel-dialog'))
var categories_1 = require('./categories')
var emitter = new events_1.default()
function openDialog() {
  emitter.emit('openDialog')
}
exports.openDialog = openDialog
function normalizeDestinations(destinations) {
  var marketingDestinations = []
  var advertisingDestinations = []
  var functionalDestinations = []
  var _loop_1 = function (destination) {
    if (
      categories_1.ADVERTISING_CATEGORIES.find(function (c) {
        return c === destination.category
      })
    ) {
      advertisingDestinations.push(destination)
    } else if (
      categories_1.FUNCTIONAL_CATEGORIES.find(function (c) {
        return c === destination.category
      })
    ) {
      functionalDestinations.push(destination)
    } else {
      // Fallback to marketing
      marketingDestinations.push(destination)
    }
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    _loop_1(destination)
  }
  return {
    marketingDestinations: marketingDestinations,
    advertisingDestinations: advertisingDestinations,
    functionalDestinations: functionalDestinations,
  }
}
var Container = function (props) {
  var _a = react_1.default.useState(false),
    isDialogOpen = _a[0],
    toggleDialog = _a[1]
  var _b = react_1.default.useState(true),
    showBanner = _b[0],
    toggleBanner = _b[1]
  var _c = react_1.default.useState(false),
    isCancelling = _c[0],
    toggleCancel = _c[1]
  var banner = react_1.default.useRef(null)
  var preferenceDialog = react_1.default.useRef(null)
  var cancelDialog = react_1.default.useRef(null)
  var _d = normalizeDestinations(props.destinations),
    marketingDestinations = _d.marketingDestinations,
    advertisingDestinations = _d.advertisingDestinations,
    functionalDestinations = _d.functionalDestinations
  var handleBodyClick = function (e) {
    // Do nothing if no new implicit consent needs to be saved
    if (
      !props.isConsentRequired ||
      !props.implyConsentOnInteraction ||
      props.newDestinations.length === 0
    ) {
      return
    }
    // Ignore propogated clicks from inside the consent manager
    if (
      (banner.current && banner.current.contains(e.target)) ||
      (preferenceDialog.current && preferenceDialog.current.contains(e.target)) ||
      (cancelDialog.current && cancelDialog.current.contains(e.target))
    ) {
      return
    }
    props.saveConsent(undefined, false)
  }
  var showDialog = function () {
    return toggleDialog(true)
  }
  react_1.default.useEffect(function () {
    emitter.on('openDialog', showDialog)
    if (props.isConsentRequired && props.implyConsentOnInteraction) {
      document.body.addEventListener('click', handleBodyClick, false)
    }
    return function () {
      emitter.removeListener('openDialog', showDialog)
      document.body.removeEventListener('click', handleBodyClick, false)
    }
  })
  var onClose = function (behavior) {
    if (behavior === undefined || behavior === 'dismiss' /* DISMISS */) {
      return toggleBanner(false)
    }
    if (behavior === 'accept' /* ACCEPT */) {
      return props.saveConsent()
    }
    if (behavior === 'deny' /* DENY */) {
      var falsePreferences = Object.keys(props.preferences).reduce(function (acc, category) {
        acc[category] = false
        return acc
      }, {})
      props.setPreferences(falsePreferences)
      return props.saveConsent()
    }
    // closeBehavior is a custom function
    var customClosePreferences = behavior(props.preferences)
    props.setPreferences(customClosePreferences)
    props.saveConsent()
    return toggleBanner(false)
  }
  var onBannerClose = function () {
    onClose(props.closeBehavior)
  }
  var handleCategoryChange = function (category, value) {
    var _a
    props.setPreferences(((_a = {}), (_a[category] = value), _a))
  }
  var handleSave = function () {
    toggleDialog(false)
    // If preferences haven't changed, don't reload the page as it's a disruptive experience for end-users
    if (!props.havePreferencesChanged) {
      return
    }
    props.saveConsent()
  }
  var handleCancel = function () {
    toggleDialog(false)
    // Only show the cancel confirmation if there's unconsented destinations
    if (props.newDestinations.length > 0) {
      toggleCancel(true)
    } else {
      props.resetPreferences()
    }
  }
  var handleCancelBack = function () {
    toggleDialog(true)
    toggleCancel(false)
  }
  var handleCancelConfirm = function () {
    toggleCancel(false)
    if (props.cancelBehavior === undefined || props.cancelBehavior === 'dismiss' /* DISMISS */) {
      return props.resetPreferences()
    }
    onClose(props.cancelBehavior)
  }
  return react_1.default.createElement(
    'div',
    null,
    showBanner &&
      props.isConsentRequired &&
      props.newDestinations.length > 0 &&
      react_1.default.createElement(banner_1.default, {
        innerRef: function (current) {
          return (banner = { current: current })
        },
        onClose: onBannerClose,
        onChangePreferences: function () {
          return toggleDialog(true)
        },
        content: props.bannerContent,
        subContent: props.bannerSubContent,
        textColor: props.bannerTextColor,
        backgroundColor: props.bannerBackgroundColor,
      }),
    isDialogOpen &&
      react_1.default.createElement(preference_dialog_1.default, {
        customCategories: props.customCategories,
        destinations: props.destinations,
        preferences: props.preferences,
        innerRef: function (current) {
          return (preferenceDialog = { current: current })
        },
        onCancel: handleCancel,
        onSave: handleSave,
        onChange: handleCategoryChange,
        marketingDestinations: marketingDestinations,
        advertisingDestinations: advertisingDestinations,
        functionalDestinations: functionalDestinations,
        marketingAndAnalytics: props.preferences.marketingAndAnalytics,
        advertising: props.preferences.advertising,
        functional: props.preferences.functional,
        title: props.preferencesDialogTitle,
        content: props.preferencesDialogContent,
        translate: props.translate,
      }),
    isCancelling &&
      react_1.default.createElement(cancel_dialog_1.default, {
        innerRef: function (current) {
          return (cancelDialog = { current: current })
        },
        onBack: handleCancelBack,
        onConfirm: handleCancelConfirm,
        title: props.cancelDialogTitle,
        content: props.cancelDialogContent,
        translate: props.translate,
      })
  )
}
exports.default = Container
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQWlDO0FBQ2pDLGdEQUF5QjtBQUN6QixvREFBNkI7QUFDN0IsMEVBQWtEO0FBQ2xELGtFQUEwQztBQUMxQywyQ0FBNEU7QUFHNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxnQkFBWSxFQUFFLENBQUE7QUFDbEMsU0FBZ0IsVUFBVTtJQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxnQ0FFQztBQW9DRCxTQUFTLHFCQUFxQixDQUFDLFlBQTJCO0lBQ3hELElBQU0scUJBQXFCLEdBQWtCLEVBQUUsQ0FBQTtJQUMvQyxJQUFNLHVCQUF1QixHQUFrQixFQUFFLENBQUE7SUFDakQsSUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxDQUFBOzRCQUVyQyxXQUFXO1FBQ3BCLElBQUksbUNBQXNCLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBRTtZQUNsRSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDMUM7YUFBTSxJQUFJLGtDQUFxQixDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUExQixDQUEwQixDQUFDLEVBQUU7WUFDeEUsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3pDO2FBQU07WUFDTCx3QkFBd0I7WUFDeEIscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3hDOztJQVJILEtBQTBCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWTtRQUFqQyxJQUFNLFdB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
