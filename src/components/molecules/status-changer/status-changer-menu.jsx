import React from "react";
import PropTypes from "prop-types";

import { Menu, MenuList, MenuItem, Typography, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const StatusChangerMenuList = ({ statusList, onClick, checked }) => {
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

const StatusChangerMenu = ({
  anchorEl,
  open,
  onClose,
  onUpdate,
  checked,
  statusList,
  size,
}) => (
  <Menu
    id="status-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
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
      <StatusChangerMenuList
        statusList={statusList}
        onClick={onUpdate}
        checked={checked}
      />
    </MenuList>
  </Menu>
);

StatusChangerMenu.propTypes = {
  anchorEl: PropTypes.element,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdate: PropTypes.func,
  checked: PropTypes.func,
  statusList: PropTypes.array,
  size: PropTypes.object,
};

export default StatusChangerMenu;
