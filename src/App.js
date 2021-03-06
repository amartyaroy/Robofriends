import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import  SearchBox from './SearchBox';

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange(event){
        console.log(event);
    }
    render(){
    return(
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots={ robots }/>
        </div>
    


    );
    }
}

export default App;