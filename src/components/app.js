import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    componentDidMount(){
        fetch('../../data/data.json')
        .then((response) => response.json())
        .then(d => this.setState({data: d}));
    }
    render(){
        let dataRecibida = this.state.data.length > 0 && true;
        let items = null;
        if(dataRecibida){
            let listaData = this.state.data;
            console.log(listaData.map((e) => e._id));
            items = listaData.map((item) => 
                <li key={item._id}>{item.name.first} {item.name.last}</li>
            );
            console.log(items);
        }
        return(
            <div>
                <h1>App Principal</h1>
                <h3>Items</h3>
                <hr/>
                <div className="row">
                    <ul>
                       {items} 
                    </ul>
                </div>
            </div>
        );
    }
}

// This function maps the State of the Store, avialable through 
// the Provider, and it return one of the reducers that we setup
// on the index.js
function mapStateToProps(state){
    return{
        data: state.data
    };
};

export default connect(mapStateToProps)(App);