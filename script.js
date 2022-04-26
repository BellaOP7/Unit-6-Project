$(".water").hide();
$(".pizzaparty").hide();
$(".yummykibble").hide();
$(".parkdogs").hide();
$(".home1").hide();
$(".beach").dblclick(function() {
    $(".water").show();
    $(".part-one").hide();
});
$(".park").dblclick(function() {
    $(".parkdogs").show();
    $(".part-one").hide();
});
$(".pizza").click(function() {
    $(".pizzaparty").show();
    $(".parkdogs").hide();
});
$(".kibble").click(function() {
    $(".yummykibble").show();
    $(".parkdogs").hide();
});
$(".home").click(function() {
    $(".home1").show();
    $(".water").hide();
});