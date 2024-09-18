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
              <div class="modalx">
                <div class=" card w-50 mx-auto text-center bd-radi ">
                  <div class="bg-primary text-white p-2">
                    <h4>Peserta Terpilih</h4>
                  </div>
                  <div class="card-body p-4">
                    <h1 class="card-title text-primary">🎉 {{ winnerResult.text }} 🎉</h1>
                     <br>
                    <button type="button" class="btn mx-auto btn-primary text-white">
                      <RouterLink to="/sepuluh" class="text-white">Simpan & Putar Kembali</RouterLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="isSpinning">
              Spinning...
            </div>
           
          </div>
  
        </div>
      </div>
  
  
      <!-- <div class="col-sm-4 p-3">
        <h3 class=" mt-6" style="padding-top: 40px;">Daftar Nama Terpilih:</h3>
        <div class="card p-4 bg-light">
  
          <div v-for="item in menang" class="alert alert-primary" :style="item.color" role="alert">
            {{ item.id }}. <strong> {{ item.text }}</strong> | {{ item.direktorat }}
          </div>
  
        </div>
  
      </div> -->
    </div>
  
  </template>
  <script>
  import VueWheelSpinner from "@/components/VueWheelSpinner.vue";
  import "bootstrap/js/src/dropdown.js";
  
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
    },
    data() {
      return {
        menang: [
          {
            "direktorat": "COLLECTION",
            "color": "opacity: 100%; background-color: #9A2B91; color: white;",
            "text": "Lampita Barutu",
            "weight": "1",
            "labelColor": "#fff",
            "id": "0"
          },
          {
            "direktorat": "CREDIT",
            "color": "opacity: 100%; background-color: #EEAF2F;",
            "text": "Rahman Torkis",
            "weight": "1",
            "labelColor": "#fff",
            "id": "1"
          },
          {
            "direktorat": "HRD",
            "color": "opacity: 100%; background-color: #142E5F;  color: white;",
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
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Ismi Hidayatur",
        "weight": "1",
        "labelColor": "#fff",
        "id": "51"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "jhjhgjh far",
        "weight": "0",
        "labelColor": "#fff",
        "id": "2"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Agus Budi",
        "weight": "0",
        "labelColor": "#fff",
        "id": "3"
    },
    {
        "direktorat": "MARKETING",
        "color": "#3577BB",
        "text": "Agus Susanto",
        "weight": "0",
        "labelColor": "#fff",
        "id": "4"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Akmal",
        "weight": "0",
        "labelColor": "#fff",
        "id": "5"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Alexander Rumawas",
        "weight": "0",
        "labelColor": "#fff",
        "id": "6"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Andree Cresenda",
        "weight": "0",
        "labelColor": "#fff",
        "id": "9"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Andri Purba",
        "weight": "0",
        "labelColor": "#fff",
        "id": "11"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Aspri Sigit",
        "weight": "0",
        "labelColor": "#fff",
        "id": "12"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Asrul Fadillah",
        "weight": "0",
        "labelColor": "#fff",
        "id": "13"
    },
    {
        "direktorat": "MARKETING",
        "color": "#3577BB",
        "text": "Bramanti Dwi",
        "weight": "0",
        "labelColor": "#fff",
        "id": "15"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Christin Melinda",
        "weight": "0",
        "labelColor": "#fff",
        "id": "17"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Chynthia Dewi",
        "weight": "0",
        "labelColor": "#fff",
        "id": "18"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Deky Soesilo",
        "weight": "0",
        "labelColor": "#fff",
        "id": "20"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Deny Yuliantoro",
        "weight": "0",
        "labelColor": "#fff",
        "id": "21"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Dery Darmawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "22"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Dian Iskandar",
        "weight": "0",
        "labelColor": "#fff",
        "id": "24"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Dian Perdhana",
        "weight": "0",
        "labelColor": "#fff",
        "id": "25"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Dimas Septiandri",
        "weight": "0",
        "labelColor": "#fff",
        "id": "26"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Dito Kurniawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "28"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Dwi Novita",
        "weight": "0",
        "labelColor": "#fff",
        "id": "30"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Eko Irianto",
        "weight": "0",
        "labelColor": "#fff",
        "id": "31"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Eko Sulistiyo",
        "weight": "0",
        "labelColor": "#fff",
        "id": "32"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Fajar Nugroho",
        "weight": "0",
        "labelColor": "#fff",
        "id": "35"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Fani Nurfitriati",
        "weight": "0",
        "labelColor": "#fff",
        "id": "36"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Fitri Yuningsih",
        "weight": "0",
        "labelColor": "#fff",
        "id": "37"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Fransiska Amalia",
        "weight": "0",
        "labelColor": "#fff",
        "id": "38"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "FX Herwindra S",
        "weight": "0",
        "labelColor": "#fff",
        "id": "40"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Gilang Herdinanta",
        "weight": "0",
        "labelColor": "#fff",
        "id": "41"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Giovany Wihelmina",
        "weight": "0",
        "labelColor": "#fff",
        "id": "42"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Hendra Utama",
        "weight": "0",
        "labelColor": "#fff",
        "id": "44"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Herlina",
        "weight": "0",
        "labelColor": "#fff",
        "id": "47"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Iman Rismawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "50"
    },
   
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Jofinus Halim",
        "weight": "0",
        "labelColor": "#fff",
        "id": "52"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Johannes Ricky",
        "weight": "0",
        "labelColor": "#fff",
        "id": "53"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Jony Nus",
        "weight": "0",
        "labelColor": "#fff",
        "id": "54"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Karina Putri",
        "weight": "0",
        "labelColor": "#fff",
        "id": "55"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Kiki Krisnawati",
        "weight": "0",
        "labelColor": "#fff",
        "id": "56"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Lidya Christie",
        "weight": "0",
        "labelColor": "#fff",
        "id": "57"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Lilia Wati",
        "weight": "0",
        "labelColor": "#fff",
        "id": "58"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Marthin Golto",
        "weight": "1",
        "labelColor": "#fff",
        "id": "61"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Mela Oktavia",
        "weight": "0",
        "labelColor": "#fff",
        "id": "62"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Mochamad Dede",
        "weight": "0",
        "labelColor": "#fff",
        "id": "64"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Mochammad Tirta",
        "weight": "0",
        "labelColor": "#fff",
        "id": "65"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Muhammad Azis",
        "weight": "1",
        "labelColor": "#fff",
        "id": "67"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Muhammad Sholikin",
        "weight": "0",
        "labelColor": "#fff",
        "id": "68"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Novi Maryanti",
        "weight": "0",
        "labelColor": "#fff",
        "id": "69"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Novielly",
        "weight": "0",
        "labelColor": "#fff",
        "id": "70"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Olyvia",
        "weight": "0",
        "labelColor": "#fff",
        "id": "71"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Pandu Perdana",
        "weight": "0",
        "labelColor": "#fff",
        "id": "72"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Ramos Rialdo",
        "weight": "0",
        "labelColor": "#fff",
        "id": "75"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Randy Pilar",
        "weight": "0",
        "labelColor": "#fff",
        "id": "76"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Revelino Jerincho",
        "weight": "0",
        "labelColor": "#fff",
        "id": "78"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Rian Rachmawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "79"
    },
    {
        "direktorat": "PLANNING",
        "color": "#3B6D86",
        "text": "Rias Andrika",
        "weight": "0",
        "labelColor": "#fff",
        "id": "80"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Rizka Yunidarini",
        "weight": "0",
        "labelColor": "#fff",
        "id": "81"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Rizma Rosellini",
        "weight": "0",
        "labelColor": "#fff",
        "id": "82"
    },
    {
        "direktorat": "MARKETING",
        "color": "#3577BB",
        "text": "Rudy Gunawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "87"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Rully Kurniawan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "88"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Sempurna Purba",
        "weight": "1",
        "labelColor": "#fff",
        "id": "90"
    },
    {
        "direktorat": "MKT CAR",
        "color": "#A53D99",
        "text": "Sony Dwi",
        "weight": "0",
        "labelColor": "#fff",
        "id": "91"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Stefanny Lowendo",
        "weight": "0",
        "labelColor": "#fff",
        "id": "93"
    },
    {
        "direktorat": "RISK MANAGEMENT",
        "color": "#FF0000",
        "text": "Theresia Agustina",
        "weight": "1",
        "labelColor": "#fff",
        "id": "95"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Thomson Haposan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "96"
    },
    {
        "direktorat": "MARKETING",
        "color": "#3577BB",
        "text": "Veramutia Dahlan",
        "weight": "0",
        "labelColor": "#fff",
        "id": "97"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Vicky Agus",
        "weight": "0",
        "labelColor": "#fff",
        "id": "98"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Weningtyas Galuh",
        "weight": "0",
        "labelColor": "#fff",
        "id": "100"
    },
    {
        "direktorat": "FINANCE",
        "color": "#EE3291",
        "text": "Yesi Yuliana",
        "weight": "0",
        "labelColor": "#fff",
        "id": "102"
    },
    {
        "direktorat": "IT",
        "color": "#5CBA58",
        "text": "Yosep Nugroho",
        "weight": "0",
        "labelColor": "#fff",
        "id": "103"
    },
    {
        "direktorat": "MKT MC",
        "color": "#D2D4D5",
        "text": "Yudi Maulana",
        "weight": "0",
        "labelColor": "#fff",
        "id": "105"
    },
    {
        "direktorat": "MARKETING",
        "color": "#3577BB",
        "text": "Yuli Nurjanah",
        "weight": "1",
        "labelColor": "#fff",
        "id": "106"
    }
],
        isSpinning: false,
        defaultWinner: 13,
  
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
        cursorDistance: 0,
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
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    z-index: 13;
    align-items: center;
    justify-content: center;
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