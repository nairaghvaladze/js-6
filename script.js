document.body.style.backgroundColor="Purple";
document.body.style.textAlign="center";
document.body.style.color="white";
document.body.style.fontSize="30px";
document.body.style.fontWeight="700";
var a=document.getElementById("text");
a.innerHTML="1-დან 100-მდე კენტი რიცხვების მიმდევრობა!";
a.style.color="white";
var c=1;
while (c <= 100)
{
    document.write(c, "<br>");
    c +=2;
}
