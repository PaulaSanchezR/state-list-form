import React from 'react'

//function componets manipulate the dom in
    // some way does not have a this. 
    //        
    //         |
const title= (props) => {
    
    console.log('prop' , props.message)
    return ( <div>{props.message}</div>)
   
}

export default title;