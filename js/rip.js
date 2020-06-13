var canvas = document.querySelector("canvas");
var c=canvas.getContext("2d");
var x1=130
,y1=170
,x2=375
,y2=50
,x3=620
,y3=170
,x4=252.5
,y4=370
,x5=497.5
,y5=370;
c.lineWidth = 3;

function lee(x,y,a,b,col){     //to make line
    c.strokeStyle=col;
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(a,b);
    c.stroke();
}
function my(col,x,y){         //to make circle
    c.beginPath();
    c.strokeStyle=col
    c.arc(x,y,30,0,Math.PI*2,false);
    c.stroke();
}
function sleep(milliseconds) {         
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function circlee(){
c.beginPath();
c.arc(x1,y1,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("A",x1-17,y1+5);
c.stroke();

c.beginPath();
c.arc(x2,y2,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("B",x2-7,y2-3);
c.stroke();

c.beginPath();
c.arc(x3,y3,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("C",x3+3,y3+6);
c.stroke();

c.beginPath();
c.arc(x4,y4,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("D",x4-13,y4+11);
c.stroke();

c.beginPath();
c.arc(x5,y5,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("E",x5-1,y5+11);
c.stroke();
}
var atable={
    dist:[],
    nextn:[]
}
var btable={
    dist:[],
    nextn:[]
}
var ctable={
    dist:[],
    nextn:[]
}
var dtable={
    dist:[],
    nextn:[]
}
var etable={
    dist:[],
    nextn:[]
}


//case1
function f(){
    atable.dist=[]
    atable.nextn=[]
    btable.dist=[]
    btable.nextn=[]
    ctable.dist=[]
    ctable.nextn=[]
    dtable.dist=[]
    dtable.nextn=[]
    etable.dist=[]
    etable.nextn=[]
    c.clearRect(0,0,canvas.width,canvas.height);
    circlee();
    var counter=Math.floor((Math.random()*3)+1)
    if(counter===1){
        // console.log("color1");
    lee(x1,y1,x3,y3,"black");
    c.fillText("1",(x1+x3)/2,(y1+y3-8)/2);
    lee(x1,y1,x5,y5,"black");
    c.fillText("1",(x1+x5+34)/2,(y1+y5+8)/2);
    lee(x2,y2,x4,y4,"black");
    c.fillText("2",(x2+x4+18)/2,(y2+y4-8)/2);
    lee(x4,y4,x5,y5,"black");
    c.fillText("3",(x4+x5)/2,(y4+y5-8)/2);


    var am={
        A=[0,1000,1,1000,1],
        B=[1000,0,1000,2,1000],
        C=[1,1000,0,1000,1000],
        D=[1000,2,1000,0,3],
        E=[1,1000,1000,3,0]
    }
    var ama=[
        ['A','-','C','-','E'],
        ['-','B','-','D','-'],
        ['A','-','C','-','-'],
        ['-','B','-','D','E'],
        ['A','-','-','D','E'],

    ]
        
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[0][1]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[0][2]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[0][3]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[0][4]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=ama[0][0]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[0][1]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[0][2]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[0][3]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[0][4]);
    
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=am[1][0]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[1][2]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[1][3]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[1][4]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=ama[1][0]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[1][1]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[1][2]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[1][3]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[1][4]);
    
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=am[2][0]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[2][1]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[2][3]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[2][4]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=ama[2][0]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[2][1]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[2][2]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[2][3]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[2][4]);
    
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=am[3][0]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[3][1]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[3][2]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=am[3][4]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=ama[3][0]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[3][1]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[3][2]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[3][3]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[3][4]);
   
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=am[4][0]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=am[4][1]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=am[4][2]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=am[4][3]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=ama[4][0]);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=ama[4][1]);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=ama[4][2]);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=ama[4][3]);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=ama[4][4]);


