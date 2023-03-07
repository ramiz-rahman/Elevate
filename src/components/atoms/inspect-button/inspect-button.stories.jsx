import React from "react";

import InspectButton from "./inspect-button";

export default {
  title: "Inspect Button",
  component: InspectButton,
};

const Template = (args) => <InspectButton {...args} />;

export const Active = Template.bind({});

Active.args = {
  url: "https://www.insidemaps.com/app/walkthrough-v2?projectId=SKbTxuRDhU&env=production",
};

export const Disabled = Template.bind({});

Disabled.args = {
  url: "https://www.insidemaps.com/app/walkthrough-v2?projectId=SKbTxuRDhU&env=production",
  disabled: true,
};

export const NoUrl = Template.bind({});

NoUrl.args = {};
