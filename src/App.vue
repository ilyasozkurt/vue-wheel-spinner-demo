<template>

  <main class="container py-4 my-5">

    <div class="row align-content-start justify-content-around">

      <div class="col-12 text-center text-lg-start">
        <h1 class="mb-4 mb-lg-5">🎡 Vue Wheel Spinner</h1>
      </div>

      <div class="col-12 col-lg-5 order-1 order-lg-0 mt-5">

        <fieldset class="mb-4">

          <legend>Play</legend>

          <div class="mb-3">
            <label for="win_option" class="form-label">Select Winner</label>
            <div class="input-group">
              <select v-model="defaultWinner" id="win_option" :disabled="isSpinning" class="form-select">
                <option v-for="(slice, index) in slices" :value="index">
                  {{ slice.text }}
                </option>
              </select>
              <button class="btn btn-success px-4" :disabled="isSpinning" @click="spinFor(defaultWinner)">
                <span class="spinner-border spinner-border-sm me-2" v-if="isSpinning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </span>
                Spin
              </button>
            </div>
          </div>

        </fieldset>

        <fieldset class="mb-4">

          <legend>Slices</legend>

          <div class="mb-3" v-for="(slice, index) in slices">
            <div class="input-group">
              <div class="input-group-text p-0">
                <input v-model="slice.color" class="form-control form-control-color border-0" type="color">
              </div>
              <input v-model="slice.text" class="form-control" type="text">
              <div class="input-group-text p-0">
                <input v-model="slice.textColor" class="form-control form-control-color border-0" type="color">
              </div>
              <button class="btn btn-danger" @click="slices.splice(index, 1)" :disabled="isSpinning">
                <span class="spinner-border spinner-border-sm me-2" v-if="isSpinning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </span>
                Remove
              </button>
            </div>
          </div>

          <div class="text-center">
            <button class="btn btn-primary" @click="handleAddNewSlice"
                    :disabled="isSpinning">
              <span class="spinner-border spinner-border-sm me-2" v-if="isSpinning" role="status">
                <span class="visually-hidden">Loading...</span>
              </span>
              Add Slice
            </button>
          </div>

        </fieldset>

        <fieldset class="mb-4">

          <legend>Cursor</legend>

          <div class="row mb-3">
            <div class="col-6">
              <label for="cursor_angle" class="form-label">Cursor Angle</label>
              <div class="input-group">
                <input v-model="cursorAngle" id="cursor_angle" class="form-control" type="number" max="360" min="0">
                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li v-for="angle in [0, 45, 90, 135, 180, 225, 270, 315, 360]">
                    <div class="dropdown-item cursor-pointer" @click="cursorAngle = angle">{{ angle }} deg</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6">
              <label for="cursor_distance" class="form-label">Cursor Distance</label>
              <input v-model="cursorDistance" id="cursor_distance" class="form-control" type="number">
            </div>
          </div>

          <div class="mb-3">
            <label for="cursor_position" class="form-label">Cursor Position</label>
            <select v-model="cursorPosition" id="cursor_position" @change="handleCursorPositionChange"
                    class="form-select">
              <option value="edge">Edge</option>
              <option value="center">Center</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="slice_text_position" class="form-label">Slice Text Position</label>
            <select v-model="sliceTextPosition" id="slice_text_position" class="form-select">
              <option value="edge">Edge</option>
              <option value="center">Center</option>
              <option value="middle">Middle</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="slice_font_style" class="form-label">Slice Font Style</label>
            <input v-model="sliceFontStyle" id="slice_font_style" class="form-control" type="text">
          </div>

        </fieldset>

        <fieldset class="mb-4">

          <legend>Shining Dots</legend>

          <div class="alert alert-info" role="alert">
            Shining dots is not a part of the vue-wheel-spinner component. It's a separate component which built in this
            demo.
            You can create different external ornaments like this.
          </div>

          <div class="row mb-3">
            <label for="shining_dots_border_color" class="form-label">Border Color / Width</label>
            <div class="input-group">
              <div class="input-group-text p-0">
                <input v-model="shiningDotsBorderColor" id="shining_dots_border_color"
                       class="form-control form-control-color border-0" type="color">
              </div>
              <input v-model="shiningDotsBorderWidth" id="shining_dots_border_width" class="form-control" type="number">
            </div>
          </div>

          <div class="mb-3">
            <label for="shining_dots_color" class="form-label">Dot Color / Size / Count / Shine Color</label>
            <div class="input-group">
              <div class="input-group-text p-0">
                <input v-model="shiningDotsColor" id="shining_dots_color"
                       class="form-control form-control-color border-0"
                       type="color">
              </div>
              <input v-model="shiningDotsSize" id="shining_dots_size" class="form-control" type="number">
              <input v-model="shiningDotsCount" id="shining_dots_count" class="form-control" type="number">
              <div class="input-group-text p-0">
                <input v-model="shiningDotsShineColor" id="shining_dots_shine_color"
                       class="form-control form-control-color border-0"
                       type="color">
              </div>
            </div>
          </div>

        </fieldset>

      </div>

      <div class="col-12 col-lg-7 px-lg-5 order-0 order-lg-1">

        <div class="sticky-top">

          <div class="fs-2 text-center">
            <div v-if="winnerResult">
              Winner: <span>{{ winnerResult.text }}</span> 🎉
            </div>
            <div v-else-if="isSpinning">
              Spinning...
            </div>
            <div v-else>
              Ready to spin?
            </div>
          </div>

          <ShiningDots
              :color="shiningDotsColor"
              :border-color="shiningDotsBorderColor"
              :shine-color="shiningDotsShineColor"
              :border-width="shiningDotsBorderWidth"
              :size="shiningDotsSize"
              :count="shiningDotsCount">

            <VueWheelSpinner
                ref="spinner"
                :slices="slices"
                :slice-text-position="sliceTextPosition"
                :slice-font-style="sliceFontStyle"
                :winner-index="defaultWinner"
                :sounds="sounds"
                :cursor-angle="cursorAngle"
                :cursor-position="cursorPosition"
                :cursor-distance="cursorDistance"
                @spin-start="onSpinStart"
                @spin-end="onSpinEnd">

              <template #cursor>
                <img class="cursor-img" :src="cursorImage" alt="Cursor">
              </template>

              <template #default>
                <button
                    class="spin-button"
                    :disabled="isSpinning"
                    @click="handleSpinButtonClick"
                    @mouseover="handleSpinButtonHover"
                    @mouseleave="handleSpinButtonLeave">
                  Spin
                </button>
              </template>

            </VueWheelSpinner>

          </ShiningDots>

          <div>
            <button
                class="btn btn-success btn-lg rounded-pill w-100 py-4"
                :disabled="isSpinning"
                @click="spinRandom()">
                <span class="spinner-border spinner-border-sm me-2" v-if="isSpinning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </span>
              Spin for Random
            </button>
          </div>

        </div>

      </div>

    </div>

  </main>

