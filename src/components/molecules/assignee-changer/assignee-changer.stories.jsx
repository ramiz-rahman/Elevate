import React from "react";

import AssigneeChanger from "./assignee-changer";

export default {
  title: "Assignee Changer",
  component: AssigneeChanger,
};

const Template = (args) => <AssigneeChanger {...args} />;

export const Assigned = Template.bind({});

Assigned.args = {
  assignee: "ramiz@insidemaps.com",
};

export const Unassigned = Template.bind({});

Unassigned.args = {
  assignee: null,
};
