import "../../App.css";
import "./BoxSection.css";
import { IconBox } from "./icon-box/IconBox";

export const BoxSection = (props) => {
  return (
    <div className="box-section-container">
      <h1 className="box-section-heading">The Tickete promise</h1>
      <IconBox />
    </div>
  );
};
