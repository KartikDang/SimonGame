//Create Random 
const arr1=["green","red","yellow","blue"];
var arr2=[];
var arr3=[];    
var level=0;
var start=false;

$(document).keypress(function revert(){
    if(start==false)
    {
        start=true;
        
        createRandom();
        changeTitle(level);
    }
});

function changeTitle(levelTitle)
{   
    $("#level-title").html("Level "+levelTitle);
}

function createRandom()
{   
    level++;
    
    changeTitle(level);
    arr3=[];
    var n;
    n=Math.floor(Math.random()*4);
    arr2.push(arr1[n]);
    animate(arr1[n]);
    Sound(arr1[n]);
}

$(".btn").on("click",function(event)
{
    console.log(event.target.id);
    var userChosen=event.target.id;
    arr3.push(userChosen);
    animate(userChosen);

    // if(arr3.length!=arr2.length)
    // {
    //     console.log("check code arr2, arr3 length not equal");
    // }
    checkAnswer(arr3.length-1);
    Sound(userChosen);
})

function checkAnswer(level)
{
    var temp;
    if(arr2[level]==arr3[level])
    {   
        if(arr2.length==arr3.length)
        {
            setTimeout(function () {
                createRandom();
              }, 1000);
        }
    }
    else
    {
        console.log("Panga Hai :P");
        Sound("wrong");
        startAgain();
    }
}

function startAgain()
{
    arr2=[];
    arr3=[];
    start=false;
    level=0;
    $("#level-title").text("Game Over, Press Any Key to Restart");
}

function animate(currentChosen)
{
    $("#"+currentChosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function Sound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}




