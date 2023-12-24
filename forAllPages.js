
$(document).ready(function(){
    var estadoEntrada = localStorage.getItem("entrada")
    if (estadoEntrada ==undefined || estadoEntrada.length==0){
        estadoEntrada =0
    }
    if (estadoEntrada ==1){
        $('#nav').append('<div class="container-fluid">'+
        '<a class="navbar-brand" href="index.html"><img src="images/thumbnail_image.png" title="Logo"></a>'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"'+
            'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"'+
            'aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
        '</button>'+
        '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
                '<li class="nav-item">'+
                    '<a class="nav-link " aria-current="page" href="#">Super Pets</a>'+
                '</li>'+
            '</ul>'+
            '<ul class="navbar-nav">'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="Consultas.html" style="margin-right: 30px;">Consultas</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="Comida.html" style="margin-right: 30px;">Comida</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="AboutUs.html" style="margin-right: 30px;">Sobre nos</a>'+
                '</li>'+
                '<li class="nav-item dropdown active" style="margin-right:50px ;">'+
                  '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                      'MyProfile'+
                  '</a>'+
                  '<div class="dropdown-menu" aria-labelledby="navbarDropdown" style="width: 30px;">'+
                      '<a class="dropdown-item" href="MyProfile.html">MyProfile</a>'+
                      '<a class="dropdown-item" href="Planos.html">Planos</a>'+
                      '<a class="dropdown-item" href="MyPets.html">Pets</a>'+
                      '<div class="dropdown-divider"></div>'+
                      '<button id="LogOut">Logout<button>'+
                  '</div>'+
              '</li>'+
            '</ul>'+
        '</div>'+
    '</div>')
    }
    else if (estadoEntrada ==0){
        $("#nav").append('<div class="container-fluid">'+
        '<a class="navbar-brand" href="index.html"><img src="images/thumbnail_image.png" title="Logo"></a>'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse"'+
            'data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"'+
            'aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
       '</button>'+
        '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'+
                '<li class="nav-item">'+
                    '<a class="nav-link active" aria-current="page" href="#">Super Pets</a>'+
                '</li>'+
            '</ul>'+
            '<ul class="navbar-nav">'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="Consultas.html" style="margin-right: 30px;">Consultas</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="Comida.html" style="margin-right: 30px;">Comida</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="AboutUs.html" style="margin-right: 30px;">Sobre nos</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="Entrar.html" style="margin-right: 30px;">Entrar</a>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</div>')


    }
        
    $("#LogOut").click(function(){
        localStorage.setItem("entrada",0)
        window.location.replace("index.html");
    }


    )

})
