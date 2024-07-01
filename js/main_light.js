(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#000";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
            datasets: [{
                    label: "積體電路",
                    data: [5372.38, 4859.75, 4528.01, 5465.87, 7556.52, 11939.83, 12960.34],
                    backgroundColor: "rgba(16,173,139, .7)"
                },
                {
                    label: "光電",
                    data: [2815.57, 2446.96, 2120.76, 2122.76, 2493.28, 1888.16	, 1742.04],
                    backgroundColor: "rgba(16,173,139, .5)"
                },
                {
                    label: "電腦及周邊",
                    data: [19.87, 18.61, 160.91, 221.50, 88.34, 115.86, 146.84],
                    backgroundColor: "rgba(16,173,139, .3)"
                },
                {
                    label: "通訊",
                    data: [51.50, 54.42, 91.35, 127.29, 166.40, 211.21, 327.89],
                    backgroundColor: "rgba(16,173,139, .3)"
                },
                {
                    label: "精密機械",
                    data: [406.34, 460.03, 412.24, 385.91, 481.10, 519.13, 510.81],
                    backgroundColor: "rgba(16,173,139, .3)"
                },
                {
                    label: "生物技術",
                    data: [95.69, 91.52, 91.87, 125.90, 134.01, 127.31, 120.61],
                    backgroundColor: "rgba(16,173,139, .3)"
                },
                {
                    label: "其他",
                    data: [26.23, 25.14, 27.22, 28.09, 29.19, 32.25, 46.47],
                    backgroundColor: "rgba(16,173,139, .3)"
                },
            ]
            },
        options: {
            responsive: true
        }
    });


    // sun Chart
    var ctx2 = $("#sun").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2018","2019","2020", "2021", "2022", "2030(目標)"],
            datasets: [{
                    label: "MW",
                    data: [ 27.853,43.919,54.519,59.140,63.675, 84],
                    backgroundColor: "rgba(16,173,139, .7)",
                    fill: true
                }    
                // ,
                // {
                //     label: "Revenue",
                //     data: [99, 135, 170, 130, 190, 180, 270],
                //     backgroundColor: "rgba(16,173,139, .5)",
                //     fill: true
                // }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(16,173,139, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(16,173,139, .7)",
                    "rgba(16,173,139, .6)",
                    "rgba(16,173,139, .5)",
                    "rgba(16,173,139, .4)",
                    "rgba(16,173,139, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

