function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000);

const cardTypes = ['♠', '♥', '♦', '♣'];
const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function dealCards() {
  const player1Cards = [];
  const player2Cards = [];
  
  for (let i = 0; i < 6; i++) {
    const randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
    player1Cards.push(`${randomValue}${randomType}`);
    
    const randomType2 = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const randomValue2 = cardValues[Math.floor(Math.random() * cardValues.length)];
    player2Cards.push(`${randomValue2}${randomType2}`);
  }
  
  document.getElementById('player1-cards').innerHTML = player1Cards.join(' ');
  document.getElementById('player2-cards').innerHTML = player2Cards.join(' ');
}