<template>
  <div class="card">
    <section class="container">
      <div class="leftDiv">
        <table style="display: inline-block; float: left">
          <thead>
            <tr>
              <th colspan="1">
                {{ system.workforce }}/{{ system.habitation }}
              </th>
              <th colspan="1">
                <img
                  :src="require('@/assets/population.svg')"
                  style="background-color: white; border-radius: 100%"
                />
              </th>
              <th colspan="8">{{ $t("system") }}:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <button class="active_button" @click="addPlanet('habitable')">
                  <img
                    :src="require('@/assets/system/habitable.svg')"
                    alt="habitable"
                  />
                </button>
              </td>
              <td>
                <button class="active_button" @click="addPlanet('sterile')">
                  <img
                    :src="require('@/assets/system/sterile.svg')"
                    alt="sterile"
                  />
                </button>
              </td>
              <td>
                <button class="active_button" @click="addPlanet('moon')">
                  <img :src="require('@/assets/system/moon.svg')" alt="moon" />
                </button>
              </td>
              <td>
                <button class="active_button" @click="addPlanet('asteroid')">
                  <img
                    :src="require('@/assets/system/asteroid.svg')"
                    alt="asteroid"
                  />
                </button>
              </td>
            </tr>
            <tr v-for="planet in system.planets" :key="planet.planetId">
              <div style="position: relative; width: 100%">
                <img
                  :src="
                    require('@/assets/system/' + planet.planetType + '.svg')
                  "
                  :alt="planet.planetType"
                />
                <button
                  style="position: absolute; top: 60%; left: 60%"
                  @click="deletePlanet(planet.planetId)"
                >
                  x
                </button>
              </div>
              <td v-if="planet.buildings.length === 0">Empty</td>
              <td
                v-else
                v-for="(building, index) in planet.buildings"
                :key="index"
              >
                <button
                  class="active_button"
                  :ref="'slot' + planet.planetId + '_' + index"
                  @click="selectTile(planet.planetId, index, planet.planetType)"
                >
                  <img
                    :src="
                      require('@/assets/building/' + building.image + '.svg')
                    "
                    :alt="building.image"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rightDiv">
        <table class="tableLeveling">
          <thead>
            <tr>
              <th colspan="4">{{ $t("buildings") }}:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="buildLine in buildListToDisplay" :key="buildLine.idLine">
              <td v-for="building in buildLine.buildings" :key="building.index">
                <button
                  class="active_button"
                  :ref="'production' + building"
                  @click="setBuilding(building)"
                >
                  <img
                    :src="
                      require('@/assets/building/' + building.image + '.svg')
                    "
                    :alt="building.image"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<script>
