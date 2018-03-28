/*!
    Title: Tom's Addon script
    Author: Tom Gao
    Description: This file contains the scripts associated with Tom's custom portfolio.
*/

$(document).ready(function () {
    $(".mdl").click(function () {
        $("#modalProject").show();
        $("#iframe1").attr("src", $(this).attr("href"));
        return false;
    });

    $("#myBtn").click(function () {
        $("#modalPicture").show();
        return false;
    });

    window.onclick = function (event) {
        $("#modalPicture").hide();
        $("#modalProject").hide();
        $("#iframe1").attr("src", "");
    }
});


