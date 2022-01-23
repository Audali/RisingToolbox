<template>
  <div class="card">
    <div>
      <input
        type="checkbox"
        id="dominion"
        name="dominion"
        v-model="dominion"
        v-on:change="setDominion()"
      />
      <label for="dominion">{{ $t("dominion") }}</label>
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
            <span class="displayProd">{{ system.defense }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/credit_light.svg"
              class="iconProd"
              alt="Credit"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.credit }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/technology_light.svg"
              class="iconProd"
              alt="Technology"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.technology }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/ideology_light.svg"
              class="iconProd"
              alt="Ideology"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.ideology }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/production_light.svg"
              class="iconProd"
              alt="Production"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.production }}</span>
          </td>
        </tr>
        <tr>
          <td class="tdProd">
            <img
              src="@/assets/resource/happiness_light.svg"
              class="iconProd"
              alt="Happiness"
            />
          </td>
          <td class="tdProd" style="padding-right: 2rem">
            <span class="displayProd">{{ system.happiness }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/mobility_light.svg"
              class="iconProd"
              alt="Mobility"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.mobility }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/counter_intelligence_light.svg"
              class="iconProd"
              alt="CI"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.ci }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/remove_contact_light.svg"
              class="iconProd"
              alt="Remove_contact"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.remove_contact }}</span>
          </td>
          <td class="tdProd">
            <img
              src="@/assets/resource/radar_light.svg"
              class="iconProd"
              alt="Radar"
            />
          </td>
          <td class="tdProd">
            <span class="displayProd">{{ system.radar }}</span>
          </td>
        </tr>
      </table>

      <input
        type="checkbox"
        id="startingSystem"
        name="startingSystem"
        v-model="startingSystem"
        v-on:change="setStartingSystem()"
      />
      <label for="startingSystem">{{ $t("startingSystem") }}</label>
    </div>
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
                <div style="position: relative; width: 100%">
                  <button
                    class="active_button"
                    :ref="'slot' + planet.planetId + '_' + index"
                    @click="
                      selectTile(planet.planetId, index, planet.planetType)
                    "
                    @mouseover="building.hover = true"
                    @mouseleave="building.hover = false"
                  >
                    <img
                      :src="
                        require('@/assets/building/' +
                          building.building.image +
                          '.svg')
                      "
                      :alt="building.building.image"
                    />
                    <button
                      v-show="building.hover"
                      style="position: absolute; top: 60%; left: 60%"
                      @click="deleteBuilding(planet.planetId, index)"
                    >
                      x
                    </button>
                  </button>
                </div>
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
                  @click="
                    setBuilding(building, selectedTile[0], selectedTile[1])
                  "
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
// const habitableBuildingList = require("../datas/flashHabitableBuilding.js");
// const sterileBuildingList = require("../datas/flashSterileBuilding.js");
// const stellarBuildingList = require("../datas/flashStellarBuilding.js");
const habitableBuildingList = require("../datas/habitableBuilding.js");
const sterileBuildingList = require("../datas/sterileBuilding.js");
const stellarBuildingList = require("../datas/stellarBuilding.js");
export default {
  name: "Planner",
  data() {
    return {
      selectedTile: [0, 1, "habitable"],
      dominion: false,
      startingSystem: false,
      emptyBuilding: {
        name: "Empty",
        image: "empty",
        workforce: 0,
        levels: [
          {
            bonus: [],
            level: 1,
          },
        ],
      },
      infra: {
        name: 0,
        image: "infra_dome",
        workforce: 2,
        levels: [
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 2 },
            ],
            level: 1,
          },
        ],
      },
      flashInfra: {
        name: 0,
        image: "infra_dome",
        workforce: 2,
        levels: [
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 8 },
              { from: "direct", to: "sys_happiness", value: 12 },
            ],
            level: 1,
          },
        ],
      },
      buildListToDisplay: [],
      system: {
        workforce: 4,
        habitation: 0,
        happiness: 35, // 12 en Flash
        production: 40,
        ideology: 0,
        credit: 0,
        technology: 0,
        mobility: 0,
        defense: 0,
        ci: 0,
        remove_contact: 0,
        radar: 1,
        defFromHabitation: 0,
        defBonus: 1,
        monolithBonus: 0,
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
    async setUpSystem() {
      this.system.planets[0].buildings.push({
        building: this.infra,
        hover: false,
      });
      await this.addBuildingValues(this.infra.levels[0].bonus[0], 0, false);
      await this.addBuildingValues(this.infra.levels[0].bonus[1], 0, false);
      for (let i = 1; i < 8; i++) {
        this.system.planets[0].buildings.push({
          building: this.emptyBuilding,
          hover: false,
        });
      }
      this.system.planets[1].buildings.push({
        building: this.infra,
        hover: false,
      });
      await this.addBuildingValues(this.infra.levels[0].bonus[0], 1, false);
      await this.addBuildingValues(this.infra.levels[0].bonus[1], 1, false);
      for (let i = 1; i < 8; i++) {
        this.system.planets[1].buildings.push({
          building: this.emptyBuilding,
          hover: false,
        });
      }
      for (let i = 0; i < 3; i++) {
        this.system.planets[2].buildings.push({
          building: this.emptyBuilding,
          hover: false,
        });
      }
    },
    // Add planet to the planet list
    async addPlanet(newPlanetType) {
      let tileNumber;
      let newPlanetId = this.system.planets.length;
      let emptyBuildings = [];
      this.system.planets.push({
        planetId: newPlanetId,
        planetType: newPlanetType,
        buildings: emptyBuildings,
        planetHabitation: 0,
        ind: 5,
        tec: 5,
        act: 5,
      });
      if (newPlanetType === "moon" || newPlanetType === "asteroid")
        tileNumber = 3;
      else {
        tileNumber = 7;
        emptyBuildings.push({
          building: this.infra,
          hover: false,
        });
        this.system.workforce += 2;
        await this.addBuildingValues(
          this.infra.levels[0].bonus[0],
          newPlanetId,
          false
        );
        await this.addBuildingValues(
          this.infra.levels[0].bonus[1],
          newPlanetId,
          false
        );
      }

      for (let i = 0; i < tileNumber; i++) {
        this.system.planets[newPlanetId].buildings.push({
          building: this.emptyBuilding,
          hover: false,
        });
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
            this.system.workforce -= build.building.workforce;
            if (build.building.levels !== undefined) {
              build.building.levels[0].bonus.forEach(async (bonus) => {
                await this.addBuildingValues(bonus, i, true);
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
    async setBuilding(building, planetId, tileId) {
      if (planetId !== -1) {
        let currBuilding =
          this.system.planets[planetId].buildings[tileId].building;
        if (currBuilding.name !== "Empty") {
          if (currBuilding.levels !== undefined) {
            currBuilding.levels[0].bonus.forEach(async (bonus) => {
              await this.addBuildingValues(bonus, planetId, true);
            });
          }
        }
        this.system.workforce -= currBuilding.workforce;
        this.system.planets[planetId].buildings[tileId].building = building;
        this.system.workforce += building.workforce;
        if (building.levels !== undefined) {
          building.levels[0].bonus.forEach(async (bonus) => {
            await this.addBuildingValues(bonus, planetId, false);
          });
        }
      }
    },
    deleteBuilding(planetId, tileId) {
      let currBuilding =
        this.system.planets[planetId].buildings[tileId].building;
      if (currBuilding.name !== "Empty") {
        this.setBuilding(this.emptyBuilding, planetId, tileId);
      }
    },
    async addBuildingValues(buildingBonuses, planetIndex, substractValues) {
      if (substractValues) {
        buildingBonuses.value *= -1;
      }
      let valueToAssign;
      const bonus = buildingBonuses;
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
        case "sys_mobility":
          valueToAssign = bonus.value * this.system.mobility;
          break;
        case "sys_pop":
          valueToAssign = bonus.value * this.system.habitation;
          if (!substractValues) {
            this.system.monolithBonus = bonus.value;
          } else {
            this.system.monolithBonus = 0;
          }
          break;
        case "sys_defense":
          if (!substractValues) {
            this.system.defense += bonus.value * this.system.defense;
            this.system.defBonus = 1 + bonus.value;
            this.system.defFromHabitation *= this.system.defBonus;
            return;
          } else {
            valueToAssign =
              this.system.defense + this.system.defense / (-1 + bonus.value);
            valueToAssign *= -1;
            this.system.defFromHabitation /= 1 + -1 * bonus.value;
            this.system.defBonus = 1;
          }

          break;
      }
      switch (bonus.to) {
        case "sys_habitation":
          this.updateFromBodyPop(planetIndex, valueToAssign);
          this.system.habitation += valueToAssign;
          this.system.happiness =
            Math.round((this.system.happiness - valueToAssign) * 10) / 10;
          this.system.planets[planetIndex].planetHabitation += valueToAssign;

          if (!this.dominion) {
            this.system.defense -= this.system.defFromHabitation;
            this.system.defFromHabitation =
              Math.round(
                this.system.habitation * 0.15 * this.system.defBonus * 10
              ) / 10;
            this.system.defense += this.system.defFromHabitation;
          }

          this.system.credit +=
            valueToAssign * this.system.mobility * 0.1 + valueToAssign * 2;
          this.system.credit = Math.round(this.system.credit * 10) / 10;
          this.system.ideology += this.system.monolithBonus * valueToAssign;
          this.system.ideology = Math.round(this.system.ideology * 10) / 10;
          break;
        case "sys_happiness":
          this.system.happiness =
            Math.round((this.system.happiness + valueToAssign) * 10) / 10;
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
          this.system.defense =
            Math.round(
              (valueToAssign * this.system.defBonus + this.system.defense) * 10
            ) / 10;
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

      if (substractValues) {
        buildingBonuses.value *= -1;
      }
    },
    updateFromBodyPop(planetId, addedPop) {
      for (let i = 1; i < this.system.planets[planetId].buildings.length; i++) {
        this.system.planets[planetId].buildings[
          i
        ].building.levels[0].bonus.forEach(async (bon) => {
          if (bon.from === "body_pop") {
            await this.addBuildingValues(
              { from: "direct", to: bon.to, value: bon.value * addedPop },
              planetId,
              false
            );
          }
        });
      }
    },
    async setStartingSystem() {
      if (this.startingSystem)
        await this.addBuildingValues(
          { from: "direct", to: "sys_production", value: 30 },
          0,
          false
        );
      else
        await this.addBuildingValues(
          { from: "direct", to: "sys_production", value: 30 },
          0,
          true
        );
    },
    async setDominion() {
      if (this.dominion) {
        await this.addBuildingValues(
          {
            from: "direct",
            to: "sys_defense",
            value: this.system.defFromHabitation,
          },
          0,
          true
        );
        this.defFromHabitation = 0;
      } else {
        this.system.defFromHabitation =
          Math.round(this.system.habitation * 0.15 * 10) / 10;
        await this.addBuildingValues(
          {
            from: "direct",
            to: "sys_defense",
            value: this.system.defFromHabitation,
          },
          0,
          false
        );
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
.displayProd {
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
  width: 3rem;
  border-style: none;
  text-align: left;
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