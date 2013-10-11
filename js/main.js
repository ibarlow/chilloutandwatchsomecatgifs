/*! This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
strict:true, undef:true, unused:true, curly:true, browser:true, white:true,
moz:true, esnext:false, indent:2, maxerr:50, devel:true, node:true, boss:true,
globalstrict:true, nomen:false, newcap:false */

"use strict";

$.ajax({
  url: 'catgifs.txt',
  dataType: 'text'
}).done(function (data, textStatus) {
  console.log(textStatus, data);
  $('html').css('background-image', 'url("http://i.imgur.com/4PD98.gif")');
  console.log($('html').css('background-image'));
}).fail(function (jqXHR, textStatus, errorThrown) {
  console.log(textStatus, errorThrown);
});
