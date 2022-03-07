// $(document).ready(function(){
// $("button").on("click",function(){
// //  $("p").hide(1000);
//     // $("p").toggle(1000);


// // callback
// $(".admin").animate({
//     width:"50%"
// },1000, function(){
//     console.log("done");
// }


// // chain
// // $(".admin").slidetoggle(1000);
// // console.log("done")






// $(".admin").animate({
//     width:"50%"
// },1000,function(){
//     $(".user").animate({
//         width:"50%"
//     },1000);
// }


// )


// })


// $(".icon").on("mouseenter", function(){
//     $(".password").attr("type","text");
// })

// $(".icon").on("mouseleave", function(){
//     $(".password").attr("type","password");
// })

// $(".email").on("blur",function(){
//     if($(".email").val()==""){
//         if($(".email").hasClass("border-success")){
//             $(".email").removeClass(" border border-success")
//         }
//         $(".email").addClass(" border border-danger");}
//         else{
//             if($(".email").hasClass("border-danger")){
//                 $(".email").removeClass(" border border-danger")
//             }
//          $(".email").addClass(" border border-success");}
        
//         })
//     })
    // console.log($("p").siblings())
    // // to figure if p is array or not
    // console.log(Array.isArray($("p").siblings()))
    // console.log($("p").next())
    // console.log($("p").nextUntill("div"))
    // console.log($("p").nextAll())
    // $("p").nextUntill("div").css("background","red");
    // console.log($("p").parent())
    // console.log($("p").parents())
    // console.log($("p").eq(1))

//  $("p").siblings().not("test").css("background","red");



// $(".accordion-header").on("click",function(){
//     $(this).siblings().slideToggle();
//     $(".collapse").not($(this).siblings()).slideUp();
// })



$(document).ready(function(){
    $(".nav-link").on("click",function(){
        let page = $(this).data("target");
        $("#data").load(page+".html");
    })
}
    
    )

