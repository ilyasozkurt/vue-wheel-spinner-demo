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

                <div class=" card w-50 mx-auto text-center bd-radi ">
                  <div class="bg-primary text-white p-2">
                    <h4>Peserta Terpilih</h4>
                  </div>
                  <div class="card-body p-4">
                    <h1 class="card-title text-primary">🎉 {{ winnerResult.text }} 🎉</h1>
                     <br>
                    <button type="button" class="btn mx-auto btn-primary text-white">
                      <RouterLink to="/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/sembilan" class="text-white">Simpan & Putar Kembali</RouterLink>
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
        "color": "#3577BB",
        "text": "Agus Susanto"
    },
{
        "color": "#3B6D86",
        "text": "Akmal"
    },
{
        "color": "#3B6D86",
        "text": "Alexander Rumawas"
    },
{
        "color": "#EEAF2F",
        "text": "Alvio Fiorrie"
    },
{
        "color": "#EEAF2F",
        "text": "Andrew Christian"
    },
{
        "color": "#EEAF2F",
        "text": "Avrillia Ika"
    },
    {
        "color": "#3577BB",
        "text": "Bramanti Dwi"
    },
{
        "color": "#EEAF2F",
        "text": "Cahyo Yudyono"
    },
{
        "color": "#EEAF2F",
        "text": "Dessy Estuningsih"
    },
{
        "color": "#3B6D86",
        "text": "Dimas Septiandri"
    },
{
        "color": "#3B6D86",
        "text": "Eko Irianto"
    },
{
        "color": "#EEAF2F",
        "text": "FX Bayu Triguno"
    },
{
        "color": "#3B6D86",
        "text": "Karina Putri"
    },
{
        "color": "#3B6D86",
        "text": "Lilia Wati"
    },
{
        "color": "#3B6D86",
        "text": "Mela Oktavia"
    },
{
        "color": "#3B6D86",
        "text": "Mochamad Dede"
    },
{
        "color": "#3B6D86",
        "text": "Muhammad Azis"
    },
{
        "color": "#3B6D86",
        "text": "Muhammad Sholikin"
    },
{
        "color": "#3B6D86",
        "text": "Novielly"
    },
{
        "color": "#EEAF2F",
        "text": "Rahman Effendi"
    },
{
        "color": "#EEAF2F",
        "text": "Rahman Torkis"
    },
{
        "color": "#3B6D86",
        "text": "Rias Andrika"
    },
{
        "color": "#EEAF2F",
        "text": "Ronny Haryadi"
    },
    {
        "color": "#3577BB",
        "text": "Rudy Gunawan"
    },
    {
        "color": "#3577BB",
        "text": "Veramutia Dahlan"
    },
    {
        "color": "#3577BB",
        "text": "Yuli Nurjanah"
    }
],
        isSpinning: false,
        defaultWinner: 16,
  
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