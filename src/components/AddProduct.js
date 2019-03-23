import React, { Component } from 'react';

class AddProduct extends Component{
    // props ====productAddition={ productToBeSaved => this.addNewProduct(productToBeSaved)}
   constructor(props){
       super(props);
       // this.state the way as it is defined in the constructor is 
       // the initial state
       this.state ={
        _id:"",
        name:"",
        price:"",
        inStock: false
       }
       console.log(this.props)
   }
//onchange event
   onChangeHandler(event){
       //console.log("event is:" , event.target)
    let {name, value}=event.target;
    console.log(name,value)

    // ***** CASE OF CHECK BOX
    if (name === 'inStock' && value === 'on'){
        value = true;
    }
    this.setState({ [name]:value});
    //                  ^
     //                 |
     //case of input with name:._id
     //this.setState({
     // _id:event.target.value
     //})

    //case of input with name:.name
     //this.setState({
     // name:event.target.value
     //})
     //case of input with name:.price
     //this.setState({
     // nprice:event.target.value
     //})
 
   }

   handleFormSubmit(event){
       event.preventDefault();
       this.props.productAddition(this.state);
       this.setState({
        _id:"",
        name:"",
        price:"",
        inStock: false
       })
   }
   render(){
       return(
           <div>
               <h2> Add your product</h2>
                <form  onSubmit = {event => this.handleFormSubmit(event)}>
                    <label>Id</label>
                    <input 
                        onChange= { event => this.onChangeHandler(event)}
                        name= "_id"
                        type="text"
                        value = { this.state._id }
                    />
                    <label>Name</label>
                    <input 
                        onChange= { event => this.onChangeHandler(event)}
                        name= "name"
                        type="text"
                        value = { this.state.name }
                    />
                    <label>Price</label>
                    <input 
                        onChange= { event => this.onChangeHandler(event)}
                        name= "price"
                        type="text"
                        value = { this.state.price }
                    />
                    <label>In Stock</label>
                    <input 
                        onChange= { event => this.onChangeHandler(event)}
                        name ="inStock"
                        type="checkbox"
                        checked ={ this.state.inStock }
                    />
                </form>
           </div>
       )
   }

}

export default AddProduct;


