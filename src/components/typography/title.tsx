import React from "react";

const Title: React.FC = (props) => {
  return <div className="text-2xl font-medium">{props.children}</div>;
};

export default Title