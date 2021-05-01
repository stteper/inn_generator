import {Colors, getTextColor} from "../common/color";
import React from "react";

export interface ICard {
  title?: string,
  color: Colors
}

const Card : React.FC<ICard> = ({ title, color, children }) => (
  <div className="card">
    <h5 className={`card-header bg-${color} text-${getTextColor(color)}`}>{title}</h5>
    <div className="card-body text-left">
      {children}
    </div>
  </div>
);
export { Card };
