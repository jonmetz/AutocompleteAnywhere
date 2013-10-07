var checkAndReplace = function (ele) {
    var autocomplete = ele.autocomplete;
    if (autocomplete !== "" && autocomplete != "on")
	ele.autocomplete = "on";
};

var checkElements = function() {
    var forms = document.forms;
    for (var i = 0; i <= forms.length; i++) {
	var form = forms[i];
	checkAndReplace(form);
	checkAndReplace(form.password);
	checkAndReplace(form.username);
    };
};

checkElements(); 
