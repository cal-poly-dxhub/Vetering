import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import dayjs, { Dayjs } from "dayjs";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DatePicker from "../DatePicker";
import Button from "../Button";
import Button2 from "../Button2";
import MUIButton from "@mui/material/Button";
import "./X10NewPost.css";
import { Avatar, Grid } from "@nextui-org/react";
import Link from "react-router-dom";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import DatePicker from "../DatePicker";

function X10NewPost(props) {
  const {
    newPost,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    groupProps,
    group8821Props,
    fabProps,
  } = props;
  const [age, setAge] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const hours = [
    {
      value: 1,
      label: "1 Hours",
    },
    {
      value: 2,
      label: "2 Hours",
    },
    {
      value: 3,
      label: "3 Hours",
    },
    {
      value: 4,
      label: "4 Hours",
    },
    {
      value: 5,
      label: "4+ Hours",
    },
  ];

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4-3">
        <div className="flex-row-4">
          <div className="place poppins-medium-daintree-24px">NEW REQUEST</div>
        </div>
        {/* <div className="overlap-group5-3">
          <Avatar
            size="xxl"
            src="https://img.favpng.com/18/7/8/request-for-quotation-sales-quote-service-computer-icons-web-banner-png-favpng-PcWqGGfQfJXJEK03f9xHSZ4Xt.jpg"
            color="gradient"
            bordered
          />
        </div> */}
        <div>
          {/* <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          */}
        </div>
        <div>
          <Box
            sx={{
              m: 5,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <DatePicker />
            <TextField
              id="filled-basic"
              fullWidth
              label="City"
              variant="filled"
            />
          </Box>
          <FormControl variant="filled" sx={{ m: 4, minWidth: 360 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Service Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Landscaping</MenuItem>
              <MenuItem value={20}>Food</MenuItem>
              <MenuItem value={30}>Transportation</MenuItem>
              <MenuItem value={40}>Dumpster Run</MenuItem>
              <MenuItem value={50}>Moving</MenuItem>
              <MenuItem value={60}>Other</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              m: 4,
              width: 360,
              maxWidth: "100%",
            }}
          >
            <TextField
              id="filled-multiline-static"
              label="Description of the job"
              multiline
              rows={9}
              fullWidth
              placeholder="Example: I need help trimming trees around my yard and mowing my front lawn. Then, I need help taking it off to the dump. I have a gas lawnmower and lopping shears for you to use, but you will need to bring a truck to haul off the waste. I'll help out with picking up tree trimmings and pay for the dump fees. I'm available any weekend in the mornings. Thanks!"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              fullWidth
              type="number"
              label="Hours of Service?"
              variant="filled"
            />
          </Box>
        </div>
        <div className="button-container2">
          <Button />
          <Button2 />
        </div>
        <div className="home-indicator-8"></div>
      </div>
    </div>
  );
}

export default X10NewPost;
