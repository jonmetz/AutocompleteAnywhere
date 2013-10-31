function checkAndReplace(ele) {
    var autocomplete = ele.autocomplete;
    if (autocomplete !== "" && autocomplete != "on")
        ele.autocomplete = "on";
}


var checkElements = function () {
    alert(1);
    var forms = document.forms;
    var i;
    alert(1);
    for (i=0; i<=forms.length;i++) {
	var form = forms[i];
	checkAndReplace(form);
	checkAndReplace(form.password);
	checkAndReplace(form.username);
    }
};

checkElements();
exports.checkElements = checkElements;
