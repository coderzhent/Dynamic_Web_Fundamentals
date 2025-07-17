const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
    attacked() {
        if (this.health >= 20) {
            this.health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

function updateCard(charac) {
    char_class.innerText = charac.class;
    char_level.innerText = charac.level;
    char_health.innerText = charac.health;
    char_name.innerText = charac.name;
    char_img.src = charac.image;
    char_img.alt = charac.name;
}

function attack() {
    character.attacked();
    updateCard(character);
}

function levelup() {
    character.levelUp();
    updateCard(character);
}

const char_class = document.querySelector("#class");
const char_level = document.querySelector("#level");
const char_health = document.querySelector("#health");
const char_name = document.querySelector(".name");
const char_img = document.querySelector(".image");

document.querySelector("#attacked").addEventListener("click", attack);
document.querySelector("#levelup").addEventListener("click", levelup);

updateCard(character);