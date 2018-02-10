import React from 'react'


class Subscriptions extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false
        }
    }


    clearMessages() {
        setTimeout(function(){
                this.setState({
                    error:false,
                    success:false
                })
            }.bind(this),3000)
    }


    saveSubscription = (email) => {
        const URL_EMAIL = `http://localhost:3004/subscriptions`

        fetch(URL_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email: '',
                success: true
            })
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;
        if(regex.test(email)){
            this.saveSubscription(email)
        }else{
            this.setState({error: true})
        }
        this.clearMessages()
    }

    onChangeInput = (event) => {
        this.setState({
            email:event.target.value
        })
    }

    render() {
        return (
            <div className="subcribe_panel">
                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                        value={this.state.email} 
                        placeholder="yourmail@gmail.com" 
                        onChange={this.onChangeInput}/>
                        <div className={this.state.error ? "error show" : "error"}>Check your mail</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank you</div>
                    </form>
                </div>

                <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </small>
            </div>
        )
    }
}


export default Subscriptions