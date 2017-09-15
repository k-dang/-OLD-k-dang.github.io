$(window).resize(function(){
    if($(window).width() <= 600){
        console.log($(window).width());
    }
});

$("#icon-group .fa").click(function(){
    var className = $(this).attr("class");
    var currentActive = className.split(" ");
    var removeList = getNameOfOthers(currentActive[1]);
    for(i=0;i<removeList.length;i++){
        $(`.${removeList[i]}`).removeClass("active");
    }
    $(this).addClass("active")
})

$(".fa-home").click(function(){
    $("#contact").fadeOut(300,function(){
        $("#about").fadeIn(800);
    })
});

$(".fa-envelope").click(function(){
    $("#about").fadeOut(300,function(){
        $("#contact").fadeIn(800);
    });
    
});

$(".fa-file-text").click(function(){
    console.log("resume");
});

function getNameOfOthers(iconName){
    var result;
    switch(iconName){
        case "fa-envelope":
            result = ["fa-home","fa-file-text"]
            break;
        case "fa-home":
            result = ["fa-envelope","fa-file-text"];
            break;
        case "fa-file-text":
            result = ["fa-home","fa-envelope"];
            break;
    }
    return result;
}

