import React from "react";
import { ResponsivePieCanvas } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GrapicPie = ({ data }) => (
  <div style={{ height: "32em" }}>
    <ResponsivePieCanvas
      data={data}
      margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
      pixelRatio={0.9}
      innerRadius={0.7}
      padAngle={0}
      cornerRadius={0}
      colors={{ scheme: "blues" }}
      borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: "color" }}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateX: 140,
          itemWidth: 60,
          itemHeight: 14,
          itemsSpacing: 2,
          symbolSize: 14,
          symbolShape: "circle",
        },
      ]}
    />
  </div>
);

export default GrapicPie;
