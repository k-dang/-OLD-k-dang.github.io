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

    getProfile();
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

function getProfile(){
    fetch('https://api.github.com/users/k-dang')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var gitAvatar = data['avatar_url'];
        $("#profile").attr("src", gitAvatar);
    });
}

function getRepos(){
    fetch('https://api.github.com/users/k-dang/repos')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        for (i = 0; i<data.length; i++) {
            $('.list-group').append(
                '<li class="list-group-item"><a href='+
                data[i]['html_url']
                +'>'+
                data[i]['name']+' - '+
                data[i]['language']+
                '</a></li>'
            );
        }
    });
}

let searchBar = $('#searchBar');

searchBar.keyup(function(){
    let filterValue = searchBar.val().toLowerCase();

    $('li.list-group-item').each(function(){
        let atext = $(this).find('a').text();
        lang = atext.split(' - ');

        if(lang[1].toLowerCase().indexOf(filterValue) > -1){
            $(this).css('display', '');
        } else {
            $(this).css('display', 'none');
        }
    });
})
$(window).on('load', function() {
    getRepos();
});