//desabilitando o zoom do mapa
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    scrollWheelZoom: false,
};

//create map
const map = L.map("mapid", options).setView([-12.9963997, -38.5133519], 15); //latitude, longetude e zoom do mapa

//create and add tittleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

//create and add marker
L.marker([-12.9963997, -38.5133519], { icon }).addTo(map);

/*image gallery*/

function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".image button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container de imagem
    imageContainer.src = image.src;

    //adicionar a classe .active para este botão
    button.classList.add("active");
}