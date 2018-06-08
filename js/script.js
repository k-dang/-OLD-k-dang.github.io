$(function() {
    $(".nav-pills .nav-item .nav-link").each(function(){
        $(this).click(function(){
            $(".nav-pills .nav-item .nav-link").each(function(){
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            toggleContent($(this).data("pill"));
        });
    });

    loadText();
});

function toggleContent(id){
    $(".section").each(function(){
        if ($(this).css('display') === "block"){
            $(this).fadeOut(300, function(){
                $("#"+id).fadeIn(800);
            });
            return false; 
        }
    });
}

function loadText(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/k-dang",true);
    xhr.onload = function(){
        if(this.status == 200){
            var req = JSON.parse(this.responseText);
            var gitAvatar = req["avatar_url"];
            $("#profile").attr("src", gitAvatar);
            // console.log(this.responseText);
        }
    }
    xhr.send();
}