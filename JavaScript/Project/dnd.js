document.addEventListener('DOMContentLoaded', (event) => {
  let Inithtml = document.getElementById("test").innerHTML;
  localStorage.setItem("Initialhtml", Inithtml);

  document.getElementById('save').addEventListener('click', function () {
    let html = document.getElementById("test").innerHTML;
    localStorage.setItem("html", html);
    alert("Draged Saved");
  })
 
}, false);


function myfunction() {
  if (localStorage.getItem("html") !== null) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(localStorage.getItem("html").toString(), 'text/html');
    document.getElementById("test").innerHTML = doc.body.innerHTML;
  }
  let items = document.querySelectorAll( '.container .box, .container1 .box1, .container2 .box2 ,.container3 .box3 ');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });


function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = '1';
  items.forEach(function (item) {
    item.classList.remove('over');
  });
  
}

function handleDragOver(e) {
  e.preventDefault();
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

}
