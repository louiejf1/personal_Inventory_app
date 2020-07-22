import React, { useState, Component, useEffect } from 'react';

export class Search extends Component {

    render() {
        return (
            <div>
                <input
                    type="search"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Search for an item..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

export default Search
