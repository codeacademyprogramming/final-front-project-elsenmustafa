$(document).ready(function () {
    $(".marker").on("click", function () {
        if ($(".open").css("display") == "none") {
            $(".open").css("display", 'block')
        } else {
            $(".open").css("display", "none")
        }
    })
    //DOCTORS//
    $(function () {
        $(document).on("click", ".accord", function () {
            $(this).closest(".row").find(".accord-content").slideToggle(400);
            $(this).toggleClass("hide-accord");
            if ($(this).hasClass("hide-accord")) {
                $(this).find("i").removeClass("  fa-chevron-down").addClass("  fa-chevron-right")
            } else {
                $(this).find("i").removeClass("  fa-chevron-right").addClass("  fa-chevron-down")
            }
        })
    })
    $(document).on("click", ".mapmarker", function () {
        $(this).toggleClass("openmap");
        if ($(this).hasClass("openmap")) {
            $(".map-ul").css("display", "block");
        }
        else (
            $(".map-ul").css("display", "none")
        );

    });
    //Payment//
    $(document).on("keyup", "#price", function (e) {
        let max = 3;
        let price = $("#price").val();
        if (price.length >= max) {
            if (parseInt(price) > 500) {
                price = 500;
            }
        }
        $(".sum").css({
            "background-color": "#159ee3",
            "color": "white"
        });
        $(".price").text(price + "AZN");
        if (!$("#price").val()) {
            $(".price").css({
                "background-color": "transparent",
                "color": "#7c7c7c"
            });
            $(".sum p").text("0 AZN");
        }

    });


    //scrol fixed//
    $(window).scroll(function () {
        if ($(window).scrollTop() > 147) {
            $(".small-nav").addClass("fixed-nav")
        }
        else {
            $(".small-nav").removeClass("fixed-nav")
        }
    });

    //slider home//
    let index2 = 0;
    let slider = $(".slider-content");

    // Create dots for slider

    function createDots() {
        for (let i = 0; i < $(".slider img").length - 1; i++) {
            let dot = "<li> </li>"
            $(".dots ul").append(dot);
        }
    }
    createDots();




    // Burger Menu / Aside Nav show/hide

    $(document).on("click", ".openmenu", function () {
        $(".menu").removeClass("openmenu").addClass("closemenu");
        $(".head-right").addClass("activeside");
        $("header").addClass("fixed-header");
        $("section").css("top", "147px");
        $("footer").css("bottom", "-147px");
        $("#footer").css("bottom", "0");
        $(".aside-nav").addClass("show-me");
        $(".menu span").removeClass("remove1 remove2 remove3").addClass("active1 active2");
        $(".menu").css("transform", "rotate(45deg)");

    })

    $(document).on("click", ".closemenu", function () {
        $(".menu").removeClass("closemenu").addClass("openmenu")
        $(".aside-nav").removeClass("show-me");
        $(".head-right").removeClass("activeside");
        $("header").removeClass("fixed-header");
        $("section").css("top", "0");
        $("footer").css("bottom", "0");
        $(".menu").css("transform", "rotate(0deg)");
        $(".menu span").addClass("remove1 remove2 remove3");
        $(".menu span").removeClass("active2 active1");
      
    })




    //icons//
    $(document).on("mouseenter", ".msg", function () {
        $(".msg").css("transform", "rotate(360deg)")
        $(".msg-bord1").removeClass("d-none");
        $(".msg-bord2").removeClass("d-none")
        $(".contacts li").css("box-shadow", "0 0 15px 0 rgba(0, 0, 0, 0.2)");
        $(".contacts li").css("opacity", "1");
        $(".contacts li:first-child").css("bottom", "276px");
        $(".contacts li:nth-child(2)").css("bottom", "204px");
        $(".contacts li:last-child").css("bottom", "132px");
    })

    $(document).on("mouseleave", ".msg", function () {
        $(".msg").css("transform", "rotate(0deg)");
        $(".msg-bord1").addClass("d-none");
        $(".msg-bord2").addClass("d-none")
        $(".contacts li").css("box-shadow", "0 0 0 0 rgba(0, 0, 0, 0)");
        $(".contacts li:first-child").css("bottom", "80px");
        $(".contacts li:nth-child(2)").css("bottom", "80px");
        $(".contacts li:last-child").css("bottom", "80px");
        $(".contacts li").css("opacity", "0");
    })




    // Slider on click   *******************

    function slideOnClick() {
        $(document).on("click", ".dots li", function () {
            let indexDot = $(this).index();

            $(".dots li").removeClass("active-dot");
            $(this).addClass("active-dot");

            slider.css("opacity", "0");
            slider.eq(indexDot).css("opacity", "1");

            $(".img-content>div").addClass("d-none").removeClass("d-block").css("opacity", "0");
            $(".img-content>div").eq(indexDot).removeClass("d-none").addClass("d-block").css("opacity", "1");

            $(".dots h3").addClass("d-none").removeClass("d-block").css("opacity", "0");

            $(".dots h3").eq(indexDot).removeClass("d-none").addClass("d-block").css("opacity", "1");

        });
    }

    slideOnClick()

    setInterval(() => {
        index2++;
        if (index2 > slider.length - 1) {
            index2 = 0;
        }
        slider.css("opacity", "0").removeClass('animate');
        slider.eq(index2).css("opacity", "1").addClass('animate');

        $(".img-content>div").addClass("d-none").removeClass("d-block").css("opacity", "0");
        $(".img-content>div").eq(index2).removeClass("d-none").addClass("d-block").css("opacity", "1");

        $(".dots li").removeClass("active-dot");
        $(".dots li").eq(index2).addClass("active-dot");

        $(".dots h3").addClass("d-none").removeClass("d-block").css("opacity", "0");
        $(".dots h3").eq(index2).removeClass("d-none").addClass("d-block").css("opacity", "1");
    }, 5000);




    //symptom//
    $(document).on("mouseover", "map[name = 'mapman'] area", function () {
        $("#man").attr("src", `${$(this).attr("data-part")}`);
    });

    $(document).on("mouseout" , "map[name = 'mapman'] area" , function(){
        $("#man").attr("src", "css/images/man_empty.png");
    })

    $(document).on("mouseover", "map[name = 'mapwoman'] area", function () {
        $("#woman").attr("src", `${$(this).attr("data-part")}`);
    });

    $(document).on("mouseout" , "map[name = 'mapwoman'] area" , function(){
        $("#woman").attr("src", "css/images/man_empty.png");
    })

    $(document).on("click", "map area", function () {
       $(".symptoms-map").addClass("d-none");
       $(".symptoms-list").removeClass("d-none")
    });
});



