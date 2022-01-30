<template>
  <div class="card">
    <!-- <h2>{{ $t("plannerWarning") }}</h2> -->
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
              <th colspan="2">
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
                          building.building.key +
                          '.svg')
                      "
                      :alt="building.building.key"
                    />
                    <button
                      v-show="building.hover"
                      style="position: absolute; top: 70%; left: 65%"
                      @click="deleteBuilding(planet.planetId, index)"
                    >
                      x
                    </button>
                    <button
                      v-show="building.hover"
                      style="position: absolute; top: -15%; left: -15%"
                      @click="levelBuilding(planet.planetId, index, true)"
                    >
                      ^
                    </button>
                    <button
                      v-show="building.hover"
                      style="position: absolute; top: 70%; left: -15%"
                      @click="levelBuilding(planet.planetId, index, false)"
                    >
                      ˅
                    </button>
                    <b style="position: absolute; top: 0%; left: 80%">
                      {{ building.level }}
                    </b>
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
                    :src="require('@/assets/building/' + building.key + '.svg')"
                    :alt="building.key"
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
const flashHabitableBuildingList = require("../datas/flashHabitableBuilding.js");
const flashSterileBuildingList = require("../datas/flashSterileBuilding.js");
const flashStellarBuildingList = require("../datas/flashStellarBuilding.js");
const legacyHabitableBuildingList = require("../datas/habitableBuilding.json");
const legacySterileBuildingList = require("../datas/sterileBuilding.json");
const legacyStellarBuildingList = require("../datas/stellarBuilding.json");
export default {
  name: "Planner",
  props: {
    gameSpeed: String,
  },
  data() {
    return {
      stellarBuildingList: [],
      habitableBuildingList: [],
      sterileBuildingList: [],
      selectedTile: [0, 1, "habitable"],
      dominion: false,
      startingSystem: false,
      flashStartingProduction: 40,
      legacyStartingProduction: 40,
      flashStartingHappiness: 12,
      legacyStartingHappiness: 35,
      emptyBuilding: {
        name: "Empty",
        key: "empty",
        workforce: 0,
        levels: [
          {
            bonus: [],
            level: 1,
          },
        ],
      },
      infra: {},
      legacyInfra: {
        name: "infra_dome",
        key: "infra_dome",
        workforce: 2,
        levels: [
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 2 },
            ],
            level: 1,
          },
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 4 },
            ],
            level: 2,
          },
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 6 },
            ],
            level: 3,
          },
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 8 },
            ],
            level: 4,
          },
          {
            bonus: [
              { from: "direct", to: "sys_habitation", value: 10 },
              { from: "direct", to: "sys_happiness", value: 10 },
            ],
            level: 5,
          },
        ],
      },
      flashInfra: {
        name: "infra_dome",
        key: "infra_dome",
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
        happiness: 0,
        production: 0,
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
        uniqueBuildings: [],
      },
      firstClick: true,
    };
  },
  methods: {
    // Add building slots to the default system
    async setUpSystem() {
      this.system.planets[0].buildings.push({
        building: this.infra,
        hover: false,
        level: 1,
      });
      await this.addBonusValue(this.infra.levels[0].bonus[0], 0, false);
      await this.addBonusValue(this.infra.levels[0].bonus[1], 0, false);
      for (let i = 1; i < 8; i++) {
        this.system.planets[0].buildings.push({
          building: this.emptyBuilding,
          hover: false,
          level: 1,
        });
      }
      this.system.planets[1].buildings.push({
        building: this.infra,
        hover: false,
        level: 1,
      });
      await this.addBonusValue(this.infra.levels[0].bonus[0], 1, false);
      await this.addBonusValue(this.infra.levels[0].bonus[1], 1, false);
      for (let i = 1; i < 8; i++) {
        this.system.planets[1].buildings.push({
          building: this.emptyBuilding,
          hover: false,
          level: 1,
        });
      }
      for (let i = 0; i < 3; i++) {
        this.system.planets[2].buildings.push({
          building: this.emptyBuilding,
          hover: false,
          level: 1,
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
          level: 1,
        });
        this.system.workforce += 2;
        await this.addBonusValue(
          this.infra.levels[0].bonus[0],
          newPlanetId,
          false
        );
        await this.addBonusValue(
          this.infra.levels[0].bonus[1],
          newPlanetId,
          false
        );
      }

      for (let i = 0; i < tileNumber; i++) {
        this.system.planets[newPlanetId].buildings.push({
          building: this.emptyBuilding,
          hover: false,
          level: 1,
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
              build.building.levels[build.level - 1].bonus.forEach(
                async (bonus) => {
                  await this.addBonusValue(bonus, i, true);
                }
              );
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
      if (building.limitation === "unique_body") {
        for (var build in this.system.planets[planetId].buildings) {
          if (
            this.system.planets[planetId].buildings[build].building.key ===
            building.key
          ) {
            return;
          }
        }
      } else if (building.limitation === "unique_system") {
        if (this.system.uniqueBuildings.indexOf(building.key) > -1) {
          return;
        } else {
          this.system.uniqueBuildings.push(building.key);
        }
      }
      if (planetId !== -1) {
        let currBuilding = this.system.planets[planetId].buildings[tileId];
        if (currBuilding.name !== "Empty") {
          if (currBuilding.building.levels !== undefined) {
            currBuilding.building.levels[currBuilding.level - 1].bonus.forEach(
              async (bonus) => {
                await this.addBonusValue(bonus, planetId, true);
              }
            );
          }
          if (currBuilding.limitation === "unique_system") {
            this.system.uniqueBuildings.splice(
              this.system.uniqueBuildings.indexOf(currBuilding.key),
              1
            );
          }
        }
        this.system.planets[planetId].buildings[tileId].level = 1;

        this.system.workforce -= currBuilding.building.workforce;
        this.system.planets[planetId].buildings[tileId].building = building;
        this.system.workforce += building.workforce;
        this.system.planets[planetId].buildings[tileId].level = 1;
        if (building.levels !== undefined) {
          building.levels[0].bonus.forEach(async (bonus) => {
            await this.addBonusValue(bonus, planetId, false);
          });
        }
      }
    },
    async deleteBuilding(planetId, tileId) {
      let currBuilding =
        this.system.planets[planetId].buildings[tileId].building;
      if (currBuilding.name !== "Empty") {
        if (currBuilding.name !== "infra_dome") {
          this.setBuilding(this.emptyBuilding, planetId, tileId);
        } else {
          for (var tile in this.system.planets[planetId].buildings) {
            this.setBuilding(this.emptyBuilding, planetId, tile);
          }
        }
        this.firstClick = true;
      }
      if (currBuilding.limitation === "unique_system") {
        await this.system.uniqueBuildings.splice(
          this.system.uniqueBuildings.indexOf(currBuilding.key),
          1
        );
      }
    },
    async addBonusValue(buildingBonuses, planetIndex, substractValues) {
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
            Math.round((this.system.happiness - valueToAssign) * 100) / 100;
          this.system.planets[planetIndex].planetHabitation += valueToAssign;

          if (!this.dominion && this.gameSpeed !== "flash") {
            this.system.defense -= this.system.defFromHabitation;
            this.system.defFromHabitation =
              Math.round(
                this.system.habitation * 0.15 * this.system.defBonus * 100
              ) / 100;
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
            Math.round((this.system.happiness + valueToAssign) * 100) / 100;
          break;
        case "sys_production":
          this.system.production =
            Math.round((this.system.production + valueToAssign) * 100) / 100;
          break;
        case "sys_ideology":
          this.system.ideology =
            Math.round((this.system.ideology + valueToAssign) * 100) / 100;
          break;
        case "sys_credit":
          this.system.credit =
            Math.round((this.system.credit + valueToAssign) * 100) / 100;
          break;
        case "sys_technology":
          this.system.technology =
            Math.round((this.system.technology + valueToAssign) * 100) / 100;
          break;
        case "sys_mobility":
          this.updateFromSysMobi(planetIndex, valueToAssign);
          this.system.credit += this.system.habitation * valueToAssign * 0.1;
          this.system.credit = Math.round(this.system.credit * 100) / 100;
          this.system.mobility =
            Math.round((this.system.mobility + valueToAssign) * 100) / 100;
          break;
        case "sys_defense":
          this.system.defense =
            Math.round(
              (valueToAssign * this.system.defBonus + this.system.defense) * 100
            ) / 100;
          break;
        case "sys_remove_contact":
          this.system.remove_contact =
            Math.round((this.system.remove_contact + valueToAssign) * 100) /
            100;
          break;
        case "sys_ci":
          this.system.ci =
            Math.round((this.system.ci + valueToAssign) * 100) / 100;
          break;
        case "sys_radar":
          this.system.radar =
            Math.round((this.system.radar + valueToAssign) * 100) / 100;
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
        let currBuilding = this.system.planets[planetId].buildings[i];
        currBuilding.building.levels[currBuilding.level - 1].bonus.forEach(
          async (bon) => {
            if (bon.from === "body_pop") {
              await this.addBonusValue(
                { from: "direct", to: bon.to, value: bon.value * addedPop },
                planetId,
                false
              );
            }
          }
        );
      }
    },
    updateFromSysMobi(planetId, addedMobi) {
      for (let i = 1; i < this.system.planets.length; i++) {
        for (let j = 0; j < this.system.planets[i].buildings.length; j++) {
          let currBuilding = this.system.planets[i].buildings[j];
          currBuilding.building.levels[currBuilding.level - 1].bonus.forEach(
            async (bon) => {
              if (bon.from === "sys_mobility") {
                await this.addBonusValue(
                  { from: "direct", to: bon.to, value: bon.value * addedMobi },
                  planetId,
                  false
                );
              }
            }
          );
        }
      }
    },
    async setStartingSystem() {
      if (this.startingSystem)
        await this.addBonusValue(
          { from: "direct", to: "sys_production", value: 60 },
          0,
          false
        );
      else
        await this.addBonusValue(
          { from: "direct", to: "sys_production", value: 60 },
          0,
          true
        );
    },
    async setDominion() {
      if (this.dominion) {
        await this.addBonusValue(
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
        await this.addBonusValue(
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
    levelBuilding(planetId, tileId, up) {
      let currBuilding = this.system.planets[planetId].buildings[tileId];
      if (currBuilding.building.name !== "Empty") {
        let upDown = 1;
        if (!up) {
          upDown = -1;
        }
        if (
          !(currBuilding.level === 1 && upDown === -1) &&
          !(currBuilding.level === 5 && upDown === 1)
        ) {
          currBuilding.building.levels[currBuilding.level - 1].bonus.forEach(
            async (bon) => {
              // console.log(bon);
              await this.addBonusValue(bon, planetId, true);
            }
          );
          currBuilding.level += upDown;
          currBuilding.building.levels[currBuilding.level - 1].bonus.forEach(
            async (bon) => {
              // console.log(bon);
              await this.addBonusValue(bon, planetId, false);
            }
          );
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
            this.buildListToDisplay = this.stellarBuildingList;
          } else if (newPlanetType === "habitable") {
            this.buildListToDisplay = this.habitableBuildingList;
          } else if (newPlanetType === "sterile") {
            this.buildListToDisplay = this.sterileBuildingList;
          }
        }
        if (this.selectedTile[0] !== -1) {
          this.replaceSelectedTileButton(
            "slot" + this.selectedTile[0] + "_" + this.selectedTile[1]
          );
        }
        this.selectedTile = [planetId, tileId, newPlanetType];
        this.setSelectedTileButton("slot" + planetId + "_" + tileId);
      } else {
        if (
          this.system.planets[planetId].buildings[0].building.name ===
            "Empty" &&
          this.firstClick === false
        ) {
          // console.log("a");
          this.setBuilding(this.infra, planetId, 0);
        } else {
          this.firstClick = false;
        }
      }
    },
    setBuildingLists(speed, planetType) {
      if (speed === "legacy") {
        this.habitableBuildingList = legacyHabitableBuildingList;
        this.stellarBuildingList = legacyStellarBuildingList;
        this.sterileBuildingList = legacySterileBuildingList;
      } else if (speed === "flash") {
        this.habitableBuildingList = flashHabitableBuildingList;
        this.stellarBuildingList = flashStellarBuildingList;
        this.sterileBuildingList = flashSterileBuildingList;
      }
      if (planetType === "moon" || planetType === "asteroid") {
        this.buildListToDisplay = this.stellarBuildingList;
      } else if (planetType === "habitable") {
        this.buildListToDisplay = this.habitableBuildingList;
      } else if (planetType === "sterile") {
        this.buildListToDisplay = this.sterileBuildingList;
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
    await this.setBuildingLists(this.gameSpeed, "habitable");
    if (this.gameSpeed === "legacy") {
      this.system.production = this.legacyStartingProduction;
      this.system.happiness = this.legacyStartingHappiness;
      this.infra = this.legacyInfra;
    } else if (this.gameSpeed === "flash") {
      this.system.production = this.flashStartingProduction;
      this.system.happiness = this.flashStartingHappiness;
      this.infra = this.flashInfra;
    }
    await this.setUpSystem();
    this.setSelectedTileButton("slot" + 0 + "_" + 1);
  },
  watch: {
    gameSpeed: async function (newval) {
      for (
        let planetId = 0;
        planetId < this.system.planets.length;
        planetId++
      ) {
        for (
          let i = 1;
          i < this.system.planets[planetId].buildings.length;
          i++
        ) {
          if (
            this.system.planets[planetId].buildings[i].building.name !== "Empty"
          ) {
            this.system.planets[planetId].buildings[
              i
            ].building.levels[0].bonus.forEach(async (bon) => {
              await this.addBonusValue(bon, planetId, true);
            });
          }
        }
      }
      await this.setBuildingLists(newval, this.selectedTile[2]);
      let oldProd;
      let newProd;
      let oldHapp;
      let newHapp;
      let oldInfra = this.infra;
      if (newval === "legacy") {
        newProd = this.legacyStartingProduction;
        oldProd = this.flashStartingProduction;
        newHapp = this.legacyStartingHappiness;
        oldHapp = this.flashStartingHappiness;
        this.infra = this.legacyInfra;
      } else if (newval === "flash") {
        oldProd = this.legacyStartingProduction;
        newProd = this.flashStartingProduction;
        oldHapp = this.legacyStartingHappiness;
        newHapp = this.flashStartingHappiness;
        this.infra = this.flashInfra;
      }

      await this.addBonusValue(
        { from: "direct", to: "sys_production", value: oldProd },
        0,
        true
      );
      await this.addBonusValue(
        { from: "direct", to: "sys_production", value: newProd },
        0,
        false
      );
      await this.addBonusValue(
        { from: "direct", to: "sys_happiness", value: oldHapp },
        0,
        true
      );
      await this.addBonusValue(
        { from: "direct", to: "sys_happiness", value: newHapp },
        0,
        false
      );

      for (
        let planetId = 0;
        planetId < this.system.planets.length;
        planetId++
      ) {
        for (
          let i = 0;
          i < this.system.planets[planetId].buildings.length;
          i++
        ) {
          if (
            this.system.planets[planetId].buildings[i].building.name !==
              "Empty" &&
            this.system.planets[planetId].buildings[i].building.name !==
              "infra_dome"
          ) {
            let planetType = this.system.planets[planetId].planetType;
            let buildListToSearch;
            let correspondingBuilding;

            if (planetType === "moon" || planetType === "asteroid") {
              buildListToSearch = this.stellarBuildingList;
            } else if (planetType === "habitable") {
              buildListToSearch = this.habitableBuildingList;
            } else if (planetType === "sterile") {
              buildListToSearch = this.sterileBuildingList;
            }

            for (var buildLine in buildListToSearch) {
              for (var building in buildListToSearch[buildLine].buildings) {
                if (
                  buildListToSearch[buildLine].buildings[building].key ===
                  this.system.planets[planetId].buildings[i].building.key
                ) {
                  correspondingBuilding =
                    buildListToSearch[buildLine].buildings[building];
                  break;
                }
              }
              if (correspondingBuilding !== undefined) break;
            }
            if (correspondingBuilding !== undefined) {
              correspondingBuilding.levels[0].bonus.forEach(async (bon) => {
                await this.addBonusValue(bon, planetId, false);
              });
              this.system.planets[planetId].buildings[i].building =
                correspondingBuilding;
            } else {
              this.system.planets[planetId].buildings[i].building =
                this.emptyBuilding;
            }
          } else if (
            this.system.planets[planetId].buildings[i].building.name ===
            "infra_dome"
          ) {
            this.system.planets[planetId].buildings[i].building = this.infra;
            await this.addBonusValue(
              oldInfra.levels[0].bonus[0],
              planetId,
              true
            );
            await this.addBonusValue(
              oldInfra.levels[0].bonus[1],
              planetId,
              true
            );
            await this.addBonusValue(
              this.infra.levels[0].bonus[0],
              planetId,
              false
            );
            await this.addBonusValue(
              this.infra.levels[0].bonus[1],
              planetId,
              false
            );
          }
        }
      }
      let defHab = this.system.defFromHabitation;
      if (newval === "flash") {
        await this.addBonusValue(
          { from: "direct", to: "sys_defense", value: defHab },
          0,
          true
        );
        defHab = 0;
      }
    },
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