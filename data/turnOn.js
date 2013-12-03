var fixElements = function() {
  var elements = Array.prototype.slice.call(document.querySelectorAll('input[autocomplete="off"]'));
  elements = elements.concat(Array.prototype.slice.call(document.querySelectorAll('form[autocomplete="off"]')));
  for (var i = 0; i < elements.length; i += 1) {
    elements[i].autocomplete="on";
  };
};

fixElements();
