<template>
  <div class="row">
    <div class="col-sm-7 mx-auto">
      <ShiningDots :color="shiningDotsColor" :border-color="shiningDotsBorderColor" :shine-color="shiningDotsShineColor"
        :border-width="shiningDotsBorderWidth" :size="shiningDotsSize" :count="shiningDotsCount">

        <VueWheelSpinner ref="spinner" :slices="slices" :winner-index="defaultWinner" :sounds="sounds"
          :cursor-angle="cursorAngle" :cursor-position="cursorPosition" :cursor-distance="cursorDistance"
          @spin-start="onSpinStart" @spin-end="onSpinEnd">

          <template #cursor>
            <img class="cursor-img" :src="cursorImage" alt="Cursor">
          </template>

          <template #default>
            <button class="spin-button" :disabled="isSpinning" @click="spinFor(defaultWinner)">
              PUTAR
            </button>
          </template>
        </VueWheelSpinner>
      </ShiningDots>
      <div>
        <div class="fs-2 text-center">
          <div v-if="winnerResult">
                          <div class="modalx"><ConfettiExplosion :particleCount="500" :force="0.3" :duration="8000" />

              <ConfettiExplosion :particleCount="500" :force="0.3" :duration="8000" />
              <div class=" card w-50 mx-auto text-center bd-radi ">
                <div class="bg-primary text-white p-2">
                  <h4>PHOENIX PRESENTER</h4>
                </div>
                <div class="card-body p-4">
                
                  <h1 class="card-title text-primary">🎉 {{ winnerResult.text }} 🎉</h1>
                   <br>
                  <button type="button" class="btn mx-auto btn-primary text-white">
                    <RouterLink to="/dua" class="text-white">Simpan & Putar Kembali</RouterLink>
                  </button>
                </div>
              </div>
              <ConfettiExplosion :particleCount="500" :force="0.3" :duration="8000" />
            </div>
          </div>
          <div v-else-if="isSpinning">
            Spinning...
          </div>
         
        </div>

      </div>
    </div>
  </div>

</template>
<script>
import VueWheelSpinner from "@/components/VueWheelSpinner.vue";
import "bootstrap/js/src/dropdown.js";
import ConfettiExplosion from "vue-confetti-explosion";


import cursorImage from "../assets/cursor.svg";
import wonSound from "../sounds/won.mp3";
import clickSound from "../sounds/click.mp3";
import hoverSound from "../sounds/hover.mp3";
import leaveSound from "../sounds/leave.mp3";
import spinningSound from "../sounds/spinning.mp3";
import ShiningDots from "@/components/ShiningDots.vue";

