function sendRequest() {
    const entity = document.getElementById("entity").value;
    const id = document.getElementById("id").value;
    const url = `https://swapi.nomoreparties.co/${entity}/${id}`;
    const resultBlock = document.getElementById("result");
    const errorBlock = document.getElementById("error");
    const loadingBlock = document.getElementById("loading");

    // Очищаем вывод результатов
    resultBlock.innerHTML = "";
    errorBlock.innerHTML = "";

    // Сообщение о загрузке
    loadingBlock.innerHTML = "Loading...";

    fetch(url)
        .then(response => {
        loadingBlock.innerHTML = "";
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.status);
        })
        .then(data => {
        const result = document.createElement("div");
        result.innerHTML = `<h2>Name: ${data.name || data.title}</h2>`;
        resultBlock.appendChild(result);
        })
        .catch(error => {
        loadingBlock.innerHTML = "";
        errorBlock.innerHTML = `Error: ${error.message}. Data not found.`;
        })
        .finally(() => {
            loadingBlock.innerHTML = "May the Force be with you!";
        });
    }

