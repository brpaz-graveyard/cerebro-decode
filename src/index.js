'use strict';

const PLUGIN_REGEX = /decode\s(.*)/;
const PLUGIN_KEYWORD = 'decode';
const icon = require('../assets/icon.png');
const encoder = require('./decoder');

const plugin = ({ term, display, actions }) => {

  const match = term.match(PLUGIN_REGEX);

  if (match) {

    if (match[1]) {

      let decodedValues = encoder.decode(match[1]);

      let results = [];
      decodedValues.forEach((item) => {
        results.push({
          title: item.title,
          icon,
          clipboard: item.value,
          onSelect: () => {
            actions.copyToClipboard(item.value);
          }
        });
      });

      display(results);
    }
  }
};

module.exports = {
  fn: plugin,
  name: 'Decoder',
  keyword: PLUGIN_KEYWORD,
  icon
};