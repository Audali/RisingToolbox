<template>
  <div class="card">
    <table style="display: inline-block">
      <td>
        <img src="@/assets/credit.svg" alt="Credit" />
        <input
          type="number"
          class="inputProd"
          v-model="productions[0]"
          min="1"
          @change="calculateProductionTime()"
        />
      </td>
      <td>
        <img src="@/assets/technology.svg" alt="Technology" />
        <input
          type="number"
          class="inputProd"
          v-model="productions[1]"
          min="1"
          @change="calculateProductionTime()"
        />
      </td>
      <td>
        <img src="@/assets/ideology.svg" alt="Ideology" />
        <input
          type="number"
          class="inputProd"
          v-model="productions[2]"
          min="1"
          @change="calculateProductionTime()"
        />
      </td>
      <td>
        <img src="@/assets/production.svg" alt="Production" />
        <input
          type="number"
          class="inputProd"
          v-model="productions[3]"
          min="1"
          @change="calculateProductionTime()"
        />
      </td>
    </table>
    <br />
    <table class="tableLeveling" style="display: inline-block">
      <thead>
        <tr>
          <th>Prod:</th>
          <th>Goal:</th>
          <th>Current:</th>
          <th></th>
          <th>Time:</th>
          <th>Date:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button
              class="active_button"
              ref="production0"
              @click="setProduction(0)"
            >
              <img src="@/assets/credit.svg" alt="Credit" />
            </button>
            <button
              class="inactive_button"
              ref="production1"
              @click="setProduction(1)"
            >
              <img src="@/assets/technology.svg" alt="Technology" />
            </button>
            <button
              class="inactive_button"
              ref="production2"
              @click="setProduction(2)"
            >
              <img src="@/assets/ideology.svg" alt="Ideology" />
            </button>
            <button
              class="inactive_button"
              ref="production3"
              @click="setProduction(3)"
            >
              <img src="@/assets/production.svg" alt="Production" />
            </button>
          </td>
          <td>
            <input
              type="number"
              min="0"
              v-model="goal"
              @change="calculateProductionTime()"
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              v-model="current"
              @change="calculateProductionTime()"
            />
          </td>
          <td />
          <td>
            {{ timeNeeded }}
          </td>
          <td>
            {{ endDate }}
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
      pickedProduction: 0,
      goal: 1000,
      current: 0,
      timeNeeded: 0,
      endDate: 0,
      prod: 100,
    };
  },
  methods: {
    calculateProductionTime() {
      if (this.goal < this.current) {
        this.timeNeeded = "Done";
        this.endDate = "---";
      } else {
        var productionTime =
          ((this.goal - this.current) /
            this.productions[this.pickedProduction]) *
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

        this.timeNeeded = days + "d " + hrs + ":" + mnts + ":" + seconds;

        var endTime = new Date(Date.now() + productionTime * 1000);

        let month = endTime.getMonth() + 1;
        this.endDate =
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
    setProduction(newProduction) {
      // console.log(newProduction);
      this.replaceActiveButton("production" + this.pickedProduction);
      this.pickedProduction = newProduction;
      this.calculateProductionTime();
      this.replaceInactiveButton("production" + newProduction);
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
    this.calculateProductionTime();
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
</style>