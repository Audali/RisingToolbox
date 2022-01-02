<template>
  <div class="card">
    <table class="tableProd">
      <td>
        <img
          src="@/assets/resource/credit_light.svg"
          class="iconProd"
          alt="Credit"
        />
      </td>
      <td>
        <input
          type="number"
          class="inputProd"
          v-model="productions[0]"
          min="1"
          @change="updateAllProduction()"
        />
      </td>
      <td>
        <img
          src="@/assets/resource/technology_light.svg"
          class="iconProd"
          alt="Technology"
        />
      </td>
      <td>
        <input
          type="number"
          class="inputProd"
          v-model="productions[1]"
          min="1"
          @change="updateAllProduction()"
        />
      </td>
      <td>
        <img
          src="@/assets/resource/ideology_light.svg"
          class="iconProd"
          alt="Ideology"
        />
      </td>
      <td>
        <input
          type="number"
          class="inputProd"
          v-model="productions[2]"
          min="1"
          @change="updateAllProduction()"
        />
      </td>
      <td>
        <img
          src="@/assets/resource/production_light.svg"
          class="iconProd"
          alt="Production"
        />
      </td>
      <td>
        <input
          type="number"
          class="inputProd"
          v-model="productions[3]"
          min="1"
          @change="updateAllProduction()"
        />
      </td>
    </table>
    <br />
    <br />
    <table class="tableLeveling" style="display: inline-block">
      <thead>
        <tr>
          <th>{{ $t("prod") }}:</th>
          <th>{{ $t("goal") }}:</th>
          <th>{{ $t("currentStock") }}:</th>
          <th style="padding-left: 1.5rem"></th>
          <th>{{ $t("time") }}:</th>
          <th style="padding-left: 3.5rem; padding-right: 3.5rem">
            {{ $t("date") }}:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, index) in calculatorLine" :key="index">
          <td>
            <button
              class="active_button"
              :ref="'production' + index + '0'"
              @click="setProduction(index, 0)"
            >
              <img
                src="@/assets/resource/credit.svg"
                class="iconProd"
                alt="Credit"
              />
            </button>
            <button
              class="inactive_button"
              :ref="'production' + index + '1'"
              @click="setProduction(index, 1)"
            >
              <img
                src="@/assets/resource/technology.svg"
                class="iconProd"
                alt="Technology"
              />
            </button>
            <button
              class="inactive_button"
              :ref="'production' + index + '2'"
              @click="setProduction(index, 2)"
            >
              <img
                src="@/assets/resource/ideology.svg"
                class="iconProd"
                alt="Ideology"
              />
            </button>
            <button
              class="inactive_button"
              :ref="'production' + index + '3'"
              @click="setProduction(index, 3)"
            >
              <img
                src="@/assets/resource/production.svg"
                class="iconProd"
                alt="Production"
              />
            </button>
          </td>
          <td>
            <input
              type="number"
              min="0"
              v-model="line.goal"
              @change="calculateProductionTime(index)"
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              v-model="line.current"
              @change="calculateProductionTime(index)"
            />
          </td>
          <td />
          <td>
            {{ line.timeNeeded }}
          </td>
          <td>
            {{ line.endDate }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "CostCalculator",
  data() {
    return {
      productions: [100, 100, 100, 100],
      calculatorLine: [
        {
          pickedProduction: 0,
          goal: 1000,
          current: 0,
          timeNeeded: 0,
          endDate: 0,
        },
        {
          pickedProduction: 0,
          goal: 1000,
          current: 0,
          timeNeeded: 0,
          endDate: 0,
        },
        {
          pickedProduction: 0,
          goal: 1000,
          current: 0,
          timeNeeded: 0,
          endDate: 0,
        },
        {
          pickedProduction: 0,
          goal: 1000,
          current: 0,
          timeNeeded: 0,
          endDate: 0,
        },
        {
          pickedProduction: 0,
          goal: 1000,
          current: 0,
          timeNeeded: 0,
          endDate: 0,
        },
      ],
    };
  },
  methods: {
    calculateProductionTime(lineIndex) {
      if (
        this.calculatorLine[lineIndex].goal <
        this.calculatorLine[lineIndex].current
      ) {
        this.calculatorLine[lineIndex].timeNeeded = "Done";
        this.calculatorLine[lineIndex].endDate = "---";
      } else {
        var productionTime =
          ((this.calculatorLine[lineIndex].goal -
            this.calculatorLine[lineIndex].current) /
            this.productions[this.calculatorLine[lineIndex].pickedProduction]) *
          3 *
          60;

        var seconds = parseInt(productionTime);
        var days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        var hrs = Math.floor(seconds / 3600);
        seconds -= hrs * 3600;
        var mnts = Math.floor(seconds / 60);
        seconds -= mnts * 60;
        if (seconds < 10) seconds = "0" + seconds.toString();
        if (mnts < 10) mnts = "0" + mnts.toString();

        this.calculatorLine[lineIndex].timeNeeded =
          days + "d " + hrs + ":" + mnts + ":" + seconds;

        var endTime = new Date(Date.now() + productionTime * 1000);

        let month = endTime.getMonth() + 1;
        this.calculatorLine[lineIndex].endDate =
          endTime.getHours() +
          "h" +
          endTime.getMinutes() +
          "m" +
          endTime.getSeconds() +
          "s" +
          " " +
          endTime.getDate() +
          "/" +
          month;
      }
    },
    setProduction(lineIndex, newProduction) {
      this.replaceActiveButton(
        "production" +
          lineIndex +
          this.calculatorLine[lineIndex].pickedProduction
      );
      this.calculatorLine[lineIndex].pickedProduction = newProduction;
      this.calculateProductionTime(lineIndex);
      this.replaceInactiveButton("production" + lineIndex + newProduction);
    },
    updateAllProduction() {
      for (let i = 0; i < this.calculatorLine.length; i++) {
        this.calculateProductionTime(i);
      }
    },
    // Replace active button class to inactive button class on given ref
    replaceActiveButton(refToSwap) {
      this.$refs[refToSwap][0].classList.replace(
        "active_button",
        "inactive_button"
      );
    },
    // Replace inactive button class to active button class on given ref
    replaceInactiveButton(refToSwap) {
      this.$refs[refToSwap][0].classList.replace(
        "inactive_button",
        "active_button"
      );
    },
  },
  mounted() {
    this.updateAllProduction();
    if (this.$cookie.isCookieAvailable("productions")) {
      this.productions = this.$cookie.getCookie("productions").split(",");
    }
  },
  beforeUnmount() {
    this.$cookie.setCookie("productions", this.productions);
  },
};
</script>
<style scoped>
.inputProd {
  width: 3.5rem;
}
.active_button {
  background-color: #8e60bf;
  border: solid 2px #8e60bf;
  margin: 0.2rem;
  border-radius: 15%;
}
.active_button:hover {
  background-color: #8752c0;
}
.inactive_button {
  background-color: #e6e6e5;
  border: solid 1px rgb(80, 80, 80);
  margin: 0.2rem;
  border-radius: 15%;
}
.inactive_button:hover {
  background-color: #8752c0;
}
.iconProd {
  width: 1.5rem;
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
</style>