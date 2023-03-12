function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    document.getElementById("tooltip-profile-picture").style.left = x + "px";
    document.getElementById("tooltip-profile-picture").style.top = y + "px";
}