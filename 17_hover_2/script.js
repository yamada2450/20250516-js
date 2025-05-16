$(function () {
    // jQueryを記述
    $("a").hober(function() {
        $(this).css("color","#FF0000");
    },function() {
        // $(this).css("color","#0000FF")
        $(this).css("fontSize","24px")
         $(this).css("backgroundColor","red")
    });
}) ;