
var golimvalues = "!?_ *`~.,\"'\\|/=+$#№@()&^%><][{}:;1234567890";

        function checkform() 
        {
            var form = document.getElementById("myForm");

            var flag = checkfield(
                document.getElementById("first_name").value,
                document.getElementById("fnameerror"));
            if (flag == false) {
                return false;
            }

            var flag = checkfield(
                document.getElementById("sport").value,
                document.getElementById("sporterror"));
            if (flag == false) {
                return false;
            }
            
             flag =  checkfield(
                document.getElementById("last_name").value,
                document.getElementById("lnameerror"));
             if (flag == false) {
                return false;
            }
            flag =  checkfield(
                document.getElementById("country").value,
                document.getElementById("countryerror"));
             if (flag == false) {
                return false;
            }
            
            flag = checkfield (
                document.getElementById("city").value,
                document.getElementById("cityerror"));
            if (flag == false) {
                return false;
            }

            if(flag == true){
                form.submit();
                return true;
            }
        }

        function checkfield(inp, error) 
        {
            var bad = "";

            if (inp == "") return true;

            if (inp.length > 30) bad += "Too many characteres; ";

            for (var i = 0; i < golimvalues.length; i++){
                var current = golimvalues.charAt(i);
                var flag = inp.indexOf(current);
                if (flag != -1){
                    bad += "Incorrect values; ";
                    error.innerHTML = bad;
                    return false

                }
            }
            if (bad == "") {
                error.innerHTML = "";
                return true
            }
            if (bad != "") {
                error.innerHTML = bad;
                return false;
            }
        }


        $(document).ready(function()
                {
                    $(".prof").bind("click", function(event)
                        {   
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                            $.ajax({
                                url: "/profriend",
                                type: "POST",
                                data: 
                                        {
                                            "csrfmiddlewaretoken"   : csrft,
                                            "reciever_id"           : (event.target.value)
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //if (result=="ok") {$(event.target).remove();}
                                } 
                                
                            });
                            $(event.target).detach();
           
                        }
                    );
                }
            );


        function myreset()
        {
            document.getElementById("myForm").reset();
            document.getElementById("first_name").value = "";
            document.getElementById("last_name").value = "";
            document.getElementById("birth_year").value = "";
            document.getElementById("country").value = "";
            document.getElementById("city").value = "";
            document.getElementById("sport").value = "";
            document.getElementById("sex").value = "no matter";
            return 0;
        }

        $(document).ready(function()
                        {
                            $(".accept").bind("click", function(event)
                                                {
                                                    var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                                                    $.ajax({
                                                            url: "/acceptfriend",
                                                            type: "POST",
                                                            data:
                                                                    {
                                                                        "sender"                : (event.target.value),
                                                                        "csrfmiddlewaretoken"   : csrft
                                                                    },
                                                            dataType : "text",
                                                            success : function(result){}

                                                        });
                                                    $(event.target).closest("tr").detach();
                                                    
                                                }

                                            );
                        }
                    );

        $(document).ready(function()
                        {
                            $(".refuse").bind("click", function(event)
                                                {
                                                    var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                                                    $.ajax({
                                                            url: "/refusefriend",
                                                            type: "POST",
                                                            data:
                                                                    {
                                                                        "csrfmiddlewaretoken"   : csrft,
                                                                        "sender"                : (event.target.value)
                                                                    },
                                                            dataType : "text",
                                                            success : function(result){}

                                                        });
                                                    $(event.target).closest("tr").detach(); 
                                                }

                                            );
                        }
                    );

        $(document).ready(function()
                        {
                            $(".cancel").bind("click", function(event)
                                                {

                                                    var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                                                    $.ajax({
                                                            url: "/cancelfriend",
                                                            type: "POST",
                                                            data:
                                                                    {
                                                                        "csrfmiddlewaretoken"   : csrft,
                                                                        "reciever"              : (event.target.value)
                                                                    },
                                                            dataType : "text",
                                                            success : function(result){}

                                                        });
                                                    $(event.target).detach();
                                                    
                                                }

                                            );
                        }
                    );

        $(document).ready(function()
                        {
                            $(".delete").bind("click", function(event)
                                                {
                                                    var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                                                    $.ajax({
                                                            url: "/deletefriend",
                                                            type: "POST",
                                                            data:
                                                                    {
                                                                        "csrfmiddlewaretoken"   : csrft,
                                                                        "del"                   : (event.target.value)
                                                                    },
                                                            dataType : "text",
                                                            success : function(result){}

                                                        });
                                                    $(event.target).remove();
                                                    
                                                }

                                            );
                        }
                    );