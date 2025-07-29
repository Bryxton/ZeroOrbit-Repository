document.addEventListener("DOMContentLoaded", function () {
    const summary = document.getElementById("summary-list");
    const content = document.getElementById("js-content");
    const headers = content.querySelectorAll("h2, h3, h4, h5");

    headers.forEach((header, index) => {
        if (!header.id) {
            header.id = header.textContent
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]/g, '') + "-" + index;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#" + header.id;
        a.textContent = header.textContent;

        // Classes por nível
        if (header.tagName === "H2") {
            li.classList.add("nivel-h2");
        } else if (header.tagName === "H3") {
            li.classList.add("nivel-h3");
            li.style.marginLeft = "20px";
        } else if (header.tagName === "H4") {
            li.classList.add("nivel-h4");
            li.style.marginLeft = "40px";
        } else if (header.tagName === "H5") {
            li.classList.add("nivel-h5");
            li.style.marginLeft = "60px";
        }

        li.appendChild(a);
        summary.appendChild(li);
    });
});