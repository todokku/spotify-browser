import { useState, useEffect } from "react";

import axios from "axios";

import { REACT_APP_API_VERSION } from "../constants";

const useFigmaColors = () => {
  const [figmaColors, setFigmaColors] = useState(null);

  useEffect(() => {
    axios.get(`api/${REACT_APP_API_VERSION}/colors`).then(({ data }) => {
      let palette = {};
      data.forEach(({ name, main }) => {
        palette = {
          ...palette,
          [name]: { main },
        };
      });

      setFigmaColors(palette);
    });
  }, []);

  return figmaColors;
};

export default useFigmaColors;
