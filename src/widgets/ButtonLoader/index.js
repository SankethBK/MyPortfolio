import React, { Component } from 'react';

export default class ButtonLoader extends Component {
  render() {
    const { loading } = this.props;

    return (
      <button
        className={`submit-btn ${this.props.className}`}
        disabled={loading}
        onClick={this.props.onClick ? this.props.onClick : () => {}}
      >
        {loading && (
          <i className='fa fa-refresh fa-spin' style={{ marginRight: '5px' }} />
        )}
        {loading && <span>{this.props.loadingText}</span>}
        {!loading && <span>{this.props.text}</span>}
      </button>
    );
  }
}
