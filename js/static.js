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


c.beginPath();
c.arc(x1,y1,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("A",x1-7,y1+5);
c.stroke();

c.beginPath();
c.arc(x2,y2,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("B",x2-7,y2+5);
c.stroke();

c.beginPath();
c.arc(x3,y3,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("C",x3-7,y3+5);
c.stroke();

c.beginPath();
c.arc(x4,y4,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("D",x4-7,y4+5);
c.stroke();

c.beginPath();
c.arc(x5,y5,30,0,Math.PI*2,false);
c.font= "20px serif"
c.fillText("E",x5-7,y5+5);
c.stroke();

function tablee(arr1){
    
}



function f(){
    var atable={
        dist:[],
        nextn:[]
    }
    for(var i=2;i<7;i++){
        atable.dist.push(document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(2) > input").value);
        atable.nextn.push(document.querySelector("body > table:nth-child(1) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(3) > input").value);
    }
    var btable={
        dist:[],
        nextn:[]
    }
    for(var i=2;i<7;i++){
        btable.dist.push(document.querySelector("body > table:nth-child(2) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(2) > input").value);
        btable.nextn.push(document.querySelector("body > table:nth-child(2) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(3) > input").value);
    }
    var ctable={
        dist:[],
        nextn:[]
    }
    for(var i=2;i<7;i++){
        ctable.dist.push(document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(2) > input").value);
        ctable.nextn.push(document.querySelector("body > table:nth-child(3) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(3) > input").value);
    }
    var dtable={
        dist:[],
        nextn:[]
    }
    for(var i=2;i<7;i++){
        dtable.dist.push(document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(2) > input").value);
        dtable.nextn.push(document.querySelector("body > table:nth-child(4) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(3) > input").value);
    }
    var etable={
        dist:[],
        nextn:[]
    }
    for(var i=2;i<7;i++){
        etable.dist.push(document.querySelector("body > table:nth-child(5) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(2) > input").value);
        etable.nextn.push(document.querySelector("body > table:nth-child(5) > tbody > tr:nth-child(" + i +")" +"> td:nth-child(3) > input").value);
    }

    
    
}
