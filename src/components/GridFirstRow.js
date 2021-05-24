import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
const GridItem = styled.div`
  padding: 1rem;
  background: white;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export default function GridFirstRowItem(props) {
  return (
    <GridItem>
      <FlexBox>
        <h3>{props.head}</h3>
        <button style={{ background: "none", alignSelf: "flex-start" }}>
          . . .
        </button>
      </FlexBox>
      <FlexBox>
        <h3>{props.number}</h3>
        <ReactApexChart
          options={props.chartoptions.options}
          series={props.chartoptions.series}
          width={props.width}
          type={props.graphType}
        />
      </FlexBox>
    </GridItem>
  );
}