export default {
  components: {
    ShiningDots,
    VueWheelSpinner,
    ConfettiExplosion,
  },
  data() {
    return {
      menang: [
        {
          "direktorat": "COLLECTION",
          "color": "opacity: 0; background-color: #9A2B91; color: white;",
          "text": "Lampita Barutu",
          "weight": "1",
          "labelColor": "#fff",
          "id": "0"
        },
        {
          "direktorat": "CREDIT",
          "color": "opacity: 0; background-color: #EEAF2F;",
          "text": "Rahman Torkis",
          "weight": "1",
          "labelColor": "#fff",
          "id": "1"
        },
        {
          "direktorat": "HRD",
          "color": "opacity: 0; background-color: #142E5F;  color: white;",
          "text": "Hengki",
          "weight": "1",
          "labelColor": "#fff",
          "id": "46"
        },
        {
          "direktorat": "MKT MC",
          "color": "opacity: 0; background-color: #D2D4D5;",
          "text": "Ismi Hidayatur",
          "weight": "1",
          "labelColor": "#fff",
          "id": "51"
        },
        {
          "direktorat": "MKT CAR",
          "color": "opacity: 0; background-color: #A53D99;  color: white;",
          "text": "Marthin Golto",
          "weight": "1",
          "labelColor": "#fff",
          "id": "61"
        },
        {
          "direktorat": "PLANNING",
          "color": "opacity: 0; background-color: #3B6D86;  color: white;",
          "text": "Muhammad Azis",
          "weight": "1",
          "labelColor": "#fff",
          "id": "67"
        },
        {
          "direktorat": "IT",
          "color": "opacity: 0; background-color: #5CBA58;",
          "text": "Sempurna Purba",
          "weight": "1",
          "labelColor": "#fff",
          "id": "90"
        },
        {
          "direktorat": "RISK MANAGEMENT",
          "color": "opacity: 0; background-color: #FF0000;  color: white;",
          "text": "Theresia Agustina",
          "weight": "1",
          "labelColor": "#fff",
          "id": "95"
        },
        {
          "direktorat": "MARKETING",
          "color": "opacity: 0; background-color: #3577BB;  color: white;",
          "text": "Yuli Nurjanah",
          "weight": "1",
          "labelColor": "#fff",
          "id": "106"
        }
      ],
      winnerResult: null,
      slices: [
    {
        "color": "#EE3291",
        "text": "Abu Muzoffar",
        "id": "27",
        "": null
    },
    {
        "color": "#5CBA58",
        "text": "Agus Budi",
        "id": "47",
        "": null
    },
    {
        "color": "#3577BB",
        "text": "Agus Susanto",
        "id": "67",
        "": null
    },
    {
        "color": "#3B6D86",
        "text": "Akmal",
        "id": "89",
        "": null
    },
    {
        "color": "#3B6D87",
        "text": "Alexander Rumawas",
        "id": "90",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Alvio Fiorrie",
        "id": "18",
        "": null
    },
    {
        "color": "#9A2B91",
        "text": "Andarto",
        "id": "0",
        "": null
    },
    {
        "color": "#A53D99",
        "text": "Andree Cresenda",
        "id": "72",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Andrew Christian",
        "id": "19",
        "": null
    },
    {
        "color": "#EE3292",
        "text": "Andri Purba",
        "id": "28",
        "": null
    },
    {
        "color": "#5CBA59",
        "text": "Aspri Sigit",
        "id": "48",
        "": null
    },
    {
        "color": "#5CBA60",
        "text": "Asrul Fadillah",
        "id": "49",
        "": "5"
    },
    {
        "color": "#EEAF2F",
        "text": "Avrillia Ika",
        "id": "20",
        "": null
    },
    {
        "color": "#3577BB",
        "text": "Bramanti Dwi",
        "id": "68",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Cahyo Yudyono",
        "id": "21",
        "": null
    },
    {
        "color": "#FF0000",
        "text": "Christin Melinda",
        "id": "101",
        "": null
    },
    {
        "color": "#D2D4D5",
        "text": "Chynthia Dewi",
        "id": "78",
        "": null
    },
    {
        "color": "#9A2B92",
        "text": "David Febrian",
        "id": "1",
        "": null
    },
    {
        "color": "#FF0001",
        "text": "Deky Soesilo",
        "id": "102",
        "": null
    },
    {
        "color": "#5CBA61",
        "text": "Deny Yuliantoro",
        "id": "50",
        "": null
    },
    {
        "color": "#5CBA62",
        "text": "Dery Darmawan",
        "id": "51",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Dessy Estuningsih",
        "id": "22",
        "": null
    },
    {
        "color": "#5CBA63",
        "text": "Dian Iskandar",
        "id": "52",
        "": null
    },
    {
        "color": "#5CBA64",
        "text": "Dian Perdhana",
        "id": "53",
        "": null
    },
    {
        "color": "#3B6D88",
        "text": "Dimas Septiandri",
        "id": "91",
        "": null
    },
    {
        "color": "#9A2B93",
        "text": "Dirgo Honnesa",
        "id": "2",
        "": null
    },
    {
        "color": "#A53D100",
        "text": "Dito Kurniawan",
        "id": "73",
        "": null
    },
    {
        "color": "#9A2B94",
        "text": "Donna Astuti",
        "id": "3",
        "": null
    },
    {
        "color": "#D2D4D6",
        "text": "Dwi Novita",
        "id": "79",
        "": "8"
    },
    {
        "color": "#3B6D89",
        "text": "Eko Irianto",
        "id": "92",
        "": null
    },
    {
        "color": "#5CBA65",
        "text": "Eko Sulistiyo",
        "id": "54",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Erni",
        "id": "37",
        "": null
    },
    {
        "color": "#9A2B95",
        "text": "Erwin Widiarto",
        "id": "4",
        "": null
    },
    {
        "color": "#5CBA66",
        "text": "Fajar Nugroho",
        "id": "55",
        "": "6"
    },
    {
        "color": "#D2D4D7",
        "text": "Fani Nurfitriati",
        "id": "80",
        "": null
    },
    {
        "color": "#D2D4D8",
        "text": "Fitri Yuningsih",
        "id": "81",
        "": null
    },
    {
        "color": "#5CBA67",
        "text": "Fransiska Amalia",
        "id": "56",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "FX Bayu Triguno",
        "id": "23",
        "": null
    },
    {
        "color": "#D2D4D9",
        "text": "FX Herwindra S",
        "id": "82",
        "": null
    },
    {
        "color": "#D2D4D10",
        "text": "Gilang Herdinanta",
        "id": "83",
        "": null
    },
    {
        "color": "#FF0002",
        "text": "Giovany Wihelmina",
        "id": "103",
        "": null
    },
    {
        "color": "#9A2B96",
        "text": "Hendra Ilham",
        "id": "5",
        "": null
    },
    {
        "color": "#EE3293",
        "text": "Hendra Utama",
        "id": "29",
        "": null
    },
    {
        "color": "#9A2B97",
        "text": "Hendri Yadi",
        "id": "6",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Hengki",
        "id": "38",
        "": null
    },
    {
        "color": "#FF0003",
        "text": "Herlina",
        "id": "104",
        "": null
    },
    {
        "color": "#9A2B98",
        "text": "Hidayat Rusanda",
        "id": "7",
        "": null
    },
    {
        "color": "#9A2B99",
        "text": "Husnil Qadri",
        "id": "8",
        "": null
    },
    {
        "color": "#EE3294",
        "text": "Iman Rismawan",
        "id": "30",
        "": null
    },
    {
        "color": "#D2D4D11",
        "text": "Ismi Hidayatur",
        "id": "84",
        "": null
    },
    {
        "color": "#5CBA68",
        "text": "Jofinus Halim",
        "id": "57",
        "": null
    },
    {
        "color": "#D2D4D12",
        "text": "Johannes Ricky",
        "id": "85",
        "": null
    },
    {
        "color": "#EE3295",
        "text": "Jony Nus",
        "id": "31",
        "": null
    },
    {
        "color": "#3B6D90",
        "text": "Karina Putri",
        "id": "93",
        "": null
    },
    {
        "color": "#5CBA69",
        "text": "Kiki Krisnawati",
        "id": "58",
        "": null
    },
    {
        "color": "#9A2B100",
        "text": "Lampita Barutu",
        "id": "9",
        "": null
    },
    {
        "color": "#EE3296",
        "text": "Lidya Christie",
        "id": "32",
        "": null
    },
    {
        "color": "#3B6D91",
        "text": "Lilia Wati",
        "id": "94",
        "": null
    },
    {
        "color": "#9A2B101",
        "text": "Lutviani Aulia",
        "id": "10",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Maria Anne",
        "id": "39",
        "": "4"
    },
    {
        "color": "#A53D101",
        "text": "Marthin Golto",
        "id": "74",
        "": null
    },
    {
        "color": "#3B6D92",
        "text": "Mela Oktavia",
        "id": "95",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Minetta Roselani",
        "id": "40",
        "": null
    },
    {
        "color": "#3B6D93",
        "text": "Mochamad Dede",
        "id": "96",
        "": null
    },
    {
        "color": "#EE3297",
        "text": "Mochammad Tirta",
        "id": "33",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Muh Hasiruddin",
        "id": "41",
        "": null
    },
    {
        "color": "#3B6D94",
        "text": "Muhammad Azis",
        "id": "97",
        "": null
    },
    {
        "color": "#3B6D95",
        "text": "Muhammad Sholikin",
        "id": "98",
        "": null
    },
    {
        "color": "#EE3298",
        "text": "Novi Maryanti",
        "id": "34",
        "": null
    },
    {
        "color": "#3B6D96",
        "text": "Novielly",
        "id": "99",
        "": null
    },
    {
        "color": "#D2D4D13",
        "text": "Olyvia",
        "id": "86",
        "": null
    },
    {
        "color": "#EE3299",
        "text": "Pandu Perdana",
        "id": "35",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Rahman Effendi",
        "id": "24",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Rahman Torkis",
        "id": "25",
        "": null
    },
    {
        "color": "#9A2B102",
        "text": "Ramadina Putri",
        "id": "11",
        "": null
    },
    {
        "color": "#FF0004",
        "text": "Ramos Rialdo",
        "id": "105",
        "": null
    },
    {
        "color": "#9A2B103",
        "text": "Retno Dwi",
        "id": "12",
        "": null
    },
    {
        "color": "#A53D102",
        "text": "Revelino Jerincho",
        "id": "75",
        "": null
    },
    {
        "color": "#D2D4D14",
        "text": "Rian Rachmawan",
        "id": "87",
        "": null
    },
    {
        "color": "#3B6D97",
        "text": "Rias Andrika",
        "id": "100",
        "": null
    },
    {
        "color": "#A53D103",
        "text": "Rizka Yunidarini",
        "id": "76",
        "": "7"
    },
    {
        "color": "#5CBA70",
        "text": "Rizma Rosellini",
        "id": "59",
        "": null
    },
    {
        "color": "#9A2B104",
        "text": "Rizqi Aji",
        "id": "13",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Rohadih",
        "id": "42",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Romi",
        "id": "43",
        "": null
    },
    {
        "color": "#EEAF2F",
        "text": "Ronny Haryadi",
        "id": "26",
        "": null
    },
    {
        "color": "#3577BB",
        "text": "Rudy Gunawan",
        "id": "69",
        "": null
    },
    {
        "color": "#5CBA71",
        "text": "Rully Kurniawan",
        "id": "60",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Sandi Jua",
        "id": "44",
        "": null
    },
    {
        "color": "#5CBA72",
        "text": "Sempurna Purba",
        "id": "61",
        "": null
    },
    {
        "color": "#A53D104",
        "text": "Sony Dwi",
        "id": "77",
        "": null
    },
    {
        "color": "#9A2B105",
        "text": "Sony Manggala",
        "id": "14",
        "": null
    },
    {
        "color": "#5CBA73",
        "text": "Stefanny Lowendo",
        "id": "62",
        "": "2"
    },
    {
        "color": "#9A2B106",
        "text": "Susanto",
        "id": "15",
        "": null
    },
    {
        "color": "#FF0005",
        "text": "Theresia Agustina",
        "id": "106",
        "": null
    },
    {
        "color": "#5CBA74",
        "text": "Thomson Haposan",
        "id": "63",
        "": null
    },
    {
        "color": "#3577BB",
        "text": "Veramutia Dahlan",
        "id": "70",
        "": null
    },
    {
        "color": "#5CBA75",
        "text": "Vicky Agus",
        "id": "64",
        "": null
    },
    {
        "color": "#9A2B107",
        "text": "Vivan Ulva",
        "id": "16",
        "": null
    },
    {
        "color": "#5CBA76",
        "text": "Weningtyas Galuh",
        "id": "65",
        "": null
    },
    {
        "color": "#9A2B108",
        "text": "Yayan Taryana",
        "id": "17",
        "": null
    },
    {
        "color": "#EE3300",
        "text": "Yesi Yuliana",
        "id": "36",
        "": "3"
    },
    {
        "color": "#5CBA77",
        "text": "Yosep Nugroho",
        "id": "66",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Yudhi Gunawan",
        "id": "45",
        "": null
    },
    {
        "color": "#D2D4D15",
        "text": "Yudi Maulana",
        "id": "88",
        "": "9"
    },
    {
        "color": "#3577BB",
        "text": "Yuli Nurjanah",
        "id": "71",
        "": null
    },
    {
        "color": "#142E5F",
        "text": "Zaelani Thaha",
        "id": "46",
        "": null
    }
],
      isSpinning: false,
      defaultWinner: 49,

      sounds: {
        won: wonSound,
        spinButtonClick: clickSound,
        spinButtonHover: hoverSound,
        spinButtonLeave: leaveSound,
        spinning: spinningSound,
      },
      cursorImage,
      cursorAngle: 0,
      cursorPosition: "edge",
      cursorDistance: -40,
      shiningDotsColor: "#ffffff",
      shiningDotsShineColor: "#ffd800",
      shiningDotsBorderColor: "#1e254c",
      shiningDotsBorderWidth: 30,
      shiningDotsSize: 8,
      shiningDotsCount: 80,
    };
  },
  watch: {
    slices: {
      handler() {
        this.$refs.spinner.drawWheel();
      },
      deep: true,
    },
    shiningDotsBorderWidth() {
      this.$refs.spinner.drawWheel();
    },
  },
  methods: {
    playAudio(audio) {
      if (audio) {
        audio.volume = 0.5;
        audio.play();
      }
    },
    handleSpinButtonClick() {
      if (this.buttonClickAudio) {
        this.playAudio(this.buttonClickAudio);
      }
      this.$refs.spinner.spinWheel(this.defaultWinner);
    },
    handleSpinButtonHover() {
      if (this.buttonHoverAudio) {
        this.playAudio(this.buttonHoverAudio);
      }
    },
    handleSpinButtonLeave() {
      if (this.buttonLeaveAudio) {
        this.playAudio(this.buttonLeaveAudio);
      }
    },
    handleCursorPositionChange() {
      if (this.cursorPosition === "center") {
        if (!this.cursorDistance) {
          this.cursorDistance = 50;
        }
      } else {
        this.cursorDistance = 0;
      }
    },
    spinFor(index) {
      this.defaultWinner = index;
      this.$refs.spinner.spinWheel(index);
    },
    spinRandom() {
      const randomSlice = Math.floor(Math.random() * this.slices.length);
      this.$refs.spinner.spinWheel(randomSlice);
    },
    onSpinStart() {
      this.winnerResult = null;
      this.isSpinning = true;
    },
    onSpinEnd(winnerIndex) {
      this.isSpinning = false;
      this.winnerResult = this.slices[winnerIndex];
    },
  },
  mounted() {
    this.buttonHoverAudio = new Audio(hoverSound);
    this.buttonLeaveAudio = new Audio(leaveSound);
    this.buttonClickAudio = new Audio(clickSound);
  },
};
</script>

<style>
.modalx {
  padding: 20px;
  padding-top: 20%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.836);
  z-index: 13;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Default state (hidden) */
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);
  
  /* Animation setup */
  animation: showModal 0.1s ease-in-out 0.5s forwards; /* 2s delay */
}

@keyframes showModal {
  to {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
}

.bd-radi {
  border-radius: 1rem;
  overflow: hidden;
}


.cursor-img {
  width: 50px;
  aspect-ratio: 1 / 1;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.19));
}

.spin-button {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  font-size: 20px;
  cursor: pointer;
  background: #eb4d4b;
  border-radius: 50%;
  transition: all 150ms;
  border: 10px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white !important;
  box-shadow: inset -3px -3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
  z-index: 11;
  position: relative;
  user-select: none;

  &:hover {
    box-shadow: inset -5px -5px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
  }

  &:active {
    box-shadow: inset 3px 3px 2px 2px rgba(0, 0, 0, 0.19), 3px 3px 2px 2px rgba(0, 0, 0, 0.19);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    pointer-events: none;
  }

}
</style>