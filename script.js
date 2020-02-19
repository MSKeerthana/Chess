var boardcells = [];
boardcells.id = "chess";
var j = 0;
var icon = document.createElement('img');
icon.setAttribute("src","crown.jpg");
icon.id ="crown";
function createBoard()
{
    for(var j = 0; j < 8; j++)
    {
        for(i = 0; i < 8; i++)
        {
            boardcells = document.createElement('button');
            boardcells.id="boardcells"+i+j;
            document.body.appendChild(boardcells);
            //console.log(boardcells.id);
        }
        var linebreak = document.createElement("br");
        document.body.appendChild(linebreak);   
     }
     document.getElementById('boardcells40').appendChild(icon);
}
var queen = {};
queen.x = 0;
queen.y = 4;
var count =0;
function move()
{
    count++;
    if(count>0)
    {
        var id1 = document.getElementById('crown');
        id1.remove();
    }
    var value = document.getElementById("input").value;
    var a = value.split(" ");
    console.log(a);
   a.forEach(m =>
    {
        let step = Number(m.slice(m.length-1));
        let dir = (m.slice(0,m.length - 1));
        movetoplace(dir,step);
        console.log(dir);
    });
    console.log("Queen's current Position ->"  + board[queen.x][queen.y]);
    document.getElementById("output").innerHTML= board[queen.x][queen.y];
    var i = queen.x;
    var j = queen.y;
    var queenpos = "boardcells"+i+j;
    console.log(queenpos);
    let imageelement = '<img src="crown.jpg" id = "crown">'
    document.getElementById("boardcells"+j+i).innerHTML += imageelement;
    
}
function movetoplace(dir,step)
{
    switch(dir)
    {
        case 'N':
            {
            queen.x = queen.x - (step);
            if(queen.x>8)
            console.log("Out of boundry");
            else
            console.log(queen.x);
            break;
            }
        case 'S':
            {
            queen.x = queen.x + (step);
            if(queen.x<0)
            console.log("Out of boundry");
            else
            console.log(queen.x);
            break;
            }
        case 'E':
            {
                queen.y = queen.y + (step);
                if(queen.y>8)
                console.log("Out of boundry");
                else
                console.log(queen.y);
                break;
            }
        case 'W':
        {
            queen.y = queen.y - (step);
            if(queen.y<0)
            console.log("Out of boundry");
            else
            console.log(queen.y);
            break;
        }
        case 'NE':
        {
            queen.x = queen.x - (step);
            queen.y = queen.y + (step);
            if(queen.x > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
            console.log("Out of boundry");
            else
            console.log(queen.x,queen.y);
            break;
        }
        case 'NW':
        {
            queen.x = queen.x - (step);
            queen.y = queen.y - (step);
            if(queen.x > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
            console.log("Out of boundry");
            else
            console.log(queen.x,queen.y);
            break;
        }
        case 'SE':
        {
            queen.x = queen.x + (step);
            queen.y = queen.y + (step);
            if(queen.x > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
            console.log("Out of boundry");
            else
            console.log(queen.x,queen.y);
            break;
        }
        case 'SW':
        {
            queen.x = queen.x + (step);
            queen.y = queen.y - (step);
            if(queen.x > 8 || queen.y > 8 || queen.x < 0 || queen.y < 0)
            console.log("Out of boundry");
            else
            console.log(queen.x,queen.y);
            break;
        }
    }
}
var board = [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
console.log("Queen's current Position ->"  + board[0][4]);