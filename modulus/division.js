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
function result(){
    let a=BigInt(parseInt(document.getElementById("a").value));
    let b=BigInt(parseInt(document.getElementById("b").value));
    let md=BigInt(parseInt(document.getElementById("md").value));
    let obj={x:BigInt("1"),y:BigInt("0")};
    let gcd=extendedGCD(b,md,obj);
    obj.x=(obj.x%md+md)%md;
    if (gcd!=1)
    {
        document.getElementById("res").value="Division is'nt Possible";
    }
    else
    {
        document.getElementById("res").value=((a%md)*(obj.x))%md;
    }
}