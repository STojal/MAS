// My profile 
$("#buttonadd").click(function () {
    $("#content-new-animal").toggle();
})




//add profile
$("#add12").click(function (e) {
    e.preventDefault();

    if (document.querySelector('#Name').value.length == 0) {
        alert("Por favor, indique um nome.")
    }
    else {
        var inputFile = $("#Img")[0].files[0];
        //se tiver imagem adiciona a do utilizado
        if (inputFile) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var base64Image = e.target.result;
                console.log(base64Image);
                document.querySelector('.row').innerHTML +=
                    '<div class="card col-3">' +
                    '<img src="' + base64Image + '" class="card-img-top" alt="' + document.querySelector("#Name").value + '">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + document.querySelector("#Name").value + '</h5>' +
                    '<p class="card-text">' + document.querySelector("#Sex").value + "; " + document.querySelector("#Age").value + " anos" + '</p>' +
                    '<a href="#" class="btn btn-primary">Ver ficha</a>' +
                    ' </div>' +
                    '</div>'
            }
            reader.readAsDataURL(inputFile);
        //se nao tiver poem o logo do site
        } else {
            document.querySelector('.row').innerHTML +=
                '<div class="card col-3">' +
                '<img src="images/thumbnail_image.png" class="card-img-top" alt="' + document.querySelector("#Name").value + '">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + document.querySelector("#Name").value + '</h5>' +
                '<p class="card-text">' + document.querySelector("#Sex").value + "; " + document.querySelector("#Age").value + " anos" + '</p>' +
                '<a href="#" class="btn btn-primary">Ver ficha</a>' +
                ' </div>' +
                '</div>'
        }
        $("#content-new-animal").hide();
    }
}
)
// End of My profile 