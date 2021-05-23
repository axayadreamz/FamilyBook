var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Boota","Fraz","Josh","Shyrill","Rubina"];
var i=0;
function next()
{
    document.getElementById("image").src=images[i];
    document.getElementById("display").innerHTML=names[i];
    i++;
    if(i>5)
    {
        i=0;
    }
} 