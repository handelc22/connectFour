var gameboard = document.querySelector('#gameboard');
console.log(gameboard);
gameboard.addEventListener('click', (e => {
  console.log('clicked!', e.target);
}))