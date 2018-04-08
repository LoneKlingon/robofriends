import React, { Component } from 'react';
import Main from './Main'
import SearchBox from './SearchBox'


class App extends Component
{
    render()
    {
        return(
            <div>
            <SearchBox />
            <Main />
            </div>
        );
    }

}

export default App;