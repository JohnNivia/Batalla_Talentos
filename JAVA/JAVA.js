var videoGrid = document.getElementById("videoGrid");

var videos = [
    { titulo: "Introducción",   id: "VP6cC35quL8" },
    { titulo: "Jueces",         id: "I_6dTx82b7U" },
    { titulo: "Fotografía",     id: "eBxqE3XZYbk" },
    { titulo: "Juis Doing",     id: "AU2fhK35Xnk" },
    { titulo: "Baile",          id: "cli_cdBqgsU"  },
    { titulo: "Canción",        id: "hGkqJtH78DI" },
    { titulo: "Canción Pt. 2",  id: "2ee9Uq8zUn0" },
    { titulo: "Entrada Hombre", id: "M3IsGgX8Mag" },
    { titulo: "Guitarra",       id: "d8A3PzilSx8" }
];

for (var i = 0; i < videos.length; i++) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "video-card";

    var envoltura = document.createElement("div");
    envoltura.className = "video-wrapper";

    var marco = document.createElement("iframe");
    marco.src = "https://www.youtube.com/embed/" + videos[i].id;
    marco.title = videos[i].titulo;
    marco.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    marco.allowFullscreen = true;

    var etiqueta = document.createElement("div");
    etiqueta.className = "video-label";
    etiqueta.textContent = videos[i].titulo;

    envoltura.appendChild(marco);
    tarjeta.appendChild(envoltura);
    tarjeta.appendChild(etiqueta);
    videoGrid.appendChild(tarjeta);
}
