import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Template extends Component {
    static propTypes = {

    }
    constructor(props) {
        // Call the Component constructor to assign our props
        super(props);

        // Procedurally convert all props to local states
        this.state = {}
        for (let key of Object.keys(this.props)) {
            this.state[key] = this.props[key];
        }
    }
    render() {
        return (
            <>
                <h1>Template Component</h1>
            </>
        );
    }
}

export default Template;