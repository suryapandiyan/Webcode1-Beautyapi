/*==li active color===================*/
var selector = '.new-p-heading li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
/*==filter=============================*/
$(document).ready(function(){
            $('.filter-list').click(function(){
                const value = $(this).attr('data-filter');
                if(value == 'all'){
                    $('.new-product-box-wrapper').show('1000');
                }
                else{
                    $('.new-product-box-wrapper').not('.'+value).hide('1000');
                    $('.new-product-box-wrapper').filter('.'+value).show('1000');
                }
            });
        });
          