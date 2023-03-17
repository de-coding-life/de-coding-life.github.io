function result(){
    let t=BigInt(parseInt(document.getElementById("t").value));
    let n=BigInt(parseInt(document.getElementById("n").value));
    let snt=BigInt(parseInt(document.getElementById("snt").value));
    let timelimit=BigInt(parseInt(document.getElementById("tl").value));
    let tih=BigInt("1");
    if (snt==0)
    {
        tih=t*n;
    }
    else
    {
        tih=snt;
    }
    if (timelimit*BigInt("1000000000000000000")>=tih)
    {
        document.getElementById("res12").value="O(Log(n)) would work";
    }
    else
    {
        document.getElementById("res12").value="O(Log(n)) would not work";
    }
    if (timelimit*BigInt("10000000000000000")>=tih)
    {
        document.getElementById("res11").value="Optimized O(_/n) would work";
    }
    else
    {
        document.getElementById("res11").value="Optimized O(_/n) would not work";
    }
    if (timelimit*BigInt("1000000000000")>=tih)
    {
        document.getElementById("res10").value="O(_/n) would work";
    }
    else
    {
        document.getElementById("res10").value="O(_/n) would not work";
    }
    if (timelimit*BigInt("100000000")>=tih)
    {
        document.getElementById("res9").value="Optimized O(n) would work";
    }
    else
    {
        document.getElementById("res9").value="Optimized O(n) would not work";
    }
    if (timelimit*BigInt("10000000")>=tih)
    {
        document.getElementById("res7").value="O(n) would work";
        document.getElementById("res8").value="Optimized O(nlog(n)) would work";
    }
    else
    {
        document.getElementById("res7").value="O(n) would not work";    
        document.getElementById("res8").value="Optimized O(nlog(n)) would not work";
    }
    if (timelimit*BigInt("1000000")>=tih)
    {
        document.getElementById("res6").value="O(nlog(n)) would work";
    }
    else
    {
        document.getElementById("res6").value="O(nlog(n)) would not work";
    }
    if (timelimit*BigInt("100000")>=tih)
    {
        document.getElementById("res5").value="O(n_/n) would work";
    }
    else
    {
        document.getElementById("res5").value="O(n_/n) would not work";
    }
    if (timelimit*BigInt("5000")>=tih)
    {
        document.getElementById("res4").value="O(n^2) would work";
    }
    else
    {
        document.getElementById("res4").value="O(n^2) would not work";
    }
    if (timelimit*BigInt("500")>=tih)
    {
        document.getElementById("res3").value="O(n^3) would work";
    }
    else
    {
        document.getElementById("res3").value="O(n^3) would not work";
    }
    if (timelimit*BigInt("25")>=tih)
    {
        document.getElementById("res2").value="O(2^n) would work";
    }
    else
    {
        document.getElementById("res2").value="O(2^n) would not work";
    }
    if (timelimit*BigInt("10")>=tih)
    {
        document.getElementById("res1").value="O(n!) would work";
    }
    else
    {
        document.getElementById("res1").value="O(n!) would not work";
    }
}