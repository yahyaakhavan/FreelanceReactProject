/* eslint-disable react/prop-types */
import { ThreeDots } from "react-loader-spinner";

export default function Loader({ height = 40, width = 75 }) {
  return (
    <ThreeDots
      width={width}
      height={height}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      visible={true}
    />
  );
}
