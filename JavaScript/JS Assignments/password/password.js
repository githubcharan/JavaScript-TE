function toggle() {
    let temp = document.getElementById("typepass");
    let icon = document.getElementById("icon")
    if (temp.type === "password") {
        temp.type = "text";
        icon.style.color = "grey"
        icon.style.textShadow
    } else {
        temp.type = "password";
        icon.style.color = "black"
    }

}