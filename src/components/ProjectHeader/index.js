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

import MapLink from "./MapLink";
import Labels from "./Labels";
import StatusMenu from "./StatusMenu";
import AssigneeMenu from "./AssigneeMenu";

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
            <CardMedia
              component="img"
              image={data.customBackgroundImage}
              alt="Curb shot of house"
              sx={{
                width: "240px",
                height: "120px",
                margin: "8px",
                borderRadius: "8px",
                border: "2px solid #eee",
              }}
            />
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
                <Button
                  variant="contained"
                  disableElevation
                  href={`${data.walkthrough.urlDirect}&inspection=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ViewInArIcon />
                  Inspect
                </Button>

                <StatusMenu initialStatus={data.scopingState} />
              </Box>

              <AssigneeMenu assignee="ramiz.rahman@insidemaps.com" />
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
