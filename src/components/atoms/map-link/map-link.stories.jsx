import React from "react";

import MapLink from "./map-link";

export default {
  title: "Map Link",
  component: MapLink,
};

const Template = (args) => <MapLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  latitude: 32.5940879,
  longitude: -96.77344930000001,
  address: "936 Francis St Lancaster TX United States 75146",
};
