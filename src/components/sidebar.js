import { Dashboards, components, Custom } from "../data/navdata";
import { NavbarItem, NavbarItemList } from "./NavbarItems";
export default function Sidebar(props) {
  return (
    <ul
      className={props.show ? "showSidebar" : "hideSidebar"}
      style={{
        position: "fixed",
        // top: 0,
        // left: 0,
        height: "100%",
        overflowY: "scroll",
        zIndex: 2,
        width: "200px",
        background: "#232939",
        color: "#888"
      }}
    >
      <li
        style={{
          padding: "1rem ",
          display: "flex",
          justifyContent: "space-between",
          color: "white"
        }}
      >
        <strong>Keen</strong>
        <button
          style={{ color: "white", background: "transparent" }}
          onClick={(e) => props.handleClick(e)}
        >
          X
        </button>
        {/* </div> */}
      </li>
      <li>
        <NavbarItem el="Dashboard" />
        <ul>
          {Dashboards.map((el) => (
            <NavbarItemList el={el} />
          ))}
        </ul>
      </li>
      <NavbarItem el="Layout Builder" />
      <SameCompo text="Components" data={components} />
      <SameCompo text="Custom" data={Custom} />
    </ul>
  );
}
function SameCompo(props) {
  return (
    <li>
      <p style={{ margin: "2rem 1rem" }}>{props.text}</p>
      <ul>
        {props.data.map((el) => (
          <NavbarItem el={el} />
        ))}
      </ul>
    </li>
  );
}
