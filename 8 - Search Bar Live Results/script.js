//8. Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.

var input = document.querySelector("input");
var data = [{ name: "Superman", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}, 
    { name: "Hulk", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "BlackPanther", src: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Ironman", src: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Spiderman", src: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "Batman", src: "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`
})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter( function(e) {
       return e.name.startsWith(input.value)
    })
    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                        <div class="img">
                            <img src="${elem.src}" alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`
    })
    document.querySelector(".people").innerHTML = newusers;
})