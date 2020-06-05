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
,y5=370
c.lineWidth = 3;

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
function  lee(x,y,a,b,col){
    c.strokeStyle=col;
    c.beginPath();
    c.moveTo(x,y);
    c.lineTo(a,b);
    c.stroke();
}

//case1
function f(){
    c.clearRect(0,0,canvas.width,canvas.height);
    circlee();
    var counter=Math.floor((Math.random()*3)+1)
    if(counter===1){
    lee(x1,y1,x3,y3,"black");
    c.fillText("1",(x1+x3)/2,(y1+y3-8)/2);
    lee(x1,y1,x5,y5,"black");
    c.fillText("1",(x1+x5+34)/2,(y1+y5+8)/2);
    lee(x2,y2,x4,y4,"black");
    c.fillText("2",(x2+x4+18)/2,(y2+y4-8)/2);
    lee(x4,y4,x5,y5,"black");
    c.fillText("3",(x4+x5)/2,(y4+y5-8)/2);
        
   
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=6);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=1);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=4);
    atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=1);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value);
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="E");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="E");
    atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");
    
   
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=6);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=7);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=2);
    btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=5);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="D");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value);
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="D");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
    btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="D");
    
    
    
 
    
    
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=1);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=7);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=5);
    ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=2);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="A");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value);
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="A");
    ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="A");
    
 
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=4);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=2);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=5);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
    dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=3);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="E");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="E");
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value);
    dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");
   
   
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=1);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=4);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=2);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=3);
    etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="D");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="A");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
    etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value);

    
}



//case 2
else if(counter===2){
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

atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=2);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=6);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=8);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=1);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="B");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="B");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");


btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=2);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=4);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=6);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=3);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="C");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");





ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=6);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=4);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=2);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=7);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="B");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="B");


dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=8);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=6);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=2);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=9);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="C");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="C");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="C");


etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=1);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=3);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=7);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=9);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="B");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="B");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value);



}
//case3
else{
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

atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=2);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=3);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=3);
atable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=4);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value);
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="B");
atable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="C");


btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=1);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=4);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=2);
btable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=5);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value);
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="A");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
btable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="A");





ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=3);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=4);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=3);
ctable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=1);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="A");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="A");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value);
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="D");
ctable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="E");


dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=3);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=2);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=3);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value);
dtable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value=4);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="B");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="B");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value);
dtable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value="C");


etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > input").value=4);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input").value=5);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(2) > input").value=1);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2) > input").value=4);
etable.dist.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(2) > input").value);
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(3) > input").value="C");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(3) > input").value="C");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(4) > td:nth-child(3) > input").value="C");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(3) > input").value="C");
etable.nextn.push(document.querySelector("body > div:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(6) > td:nth-child(3) > input").value);

}
}
circlee();



function S(){
    console.log(atable.nextn);
    console.log(btable.nextn);

    console.log(ctable.nextn);

    console.log(dtable.nextn);
    console.log(etable.nextn);

    
}


function ss(){
    c.beginPath();
    c.strokeStyle="red"
c.arc(x1,y1,30,0,Math.PI*2,false);
c.font= "20px serif"

c.stroke();
setTimeout(my, 3000);


}

function my(){
    c.beginPath();
    c.strokeStyle="black"
c.arc(x1,y1,30,0,Math.PI*2,false);
c.font= "20px serif"

c.stroke();

}