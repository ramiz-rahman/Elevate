import React from "react";

import Label from "./label";

export default {
  title: "Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Blocked = Template.bind({});

Blocked.args = {
  label: "Blocked",
};

export const MissingScan = Template.bind({});

MissingScan.args = {
  label: "Missing Scans",
};

export const LeadPaint = Template.bind({});

LeadPaint.args = {
  label: "Lead Paint",
};

export const Cancelled = Template.bind({});

Cancelled.args = {
  label: "Cancelled",
};

export const NoScan = Template.bind({});

NoScan.args = {
  label: "No Scan",
};

export const WrongLabel = Template.bind({});

WrongLabel.args = {
  label: "Wrong Label",
};

export const NoLabel = Template.bind({});

NoLabel.args = {};
