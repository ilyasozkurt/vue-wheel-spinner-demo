<template>
    <div class=" h-screen grid">
        <div class="mx-auto  shrink-0 ">
            <div class=" max-w-screen-md mx-auto">
                <div class="z-10 relative">
                    <div class="mb-4 w-100 row">
                        <div class="col w-100">
                            <div class="mb-3 hidden">
                                <label for="win_option" class="form-label">Select Winner</label>
                                <div class="input-group hidden">
                                    <select v-model="defaultWinner" id="win_option" :disabled="isSpinning"
                                        class="form-select hidden">
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
                <div class="-mt-32">
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
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Lampita Barutu",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "1"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Rahman Torkis",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "2"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "jhjhgjh far",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "3"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Agus Budi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "4"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Agus Susanto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "5"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Akmal",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "6"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Alexander Rumawas",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "7"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Alvio Fiorrie",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "8"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Andarto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "9"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Andree Cresenda",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "10"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Andrew Christian",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "11"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Andri Purba",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "12"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Aspri Sigit",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "13"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Asrul Fadillah",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "14"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Avrillia Ika",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "15"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Bramanti Dwi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "16"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Cahyo Yudyono",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "17"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Christin Melinda",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "18"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Chynthia Dewi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "19"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "David Febrian",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "20"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Deky Soesilo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "21"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Deny Yuliantoro",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "22"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dery Darmawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "23"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Dessy Estuningsih",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "24"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dian Iskandar",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "25"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Dian Perdhana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "26"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Dimas Septiandri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "27"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Dirgo Honnesa",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "28"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Dito Kurniawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "29"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Donna Astuti",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "30"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Dwi Novita",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "31"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Eko Irianto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "32"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Eko Sulistiyo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "33"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Erni",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "34"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Erwin Widiarto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "35"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Fajar Nugroho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "36"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Fani Nurfitriati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "37"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Fitri Yuningsih",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "38"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Fransiska Amalia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "39"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "FX Bayu Triguno",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "40"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "FX Herwindra S",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "41"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Gilang Herdinanta",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "42"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Giovany Wihelmina",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "43"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Hendra Ilham",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "44"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Hendra Utama",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "45"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Hendri Yadi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "46"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Hengki",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "47"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Herlina",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "48"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Hidayat Rusanda",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "49"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Husnil Qadri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "50"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Iman Rismawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "51"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Ismi Hidayatur",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "52"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Jofinus Halim",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "53"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Johannes Ricky",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "54"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Jony Nus",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "55"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Karina Putri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "56"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Kiki Krisnawati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "57"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Lidya Christie",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "58"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Lilia Wati",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "59"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Lutviani Aulia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "60"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Maria Anne",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "61"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Marthin Golto",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "62"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Mela Oktavia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "63"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Minetta Roselani",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "64"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Mochamad Dede",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "65"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Mochammad Tirta",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "66"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Muh Hasiruddin",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "67"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Muhammad Azis",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "68"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Muhammad Sholikin",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "69"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Novi Maryanti",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "70"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Novielly",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "71"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Olyvia",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "72"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Pandu Perdana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "73"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Rahman Effendi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "74"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Ramadina Putri",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "75"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Ramos Rialdo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "76"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Randy Pilar",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "77"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Retno Dwi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "78"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Revelino Jerincho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "79"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Rian Rachmawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "80"
                },
                {
                    "direktorat": "PLANNING",
                    "color": "#3B6D86",
                    "text": "Rias Andrika",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "81"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Rizka Yunidarini",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "82"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Rizma Rosellini",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "83"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Rizqi Aji",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "84"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Rohadih",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "85"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Romi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "86"
                },
                {
                    "direktorat": "CREDIT",
                    "color": "#EEAF2F",
                    "text": "Ronny Haryadi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "87"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Rudy Gunawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "88"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Rully Kurniawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "89"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Sandi Jua",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "90"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Sempurna Purba",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "91"
                },
                {
                    "direktorat": "MKT CAR",
                    "color": "#A53D99",
                    "text": "Sony Dwi",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "92"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Sony Manggala",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "93"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Stefanny Lowendo",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "94"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Susanto",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "95"
                },
                {
                    "direktorat": "RISK MANAGEMENT",
                    "color": "#FF0000",
                    "text": "Theresia Agustina",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "96"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Thomson Haposan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "97"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Veramutia Dahlan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "98"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Vicky Agus",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "99"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Vivan Ulva",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "100"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Weningtyas Galuh",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "101"
                },
                {
                    "direktorat": "COLLECTION",
                    "color": "#9A2B91",
                    "text": "Yayan Taryana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "102"
                },
                {
                    "direktorat": "FINANCE",
                    "color": "#EE3291",
                    "text": "Yesi Yuliana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "103"
                },
                {
                    "direktorat": "IT",
                    "color": "#5CBA58",
                    "text": "Yosep Nugroho",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "104"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Yudhi Gunawan",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "105"
                },
                {
                    "direktorat": "MKT MC",
                    "color": "#D2D4D5",
                    "text": "Yudi Maulana",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "106"
                },
                {
                    "direktorat": "MARKETING",
                    "color": "#3577BB",
                    "text": "Yuli Nurjanah",
                    "weight": "1",
                    "labelColor": "#fff",
                    "id": "107"
                },
                {
                    "direktorat": "HRD",
                    "color": "#142E5F",
                    "text": "Zaelani Thaha",
                    "weight": "0",
                    "labelColor": "#fff",
                    "id": "108"
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
            cursorPosition: "center",
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
