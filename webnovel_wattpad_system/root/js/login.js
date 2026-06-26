
function openLibrary(event){

    event.preventDefault();

    const currentUser =
    localStorage.getItem("currentUser");

    if(!currentUser){

        alert(
        "📖 Please login first before accessing the Library!"
        );

        return;
    }

    window.location.href = "library.html";
}
function startReading(event){

    event.preventDefault();

    const currentUser =
    localStorage.getItem("currentUser");

    if(!currentUser){

        alert(
            "📖 Please login first before reading this novel!"
        );

        window.location.href =
        "login.html";

        return;
    }

    window.location.href =
    "story.html";
}
function login(){

    const username =
    document.getElementById("u").value;

    const password =
    document.getElementById("p").value;

    let users = JSON.parse(
        localStorage.getItem("users")
    ) || [];

    const user = users.find(
        x =>
        x.username === username &&
        x.password === password
    );

    if(!user){

        alert("❌ Invalid username or password");
        return;
    }

    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    alert("✅ Login Successful!");

    window.location.href = "dashboard.html";
}


const cover = document.querySelector(".cover");
const btn = document.getElementById("readBtn");

btn.addEventListener("mouseenter", () => {
cover.style.transform = "scale(1.12) translateY(-15px) rotate(-2deg)";
cover.style.boxShadow =
"0 0 30px #7f5cff, 0 0 80px #7f5cff, 0 0 150px #7f5cff";
});

btn.addEventListener("mouseleave", () => {
cover.style.transform = "scale(1) translateY(0) rotate(0deg)";
cover.style.boxShadow =
"0 0 20px #7f5cff, 0 0 50px #7f5cff";
});