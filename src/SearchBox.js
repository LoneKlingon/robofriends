import React, { Component } from 'react';
import 'tachyons';

class SearchBox extends Component
{
    render()
    {
        return(
            <input type="search" className="tc" placeholder="Enter Robot Name..." />
        );
    }

}

export default SearchBox;