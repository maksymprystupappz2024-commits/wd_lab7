$(function () {
    // smooth scroll
    $(".nav a").on("click", function (e) {
        const href = $(this).attr("href");
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();
        const $t = $(href);
        if ($t.length) $("html, body").animate({ scrollTop: $t.offset().top - 86 }, 400);
    });

    // jQuery UI widgets
    $("#uiAccordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: 0,
        animate: 160
    });

    $("#tripDate").datepicker({
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        minDate: 0
    });

    $("#tripDate2").datepicker({
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        minDate: 0,
        maxDate: 365
    });

    $("#uiMenu").menu();

    $("#altSlider").slider({
        min: 200,
        max: 2600,
        step: 50,
        value: 1200,
        slide: function (event, ui) {
            $("#altValue").text(ui.value);
        }
    });

    $("#packSlider").slider({
        range: true,
        min: 2,
        max: 25,
        step: 1,
        values: [6, 12],
        slide: function (event, ui) {
            $("#packValue").text(ui.values[0] + " — " + ui.values[1]);
        }
    });

    $(document).tooltip({
        items: ".tip",
        track: true,
        show: { duration: 120 },
        hide: { duration: 120 }
    });

    $("#uiTabs").tabs({
        heightStyle: "content"
    });

    // Dialog
    $("#openDialog").on("click", function () {
        $("<div>" +
            "<p><b>Довідка:</b> сторінка містить елементи jQuery UI (Accordion, Datepicker, Menu, Slider, Tooltip, Tabs) " +
            "та плагіни OwlCarousel і UniteGallery.</p>" +
            "<p>Зроби скріни кожного блоку для звіту.</p>" +
            "</div>")
            .dialog({
                title: "Довідка до лабораторної",
                modal: true,
                width: 560,
                resizable: false,
                buttons: {
                    "Закрити": function () {
                        $(this).dialog("close");
                        $(this).remove();
                    }
                }
            });
    });

    // OwlCarousel
    $("#hikeCarousel").owlCarousel({
        loop: true,
        margin: 14,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2600,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            650: { items: 2 },
            1020: { items: 4 }
        }
    });

    // UniteGallery Tiles
    if ($("#galleryTiles").length && $.isFunction($.fn.unitegallery)) {
        $("#galleryTiles").unitegallery({
            gallery_theme: "tiles",
            tiles_type: "nested",
            tiles_space_between_cols: 8,
            tiles_space_between_cols_mobile: 6,
            tile_enable_textpanel: true,
            tile_textpanel_always_on: false,
            tile_textpanel_bg_color: "rgba(15,118,110,0.72)",
            tile_textpanel_title_color: "#ffffff",
            tile_textpanel_title_text_align: "center"
        });
    }

    // UniteGallery Video
    if ($("#galleryVideo").length && $.isFunction($.fn.unitegallery)) {
        $("#galleryVideo").unitegallery({
            gallery_theme: "video",
            theme_skin: "right-thumb"
        });
    }
});
