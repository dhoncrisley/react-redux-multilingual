import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { translateKey, translate } from './utils'
import { TranslateProvider } from './context'

class IntlProvider extends React.Component {
  constructor(props) {
    super(props)
    if (!props.translations || !props.locale) {
      let namePart = this.constructor.displayName
        ? ' of ' + this.constructor.displayName
        : ''
      throw new Error(
        'Could not find translations or locale on this.props ' + namePart
      )
    }
  }

  static propTypes = {
    translations: PropTypes.object
  }
  static defaultProps = {
    translations: {}
  }
  translate = (key, placeholders, isHTML, options = {}) => {
    /**
     * Accept user defined translate
     */
    const translateFn = this.props.translate || translateKey
    return translate(translateFn,
        this.props.translations,
        this.props.locale,
        key,
        placeholders,
        isHTML,
        options);
  }
  render() {
    return (
      <TranslateProvider value={this.translate}>
        {this.props.children}
      </TranslateProvider>
    )
  }
}

function mapPropsToState(state) {
  const { Intl } = state
  return {
    ...Intl,
    key: Intl.locale
  }
}

export default connect(mapPropsToState)(IntlProvider)
