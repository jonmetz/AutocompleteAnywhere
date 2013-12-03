var fixElements = function() {
  var elements = Array.prototype.slice.call(document.querySelectorAll('input[autocomplete="off"]')); // Get all the input fields with auto turned off in an array
  elements = elements.concat(Array.prototype.slice.call(document.querySelectorAll('form[autocomplete="off"]'))); // concatinate the array with an array containing all the forms with auto turned off
  for (var i = 0; i < elements.length; i += 1) {
    elements[i].autocomplete="on";
  };
};

fixElements();
