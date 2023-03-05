import { Typography, Tooltip, Button, Avatar, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

{
  /* <Box
sx={{
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}}
>
<Box
  sx={{
    width: "240px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
> */
}

const User = ({ email }) => {
  let char = null;
  //   if (email) {
  //     char = email.charAt();
  //   }
  return <Avatar sx={{ width: 24, height: 24 }}>{char}</Avatar>;
};

const Text = ({ text }) => (
  <Typography pl={0.5} sx={{ textTransform: "lowercase" }}>
    {text}
  </Typography>
);

const AssigneeMenu = ({ assignee }) => {
  const [currAssignee, setAssignee] = useState(assignee);

  const [assigned, setAssigned] = useState(false);

  console.log(currAssignee);

  const handleClick = () => {
    // setAssignee(user);
    setAssigned(!assigned);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "8px",
      }}
    >
      <Typography>Assignee</Typography>

      <Tooltip title="Change Assignee">
        <Button onClick={handleClick}>
          {assigned ? (
            <>
              <User email={currAssignee} />
              <Text text={currAssignee} />
            </>
          ) : (
            <>
              <AccountCircleIcon />
              <Text text="unassigned" />
            </>
          )}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default AssigneeMenu;
