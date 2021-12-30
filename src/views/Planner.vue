<template>
  <div class="card">
    <section class="container">
      <div class="leftDiv">
        <table style="display: inline-block">
          <thead>
            <tr>
              <th colspan="10">{{ $t("system") }}:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="planet in system" :key="planet.planetId">
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
                  :ref="'production' + building"
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
export default {
  name: "Planner",
  data() {
    return {
      selectedTile: [0, 1, "habitable"],
      emptyBuilding: { name: "Empty", image: "empty" },
      stellarBuildingList: [
        {
          idLine: 0,
          buildings: [
            { name: 1, image: "mine_dome" },
            { name: 2, image: "factory_open" },
            { name: 3, image: "research_open" },
          ],
        },
        {
          idLine: 1,
          buildings: [
            { name: 1, image: "finance_open" },
            { name: 2, image: "spatioport_open" },
          ],
        },
        {
          idLine: 2,
          buildings: [
            { name: 1, image: "defense_local_open" },
            { name: 2, image: "radar_orbital" },
          ],
        },
        {
          idLine: 3,
          buildings: [
            { name: 1, image: "happy_pot_open" },
            { name: 2, image: "happy_open" },
          ],
        },
        {
          idLine: 4,
          buildings: [
            { name: 1, image: "shipyard_1_orbital" },
            { name: 2, image: "shipyard_2_orbital" },
            { name: 3, image: "shipyard_3_orbital" },
            { name: 4, image: "shipyard_4_orbital" },
          ],
        },
      ],
      habitableBuildingList: [
        {
          idLine: 0,
          buildings: [
            { name: 1, image: "hab_open" },
            { name: 2, image: "hab_open_poor" },
            { name: 3, image: "hab_open_rich" },
          ],
        },
        {
          idLine: 1,
          buildings: [
            { name: 1, image: "factory_open" },
            { name: 2, image: "lift_open" },
            { name: 3, image: "research_open" },
          ],
        },
        {
          idLine: 2,
          buildings: [
            { name: 1, image: "university_open" },
            { name: 2, image: "ideo_open" },
            { name: 3, image: "ideo_credit_open" },
            { name: 4, image: "market_open" },
          ],
        },
        {
          idLine: 3,
          buildings: [
            { name: 1, image: "monument_open" },
            { name: 2, image: "finance_open" },
            { name: 3, image: "happy_pot_open" },
          ],
        },
        {
          idLine: 4,
          buildings: [
            { name: 1, image: "defense_local_open" },
            { name: 2, image: "counterintelligence_open" },
            { name: 3, image: "removecontact_open" },
          ],
        },
      ],
      sterileBuildingList: [
        {
          idLine: 0,
          buildings: [
            { name: 1, image: "mine_dome" },
            { name: 2, image: "high_factory_dome" },
            { name: 3, image: "lift_open" },
            { name: 4, image: "research_open" },
          ],
        },
        {
          idLine: 1,
          buildings: [
            { name: 1, image: "hab_open" },
            { name: 2, image: "ideo_open" },
            { name: 3, image: "market_open" },
          ],
        },
        {
          idLine: 2,
          buildings: [
            { name: 1, image: "monument_open" },
            { name: 2, image: "spatioport_open" },
            { name: 3, image: "happy_pot_open" },
          ],
        },
        {
          idLine: 3,
          buildings: [
            { name: 1, image: "defense_global_dome" },
            { name: 2, image: "defense_local_open" },
            { name: 3, image: "military_school_dome" },
            { name: 4, image: "removecontact_open" },
          ],
        },
      ],
      buildListToDisplay: [],
      system: [
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
    };
  },
  methods: {
    // Add building slots to the default system
    setUpSystem() {
      this.system[0].buildings.push({ name: 0, image: "infra_dome" });
      for (let i = 1; i < 8; i++) {
        this.system[0].buildings.push(this.emptyBuilding);
      }
      this.system[1].buildings.push({ name: 0, image: "infra_dome" });
      for (let i = 1; i < 8; i++) {
        this.system[1].buildings.push(this.emptyBuilding);
      }
      for (let i = 0; i < 3; i++) {
        this.system[2].buildings.push(this.emptyBuilding);
      }
    },
    // Add planet to the planet list
    addPlanet(newPlanetType) {
      let tileNumber;
      let newPlanetId = this.system[this.system.length - 1].planetId + 1;
      let emptyBuildings = [];
      if (newPlanetType === "moon" || newPlanetType === "asteroid")
        tileNumber = 3;
      else {
        tileNumber = 7;
        emptyBuildings.push({ name: 0, image: "infra_dome" });
      }
      this.system.push({
        planetId: newPlanetId,
        planetType: newPlanetType,
        buildings: emptyBuildings,
      });
      for (let i = 0; i < tileNumber; i++) {
        this.system[newPlanetId].buildings.push(this.emptyBuilding);
      }
    },
    // Delete planet and change planetId of other planets
    deletePlanet(delPlanetId) {
      for (var i = this.system.length - 1; i >= 0; --i) {
        if (this.system[i].planetId == delPlanetId) {
          this.system.splice(i, 1);
          for (var j = i; j < this.system.length; j++) {
            this.system[j].planetId--;
          }
          break;
        }
      }
    },
    // Set the building on the currently selected tile
    setBuilding(building) {
      this.system[this.selectedTile[0]].buildings[this.selectedTile[1]] =
        building;
    },
    // Select a tile and display corresponding building list
    selectTile(planetId, tileId, newPlanetType) {
      // If tile is not the first tile of an habitable or sterile planet
      if (
        tileId === 0 &&
        (newPlanetType === "habitable" || newPlanetType === "sterile")
      ) {
        return;
      } else {
        if (newPlanetType !== this.selectedTile[2]) {
          if (newPlanetType === "moon" || newPlanetType === "asteroid") {
            this.buildListToDisplay = this.stellarBuildingList;
          } else if (newPlanetType === "habitable") {
            this.buildListToDisplay = this.habitableBuildingList;
          } else if (newPlanetType === "sterile") {
            this.buildListToDisplay = this.sterileBuildingList;
          }
        }
        this.selectedTile = [planetId, tileId, newPlanetType];
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
  },
  mounted() {
    this.buildListToDisplay = this.habitableBuildingList;
    this.setUpSystem();
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