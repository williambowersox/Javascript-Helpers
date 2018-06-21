$(document).ready(function () {
    //Name Extraction Button UI Event
    $("#string1-btn").on('click', function () {
        if (typeof $('#string-format input:checked').val() === "undefined") alert("Please pick an input method");
        else {            
            let format = $('#string-format input:checked').val().toString().toLowerCase();
            let string = typeof $('#string1').val() !== "undefined" ? $('#string1').val() : "";
            let output = ExtractName(string, format);
            if      (format === "fml") output = output.FML;
            else if (format === "lfm") output = output.LFM;
            $('#string1-result').html(output);
        }
    });
});
