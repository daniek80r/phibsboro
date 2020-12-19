
setTimeout(() => {
    getNativeElement($j('.header-text')).classList.add("show");
}, 200);
 


function onClickMenuItem(id) {
    if (typeof id === 'undefined' || id === "") {
        $j('#sections .show').removeClass('show');
        $j('.withoutCategory').addClass('show');
    } else {
        $j('#sections .show').removeClass('show');
        $j('.' + id).addClass('show');
    }

}

let hash = location.hash.split("#")[1];
onClickMenuItem(hash);

/* Please note the below is only for categoriesB */

/* Jquery search functionality to search the whole page
    a more effective way would be to search by ID but due to
    page design this is not possible */

$(document).ready(function(){
    $("#searchInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("#sections *").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});