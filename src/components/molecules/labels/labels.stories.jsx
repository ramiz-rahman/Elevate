import React from "react";

import Labels from "./labels";

export default {
  title: "Labels",
  component: Labels,
};

const Template = (args) => <Labels {...args} />;

export const AllLabels = Template.bind({});

AllLabels.args = {
  projectType: "MIR",
  labels: ["Blocked", "Missing Scan", "Lead Paint", "Cancelled", "No Scan"],
};
