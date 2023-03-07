import React from "react";
import PropTypes from "prop-types";

import { Chip } from "@mui/material";
import labelsConfig from "./label.config";

const Label = ({ config = labelsConfig, label }) => (
  <Chip label={label} sx={config[label]} size="small" />
);

Label.propTypes = {
  /** The label identifier in the config */
  label: PropTypes.string.isRequired,
  /** Optional color configuration */
  config: PropTypes.objectOf(
    PropTypes.shape({
      /** Text color in Hex format */
      color: PropTypes.string,
      /** Text color in Hex format */
      backgroundColor: PropTypes.string,
    })
  ),
};
export default Label;
