import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class PageWrapper extends Component {

    render () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;