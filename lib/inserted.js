function checkAndReplace(elemen) {
    var autocomplete = elemen.autocomplete;
    if (autocomplete !== "" && autocomplete != "on")
        elemen.autocomplete = "on";
}


var checkElements = function () {
    alert(1);
    var forms = document.forms;
    var i;
    alert(forms);
    for (i=0; i<=forms.length;i++) {
	var form = forms[i];
	checkAndReplace(form);
	checkAndReplace(form.password);
	checkAndReplace(form.username);
    }
};

checkElements();
exports.checkElements = checkElements;
