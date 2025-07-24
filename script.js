const disp=document.getElementById("disp");

function dis(input){
    disp.value+=input;
}

function cd(){
    disp.value="";
}

function cal(){
    try{
        disp.value=eval(disp.value);
    }
    catch(error){
        disp.value="error";
    }
}