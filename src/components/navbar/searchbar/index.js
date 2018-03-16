import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import './index.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} placeholder='Look for a character'/>
                <span className='fa-container'>
                    <FaSearch />
                </span>
            </div>
        );
    }
}

export default SearchBar;