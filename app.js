
let inventory = {
  cheese: 0,
  pickaxe: 0,
  miner: 0,
  drill: 0,
  spaceShip: 0,
}

let stats = {
  clicks: 0,
  cheesePerClick: 1,
  cheesePerSecond: 0
}

let clickUpgrades = {
  pickaxe: {
    price: 100,
    multiplier: 1
  },
  drill: {
    price: 5000,
    multiplier: 75,
  }
}
let idleUpgrades = {
  miner: {
    price: 500,
    multiplier: 5
  },
  spaceShip: {
    price: 1200,
    multiplier: 20,
  }
}





function mine() {
  stats.clicks++
  inventory.cheese++
  drawstats()
  drawinventory()

}
// each time mine is called draw inventory should update with cheese count
// each time an upgrade is purchased increment that in inventory
function drawinventory() {
  let template = ""
  template += `
  <h1>Inventory</h1>
  <h2>Cheese: ${inventory.cheese} </h2>
  <h5>Pickaxe's: ${inventory.pickaxe}</h5>
  <h5>Drill's: ${inventory.drill}</h5>
  <h5>Miner's: ${inventory.miner}</h5>
  <h5>Miner's: ${inventory.spaceShip}</h5>
  `
  document.getElementById("inventory").innerHTML = template
}


// each time an upgrade is purchased update the counter
function drawstats() {
  let template = ""
  template += `
    <h1>Stats</h1>
    <h5>X's Clicked: ${stats.clicks} </h5>
    <h5>Cheese per Click: ${stats.cheesePerClick}</h5>
    <h5>Idle Cheese per Second: ${stats.cheesePerSecond}</h5>
  `
  document.getElementById("stats").innerHTML = template
}
// each time an upgrade is purchased, reflect price increase (probably write a new function and call it here)
function drawClickUpgrades() {
  let template = ""
  for (let prop in clickUpgrades) {
    let upgrade = clickUpgrades[prop]
    template += `
  <div class="col-1 bg-white">
    <button class=""><i class="fa fa-spoon"></i></button> - ${upgrade.price}
      </div>
  `
  }
  document.getElementById("click-upgrades").innerHTML = template
}

function drawIdleUpgrades() {
  let template = ""
  for (let prop in idleUpgrades) {
    let upgrade = idleUpgrades[prop]
    template += `
  <div class="col-1 bg-white  ">
        <button class=""><i class="fa fa-spoon"></i></button> -  ${upgrade.price}
      </div>
  `
  }
  document.getElementById("idle-upgrade").innerHTML = template
}

drawinventory()
drawstats()
drawClickUpgrades()
drawIdleUpgrades()