export function initPopup() {

    const popup =
        document.querySelector(".update-popup");

    const closeButton =
        document.querySelector(".close");

    const downloadButton =
        document.querySelector(".download");


    if (!popup) {
        return;
    }


    /* =========================
       닫기
    ========================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            () => {

                popup.style.display = "none";

            }
        );

    }


    /* =========================
       웨일 다운로드
    ========================== */

    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            () => {

                window.open(
                    "https://whale.naver.com/",
                    "_blank"
                );

            }
        );

    }

}