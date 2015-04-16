$(document).ready(function() {        
    $('#viewtoggle > li,#viewtoggle-euro > li').click(function() {
    var ix = $(this).index();

    $('#btc-balance').toggle( ix === 0 );
    $('#euro-balance').toggle( ix === 1 );
    });   

    $('#btc-buy').bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('#buy-btc').modal({
            minHeight:400,
            minWidth: 400,
            overlayClose:true
        });

        console.log("loaded");

    });

    $('#btc-sell').bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('#sell-btc').modal({
            minHeight:400,
            minWidth:400,
            overlayClose:true
        });

        console.log("loaded");

    });

    $('#euro-deposit').bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('#deposit-euro').modal({
            minHeight:375,
            minWidth: 325,
            overlayClose:true
        });

        console.log("loaded");

    });

    $('#euro-withdrawal').bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('#withdrawal-euro').modal({
            minHeight:500,
            minWidth: 325,
            overlayClose:true
        });

        console.log("loaded");

    });


    $("#input-amount-multisig").click(function(e) {
        $(".show-conversion").toggle();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.show-conversion, .show-conversion *')) {
            $(".show-conversion").hide();
        }
    });


    $('#share-wallet').click(function(e) {
        $(".social-share").toggle();
        $("#share-wallet").hide();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.social-share, .social-share *')) {
            $(".social-share").hide();
            $("#share-wallet").show();
        }
    });

    $('.pmt-button').click(function() {
        $(".field.body").hide();
    });

    $('.change-selection').click(function() {
            $(".payment-sepa").hide();
            $(".payment-pbw").hide();
            $(".payment-sofort").hide();
            $("#sofort-button").show();
            $("#pbw-button").show();
            $("#sepa-button").show();
            $('.field.body').show();
    });


    $('#sepa-button').click(function() {
            $(".payment-sepa").show();
            $("#pbw-button").hide();
            $("#sofort-button").hide();
            $(".change-bank").show();
    });

    $('#pbw-button').click(function() {
            $(".payment-pbw").show();
            $("#sepa-button").hide();
            $("#sofort-button").hide();
            $(".change-bank").show();
    });

    $('#sofort-button').click(function() {
            $(".payment-sofort").show();
            $("#pbw-button").hide();
            $("#sepa-button").hide();
            $(".change-bank").show();
    });

    $('#sepa-submit').click(function() {
        $(".payment-sepa-ready").show();
    });

    $('.send-btc').click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".green")
                    .text('SUCCESS!')
                    .show();
                $(".green").show;
                setTimeout(function() { 
                    $('.green').fadeOut(); 
                }, 5000);
            },
            error: function () {                
                $(".red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.red').fadeOut(); 
                }, 5000);
            }
        })
    }); 

    $('.open-mobile-send').click(function() {
        $(".mobile-send-form").show();
    });

    $('#btc-button-cancel').click(function() {
        $(".mobile-send-form").hide();
    });


    $("input[name='buy']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                console.log('success');
                $(".buy-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.buy-green').fadeOut(); 
                }, 6000);
            },
            error: function () {                
                $(".buy-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.buy-red').fadeOut(); 
                }, 6000);
            }
        })
    }); 


    $("input[name='sell']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".sell-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.sell-green').fadeOut(); 
                }, 10000);
            },
            error: function () {                
                $(".sell-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.sell-red').fadeOut(); 
                }, 10000);
            }
        })
    }); 

    $("input[name='deposit_pbw']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".deposit-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-green').fadeOut(); 
                }, 10000);
            },
            error: function () {                
                $(".deposit-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-red').fadeOut(); 
                }, 10000);
            }
        })
    }); 

    $("input[name='deposit_sofort']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".deposit-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-green').fadeOut(); 
                }, 10000);
            },
            error: function () {                
                $(".deposit-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-red').fadeOut(); 
                }, 10000);
            }
        })
    }); 

    $("input[name='deposit_bank']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".deposit-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-green').fadeOut(); 
                }, 10000);
            },
            error: function () {                
                $(".deposit-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.deposit-red').fadeOut(); 
                }, 10000);
            }
        })
    }); 

    $("input[name='withdraw']").click(function(eventObj) {
            eventObj.preventDefault();
            console.log('foo');
        $.ajax({
            url: 'http://www.mocky.io/v2/54489277281a0c10017194bf',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function (data) {
                $(".withdraw-green")
                    .text('SUCCESS!')
                    .show();
                setTimeout(function() { 
                    $('.withdraw-green').fadeOut(); 
                }, 10000);
            },
            error: function () {                
                $(".withdraw-red")
                    .text('FAIL!')
                    .show();
                setTimeout(function() { 
                    $('.withdraw-red').fadeOut(); 
                }, 10000);
            }
        })
    }); 

    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '.main-links',
      side: 'right'
    });

    $('.dial').val(0);

    $('.profile-question.one').bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.profile-question.one > .task').hide();
        $('.profile-question.one > img').hide();
        $("input[name='email']").show();
        $("input[name='email-submit']").show();

        console.log("shown");

    });

    $("input[name='email-submit']").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.profile-question.two').show();
        $('.profile-question.one').hide();
        $('.dial').val(20).trigger('change');

        console.log("sent");

    });

    $(".profile-question.two").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.profile-question.two > .task').hide();
        $('.profile-question.two > img').hide();
        $('.progress-block-space').hide();
        $('.profile-question.two').hide();
        $('.street').show();

        console.log("loaded");

    });

    $("input[name='street-submit']").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.street').hide();
        $('.postal-code').show();
        $('.city').hide();
        $('.country').hide();
        $('.dial').val(40).trigger('change');

        console.log("postal code");

    });

    $("input[name='postal-submit']").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.progress-block-space').hide();
        $('.postal-code').hide();
        $('.city').show();
        $('.dial').val(60).trigger('change');

        console.log("loaded");

    });


    $("input[name='city-submit']").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.city').hide();
        $('.country').show();
        $('.dial').val(80).trigger('change');


        console.log("loaded");

    });

    $("input[name='country-submit']").bind('click', function(e) {
        e.preventDefault(); 

        console.log("clicked");

        $('.country').hide();
        $('.profile-question.two').hide();
        $('.control-panel > form').hide();
        $('.complete').show();
        $('.dial')
            .val(100)
            .trigger('change');

        console.log("loaded");

    });

    $(function () {
        $(".dial").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'fgColor': "#726499",
        });
    });

    $('.open-mobile-send').click(function(e) {
        $(".mobile").show();
        e.stopPropagation();
    });

    $('#btc-button-cancel').click(function(e) {
        $(".mobile").hide();
        e.stopPropagation();
    });
    
    $(document).on('click', 'tbody tr.main.expandable', function (event) {
		$details = $(this).next();
		if ($details.css('opacity') == '0' || $details.css('display') == 'none') {
			$details.css({'display': '', 'background-color': '#F0F3F5'}).animate({'opacity': '1'}, 333, 'swing');
			$(this).css('background-color', '#F0F3F5').animate({'opacity': '1'}, 333);
		}
		else if ($details.css('opacity') == '1') {
			$details.animate({'opacity': '0'}, 333, 'swing', function () {
				$details.css({'display': 'none', 'background-color': ''});
			});
			$(this).css('background-color', '').animate({'opacity': '1'}, 333, 'swing');;
		}
	});

    });