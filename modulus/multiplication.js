function result(){
    let x=BigInt(parseInt(document.getElementById("a").value));
    let y=BigInt(parseInt(document.getElementById("b").value));
    let md=BigInt(parseInt(document.getElementById("md").value));
    let ans=((x%md)*(y%md))%md;
    let z=BigInt(ans);
    let res='';
    while(z>0)
    {
        res+=(z%BigInt(2)).toString();
        z=z/BigInt(2);
    }
    res=res.split('').reverse().join('');
    document.getElementById("res").value=ans;
    document.getElementById("resb").value=res;
}