document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

    const number = document.getElementById('joke-num').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            response.value.forEach(element => {
                output += `<li>${element.joke}</li>`;
            });

            document.getElementById('jokes').innerHTML = output
        }
    }

    xhr.send()

    e.preventDefault();
}