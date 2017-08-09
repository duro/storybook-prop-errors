/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from "@storybook/react";

const req = require.context("../src/components", true, /story\.js$/);

function loadStories() {
  // require('../stories');
  req.keys().forEach(path => req(path));
}

configure(loadStories, module);
