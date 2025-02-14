import React, { Component } from 'react';

class Loader extends Component {

    render() {
        return (
            <div class="ui active dimmer">
                <div class="ui big text loader">{this.props.message}</div>
            </div>
        );
    }
}
Loader.defaultProps = { message: "Loading..." }


export default Loader;