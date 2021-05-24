function NavbarItem(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            background: "#888",
            borderRadius: "50%"
          }}
        ></div>
        <h5>{props.el}</h5>
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)" }}> ˃ </div>
    </div>
  );
}
function NavbarItemList(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 10px 10px 25px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "2px",
            height: "2px",
            background: "#888",
            borderRadius: "50%"
          }}
        ></div>
        <h5>{props.el}</h5>
      </div>
    </div>
  );
}
export { NavbarItem, NavbarItemList };
