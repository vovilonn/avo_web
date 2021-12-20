export function burger() {
    document.querySelector(".burger").addEventListener("click", function () {
        const menu = document.querySelector(".menu"),
            body = document.querySelector("body");

        if (this.classList.contains("close")) {
            this.classList.remove("close");
            menu.classList.remove("visible");
            // body.style.overflow = "initial";
        } else {
            window.scrollTo(0, 0);
            this.classList.add("close");
            menu.classList.add("visible");
            body.style.overflow = "hidden";
        }
    });
}
