var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
import React, { PureComponent } from 'react'
import ConsentManagerBuilder from '../consent-manager-builder'
import Container from './container'
import { ADVERTISING_CATEGORIES, FUNCTIONAL_CATEGORIES } from './categories'
import defaultMessages from './default-messages'
var zeroValuePreferences = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null,
}
var ConsentManager = /** @class */ (function (_super) {
  __extends(ConsentManager, _super)
  function ConsentManager() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.getInitialPreferences = function () {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        customCategories = _a.customCategories
      if (initialPreferences) {
        return initialPreferences
      }
      if (!customCategories) {
        return zeroValuePreferences
      }
      var initialCustomPreferences = {}
      Object.keys(customCategories).forEach(function (category) {
        initialCustomPreferences[category] = null
      })
      return initialCustomPreferences
    }
    _this.handleMapCustomPreferences = function (destinations, preferences) {
      var customCategories = _this.props.customCategories
      var destinationPreferences = {}
      var customPreferences = {}
      if (customCategories) {
        for (var _i = 0, _a = Object.keys(customCategories); _i < _a.length; _i++) {
          var preferenceName = _a[_i]
          var value = preferences[preferenceName]
          if (typeof value === 'boolean') {
            customPreferences[preferenceName] = value
          } else {
            customPreferences[preferenceName] = true
          }
        }
        destinations.forEach(function (destination) {
          // Mark custom categories
          Object.entries(customCategories).forEach(function (_a) {
            var categoryName = _a[0],
              integrations = _a[1].integrations
            var consentAlreadySetToFalse = destinationPreferences[destination.id] === false
            var shouldSetConsent = integrations.includes(destination.id)
            if (shouldSetConsent && !consentAlreadySetToFalse) {
              destinationPreferences[destination.id] = customPreferences[categoryName]
            }
          })
        })
        return {
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences,
        }
      }
      // Default unset preferences to true (for implicit consent)
      for (var _b = 0, _c = Object.keys(preferences); _b < _c.length; _b++) {
        var preferenceName = _c[_b]
        var value = preferences[preferenceName]
        if (typeof value === 'boolean') {
          customPreferences[preferenceName] = value
        } else {
          customPreferences[preferenceName] = true
        }
      }
      var customPrefs = customPreferences
      var _loop_1 = function (destination) {
        // Mark advertising destinations
        if (
          ADVERTISING_CATEGORIES.find(function (c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.advertising
        }
        // Mark function destinations
        if (
          FUNCTIONAL_CATEGORIES.find(function (c) {
            return c === destination.category
          }) &&
          destinationPreferences[destination.id] !== false
        ) {
          destinationPreferences[destination.id] = customPrefs.functional
        }
        // Fallback to marketing
        if (!(destination.id in destinationPreferences)) {
          destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics
        }
      }
      for (var _d = 0, destinations_1 = destinations; _d < destinations_1.length; _d++) {
        var destination = destinations_1[_d]
        _loop_1(destination)
      }
      return {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences,
      }
    }
    return _this
  }
  ConsentManager.prototype.render = function () {
    var _this = this
    var _a = this.props,
      writeKey = _a.writeKey,
      otherWriteKeys = _a.otherWriteKeys,
      shouldRequireConsent = _a.shouldRequireConsent,
      implyConsentOnInteraction = _a.implyConsentOnInteraction,
      cookieDomain = _a.cookieDomain,
      bannerContent = _a.bannerContent,
      bannerSubContent = _a.bannerSubContent,
      bannerTextColor = _a.bannerTextColor,
      bannerBackgroundColor = _a.bannerBackgroundColor,
      preferencesDialogTitle = _a.preferencesDialogTitle,
      preferencesDialogContent = _a.preferencesDialogContent,
      cancelDialogTitle = _a.cancelDialogTitle,
      cancelDialogContent = _a.cancelDialogContent,
      customCategories = _a.customCategories,
      onError = _a.onError,
      locale = _a.locale,
      translations = _a.translations
    var translate = function (key) {
      var transDictionary
      var lng
      if (translations) {
        // Not a deep merge, consider changing to lodash
        transDictionary = __assign(
          __assign({}, ConsentManager.defaultProps.translations),
          translations
        )
      } else {
        transDictionary = ConsentManager.defaultProps.translations
      }
      if (locale && transDictionary[locale]) {
        lng = locale
      } else {
        lng = ConsentManager.defaultProps.locale
      }
      return transDictionary[lng][key]
    }
    return React.createElement(
      ConsentManagerBuilder,
      {
        onError: onError,
        writeKey: writeKey,
        otherWriteKeys: otherWriteKeys,
        shouldRequireConsent: shouldRequireConsent,
        cookieDomain: cookieDomain,
        initialPreferences: this.getInitialPreferences(),
        mapCustomPreferences: this.handleMapCustomPreferences,
        customCategories: customCategories,
      },
      function (_a) {
        var destinations = _a.destinations,
          customCategories = _a.customCategories,
          newDestinations = _a.newDestinations,
          preferences = _a.preferences,
          isConsentRequired = _a.isConsentRequired,
          setPreferences = _a.setPreferences,
          resetPreferences = _a.resetPreferences,
          saveConsent = _a.saveConsent,
          havePreferencesChanged = _a.havePreferencesChanged
        return React.createElement(Container, {
          customCategories: customCategories,
          destinations: destinations,
          newDestinations: newDestinations,
          preferences: preferences,
          isConsentRequired: isConsentRequired,
          setPreferences: setPreferences,
          resetPreferences: resetPreferences,
          saveConsent: saveConsent,
          closeBehavior: _this.props.closeBehavior,
          cancelBehavior: _this.props.cancelBehavior,
          implyConsentOnInteraction:
            implyConsentOnInteraction !== null && implyConsentOnInteraction !== void 0
              ? implyConsentOnInteraction
              : ConsentManager.defaultProps.implyConsentOnInteraction,
          bannerContent: bannerContent || translate('ui.banner.content'),
          bannerSubContent: bannerSubContent || translate('ui.banner.subContent'),
          bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor,
          bannerBackgroundColor:
            bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor,
          preferencesDialogTitle: preferencesDialogTitle || translate('ui.preferences.title'),
          preferencesDialogContent: preferencesDialogContent || translate('ui.preferences.content'),
          cancelDialogTitle: cancelDialogTitle || translate('ui.cancel.title'),
          cancelDialogContent: cancelDialogContent || translate('ui.cancel.content'),
          havePreferencesChanged: havePreferencesChanged,
          translate: translate,
        })
      }
    )
  }
  ConsentManager.displayName = 'ConsentManager'
  ConsentManager.defaultProps = {
    otherWriteKeys: [],
    shouldRequireConsent: function () {
      return true
    },
    implyConsentOnInteraction: false,
    onError: undefined,
    cookieDomain: undefined,
    customCategories: undefined,
    bannerTextColor: '#fff',
    bannerBackgroundColor: '#1f4160',
    locale: 'en',
    translations: defaultMessages,
  }
  return ConsentManager
})(PureComponent)
export default ConsentManager
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUM1QyxPQUFPLHFCQUFxQixNQUFNLDRCQUE0QixDQUFBO0FBQzlELE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQTtBQUNuQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFFNUUsT0FBTyxlQUFlLE1BQU0sb0JBQW9CLENBQUE7QUFFaEQsSUFBTSxvQkFBb0IsR0FBd0I7SUFDaEQscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixXQUFXLEVBQUUsSUFBSTtJQUNqQixVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFBO0FBRUQ7SUFBNEMsa0NBQXNDO0lBQWxGO1FBQUEscUVBdU1DO1FBcEZDLDJCQUFxQixHQUFHO1lBQ2hCLElBQUEsZ0JBQXFELEVBQW5ELDBDQUFrQixFQUFFLHNDQUErQixDQUFBO1lBQzNELElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLE9BQU8sa0JBQWtCLENBQUE7YUFDMUI7WUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JCLE9BQU8sb0JBQW9CLENBQUE7YUFDNUI7WUFFRCxJQUFNLHdCQUF3QixHQUFHLEVBQUUsQ0FBQTtZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDN0Msd0JBQXdCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFBO1lBQzNDLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyx3QkFBd0IsQ0FBQTtRQUNqQyxDQUFDLENBQUE7UUFFRCxnQ0FBMEIsR0FBRyxVQUFDLFlBQTJCLEVBQUUsV0FBZ0M7WUFD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
