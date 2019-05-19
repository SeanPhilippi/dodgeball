const arrOfPeople = [
  {
    id: 2,
    name: 'Charles Young',
    age: 55,
    skillSet: 'welding',
    placeBorn: 'Omaha, Nebraska'
  },
  {
    id: 3,
    name: 'Judy Twilight',
    age: 35,
    skillSet: 'fishing',
    placeBorn: 'Louisville, Kentucky'
  },
  {
    id: 4,
    name: 'Cynthia Doolittle',
    age: 20,
    skillSet: 'tic tac toe',
    placeBorn: 'Pawnee, Texas'
  },
  {
    id: 5,
    name: 'John Willouby',
    age: 28,
    skillSet: 'pipe fitting',
    placeBorn: 'New York, New York'
  },
  {
    id: 6,
    name: 'Stan Honest',
    age: 20,
    skillSet: 'boom-a-rang throwing',
    placeBorn: 'Perth, Australia'
  },
  {
    id: 7,
    name: 'Mia Watu',
    age: 17,
    skillSet: 'acrobatics',
    placeBorn: 'Los Angeles, California'
  },
  {
    id: 8,
    name: 'Walter Cole',
    age: 32,
    skillSet: 'jump rope',
    placeBorn: 'New Orleans, Louisiana'
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
  }
}

class DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this
  }
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
  const peopleBtn = document.getElementById('button');

  if (listElement.hasChildNodes()) {
    deleteChildren();
    peopleBtn.innerText = 'List People'
  } else {
    peopleBtn.innerText = 'Hide People';
    // create people items and append to listElement
    arrOfPeople.map(person => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.innerHTML = 'Make Player';
      button.addEventListener('click', () => {
          makePlayer(person.id);
        }
      );
      li.appendChild(button);
      li.appendChild(document.createTextNode(`${person.name} - ${person.skillSet}`));
      li.setAttribute('id', person.id);
      listElement.append(li);
    });
      // remove people items that have their button clicked.
    listElement.addEventListener('click', e => {
      if (e.target.nodeName === 'BUTTON') {
        // targeting parent of button clicked (li element)
        e.target.parentNode.remove();
        console.log('e', e, 'e.target', e.target);
      }
    });
  }
};

const deleteChildren = () => {
  const peopleList = document.getElementById("people");
  while (peopleList.hasChildNodes()) {
    peopleList.removeChild(peopleList.firstChild);
  };
  document.getElementById('button').innerText = 'List People'
}

const makePlayer = id => {
  const playerList = document.getElementById('players');
  const newPlayer = arrOfPeople.find(player => player.id === id);
  const createdPlayer = new Player(newPlayer.name, newPlayer.skillSet, newPlayer.id);
  console.log('createdPlayer', createdPlayer)
  listOfPlayers.push(createdPlayer);
  const li = document.createElement('li');
  const blueButton = document.createElement('button');
  blueButton.innerHTML = 'Make Blue Teammate';
  const redButton = document.createElement('button');
  redButton.innerHTML = 'Make Red Teammate';
  blueButton.addEventListener('click', (e) => makeBlueTeammate(newPlayer.id, e));
  redButton.addEventListener('click', (e) => makeRedTeammate(newPlayer.id, e));
  li.appendChild(document.createTextNode(`name: ${newPlayer.name} | id: ${newPlayer.id}`))
  li.appendChild(blueButton);
  li.appendChild(redButton);
  playerList.append(li);

};

const makeBlueTeammate = (id, e) => {
  const blueList = document.getElementById('blue');
  const li = document.createElement('li');
  const newTeammate = listOfPlayers.find(player => player.id === id);
  const newBlue = new BlueTeammate(newTeammate.name, newTeammate.skillSet, newTeammate.id, 'balls', 'blue');
  li.appendChild(document.createTextNode(`${newBlue.name} - ${newBlue.color} - ${newBlue.mascot}`));
  blueList.append(li);
  console.log('this', this);
  e.target.parentNode.remove();
}

const makeRedTeammate = (id, e) => {
  const redList = document.getElementById('red');
  const li = document.createElement('li');
  const newTeammate = listOfPlayers.find(player => player.id === id);
  const newRed = new RedTeammate(newTeammate.name, newTeammate.skillSet, newTeammate.id, 'lobster', 'red')
  li.appendChild(document.createTextNode(`${newRed.name} - ${newRed.color} - ${newRed.mascot}`));
  redList.append(li);
  e.target.parentNode.remove();
}

const createPerson = () => {

}