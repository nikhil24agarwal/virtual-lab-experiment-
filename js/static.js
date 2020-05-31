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
    console.log(atable.dist);
    
}
