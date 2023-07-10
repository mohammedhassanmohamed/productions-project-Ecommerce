import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../forms/Addressform.css";


export default function Addressform() {

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    addressline1: "",
    addressline2: "",
    city: "",
    region: "",
    postalcode: "",
    country: "",
  });

  // about errors inputs
  const [errorform, seterrorform] = useState({});
const[color,setcolor]=useState(false)
  const handleform = (event) => {
    let copyform = { ...formdata };
    setformdata(() => ({
      ...formdata,
      [event.target.name]: event.target.value,
    }));
  //  if (formdata.firstName.length===0) {
  //   setcolor(true)
  //  } else if(formdata.length>4){setcolor(true)};



    localStorage.setItem("formaaa", JSON.stringify(storageform));
    // if (copyform.firstName.length>0) {
    //   copyform.firstName.push(e.target.value)}

    // setformdata(copyform)
  };
  console.log(
    formdata.firstName,
    formdata.postalcode,
    formdata.lastName,
    formdata.addressline2,
    formdata.addressline1,
    formdata.city,
    formdata.country
  );

  const storageform = {
    firstName: formdata.firstName,
    lastName: formdata.lastName,
    addressline1: formdata.addressline1,
    addressline2: formdata.addressline2,
    city: formdata.city,
    region: formdata.region,
    postalcode: formdata.postalcode,
    country: formdata.country,
  };

   const submitbttn = (e) => {
    e.preventDefault();
    localStorage.setItem("formaaa", JSON.stringify(storageform));
    };
  console.log(submitbttn);
  return (
    <div id="all-page">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form  onSubmit={submitbttn}>
        <Grid
       
          container
          id="main-form"
          className="main-form bg-light"
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              value={formdata.firstName}
              onChange={handleform}
              className={`${formdata.firstName.length===0?"":"shadow-lg"}`}
            />
            { formdata.firstName.length===0?"":formdata.firstName.length<=5?
            <small className="text-danger">at least 6 letters</small>:""}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              value={formdata.lastName}
              onChange={handleform}
              autoComplete="family-name"
              variant="standard"
              className={`${formdata.lastName.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="addressline1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              value={formdata.addressline1}
              onChange={handleform}
              className={`${formdata.addressline1.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="addressline2"
              label="addressline2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              value={formdata.addressline2}
              onChange={handleform}
              className={`${formdata.addressline2.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={formdata.city}
              onChange={handleform}
              className={`${formdata.city.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="region"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              value={formdata.region}
              onChange={handleform}
              className={`${formdata.region.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="postalcode"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={formdata.postalcode}
              onChange={handleform}
              className={`${formdata.postalcode.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              value={formdata.country}
              onChange={handleform}
              className={`${formdata.country.length===0?"":"shadow-lg"}`}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
