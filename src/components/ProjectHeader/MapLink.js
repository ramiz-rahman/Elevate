import { Stack, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MapLink = ({ latitude, longitude, address }) => {
  const mapLink = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=21&basemap=satellite`;

  return (
    <Stack direction="row">
      <LocationOnIcon fontSize="small" />
      <Typography variant="body2">
        <Link href={mapLink} target="_blank" rel="noopener noreferrer">
          {address}
        </Link>
      </Typography>
    </Stack>
  );
};

export default MapLink;
