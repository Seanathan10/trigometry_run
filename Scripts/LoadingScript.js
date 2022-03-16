// SCRIPT USED ON THE LOADING AND START PAGES

function Test() {
    alert("test");
}

// setTimeout( function() {
//     window.location.href = '../Pages/StartPage.html';
// }, 3000 );

window.onload = function() {
    document.getElementById( 'ButtonDiv' ).style.display = 'none';
    // document.getElementById( 'PlayButton' ).style.display = 'none';
    document.getElementById( 'FullDiv' ).style.display = 'none';
 }

function PlayMTBK(){
    // window.location.href = '../Pages/Game.html';
    
    //var audio = new Audio("https://audio.jukehost.co.uk/I05zU9wJWYeljIsSMxzyFSm1HqNQRo8G");
    //audio.play();
 
    document.getElementById( 'FullDiv' ).style.display = 'block';
    document.getElementById( 'ButtonDiv' ).style.display = 'none';
 
//    setTimeout( function() {
       
//   }, 3000 );
}
