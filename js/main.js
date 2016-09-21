//Chama ao carregar todo o HTML
$(document).ready(function(){
    
	
	//descer
	$(".descer a").click(function(){
		var id = $(this).attr("href");
		if ($(id).length>0) {
			var idt = $(id).offset().top - $("#header").outerHeight(); - 2;
			$("html, body").animate({ scrollTop: idt },1000);
		}
		return false;
	});
	
	
});



//Chama ao carregar todas imagens e includes
$(window).load(function(){
	
	//loading
	$("#loading").fadeOut(600);
	
});


//tamanho das telas
$(window).on("load resize",function(){
	
	var wh = $(window).height();
	var hh = $("#header").outerHeight();
	var minh = wh - hh;
	$(".main").css("min-height",minh);
	$(".main .conteudo").css("height",minh);
	if (!$("body").hasClass('header-sempre-colorido')) {
		$("#upper").css("min-height",wh);
		$("#upper .conteudo").css("height",wh);
	}
	
});

var slider_iniciado = false;

//scroll
$(window).on("load scroll",function(){
	
	var st = $(window).scrollTop();
	
	//botao header
	var ponto = $("#upper").outerHeight();
	if (st>ponto) $("body").addClass("header-scroll"); else $("body").removeClass("header-scroll");
	
	//cycle
	if (!slider_iniciado) {
		var slider_ponto = $("#bottom").offset().top - $("#bottom").outerHeight() + 250;
		console.log(st +' ' +slider_ponto);
		if (st>slider_ponto) {
			$("#bottom .slides").cycle('resume');
			//var html = $("#bottom1 .iphone").html();
			//$("#bottom1 .iphone").html("");
			//$("#bottom1 .iphone").html(html);
			var src = $("#bottom1 .iphone .frame").attr("src");
			$("#bottom1 .iphone .frame").attr("src",src);
			$("#bottom .slides").on("cycle-before",function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
				var $frame = $(incomingSlideEl).find(".iphone .frame");
				var src = $frame.attr("src");
				$frame.attr("src",src);
			});
			slider_iniciado = true;
		}
	}
	
});
