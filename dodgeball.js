const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(name, skillSet, id){
    this.name = name,
    this.skillSet = skillSet,
    this.id = id
  };

}
class BlueTeammate extends Player {
  constructor(name, skillSet, id, mascot, color) {
    super(name, skillSet, id);
    this.mascot = mascot,
    this.color = color
  }

}
class RedTeammate extends Player {
  constructor(name, skillSet, id, mascot, color) {
    super(name, skillSet, id);
    this.mascot = mascot,
    this.color = color
  }

}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people');
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener('click', function() {
        makePlayer(person.id);
      }
    );
    li.appendChild(button);
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
    listElement.append(li);
  })
}

const makePlayer = id => {
  console.log(`li ${id} was clicked!`);
  let newPlayer = arrOfPeople.find(player => player.id === id);
  let createdPlayer = new Player(newPlayer.name, newPlayer.skillSet, newPlayer.id);
  listOfPlayers.push(createdPlayer);
  const li = document.createElement("li");
  const button = document.createElement("button");
  let blueButton = button.innerHTML = "Make Blue Teammate";
  let redButton = button.innerHTML = "Make Red Teammate";
  blueButton.addEventListener('click', player => makeBlueTeammate(player.id));
  redButton.addEventListener('click', player => makeRedTeammate(player.id));
  li.appendChild(blueButton);
  li.appendChild(redButton);

};

const makeBlueTeammate = () => {
  const blueList = document.getElementById("blue");
  blueList.append()
}

const makeRedTeammate = () => {
  const redList = document.getElementById("red");
  redList.append()
}