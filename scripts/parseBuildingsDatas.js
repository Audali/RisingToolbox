const buildingFull = require('./building-full.json')
const fs = require('fs');

// console.log(buildingFull)
var fns = {
    l2: [0, 25, 50, 75, 100], // linear
    l0: [0, 25, 50, 75, 100], // same linear

    f2: [15, 30, 45, 65, 100], // derived using Experiment Station
    e2: [20, 32, 52, 75, 100], // derived from Swarm of Self-Drilling Machines
    s2: [33, 60, 80, 90, 100],
    g2: [12.5, 25, 40, 65, 100],
}

var legacyStellarBuildingList = []
var legacySterileBuildingList = []
var legacyHabitableBuildingList = []

legacyStellarBuildingList.push({ name: "industrial", buildings: [] })
legacyStellarBuildingList.push({ name: "finance", buildings: [] })
legacyStellarBuildingList.push({ name: "defense", buildings: [] })
legacyStellarBuildingList.push({ name: "life", buildings: [] })
legacyStellarBuildingList.push({ name: "shipyard", buildings: [] })

legacyHabitableBuildingList.push({ name: "life", buildings: [] })
legacyHabitableBuildingList.push({ name: "industrial", buildings: [] })
legacyHabitableBuildingList.push({ name: "output", buildings: [] })
legacyHabitableBuildingList.push({ name: "culture", buildings: [] })
legacyHabitableBuildingList.push({ name: "defense", buildings: [] })

legacySterileBuildingList.push({ name: "industrial", buildings: [] })
legacySterileBuildingList.push({ name: "life", buildings: [] })
legacySterileBuildingList.push({ name: "culture", buildings: [] })
legacySterileBuildingList.push({ name: "defense", buildings: [] })


buildingFull.forEach((building) => {
    if (building.type !== ":infrastructure") {
        // console.log(building.key)
        newBuilding = {}
        newBuilding.key = building.key.substring(1)
        newBuilding.limitation = building.limitation.substring(1)
        newBuilding.workforce = parseInt(building.workforce)
        bonusList = []
        newBuilding.levels = []
        for (let bonus = 1; bonus < 5; bonus++) {
            if (building["b" + bonus + " input"] !== "") {
                bonusList.push({
                    from: building["b" + bonus + " input"].substring(1),
                    to: building["b" + bonus + " output"].substring(1)
                })
            } else {
                break
            }
        }
        for (let level = 1; level < 6; level++) {
            bonusL = []
            for (var bon in bonusList) {
                let value
                let bonusNumber = parseInt(bon) + 1
                if (level === 1) {
                    value = building["b" + bonusNumber + " min"]
                }
                else {
                    // if (building["b" + bonusNumber + " f()"] !== "") {
                    if (building["b" + bonusNumber + " f()"] === "l2" || building["b" + bonusNumber + " f()"] === "l0")
                        value = building["b" + bonusNumber + " min"] + (building["b" + bonusNumber + " max"] - building["b" + bonusNumber + " min"]) * fns[building["b" + bonusNumber + " f()"]][level - 1] / 100
                    else
                        value = building["b" + bonusNumber + " max"] * fns[building["b" + bonusNumber + " f()"]][level - 1] / 100

                    value = parseFloat(value.toFixed(building["b" + bonusNumber + " f()"].slice(-1)))

                }
                bonusL.push({ from: bonusList[bon].from, to: bonusList[bon].to, value: value })
            }
            newBuilding.levels.push({ bonus: bonusL, level: level })
        }

        let correctName = building.display.substring(1)
        if (building.biome === ":open") {
            for (var display in legacyHabitableBuildingList) {
                if (correctName === legacyHabitableBuildingList[display].name)
                    legacyHabitableBuildingList[display].buildings.push(newBuilding)
            }
        } else if (building.biome === ":orbital") {
            for (var display in legacyStellarBuildingList) {
                if (correctName === legacyStellarBuildingList[display].name)
                    legacyStellarBuildingList[display].buildings.push(newBuilding)
            }
        } else {
            for (var display in legacySterileBuildingList) {
                if (correctName === legacySterileBuildingList[display].name)
                    legacySterileBuildingList[display].buildings.push(newBuilding)
            }
        }
    }
})

const habitable = JSON.stringify(legacyHabitableBuildingList)
const sterile = JSON.stringify(legacySterileBuildingList)
const stellar = JSON.stringify(legacyStellarBuildingList)
fs.writeFile("../src/datas/habitableBuilding.json", habitable, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})
fs.writeFile("../src/datas/stellarBuilding.json", stellar, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})
fs.writeFile("../src/datas/sterileBuilding.json", sterile, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})