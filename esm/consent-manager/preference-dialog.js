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
import React, { PureComponent } from 'react'
import styled, { css } from 'react-emotion'
import Dialog from './dialog'
import { DefaultButton, GreenButton } from './buttons'
var hideOnMobile = css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'],
      ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']
    ))
)
var TableScroll = styled('div')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n'],
      ['\n  overflow-x: auto;\n  margin-top: 16px;\n']
    ))
)
var Table = styled('table')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n'],
      ['\n  border-collapse: collapse;\n  font-size: 12px;\n']
    ))
)
var ColumnHeading = styled('th')(
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
var RowHeading = styled('th')(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['\n  font-weight: normal;\n  text-align: left;\n'],
      ['\n  font-weight: normal;\n  text-align: left;\n']
    ))
)
var Row = styled('tr')(
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
var InputCell = styled('td')(
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
    var buttons = React.createElement(
      'div',
      null,
      React.createElement(
        DefaultButton,
        { type: 'button', onClick: onCancel },
        translate('ui.cancel')
      ),
      React.createElement(GreenButton, { type: 'submit' }, translate('ui.save'))
    )
    return React.createElement(
      Dialog,
      {
        innerRef: innerRef,
        title: title,
        buttons: buttons,
        onCancel: onCancel,
        onSubmit: this.handleSubmit,
      },
      content,
      React.createElement(
        TableScroll,
        null,
        React.createElement(
          Table,
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              Row,
              null,
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.allow')),
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.category')),
              React.createElement(ColumnHeading, { scope: 'col' }, translate('ui.header.purpose')),
              React.createElement(
                ColumnHeading,
                { scope: 'col', className: hideOnMobile },
                translate('ui.header.tools')
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            !customCategories &&
              React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.functional')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.functional.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.functional.example')
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    functionalDestinations
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.marketing')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.marketing.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.marketing.example')
                    )
                  ),
                  React.createElement(
                    'td',
                    { className: hideOnMobile },
                    marketingDestinations
                      .map(function (d) {
                        return d.name
                      })
                      .join(', ')
                  )
                ),
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    translate('category.advertising')
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('p', null, translate('purpose.advertising.explanation')),
                    React.createElement(
                      'p',
                      { className: hideOnMobile },
                      translate('purpose.advertising.example')
                    )
                  ),
                  React.createElement(
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
                return React.createElement(
                  Row,
                  { key: categoryName },
                  React.createElement(
                    InputCell,
                    null,
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                    React.createElement(
                      'label',
                      null,
                      React.createElement('input', {
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
                  React.createElement(
                    RowHeading,
                    { scope: 'row' },
                    categoryName || translate('category.' + categoryName)
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'p',
                      null,
                      purpose || translate('purpose.' + categoryName + '.explanation')
                    ),
                    example &&
                      React.createElement(
                        'p',
                        { className: hideOnMobile },
                        example || translate('purpose.' + categoryName + '.example')
                      )
                  ),
                  React.createElement(
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
            React.createElement(
              Row,
              null,
              React.createElement('td', null, translate('ui.not_available')),
              React.createElement(RowHeading, { scope: 'row' }, translate('category.essential')),
              React.createElement(
                'td',
                null,
                React.createElement('p', null, translate('purpose.essential.explanation')),
                React.createElement('p', null, translate('purpose.essential.example'))
              ),
              React.createElement('td', { className: hideOnMobile })
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
})(PureComponent)
export default PreferenceDialog
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS1kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL3ByZWZlcmVuY2UtZGlhbG9nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFBO0FBQzVDLE9BQU8sTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzNDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUd0RCxJQUFNLFlBQVksR0FBRyxHQUFHLCtIQUFBLDREQUl2QixJQUFBLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFBLDhDQUdoQyxJQUFBLENBQUE7QUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHlIQUFBLHNEQUc1QixJQUFBLENBQUE7QUFFRCxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtMQUFBLCtHQU1qQyxJQUFBLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLG9IQUFBLGlEQUc5QixJQUFBLENBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGtPQUFBLCtKQVV2QixJQUFBLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLDRNQUFBLHlJQVM3QixJQUFBLENBQUE7QUFxQkQ7SUFBOEMsb0NBQXdDO0lBQXRGO1FBQUEscUVBaVJDO1FBakNDLGtCQUFZLEdBQUcsVUFBQyxDQUFDO1lBQ1AsSUFBQSwrQkFBUSxDQUFlO1lBQy9CLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFB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
