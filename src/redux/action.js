
import React, { useState } from "react";
import axios from "axios";

// export const fetchUser = () => {
//    (dispatch) => {
//     axios.get("https://api.storerestapi.com/products").then((res) => {
//         console.log('wwwwww');
//       dispatch({ type: "FETCH_ITEMS", payload: res.data });
//     }).catch(err=>alert(err.message));
//   };
// };

// const dispatch = useDispatch();
// const useritem = useSelector((state)   => state.cart);




//  export const SetButtonHandler = ({ item }, { dispatch }, { useritems }) => {
//    if (useritems.indexof(item) === -1) {
//      dispatch({ type: "CART_ADD", payload: item });
//      console.log(item);
//    }
//  };

 
//  {{{fetching API}}}
export const APIFETCH = "https://fakestoreapi.com/products"

export const fetchUser = () => async (dispatch) => {

 
  try {
    await axios.get(APIFETCH).then((respond) => {
  

      dispatch({ type: "FETCH_ITEMS", payload: respond.data });
      console.log(respond.data);
    });
  } catch (error) {
    console.log("error");
  }
};
// export const fetchUsersingle =()=> async(dispatch)=>{

// try { 
//    await axios.get("https://fakestoreapi.com/products").then((respond)=>{
//     console.log(respond);

//     dispatch({ type: "FETCH_ITEMS-SINGLE", payload: respond.data});
//     console.log(respond.data);
 
//   })


// } catch (error) {
//   console.log('error');
// }


// }
