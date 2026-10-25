// Filtro de categorías del menú de Lulito Jamaiquino
const tabs = document.querySelectorAll(".categoria-tab");
const tarjetas = document.querySelectorAll(".tarjeta");

function filtrar(categoria) {
    tarjetas.forEach((tarjeta) => {
        const coincide =
            categoria === "todo" || tarjeta.dataset.categoria === categoria;
        // display directo: no depende de ninguna regla en el CSS
        tarjeta.style.display = coincide ? "" : "none";
    });
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => {
            const activo = t === tab;
            t.classList.toggle("active", activo);
            t.setAttribute("aria-pressed", String(activo));
        });

        filtrar(tab.dataset.filtro);
    });
});