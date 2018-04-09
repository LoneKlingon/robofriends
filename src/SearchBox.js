import React, { Component } from 'react';
import 'tachyons';
import './RobotList'

class SearchBox extends Component
{

    constructor(props)
    {
        super(props);

    }

    render()
    {
        return(
            <input type="search" placeholder="Search Robot Name..."
            
            onChange = {this.props.onSearchChanged}
            
            />

            


        );
    }

}

export default SearchBox;