import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        );
    }
}

export default Spinner;