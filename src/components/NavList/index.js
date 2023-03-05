import { ButtonBase, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import data from "./data";
import styles from "./style.module.css";

const NavListItem = ({ text, Icon, url }) => (
  <li className={styles.NavList__List__Item}>
    <ButtonBase href={url} className={styles.NavList__Item__Button}>
      <Icon />
      <Typography variant="caption">{text}</Typography>
    </ButtonBase>
  </li>
);

const NavList = () => {
  return (
    <nav className={styles.NavList}>
      <Stack component="ul" spacing={1} className={styles.NavList__List}>
        {data.map((item) => (
          <NavListItem
            key={item.url}
            text={item.text}
            url={item.url}
            Icon={item.icon}
          />
        ))}
      </Stack>
    </nav>
  );
};

export default NavList;
