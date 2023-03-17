function euclidean(a,b)
{
    if (b==0)
        {return a;}
    return euclidean(b,a%b);
}
function result(){
    let a=BigInt(parseInt(document.getElementById("a").value));
    let b=BigInt(parseInt(document.getElementById("b").value));
    let gcd=euclidean(a,b);
    let lcm=(a*b)/gcd;
    document.getElementById("gcd").value=gcd;
    document.getElementById("lcm").value=lcm;
}