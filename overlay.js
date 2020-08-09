function createAnnoyance(){
    console.log("Procrastination detected");
    var img = new Image();
    // overlay section
    var div = document.createElement("div");
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "fixed";
    div.style.display = "block";
    div.style.top = "0"; 
    div.style.left = "0";
    div.style.right = "0";
    div.style.bottom = "0";
    div.style.background = "rgba(0,0,0,0.5)";
    div.style.zIndex = "500";
    div.style.cursor = "pointer";
    // image section, at some point change this to another image
    img.src = './assets/splash-logo.svg';
    div.innerHTML = `
    <div class="mainContainer">
        <div class="iconContainer">
            <img class="iconImage" src='./assets/splash-logo.svg'></img>
        </div>
        <div class="descriptionContainer">
        <div class='titleContainer'>
            <h1 class="titleText txtwav vibe">Senpai noticed!</h1>
        </div>
        <div class="copyContainer">
            <p>Senpai has protected you from this distraction.<br>You should be studying!</p>
        </div>
        <p class="countdown" id='potato'>Closing this tab in 3..</p>
    </div>
    </div> `;
    document.body.appendChild(div);
    // sound section, currently not in this file
    // annoyingSound();
}