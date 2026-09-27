import { initSearch } from "./search.js";
import { initNewsstand } from "./newsstand.js";
import { initPopup } from "./popup.js";


document.addEventListener("DOMContentLoaded", () => {

    initSearch();

    initNewsstand();

    initPopup();

    console.log("NAVER Clone loaded");

});