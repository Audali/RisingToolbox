<template>
  <div class="card">
    <table class="tableProd">
      <tr>
        <td class="tdProd">
          <img
            src="@/assets/system/defense_light.svg"
            class="iconProd"
            alt="Defense"
          />
        </td>
        <td class="tdProd" style="padding-right: 2rem">
          <span class="inputProd">{{ system.defense }}</span>
        </td>
        <td class="tdProd">
          <img
            src="@/assets/resource/credit_light.svg"
            class="iconProd"
            alt="Credit"
          />
        </td>
        <td class="tdProd">
          <span class="inputProd">{{ system.credit }}</span>
        </td>
        <td class="tdProd">
          <img
            src="@/assets/resource/technology_light.svg"
            class="iconProd"
            alt="Technology"
          />
        </td>
        <td class="tdProd">
          <span class="inputProd">{{ system.technology }}</span>
        </td>
        <td class="tdProd">
          <img
            src="@/assets/resource/ideology_light.svg"
            class="iconProd"
            alt="Ideology"
          />
        </td>
        <td class="tdProd">
          <span class="inputProd">{{ system.ideology }}</span>
        </td>
        <td class="tdProd">
          <img
            src="@/assets/resource/production_light.svg"
            class="iconProd"
            alt="Production"
          />
        </td>
        <td class="tdProd">
          <span class="inputProd">{{ system.production }}</span>
        </td>
      </tr>
    </table>
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
                  :src="require('@/assets/resource/population.svg')"
                  style="background-color: white; border-radius: 100%"
                />
              </th>
              <th colspan="9">{{ $t("system") }}:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2" />
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
            <tr v-if="system.planets.length === 0">
              Empty
            </tr>
            <tr v-else v-for="planet in system.planets" :key="planet.planetId">
              <td>
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
              </td>
              <td style="display: flex">
                <span class="bodyFactors">
                  <input
                    type="number"
                    :ref="'bodyInd' + planet.planetId"
                    v-model="planet.ind"
                    class="bodyInput"
                    min="1"
                    max="5"
                    step="1"
                  />
                  <img
                    src="@/assets/system/stellar_body_industrial_factor.svg"
                    class="bodyImg"
                    alt="bodyInd"
                  />
                </span>
                <span class="bodyFactors">
                  <input
                    type="number"
                    :ref="'bodyTec' + planet.planetId"
                    v-model="planet.tec"
                    class="bodyInput"
                    min="1"
                    max="5"
                    step="1"
                  />
                  <img
                    src="@/assets/system/stellar_body_technological_factor.svg"
                    class="bodyImg"
                    alt="bodyTec"
                  />
                </span>
                <span class="bodyFactors">
                  <input
                    type="number"
                    :ref="'bodyAct' + planet.planetId"
                    v-model="planet.act"
                    class="bodyInput"
                    min="1"
                    max="5"
                    step="1"
                  />
                  <img
                    src="@/assets/system/stellar_body_activity_factor.svg"
                    class="bodyImg"
                    alt="bodyAct"
                  />
                </span>
              </td>
              <td v-for="(building, index) in planet.buildings" :key="index">
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
              <td
                v-if="
                  planet.planetType === 'habitable' ||
                  planet.planetType === 'sterile'
                "
              >
                {{ planet.planetHabitation }}
                <img
                  :src="require('@/assets/system/stellar_body_population.svg')"
                  style="
                    background-color: #8e60bf;
                    width: 1.5rem;
                    height: 1rem;
                    border-radius: 15%;
                  "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="rightDiv">
        <table>
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
        happiness: 35,
        production: 40,
        ideology: 0,
        credit: 20,
        technology: 0,
        mobility: 0,
        defense: 3,
        ci: 0,
        remove_contact: 0,
        radar: 1,
        defFromHabitation: 3,
        planets: [
          {
            planetId: 0,
            planetType: "habitable",
            buildings: [],
            planetHabitation: 0,
            ind: 5,
            tec: 5,
            act: 5,
          },
          {
            planetId: 1,
            planetType: "sterile",
            buildings: [],
            planetHabitation: 0,
            ind: 5,
            tec: 5,
            act: 5,
          },
          {
            planetId: 2,
            planetType: "moon",
            buildings: [],
            planetHabitation: 0,
            ind: 5,
            tec: 5,
            act: 5,
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
        levels: [
          {
            bonus: [{ from: "direct", to: "sys_habitation", value: 10 }],
            level: 1,
          },
        ],
      });
      for (let i = 1; i < 8; i++) {
        this.system.planets[0].buildings.push(this.emptyBuilding);
      }
      this.system.planets[0].planetHabitation = 10;
      this.system.planets[1].planetHabitation = 10;
      this.system.planets[1].buildings.push({
        name: 0,
        image: "infra_dome",
        workforce: 2,
        levels: [
          {
            bonus: [{ from: "direct", to: "sys_habitation", value: 10 }],
            level: 1,
          },
        ],
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
          levels: [
            {
              bonus: [{ from: "direct", to: "sys_habitation", value: 10 }],
              level: 1,
            },
          ],
        });
        // TODO: make a proper dome building
        this.system.workforce += 2;
        this.system.habitation += 10;
        this.system.credit += 10;
        this.system.defense += 1.5;
        this.system.defFromHabitation += 1.5;
      }
      this.system.planets.push({
        planetId: newPlanetId,
        planetType: newPlanetType,
        buildings: emptyBuildings,
        planetHabitation: 10,
        ind: 5,
        tec: 5,
        act: 5,
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
              this.addBuildingValues(build.levels[0].bonus, i, true);
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
    async setBuilding(building) {
      if (this.selectedTile[0] !== -1) {
        let currBuilding =
          this.system.planets[this.selectedTile[0]].buildings[
            this.selectedTile[1]
          ];
        if (currBuilding.name !== "Empty") {
          if (currBuilding.levels !== undefined) {
            await this.addBuildingValues(
              currBuilding.levels[0].bonus,
              this.selectedTile[0],
              true
            );
          }
        }
        this.system.workforce -= currBuilding.workforce;
        this.system.planets[this.selectedTile[0]].buildings[
          this.selectedTile[1]
        ] = building;
        this.system.workforce += building.workforce;
        if (building.levels !== undefined) {
          await this.addBuildingValues(
            building.levels[0].bonus,
            this.selectedTile[0],
            false
          );
        }
      }
    },
    addBuildingValues(buildingBonuses, planetIndex, substractValues) {
      if (substractValues) {
        for (let i = 0; i < buildingBonuses.length; i++) {
          buildingBonuses[i].value *= -1;
        }
      }
      let valueToAssign;
      buildingBonuses.forEach((bonus) => {
        switch (bonus.from) {
          case "direct":
            valueToAssign = bonus.value;
            break;
          case "body_pop":
            valueToAssign =
              bonus.value * this.system.planets[planetIndex].planetHabitation;
            break;
          case "body_ind":
            valueToAssign = bonus.value * this.system.planets[planetIndex].ind;
            break;
          case "body_tec":
            valueToAssign = bonus.value * this.system.planets[planetIndex].tec;
            break;
          case "body_act":
            valueToAssign = bonus.value * this.system.planets[planetIndex].act;
            break;
          case "sys_pop":
            valueToAssign = bonus.value * this.system.habitation;
            break;
        }
        switch (bonus.to) {
          case "sys_habitation":
            this.system.defense -= this.system.defFromHabitation;
            this.system.habitation += valueToAssign;
            this.system.planets[planetIndex].planetHabitation += valueToAssign;
            this.system.defFromHabitation =
              Math.round(this.system.habitation * 0.15 * 10) / 10;
            this.system.defense += this.system.defFromHabitation;
            this.system.credit +=
              valueToAssign * this.system.mobility * 0.1 + valueToAssign;
            this.system.credit = Math.round(this.system.credit * 10) / 10;
            break;
          case "sys_happiness":
            this.system.happiness += valueToAssign;
            break;
          case "sys_production":
            this.system.production += valueToAssign;
            break;
          case "sys_ideology":
            this.system.ideology += valueToAssign;
            break;
          case "sys_credit":
            this.system.credit += valueToAssign;
            break;
          case "sys_technology":
            this.system.technology += valueToAssign;
            break;
          case "sys_mobility":
            this.system.credit += this.system.habitation * valueToAssign * 0.1;
            this.system.credit = Math.round(this.system.credit * 10) / 10;
            this.system.mobility += valueToAssign;
            break;
          case "sys_defense":
            this.system.defense += valueToAssign;
            break;
          case "sys_remove_contact":
            this.system.remove_contact += valueToAssign;
            break;
          case "sys_ci":
            this.system.ci += valueToAssign;
            break;
          case "sys_radar":
            this.system.radar += valueToAssign;
            break;

          default:
            console.log("default");
        }
      });

      if (substractValues) {
        for (let i = 0; i < buildingBonuses.length; i++) {
          buildingBonuses[i].value *= -1;
        }
      }
    },
    // Select a tile and display corresponding building list
    selectTile(planetId, tileId, newPlanetType) {
      if (
        tileId !== 0 ||
        (newPlanetType !== "habitable" && newPlanetType !== "sterile")
      ) {
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
.iconProd {
  width: 2rem;
  vertical-align: bottom;
}
.inputProd {
  width: 5rem;
  height: 1.5rem;
  font-size: medium;
}
.tableProd {
  display: inline-block;
  background-color: rgb(21 23 27);
  padding: 1rem;
  border-radius: 1rem;
}
.tdProd {
  border-style: none;
}
.bodyFactors {
  background-color: #8e60bf;
  border: solid 2px #8e60bf;
  margin: 0.2rem;
  border-radius: 15%;
  width: 3rem;
  height: 1.5rem;
  display: flex;
}
.bodyInput {
  background-color: #8e60bf;
  border-style: none;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  font-size: medium;
  padding-right: 0px;
}
.bodyImg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>