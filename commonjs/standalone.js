'use strict'
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importDefault(require('react'))
var react_dom_1 = __importDefault(require('react-dom'))
var in_eu_1 = __importDefault(require('@segment/in-eu'))
exports.inEU = in_eu_1.default
var in_regions_1 = __importDefault(require('@segment/in-regions'))
var _1 = require('.')
exports.openConsentManager = _1.openConsentManager
exports.doNotTrack = _1.doNotTrack
var preferences = __importStar(require('./consent-manager-builder/preferences'))
exports.preferences = preferences
exports.version = process.env.VERSION
var props = {}
var containerRef
var localWindow = window
if (localWindow.consentManagerConfig && typeof localWindow.consentManagerConfig === 'function') {
  props = localWindow.consentManagerConfig({
    React: react_1.default,
    version: exports.version,
    openConsentManager: _1.openConsentManager,
    doNotTrack: _1.doNotTrack,
    inEU: in_eu_1.default,
    preferences: preferences,
    inRegions: in_regions_1.default,
  })
  containerRef = props.container
} else {
  throw new Error('window.consentManagerConfig should be a function')
}
if (!containerRef) {
  throw new Error('ConsentManager: container is required')
}
if (!props.writeKey) {
  throw new Error('ConsentManager: writeKey is required')
}
if (typeof props.implyConsentOnInteraction === 'string') {
  props.implyConsentOnInteraction = props.implyConsentOnInteraction === 'true'
}
if (props.closeBehavior !== undefined && typeof props.closeBehavior === 'string') {
  var options = [
    'accept' /* ACCEPT */
      .toString(),
    'deny' /* DENY */
      .toString(),
    'dismiss' /* DISMISS */
      .toString(),
  ]
  if (!options.includes(props.closeBehavior)) {
    throw new Error('ConsentManager: closeBehavior should be one of ' + options)
  }
}
var container = document.querySelector(containerRef)
if (!container) {
  throw new Error('ConsentManager: container not found')
}
react_dom_1.default.render(
  react_1.default.createElement(_1.ConsentManager, __assign({}, props)),
  container
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFuZGFsb25lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF5QjtBQUN6Qix3REFBZ0M7QUFDaEMseURBQWlDO0FBUVEsZUFSbEMsZUFBSSxDQVFrQztBQVA3QyxtRUFBMkM7QUFDM0Msc0JBQWtFO0FBTXpELDZCQU5nQixxQkFBa0IsQ0FNaEI7QUFBRSxxQkFOZ0IsYUFBVSxDQU1oQjtBQUh2QyxpRkFBb0U7QUFHckIsa0NBQVc7QUFEN0MsUUFBQSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUE7QUFHMUMsSUFBSSxLQUFLLEdBQWlDLEVBQUUsQ0FBQTtBQUM1QyxJQUFJLFlBQWdDLENBQUE7QUFFcEMsSUFBTSxXQUFXLEdBQUcsTUFBd0MsQ0FBQTtBQUU1RCxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsSUFBSSxPQUFPLFdBQVcsQ0FBQyxvQkFBb0IsS0FBSyxVQUFVLEVBQUU7SUFDOUYsS0FBSyxHQUFHLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUN2QyxLQUFLLGlCQUFBO1FBQ0wsT0FBTyxpQkFBQTtRQUNQLGtCQUFrQix1QkFBQTtRQUNsQixVQUFVLGVBQUE7UUFDVixJQUFJLGlCQUFBO1FBQ0osV0FBVyxhQUFBO1FBQ1gsU0FBUyxzQkFBQTtLQUNWLENBQUMsQ0FBQTtJQUNGLFlBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFBO0NBQy9CO0tBQU07SUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUE7Q0FDcEU7QUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFO0lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtDQUN6RDtBQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQTtDQUN4RDtBQUVELElBQUksT0FBTyxLQUFLLENBQUMseUJBQXlCLEtBQUssUUFBUSxFQUFFO0lBQ3ZELEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUMseUJBQXlCLEtBQUssTUFBTSxDQUFBO0NBQzdFO0FBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxPQUFPLEtBQUssQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFFO0lBQ2hGLElBQU0sT0FBTyxHQUFHO1FBQ2Qsc0JBQXFCLFFBQVEsRUFBRTtRQUMvQixrQkFBbUIsUUFBUSxFQUFFO1FBQzdCLHdCQUFzQixRQUFRLEVBQUU7S0FDakMsQ0FBQTtJQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMxQyxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFrRCxPQUFTLENBQUMsQ0FBQTtLQUM3RTtDQUNGO0FBRUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN0RCxJQUFJLENBQUMsU0FBUyxFQUFFO0lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0NBQ3ZEO0FBRUQsbUJBQVEsQ0FBQyxNQUFNLENBQUMsOEJBQUMsaUJBQWMsZUFBTSxLQUE2QixFQUFJLEVBQUUsU0FBUyxDQUFDLENBQUEifQ==