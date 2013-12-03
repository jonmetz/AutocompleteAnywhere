var checkAndReplace = function (element) {
    var autocomplete = element.autocomplete;
    if (autocomplete !== "" && autocomplete != "on")
	elemen.autocomplete = "on";
};

var checkElements = function() {
    var elements = document.querySelectorAll('input[autocomplete="off"]');
    for (var i = 0; i < elements.length; i += 1) {
	checkAndReplace(elements[i]);
    };
};

checkElements();
