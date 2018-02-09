module.exports = function() {
    $(document).ready(
        function(){
            $('.flex-block').click(function(){
                        $(this).toggleClass('flex-block-full');                        
                    }
                );
        });
}