/* global $ */

$(function () {
  // -----------------------
  // Accordion
  // -----------------------
  $("#sportsAccordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: 0
  });

  // -----------------------
  // Datepicker
  // -----------------------
  $("#eventDate").datepicker({
    dateFormat: "dd.mm.yy",
    minDate: 0,
    onSelect: function (dateText) {
      $("#dateHint").text("Обрано дату: " + dateText);
      $("#selectedDate").text(dateText);
    }
  });

  // -----------------------
  // Menu (dropdown)
  // -----------------------
  const athletesBySport = {
    football: {
      title: "Футбол",
      list: ["Ліонель Мессі", "Кріштіану Роналду", "Кіліан Мбаппе"]
    },
    volleyball: {
      title: "Волейбол",
      list: ["Карч Кірай", "Вільфредо Леон", "Павел Заторскі"]
    },
    basketball: {
      title: "Баскетбол",
      list: ["Майкл Джордан", "Леброн Джеймс", "Стефен Каррі"]
    },
    swimming: {
      title: "Плавання",
      list: ["Майкл Фелпс", "Кеті Ледекі", "Сара Шестрем"]
    },
    tennis: {
      title: "Теніс",
      list: ["Новак Джокович", "Рафаель Надаль", "Серена Вільямс"]
    },
    chess: {
      title: "Шахи",
      list: ["Магнус Карлсен", "Гаррі Каспаров", "Хікару Накамура"]
    }
  };

  $("#sportsMenu").menu({
    select: function (event, ui) {
      const sportKey = ui.item.data("sport");
      const data = athletesBySport[sportKey];

      if (!data) return;

      // update quick panel
      $("#selectedSport").text(data.title);
      $("#selectedAthletes").text(data.list.join(", "));

      // update list
      const $list = $("#athletesList");
      $list.empty();
      data.list.forEach((name) => $list.append(`<li>${name}</li>`));

      // hide menu
      $("#sportsMenu").hide();
    }
  });

  // open/close dropdown
  $("#menuBtn").on("click", function () {
    $("#sportsMenu").toggle();
  });

  // close menu when clicking outside
  $(document).on("click", function (e) {
    const isInside = $(e.target).closest("#menuBtn, #sportsMenu").length > 0;
    if (!isInside) $("#sportsMenu").hide();
  });

  // -----------------------
  // Owl Carousel
  // -----------------------
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  // -----------------------
  // UniteGallery
  // -----------------------
  // Tiles gallery
  if ($.fn.unitegallery) {
    $("#galleryTiles").unitegallery({
      gallery_theme: "tiles",
      tiles_type: "nested",
      tiles_space_between_cols: 10,
      tiles_space_between_cols_mobile: 8,
      tiles_nested_optimal_tile_width: 260,
      tile_enable_shadow: true,
      tile_shadow_color: "#000000",
      tile_enable_border: true,
      tile_border_width: 2,
      tile_border_color: "#ffffff",
      tile_enable_textpanel: true,
      tile_textpanel_bg_color: "#0b1220",
      tile_textpanel_bg_opacity: 0.75,
      tile_textpanel_title_text_align: "center",
      tile_textpanel_title_font_family: "Montserrat",
      tile_textpanel_title_font_size: 14
    });

    // Slider gallery
    $("#gallerySlider").unitegallery({
      gallery_theme: "slider",
      slider_scale_mode: "fit",
      slider_enable_arrows: true,
      slider_enable_bullets: true,
      slider_enable_zoom_panel: true,
      slider_enable_progress_indicator: true,
      thumb_width: 120,
      thumb_height: 80,
      thumb_border_effect: true,
      thumb_border_width: 2,
      thumb_border_color: "#ffffff"
    });
  } else {
    // UniteGallery not loaded (CDN issue) — show info in console.
    console.warn("UniteGallery не завантажився. Перевір підключення локальних файлів (libs/unitegallery) або інтернет.");
  }
});
