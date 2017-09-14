$("#about").click(function(){
    $("#maintext a").remove();
    $("#maintext #desc").remove();
    $("#maintext #desc").show('slow');
});

$("#contacts").click(function(){
    $("#maintext a").remove();
    $("#maintext").append(getFaLink("envelope","dangkevin12@gmail.com"));
    $("#maintext").append(getFaLink("github","https://github.com/k-dang"));
    $("#maintext").append(getFaLink("linkedin-square","https://ca.linkedin.com/in/kdang1"));
    $("#maintext").show('slow');
});

$(window).resize(function(){
    if($(window).width() <= 600){
        console.log($(window).width());
    }
});

{/* <a id=\"faicon\" href=\"mailto:dangkevin12@gmail.com\">"+getFontAwesome(Icon)+"</div> */}



