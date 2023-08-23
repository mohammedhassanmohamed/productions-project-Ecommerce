import React, { CSSProperties } from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../pages/Apifetch.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/action";
import SetButtonHandler from "../redux/action";
import { useNavigate, useParams, Link } from "react-router-dom";
import { APIFETCH } from "../redux/action";
import puff from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Apifetch = ({ item, id }) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  // const { title } = useParams();
  let [color, setColor] = useState(false);

  const dispatch = useDispatch();
  const cartlist = useSelector((state) => state.cart);
  const itemList = useSelector((state) => state.items);

  const counternav = useSelector((state) => state.countcart);

  const [filteration, setfilteration] = useState([]);
const[click,setclick]=useState(false)
  // const storeditem = itemList.find((o)=>o.id===id);
  // const dis = ()=>cartlist.length>0?"true":"false";
  // console.log("هيهيهيهيهيههيهيهيهيه",dis);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
 
  dispatch(fetchUser());
  setloading(false);
   
}, 3000);



    setfilteration(itemList);
  }, []);

  const filterproduct = (categ) => {
    const newfilteration = [...itemList];
    console.log(newfilteration);
    setfilteration(newfilteration.filter((item) => item.category === categ));
  };


console.log(window.scrollY);
  const Showbuttons = () => {
    const newwfilteration = [...itemList];
    return (
      <div className="col-lg-12 col-sm-4 col-sm-3 Showbuttons text-light">
        <button
          onClick={() => setfilteration(newwfilteration)}
          className="bttn-single btn btn-outline-dark me-2 bg-warning"
        >
          All
        </button>

        <button
          onClick={() => filterproduct("men's clothing")}
          className="bttn-single btn btn-outline-dark me-2 bg-warning"
        >
          men's clothing
        </button>

        <button
          onClick={() => filterproduct("women's clothing")}
          className="bttn-single btn btn-outline-dark me-2 bg-warning"
        >
          women's clothing
        </button>

        <button
          onClick={() => filterproduct("jewelery")}
          className="bttn-single btn btn-outline-dark me-2 bg-warning"
        >
          jewelery
        </button>

        <button
          onClick={() => filterproduct("electronics")}
          className="bttn-single btn btn-outline-dark me-2 bg-warning"
        >
          electronics
        </button>
      </div>
    );
  };

  // console.log(filterproduct("men's clothing"))

  // {loading ? ( <div>  <Skeleton circle width={60} height={60} /></div> ): ( )}

  return (
    <div>
       <div className="light"></div>
   <div className="light-two"></div>
      <div className="col-lg-4 col-md-3 col-sm-4" id="background-image">
        <img className="image" src={require("../assets/خلفيه-لشاب-وفتاة-576x1024.jpg")} />
        <img className="image" src={require("../assets/خلفيه-لاعب-سوداء-576x1024.jpg")} />
      </div>
   
        <Showbuttons id="single-bttn" />
      

      {loading ? (
        <div className="div-of-loading"> 
<span class="loader"></span>     
<span class="loader"></span>     
<span class="loader"></span>     

 </div>
      ) : (

   
        <div className="all-card">
          {filteration.map((item, index) => {
            const { id, title, price, description, image, category, count } =
              item;

            return (
              
              <div className="" key={index}>
                <Card className="bg-dark ">
                  <a onClick={() => navigate("/product", { state: { item } })}>
                    <div id="div-of-my-image">
                    <Card.Img className="my-image" variant="top" src={image} />
                    </div>
                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card.Title className="text-light title-price">{title}</Card.Title>
                    <br></br>

                    <Card.Title className="text-light title-price">
                      <span className="price">Price:</span> {price} ${" "}
                    </Card.Title>
                  </a>
                  {/* about add-to-cart button */}

                  <div className="btn-add-card-div">
                    <Button
                 className={`btn-add-cart btn btn-warning m-1 ${color===true?"bg-success":"bg-warning"} `}
                      onClick={(index) => {
                      
                        dispatch({ type: "ADD-TO-CART", payload: item});
                          toast(`you added ${counternav + 1} item to card!`);
                        setColor(itemList.filter((v)=>v.id===index)?color===true:color===false);
                      
                        
                      }}
                    
                      style={{ margin: "30px" }}
                      disabled={
                        cartlist.filter((e) => e.id === item.id).length > 0
                          ? true
                          : false
                      }
                      type="disable"
                    >
                      Add To Cart
                      <i className="m-1 fa fa-shopping-basket"></i>
                    </Button>
                  </div>

                  {/* <h1>_____________________________________</h1> */}
                </Card>
        
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
              </div>
              
            );
          })}
        </div>
      )}

      {/* images about tablet and phone */}
      <div className="mt-5" id="middle-pic-div">
        <div className="middle-pic">
          <img
            id="my-latest-image"
            src={require("../assets/landing-responsive-4a.jpg")}
          />

          <div>
            <img
              id="my-tablet-image"
              src={require("../assets/preview-slider-tablet.png")}
            />
            <img
              id="my-entire-image"
              src={require("../assets/landing-responsive-8.jpg")}
            />
          </div>
        </div>
        {/* tester */}
        <div id="my-div-phone-image">
          <img
            id="my-phone-image"
            src={require("../assets/preview-slider-phone.png")}
          />
          <img
            id="my-entire-phone-image"
            src={require("../assets/landing-responsive-8.jpg")}
          />
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container d-flex two-images">
        <img id="women-design" src={require("../assets/id6-banner5.jpg")} />

        <img id="women-design" src={require("../assets/id6-banner6.jpg")} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Apifetch;


  /* <Users
                    item={item}
                    setButtonHandler={(value) => {
                      if (cart.indexOf(item) === -1) {
                        dispatch({ type: "CART_ADD", payload: item });
                        setbtton(!btton);
                      }
                    }}
                  /> */



 
//  async function fetchingdata() {
//   setload(true);
//   setbtton(true);
//   await axios
//     .get("https://api.storerestapi.com/products")
//     .then((res) => {
//       setstate(res.data.data);
//       setload(false);
//       setbtton(true);
//       // console.log(state.concat(res.data));
//     }).catch(error=>{
//       alert(error.message)
//     });





// const setButtonHandler=()=>{

//   if (useritem.indexof(item)===-1) {
//     dispatch({type:"CART_ADD",payload:item})
//   }
// }

// var cartState = [{
// 	category:"Cars",
//   name:"lambo"
// },{
// 	category:"Clothes",
//   name:'tshirt'
// },{
// 	category:"Animals",
//   name:"hamada"
// },{
// 	category:"Cars",
//   name:'ferrari'
// }];

// var filterArray = [...cartState];

// (()=>{
// 	let data = filterArray.filter((item,index)=>item.category === "Clothes");
//   console.log(data)
// })()





 
      







// {!btton ? (
//   <div className="">
//     <button
//       // onClick={() => increasedata(index)}
//       className="fs-3 btn btn-danger p- 15"
//     >
//       +
//     </button>

//     <button
//       // onClick={decreasedata}
//       className="fs-3  btn btn-danger p- 15"
//     >
//       -
//     </button>
//   </div>
// ) : (
//   "sssss"
// )}





//  
//             {filteration.map((item, index) => {
//               console.log(itemList);
//               // const{ id, title, price, description, image, count } = item;
//               return (
//                 <Col className="smalldiv col-md-4" key={index}>
//                   <div className="smalling">
//                     <p>{item.id}</p>

//                     <h3>{item.title}</h3>

//                     <p>price:{item.price}</p>

//                     <h4>{item.category}</h4>
//                     <h4>{item.rating}</h4>

//                     <p>{item.description}</p> 

//                     <img src={item.image} width="200" height="200" alt="" />


//                      <div className="btn-add-card-div">
//                     <Button
//                       onClick={() => {
//                         dispatch(
//                           { type: "ADD-TO-CART", payload: item },
//                           toast(`you added ${counternav + 1} item to card!`)
//                         );
//                       }}
//                       className="btn-add-cart btn btn-warning m-1 "
//                       style={{ margin: "30px" }}
//                       disabled={
//                         cartlist.filter((e) => e.id === item.id).length > 0
//                           ? true
//                           : false
//                       }
//                       type="disable"
//                     >
//                       Add To Cart
//                       <i className="m-1 fa fa-shopping-basket"></i>
//                     </Button>
//                     </div>


//                       <p>{item.count ? item.count : 0}</p>
          
//                     </div>
//                     </Col>  )}}
//                      </Row>  