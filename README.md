MISSION ACCOMPLISHED!
====================
This bug was [fixed](https://bugzilla.mozilla.org/show_bug.cgi?id=956906) by Mozilla in Firefox 30.
Current versions of Firefox ignore autocomplete="off" in password fields.

Since Firefox is at version 33 at the time of this writing, no one should be using a Firefox version where this addon is actually necessary.

This repository will be kept online for historical purposes but it is extremely unlikely that I will be updating it all. AutocompleteAnywhere should be considered abandonware.

Note: that Chrome has also recently "fixed" this bug as well.

AutocompleteAnywhere
====================
Download the addon [here](https://addons.mozilla.org/en-US/firefox/addon/autocompleteanywhere/).

When the AutocompleteAnywhere icon is pressed, all forms on the page will be searched for elements 'username' and 
'password'. If these form elements are present and autocomplete has been set to equal "off", it will be set 
equal to "on", allowing a user to instruct Firefox to remember his or her password.

The addon has a few usability issues that should be fixed, most importantly, there is no visibile feedback when the user 
presses the icon, so he or she has no idea if autocomplete has been turned on, see TODO for more wanted features.
