const screen = document.getElementById("login-screen");
const dvd = document.getElementById("dvd-container");
const button = document.getElementById("continue-btn");

let x = 100;
let y = 100;

let dx = 3;
let dy = 3;

function changeColor() {
    const colors = [
        "cyan",
        "red",
        "lime",
        "magenta",
        "yellow",
        "orange",
        "blue",
        "white"
    ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        dvd.style.color = randomColor;
    }

function animate() {
    const maxX = screen.clientWidth - dvd.offsetWidth;
    const maxY = screen.clientHeight - dvd.offsetWidth;

    x += dx;
    y += dy;

    if (x <= 0 || x >= maxX){ 
        dx *= -1;
        changeColor();
    }
    if (y <= 0 || y >= maxY){ 
        dy *= -1;
        changeColor();
    }

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();

button.addEventListener("click", () => {
    screen.style.display = "none";
});

