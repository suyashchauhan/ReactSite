import "./styles.css";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import chartoptions from "./data/c1.js";
import chartoptions2 from "./data/c2.js";
import chartoptions3 from "./data/c3.js";
import chartoptions4 from "./data/c4.js";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { TopProductsButton, TopProducts } from "./components/TopProducts";
import ProgressBar from "./components/ProgressBar";
import GridFirstRowItem from "./components/GridFirstRow";

const LeftRightButton = styled.button`
  background: rgba(0, 0, 139, 0.1);
  margin-right: ${(props) => (props.right ? "4px" : "none")};
  border-radius: 2px;
  padding: 4px 8px;
`;
const GridItemRow2 = styled.div`
  background: white;
`;
const GridItemRow = styled(GridItemRow2)`
  padding: 1rem;
`;
const Seperator = styled.div`
  background: #eee;
  height: 1px;
`;
const StyledButton = styled.button`
  color: #888;
  border: 1px solid #888;
  border-radius: 3px;
  padding: 5px 15px;
`;
const FlexCenterBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MainGRID = styled.div`
  display: grid;
  gap: 1rem;
  background: #eee;
  padding: 1rem;
`;
export default function App() {
  const handleClick = (e) => {
    setShow((show) => !show);
  };
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Sidebar handleClick={handleClick} show={show} />
      {/* <div style={{ marginLeft: show ? "200px" : "0px" }}> */}
      <div>
        <Navbar handleClick={handleClick} show={show} />
        <MainGRID className="change">
          {/* <Navbar handleClick={handleClick} show={show} /> */}
          <GridFirstRowItem
            head="AuthorSales"
            number="64M"
            chartoptions={chartoptions2}
            width="200"
            graphType="bar"
          />
          <GridFirstRowItem
            head="Technologies"
            number="9.3M"
            chartoptions={chartoptions}
            width="250"
            graphType="donut"
          />

          <GridFirstRowItem
            head="Total Orders"
            number="17M"
            chartoptions={chartoptions3}
            width="200"
            graphType="area"
          />

          <GridItemRow>
            <TopBarGridItem text="ANNOUNCEMENTS" />
            <h3 style={{ margin: "1rem 0" }}>Incredibly Positive Reviews</h3>
            <p style={{ margin: "1rem 0" }}>
              To start a blog, think of a topic about first brainstorm party is
              ways to write details
            </p>
            <FlexCenterBetween>
              <h6
                style={{
                  color: "blue",
                  background: "rgba(0,0,139,0.1)",
                  padding: "10px 15px",
                  borderRadius: "5px"
                }}
              >
                17 NOV,2018
              </h6>
              <StyledButton>VIEW</StyledButton>
            </FlexCenterBetween>
          </GridItemRow>
          <GridItemRow>
            <TopBarGridItem text="PROJECTS" />
            <h3 style={{ margin: "1rem 0" }}>First Milestone Achievement</h3>
            <p style={{ margin: "1rem 0" }}>
              To start a blog, think of a topic about first brainstorm party is
              ways to write details
            </p>
            <FlexCenterBetween>
              <p>Progress</p>
              <h6>55%</h6>
            </FlexCenterBetween>
            <ProgressBar value="55" color="blue" />
          </GridItemRow>

          <GridItemRow>
            <TopBarGridItem text="TODAY'S SCHEDULE" />
            <h3 style={{ margin: "1rem 0" }}>UI/UX Design Updates</h3>
            <p
              style={{
                color: "blue",
                fontSize: "1.4rem",
                fontWeight: "400",
                margin: "1rem 0"
              }}
            >
              11:15AM - 12:30PM
            </p>
            <FlexCenterBetween>
              <h6 style={{ color: "#888" }}>246R St.Manhattan NY</h6>
              <StyledButton>VIEW MAP</StyledButton>
            </FlexCenterBetween>{" "}
          </GridItemRow>

          <GridItemRow2>
            <HeadingGridBotCol text="Top Products" />
            <Seperator />
            <div
              style={{
                padding: "1rem 0",
                display: "flex",
                justifyContent: "center",
                gap: "1rem"
              }}
            >
              <TopProductsButton text="Settings" />
              <TopProductsButton text="Code" />
              <TopProductsButton text="Design" />
            </div>
            <div style={{ padding: "1rem" }}>
              <TopProducts />
            </div>
          </GridItemRow2>

          <GridItemRow2 className="stats">
            <HeadingGridBotCol text="Sales Statistics" />
            <Seperator />
            <div style={{ padding: "1rem" }}>
              <ReactApexChart
                options={chartoptions4.options}
                series={chartoptions4.series}
                type="bar"
                height={350}
              />
            </div>
          </GridItemRow2>
        </MainGRID>
      </div>
    </div>
  );
}
function TopBarGridItem(props) {
  return (
    <FlexCenterBetween>
      <h4 style={{ color: "#888", margin: "1rem 0" }}>{props.text}</h4>
      <TwoButtonsGroup />
    </FlexCenterBetween>
  );
}
function HeadingGridBotCol(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        padding: "1rem"
      }}
    >
      <h3>{props.text}</h3>
      <button style={{ background: "none", alignSelf: "flex-start" }}>
        . . .
      </button>
    </div>
  );
}

function TwoButtonsGroup() {
  return (
    <div>
      <LeftRightButton right>{"<"}</LeftRightButton>
      <LeftRightButton>{">"}</LeftRightButton>
    </div>
  );
}
