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
	console.log(wh+' '+hh+' '+minh);
	$(".main").css("min-height",minh);
	$(".main .conteudo").css("height",minh);
	
});


//scroll (botao header)
$(window).on("load scroll",function(){
	
	var st = $(window).scrollTop();
	var ponto = $("#upper").outerHeight();
	if (st>ponto) $("body").addClass("mostra-botao-header"); else $("body").removeClass("mostra-botao-header");
	
});
