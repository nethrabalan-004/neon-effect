var l1=document.getElementById("l1");
var l2=document.getElementById("l2");
var l3=document.getElementById("l3");
var l4=document.getElementById("l4");
var l5=document.getElementById("l5");
var l6=document.getElementById("l6");
var l7=document.getElementById("l7");
var l8=document.getElementById("l8");
var l9=document.getElementById("l9");
var l10=document.getElementById("l10");
var l11=document.getElementById("l11");
var l12=document.getElementById("l12");
var l13=document.getElementById("l13");


var x=0;
function colour()
{
    if(x==0)
    {
    l1.setAttribute("class","neon_aqua");
    l2.setAttribute("class","neon_aqua");
    l3.setAttribute("class","neon_aqua");
    l4.setAttribute("class","neon_aqua");
    l5.setAttribute("class","neon_aqua");
    l6.setAttribute("class","neon_aqua");
    l7.setAttribute("class","neon_aqua");
    l8.setAttribute("class","neon_aqua");
    l9.setAttribute("class","neon_aqua");
    l10.setAttribute("class","neon_aqua");
    l11.setAttribute("class","neon_aqua");
    l12.setAttribute("class","neon_aqua");
    l13.setAttribute("class","neon_aqua");
    x=1;
    }
    else if(x==1)
    {
        l1.setAttribute("class","neon_red");
        l2.setAttribute("class","neon_red");
        l3.setAttribute("class","neon_red");
        l4.setAttribute("class","neon_red");
        l5.setAttribute("class","neon_red");
        l6.setAttribute("class","neon_red");
        l7.setAttribute("class","neon_red");
        l8.setAttribute("class","neon_red");
        l9.setAttribute("class","neon_red");
        l10.setAttribute("class","neon_red");
        l11.setAttribute("class","neon_red");
        l12.setAttribute("class","neon_red");
        l13.setAttribute("class","neon_red");
        x=2;

    }
    else if(x==2)
    {
        l1.setAttribute("class","neon_green");
        l2.setAttribute("class","neon_green");
        l3.setAttribute("class","neon_green");
        l4.setAttribute("class","neon_green");
        l5.setAttribute("class","neon_green");
        l6.setAttribute("class","neon_green");
        l7.setAttribute("class","neon_green");
        l8.setAttribute("class","neon_green");
        l9.setAttribute("class","neon_green");
        l10.setAttribute("class","neon_green");
        l11.setAttribute("class","neon_green");
        l12.setAttribute("class","neon_green");
        l13.setAttribute("class","neon_green");
        x=3;
    }

    else if(x==3)
    {
        l1.setAttribute("class","neon_pink");
        l2.setAttribute("class","neon_pink");
        l3.setAttribute("class","neon_pink");
        l4.setAttribute("class","neon_pink");
        l5.setAttribute("class","neon_pink");
        l6.setAttribute("class","neon_pink");
        l7.setAttribute("class","neon_pink");
        l8.setAttribute("class","neon_pink");
        l9.setAttribute("class","neon_pink");
        l10.setAttribute("class","neon_pink");
        l11.setAttribute("class","neon_pink");
        l12.setAttribute("class","neon_pink");
        l13.setAttribute("class","neon_pink");
        x=4;
    }
    else if(x==4)
    {
        l1.setAttribute("class","neon_effect1");
        l2.setAttribute("class","neon_effect2");
        l3.setAttribute("class","neon_effect3");
        l4.setAttribute("class","neon_effect4");
        l5.setAttribute("class","neon_effect1");
        l6.setAttribute("class","neon_effect2");
        l7.setAttribute("class","neon_effect3");
        l8.setAttribute("class","neon_effect4");
        l9.setAttribute("class","neon_effect1");
        l10.setAttribute("class","neon_effect2");
        l11.setAttribute("class","neon_effect3");
        l12.setAttribute("class","neon_effect4");
        l13.setAttribute("class","neon_effect1");
        x=5;
    }
    else if(x==5)
    {
        l1.setAttribute("class","neon");
        l2.setAttribute("class","neon");
        l3.setAttribute("class","neon");
        l4.setAttribute("class","neon");
        l5.setAttribute("class","neon");
        l6.setAttribute("class","neon");
        l7.setAttribute("class","neon");
        l8.setAttribute("class","neon");
        l9.setAttribute("class","neon");
        l10.setAttribute("class","neon");
        l11.setAttribute("class","neon");
        l12.setAttribute("class","neon");
        l13.setAttribute("class","neon");
        x=0;
    }
    console.log(x)
}