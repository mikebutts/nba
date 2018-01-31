import React, { Component } from 'react';

// Components
import Featured from './Featured'

const URL_HOME = 'http://localhost:3004/home'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            home: ''
        }
    }

    componentDidMount(){
        fetch(URL_HOME, {method: 'GET'})
        .then(response => response.json())
        .then(json =>{
            console.log(json)
        })
    }
    render(){
        return(
            <Featured />
        )
    }

}

export default Home