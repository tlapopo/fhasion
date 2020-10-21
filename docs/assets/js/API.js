let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function(e) {
  alert("[abierto] Conexión establecida");
  alert("Enviando al servidor");
  socket.send("Mi nombre es John");
};

socket.onmessage = function(event) {
  alert(`[mensaje] Datos recibidos del servidor: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[cerrar] Conexión cerrada limpiamente, código=${event.code} razón =${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[cerrar] Conexión muerta');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};