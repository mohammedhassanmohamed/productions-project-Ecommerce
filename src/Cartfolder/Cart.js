import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { useNavigate, useParams, Link } from "react-router-dom";



export default function Cart() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items);
  // const countitem = useSelector((state) => state.count);
  const cartlist = useSelector((state) => state.cart);
  const totalitem = useSelector((state) => state.total);
  const navigate = useNavigate();
  // const [showmodal, setshowmodal] = useState(false);

  // const handleshowmodal = () => {
  //   setshowmodal(true);
  // };
  // const handleclosemodal = () => {
  //   setshowmodal(false);
  // };
  let newcartlist = [...cartlist];
  const ButtonHandlerincrease = (index) => {
    newcartlist[index].count =
      newcartlist[index].count !== undefined
        ? (newcartlist[index].count += 1)
        : 1;
    dispatch({ type: "UPDATE-CART", payload: newcartlist });
  };
  const ButtonHandlerdecrease = (index) => {
    // let newcartlist = [...cartlist];
    newcartlist[index].count =
      newcartlist[index].count !== 0 ? (newcartlist[index].count -= 1) : 0;
    dispatch({ type: "UPDATE-CART", payload: newcartlist });
  };

  const calculateallTotal = () => {

    let total = 0;
    let newofcartlist = [...cartlist];
    newofcartlist.map(
      (item) =>
        (total =
          total +
        (item.count||0) * item.price +
          (2.5 / 100) * item.price * (item.count||0))
          
    );
  
    return total.toFixed(2);
  };

  return (
    <div>
      {cartlist.length > 0 ? (
        cartlist.map((z, zndx) => {
          // const setButtonHandler=(index)=>{
          //   const newitem =[...itemList];
          //   const newitem2 =[...cartlist];
          //     if (newitem2.find((z)=>z.id===zndx)) {
          //       dispatch({type:"IECREASE",payload:z.price})
          //     }
          //   }

          //  const[id,title,price,image]=z;
          return (
            <div className="maincart d-flex gap-3 mt-4" key={zndx}>
              {/* about of counter */}
              <div className="main-input d-flex ">
                <button
                  onClick={() => ButtonHandlerdecrease(zndx)}
                  className="bg-warning  form-control form-crease"
                >
                  <span className="input-group-addon product_quantity_down fa fa-minus"></span>
                </button>
                <input
                  className="bg-warning form-control form-crease"
                  type="text"
                  name="quantity"
                  value={z.count ? z.count : 0}
                  onChange={(e) => e.target.value}
                />
                <input type="hidden" name="product_id" value="" />

                <button
                  onClick={() => ButtonHandlerincrease(zndx)}
                  className="bg-warning  form-control form-crease"
                >
                  <span className="bg-warning  input-group-addon product_quantity_up fa fa-plus"></span>
                </button>
              </div>
              {/* dispatch({ type: "IECREASE", payload: z.price })} */}
              {/* button about check out */}
              <button
                onClick={() => navigate("/goform")}
                className="checkout btn btn-warning"
              >
                Check Out
              </button>
              {/* {showmodal && (
                <Modal
                  className="mainmodal"
                  showmodal={showmodal}
                  onHide={handleclosemodal}
                >
                  <Modal.Body className="modalbody">
                    <Formmodal />
                  </Modal.Body>
                </Modal>
              )} */}

              {/* total tax */}
              <h2 id="my-tax" className="text-danger">
                tax(2.5%):
                <span className="text-light">
                  {z.count > 0 ? (z.price * (2.5 / 100) * z.count).toFixed(2) : 0} $
                </span>
              </h2>

              {/* total price */}
              <h2 id="mytotal" className=" text-danger">
                total:
                <span className="text-light">
                  {z.count > 0
                    ? (z.price * z.count + (2.5 / 100) * z.price * z.count).toFixed(2)
                    : 0}
                  $
                </span>
              </h2>
              {/* delete button */}
              <button
                onClick={() =>
                  dispatch({ type: "DELETE-ITEM-FROM-CART", payload: z })
                }
                id="button-xxx"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className=" bi bi-x-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                </svg>
              </button>

              <img src={z.image} width="100px" height="100px" />
              <div id="title-rating-price">
                <h2 className="text-light" id="my-title">
                  {z.title}
                </h2>
                <h2 className="text-light">
                  <span className="text-warning">rating: </span>
                  {z.rating.rate}
                </h2>
                <h2 className="text-light">
                  <span className="price-single-item text-warning">price:</span>
                  {z.price}$
                </h2>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h1 className="no-item-here  p-5 container mx-auto">
            No items here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-emoji-frown"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </h1>
        </div>
      )}
      <div        sticky="bottom" id="all-total-products">
        <h1 className="text-dark">
          total after tax :{" "}
          <span className="text-danger">
            {calculateallTotal()} $</span>
        </h1>
      </div>
    </div>
  );
}






// const validateForm = () => {
//   let err = {}

//   if (formData.username === '') {
//     err.username = 'Username required!'
//   }
//   if (formData.email === '') {
//     err.email = 'Email required!'
//   } else {
//     let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if (!regex.test(formData.email)) {
//       err.email = 'Email not valid!'
//     }
//   }

//   if (formData.password === '' || formData.cpassword === '') {
//     err.password = 'Password and Confirm Password required!'
//   } else {
//     if (formData.password !== formData.cpassword) {
//       err.password = 'Password not matched!'
//     } else {
//       if (formData.password.length < 6) {
//         err.password = 'Password should greater than 6 characters!'
//       }
//     }
//   }

//   if (formData.occupation === '') {
//     err.occupation = 'Occupation required!'
//   }
//   if (formData.gender === '') {
//     err.gender = 'Gender required!'
//   }
//   if (formData.languages.length < 1) {
//     err.languages = 'Any one language required!'
//   }

//   setFormError({ ...err })

//   return Object.keys(err).length < 1;
// }

// const onSubmitHandler = (event) => {
//   event.preventDefault()
//   console.log("Form Data:", formData)
//   let isValid = validateForm()

//   if (isValid) {
//     alert('Submitted')
//     //API call to server
//   } else {
//     alert('In-Valid Form')
//   }
//   console.log(isValid)
// }
