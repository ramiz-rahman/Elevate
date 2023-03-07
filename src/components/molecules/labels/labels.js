import React from "react";
import PropTypes from "prop-types";

import { Box } from "@mui/material";
import ProjectType from "../../atoms/project-type/project-type";
import Label from "../../atoms/label/label";

const ProjectLabels = ({ labels }) => {
  return labels.map((label) => (
    <li key={label}>
      <Label label={label} />
    </li>
  ));
};

const Labels = ({ projectType, labels }) => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        gap: "var(--baseline)",
        listStyle: "none",
        padding: 0,
        margin: "4px 0 16px",
      }}
    >
      <Box mr={1} component="li">
        <ProjectType type={projectType} />
      </Box>

      <ProjectLabels labels={labels} />
    </Box>
  );
};

Labels.propTypes = {
  projectType: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string),
};

export default Labels;
