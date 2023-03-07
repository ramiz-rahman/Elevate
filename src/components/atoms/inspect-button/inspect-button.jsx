import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const isValidUrl = (url) => {
  try {
    const newUrl = new URL(url);
    console.log(newUrl);
    return newUrl.pathname === "/app/walkthrough-v2";
  } catch (err) {
    return false;
  }
};

const InspectButton = ({ url = null, disabled = false }) => (
  <Button
    variant="contained"
    disableElevation
    href={`${url}&inspection=true`}
    target="_blank"
    rel="noopener noreferrer"
    disabled={!isValidUrl(url) || disabled}
    sx={{ gap: "calc(var(--baseline))" }}
  >
    <ViewInArIcon />
    Inspect
  </Button>
);

InspectButton.propTypes = {
  /** URL pointing to Web Inspection (Pathname === "/app/walkthrough-v2") */
  url: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default InspectButton;
