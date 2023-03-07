import {
  Typography,
  Link,
  Stack,
  Paper,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  ButtonGroup,
  Button,
  IconButton,
  Avatar,
  Divider,
  Tooltip,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ForwardIcon from "@mui/icons-material/Forward";

import MapLink from "../../atoms/map-link/map-link";
import Labels from "../../molecules/labels/labels";
import StatusChanger from "../../molecules/status-changer/status-changer";
import AssigneeChanger from "../../molecules/assignee-changer/assignee-changer";
import InspectButton from "../../atoms/inspect-button/inspect-button";
import ProjectPhoto from "../../atoms/project-photo/project-photo";

const ProjectHeader = ({ data, propertyData }) => {
  const latitude = propertyData.data.location[1];
  const longitude = propertyData.data.location[0];
  const assigned = true;
  return (
    <Container>
      <Card>
        <Grid2
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid2 md="auto">
            <CardMedia sx={{ marginLeft: "8px" }}>
              <ProjectPhoto
                src={
                  "https://s3.amazonaws.com/im-production/users/j6WnaGoQl2/projects/SKbTxuRDhU/splashPhoto/SplashImage-1.jpg?AWSAccessKeyId=AKIAIBTORDPZP3IJCAHQ&Expires=1678319999&Signature=7XqYLJGb%2FxrV8t5CgGF0YWovr78%3D"
                }
              />
            </CardMedia>
          </Grid2>

          <Grid2 sm={4} md={3} lg="auto">
            <CardContent>
              <Typography variant="caption">
                Property: <Link>{data.name}</Link>
              </Typography>
              <Typography variant="h5">{data.name}</Typography>
              <Labels
                projectType={"RENO"}
                labels={["Blocked", "Lead Paint", "Missing Scans", "Cancelled"]}
              />
              <MapLink
                latitude={propertyData.data.location[1]}
                longitude={propertyData.data.location[1]}
                address={propertyData.data.fullAddress}
              />
            </CardContent>
          </Grid2>

          <Grid2 sm={4} lg="auto">
            <CardContent
              sx={{
                display: "Flex",
                flexFlow: "column",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  display: "Flex",
                  flexFlow: "row wrap",
                  justifyContent: "flex-end",
                  gap: "16px",
                }}
              >
                <InspectButton url={data.walkthrough.urlDirect} />

                <StatusChanger initialStatus={data.scopingState} />
              </Box>

              <AssigneeChanger assignee="ramiz.rahman@insidemaps.com" />
            </CardContent>
          </Grid2>
        </Grid2>
      </Card>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Inspection</li>
          <li>Assets</li>
          <li>Tasks</li>
          <li>Work Orders</li>
          <li>Logs</li>
        </ul>
      </nav>
    </Container>
  );
};

export default ProjectHeader;
