import React from "react";

import StatusChanger from "./status-changer";

export default {
  title: "Status Changer",
  component: StatusChanger,
};

const Template = (args) => <StatusChanger {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialStatus: "Ready",
};
