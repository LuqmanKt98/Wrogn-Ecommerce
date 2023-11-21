import React, { createContext, useState } from 'react'

export const cartContext = createContext();

function CartState(props) {

    const[cart,setCart] = useState([]);

  return (

    <cartContext.Provider value={{cart,setCart}}>

        {props.children}

    </cartContext.Provider>
  )
}

export default CartState