import { Typography, Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import data from "./scopingProject.json";
import propertyData from "./property.json";
import styles from "./style.module.css";

import { Container } from "@mui/system";

import ProjectHeader from "../ProjectHeader/index";

const latitude = propertyData.data.location[1];
const longitude = propertyData.data.location[0];

const projectSummary = {
  "Project Created": data.createdAt,
  "Project Deadline": data.deadline,
  "Last Updated": data.updatedAt,
  "Total Scope Value": "$15,276.70",
  "Total Work Orders Value": "$4,326.00",
  "Assets Present": 2,
  "Tasks Pending": 4,
  "Work Orders Created": 2,
  Notes: 12,
};

// `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&21z&basemap=satellite`

// `http://maps.google.com/maps?&z=${21}&mrt=${INSERT_TYPE_OF_SEARCH}&t={INSERT_MAP_TYPE}&q={INSERT_MAP_LAT_COORDINATES}+{INSERT_MAP_LONG_COORDINATES}`;

const mapLink = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=21&basemap=satellite`;

const Overview = () => (
  <Grid2 container>
    <Grid2 xs={12} component="header" className={styles.ProjectHeader}>
      <ProjectHeader data={data} propertyData={propertyData} />
    </Grid2>

    <Grid2 xs={12} sm={4} className={styles.ProjectOverviewBar}>
      <Container>
        Overview data
        <div>
          <li>Year Built</li>
          <li>Unread Notes</li>
          <li>Pending Tasks</li>
          <li></li>
          <li>GLA</li>
          <li>Property Features</li>
        </div>
        <Card>Reports</Card>
        <Card>FloorPlan</Card>
      </Container>
    </Grid2>

    <Grid2 xs={12} sm={8} className={styles.ProjectMainSection}>
      <Container>
        <Card>
          <Typography variant="h6">Project Summary</Typography>
          <Grid2 container component="dl" spacing={2}>
            {Object.entries(projectSummary).map(([key, val]) => (
              <Grid2 xs={6} sm={4} md={3} key={key}>
                <dt>{key}</dt>
                <dd>{val}</dd>
              </Grid2>
            ))}
          </Grid2>
        </Card>
        <Card></Card>
        Supplementary data
        <section>Timeline</section>
        <section>Diagnostics</section>
        <section>Summary</section>
      </Container>
    </Grid2>
  </Grid2>
);

export default Overview;
