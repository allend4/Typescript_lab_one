var listany = [1, true, "free"];
for (var i = 0; i < listany.length; i++) {
    console.log("Before: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
listany[1] = 100;
for (var i = 0; i < listany.length; i++) {
    console.log("After: Entry " + (i + 1) + " is: " + listany[i] + ".");
}
