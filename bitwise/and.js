function result(){
    document.getElementById("res").value=BigInt(document.getElementById("a").value) & BigInt(document.getElementById("b").value);
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let z=parseInt(document.getElementById("res").value);
    let ans;
    let resa='';
    let resb='';
    let res='';
    while((x>0) || (y>0) || (z>0))
    {
        resa+=(x%2).toString();
        resb+=(y%2).toString();
        res+=(z%2).toString();
        x=Math.floor(x/2);
        y=Math.floor(y/2);
        z=Math.floor(z/2);
    }
    resa=resa.split('').reverse().join('');
    resb=resb.split('').reverse().join('');
    res=res.split('').reverse().join('');
    document.getElementById("ab").value=resa;
    document.getElementById("bb").innerHTML=resb;
    document.getElementById("resb").value=res;
}