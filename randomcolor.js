const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
   
  }

const buttons=document.querySelectorAll('button');
for(let a of buttons)
{
    a.addEventListener('click',function()
    {
        a.style.backgroundColor="#" + setBg();
        a.innerHTML = "#" + setBg();
       
    })
}
