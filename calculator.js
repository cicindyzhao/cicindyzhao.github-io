$(
        function() {
            $("#calculate").click(function() {
                console.log("clicked");
                var num1 = $("#num1").val()
                var num2 = $("#num2").val()
                var result = num1 * 1 + num2 * 1;
                /*或者 var result=+num1+ +num2*/
                $('#result').val(result);
            })
        }
    )
    /*整个文档加载完后再实行*/
console.log("Test")