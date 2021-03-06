$(document).ready(function () {
    //-toolbox
    $("#toolbox-close-btn").click(function () {
        $("#toolbox-close-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $(".toolbox p").toggle("slide");
        $('.toolbox li').removeClass('active');
    });

    $(".toolbox li").click(function () {
        $('.toolbox li').removeClass('active');
        $(this).addClass("active");
    });

    //-toolbox-blue-color
    $("#toolbox-blue #toolbox-color-btn").click(function () {
        $("#toolbox-blue #toolbox-color-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $("#toolbox-blue p").toggle("slide");
        $("#toolbox-blue li").removeClass("active");
    });

    $("#toolbox-blue li").click(function () {
        $('#toolbox-blue li').removeClass('active');
        $(this).addClass("active");
    });

    //-toolbox-cyan-color
    $("#toolbox-cyan #toolbox-color-btn").click(function () {
        $("#toolbox-cyan #toolbox-color-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $("#toolbox-cyan p").toggle("slide");
        $("#toolbox-cyan li").removeClass("active");
    });

    $("#toolbox-cyan li").click(function () {
        $('#toolbox-cyan li').removeClass('active');
        $(this).addClass("active");
    });

    //-toolbox-green-color
    $("#toolbox-green #toolbox-color-btn").click(function () {
        $("#toolbox-green #toolbox-color-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $("#toolbox-green p").toggle("slide");
        $("#toolbox-green li").removeClass("active");
    });

    $("#toolbox-green li").click(function () {
        $('#toolbox-green li').removeClass('active');
        $(this).addClass("active");
    });

    //-toolbox-orange-color
    $("#toolbox-orange #toolbox-color-btn").click(function () {
        $("#toolbox-orange #toolbox-color-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $("#toolbox-orange p").toggle("slide");
        $("#toolbox-orange li").removeClass("active");
    });

    $("#toolbox-orange li").click(function () {
        $('#toolbox-orange li').removeClass('active');
        $(this).addClass("active");
    });

    //-toolbox-red-color
    $("#toolbox-red #toolbox-color-btn").click(function () {
        $("#toolbox-red #toolbox-color-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $("#toolbox-red p").toggle("slide");
        $("#toolbox-red li").removeClass("active");
    });

    $("#toolbox-red li").click(function () {
        $('#toolbox-red li').removeClass('active');
        $(this).addClass("active");
    });



    //toolbox-line
    $("#toolbox-line-btn").click(function () {
        $("#toolbox-line-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        $(".toolbox-line p.toolbox-text").toggle("slide");

        //$(".title_name").css("display","none");
        $(".toolbox-line .title_name").toggleClass("hide");

        // Menu Line view
        $(".toolbox-line .toolbox-line-right").toggleClass("both");

        //$(".toolbox-line-right").css("clear","both");

        $('.toolbox-line li').removeClass('active'); // Remove active class
    });

    $(".toolbox-line li").click(function () {
        $('.toolbox-line li').removeClass('active');
        $(this).addClass("active");
    });


    //toolbox without text
    $("#toolbox-without-text-btn").click(function () {
        $("#toolbox-without-text-btn span").toggleClass("briskicon briskicon-backward").toggleClass("briskicon briskicon-forward");
        // $(".toolbox-without-text p.toolbox-text").toggle("slide");

        //$(".title_name").css("display","none");
        $(".toolbox-without-text .title_name").toggleClass("hide");

        // Menu Line view
        $(".toolbox-without-text .toolbox-line-right").toggleClass("both");

        //$(".toolbox-line-right").css("clear","both");

        $('.toolbox-without-text li').removeClass('active'); // Remove active class
    });

    $(".toolbox-without-text li").click(function () {
        $('.toolbox-without-text li').removeClass('active');
        $(this).addClass("active");
    });







});
