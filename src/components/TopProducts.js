import data from "../data/topProducts";
import ProgressBar from "../components/ProgressBar";
function TopProducts() {
  return (
    <div>
      {data.map((x) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <h5>{x[0]}</h5>
            <h5 style={{ color: "#888" }}>{x[1]}</h5>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <p>{"+" + x[2][Object.keys(x[2])] + "%"}</p>
            <ProgressBar
              width="50"
              color={Object.keys(x[2])}
              value={x[2][Object.keys(x[2])]}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
function TopProductsButton(props) {
  return (
    <div
      className="topproducts-button"
      style={{
        border: "1px solid #eee",
        borderRadius: "5px",
        padding: "1rem",
        textAlign: "center"
      }}
    >
      <div>❋</div>
      <p>{props.text}</p>
    </div>
  );
}
export { TopProductsButton, TopProducts };
