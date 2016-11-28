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
	
	
	//goto
	$(".goto").click(function(){
		var $a = $(this);
		var id = $a.data("goto");
		var $el = $(id);
		if ($("body.home").length>0) {
			//se estiver na home, faz o scroll
			if ($el.length>0) {
				var t = $el.offset().top;
				if (id!="#wrapper") t = t - $("#header").outerHeight() + 5;
				$("html, body").animate({ scrollTop: t },1000);
			} else {
				alert('Elemento "'+id+'" não existe!');
			}
		} else {
			//se não estiver na home, volta pra lá
			window.location = 'index.html'+id;
		}
		$("body").removeClass("menu-mobile-open");
		return false;
	});
	
	
	//menu mobile
	$("#menu-mobile").click(function(){
		$("body").toggleClass("menu-mobile-open");
		return false;
	});
	
	
	
});



//Chama ao carregar todas imagens e includes
$(window).load(function(){
	
	
	//loading
	$("#loading").fadeOut(600);
	
	
	//form contato
	$(".abrir-fale, #form .x, #form .overlay").click(function(){
		$("#form").toggleClass("open");
		return false;
	});
	
});


//tamanho das telas
$(window).on("load resize",function(){
	
	var wh = $(window).height();
	var hh = $("#header").outerHeight();
	var minh = wh - hh;
	//console.log(wh+' '+hh+' '+minh);
	$(".main.altura-auto").each(function(){
        var $main = $(this);
		var $conteudo = $main.find(".conteudo:first");
		var main_h = minh;
		if ($main.attr("id")=="upper" && !$("body").hasClass('header-sempre-colorido')) {
			main_h = wh;// - $("#upper .footer").outerHeight();
		}
		$main.css("min-height",main_h);
		$conteudo.css("height",main_h);
    });
	
});

var slider_iniciado = false;

//scroll
$(window).on("load scroll",function(){
	
	var st = $(window).scrollTop();
	
	//mostra header
	var ponto = 100; if ($(window).width()<=992) ponto = 2;
	if (st>ponto) $("body").addClass("header-scroll"); else $("body").removeClass("header-scroll").removeClass("menu-mobile-open");
	
	//cycle
	if ($("#bottom").length>0) {
		if (!slider_iniciado) {
			var slider_ponto = $("#bottom").offset().top - $("#bottom").outerHeight() + 250;
			//console.log(st +' ' +slider_ponto);
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
	}
	
	//posições do menu
	var marca_menu = 0;
	var sst = $(window).scrollTop() + $("#header").outerHeight() + 100;
	$(".main").each(function(){
        var $main = $(this);
		var menu = $main.data("menu");
		if (menu!==undefined) {
			if ($main.offset().top<sst) marca_menu = menu;
		}
    });
	if (marca_menu>0) {
		var $menux = $("#menu .menu"+marca_menu);
		if (!$menux.hasClass("active")) {
			$("#menu a").removeClass("active");
			$menux.addClass("active");
		}
	} else {
		$("#menu a").removeClass("active");
	}
	
});
