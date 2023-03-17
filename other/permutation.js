function result(){
    let n=BigInt(parseInt(document.getElementById("n").value));
    let r=BigInt(parseInt(document.getElementById("r").value));
    let md=BigInt(parseInt(document.getElementById("md").value));
    let ans=BigInt("1");
    for(let i=BigInt(n);i>BigInt(n-r);i--)
    {
        ans=(ans*i)%md;
    }
    document.getElementById("res").value=ans.toString();
}