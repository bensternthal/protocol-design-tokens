const fs = require('fs');
const units = require('./units/protocol-units.json');
const metadata = require('./package.json');

const jsLicense = `/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
`;
const xmlLicense = `<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at http://mozilla.org/MPL/2.0/. -->
`;
const shLicense = `# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
`;

// Units

function createUnits(property, format) {
  const rv = [];

  for (const size in units[property]) {
    if (size === "xxs") {
      var value = `${units[property].xxs}`
      if (isNaN(value)) {
        var value = `$${units[property].xxs}`
      } else {
        var value = `${units[property].xxs}px`
      }
    } else if (size === "xs") {
      var value = `${units[property].xs}`
      if (isNaN(value)) {
        var value = `$${units[property].xs}`
      } else {
        var value = `${units[property].xs}px`
      }
    } else if (size === "sm") {
      var value = `${units[property].sm}`
      if (isNaN(value)) {
        var value = `$${units[property].sm}`
      } else {
        var value = `${units[property].sm}px`
      }
    } else if (size === "md") {
      var value = `${units[property].md}`
      if (isNaN(value)) {
        var value = `$${units[property].md}`
      } else {
        var value = `${units[property].md}px`
      }
    } else if (size === "lg") {
      var value = `${units[property].lg}`
      if (isNaN(value)) {
        var value = `$${units[property].lg}`
      } else {
        var value = `${units[property].lg}px`
      }
    } else if (size === "xl") {
      var value = `${units[property].xl}`
      if (isNaN(value)) {
        var value = `$${units[property].xl}`
      } else {
        var value = `${units[property].xl}px`
      }
    } else if (size === "xxl") {
      var value = `${units[property].xxl}`
      if (isNaN(value)) {
        var value = `$${units[property].xxl}`
      } else {
        var value = `${units[property].xxl}px`
      }
    } else {
      var value = `$${units[property].base}`
    }
    rv.push(format.formatter(property, size, value));
  }


  if (format.group_end === undefined) {
    format.group_end = '\n';
  }
  if (format.group_end) {
    rv.push(format.group_end);
  }
  return rv;
}

const formatsUnits = {
    'sass': {
      'output': [`${jsLicense}\n/* Protocol Units SCSS Variables v${metadata.version} */\n\n`],
      'formatter': (property, size, value) => {
        return `$${property}-${size}: ${value};\n`
      },
      'ext': 'scss'
    }
}

for (const property in units) {
  const element = units[property];
  for (const key in formatsUnits) {
    const format = formatsUnits[key];
    format.output.push(...createUnits(property, format));
  }
}


// output key/value formats to files
for (let key in formatsUnits) {
  const format = formatsUnits[key];
  if (format.footer) {
    format.output.push(format.footer);
  }
  let out_func = format.outputter;
  if (!out_func) {
    out_func = (data) => data.join('');
  }
  fs.writeFile(`units/protocol-units.${format.ext}`, out_func(format.output), 'utf8', (err) => {
    if (err) throw err;
  });
}
