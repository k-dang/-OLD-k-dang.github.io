$("#about").click(function(){
    $("#maintext p").remove();
    XMLReqTextFile("js/about.txt");
    $("#maintext p").show('slow');
});

$("#contacts").click(function(){
    $("#maintext p").remove();
    $("#maintext").append("<p>email : dangkevin12@gmail.com</p>");
    $("#maintext").append("<p>github : https://github.com/k-dang</p>");
    $("#maintext").append("<p>linkedin : https://ca.linkedin.com/in/kdang1</p>")
    $("#maintext p").show('slow');
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
                $("#maintext").append("<p>"+paragraphText+"</p>");
            }
        }
    }
    fileReq.send(null);
}