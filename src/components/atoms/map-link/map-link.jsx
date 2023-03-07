import React from "react";
import PropTypes from "prop-types";

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

MapLink.propTypes = {
  /** A number between -90 and 90 */
  latitude: PropTypes.number.isRequired,

  /** A number between -180 and 180 */
  longitude: PropTypes.number.isRequired,

  /** The full street address in the form of {street} {state} {country} {zip-code} */
  address: PropTypes.string.isRequired,
};

export default MapLink;
