function ready() {
    $('.media').on('click', function() {
        document.location = $(this).data('target');

        return false;
    })

    $('.modal').on('shown.bs.modal', function() {
        console.log($(this).find('textarea'));
        $(this).find('textarea').focus()
    })
}

$(document).ready(ready)
$(document).on('page:load', ready);

// document.addEventListener("DOMContentLoaded", (event) => {
//     document.querySelectorAll('.media').forEach(media => {
//         media.addEventListener('click', e => {
//             console.log(e)
//         })
//     })
// });