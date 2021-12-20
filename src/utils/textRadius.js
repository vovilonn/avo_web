

export function letterify() {

    let elems = document.querySelectorAll("*[data-letterify]");
    wrapTextNodes(elems);
}

function wrapTextNodes(elems) {
    let nodeType = {
        element: 1,
        attribute: 2,
        text: 3
    };
    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];

        if (elem.nodeType === nodeType.text) {
            let text = elem.nodeValue.split("");
            for (let j = 0; j < text.length; j++) {
                let span = document.createElement("span");
                span.innerHTML = text[j];
                span.classList.add("char" + (j + 1));
                elem.parentNode.insertBefore(span, elem);
            }
            elem.parentNode.removeChild(elem);
        } else if (
            elem.nodeType === nodeType.element &&
            elem.hasAttribute("data-letterify")
        ) {
            let children = elem.childNodes;
            wrapTextNodes(children);
        }
    }
}

