function extendedGCD(a,b,obj)
{
    if (b==0)
    {
        obj.x=BigInt("1");
        obj.y=BigInt("0");
        return a;
    }
    let objn={x:BigInt("1"),y:BigInt("1")};
    let rr=extendedGCD(b,a%b,objn);
    obj.x=objn.y;
    obj.y=objn.x-((a/b)*objn.y);
    return rr;
}
function mod_inv(b,md){
    let obj={x:BigInt("1"),y:BigInt("1")};
    extendedGCD(b,md,obj);
    obj.x=((obj.x%md)+md)%md;
    return obj.x;
}
function result(){
    let n=BigInt(parseInt(document.getElementById("n").value));
    let r=BigInt(parseInt(document.getElementById("r").value));
    let md=BigInt(parseInt(document.getElementById("md").value));
    let ans=BigInt("1");
    for(let i=BigInt(n);i>n-r;i--)
    {
        ans=(ans*i)%md;
    }
    for(let i=BigInt(r);i>1;i--)
    {
        ans=(ans*mod_inv(i,md))%md;
    }
    document.getElementById("res").value=ans;
}