$("#about").click(function(){
    $("#maintext div").remove();
    XMLReqTextFile("js/about.txt");
    $("#maintext div").show('slow');
});

$("#contacts").click(function(){
    $("#maintext #faicon").remove();
    $("#maintext").append("<div id=\"faicon\">"+getFontAwesome("envelope")+"<div id=\"fatext\">dangkevin12@gmail.com</div></div>");
    $("#maintext").append("<div id=\"faicon\">"+getFontAwesome("github")+"<div id=\"fatext\">https://github.com/k-dang</div></div>");
    $("#maintext").append("<div id=\"faicon\">"+getFontAwesome("linkedin-square")+"<div id=\"fatext\">https://ca.linkedin.com/in/kdang1</div></div>");
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
                $("#maintext").append("<div>"+paragraphText+"</div>");
            }
        }
    }
    fileReq.send(null);
}

function getFontAwesome(name){
    return "<i class=\"fa fa-"+name+"\" aria-hidden=\"true\"></i>"
}

function getFaLink(Icon, Text){

}
