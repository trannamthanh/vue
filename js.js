$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});

$(document).click(function(e) {
    if (!$(e.target).is('li')) {
        $('.collapse').collapse('hide');
    }
});

$(function() {
    $('ul.components li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(function() {
    $('#view-option a').on('click', function() {
        $(this).parent().find('a.active').removeClass('active');
        $(this).addClass('active');
    });
});
// api
function getData() {
    $.ajax({ 
        url: 'http://5cda2dafeb39f80014a75123.mockapi.io/api/members/',
        type: 'GET',
        datatype: 'json',
        success: function(result) {
            var data = '';
            var data2 = '';
            var popup = '';
            var divCount = result.length;
            for (var i = 0; i < divCount; i++) {
                // style1
                data += '<div class="row form-inline shadow">'
                data += '<a href="#popup" data-toggle="modal" data-target="#popup' + result[i].id + '"><img class="card-img" src="' + result[i].avatar + '" style="width: 150px; float: left"></a>'
                data += '<h5>' + result[i].name + '</h5>'
                data += '<div class="col">'
                data += '<h5 class="card-title" style="text-align: right">' + result[i].job + '</h5>'
                data += '</div>'
                data += '<div class="col">'
                data += '<input type="checkbox" style="float: right" id="chkbox"> </b>'
                data += '</div>'
                data += '</div>'
                data += '<div class="spacer" style="height:23px">'
                data += '</div>'
                $(".productapi").html(data);
                //style 2 
                data2 += '<div class="col-sm-3">';
                data2 += '<a id="' + result[i].id + '" href="#popup" data-toggle="modal"  data-target="#popup" class="card-id"><img height="200" class="card-img-top" src="' + result[i].avatar + '" alt=""></a>';
                data2 += '<div class="card-body">';
                data2 += '<input type="checkbox" name="item[]" id="item-check class="col"><p>' + result[i].name + '</p><p class="text-muted">' + result[i].job + '</p></div>';
                data2 += '</div>';
                data2 += '</div>';
                data2 += '</div>';
                data2 += '</div>';
                $("#productapi2").html(data2);
                //pop
                popup += '<div class="modal fade product_view" id="popup' + result[i].id + '">'
                popup += '<div class="modal-dialog modal-sm modal-dialog-centered">'
                popup += '<div class="modal-content">'
                popup += '<div class="row">'
                popup += '<div class="col product_img">'
                popup += '<img src="' + result[i].avatar + '" class="card-img-top">'
                popup += '</div>'
                popup += '</div>'
                popup += '<div class="row">'
                popup += '<div class="col product_content text-center">'
                popup += '<h6> Name: ' + result[i].name + '</h6>'
                popup += '<p> Job: ' + result[i].job + '</p>'
                popup += '</div>'
                popup += '</div>'
                popup += '</div>'
                popup += '</div>'
                popup += '</div>'
                $("#pop").html(popup);

            }

        } 

    });

}
getData();