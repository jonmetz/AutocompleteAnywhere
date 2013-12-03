var checkAndReplace = function (element) {
  var autocompleteStatus = element.autocomplete;
  if (autocompleteStatus !== "" && autocompleteStatus != "on")
    element.autocomplete = "on";
};

var checkElements = function() {
  var forms = document.forms;
  for (var i = 0; i <= forms.length; i += 1) {
    var form = forms[i];
    checkAndReplace(form);
    checkAndReplace(form.password);
    checkAndReplace(form.username);
  };
};

checkElements();
