import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./App";

const ServerRender = () => {
  return ReactDOMServer.renderToString(<App />);
};

export default ServerRender;
