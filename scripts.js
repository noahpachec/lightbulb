function main() {
    // light click
    const mainBulb = document.querySelector(".mainbulb");
    let isOn = false;
    mainBulb.addEventListener("click", () => {
        if (!isOn) {
            document.documentElement.style.setProperty("--bulb-light", "#000000ff");
            document.documentElement.style.setProperty("--coil-color", "#413c1bff");
            document.documentElement.style.setProperty("--bulb-screw", "#221e1cff");
            document.documentElement.style.setProperty("--line-color", "#13100fff");
            document.documentElement.style.setProperty("--glare", "#b9b599ff");
            document.documentElement.style.setProperty("--glow", "#000000ff");
            console.log("sniff")
        }
        else {
            document.documentElement.style.setProperty("--bulb-light", "#ffde13")
            document.documentElement.style.setProperty("--coil-color", "#ffea65");
            document.documentElement.style.setProperty("--bulb-screw", "#5B4E49");
            document.documentElement.style.setProperty("--line-color", "#3d3431");
            document.documentElement.style.setProperty("--glare", "#fdf7ce");
            document.documentElement.style.setProperty("--glow", "#ffde13");
            
        }
        isOn = !isOn
    })
}

main();