import React from "react";
import PropTypes from "prop-types";

import { Chip } from "@mui/material";
import projectTypeConfig from "./project-types.config";

const ProjectType = ({ config = projectTypeConfig, type }) => {
  let colors = {};
  if (type in config) {
    colors = config[type];
  }
  return (
    <Chip
      label={type}
      size="small"
      sx={{
        ...colors,
        borderRadius: "var(--baseline)",
        fontWeight: 700,
      }}
    />
  );
};

ProjectType.propTypes = {
  /** Optional color configuration */
  config: PropTypes.objectOf(
    PropTypes.shape({
      /** Text color in Hex format */
      color: PropTypes.string,
      /** Text color in Hex format */
      backgroundColor: PropTypes.string,
    })
  ),
  /** Identifier in the config */
  type: PropTypes.string.isRequired,
};

ProjectType.defaultProps = {
  config: projectTypeConfig,
};

export default ProjectType;
