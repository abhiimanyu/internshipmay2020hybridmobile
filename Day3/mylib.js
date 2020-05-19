  $(document).ready(function(){
        $("#fact").click(function(){
            var n=parseInt($("#num").val()); //getter
            var f=1;
            f=n*n;
            $("#result").val(f); //setter
        });
    });