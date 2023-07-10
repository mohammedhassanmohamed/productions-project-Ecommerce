import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import "../pages/Singleproduct.css";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";

const Singleproduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartlist = useSelector((state) => state.cart);
  const itemList = useSelector((state) => state.items);

  const countitem = useSelector((state) => state.count);
  const countcartx = useSelector((state) => state.countcart);
  const totalitem = useSelector((state) => state.total);


  const navigate = useNavigate();


  useEffect(() => {}, []);

  return (
    <div className="all-single-page ">
      <div className="shopping-cart d-flex ">
        <div className="div-of-single-image">
          <img className="my-single-image" src={location.state.item.image} />
        </div>

        <div className="all-items">
          <h2 className="text-light product-title"> {location.state.item.title}</h2>
          <p className="product-description">
            {location.state.item.description}
         
          </p>
          <div className="rating mt-1 text-danger" >
          <h4 >
            <span className="text-warning">rating: </span>
            {location.state.item.rating.rate}
          </h4>
    
          </div>
    
        </div>
       
        <div id="btn-add-card">
          <button
            disabled={
              cartlist.filter((e) => e.id === location.state.item.id).length > 0
                ? true
                : false
            }
            onClick={() => {
              dispatch({ type: "ADD-TO-CART", payload: location.state.item });
              toast(`you added  1 item to card!`);
            }}
            className="d-flex w-100 btn btn-warning "
          >
            Add To Cart
            <i className="m-1 fa fa-shopping-basket"></i>
          </button>
          </div>

          <div id="btn-HOME">
          <button
          onClick={()=>navigate("/fromsingletohome")}
            // disabled={
            //   cartlist.filter((e) => e.id === location.state.item.id).length > 0
            //     ? true
            //     : false
            // }
       
            className="d-flex w-100 btn btn-warning "
          >
          To Home Page
     
          </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
      


        {/* rating stars */}
        <div className="rating">
          <div className="rating-box">
            <span className="fa fa-stack">
              <i className="fa fa-star-o fa-stack-1x"></i>
            </span>{" "}
            <span className="fa fa-stack">
              <i className="fa fa-star-o fa-stack-1x"></i>
            </span>{" "}
            <span className="fa fa-stack">
              <i className="fa fa-star-o fa-stack-1x"></i>
            </span>{" "}
            <span className="fa fa-stack">
              <i class="fa fa-star-o fa-stack-1x"></i>
            </span>{" "}
            <span className="fa fa-stack">
              <i className="fa fa-star-o fa-stack-1x"></i>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => {
//   setShow(true);
// };

// {show && (
//   <Modal className="mainmodal" show={show} onHide={handleClose}>
//     <Modal.Body className="modalbody">
//       <div>
//      {location.state.item.description}
//    </div>

//     </Modal.Body>
//   </Modal>
// )}
