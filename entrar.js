function utilizador(){
    console.log($("#username").val())
    if($("#username").val() === "Teste" && $("#password").val() === "1234abcd"){
        alert(" entraste");
        window.location.href = 'MyProfile.html';
    }
    else if($("#username").val() === "Vet" && $("#password").val() === "1234abcd"){
        window.location.href = "MyProfile.html";
    }
    
    else{
        alert("Não entraste");
    }
    
    }

