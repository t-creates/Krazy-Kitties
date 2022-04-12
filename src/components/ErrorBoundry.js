import React, { Component } from 'react';


// IF Component fails to load(render) Error Boundry Catches that
class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    // Screen Output for if Error Boundry Catches that error
    render() {
        if (this.state.hasError) {
            return <h1>Ooops.. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;