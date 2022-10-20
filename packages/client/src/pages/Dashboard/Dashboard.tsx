import React, { useState } from "react";
import Drawer from "../../components/Drawer";
import RecentActivity from "./RecentAcitivity";
import activities from "./Dashboard.fixtures";
import Header from "../../components/Header";
import { FormControl, Grid } from "@mui/material";
import { GenericButton, Select } from "components/Elements";
import { formatDistance } from "date-fns";
import DateRangePicker from "components/DateRangePicker";
import Card from "components/Cards/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Popover } from "@mui/material";
import { VictoryChart, VictoryArea } from "victory";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeJourney, setActiveJourney] = useState("Daily");
  const [date, setDate] = useState<Date[]>([new Date(), new Date()]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleActiveJourney = (value: any) => {
    setActiveJourney(value);
  };

  const handleDateChange = (e: any) => {
    setDate(e);
  };

  const redirectJourney = () => {
    navigate("/flow");
  };

  const redirectUses = () => {};

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const formattedActivities = activities.map((activity) => {
    return {
      ...activity,
      sentAt: formatDistance(new Date(activity.sentAt), new Date(Date.now()), {
        addSuffix: true,
      }),
    };
  });

  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: "#707070",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "16px",
        },
        xLabels: {
          fill: "transparent",
        },
        grid: { stroke: "#F4F5F7", strokeWidth: 0 },
        axis: { stroke: "transparent" },
      },
    },
    chart: {
      padding: {
        top: 0,
        bottom: 30,
        right: 15,
        left: 0,
      },
    },
  };

  return (
    <div className="relative bg-[#E5E5E5]">
      <Header />
      <Grid padding={"30px 31px"}>
        <div className="border-b-[1px] border-b-[#D3D3D3] w-full flex justify-between flex-row">
          <div className="flex items-center pb-[30px]">
            <h3 className="min-w-[204px]">Active Journeys</h3>
            <div className="pl-[49px]">
              <DateRangePicker onChange={handleDateChange} value={date} />
            </div>
            <FormControl
              sx={{ maxWidth: "200px", paddingLeft: "15px", minWidth: "112px" }}
            >
              <Select
                id="activeJourney"
                value={activeJourney}
                options={[
                  { value: "Daily" },
                  { value: "Weekly" },
                  { value: "Monthly" },
                ]}
                onChange={handleActiveJourney}
                displayEmpty
              />
            </FormControl>
          </div>
          <GenericButton
            onClick={redirectJourney}
            style={{
              maxWidth: "158px",
              maxHeight: "48px",
              "background-image":
                "linear-gradient(to right, #6BCDB5 , #307179, #122F5C)",
            }}
          >
            See All Journeys
          </GenericButton>
        </div>
      </Grid>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"0px 30px"}
        spacing={3}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <div className="h-[299px]">
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              borderBottom={"1px solid #D3D3D3"}
              padding={"20px"}
            >
              <p>0 - Sent</p>
              <p>0 - From last day</p>
              {/* <MoreHorizIcon /> */}

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleClick}
                size="small"
              >
                <MoreHorizIcon />
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <p className="p-[2]">View User</p>
              </Popover>
            </Grid>
            <div className="p-[20px]">
              <svg style={{ position: "absolute" }}>
                <defs>
                  <linearGradient
                    id="myGradient"
                    x1="100%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#B8F2E6" />
                    <stop offset="100%" stopColor="#FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <VictoryChart height={176} theme={chartTheme}>
                <VictoryArea
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 },
                  ]}
                  style={{
                    data: { fill: "url(#myGradient)" },
                    parent: { border: "1px solid #ccc" },
                  }}
                />
              </VictoryChart>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <div className="h-[299px]">
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              borderBottom={"1px solid #D3D3D3"}
              padding={"20px"}
            >
              <p>0 - Delivered</p>
              <p>0 - From last day</p>
              {/* <MoreHorizIcon /> */}

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleClick}
                size="small"
              >
                <MoreHorizIcon />
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <p className="p-[2]">View User</p>
              </Popover>
            </Grid>
            <div className="p-[20px]">
              <svg className="absolute">
                <defs>
                  <linearGradient
                    id="myGradient"
                    x1="100%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#B8F2E6" />
                    <stop offset="100%" stopColor="#FFF" />
                  </linearGradient>
                </defs>
              </svg>
              <VictoryChart height={176} theme={chartTheme}>
                <VictoryArea
                  data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 },
                  ]}
                  style={{
                    data: { fill: "url(#myGradient)" },
                    parent: { border: "1px solid #ccc" },
                    labels: {
                      fontFamily: "Poppins",
                      color: "red",
                    },
                  }}
                />
              </VictoryChart>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <div className="h-[299px]">
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              borderBottom={"1px solid #D3D3D3"}
              padding={"20px"}
            >
              <p>Deliverability</p>
              {/* <MoreHorizIcon /> */}
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleClick}
                size="small"
              >
                <MoreHorizIcon />
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <p className="p-[2]">View User</p>
              </Popover>
            </Grid>
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              padding="20px 20px 15px 20px"
            >
              <p className="text-[#00AA58]">Bounce rate : $25</p>
              <p className="text-[#D17E83]">Spam rate : $30</p>
            </Grid>
            <div className="p-[0px_20px_20px_20px]">
              <p>Supercharge your transactional delivery.</p>
              <p>
                Assign a sending domain specifically for your transactional
                messages.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="p-[37px_30px]">
        <Card>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"20px"}
            borderBottom={"1px solid #D3D3D3"}
            height={"104px"}
          >
            <h3 className="font-[Inter] font-semibold text-[25px] leading-[38px]">
              Active Journeys
            </h3>
            <GenericButton
              onClick={redirectUses}
              style={{
                maxWidth: "158px",
                maxHeight: "48px",
                "background-image":
                  "linear-gradient(to right, #6BCDB5 , #307179, #122F5C)",
              }}
            >
              Go To Customers
            </GenericButton>
          </Grid>
          <div className="p-[20px]">
            <RecentActivity activities={formattedActivities} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
