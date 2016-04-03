import React, { PropTypes, Component } from 'react';
import { injectIntl } from 'react-intl';

class RawFormattedBase extends Component {
  static propTypes = {
    intl: PropTypes.object,
    formatter: PropTypes.string,
    id: PropTypes.string,
    component: PropTypes.node,
    values: PropTypes.object,
  };

  render() {
    const props = {
      id: this.props.id,
      values: this.props.values,
      messages: this.props.intl.messages,
    };

    if (!this.props.component) {
      return null;
    }

    if (!this.props.formatter) {
      return null;
    }

    return React.createElement(this.props.component, this.props.intl[this.props.formatter](props));
  }
}

export default injectIntl(RawFormattedBase);
