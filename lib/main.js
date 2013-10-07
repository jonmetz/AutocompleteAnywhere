/*  Copyright 2013 Jonathan Metzman

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License 
    (see Data/License.txt) along with this program. If not, see 
    <http://www.gnu.org/licenses/>.
*/
exports.main = function() {};

var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
 
var widget = widgets.Widget({
  id: "autocomplete-form",
  label: "Turns on autocomplete on page's forms",
  contentURL: self.data.url("images/padlock.png"),
  onClick: function() {
    tabs.activeTab.attach({
    contentScriptFile: self.data.url("inserted.js")
      });
    }
});

