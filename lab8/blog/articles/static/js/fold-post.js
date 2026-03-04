var foldBtns = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function (event) {
        // Для проверки обработчика (для отчёта)
        console.log("you clicked", event.target);
        var onePost = event.target.closest(".one-post");

        if (onePost.classList.contains("folded")) {
            onePost.classList.remove("folded");
            event.target.textContent = "свернуть";
        } else {
            onePost.classList.add("folded");
            event.target.textContent = "развернуть";
        }
    });
}