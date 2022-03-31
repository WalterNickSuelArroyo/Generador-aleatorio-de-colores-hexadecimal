const hex = document.querySelector(".hex");
const btn = document.querySelector(".generar")
const generarColor = () => {
    const colorAleatorio = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + colorAleatorio;
    hex.innerHTML =  "#" + colorAleatorio
};
btn.addEventListener("click", generarColor);
generarColor();
/* let color = Math.random();
color = Math.random().toString(16);
color = Math.random().toString(16).substring(2,8);
console.log(color); */

