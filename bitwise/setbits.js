function result(){
    let x=parseInt(document.getElementById("a").value);
    let resa='';
    let res=0;
    while((x>0))
    {
        resa+=(x%2).toString();
        if ((x%2).toString()==1)
        res++;
        x=Math.floor(x/2);
    }
    resa=resa.split('').reverse().join('');
    document.getElementById("res").value=res;
    document.getElementById("ab").value=resa;
}