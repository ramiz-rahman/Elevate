import React from "react";

import ProjectPhoto from "./project-photo";

export default {
  title: "Project Photo",
  component: ProjectPhoto,
};

const Template = (args) => <ProjectPhoto {...args} />;

export const Live = Template.bind({});

Live.args = {
  src: "https://s3.amazonaws.com/im-production/users/j6WnaGoQl2/projects/SKbTxuRDhU/splashPhoto/SplashImage-1.jpg?AWSAccessKeyId=AKIAIBTORDPZP3IJCAHQ&Expires=1678319999&Signature=7XqYLJGb%2FxrV8t5CgGF0YWovr78%3D",
};

export const Broken = Template.bind({});

Broken.args = {
  src: "https://example.com",
};

export const Unsplash = Template.bind({});

Unsplash.args = {
  src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
};
