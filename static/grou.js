var golimvalues = "!?_*`~.,\"'\\|/=+$#№@()&^%><][{}:;";

        function checkform() {
            var form = document.getElementById("group_creation");

            var flag = checkfield(
                document.getElementById("group_name").value,
                document.getElementById("groupnameerror"));
            if (flag == false) {
                return false;
            }

            var flag = checkfield(
                document.getElementById("group_description").value,
                document.getElementById("groupdescriptionerror"));
            if (flag == false) {
                return false;
            }
            form.submit();
            return true;
        }

        function checkfield(inp, error, maxlen) {
            var bad = "";
            maxlen--;

            if (inp == "") { 
                bad += "Field is not fulfilled; ";
                error.innerHTML = bad;
                return false
            }

            if (inp.length > maxlen) bad += "Too many characteres; ";

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
                    $(".cancelfollowing").bind("click", function(event)
                        {   
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                            $.ajax({
                                url: "/cancelfollowing",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );

        $(document).ready(function()
                {
                    $(".progroupmemb").bind("click", function(event)
                        {   
                            
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                 
                            $.ajax({
                                url: "/progroupmemb",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );

        $(document).ready(function()
                {
                    $(".progroupadmin").bind("click", function(event)
                        {   

                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                 
                            $.ajax({
                                url: "/progroupadmin",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );

        $(document).ready(function()
                {
                    $(".acceptadmin").bind("click", function(event)
                        {   
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                                             
                            $.ajax({
                                url: "/acceptadmin",
                                type: "POST",
                                data: 
                                        {
                                            "aid" : (event.target.value),
                                            "gid" : document.getElementById("gid").value,
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );
        
    
            $(document).ready(function()
                {
                    $(".acceptmemb").bind("click", function(event)
                        {   
                            
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                                             
                            $.ajax({
                                url: "/acceptmemb",
                                type: "POST",
                                data: 
                                        {
                                            "mid" : (event.target.value),
                                            "gid" : document.getElementById("gid").value,
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );
        
            $(document).ready(function()
                {
                    $(".leavememb").bind("click", function(event)
                        {   

                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                 
                            $.ajax({
                                url: "/leavememb",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );

        
        
            $(document).ready(function()
                {
                    $(".canceladmin").bind("click", function(event)
                        {   
                            
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                                             
                            $.ajax({
                                url: "/canceladmin",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );
        
            $(document).ready(function()
                {
                    $(".leaveadmin").bind("click", function(event)
                        {   
                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                 
                            $.ajax({
                                url: "/leaveadmin",
                                type: "POST",
                                data: 
                                        {
                                            "gid" : (event.target.value),
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );
        
            $(document).ready(function()
                {
                    $(".expelmemb").bind("click", function(event)
                        {   

                            var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;                 
                            $.ajax({
                                url: "/expelmemb",
                                type: "POST",
                                data: 
                                        {
                                            "mid" : (event.target.value),
                                            "gid" : document.getElementById("gid").value,
                                            "csrfmiddlewaretoken": csrft
                                        },
                                dataType : "text",
                                success: function(result) {
                                    //$(event.target).remove();
                                } 
                                
                            });
                            $(event.target).remove();
                        }
                    );
                }
            );