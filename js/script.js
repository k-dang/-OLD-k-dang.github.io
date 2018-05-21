$(".nav-pills .nav-item .nav-link").each(function(){
    $(this).click(function(){
        $(".nav-pills .nav-item .nav-link").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
});

$(".about").click(function(){
    $("#contact").fadeOut(300,function(){
        $("#about").fadeIn(800);
    })
});

$(".contact").click(function(){
    $("#about").fadeOut(300,function(){
        $("#contact").fadeIn(800);
    });
    
});

function loadText(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/k-dang",true);
    xhr.onload = function(){
        if(this.status == 200){
            var req = JSON.parse(this.responseText);
            var gitAvatar = req["avatar_url"];
            $("#profile").attr("src",gitAvatar);
            // console.log(this.responseText);
        }
    }
    xhr.send();
}

// loadText();