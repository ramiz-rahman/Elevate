import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckIcon from "@mui/icons-material/Check";
import ForwardIcon from "@mui/icons-material/Forward";
import {
  Divider,
  MenuList,
  ButtonGroup,
  Typography,
  Tooltip,
} from "@mui/material";

const StatusMenuList = ({ statusList, onClick, checked }) => {
  return statusList.map((status) => (
    <MenuItem
      sx={{ justifyContent: "space-between" }}
      onClick={() => onClick(status)}
      selected={checked(status)}
      key={status}
    >
      {status}

      {checked(status) ? <CheckIcon /> : null}
    </MenuItem>
  ));
};

export default function BasicMenu({ initialStatus }) {
  const statusList = [
    "Ready",
    "In Review",
    "Wait",
    "Work Orders",
    "In Construction",
    "Closed",
  ];

  const [currStatus, setStatus] = React.useState(initialStatus);

  const checked = (status) => {
    return status.toLowerCase().trim() === currStatus.toLowerCase().trim();
  };

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
        <Tooltip title="Proceed to next stage" placement="right-start">
          <Button aria-label="nextState" sx={{ maxWidth: "20%" }}>
            <ForwardIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>

      <Menu
        id="status-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "status-button",
        }}
      >
        <MenuList sx={{ ...size }}>
          <MenuItem disabled sx={{ justifyContent: "space-between" }}>
            <Typography variant="subtitle2">Change status...</Typography>
            <Typography variant="subtitle2">⌘C</Typography>
          </MenuItem>
          <Divider />
          <StatusMenuList
            statusList={statusList}
            onClick={handleUpdate}
            checked={checked}
          />
        </MenuList>
      </Menu>
    </>
  );
}