const habitableBuildingList = require("../datas/habitableBuilding.js");
const sterileBuildingList = require("../datas/sterileBuilding.js");
const stellarBuildingList = require("../datas/stellarBuilding.js");
export default {
  name: "Planner",
  data() {
    return {
      selectedTile: [0, 1, "habitable"],
      emptyBuilding: { name: "Empty", image: "empty", workforce: 0 },
      buildListToDisplay: [],
      system: {
        workforce: 4,
        habitation: 20,
        planets: [
          {
            planetId: 0,
            planetType: "habitable",
            buildings: [],
          },
          {
            planetId: 1,
            planetType: "sterile",
            buildings: [],
          },
          {
            planetId: 2,
            planetType: "moon",
            buildings: [],
          },
        ],
      },
    };
  },
  methods: {
    // Add building slots to the default system
    setUpSystem() {
      this.system.planets[0].buildings.push({
        name: 0,
        image: "infra_dome",
        workforce: 2,
        levels: [{ bonus: [{ to: "sys_habitation", value: 10 }], level: 1 }],
      });
      for (let i = 1; i < 8; i++) {
        this.system.planets[0].buildings.push(this.emptyBuilding);
      }
      this.system.planets[1].buildings.push({
        name: 0,
        image: "infra_dome",
        workforce: 2,
        levels: [{ bonus: [{ to: "sys_habitation", value: 10 }], level: 1 }],
      });
      for (let i = 1; i < 8; i++) {
        this.system.planets[1].buildings.push(this.emptyBuilding);
      }
      for (let i = 0; i < 3; i++) {
        this.system.planets[2].buildings.push(this.emptyBuilding);
      }
    },
    // Add planet to the planet list
    addPlanet(newPlanetType) {
      let tileNumber;
      let newPlanetId = this.system.planets.length;
      let emptyBuildings = [];
      if (newPlanetType === "moon" || newPlanetType === "asteroid")
        tileNumber = 3;
      else {
        tileNumber = 7;
        emptyBuildings.push({
          name: 0,
          image: "infra_dome",
          workforce: 2,
          levels: [{ bonus: [{ to: "sys_habitation", value: 10 }], level: 1 }],
        });
        this.system.workforce += 2;
        this.system.habitation += 10;
      }
      this.system.planets.push({
        planetId: newPlanetId,
        planetType: newPlanetType,
        buildings: emptyBuildings,
      });
      for (let i = 0; i < tileNumber; i++) {
        this.system.planets[newPlanetId].buildings.push(this.emptyBuilding);
      }
    },
    // Delete planet and change planetId of other planets
    deletePlanet(delPlanetId) {
      // Unselect the current tile if it's in the deleted planet
      if (this.selectedTile[0] === delPlanetId) {
        this.replaceSelectedTileButton(
          "slot" + this.selectedTile[0] + "_" + this.selectedTile[1]
        );
        this.selectedTile[0] = -1;
      }
      for (var i = this.system.planets.length - 1; i >= 0; --i) {
        if (this.system.planets[i].planetId == delPlanetId) {
          this.system.planets[i].buildings.forEach((build) => {
            this.system.workforce -= build.workforce;
            if (build.levels !== undefined) {
              build.levels[0].bonus.forEach((bon) => {
                if (bon.to === "sys_habitation") {
                  this.system.habitation -= bon.value;
                }
              });
            }
          });
          this.system.planets.splice(i, 1);
          for (var j = i; j < this.system.planets.length; j++) {
            this.system.planets[j].planetId--;
          }
          break;
        }
      }
    },
    // Set the building on the currently selected tile
    setBuilding(building) {
      if (this.selectedTile[0] !== -1) {
        let currBuilding =
          this.system.planets[this.selectedTile[0]].buildings[
            this.selectedTile[1]
          ];
        if (currBuilding.name !== "Empty") {
          if (currBuilding.levels !== undefined) {
            currBuilding.levels[0].bonus.forEach((bon) => {
              if (bon.to === "sys_habitation") {
                this.system.habitation -= bon.value;
              }
            });
          }
        }
        this.system.workforce -= currBuilding.workforce;
        this.system.planets[this.selectedTile[0]].buildings[
          this.selectedTile[1]
        ] = building;
        this.system.workforce += building.workforce;
        if (building.levels !== undefined) {
          building.levels[0].bonus.forEach((bon) => {
            if (bon.to === "sys_habitation") {
              this.system.habitation += bon.value;
            }
          });
        }
      }
    },
    // Select a tile and display corresponding building list
    selectTile(planetId, tileId, newPlanetType) {
      if (
        tileId === 0 &&
        (newPlanetType === "habitable" || newPlanetType === "sterile")
      ) {
        return;
      } else {
        // If tile is not the first tile of an habitable or sterile planet
        if (newPlanetType !== this.selectedTile[2]) {
          if (newPlanetType === "moon" || newPlanetType === "asteroid") {
            this.buildListToDisplay = stellarBuildingList;
          } else if (newPlanetType === "habitable") {
            this.buildListToDisplay = habitableBuildingList;
          } else if (newPlanetType === "sterile") {
            this.buildListToDisplay = sterileBuildingList;
          }
        }
        if (this.selectedTile[0] !== -1) {
          this.replaceSelectedTileButton(
            "slot" + this.selectedTile[0] + "_" + this.selectedTile[1]
          );
        }
        this.selectedTile = [planetId, tileId, newPlanetType];
        this.setSelectedTileButton("slot" + planetId + "_" + tileId);
      }
    },
    // Replace active button class to inactive button class on given ref
    replaceActiveButton(refToSwap) {
      this.$refs[refToSwap].classList.replace(
        "active_button",
        "inactive_button"
      );
    },
    // Replace inactive button class to active button class on given ref
    replaceInactiveButton(refToSwap) {
      this.$refs[refToSwap].classList.replace(
        "inactive_button",
        "active_button"
      );
    },
    // Set selected tile
    setSelectedTileButton(refToSwap) {
      this.$refs[refToSwap][0].classList.replace(
        "active_button",
        "selectedTile"
      );
    },
    // Replace selected tile
    replaceSelectedTileButton(refToSwap) {
      this.$refs[refToSwap][0].classList.replace(
        "selectedTile",
        "active_button"
      );
    },
  },
  async mounted() {
    this.buildListToDisplay = habitableBuildingList;
    await this.setUpSystem();
    this.setSelectedTileButton("slot" + 0 + "_" + 1);
  },
};
</script>
<style scoped>
.inputProd {
  width: 3.5rem;
}
.active_button {
  background-color: #04a5db;
}
.active_button:hover {
  background-color: #0482ac;
}
.inactive_button {
  background-color: #868686;
}
.inactive_button:hover {
  background-color: #52788b;
}
.selectedTile {
  background-color: #8e60bf;
  border: solid 2px #8e60bf;
}
table,
th,
td {
  border: 1px solid black;
}
.container {
  width: 100%;
  margin: auto;
  padding: 10px;
}

.leftDiv {
  width: 50%;
  float: left;
}

.rightDiv {
  display: inline-block;
}
img {
  width: 2.3rem;
  height: 2.3rem;
}
</style>