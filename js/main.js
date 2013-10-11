/*! This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
strict:true, undef:true, unused:true, curly:true, browser:true, white:true,
moz:true, esnext:false, indent:2, maxerr:50, devel:true, node:true, boss:true,
globalstrict:true, nomen:false, newcap:false */

"use strict";

function showRandomLine(allLines, remainingLines) {
  if (remainingLines.length === 0) {
    remainingLines = allLines.concat([]);
  }
  var current = Math.floor(Math.random() * remainingLines.length);
  //console.log("Showing gif #" + current + " of " + remainingLines.length);
  var cat = remainingLines.splice(current, 1)[0];
  $('html').css('background-image', 'url("' + cat + '")');
}

$.ajax({
  url: 'catgifs.txt',
  dataType: 'text'
}).done(function (data) {
  var allLines = data.split('\n').map(function (i) {
    return i.trim();
  }).filter(function (i) {
    return i.length && (!(i[0] === '#'));
  });
  var remainingLines = allLines.concat([]);
  showRandomLine(allLines, remainingLines);
  setInterval(showRandomLine, 10000, allLines, remainingLines);
}).fail(function (jqXHR, textStatus, errorThrown) {
  console.log(textStatus, errorThrown);
});
