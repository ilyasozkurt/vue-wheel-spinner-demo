<template>
    <div class=" h-screen grid">
        <div class="mx-auto  shrink-0 ">
            <div class=" max-w-screen-md mx-auto">
                <div class="z-10 relative">
                    <div class="mb-4 w-100 row">
                        <div class="col w-100">
                            <div class="mb-3">
                                <label for="win_option" class="form-label">Select Winner</label>
                                <div class="input-group">
                                    <select v-model="defaultWinner" id="win_option" :disabled="isSpinning"
                                        class="form-select">
                                        <option v-for="(slice, index) in slices" :value="index">
                                            {{ slice.text }}
                                        </option>
                                    </select>
                                    <!-- <button class="btn btn-primary px-4" :disabled="isSpinning"
                                        @click="spinFor(defaultWinner)">
                                        <span class="spinner-border spinner-border-sm me-2" v-if="isSpinning"
                                            role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </span>
                                        Spin
                                    </button> -->
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="text-center">
                                <div v-if="winnerResult">
                                    <div class="modalx">
                                        
                                        <div class="">
                                            <div
                                                class="align-content-start justify-content-around bg-white col-12 mt-24 p-24 relative">

                                                <h1 class="modal-body">
                                                    Winner: <span>{{ winnerResult.text }}</span> <br />
                                                    <span>{{ winnerResult.direktorat }}</span> 🎉
                                                </h1>
                                                <div class="modal-footer">

                                                    <button type="button" class="btn mx-auto btn-secondary text-white">
                                                        <RouterLink to="/">Selanjutnya</RouterLink>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else-if="isSpinning">
                                    Spinning...
                                </div>
                                <div v-else></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="-mt-48">
                    <ShiningDots :color="shiningDotsColor" :border-color="shiningDotsBorderColor"
                        :shine-color="shiningDotsShineColor" :border-width="shiningDotsBorderWidth"
                        :size="shiningDotsSize" :count="shiningDotsCount">
                        <VueWheelSpinner ref="spinner" :slices="slices" :winner-index="defaultWinner" :sounds="sounds"
                            :cursor-angle="cursorAngle" :cursor-position="cursorPosition"
                            :cursor-distance="cursorDistance" @spin-start="onSpinStart" @spin-end="onSpinEnd">
                            <template #cursor>
                                <img class="cursor-img" :src="cursorImage" alt="Cursor" />
                            </template>

                            <template #default>
                                <button class="spin-button" :disabled="isSpinning" @click="handleSpinButtonClick"
                                    @mouseover="handleSpinButtonHover" @mouseleave="handleSpinButtonLeave">
                                    Spin
                                </button>
                            </template>
                        </VueWheelSpinner>
                    </ShiningDots>
                </div>

            </div>
        </div>
    </div>

    <div class="px-4 overflow-hidden h-screen  text-center">
        <div class="col-lg-8 mx-auto">
            <p class="">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
                popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful JavaScript plugins.</p>

        </div>
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
            winnerResult: null,
            slices: [
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Zaelani Thaha",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "38"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Yudhi Gunawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "39"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Sandi Jua",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "40"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Romi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "41"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Rohadih",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "42"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Muh Hasiruddin",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "43"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Minetta Roselani",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "44"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Maria Anne",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "45"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Hengki",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "46"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Erni",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "47"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Yosep Nugroho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "48"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Weningtyas Galuh",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "49"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Vicky Agus",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "50"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Thomson Haposan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "51"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Stefanny Lowendo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "52"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Sempurna Purba",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "53"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Rully Kurniawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "54"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Rizma Rosellini",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "55"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Kiki Krisnawati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "56"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Jofinus Halim",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "57"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Fransiska Amalia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "58"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Fajar Nugroho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "59"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Eko Sulistiyo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "60"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dian Perdhana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "61"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dian Iskandar",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "62"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dery Darmawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "63"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Deny Yuliantoro",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "64"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Asrul Fadillah",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "65"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Aspri Sigit",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "66"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Agus Budi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "67"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Yuli Nurjanah",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "68"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Veramutia Dahlan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "69"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Rudy Gunawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "70"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Bramanti Dwi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "71"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Agus Susanto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "72"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Sony Dwi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "73"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Rizka Yunidarini",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "74"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Revelino Jerincho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "75"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Marthin Golto",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "76"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Dito Kurniawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "77"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Andree Cresenda",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "78"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Yudi Maulana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "79"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Rian Rachmawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "80"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Randy Pilar",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "81"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Olyvia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "82"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Johannes Ricky",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "83"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Ismi Hidayatur",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "84"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Gilang Herdinanta",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "85"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "FX Herwindra S",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "86"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Fitri Yuningsih",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "87"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Fani Nurfitriati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "88"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Dwi Novita",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "89"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Chynthia Dewi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "90"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Rias Andrika",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "91"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Novielly",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "92"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Muhammad Sholikin",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "93"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Muhammad Azis",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "94"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Mochamad Dede",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "95"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Mela Oktavia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "96"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Lilia Wati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "97"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Karina Putri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "98"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Eko Irianto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "99"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Dimas Septiandri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "100"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Alexander Rumawas",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "101"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Akmal",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "102"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Theresia Agustina",
                    "weight": "1",
                    "labelColor": "#fff",
                    "": "103"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Ramos Rialdo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "104"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Herlina",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "105"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Giovany Wihelmina",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "106"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Deky Soesilo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "107"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Christin Melinda",
                    "weight": "0",
                    "labelColor": "#fff",
                    "": "108"
                }
            ],
            isSpinning: false,
            defaultWinner: 0,

            sounds: {
                won: wonSound,
                spinButtonClick: clickSound,
                spinButtonHover: hoverSound,
                spinButtonLeave: leaveSound,
                spinning: spinningSound,
            },
            cursorImage,
            cursorAngle: 180,
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
body {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
}

.cursor-img {
    width: 50px;
    aspect-ratio: 1 / 1;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.867));
    margin-right: 16px;
    margin-bottom: 50px;
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

.modalx {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent background */
    z-index: 1050;
    justify-content: center;
    align-items: center;
}
</style>