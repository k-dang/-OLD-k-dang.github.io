$("#about").click(function(){
    $("#maintext #desc").remove();
    XMLReqTextFile("js/about.txt");
    $("#maintext #desc").show('slow');
});

$("#contacts").click(function(){
    $("#maintext #faicon").remove();
    $("#maintext").append(getFaLink("envelope","dangkevin12@gmail.com"));
    $("#maintext").append(getFaLink("github","https://github.com/k-dang"));
    $("#maintext").append(getFaLink("linkedin-square","https://ca.linkedin.com/in/kdang1"));
    $("#maintext #faicon").show('slow');
});

$(window).resize(function(){
    if($(window).width() <= 600){
        console.log($(window).width());
    }
});

function XMLReqTextFile(file){
    var fileReq = new XMLHttpRequest();
    fileReq.open("GET",file,false);
    fileReq.onreadystatechange = function (){
        if(fileReq.readyState === 4){
            if(fileReq.status === 200 || rawFile.status == 0){
                var paragraphText = fileReq.responseText;
                $("#maintext").append("<div id=\"desc\">"+paragraphText+"</div>");
            }
        }
    }
    fileReq.send(null);
}

function getFontAwesome(name){
    return "<i class=\"fa fa-"+name+"\" aria-hidden=\"true\"></i>";
}

function getFaLink(Icon, Text){
    return "<div id=\"faicon\">"+getFontAwesome(Icon)+"<div id=\"fatext\">"+Text+"</div></div>";
}
