
var dice;

const roll = () => {
dice = Math.ceil(Math.random() * 6);
var attr = `img/dice${dice}.png`;
document.getElementById("dice").setAttribute('src',attr);
console.log(dice);
};