import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here. {this.props.name}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
