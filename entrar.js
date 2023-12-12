

function utilizador(){


    console.log($("#username").val())
    if($("#username").val() == "Teste" && $("#password").val() == "1234abcd"){
        console.log(" entraste");
        window.location.href = "MyProfile.html";
    }
    else if($("#username").val() === "Vet" && $("#password").val() === "1234abcd"){
        window.location.href = "MyProfileVet.html";
    }
    
    else{
        alert("Não entraste");
    }
    
    }
