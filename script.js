// TODO: add code here
window.addEventListener("load", function() {
    container = document.getElementById("container");
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        // console.log(response);
    response.json().then(function(json) {  
        console.log(json);

        for (let i = 0; i < json.length; i++) {
            let astronaut = json[i];
            
            container.innerHTML +=` <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}"/>
            </div>`
            
        }

    });
});





});