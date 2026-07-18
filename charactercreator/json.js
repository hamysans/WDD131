const characters = [
  {
    name: "Kusan",
    background: "Ruined",
    race: "Kalashtar",
    class: "Cleric",
    level: "5"
  },
  {
    name: "Kanade",
    background: "Musician",
    race: "Aasimar",
    class: "Bard",
    level: "5"
  },
  {
    name: "Renalessa",
    background: "Faction Agent",
    race: "Astral Elf",
    class: "Wizard",
    level: "3"
  },
  {
    name: "Adira",
    background: "Acolyte",
    race: "Wood Elf",
    class: "Monk",
    level: "2"
  },
  {
    name: "Dawn",
    background: "Fey Lost",
    race: "Harengon",
    class: "Bard",
    level: "6"
  },
  {
    name: "Nor",
    background: "Crafter",
    race: "Goliath",
    class: "Artificer",
    level: "14"
  },
  {
    name: "Kolokolo Kolokolo",
    background: "Soldier",
    race: "Tiefling",
    class: "Fighter",
    level: "4"
  },
  {
    name: "Birden",
    background: "Criminal",
    race: "Halfling",
    class: "Sorcerer",
    level: "1"
  }
];



let characterContainer = document.getElementById("premade-character-box")
let searchButton = document.getElementById("search-button")
let input = document.querySelector('#search-box');
let classSelection = document.querySelector('#class');
let levelSelection = document.querySelector('#level');
let subclassSection = document.querySelector('#subclass-info')
let downloadButton = document.querySelector('#downloadButton')



function search() {

    let characterQuery = input.value;

    let filteredCharacters = characters.filter(function(character){
        return ( 
            character.name.toLowerCase().includes(characterQuery.toLowerCase()) ||
            character.class.toLowerCase().includes(characterQuery.toLowerCase()) || 
            character.race.toLowerCase().includes(characterQuery.toLowerCase())
        );
    })

    // clear out any previous content
    characterContainer.innerHTML = '';
    // output onto screen
    filteredCharacters.forEach(function(character){
      renderCharacters(character);
    })
}

function characterTemplate(character) {
    return `<div class="character">
                <p>Name: ${character.name}</p>
                <p>Class/Level: ${character.class} ${character.level}</p>
                <p>Race: ${character.race}</p>
                <p>Background: ${character.background}</p>
            </div>`
}

function renderCharacters(character) {
    let html = characterTemplate(character);
    characterContainer.innerHTML += html
}

function update() {
    let characterClass = classSelection.value;
    let characterLevel = levelSelection.value;

    if(characterClass === "fighter" && characterLevel >= 3) {
        subclassSection.hidden = false;
        subclassSection.innerHTML = `<label for="subclass">Martial Archetype</label>
                <select name="subclass" id="subclass">
                    <option value="arcaneArcher">Arcane Archer</option>
                    <option value="battleMaster">Battle Master</option>
                    <option value="champion">Champion</option>
                </select>`
    }
    else if(characterClass === "wizard" && characterLevel >= 2) {
        subclassSection.hidden = false;
        subclassSection.innerHTML = `<label for="subclass">School of Magic</label>
                <select name="subclass" id="subclass">
                    <option value="abjuration">Abjuration</option>
                    <option value="conjuration">Conjuration</option>
                    <option value="necromancy">Necromancy</option>
                </select>`
    }
    else if(characterClass === "monk" && characterLevel >= 3) {
        subclassSection.hidden = false;
        subclassSection.innerHTML = `<label for="subclass">Monastic Tradition</label>
                <select name="subclass" id="subclass">
                    <option value="shadow">Way of Shadow</option>
                    <option value="elements">Way of the Four Elements</option>
                    <option value="openHand">Way of The Open Hand</option>
                </select>`
    }
    else if(characterClass === "sorcerer") {
        subclassSection.hidden = false;
        subclassSection.innerHTML = `<label for="subclass">Sorcerous Origin</label>
                <select name="subclass" id="subclass">
                    <option value="draconicBloodline">Draconic Bloodline</option>
                    <option value="lunarSorcery">Lunar Sorcery</option>
                    <option value="wildMagic">Wild Magic</option>
                </select>`
    }
    else {
        subclassSection.hidden = true;
    }
}

function download() {

    console.log("Click")
    let cname = document.getElementById('characterName').value
    let cclass = document.getElementById('class').value
    let clevel = Number(document.getElementById('level').value)
    let crace = document.getElementById('race').value
    let cbackground = document.getElementById('background').value
    let cStr = Number(document.getElementById('strength').value)
    let cDex = Number(document.getElementById('dexterity').value)
    let cCon = Number(document.getElementById('constitution').value)
    let cInt = Number(document.getElementById('intelligence').value)
    let cWis = Number(document.getElementById('wisdom').value)
    let cCha = Number(document.getElementById('charisma').value)

    const character = {
        "name" : cname,
        "level" : clevel,
        "class" : cclass,
        "race" : crace,
        "background" : cbackground,
        "abilityScores" : {
            "str" : cStr,
            "dex" : cDex,
            "con" : cCon,
            "int" : cInt,
            "wis" : cWis,
            "cha" : cCha
        }
    }

    const json = JSON.stringify(character, null, 4);

    const file = new Blob([json], {
        type: "application/json"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = `${character.name}.json`;

    link.click();

    URL.revokeObjectURL(link.href);
}

searchButton.addEventListener('click', search);
classSelection.addEventListener("change", update);
levelSelection.addEventListener("change", update);

document.addEventListener("DOMContentLoaded", search)

downloadButton.addEventListener('click', download)