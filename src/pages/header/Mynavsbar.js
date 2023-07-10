import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import "./Mynavsbar.css";
import { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import { fetchUser } from "../../redux/action";


export default function Mynavsbar() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items);
  const counternav = useSelector((state) => state.countcart);
  const cartlist = useSelector((state) => state.cart);
  

  const [searchvalue,setsearchvalue] = useState("");

   const [textstate, settextstate] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
  };

useEffect(()=>{

  settextstate(itemList)

},[])

const filterBySearch = (event) => {
  setsearchvalue(event.target.value);
  var updatedList = [...itemList]; 
  settextstate(updatedList.filter((item) => item.title.toLowerCase().indexOf(searchvalue.toLowerCase()) !== -1))
  dispatch({type:"FETCH_ITEMS",payload:textstate})
 console.log(textstate);
}

// const filterproduct = () => {
//   const newfilterationz = [...itemList];
 
//  console.log(settextstate(newfilterationz.filter((item) => item.title.includes(searchvalue)))); 



// }


//  const filter = (e)=>
 
// { setsearchvalue(newtextstate.filter((item)=>item.title.tolowercase().includes(e.target.value)))}


  return (
    <>
      <Navbar
        sticky="top"
        className="mb-3 col-md-12 col-lg-12 text-white "
        bg="dark"
        variant="dark "
        expand="lg"
      >
        <Container className=" tester bg-dark">
          <div id="number0-nav">
          <h1  className="text-warning"> {counternav} </h1>
          </div>
          <Link to="/cartshopping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-cart-check-fill  text-warning bg-dark"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          </Link>
          <h1 className="text-danger"> {""}</h1>

          <Navbar.Toggle
            className="text-light bg-dark"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse className="text-light bg-dark" id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark bg-dark"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                to="/home"
                as={NavLink}
                className="navbar-brand text-light bg-dark"
                id="home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                to="/form"
                as={NavLink}
                className="text-light bg-dark navbar-brand"
              >
           
                form
              </Nav.Link>
              <Nav.Link
                to="#"
                as={NavLink}
                className="text-light bg-dark navbar-brand"
              >
                Link
              </Nav.Link>
            </Nav>
            {/* About search input */} {/* About search input */}{" "}
            {/* About search input */}
            <Form onSubmit={()=>handlesubmit} className="text-light bg-dark d-flex">
              <input
                type="text"
                placeholder="Search"
                className="p-2 w-100 me-2"
                aria-label="Search"
                value={searchvalue}
                onChange= {filterBySearch}
             
              />

{/* <div>

{textstate &&
                textstate.filter(post => {
                    if (searchvalue === '') {
                        return post;
                    } else if (post.title.toLowerCase().includes(searchvalue.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                  <div className="box" key={index}>
                      <p>{post.title}</p>
                      <p>{post.id}</p>
                      <p>{post.image}</p>
                      </div>
           )) }
</div> */}

{/* 
{textstate && filteredData.length === 0 && (
        <div>Sorry, this name does not exist</div>
      )} */}




              {/* About search input */} {/* About search input */}{" "}
              {/* About search input */}
              {/* <Button variant="outline-success"></Button> */}
            </Form>
            {/* <div className="d-flex container p-5 text-danger">
        {textstate
          .filter((el) => el.title.includes(searchvalue))
          .map(({id, title, price, description, image, category }, idx) => {
            return (
              <div className="bg-warning w-75" key={idx}>
                <h3>id:{id}</h3>
                <p>title: {title} </p>
                <h4>description: {description} </h4>
                <p>category: {category} </p>
              </div>
            );
          })}
      </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

  // const navlinkstyle = ({ isactive }) => {
  //   return {
  //     textdecoration: isactive ? "none" : "underline",
  //   };
  // };


          // const newtextstate = [...itemList];
                  // setsearchvalue(newtextstate.filter((item)=>{item.title
                  //   .toLowerCase().includes(searchvalue)}));
                  // console.log("XXXXXXXXXXXXXXXXXXXXXXX",newtextstate.filter((item)=>{item.title
                  //   .toLowerCase().includes(searchvalue)}));
                
                  
//   textstate.filter((x) => {
// if (searchvalue==="") { return x;}
// else if(x.title.toLowerCase().includes(searchvalue)){return x}

// setsearchvalue(textstate);

//   })
//     .map((item, index) => {
//       const { id, title, price, description, image, category, count } = item;

//       return (
//         <Col className="small-div col-4" key={index}>
//         <a onClick={() => navigate("/product", { state: {item} })}>
//           <div className="smalling">
//             <div id="div-of-my-image">
//               <img
//                 className="my-image "
//                 src={image}
//                 width="200"
//                 height="100"
//                 alt=""
//               />
//             </div>

//             <br></br>

//             <h3>{title}</h3>

//             <h3 className="text-green">
//               <span className="text-warning"> {price} $</span>
//             </h3>
//           </div>

//           <div id="btn-api-padge">
//             <div className="btn-case">
//               <button
//                 className=" btn btn-warning m-1 "
//                 style={{ margin: "30px" }}
              
//               >
//                 Add To Cart
//                 <i className="m-1 fa fa-shopping-basket"></i>
//               </button>
//             </div>
//           </div>
//         </a>
//       </Col>
//       );
//     });
// };

