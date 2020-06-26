
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
    // TODO change price back to 100
    price: 10,
    multiplier: 1
  },
  drill: {
    price: 5000,
    multiplier: 75,
  }
}
let idleUpgrades = {
  miner: {
    price: 10,
    multiplier: 5
  },
  spaceShip: {
    price: 1200,
    multiplier: 20,
  }
}

function interval() {
  let seconds = 3
  let inter = setInterval(idle, 1000 * seconds)
}
function idle() {
  inventory.cheese += stats.cheesePerSecond
  drawinventory()
}
function buyMiner() {
  if (inventory.cheese >= idleUpgrades.miner.price) {
    inventory.cheese -= idleUpgrades.miner.price
    stats.cheesePerSecond += idleUpgrades.miner.multiplier
    idleUpgrades.miner.price += Math.floor((idleUpgrades.miner.price *= 0.3))
    inventory.miner++
    drawinventory()
    drawstats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }

}

// when pressed i want it to check if there is enough cheese to buy it
// if there is I want to deduct the cheese by price, add the modifier and increase price
function buyPickaxe() {
  if (inventory.cheese >= clickUpgrades.pickaxe.price) {
    inventory.cheese -= clickUpgrades.pickaxe.price
    stats.cheesePerClick += clickUpgrades.pickaxe.multiplier
    clickUpgrades.pickaxe.price += Math.floor((clickUpgrades.pickaxe.price *= 0.2))
    inventory.pickaxe++
    drawinventory()
    drawstats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }
}
// TODO need buy functions for drill miner and spaceship
function mine() {
  stats.clicks++
  inventory.cheese += stats.cheesePerClick
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
  <h5>Spaceship's: ${inventory.spaceShip}</h5>
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
interval()