
    const currentUser = localStorage.getItem("currentUser");
    
    if(currentUser){
    
        const btn = document.getElementById("authBtn");
    
        btn.innerHTML = "🚪 Logout";
    
        btn.href = "#";
    
        btn.onclick = function(e){
    
            e.preventDefault();
    
            if(confirm("Are you sure you want to logout?")){
    
                localStorage.removeItem("currentUser");
    
                alert("Logged out successfully!");
    
                window.location.href = "login.html";

                const progress = JSON.parse(
                    localStorage.getItem("lastRead")
                );
                
                if(progress){
                
                    document.getElementById(
                        "continueTitle"
                    ).innerText = progress.novel;
                
                    document.getElementById(
                        "continueChapter"
                    ).innerText = progress.chapter;
                
                    document.getElementById(
                        "continueCover"
                    ).src = progress.cover;
                }
                
             

// Load saved reading progress

window.onload = function(){

    const novel =
        localStorage.getItem("lastNovel");

    const chapter =
        localStorage.getItem("lastChapter");

    const cover =
        localStorage.getItem("lastCover");

    if(novel){

        document.getElementById(
            "continueTitle"
        ).innerText = novel;

        document.getElementById(
            "continueChapter"
        ).innerText = "Last Read: Chapter " + chapter;

        document.getElementById(
            "continueCover"
        ).src = cover;
    }

}

function continueReading(){

    const chapter =
        localStorage.getItem("lastChapter");

    if(!chapter){

        alert("📚 No reading progress found.");
        return;
    }

    window.location.href =
        "story.html?chapter=" + chapter;
}

};

// Continue Reading Button
function continueReading(){

    const lastNovel =
        localStorage.getItem("lastNovel");

    if(!lastNovel){

        alert("📚 No reading progress found.");
        return;
    }

    window.location.href = "story.html";
}
        };
    }
    
    