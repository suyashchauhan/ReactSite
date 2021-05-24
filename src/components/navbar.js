// import MenuIcon from "./menuIcon";
import styled from "styled-components";
const BlueButton = styled.div`
  background: blue;
`;
const Bars = styled.div`
  background: #888;
  height: 3px;
  width: ${(props) => props.width};
  margin-bottom: ${(props) => (props.mgBottom ? props.mgBottom : "none")};
`;
const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
`;
const PicArea = styled.div`
  border-radius: 50%;
  width: ${(props) => props.len};
  height: ${(props) => props.len};
  background: red;
  margin: ${(props) => (props.margin ? "0 5px" : "none")};
`;
export default function Navbar(props) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        padding: "1rem",
        background: "white"
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={(e) => props.handleClick(e)} className="sidebarbutton">
          <Bars width="20px" mgBottom="6px" />
          <Bars width="32px" mgBottom="6px" />
          <Bars width="20px" />
        </button>
        <div
          className="hide"
          style={{
            gap: "1rem",
            marginLeft: "1rem",
            alignItems: "center"
          }}
        >
          <StyledButton>Pages &#11015;</StyledButton>
          <StyledButton>Reports &#11015;</StyledButton>
          <StyledButton>Apps &#11015;</StyledButton>
        </div>
      </div>
      <div className="hide" style={{ gap: "1.5rem", alignItems: "center" }}>
        <div>Search</div>
        <div>Bell</div>
        <div>Settings</div>
        <PicArea len="32px" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>
            Hi,<strong>Alex</strong>
          </p>
          <PicArea len="40px" margin />
        </div>
        <GridIcon />
      </div>
    </div>
  );
}

function GridIcon() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,8px)",
        gridTemplateRows: "repeat(3,8px)",
        gap: "3px"
      }}
    >
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
      <BlueButton />
    </div>
  );
}
