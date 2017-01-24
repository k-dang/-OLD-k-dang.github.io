$("#about").click(function(){
    $("#maintext div").remove();
    XMLReqTextFile("js/about.txt");
    $("#maintext div").show('slow');
});

$("#contacts").click(function(){
    $("#maintext div").remove();
    $("#maintext").append(getFaLink("envelope","dangkevin12@gmail.com"));
    $("#maintext").append(getFaLink("github","https://github.com/k-dang"));
    $("#maintext").append(getFaLink("linkedin-square","https://ca.linkedin.com/in/kdang1"));
    $("#maintext div").show('slow');
    $('#faGitText').tooltip();
    $('#faLinkText').tooltip();
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
    return '<i class="fa fa-'+name+'" aria-hidden="true"></i>';
}

function getFaLink(Icon, Text){
    var id;
    switch(Icon){
        case 'envelope':
            id = 'faEnvText';
            break;
        case 'github':
            id = 'faGitText'
            break;
        case 'linkedin-square':
            id = 'faLinkText'
            break;
        default:
    }
    return "<div id=\"faicon\">"+getFontAwesome(Icon)+"<div class=\"fatext\" id="+id+" title=\"Copied\">"+Text+"</div></div>";
}

var clipboard = new Clipboard('#faEnvText', {
    text: function() {
        var Text = $('#faEnvText').text();
        return Text;
    }
});


var clipboard2 = new Clipboard('#faGitText', {
    text: function() {
        var Text = $('#faGitText').text();
        return Text;
    }
});

var clipboard3 = new Clipboard('#faLinkText', {
    text: function() {
        var Text = $('#faLinkText').text();
        return Text;
    }
});

// function copyMe(Text,id) {
clipboard.on('success',function(e){
    var clicked = e.trigger.id;
    console.log(clicked);
    var anchor = $('#'+clicked);
    anchor.attr('data-original-title','Copied');
    anchor.tooltip('show');
});
// }



