	$(document).ready(function()
						{
							$(".trainfollow").bind("click", function(event)
															{
                                                                var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
																$.ajax({
																		url: 	"/trainfollow",
																		type: 	"POST",
																		data:   {
																					"trainid": (event.target.value),
                                                                                    "csrfmiddlewaretoken": csrft
																				},
																		dataType: "text",
																		success: function(result)
																							{
																								/*if (result == "ok")
																								{
																									
																								}*/
																							}
                                                                                            

																	});
                                                                $(event.target).remove();
															}

													);

						}
		);
	//===============================================================
	$(document).ready(function()
						{
							$(".trainunfollow").bind("click", function(event)
															{
                                                                var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
																$.ajax({
																		url: 	"/trainunfollow",
																		type: 	"POST",
																		data:   {
																					"trainid": (event.target.value),
                                                                                    "csrfmiddlewaretoken": csrft
																				},
																		dataType: "text",
																		success: function(result)
																							{
                                                                                                /*
																								if (result == "ok")
																								{
																									
																								}*/
																							}


																	});
                                                                $(event.target).remove();
															}

													);

						}
		);


        //===============================================================
    $(document).ready(function()
                        {
                            $(".uphype").bind("click", function(event)
                                                            {
                                                                var csrft = document.getElementsByName("csrfmiddlewaretoken")[0].value;
                                                                $.ajax({
                                                                        url:    "/trainweekhype",
                                                                        type:   "POST",
                                                                        data:   {
                                                                                    "trainid": (event.target.value),
                                                                                    "csrfmiddlewaretoken": csrft
                                                                                },
                                                                        dataType: "text",
                                                                        success: function(result)
                                                                                            {
                                                                                                /*
                                                                                                if (result == "ok")
                                                                                                {
                                                                                                    
                                                                                                }*/
                                                                                            }


                                                                    });
                                                                $(event.target).remove();
                                                            }

                                                    );

                        }
        );


//===============================================================
		$(document).ready(function(){chbind();});

    function newexer(button, day)
    {

        var value           = button.value;
        var t               = parseInt(value,10);
        t                   = t + 1;
        var n               = t.toString();
        button.value        = n;
        var array_name      = day + "array";
        array               = document.getElementById(array_name);
        array.value         = array.value + ' ' +n;

        var chb = '<td><input class=checkbox type="checkbox" name="forswap" value="'+day+'.'+n+'" autocomplete="off"></td>'
        
        var appendix = '<tr >'+ chb +'<td><input type="text" name="'+day+'eventname'+ n +'" placeholder="name of an event" onchange="check(this,\'25\')"></td><td><input type="text" name="'+day+'times'+ n +'" placeholder="times" onchange="check(this,\'50\')"></td><td><input type="text" name="'+day+'reps'+ n +'" placeholder="reps" onchange="check(this,\'50\')"></td><td><input type="text" name="'+day+'rest'+ n +'" placeholder="rest" onchange="check(this,\'50\')"></td><td><textarea name="'+day+'exerconf'+ n +'" placeholder="input details of the event" onchange="check(this,\'100\')"></textarea></td><td><button form="none" onclick="eventdel(this, \''+day+'\')" value="'+n+'">remove the event</button></td></tr>';
        var table = "#" + day + "_table";
        $(table).append(appendix);
        chbind();

        return 0;
    }


    function eventdel(butt,day)
    {
        var name      = day + "array";
        var array     = document.getElementById(name);
        array.value   = array.value.replace(butt.value, '');
        $(butt).closest("tr").remove();
        return 0; 
    }

    function chbind()
        {
            $(".checkbox").bind("click", function(event)
                    {
                        var array  = document.getElementsByName("forswap");
                        var num    = 0;

                        for (var i=0; i<array.length; i++)
                        {
                            
                            if (array[i].checked == true)
                            {
                                num++;
                                if(num > 2){
                                    event.target.checked = false;
                                    return false;                                 
                                }
                            }                           
                        }
                        return true;
                        
                    }
                );
        }

    function swapchb()
    {
        var array       = document.getElementsByName("forswap");
        var fday        = "";
        var sday        = "";
        var fn          = "";
        var sn          = "";
        var temp        = "";
        var num         = 0;


        for (var i=0; i<array.length && num<2; i++)
        {

            if (array[i].checked == true && num == 1)
            {
                num++;
                temp = array[i].value;
                sday = temp.charAt(0) + temp.charAt(1) + temp.charAt(2);
                for(var j = 4; j<temp.length; j++)
                {
                    sn = sn + temp.charAt(j);
                }
            }            
                            
            if (array[i].checked == true && num == 0)
            {
                num++;
                temp = array[i].value;
                fday = temp.charAt(0) + temp.charAt(1) + temp.charAt(2);
                for(var j = 4; j<temp.length; j++)
                {
                    fn = fn + temp.charAt(j);
                }
            }
        }

        if (num != 2) { return false; }


        var feventname = document.getElementsByName(fday+'eventname'+fn)[0];
        var seventname = document.getElementsByName(sday+'eventname'+sn)[0];

        temp             = feventname.value;
        feventname.value = seventname.value;
        seventname.value = temp;

        var ftimes     = document.getElementsByName(fday+'times'+fn)[0];
        var stimes     = document.getElementsByName(sday+'times'+sn)[0];

        temp             = ftimes.value;
        ftimes.value     = stimes.value;
        stimes.value     = temp;        

        var freps      = document.getElementsByName(fday+'reps'+fn)[0];
        var sreps      = document.getElementsByName(sday+'reps'+sn)[0];

        temp             = freps.value;
        freps.value      = sreps.value;
        sreps.value      = temp;

        var frest      = document.getElementsByName(fday+'rest'+fn)[0];
        var srest      = document.getElementsByName(sday+'rest'+sn)[0];

        temp             = frest.value;
        frest.value     = srest.value;
        srest.value     = temp;

        var fconf      = document.getElementsByName(fday+'exerconf'+fn)[0];
        var sconf      = document.getElementsByName(sday+'exerconf'+sn)[0];

        temp             = fconf.value;
        fconf.value     = sconf.value;
        sconf.value     = temp;

        return true;        
    }

    function check(inp, n)
    {
        var num = parseInt(n,10);
        num = num - 1; 
        var val = inp.value;
        if (val.length > num)
        {
            inp.value = val.substr(0,num);
        }
        return 0;
    }
