import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CardCompPerson from "../CardComponentPerson";
import Button from "../Button";
import Link from "react-router-dom";
import "./RequestInfo1.css";
import { Avatar, Grid } from "@nextui-org/react";
import { deepOrange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Update";
import Stack from "@mui/material/Stack";

function RequestInfo1(props) {
  const {
    sname,
    sdate,
    loc,
    desc,
    icon,
    status,
    vname,
    vphoto,
    rating,
    vdate,
    link1,
    link2,
    goto,
  } = props;
  const [age, setAge] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4-3">
        <div className="flex-row-4">
          <div className="try poppins-medium-daintree-24px">{sname}</div>
        </div>
        {/* <div className="overlap-group5-3">
          <Avatar size="xxl" src={icon} color="gradient" bordered squared />
        </div> */}

        <div>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-basic"
              fullWidth
              label="Status"
              defaultValue={status}
              variant="outlined"
            />
            {/* <div className="center11">
              <h5> Status: {status}</h5>
            </div> */}
            {/* <div className="margin">
              <CardCompPerson
                servicename={vname}
                date={vdate}
                photo={vphoto}
                value={rating}
                link1={link1}
                link2={link2}
                acolor="white"
              />
            </div> */}
            <TextField
              id="filled-basic"
              fullWidth
              label="Service Date"
              defaultValue={sdate}
              variant="filled"
            />
            <TextField
              id="filled-basic"
              fullWidth
              label="Hours of Service"
              defaultValue="4"
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-basic"
              fullWidth
              label="Location"
              defaultValue={loc}
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-multiline-static"
              label="Description"
              defaultValue={desc}
              multiline
              rows={6}
              fullWidth
              variant="filled"
            />
          </Box>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          ></Box>
        </div>
        <div className="thebutton-container3">
          <a href={goto}>
            <Button size="large" variant="contained" startIcon={<HomeIcon />}>
              Home
            </Button>
          </a>

          {/* <Button variant="contained" startIcon={<SendIcon />}>
              Update
            </Button> */}
        </div>
        {/* <div className="home-indicator-8"></div> */}
      </div>
    </div>
  );
}

export default RequestInfo1;
