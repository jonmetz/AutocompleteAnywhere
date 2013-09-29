function checkAndReplace(ele) {
    var autocomplete = ele.autocomplete;
    if (autocomplete !== "" && autocomplete != "on")
        ele.autocomplete = "on";
}

var forms = document.forms;
var i;
for (i=0; i<=forms.length;i++) {
    var form = forms[i];
    checkAndReplace(form);
    checkAndReplace(form.password);
    checkAndReplace(form.username);
};
