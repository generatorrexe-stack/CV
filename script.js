document.addEventListener("DOMContentLoaded", () => {
    const datosPersonales = document.querySelector(".DatosPersonales");
    
    if (datosPersonales) {
         const fechaNacimiento = new Date(2006, 3, 9);
        const hoy = new Date();

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        
        const labeledad = document.createElement("label");
        labeledad.innerHTML = `<strong>Edad Actual:</strong> ${edad} años`;

         datosPersonales.appendChild(document.createElement("br"));
        datosPersonales.appendChild(labeledad);
    }

    const secciones = document.querySelectorAll("fieldset");
    
    secciones.forEach(seccion => {
         seccion.addEventListener("mouseenter", () => {
            seccion.style.borderColor = "#ff0000"; 
            seccion.style.transition = "all 0.3s ease";
        });
        
        seccion.addEventListener("mouseleave", () => {
            seccion.style.borderColor = "black"; 
             });
    });
});