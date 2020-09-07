const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')



var bluePill = "Blue pill"
var redPill = "Red Pill"
var strangeMan = "Morpheous";
var frieza = "Lord frieza";
var goku = "Son Goku";
var agentSmith = "Agent Smith";
var machines = "Machines";
var glock = "Desert Eagle";
var sixOneNine = "Rey Mysterio's mask";
var Tail = "Sayins tail";
var sword = "Trunk's sword";
var senzuBean = "Senzu Bean";


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: strangeMan + ' offers you a blue pill or red pill.',
    options: [
      {
        text: 'Take the red pill',
        setState: { redPill: true },
        nextText: 2
      },
      {
        text: 'Take the blue pill',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text: 'You Wake up in the north of zion, with enemies closing in,' + strangeMan + ' appears, giving you further otions of South, Ease, West or stay',
    options: [
        {
            text: 'West',
            nextText:3,
        },
      
        {
            text: 'East',
            nextText:8,
        },

        {
            text: 'South',
            nextText: 9,
        },
    
      {
        text: 'Stay',
        nextText: 10,
      }
    ]
  },
  {
    id: 3,
    text: 'You yell west, and in an instant standing infornt of you is son Goku. You are in the hyperbolic time chamber. Chose your weapon',
    options: [
      {
        text: glock,
        nextText: 4
      },
      {
        text: sixOneNine,
        nextText: 5
      },
      {
        text: Tail,
        nextText: 6
      },
      {
        text: sword,
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: 'You Select the desert eagle. You load your magazine... Thats weird? it starts to rain.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'You select rey mysterios mask. You hone the power of the legendary 619, ... Thats weird? it starts to rain.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You select the legendary Sayin tail. You transform into the mightiest sayin warrior, ... Thats weird? it starts to rain.',
    options: [
    {
            text: 'Restart',
            nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'You select Trunks legendary sword. You begin to sharpen your blade, ... Thats weird? it starts to rain.',
    options: [
    {
            text: 'Restart',
            nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'You yell East, and in an instant standing infornt of you is' + agentSmith + 'You are in the Matrix. Chose your weapon',
    options: [
        {
            text: glock,
            nextText: 4
          },
          {
            text: sixOneNine,
            nextText: 5
          },
          {
            text: Tail,
            nextText: 6
          },
          {
            text: sword,
            nextText: 7
          }
        ]
  },
  
  {
    id: 9,
    text: 'You yell South, and in an instant standing infornt of you is' + frieza + 'You are on planet vegeta. Chose your weapon',
    options: [
        {
            text: glock,
            nextText: 4
          },
          {
            text: sixOneNine,
            nextText: 5
          },
          {
            text: Tail,
            nextText: 6
          },
          {
            text: sword,
            nextText: 7
          }
        ]
  },
  {
    id: 10,
    text: 'You yell Stay,' + strangeMan + 'gives you a senzu bean, the' + machines + 'are gearing up. Chose your weapon',
    options: [
        {
            text: glock,
            nextText: 4
          },
          {
            text: sixOneNine,
            nextText: 5
          },
          {
            text: Tail,
            nextText: 6
          },
          {
            text: sword,
            nextText: 7
          }
        ]
  },
  {
    id: 11,
    text: '',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()