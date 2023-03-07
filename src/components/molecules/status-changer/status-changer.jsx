import React from "react";
import PropTypes from "prop-types";

import { ButtonGroup, Button, Tooltip } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import StatusChangerMenu from "./status-changer-menu";

const defaultStatuses = [
  "Ready",
  "In Review",
  "Wait",
  "Work Orders",
  "In Construction",
  "Closed",
];

const StatusChanger = ({
  initialStatus,
  statusList = defaultStatuses,
  nextDisabled = false,
}) => {
  const [currStatus, setStatus] = React.useState(initialStatus);

  const [proceed, setProceed] = React.useState(nextDisabled);

  React.useEffect(() => {
    if (currStatus === statusList.at(-1)) {
      setProceed(false);
    } else if (proceed === false) {
      setProceed(true);
    }
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = (newStatus) => {
    setStatus(newStatus);
    handleClose();
  };

  const handleNext = () => {
    const index = statusList.findIndex((status) => status === currStatus);
    if (index >= 0 && index < statusList.length - 1) {
      setStatus(statusList[index + 1]);
    }
  };

  const checked = (status) => {
    return status.toLowerCase().trim() === currStatus.toLowerCase().trim();
  };

  const size = {
    width: "calc(var(--baseline)*50)",
  };

  return (
    <>
      <ButtonGroup sx={{ ...size }}>
        <Button
          id="status-button"
          aria-controls={open ? "status-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ ...size }}
        >
          {currStatus}
        </Button>
        <Tooltip title="Proceed to next stage" placement="right-end">
          <Button
            disabled={!proceed}
            aria-label="nextState"
            onClick={handleNext}
            sx={{ maxWidth: "20%" }}
          >
            <ForwardIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <StatusChangerMenu
        statusList={statusList}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onUpdate={handleUpdate}
        checked={checked}
        size={size}
      />
    </>
  );
};

StatusChanger.propTypes = {
  statusList: PropTypes.arrayOf(PropTypes.string),
  initialStatus: PropTypes.string,
};

StatusChanger.defaultProps = {
  statusList: defaultStatuses,
};

export default StatusChanger;
