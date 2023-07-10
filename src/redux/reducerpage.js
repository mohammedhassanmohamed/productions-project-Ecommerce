const initstate = {
  items: [],
  cart: [],
  count: 0,
  total: 0,
  countcart: 0,
  searchvalue: "",
};

// const counter= console.log(state.cart.filter((uniq) => uniq.id === action.payload.id)+= 1)

export const reducerpage = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD-TO-CART":
      //  const storage = localStorage.setItem('cart', json.stringify(state.cart))
      return {
        ...state,

        cart: [action.payload, ...state.cart],

        countcart: (state.cart.length += 1),
      };

    case "UPDATE-CART":
      return {
        ...state,
        cart: [...action.payload],
      };

    case "IECREASE-counter":
      // const counter= console.log(state.cart.filter((uniq) => uniq.id === action.payload.id)+= 1)
      return {
        ...state,
        // state.cart.filter((uniq) => uniq.id === action.payload.id)

        // count:counter.state.count += 1
        total:[state.count===0?0:state.count*action.payload],
      };

    case "DELETE-ITEM-FROM-CART":
      return {
        ...state,

        cart: state.cart.filter((uniq) => uniq.id !== action.payload.id),

        countcart: (state.cart.length -= 1),
      };

    case "SEARCH-BY-TITLE":
      return {
        ...state,

        searchvalue:
          state.searchvalue.length > 0
            ? state.items.filter((user) =>
                user.title
                  .toLowerCase()
                  .includes(state.searchvalue.toLowerCase())
              )
            : [...state.items],
      };

    default:
      return state;
  }
};

//  case "CART_ADD":
//         return {
//           ...state,
//           cart:action.payload
//          }

// const initstate = {name: 0,cart:[],items:[]}
// export const reducerpage = (information =initstate, action) => {
//   switch (action.type) {
//     case "increase":
//       return { ...information, name: information.name + 1 };
//     case "decrease":
//       return {
//         ...information,
//         name: information.name !== 0 ? information.name - 1 : information.name,
//       };
//       case "CART_ADD":
//         return {
//           cart: [...information.cart,action.payload],
//         };
//         case "FETCH_ITEMS":
//         return {
//           ...information,
//           items: [information.items,action.payload],

//          }
//     default:
//       return information;
//   }
// }
