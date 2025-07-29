document.addEventListener("DOMContentLoaded", function () {
    const sumario = document.getElementById("summary-list");
    const conteudo = document.getElementById("js-content");
    const headers = conteudo.querySelectorAll("h2, h3, h4");

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
        }

        li.appendChild(a);
        summary.appendChild(li);
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  fetch('https://formsubmit.co/7ee20db5da3829402c93a303d5caad8e', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      document.getElementById('menssageSent').style.display = 'block';
    } else {
      alert('Erro sending feedback');
    }
  }).catch(() => {
    alert('Connection error. Please try again later.');
  });
});