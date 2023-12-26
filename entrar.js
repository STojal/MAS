
function utilizador(){


    console.log($("#username").val())
    if($("#username").val() == "Teste" && $("#password").val() == "1234abcd"){
        console.log(" entraste");
        window.location.href = "MyProfile.html";
        localStorage.setItem("entrada", 1)
    }
    else if($("#username").val() === "Vet" && $("#password").val() === "1234abcd"){
        window.location.href = "MyProfileVet.html";
        localStorage.setItem("entrada", 2)

    }
    
    else{
        alert("Não entraste");
        localStorage.setItem("entrada", 0)

    }
    
    }