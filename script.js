
const resizer = document.getElementById("resizer");
const resizeDiv = document.getElementById("resizeDiv");

const resizeWidth = resizer.offsetWidth;      
resizeDiv.style.width = `${resizeWidth}px`;    


const resize = (e) => {
  const totalWidth = resizeWidth + Number(e.target.value);  // a moze i parseInt!!
  resizeDiv.style.width = `${totalWidth}px`;
}

resizer.addEventListener("input", resize);  