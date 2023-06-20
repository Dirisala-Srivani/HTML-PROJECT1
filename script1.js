<script type = text/javascript>  
        function fun(a)  
        {  
            document.getElementById("display").value+=a;  
        }  
        function C()  
        {  
            document.getElementById("display").value = " ";  
        }  
        function B()  
        {  
            var y = document.getElementById("display").value;  
            document.getElementById("display").value = y.slice(0, y.length-1);  
        }  
        function res()  
        {   
            var a = document.getElementById("display").value;  
        var i, count=0;  
        const index = [];  
        const numbers = [];  
        for(i=0;i<a.length;i++)  
            {  
                if(a[i]=="+" || a[i]=="-" || a[i]=="*" || a[i]=="/")  
                    {  
                        count+=1;  
                        index.push(i);  
                    }  
            }  
        document.getElementById("p").innerHTML="Indices of Operators: "+index;  
        var j = 0;  
        var num="";  
        const res = [];  
        var k = 0;  
        for(i=0;i<a.length;i++)  
            {  
            if(i==0 && (a[0]=="-" || a[0]=="+"))  
            {  
                res[0]=0;  
                j+=1;  
                k+=1;  
                continue;  
            }  
                if(j==index.length)  
                    {  
                        num+=a[i];  
                        if(i==a.length-1)  
                            {  
                                res[k]=parseFloat(num);  
                                break;  
                            }  
                    }  
               else if(i==index[j])  
                   {  
                       j++;  
                       res[k]=parseFloat(num);  
                       num="";  
                       k++;  
                   }  
                else{  
                    num+=a[i];  
                }  
            }  
        document.getElementById("p1").innerHTML="Operands:"+res;  
        for(i=0;i<index.length;i++)  
            {  
                var j = 0;  
                if(a[index[i]]=="/")  
                    {  
                        res[j] = res[j]/res[j+1];  
                        res.splice(j+1, 1);  
                    }  
            }  
        for(i=0;i<index.length;i++)  
            {  
                var j = 0;  
                if(a[index[i]]=="*")  
                    {  
                        res[j] = res[j]*res[j+1];  
                        res.splice(j+1, 1);  
                    }  
            }  
        for(i=0;i<index.length;i++)  
            {  
                var j = 0;  
                if(a[index[i]]=="+")  
                    {  
                        res[j] = res[j]+res[j+1];  
                        res.splice(j+1, 1);  
                    }  
            }  
        for(i=0;i<index.length;i++)  
            {  
                var j = 0;  
                if(a[index[i]]=="-")  
                    {  
                        res[j] = res[j]-res[j+1];  
                        res.splice(j+1, 1);  
                    }  
            }  
         document.getElementById("display").value=a+"="+res;  
        }  
    </script>  