//case 2
else if(counter===2){
    // console.log("color2");
    lee(x1,y1,x5,y5,"black");
    c.fillText("1",(x1+x5)/2,(y1+y5-8)/2);
    lee(x1,y1,x2,y2,"black");
    c.fillText("2",(x1+x2)/2,(y1+y2-14)/2);
    lee(x2,y2,x5,y5,"black");
    c.fillText("3",(x2+x5+4)/2,(y2+y5-8)/2);
    lee(x2,y2,x3,y3,"black");
    c.fillText("4",(x2+x3)/2,(y2+y3-8)/2);
    lee(x3,y3,x4,y4,"black");
    c.fillText("2",(x4+x3-50)/2,(y4+y3+10)/2);

    var bm={
        A=[0,2,1000,1000,1],
        B=[2,0,4,1000,3],
        C=[1000,4,0,2,1000],
        D=[1000,1000,2,0,1000],
        E=[1,3,1000,1000,0]
    }
    var bma=[
        ['A','B','-','-','E'],
        ['A','B','C','-','E'],
        ['-','B','C','D','-'],
        ['-','-','C','D','-'],
        ['A','B','-','-','E'],

    ]

atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=bm[0][1]);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=bm[0][2]);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=bm[0][3]);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=bm[0][4]);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=bma[0][0]);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=bma[0][1]);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=bma[0][2]);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=bma[0][3]);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=bma[0][4]);

btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=bm[1][0]);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=bm[1][2]);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=bm[1][3]);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=bm[1][4]);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=bma[1][0]);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=bma[1][1]);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=bma[1][2]);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=bma[1][3]);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=bma[1][4]);

ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=bm[2][0]);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=bm[2][1]);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=bm[2][3]);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=bm[2][4]);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=bma[2][0]);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=bma[2][1]);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=bma[2][2]);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=bma[2][3]);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=bma[2][4]);

dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=bm[3][0]);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=bm[3][1]);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=bm[3][2]);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=bm[3][4]);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=bma[3][0]);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=bma[3][1]);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=bma[3][2]);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=bma[3][3]);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=bma[3][4]);

etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=bm[4][0]);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=bm[4][1]);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=bm[4][2]);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=bm[4][3]);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value=bma[4][0]);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value=bma[4][1]);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value=bma[4][2]);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value=bma[4][3]);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value=bma[4][4]);
}
//case3
else{
    // console.log("color3");
    lee(x1,y1,x3,y3,"black");
    c.fillText("3",(x1+x3)/2,(y1+y3-8)/2);
    lee(x1,y1,x2,y2,"black");
    c.fillText("1",(x1+x2)/2,(y1+y2-12)/2);
    lee(x3,y3,x5,y5,"black");
    c.fillText("1",(x3+x5+18)/2,(y3+y5-8)/2);
    lee(x2,y2,x4,y4,"black");
    c.fillText("2",(x4+x2+14)/2,(y4+y2-8)/2);
    lee(x3,y3,x4,y4,"black");
    c.fillText("3",(x4+x3)/2,(y4+y3-12)/2);

    var cm=[
        [0,1,3,1000,1000],
        [1,0,1000,2,1000],
        [3,1000,0,3,1],
        [1000,3,3,0,1000],
        [1000,1000,1,1000,0]
    ]
    var cma=[
        ['A','B','C','-','-'],
        ['A','B','-','D','-'],
        ['A','-','C','D','E'],
        ['-','B','C','D','-'],
        ['-','-','C','-','E'],
        

    ]

    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=cm[0][1]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=cm[0][2]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=cm[0][3]);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=cm[0][4]);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="-");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="-");
    
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=cm[1][0]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=cm[1][2]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=cm[1][3]);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=cm[1][4]);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="-");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="-");
    
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=cm[2][0]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=cm[2][1]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=cm[2][3]);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=cm[2][4]);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="-");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");
    
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=cm[3][0]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=cm[3][1]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=cm[3][2]);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=cm[3][4]);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="-");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="-");
    
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=cm[4][0]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=cm[4][1]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=cm[4][2]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=cm[4][3]);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="-");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="-");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="-");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value);
}

c.stroke();
// c.strokeText();
// S();
}
circlee();


}



