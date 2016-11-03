$("#about").click(function(){
    console.log("abouts");
});

$("#contacts").click(function(){
    console.log("conts");
});

$(window).resize(function(){
    if($(window).width() <= 600){
        console.log($(window).width());
    }
});