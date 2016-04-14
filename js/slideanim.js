(function () {
    $(document).ready(function() {
        slideanim()
    });
    
    $(window).scroll(function() {
        slideanim()
    });
    
    function slideanim() {
        console.log('size', $(".slideanim").length);
        
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        })
    }
})();