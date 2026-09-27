export function initNewsstand() {

    const prevButton =
        document.querySelector("#prevNews");

    const nextButton =
        document.querySelector("#nextNews");

    const pageText =
        document.querySelector("#newsPage");


    if (
        !prevButton ||
        !nextButton ||
        !pageText
    ) {
        return;
    }


    /* =========================
       페이지 설정
    ========================== */

    let currentPage = 4;

    const totalPage = 4;


    /* =========================
       화면 업데이트
    ========================== */

    function updatePage() {

        pageText.textContent =
            `언론사 더보기 ${currentPage}/${totalPage}`;

    }


    /* =========================
       이전 버튼
    ========================== */

    prevButton.addEventListener(
        "click",
        () => {

            currentPage--;


            if (currentPage < 1) {

                currentPage = totalPage;

            }


            updatePage();

        }
    );


    /* =========================
       다음 버튼
    ========================== */

    nextButton.addEventListener(
        "click",
        () => {

            currentPage++;


            if (currentPage > totalPage) {

                currentPage = 1;

            }


            updatePage();

        }
    );


    updatePage();

}