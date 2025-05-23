async function enviarMensaje() {
    const inputMensaje = document.getElementById("prompt").value;
    const respuestaElemento = document.getElementById("respuesta");

    if (inputMensaje.trim() === "") {
        respuestaElemento.textContent = "Por favor, escribe un mensaje.";
        return;
    }

    const url = "https://98.80.183.34/api-gpt-php/endpoints/chat.php";  // Ajuste para que funcione en el mismo dominio
    const datos = { message: inputMensaje };

    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        const resultado = await respuesta.json();

        if (resultado.status === 200) {
            respuestaElemento.textContent = resultado.data.reply;
        } else {
            respuestaElemento.textContent = "Error en la respuesta de la API.";
        }
    } catch (error) {
        respuestaElemento.textContent = "Error en la conexión con la API.";
        console.error("Error:", error);
    }
}
