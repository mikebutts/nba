import React, { Component } from 'react';

// Components
import Featured from './Featured'
import Subscriptions from './Subscriptions.js'
import Blocks from './Blocks.js'
import Poll from './Poll';

const URL_HOME = 'https://json-server-heroku-lwqzpxahne.now.sh/home'

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
            this.setState({
                home: json
            })
        })
     console.log(this.state.home)        
    }
    render(){
        return(
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions/>
                <Blocks blocks={this.state.home.blocks} />
                <Poll/>
      
            </div>
   
        )
    }

}

export default Home