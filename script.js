let para=document.getElementById('count')
console.log(para.textContent)
let c=para.textContent;
function incr()
{
    c++;
    para.textContent=c;
}
function decr()
{
    c--
    para.textContent=c
}
function reset()
{
    c=0;
    para.textContent=c;
}