<template>
  <div class="row">
    <div class="col-sm-9 mx-auto">
      <ShiningDots :color="shiningDotsColor" :border-color="shiningDotsBorderColor" :shine-color="shiningDotsShineColor"
        :border-width="shiningDotsBorderWidth" :size="shiningDotsSize" :count="shiningDotsCount">

        <VueWheelSpinner ref="spinner" :slices="slices" :winner-index="defaultWinner" :sounds="sounds"
          :cursor-angle="cursorAngle" :cursor-position="cursorPosition" :cursor-distance="cursorDistance"
          @spin-start="onSpinStart" @spin-end="onSpinEnd">

          <template #cursor>
            <img class="cursor-img" :class="{ bounce: isBouncing }" :src="cursorImage" alt="Cursor">
          </template>

          <template #default>
            <button class="spin-button" :disabled="isSpinning" @click="spinFor(defaultWinner)">
              <span style="font-size: 32px; font-weight: 600;">↻</span>
            </button>
          </template>
        </VueWheelSpinner>
      </ShiningDots>
      <div>
        <div class="fs-2 text-center">
          <div v-if="winnerResult">
            <div class="modalx">
              <ConfettiExplosion :particleCount="500" :force="0.3" :duration="8000" />
              <div class=" card w-50 mx-auto text-center bd-radi ">
                <div class="bg-primary text-white p-2">
                  <h4>PHOENIX PRESENTER</h4>
                </div>
                <div class="card-body p-4">
                  <h1 class="card-title text-primary">🎉 {{ winnerResult.text }} 🎉</h1>
                  <br>
                  <button type="button" class="btn mx-auto btn-primary text-white">
                    <RouterLink
                      to="/services/randomnamepicker/uniqueidentifier/xyz9876543/generator/chooseyourwinner/selectrandomly/tiga"
                      class="text-white">Simpan & Putar Kembali</RouterLink>
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
      slices: [
        {
          "color": "#EE3291",
          "text": "Abu Muzoffar"
        },
        {
          "color": "#5CBA58",
          "text": "Agus Budi"
        },
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
          "color": "#9A2B91",
          "text": "Andarto"
        },
        {
          "color": "#D4D4D1",
          "text": "Andree Cresenda"
        },
        {
          "color": "#EEAF2F",
          "text": "Andrew Christian"
        },
        {
          "color": "#EE3291",
          "text": "Andri Purba"
        },
        {
          "color": "#5CBA58",
          "text": "Aspri Sigit"
        },
        {
          "color": "#5CBA58",
          "text": "Asrul Fadillah"
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
          "color": "#FF0000",
          "text": "Christin Melinda"
        },
        {
          "color": "#9A2B91",
          "text": "David Febrian"
        },
        {
          "color": "#FF0000",
          "text": "Deky Soesilo"
        },
        {
          "color": "#5CBA58",
          "text": "Deny Yuliantoro"
        },
        {
          "color": "#EEAF2F",
          "text": "Dessy Estuningsih"
        },
        {
          "color": "#5CBA58",
          "text": "Dian Iskandar"
        },
        {
          "color": "#5CBA58",
          "text": "Dian Perdhana"
        },
        {
          "color": "#3B6D86",
          "text": "Dimas Septiandri"
        },
        {
          "color": "#9A2B91",
          "text": "Dirgo Honnesa"
        },
        {
          "color": "#D4D4D1",
          "text": "Dito Kurniawan"
        },
        {
          "color": "#9A2B91",
          "text": "Donna Astuti"
        },
        {
          "color": "#3B6D86",
          "text": "Eko Irianto"
        },
        {
          "color": "#5CBA58",
          "text": "Eko Sulistiyo"
        },
        {
          "color": "#142E5F",
          "text": "Erni"
        },
        {
          "color": "#9A2B91",
          "text": "Erwin Widiarto"
        },
        {
          "color": "#5CBA58",
          "text": "Fajar Nugroho"
        },
        {
          "color": "#5CBA58",
          "text": "Fransiska Amalia"
        },
        {
          "color": "#EEAF2F",
          "text": "FX Bayu Triguno"
        },
        {
          "color": "#FF0000",
          "text": "Giovany Wihelmina"
        },
        {
          "color": "#9A2B91",
          "text": "Hendra Ilham"
        },
        {
          "color": "#EE3291",
          "text": "Hendra Utama"
        },
        {
          "color": "#9A2B91",
          "text": "Hendri Yadi"
        },
        {
          "color": "#142E5F",
          "text": "Hengki"
        },
        {
          "color": "#FF0000",
          "text": "Herlina"
        },
        {
          "color": "#9A2B91",
          "text": "Hidayat Rusanda"
        },
        {
          "color": "#9A2B91",
          "text": "Husnil Qadri"
        },
        {
          "color": "#EE3291",
          "text": "Iman Rismawan"
        },
        {
          "color": "#5CBA58",
          "text": "Jofinus Halim"
        },
        {
          "color": "#EE3291",
          "text": "Jony Nus"
        },
        {
          "color": "#3B6D86",
          "text": "Karina Putri"
        },
        {
          "color": "#5CBA58",
          "text": "Kiki Krisnawati"
        },
        {
          "color": "#9A2B91",
          "text": "Lampita Barutu"
        },
        {
          "color": "#EE3291",
          "text": "Lidya Christie"
        },
        {
          "color": "#3B6D86",
          "text": "Lilia Wati"
        },
        {
          "color": "#9A2B91",
          "text": "Lutviani Aulia"
        },
        {
          "color": "#142E5F",
          "text": "Maria Anne"
        },
        {
          "color": "#D4D4D1",
          "text": "Marthin Golto"
        },
        {
          "color": "#3B6D86",
          "text": "Mela Oktavia"
        },
        {
          "color": "#142E5F",
          "text": "Minetta Roselani"
        },
        {
          "color": "#3B6D86",
          "text": "Mochamad Dede"
        },
        {
          "color": "#EE3291",
          "text": "Mochammad Tirta"
        },
        {
          "color": "#142E5F",
          "text": "Muh Hasiruddin"
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
          "color": "#EE3291",
          "text": "Novi Maryanti"
        },
        {
          "color": "#3B6D86",
          "text": "Novielly"
        },
        {
          "color": "#EE3291",
          "text": "Pandu Perdana"
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
          "color": "#9A2B91",
          "text": "Ramadina Putri"
        },
        {
          "color": "#FF0000",
          "text": "Ramos Rialdo"
        },
        {
          "color": "#9A2B91",
          "text": "Retno Dwi"
        },
        {
          "color": "#D4D4D1",
          "text": "Revelino Jerincho"
        },
        {
          "color": "#3B6D86",
          "text": "Rias Andrika"
        },
        {
          "color": "#D4D4D1",
          "text": "Rizka Yunidarini"
        },
        {
          "color": "#5CBA58",
          "text": "Rizma Rosellini"
        },
        {
          "color": "#9A2B91",
          "text": "Rizqi Aji"
        },
        {
          "color": "#142E5F",
          "text": "Rohadih"
        },
        {
          "color": "#142E5F",
          "text": "Romi"
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
          "color": "#5CBA58",
          "text": "Rully Kurniawan"
        },
        {
          "color": "#142E5F",
          "text": "Sandi Jua"
        },
        {
          "color": "#5CBA58",
          "text": "Sempurna Purba"
        },
        {
          "color": "#D4D4D1",
          "text": "Sony Dwi"
        },
        {
          "color": "#9A2B91",
          "text": "Sony Manggala"
        },
        {
          "color": "#5CBA58",
          "text": "Stefanny Lowendo"
        },
        {
          "color": "#9A2B91",
          "text": "Susanto"
        },
        {
          "color": "#FF0000",
          "text": "Theresia Agustina"
        },
        {
          "color": "#5CBA58",
          "text": "Thomson Haposan"
        },
        {
          "color": "#3577BB",
          "text": "Veramutia Dahlan"
        },
        {
          "color": "#5CBA58",
          "text": "Vicky Agus"
        },
        {
          "color": "#5CBA58",
          "text": "Viqih Ayudya"
        },
        {
          "color": "#9A2B91",
          "text": "Vivan Ulva"
        },
        {
          "color": "#5CBA58",
          "text": "Weningtyas Galuh"
        },
        {
          "color": "#9A2B91",
          "text": "Yayan Taryana"
        },
        {
          "color": "#EE3291",
          "text": "Yesi Yuliana"
        },
        {
          "color": "#5CBA58",
          "text": "Yosep Nugroho"
        },
        {
          "color": "#142E5F",
          "text": "Yudhi Gunawan"
        },
        {
          "color": "#3577BB",
          "text": "Yuli Nurjanah"
        },
        {
          "color": "#142E5F",
          "text": "Zaelani Thaha"
        }
      ],
      winnerResult: null,
      isSpinning: false,
      defaultWinner: 91,
      isBouncing: false,
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
      shiningDotsColor: "white",
      shiningDotsShineColor: "yellow",
      shiningDotsBorderColor: "#1e254c",
      shiningDotsBorderWidth: 30,
      shiningDotsSize: 12,
      shiningDotsCount: 20,
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
      const cursorImg = document.querySelector('.cursor-img');

      // Tambahkan penundaan 1 detik sebelum memulai animasi
      setTimeout(() => {
        if (cursorImg) {
          cursorImg.classList.add('bounce'); // Mulai animasi goyang
        }

        // Setelah 10 detik, tambahkan kelas 'stop'
        setTimeout(() => {
          if (cursorImg) {
            cursorImg.classList.remove('bounce'); // Hentikan animasi goyang

          }
        }, 10000); // 10000 ms = 10 detik
      }, 1000); // 1000 ms = 1 detik
    },
    onSpinEnd(winnerIndex) {
      this.isSpinning = false;
      this.winnerResult = this.slices[winnerIndex];
      const cursorImg = document.querySelector('.cursor-img');
      if (cursorImg) {
        cursorImg.classList.remove('stop');
      }
    },
  },
  mounted() {
    this.buttonHoverAudio = new Audio(hoverSound);
    this.buttonLeaveAudio = new Audio(leaveSound);
    this.buttonClickAudio = new Audio(clickSound);
  },
};
</script>

<style></style>
