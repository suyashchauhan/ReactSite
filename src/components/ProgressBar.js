export default function ProgressBar(props) {
  return (
    <div
      style={{
        width: `${props.width ? props.width + "px" : "100%"}`,
        height: "6px",
        background: "#eee",
        position: "relative",
        borderRadius: "3px"
        // border: "1px solid black"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          borderRadius: "3px",
          left: 0,
          width: `${props.value}%`,
          height: "6px",
          background: `${props.color}`
        }}
      ></div>
    </div>
  );
}