</template>

<script>
import VueWheelSpinner from 'vue-wheel-spinner';
import 'bootstrap/js/src/dropdown.js'

import cursorImage from './assets/cursor.svg';
import wonSound from './sounds/won.mp3';
import clickSound from './sounds/click.mp3';
import hoverSound from './sounds/hover.mp3';
import leaveSound from './sounds/leave.mp3';
import spinningSound from './sounds/spinning.mp3';
import ShiningDots from "@/components/ShiningDots.vue";

export default {
  components: {
    ShiningDots,
    VueWheelSpinner
  },
  data() {
    return {
      winnerResult: null,
      slices: this.createColorTextArray(8),
      sliceTextPosition: 'edge',
      sliceFontStyle: 'bold 16px Arial',
      isSpinning: false,
      defaultWinner: 0,
      sounds: {
        won: wonSound,
        spinButtonClick: clickSound,
        spinButtonHover: hoverSound,
        spinButtonLeave: leaveSound,
        spinning: spinningSound
      },
      cursorImage,
      cursorAngle: 0,
      cursorPosition: 'edge',
      cursorDistance: 0,
      shiningDotsColor: '#ffffff',
      shiningDotsShineColor: '#ffd800',
      shiningDotsBorderColor: '#1e254c',
      shiningDotsBorderWidth: 30,
      shiningDotsSize: 8,
      shiningDotsCount: 60
    };
  },
  watch: {
    slices: {
      handler() {
        this.$refs.spinner.drawWheel();
      },
      deep: true
    },
    shiningDotsBorderWidth() {
      this.$refs.spinner.drawWheel();
    },
  },
  methods: {
    getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },
    getContrastingColor(bgColor) {
      let color = bgColor;
      if (bgColor.charAt(0) === '#') {
        color = bgColor.substring(1, 7);
      }

      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      return brightness > 125 ? '#000000' : '#ffffff';
    },
    createColorTextArray(count) {
      const results = [];
      const colors = [
        '#eb4d4b',
        '#ffffff',
      ];  // Predefined colors
      for (let i = 1; i <= count; i++) {
        let color = colors[i % colors.length]; // Alternate colors
        results.push({
          color: color,  // Alternate colors
          text: 'Slice ' + i,        // Convert number to string
          textColor: this.getContrastingColor(color) // Get contrasting color
        });
      }
      console.log(results);
      return results;
    },
    playAudio(audio) {
      if (audio) {
        audio.volume = 0.5
        audio.play();
      }
    },
    handleSpinButtonClick() {
      if (this.buttonClickAudio) {
        this.playAudio(this.buttonClickAudio)
      }
      this.$refs.spinner.spinWheel(this.defaultWinner);
    },
    handleSpinButtonHover() {
      if (this.buttonHoverAudio) {
        this.playAudio(this.buttonHoverAudio)
      }
    },
    handleSpinButtonLeave() {
      if (this.buttonLeaveAudio) {
        this.playAudio(this.buttonLeaveAudio)
      }
    },
    handleCursorPositionChange() {
      if (this.cursorPosition === 'center') {
        if (!this.cursorDistance) {
          this.cursorDistance = 50;
        }
      } else {
        this.cursorDistance = 0;
      }
    },
    handleAddNewSlice() {
      let randomColor = this.getRandomColor();
      this.slices.push({
        color: randomColor,
        text: 'New Slice',
        textColor: this.getContrastingColor(randomColor)
      });
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
    }
  },
  mounted() {
    this.buttonHoverAudio = new Audio(hoverSound);
    this.buttonLeaveAudio = new Audio(leaveSound);
    this.buttonClickAudio = new Audio(clickSound);
  }
};
</script>

<style>

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
