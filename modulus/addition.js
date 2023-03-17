function result(){
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let md=parseInt(document.getElementById("md").value);
    let ans=(x+y)%md;
    let z=ans;
    let res='';
    while(z>0)
    {
        res+=(z%2).toString();
        z=Math.floor(z/2);
    }
    res=res.split('').reverse().join('');
    document.getElementById("res").value=ans;
    document.getElementById("resb").value=res;
}