document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("json-formulario");
    var gracias = document.getElementById("message");

    form.addEventListener("submit", function(evt) {
        evt.preventDefault();

        gracias.classList.add("enviadomsg");
        form.classList.add("enviadoform");

        var json_formulario = document.getElementById("json-formulario")
        const formData = new FormData(json_formulario)
        console.log(formData);

        fetch("https://httpbin.org/post", {
                method: 'POST',
                body: formData
            })
            .then(function(response) {
                return response.json();
                console.log(response.json);

            })
            .catch(function(response) {
                console.log('Lo sentimos. Tu solicitud no se envió correctamente.');
            })

    })
});