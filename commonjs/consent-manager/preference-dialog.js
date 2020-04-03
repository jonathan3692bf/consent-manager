'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
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
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var react_emotion_1 = __importStar(require('react-emotion'))
var dialog_1 = __importDefault(require('./dialog'))
var buttons_1 = require('./buttons')
var hideOnMobile = react_emotion_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = react_emotion_1.default('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = react_emotion_1.default('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = react_emotion_1.default('th')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n',
      ],
      [
        '\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n',
      ]
    ))
)
var RowHeading = react_emotion_1.default('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = react_emotion_1.default('tr')(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n',
      ],
      [
        '\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n',
      ]
    ))
)
var InputCell = react_emotion_1.default('td')(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n',
      ],
      [
        '\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n',
      ]
    ))
)
var PreferenceDialog = /** @class */ (function (_super) {
  __extends(PreferenceDialog, _super)
  function PreferenceDialog() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleChange = function (e) {
      var onChange = _this.props.onChange
      onChange(e.target.name, e.target.value === 'true')
    }
    _this.handleSubmit = function (e) {
      var _a = _this.props,
        onSave = _a.onSave,
        preferences = _a.preferences,
        marketingAndAnalytics = _a.marketingAndAnalytics,
        advertising = _a.advertising,
        functional = _a.functional,
        customCategories = _a.customCategories
      e.preventDefault()
      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (
        !customCategories &&
        (marketingAndAnalytics === null || advertising === null || functional === null)
      ) {
        return
      }
      // Safe guard against custom categories being null
      if (
        customCategories &&
        Object.keys(customCategories).some(function (category) {
          return preferences[category] === null
        })
      ) {
        return
      }
      onSave()
    }
    return _this
  }
  PreferenceDialog.prototype.render = function () {
    var _this = this
    var _a = this.props,
      innerRef = _a.innerRef,
      onCancel = _a.onCancel,
      marketingDestinations = _a.marketingDestinations,
      advertisingDestinations = _a.advertisingDestinations,
      functionalDestinations = _a.functionalDestinations,
      marketingAndAnalytics = _a.marketingAndAnalytics,
      advertising = _a.advertising,
      functional = _a.functional,
      customCategories = _a.customCategories,
      destinations = _a.destinations,
      title = _a.title,
      content = _a.content,
      preferences = _a.preferences,
      translate = _a.translate
    var buttons = react_1.default.createElement(
      'div',
      null,
      react_1.default.createElement(
        buttons_1.DefaultButton,
        { type: 'button', onClick: onCancel },
        translate('ui.cancel')
      ),
      react_1.default.createElement(buttons_1.GreenButton, { type: 'submit' }, translate('ui.save'))
    )
    return react_1.default.createElement(
      dialog_1.default,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit,
      },
      content,
      react_1.default.createElement(
        TableScroll,
        null,
        react_1.default.createElement(
          Table,
          null,
          react_1.default.createElement(
            'thead',
            null,
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col' },
                translate('ui.header.allow')
              ),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col' },
                translate('ui.header.category')
              ),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col' },
                translate('ui.header.purpose')
              ),
              react_1.default.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                translate('ui.header.tools')
              )
            )
          ),
          react_1.default.createElement(
            'tbody',
            null,
            !customCategories &&
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'true',
                        checked: functional === true,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.functional.allow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.yes')
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'functional',
                        value: 'false',
                        checked: functional === false,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.functional.disallow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.functional')
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      translate('purpose.functional.explanation')
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.functional.example')
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'true',
                        checked: marketingAndAnalytics === true,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.marketing.allow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.yes')
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'marketingAndAnalytics',
                        value: 'false',
                        checked: marketingAndAnalytics === false,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.marketing.disallow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.marketing')
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      translate('purpose.marketing.explanation')
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.marketing.example')
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                react_1.default.createElement(
                  Row,
                  null,
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'true',
                        checked: advertising === true,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.advertising.allow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.yes')
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: 'advertising',
                        value: 'false',
                        checked: advertising === false,
                        onChange: this.handleChange,
                        'aria-label': translate('aria.advertising.disallow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.advertising')
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      translate('purpose.advertising.explanation')
                    ),
                    react_1.default.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.advertising.example')
                    )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    advertisingDestinations
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              ),
            customCategories &&
              Object.entries(customCategories).map(function (_a) {
                var categoryName = _a[0],
                  _b = _a[1],
                  integrations = _b.integrations,
                  purpose = _b.purpose,
                  example = _b.example
                return react_1.default.createElement(
                  Row,
                  { key: categoryName },
                  react_1.default.createElement(
                    InputCell,
                    null,
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'true',
                        checked: preferences[categoryName] === true,
                        onChange: _this.handleChange,
                        'aria-label': translate('aria.' + categoryName + '.allow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.yes')
                    ),
                    react_1.default.createElement(
                      'label',
                      null,
                      react_1.default.createElement('input', {
                        type: 'radio',
                        name: categoryName,
                        value: 'false',
                        checked: preferences[categoryName] === false,
                        onChange: _this.handleChange,
                        'aria-label': translate('aria.' + categoryName + '.disallow'),
                        required: true,
                      }),
                      ' ',
                      translate('ui.no')
                    )
                  ),
                  react_1.default.createElement(
                    RowHeading,
                    { scope: 'row' },
                    categoryName || translate('category.' + categoryName)
                  ),
                  react_1.default.createElement(
                    'td',
                    null,
                    react_1.default.createElement(
                      'p',
                      null,
                      purpose || translate('purpose.' + categoryName + '.explanation')
                    ),
                    example &&
                      react_1.default.createElement(
                        'p',
                        { className: hideOnMobile },
                        example || translate('purpose.' + categoryName + '.example')
                      )
                  ),
                  react_1.default.createElement(
                    'td',
                    { className: hideOnMobile },
                    destinations
                      .filter(function (d) {
                        return integrations.includes(d.id)
                      })
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                )
              }),
            react_1.default.createElement(
              Row,
              null,
              react_1.default.createElement('td', null, translate('ui.not_available')),
              react_1.default.createElement(
                RowHeading,
                { scope: 'row' },
                translate('category.essential')
              ),
              react_1.default.createElement(
                'td',
                null,
                react_1.default.createElement(
                  'p',
                  null,
                  translate('purpose.essential.explanation')
                ),
                react_1.default.createElement('p', null, translate('purpose.essential.example'))
              ),
              react_1.default.createElement('td', { className: hideOnMobile })
            )
          )
        )
      )
    )
  }
  PreferenceDialog.displayName = 'PreferenceDialog'
  PreferenceDialog.defaultProps = {
    marketingAndAnalytics: null,
    advertising: null,
    functional: null,
  }
  return PreferenceDialog
})(react_1.PureComponent)
exports.default = PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1Qyw2REFBMkM7QUFDM0Msb0RBQTZCO0FBQzdCLHFDQUFzRDtBQUd0RCxJQUFNLFlBQVksR0FBRyxtQkFBRywrSEFBQSw0REFJdkIsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxLQUFLLENBQUMsaUhBQUEsOENBR2hDLElBQUEsQ0FBQTtBQUVELElBQU0sS0FBSyxHQUFHLHVCQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyxrTEFBQSwrR0FNakMsSUFBQSxDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsdUJBQU0sQ0FBQyxJQUFJLENBQUMsb0hBQUEsaURBRzlCLElBQUEsQ0FBQTtBQUVELElBQU0sR0FBRyxHQUFHLHVCQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyx1QkFBTSxDQUFDLElBQUksQ0FBQyw0TUFBQSx5SUFTN0IsSUFBQSxDQUFBO0FBcUJEO0lBQThDLG9DQUF3QztJQUF0RjtRQUFBLHFFQWlSQztRQWpDQyxrQkFBWSxHQUFHLFVBQUMsQ0FBQztZQUNQLElBQUEsK0JBQVEsQ0FBZTtZQUMvQixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFBO1FBRUQsa0JBQVksR0FBRyxVQUFDLENBQW1DO1lBQzNDLElBQUEsZ0JBT1EsRUFOWixr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
