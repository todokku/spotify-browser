import { useState, useEffect } from "react";

import axios from "axios";

import { REACT_APP_API_VERSION } from "../constants";

export const useFigmaComments = () => {
  const [figmaComments, setFigmaComments] = useState(null);

  useEffect(() => {
    axios.get(`api/${REACT_APP_API_VERSION}/comments`).then(({ data }) => {
      setFigmaComments(data);
    });
  }, []);

  return figmaComments;
};

export default useFigmaComments;
