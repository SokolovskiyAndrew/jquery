// $('.header_title').css({
//     'color': 'red'
// });
$(function () {
    $('.tab-panels .tabs li').on('click', function () {
        $('.tab-panels .tabs li.act').removeClass('act');
        $(this).addClass('act');
        //whick panel to show
        let panelToShow = $(this).attr('rel');

        //hide current panel
        // $('.tab-panels .panel.active').slideUp(300, function () {
        //     $(this).removeClass('active');
        //     $('#' + panelToShow).slideDown(300, function () {
        //         $(this).addClass('active');
        //     });
        // });
        $('.tab-panels .panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active');
            $('#' + panelToShow).slideDown(300, function () {
                $(this).addClass('active');
            });
        }
    });
});