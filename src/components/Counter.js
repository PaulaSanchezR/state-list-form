import React, { Component } from 'react';

// STATE CAN LIVE ONLY INSIDE CLASS COMPONENT

class Counter extends Component {
 // 1ST way: using constructor and dont forget to use
 // this in from of state
  // what is extends instan inherited 
    constructor(){
        super();
        console.log("what is this" , this)
        this.state ={
            count : 0
        }
    }

    // 2nd way:

    // state = {
    //     count:0
    // }
    counterPlus(){
        console.log('counting')
        // this.state.count=+1 =====>>>  NEVER 
        this.setState({
            count: this.state.count +1
        });
    }
    render(){
        return (
            <div>
               <p> {this.state.count}</p>
               <button onClick={ () => this.counterPlus() }> + count</button>
            </div>
        )
    }
}
   // what is a constructor()
   // what is super()
export default Counter;