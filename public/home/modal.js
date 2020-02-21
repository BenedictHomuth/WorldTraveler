var openModalBtn = document.getElementById("myBtn");


openModalBtn.addEventListener("click", function(){
 $("#myModal").modal("show");
 var saveTripBtn = document.getElementById("saveChangesBtn");
 var dicardTripBtn = document.getElementById("discardChangesBtn");
})

saveTripBtn.addEventListener("click", ()=>{
    var cityName = document.getElementById("cityName").value;
    var date = document.getElementById("datePicked").value;
    var comment = document.getElementById("commentVisit").value;
    console.log(cityName);
    console.log(date);
    console.log(comment);
})

dicardTripBtn.addEventListener("click", ()=>{
    console.log("Your trip was not saved!");
})

/*
$(window).load(function () {
    var openModalBtn = document.getElementById("myBtn");


    openModalBtn.addEventListener("click", function () {
        $("#myModal").modal("show");
        var saveTripBtn = document.getElementById("saveChangesBtn");
        var dicardTripBtn = document.getElementById("discardChangesBtn");
    })

    saveTripBtn.addEventListener("click", () => {
        var cityName = document.getElementById("cityName").value;
        var date = document.getElementById("datePicked").value;
        var comment = document.getElementById("commentVisit").value;
        console.log(cityName);
        console.log(date);
        console.log(comment);
    })

    dicardTripBtn.addEventListener("click", () => {
        console.log("Your trip was not saved!");
    })
});
*/