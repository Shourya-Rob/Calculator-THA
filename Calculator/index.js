function fun(x){
    var n1=document.querySelector(".num1").value;
    var n2=document.querySelector(".num2").value;
    if(n1.length==0 || n2.length==0)
            alert("Enter both values");

    
    if(x=='add'){

        var ans=Number(n1)+Number(n2);
    }
    if(x=='subtract'){

        var ans=Number(n1)-Number(n2);
    }
    
    if(x=='multiply'){

        var ans=Number(n1)*Number(n2);
    }
    
    if(x=='divide')
    
        var ans=Number(n1)/Number(n2);
    
    document.getElementById("an").innerHTML=ans;
    } 