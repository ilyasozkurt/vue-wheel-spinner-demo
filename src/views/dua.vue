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
                      <RouterLink to="/dua" class="text-white">Simpan & Putar Kembali</RouterLink>
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
        "color": "FINANCE",
        "text": "Abu Muzoffar",
        "data": "0"
    },
    {
        "color": "IT",
        "text": "Agus Budi",
        "data": "1"
    },
    {
        "color": "MARKETING",
        "text": "Agus Susanto",
        "data": "2"
    },
    {
        "color": "PLANNING",
        "text": "Akmal",
        "data": "3"
    },
    {
        "color": "PLANNING",
        "text": "Alexander Rumawas",
        "data": "4"
    },
    {
        "color": "CREDIT",
        "text": "Alvio Fiorrie",
        "data": "5"
    },
    {
        "color": "COLLECTION",
        "text": "Andarto",
        "data": "6"
    },
    {
        "color": "MKT CAR",
        "text": "Andree Cresenda",
        "data": "7"
    },
    {
        "color": "CREDIT",
        "text": "Andrew Christian",
        "data": "8"
    },
    {
        "color": "FINANCE",
        "text": "Andri Purba",
        "data": "9"
    },
    {
        "color": "IT",
        "text": "Aspri Sigit",
        "data": "10"
    },
    {
        "color": "IT",
        "text": "Asrul Fadillah",
        "data": "11"
    },
    {
        "color": "CREDIT",
        "text": "Avrillia Ika",
        "data": "12"
    },
    {
        "color": "MARKETING",
        "text": "Bramanti Dwi",
        "data": "13"
    },
    {
        "color": "CREDIT",
        "text": "Cahyo Yudyono",
        "data": "14"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Christin Melinda",
        "data": "15"
    },
    {
        "color": "COLLECTION",
        "text": "David Febrian",
        "data": "16"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Deky Soesilo",
        "data": "17"
    },
    {
        "color": "IT",
        "text": "Deny Yuliantoro",
        "data": "18"
    },
    {
        "color": "IT",
        "text": "Dery Darmawan",
        "data": "19"
    },
    {
        "color": "CREDIT",
        "text": "Dessy Estuningsih",
        "data": "20"
    },
    {
        "color": "IT",
        "text": "Dian Iskandar",
        "data": "21"
    },
    {
        "color": "IT",
        "text": "Dian Perdhana",
        "data": "22"
    },
    {
        "color": "PLANNING",
        "text": "Dimas Septiandri",
        "data": "23"
    },
    {
        "color": "COLLECTION",
        "text": "Dirgo Honnesa",
        "data": "24"
    },
    {
        "color": "MKT CAR",
        "text": "Dito Kurniawan",
        "data": "25"
    },
    {
        "color": "COLLECTION",
        "text": "Donna Astuti",
        "data": "26"
    },
    {
        "color": "PLANNING",
        "text": "Eko Irianto",
        "data": "27"
    },
    {
        "color": "IT",
        "text": "Eko Sulistiyo",
        "data": "28"
    },
    {
        "color": "HRD",
        "text": "Erni",
        "data": "29"
    },
    {
        "color": "COLLECTION",
        "text": "Erwin Widiarto",
        "data": "30"
    },
    {
        "color": "IT",
        "text": "Fajar Nugroho",
        "data": "31"
    },
    {
        "color": "IT",
        "text": "Fransiska Amalia",
        "data": "32"
    },
    {
        "color": "CREDIT",
        "text": "FX Bayu Triguno",
        "data": "33"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Giovany Wihelmina",
        "data": "34"
    },
    {
        "color": "COLLECTION",
        "text": "Hendra Ilham",
        "data": "35"
    },
    {
        "color": "FINANCE",
        "text": "Hendra Utama",
        "data": "36"
    },
    {
        "color": "COLLECTION",
        "text": "Hendri Yadi",
        "data": "37"
    },
    {
        "color": "HRD",
        "text": "Hengki",
        "data": "38"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Herlina",
        "data": "39"
    },
    {
        "color": "COLLECTION",
        "text": "Hidayat Rusanda",
        "data": "40"
    },
    {
        "color": "COLLECTION",
        "text": "Husnil Qadri",
        "data": "41"
    },
    {
        "color": "FINANCE",
        "text": "Iman Rismawan",
        "data": "42"
    },
    {
        "color": "IT",
        "text": "Jofinus Halim",
        "data": "43"
    },
    {
        "color": "FINANCE",
        "text": "Jony Nus",
        "data": "44"
    },
    {
        "color": "PLANNING",
        "text": "Karina Putri",
        "data": "45"
    },
    {
        "color": "IT",
        "text": "Kiki Krisnawati",
        "data": "46"
    },
    {
        "color": "COLLECTION",
        "text": "Lampita Barutu",
        "data": "47"
    },
    {
        "color": "FINANCE",
        "text": "Lidya Christie",
        "data": "48"
    },
    {
        "color": "PLANNING",
        "text": "Lilia Wati",
        "data": "49"
    },
    {
        "color": "COLLECTION",
        "text": "Lutviani Aulia",
        "data": "50"
    },
    {
        "color": "HRD",
        "text": "Maria Anne",
        "data": "51"
    },
    {
        "color": "MKT CAR",
        "text": "Marthin Golto",
        "data": "52"
    },
    {
        "color": "PLANNING",
        "text": "Mela Oktavia",
        "data": "53"
    },
    {
        "color": "HRD",
        "text": "Minetta Roselani",
        "data": "54"
    },
    {
        "color": "PLANNING",
        "text": "Mochamad Dede",
        "data": "55"
    },
    {
        "color": "FINANCE",
        "text": "Mochammad Tirta",
        "data": "56"
    },
    {
        "color": "HRD",
        "text": "Muh Hasiruddin",
        "data": "57"
    },
    {
        "color": "PLANNING",
        "text": "Muhammad Azis",
        "data": "58"
    },
    {
        "color": "PLANNING",
        "text": "Muhammad Sholikin",
        "data": "59"
    },
    {
        "color": "FINANCE",
        "text": "Novi Maryanti",
        "data": "60"
    },
    {
        "color": "PLANNING",
        "text": "Novielly",
        "data": "61"
    },
    {
        "color": "FINANCE",
        "text": "Pandu Perdana",
        "data": "62"
    },
    {
        "color": "CREDIT",
        "text": "Rahman Effendi",
        "data": "63"
    },
    {
        "color": "CREDIT",
        "text": "Rahman Torkis",
        "data": "64"
    },
    {
        "color": "COLLECTION",
        "text": "Ramadina Putri",
        "data": "65"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Ramos Rialdo",
        "data": "66"
    },
    {
        "color": "COLLECTION",
        "text": "Retno Dwi",
        "data": "67"
    },
    {
        "color": "MKT CAR",
        "text": "Revelino Jerincho",
        "data": "68"
    },
    {
        "color": "PLANNING",
        "text": "Rias Andrika",
        "data": "69"
    },
    {
        "color": "MKT CAR",
        "text": "Rizka Yunidarini",
        "data": "70"
    },
    {
        "color": "IT",
        "text": "Rizma Rosellini",
        "data": "71"
    },
    {
        "color": "COLLECTION",
        "text": "Rizqi Aji",
        "data": "72"
    },
    {
        "color": "HRD",
        "text": "Rohadih",
        "data": "73"
    },
    {
        "color": "HRD",
        "text": "Romi",
        "data": "74"
    },
    {
        "color": "CREDIT",
        "text": "Ronny Haryadi",
        "data": "75"
    },
    {
        "color": "MARKETING",
        "text": "Rudy Gunawan",
        "data": "76"
    },
    {
        "color": "IT",
        "text": "Rully Kurniawan",
        "data": "77"
    },
    {
        "color": "HRD",
        "text": "Sandi Jua",
        "data": "78"
    },
    {
        "color": "IT",
        "text": "Sempurna Purba",
        "data": "79"
    },
    {
        "color": "MKT CAR",
        "text": "Sony Dwi",
        "data": "80"
    },
    {
        "color": "COLLECTION",
        "text": "Sony Manggala",
        "data": "81"
    },
    {
        "color": "IT",
        "text": "Stefanny Lowendo",
        "data": "82"
    },
    {
        "color": "COLLECTION",
        "text": "Susanto",
        "data": "83"
    },
    {
        "color": "RISK MANAGEMENT",
        "text": "Theresia Agustina",
        "data": "84"
    },
    {
        "color": "IT",
        "text": "Thomson Haposan",
        "data": "85"
    },
    {
        "color": "MARKETING",
        "text": "Veramutia Dahlan",
        "data": "86"
    },
    {
        "color": "IT",
        "text": "Vicky Agus",
        "data": "87"
    },
    {
        "color": "COLLECTION",
        "text": "Vivan Ulva",
        "data": "88"
    },
    {
        "color": "IT",
        "text": "Weningtyas Galuh",
        "data": "89"
    },
    {
        "color": "COLLECTION",
        "text": "Yayan Taryana",
        "data": "90"
    },
    {
        "color": "FINANCE",
        "text": "Yesi Yuliana",
        "data": "91"
    },
    {
        "color": "IT",
        "text": "Yosep Nugroho",
        "data": "92"
    },
    {
        "color": "HRD",
        "text": "Yudhi Gunawan",
        "data": "93"
    },
    {
        "color": "MARKETING",
        "text": "Yuli Nurjanah",
        "data": "94"
    },
    {
        "color": "HRD",
        "text": "Zaelani Thaha",
        "data": "95"
    }
],
        isSpinning: false,
        defaultWinner: 91,
  
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