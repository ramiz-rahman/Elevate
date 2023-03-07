import React from "react";
import PropTypes from "prop-types";
import fallbackSrc from "./fallback.svg";

import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/material";

const ProjectPhoto = ({ src }) => {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);

  const style = {
    width: "calc(var(--baseline)*16*4)",
    height: "calc(var(--baseline)*9*4)",
    borderRadius: "calc(var(--baseline)*2)",
    border: "2px solid #eee",
    display: loading ? "none" : "block",
  };

  const Img = styled("img")(style);

  console.log(src);
  console.log(imageSrc);

  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{ ...style, display: loading ? "block" : "none" }}
      />
      <Img
        alt="Curb shot of house"
        onError={() => {
          setImageSrc(fallbackSrc);
        }}
        onLoad={() => setLoading(false)}
        src={imageSrc}
      />
    </>
  );
};

ProjectPhoto.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ProjectPhoto;
