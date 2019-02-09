const allowedTextChars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789-";

function checkForm() {
    var form = document.getElementById("formID");

    var flag = checkField(
        document.getElementById("first_nameID").value,
        document.getElementById("fNameError"));
    if (flag == false) {
        return false;
    }
    
     flag =  checkField(
        document.getElementById("last_nameID").value,
        document.getElementById("lNameError"));
     if (flag == false) {
        return false;
    }
    
    flag = checkField (
        document.getElementById("cityID").value,
        document.getElementById("cityerror"));
    if (flag == false) {
        return false;
    }

    flag = checkField (
        document.getElementById("equipmentsID").value,
        document.getElementById("equipmentserror"));
    if (flag == false) {
        return false;
    }

    flag = checkField (
        document.getElementById("bootsID").value,
        document.getElementById("bootserror"));
    if (flag == false) {
        return false;
    }

    flag = checkField (
        document.getElementById("bootsID").value,
        document.getElementById("bootserror"));
    if (flag == false) {
        return false;
    }
     
    flag = checkField (
        document.getElementById("wearingID").value,
        document.getElementById("wearingerror"));
    if (flag == false) {
        return false;
    }

    flag = checkField (
        document.getElementById("sportnutrID").value,
        document.getElementById("nutrerror"));
    if (flag == false) {
        return false;
    }            

        
    
    if(flag == true){
        form.submit();
        return true;
    }
    

}

function checkField(inp, error)
{
    var bad = "";

    if (inp.length > 30)
        bad += "Too many characteres; ";

    for (var i = 0; i < inp.length; ++i)
        if (allowedTextChars.indexOf(inp[i]) == -1) {
            bad += "Do not use '" + inp[i] + "'; ";
            break;
        }

    if (error)
        error.innerHTML = bad;

    if (bad.length > 0)
        return false;
    else 
        return true;
}