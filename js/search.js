export function initSearch() {

    const input = document.querySelector("#searchInput");

    const aiButton = document.querySelector("#aiButton");


    if (!input) {
        return;
    }


    /* =========================
       검색
    ========================== */

    input.addEventListener("keydown", (event) => {

        if (event.key !== "Enter") {
            return;
        }


        const keyword = input.value.trim();


        if (!keyword) {

            alert("검색어를 입력해주세요.");

            input.focus();

            return;
        }


        const searchUrl =
            "https://search.naver.com/search.naver?query="
            + encodeURIComponent(keyword);


        window.location.href = searchUrl;

    });


    /* =========================
       AI 버튼
    ========================== */

    if (aiButton) {

        aiButton.addEventListener("click", () => {

            const keyword = input.value.trim();


            if (!keyword) {

                alert("검색어를 입력해주세요.");

                input.focus();

                return;
            }


            alert(
                `AI 검색\n\n"${keyword}"`
            );

        });

    }

}