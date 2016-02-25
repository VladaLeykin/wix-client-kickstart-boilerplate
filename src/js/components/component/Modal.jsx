define(['react'],
    function (React) {
        'use strict';

        return React.createClass({
            displayName: 'Modal',
            propTypes: {
                className: React.PropTypes.string,
                onClose: React.PropTypes.func,
                children: React.PropTypes.node
            },
            close(){
                document.body.style.overflow = null;
                this.props.onClose();
            },
            render() {
                return (
                    <div className={this.props.className}>
                        <div>
                            <i className="fa fa-times" id="modalCloser" onClick={this.close}></i>
                            {this.props.children}
                        </div>
                    </div>
                );
            },
        });
    }
);
