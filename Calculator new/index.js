let string="";
let buttons=document.querySelectorAll('.buttons');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='=')
        { string=String(eval(string));
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C')
        { string="";
        document.querySelector('input').value=string;
        }
        else
        {   console.log(e.target);
            string=String(string) +  String(e.target.innerHTML);
            document.querySelector('input').value=string;
        }
       
    })
})