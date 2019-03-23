import React, { Component } from 'react';
import AddProduct from './AddProduct';

class ProductsList extends Component{
    constructor(){
        super();
        this.state ={
            showInStock: false,
            products : [
                
                {
                    _id:"34dd0",
                    name:"Iphone X",
                    price:700.69,
                    inStock: true
                },
                {
                    _id:"34dd5",
                    name:"Iphone 10",
                    price:789.25,
                    inStock: false
                },
                {
                    _id:"34drr",
                    name:"TV 34'",
                    price:1000.85,
                    inStock: true
                }

            ]
        }
    }

    checkifInStock(){
        this.setState({
            showInStock : !this.state.showInStock
        })
    }
    deleteProduct(producId){
        const { products } =this.state
        const productCopy = [...products]
        productCopy.splice(producId,1)
        this.setState({
           products:productCopy
        }  )
    }
  
    addNewProduct(newProduct){
        console.log('adding')

        // we get new product from the child (<AddProduct/ >) compomnet
        const prodCopy =[...this.state.products];
        prodCopy.push(prodCopy)
        this.setState({ products:prodCopy})
    }
    render(){
        const{ products,showInStock} = this.state;
        return(
           
            <div>
                {/* nested the AddProduct child get a on form submit
                trigger it self */}
                <AddProduct productAddition={ productToBeSaved => this.addNewProduct(productToBeSaved)}/>
             <thead> 
             <tr><button onClick={ () => this.checkifInStock() }>{ showInStock ? "All Products" : "in Stock"}</button></tr>
                 
               {products.map((oneProd,index) =>{
                   return(
                       (!showInStock || oneProd.inStock) && (
                       // _id is always unique so we dont have to use index if we dont want to    
                    <tr>
                    <th>{ oneProd._id }</th> 
                    <th>{ oneProd.name }</th>
                    <th>{ oneProd.price }</th>
                    <th>{oneProd.inStock ? <p>In Stock</p>: <p>out stock</p>} </th>
                    <th><input type="button" onClick={()=> this.deleteProduct(index)} value="delete" /> </th>
                </tr>  
                   )
                   )
                }
               )}
              
            </thead>   
            </div>
            
        )
    }
}

export default ProductsList;