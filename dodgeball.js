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

// call addPerson upon form submit
document.getElementById('new-entries').onsubmit = function addPerson(e) {
  // prevent form refresh
  e.preventDefault();
  // initializing newPerson object to fill with values inputted by user
  const newPerson = {
    name: null,
    id: arrOfPeople[arrOfPeople.length - 1].id + 1,
    age: null,
    skillSet: null,
    placeBorn: null
  };
  let submitMessage = document.getElementById('submit-message');
  // initializing index to increment to loop through array of form input values
  let i = 0;
  for (key in newPerson) {
    const form = document.getElementById('new-entries');
    if (!newPerson[key]) {
      newPerson[key] = form.querySelectorAll('.input-value')[i].value;
      i++;
    }
  }

  if (!Object.values(newPerson).includes("")) {
    // newly created newPerson object pushed to arrOfPeople, can now be rendered when listOfPeopleChoices is called
    arrOfPeople.push(newPerson);
    console.log('people', arrOfPeople);
    submitMessage.innerText = "Your person has been registered!";
    submitMessage.style.cssText = 'color: #4BB543; border-color: #4BB543;';
    submitMessage.classList.toggle('hidden');
    setTimeout(function() {
      submitMessage.classList.toggle('hidden');
    }, 2000);
  } else {
    submitMessage.style.cssText = 'color: red; border-color: red';
    submitMessage.innerText = "Invalid input! Please enter something for all values.";
    submitMessage.classList.toggle('hidden');
    setTimeout(function() {
      submitMessage.classList.toggle('hidden');
    }, 2000);
    console.log(newPerson[key]);
    console.log('false');
  }
}

class DodgeBallPlayer {
  constructor(name, skillSet, id, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.name = name,
    this.skillSet = skillSet,
    this.id = id,
    this.canThrowBall = canThrowBall,
    this.canDodgeBall = canDodgeBall,
    this.hasPaid = hasPaid,
    this.isHealthy = isHealthy,
    this.yearsExperience = yearsExperience
  }
}

class BlueTeammate extends DodgeBallPlayer {
  constructor(name, skillSet, id, mascot, color) {
    super(name, skillSet, id);
    this.mascot = mascot,
    this.color = color
  }
}

class RedTeammate extends DodgeBallPlayer {
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
    peopleBtn.innerText = 'List People';
  } else {
    peopleBtn.innerText = 'Hide People';
    // create people items and append to listElement
    arrOfPeople.map(person => {
      // player element for each player
      const li = document.createElement('li');
      // 'make player' button
      const button = document.createElement('button');
      // can throw
      const inputExpThrow = document.createElement('input')
      inputExpThrow.setAttribute('type', 'checkbox');
      li.appendChild(inputExpThrow);
      li.insertBefore(document.createTextNode('can throw?'), inputExpThrow);
      // can dodge
      const inputExpDodge = document.createElement('input');
      inputExpDodge.setAttribute('type', 'checkbox');
      li.appendChild(inputExpDodge);
      li.insertBefore(document.createTextNode('can dodge?'), inputExpDodge);
      // has paid
      const inputPaid = document.createElement('input');
      inputPaid.setAttribute('type', 'checkbox');
      li.appendChild(inputPaid);
      li.insertBefore(document.createTextNode('has paid?'), inputPaid);
      // is healthy
      const inputHealthy = document.createElement('input');
      inputHealthy.setAttribute('type', 'checkbox');
      li.appendChild(inputHealthy);
      li.insertBefore(document.createTextNode('is healthy?'), inputHealthy);
      // years experience
      const inputYears = document.createElement('input');
      inputYears.setAttribute('type', 'checkbox');
      li.appendChild(inputYears);
      li.insertBefore(document.createTextNode('years of experience: '), inputYears);

      button.innerHTML = 'Make Player';
      button.addEventListener('click', () => {
          makePlayer(person.id);
        }
      );

      li.appendChild(button);
      li.appendChild(document.createTextNode(`name: ${person.name}
      skill: ${person.skillSet}`));
      li.setAttribute('id', person.id);
      li.setAttribute('class', 'person')
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
  const createdPlayer = new DodgeBallPlayer(newPlayer.name, newPlayer.skillSet, newPlayer.id);
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