$(document).ready(function() {

    $(function() {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    $("#sendButton").on("click", function() {
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        alert(`${name} \n ${email} \n ${message}`);
    });

    $("#apple1").on('click', function() {
        window.location.href = './apple1.html';
    });

    $("#apple2").on('click', function() {
        window.location.href = './apple2.html';
    });

    $("#macintosh128k").on('click', function() {
        window.location.href = './macintosh128k.html';
    });

    $("#macintoshLc").on('click', function() {
        window.location.href = './macintoshLc.html';
    });

    $("#macintoshPortable").on('click', function() {
        window.location.href = './macintoshPortable.html';
    });

    $("#newtonMessagePad").on('click', function() {
        window.location.href = './messagePad.html';
    });

    $("#powerBook").on('click', function() {
        window.location.href = './powerBook.html';
    });
});


