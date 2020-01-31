//Checking off the specific todos by clicking
//We can only add listeners to the elements that are already present when the page is loaded.
//That's why ul is selected instead of directly selecting li
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Clicking on X to delete todo item
//We can only add listeners to the elements that are already present when the page is loaded.
//That's why ul is selected instead of directly selecting span
$("ul").on("click","span",function(event){
    //it calls the fadeout function on the parent element of span i.e li(todo item)
    $(this).parent().fadeOut(700,function(){
        //it removes the parent of the clicked span after the fadeout is complete
        //the $(this) here refers to $(this).parent()
        $(this).remove();
    });
    //stops parent event listeners from being executed
    event.stopPropagatin();
});

//creating a new todo
$("input[type = 'text']").keypress(function(event){
    //to check if the enter key is pressed. The JS code for enter key is 13
    if(event.which === 13)
    {
        //todoText contains the value entered in the input
        var todoText = $(this).val();
        //sets the input box to empty after hitting enter
        $(this).val("");
        //.append() is used to append the given string to ul. The string is converted to html and then implemented
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }
    
});

$(".fa-plus").on("click",function(){
    $("input[type = 'text']").fadeToggle();
})
