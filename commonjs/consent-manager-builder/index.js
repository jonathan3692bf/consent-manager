'use strict'
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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this
        }),
      g
    )
    function verb(n) {
      return function (v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
    return r
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = require('react')
var preferences_1 = require('./preferences')
var fetch_destinations_1 = __importDefault(require('./fetch-destinations'))
var analytics_1 = __importDefault(require('./analytics'))
function getNewDestinations(destinations, preferences) {
  var newDestinations = []
  // If there are no preferences then all destinations are new
  if (!preferences) {
    return destinations
  }
  for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
    var destination = destinations_1[_i]
    if (preferences[destination.id] === undefined) {
      newDestinations.push(destination)
    }
  }
  return newDestinations
}
var ConsentManagerBuilder = /** @class */ (function (_super) {
  __extends(ConsentManagerBuilder, _super)
  function ConsentManagerBuilder() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.state = {
      isLoading: true,
      destinations: [],
      newDestinations: [],
      preferences: {},
      isConsentRequired: true,
      havePreferencesChanged: false,
    }
    _this.initialise = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var _a,
          writeKey,
          _b,
          otherWriteKeys,
          _c,
          shouldRequireConsent,
          initialPreferences,
          mapCustomPreferences,
          _d,
          destinationPreferences,
          customPreferences,
          _e,
          isConsentRequired,
          destinations,
          newDestinations,
          preferences,
          hasInitialPreferenceToTrue,
          emptyCustomPreferecences,
          mapped
        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              ;(_a = this.props),
                (writeKey = _a.writeKey),
                (_b = _a.otherWriteKeys),
                (otherWriteKeys =
                  _b === void 0 ? ConsentManagerBuilder.defaultProps.otherWriteKeys : _b),
                (_c = _a.shouldRequireConsent),
                (shouldRequireConsent =
                  _c === void 0 ? ConsentManagerBuilder.defaultProps.shouldRequireConsent : _c),
                (initialPreferences = _a.initialPreferences),
                (mapCustomPreferences = _a.mapCustomPreferences)
              ;(_d = preferences_1.loadPreferences()),
                (destinationPreferences = _d.destinationPreferences),
                (customPreferences = _d.customPreferences)
              return [
                4 /*yield*/,
                Promise.all([
                  shouldRequireConsent(),
                  fetch_destinations_1.default(__spreadArrays([writeKey], otherWriteKeys)),
                ]),
              ]
            case 1:
              ;(_e = _f.sent()), (isConsentRequired = _e[0]), (destinations = _e[1])
              newDestinations = getNewDestinations(destinations, destinationPreferences || {})
              if (mapCustomPreferences) {
                preferences = customPreferences || initialPreferences || {}
                hasInitialPreferenceToTrue = Object.values(initialPreferences || {}).some(Boolean)
                emptyCustomPreferecences = Object.values(customPreferences || {}).every(function (
                  v
                ) {
                  return v === null || v === undefined
                })
                if (hasInitialPreferenceToTrue && emptyCustomPreferecences) {
                  mapped = mapCustomPreferences(destinations, preferences)
                  destinationPreferences = mapped.destinationPreferences
                  customPreferences = mapped.customPreferences
                }
              } else {
                preferences = destinationPreferences || initialPreferences
              }
              analytics_1.default({
                writeKey: writeKey,
                destinations: destinations,
                destinationPreferences: destinationPreferences,
                isConsentRequired: isConsentRequired,
              })
              this.setState({
                isLoading: false,
                destinations: destinations,
                newDestinations: newDestinations,
                preferences: preferences,
                isConsentRequired: isConsentRequired,
              })
              return [2 /*return*/]
          }
        })
      })
    }
    _this.handleSetPreferences = function (newPreferences) {
      _this.setState(function (prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences,
        })
        return __assign(__assign({}, prevState), {
          preferences: preferences,
          havePreferencesChanged: true,
        })
      })
    }
    _this.handleResetPreferences = function () {
      var _a = _this.props,
        initialPreferences = _a.initialPreferences,
        mapCustomPreferences = _a.mapCustomPreferences
      var _b = preferences_1.loadPreferences(),
        destinationPreferences = _b.destinationPreferences,
        customPreferences = _b.customPreferences
      var preferences
      if (mapCustomPreferences) {
        preferences = customPreferences || initialPreferences
      } else {
        preferences = destinationPreferences || initialPreferences
      }
      _this.setState({ preferences: preferences })
    }
    _this.handleSaveConsent = function (newPreferences, shouldReload) {
      var _a = _this.props,
        writeKey = _a.writeKey,
        cookieDomain = _a.cookieDomain,
        mapCustomPreferences = _a.mapCustomPreferences
      _this.setState(function (prevState) {
        var destinations = prevState.destinations,
          existingPreferences = prevState.preferences,
          isConsentRequired = prevState.isConsentRequired
        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences,
        })
        var destinationPreferences
        var customPreferences
        if (mapCustomPreferences) {
          var custom = mapCustomPreferences(destinations, preferences)
          destinationPreferences = custom.destinationPreferences
          customPreferences = custom.customPreferences
          if (customPreferences) {
            // Allow the customPreferences to be updated from mapCustomPreferences
            preferences = customPreferences
          } else {
            // Make returning the customPreferences from mapCustomPreferences optional
            customPreferences = preferences
          }
        } else {
          destinationPreferences = preferences
        }
        var newDestinations = getNewDestinations(destinations, destinationPreferences)
        preferences_1.savePreferences({
          destinationPreferences: destinationPreferences,
          customPreferences: customPreferences,
          cookieDomain: cookieDomain,
        })
        analytics_1.default({
          writeKey: writeKey,
          destinations: destinations,
          destinationPreferences: destinationPreferences,
          isConsentRequired: isConsentRequired,
          shouldReload: shouldReload,
        })
        return __assign(__assign({}, prevState), {
          destinationPreferences: destinationPreferences,
          preferences: preferences,
          newDestinations: newDestinations,
        })
      })
    }
    _this.mergePreferences = function (args) {
      var destinations = args.destinations,
        existingPreferences = args.existingPreferences,
        newPreferences = args.newPreferences
      var preferences
      // how does typeof newPreferecnes === boolean ???
      if (typeof newPreferences === 'boolean') {
        var destinationPreferences = {}
        for (var _i = 0, destinations_2 = destinations; _i < destinations_2.length; _i++) {
          var destination = destinations_2[_i]
          destinationPreferences[destination.id] = newPreferences
        }
        preferences = destinationPreferences
      } else if (newPreferences) {
        preferences = __assign(__assign({}, existingPreferences), newPreferences)
      } else {
        preferences = existingPreferences || {}
      }
      return preferences
    }
    return _this
  }
  ConsentManagerBuilder.prototype.render = function () {
    var _a = this.props,
      children = _a.children,
      customCategories = _a.customCategories
    var _b = this.state,
      isLoading = _b.isLoading,
      destinations = _b.destinations,
      preferences = _b.preferences,
      newDestinations = _b.newDestinations,
      isConsentRequired = _b.isConsentRequired,
      havePreferencesChanged = _b.havePreferencesChanged
    if (isLoading) {
      return null
    }
    return children({
      destinations: destinations,
      customCategories: customCategories,
      newDestinations: newDestinations,
      preferences: preferences,
      isConsentRequired: isConsentRequired,
      havePreferencesChanged: havePreferencesChanged,
      setPreferences: this.handleSetPreferences,
      resetPreferences: this.handleResetPreferences,
      saveConsent: this.handleSaveConsent,
    })
  }
  ConsentManagerBuilder.prototype.componentDidMount = function () {
    return __awaiter(this, void 0, void 0, function () {
      var onError, e_1
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            onError = this.props.onError
            if (!(onError && typeof onError === 'function')) return [3 /*break*/, 6]
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, , 5])
            return [4 /*yield*/, this.initialise()]
          case 2:
            _a.sent()
            return [3 /*break*/, 5]
          case 3:
            e_1 = _a.sent()
            return [4 /*yield*/, onError(e_1)]
          case 4:
            _a.sent()
            return [3 /*break*/, 5]
          case 5:
            return [3 /*break*/, 8]
          case 6:
            return [4 /*yield*/, this.initialise()]
          case 7:
            _a.sent()
            _a.label = 8
          case 8:
            return [2 /*return*/]
        }
      })
    })
  }
  ConsentManagerBuilder.displayName = 'ConsentManagerBuilder'
  ConsentManagerBuilder.defaultProps = {
    otherWriteKeys: [],
    onError: undefined,
    shouldRequireConsent: function () {
      return true
    },
    initialPreferences: {},
  }
  return ConsentManagerBuilder
})(react_1.Component)
exports.default = ConsentManagerBuilder
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyLWJ1aWxkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFpQztBQUNqQyw2Q0FBZ0U7QUFDaEUsNEVBQW9EO0FBQ3BELDBEQUFvRDtBQUdwRCxTQUFTLGtCQUFrQixDQUFDLFlBQTJCLEVBQUUsV0FBZ0M7SUFDdkYsSUFBTSxlQUFlLEdBQWtCLEVBQUUsQ0FBQTtJQUV6Qyw0REFBNEQ7SUFDNUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLFlBQVksQ0FBQTtLQUNwQjtJQUVELEtBQTBCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO1FBQW5DLElBQU0sV0FBVyxxQkFBQTtRQUNwQixJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzdDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDbEM7S0FDRjtJQUVELE9BQU8sZUFBZSxDQUFBO0FBQ3hCLENBQUM7QUFpRUQ7SUFBbUQseUNBQXVCO0lBQTFFO1FBQUEscUVBaU5DO1FBdk1DLFdBQUssR0FBRztZQUNOLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLHNCQUFzQixFQUFFLEtBQUs7U0FDOUIsQ0FBQTtRQTBDRCxnQkFBVSxHQUFHOzs7Ozt3QkFDTCxLQU1GLElBQUksQ0FBQyxLQUFLLEVBTFosUUFBUSxjQUFBLEVBQ1Isc0JBQWtFLEVBQWxFLGNBQWMsbUJBQUcscUJBQXFCLENBQUMsWUFB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
