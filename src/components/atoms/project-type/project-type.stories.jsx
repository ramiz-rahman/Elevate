import React from "react";

import ProjectType from "./project-type";
import defaultConfig from "./project-types.config";

export default {
  title: "Project Type",
  component: ProjectType,
};

const Template = (args) => <ProjectType {...args} />;

export const Reno = Template.bind({});
Reno.args = {
  type: "RENO",
};

export const Turn = Template.bind({});
Turn.args = {
  type: "TURN",
  config: defaultConfig,
};

export const MIR = Template.bind({});
MIR.args = {
  type: "MIR",
  config: defaultConfig,
};

export const AssetDataCapture = Template.bind({});
AssetDataCapture.args = {
  type: "Asset Data Capture",
  config: defaultConfig,
};

export const MoveInInspection = Template.bind({});
MoveInInspection.args = {
  type: "Move In Inspection",
  config: defaultConfig,
};

export const Unknown = Template.bind({});
Unknown.args = {
  type: "Unknown",
};
