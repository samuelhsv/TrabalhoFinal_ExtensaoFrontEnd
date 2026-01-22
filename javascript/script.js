$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-xmark');
    });

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        const sections = $('section');
        const navItems = $('.nav-item');

        // Sombra no header ao rolar
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        let activeSectionId = '';

        // Detecção de Seção Ativa
        sections.each(function () {
            const section = $(this);
            const sectionId = section.attr('id');
            const sectionTop = section.offset().top - 160;
            const sectionHeight = section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSectionId = sectionId;
            }
        });

        // Caso especial: Forçar 'Serviços' se o usuário chegar perto do rodapé
        // Isso é necessário se a seção de serviços for a última e não for longa o suficiente
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();
        if (scrollPosition + windowHeight >= documentHeight - 50) {
            activeSectionId = 'services';
        }

        // Caso especial: Topo da página
        if (scrollPosition < 100) {
            activeSectionId = 'home';
        }

        // Aplica a classe active no item correspondente
        if (activeSectionId) {
            navItems.removeClass('active');
            $(`.nav-item a[href="#${activeSectionId}"]`).parent().addClass('active');
        }
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    })

    ScrollReveal().reveal('.estrutura', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('#about .container', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    })
});

// Procura todos os sliders que colaste na página
const slidersNaPagina = document.querySelectorAll(".slider-wrapper");

slidersNaPagina.forEach((container) => {
    // Procura os elementos APENAS dentro deste container específico
    const slides = container.querySelectorAll(".slides");
    const btnLeft = container.querySelector(".left");
    const btnRight = container.querySelector(".right");

    let slideAtual = 0;
    const maxSlide = slides.length;

    const moverPara = (indice) => {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - indice)}%)`;
        });
    };

    btnRight.addEventListener("click", () => {
        slideAtual = (slideAtual === maxSlide - 1) ? 0 : slideAtual + 1;
        moverPara(slideAtual);
    });

    btnLeft.addEventListener("click", () => {
        slideAtual = (slideAtual === 0) ? maxSlide - 1 : slideAtual - 1;
        moverPara(slideAtual);
    });

    // Inicializa este slider
    moverPara(0);
});



