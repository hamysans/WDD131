const character = {
    name: "Character Cards",
    cardInfo: [
        {name: "Snortleblat", 
            class: "Swamp Beast Diplomat", 
            level: 1, 
            health: 100, 
            }
    ],
    updateHealth: function(health) {
        // sectionNum represents the section the user wants to add student to
        //find that section in our array, add a student to it
        if (this.cardInfo[0].health >= 1) {
            this.cardInfo[0].health -= 20;
            renderSections(this.cardInfo);
        }

        else {
            alert("Character Died")
        }
    },
    updateLevel: function(level) {
        this.cardInfo[0].level++;
        renderSections(this.cardInfo)
    }
}

function renderSections(character) {
    const html = character.map(sectionTemplate);
    document.querySelector(".card").innerHTML = html.join("");
}

renderSections(character.cardInfo);

function sectionTemplate(cardInfo) {
    return `<img src="snortleblat.webp" class="image">
    <h1 class="name">${cardInfo.name}</h1>
    <div class="stats">
        <p>Class: ${cardInfo.class}</p>
        <p id="level">Level: ${cardInfo.level}</p>
        <p id="health">Health: ${cardInfo.health}</p>
    </div>
    <div id="center_buttons">
        <button id="attacked">Attacked</button>
        <button id="levelUp">Level Up</button>
    </div>`
}

document.querySelector(".card").addEventListener("click", (event) => {
    if (event.target.id === "attacked") {
        character.updateHealth();
    }

    if (event.target.id === "levelUp") {
        character.updateLevel();
    }
});