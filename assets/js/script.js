window.addEventListener("DOMContentLoaded", function () {
    const scenes = [];

    function switchScene(sceneNumber) {
        console.log("switch");
        for (let i = 0; i < scenes.length; i++) {
            scenes[i].style.visibility = (i === sceneNumber) ? "visible" : "hidden";
        }
    }

    function runSidebar() {
        let sceneNumber = 0
        showScene(sceneNumber)
        let timer = setInterval(() => {
            switchSceene(sceneNumber);
        }, 3000);
        sceneNumber++
        if (sceneNumber >= scenes.length) {
            clearInterval(timer);
            sceneNumber = 0;
            return;
        }
    }

});