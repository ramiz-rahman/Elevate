import { Box, Chip } from "@mui/material";

const ProjectTypeConfig = {
  RENO: { color: "#inherit", backgroundColor: "#A5D6A7" },
  TURN: { color: "inherit", backgroundColor: "#FFE082" },
  MIR: { color: "inherit", backgroundColor: "#81D4FA" },
  "Move In Inspection": { color: "#fff", backgroundColor: "#CE93D8" },
  "Asset Data Capture": { color: "inherit", backgroundColor: "#F48FB1" },
};

const labelsConfig = {
  Blocked: { color: "#fff", backgroundColor: "#F44336" },
  "Missing Scans": { color: "inherit", backgroundColor: "#00BCD4" },
  "Lead Paint": { color: "inherit", backgroundColor: "#FFEB3B" },
  Cancelled: { color: "#fff", backgroundColor: "#607D8B" },
  "No Scan": { color: "#fff", backgroundColor: "#673AB7" },
};

const ProjectType = ({ type }) => (
  <li>
    <Chip
      label={type}
      size="small"
      sx={{
        ...ProjectTypeConfig[type],
        borderRadius: "var(--baseline)",
        fontWeight: 700,
        marginRight: "calc(var(--baseline)*2)",
      }}
    />
  </li>
);

const ProjectLabels = ({ labels }) => {
  return labels.map((label) => (
    <li key={label}>
      <Chip label={label} sx={labelsConfig[label]} size="small" />
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
      <ProjectType type={projectType} />
      <ProjectLabels labels={labels} />
    </Box>
  );
};

export default Labels;
