(function(win, doc) {
    "use strict";

    if (doc.querySelector(".btnDel")) {
        let btnDel = doc.querySelectorAll(".btnDel");
        for (let i = 0; i < btnDel.length; i++) {
            btnDel[i].addEventListener("click", (event) => {
                if (confirm("Deseja mesmo apagar este carro?")) {
                    return true;
                } else {
                    event.preventDefault();
                }
            });
        }
    }

    if (doc.querySelector("#form")) {
        let form = doc.querySelector("#form");

        function sendForm(event) {
            event.preventDefault();
            let data = new FormData(form);
            let ajax = new XMLHttpRequest();
            let token = doc.querySelectorAll("input")[0].value;

            ajax.open("POST", form.action);
            ajax.setRequestHeader("X-CSRF-TOKEN", token);
            ajax.onreadystatechange = () => {
                if (ajax.status === 200 && ajax.readyState === 4) {
                    let result = doc.querySelector("#result");
                    result.innerHTML = "Cadastro realizado com sucesso!";
                    result.classList = "alert alert-success";
                }
            }
            ajax.send(data);

            form.reset();
        }

        form.addEventListener("submit", sendForm, false);
    }
})(window, document);
