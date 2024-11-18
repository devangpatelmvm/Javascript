document.addEventListener( "DOMContentLoaded",(event) => {
  var itemObject = 
  [  
    {class:"box",content:"This is content 1",style:"background-color:Tomato;"},
    {class:"box",content:"This is content 2",style:"background-color:lightcyan;"}, 
    {class:"box",content:"This is content 3",style:"background-color:green;"},
    {class:"box",content:"This is content 4",style:"background-color:chocolate;"},
    {class:"box",content:"This is content 5",style:"background-color:khaki;;"}, 
    {class:"box",content:"This is content 6",style:"background-color:gray;"},
    {class:"box",content:"This is content 7",style:"background-color:plum;"},
    {class:"box",content:"This is content 8",style:"background-color:blueviolet;"}, 
   ]
   let objectDom = '';
   itemObject.map((item)=>{
    objectDom += `<div draggable="true" class=${item.class} style=${item.style}>${item.content}</div>`;
   });
   document.getElementById("load").innerHTML = objectDom;
  let DragItems = JSON.parse(localStorage.getItem("DragItems")) || null;
  
  if (DragItems === null) {   
    localStorage.setItem("DragItems", JSON.stringify(itemObject));
  }

  let items = document.querySelectorAll(".container .box ");
  function dataDrag(items,DragItems){
    for (let index = 0; index < itemObject.length; index++) {
      items[index].addEventListener("dragstart", handleDragStart);
      items[index].addEventListener("dragover", handleDragOver);
      items[index].addEventListener("dragenter", handleDragEnter);
      items[index].addEventListener("dragleave", handleDragLeave);
      items[index].addEventListener("dragend", handleDragEnd);
      items[index].addEventListener("drop", handleDrop); 
         if (DragItems?.length)
         {
        items[index].innerHTML = DragItems[index].content;
        items[index].style = DragItems[index].style.replace('background-color', 'background');
         }
        }
     }
     dataDrag(items,DragItems);
 
    document.getElementById("save").addEventListener("click", (e) => {
      var itemsList = [];
      for (let index = 0; index < items.length; index++) {
        itemsList.push({
          class: items[index].className,
          content: items[index].innerHTML,
          style: items[index].attributes.style.value,
        });
      }
      localStorage.setItem("DragItems", JSON.stringify(itemsList));
      alert('Dragged Saved');
    });

    document.getElementById("reset").addEventListener("click", function() {
      let resetData = JSON.parse(localStorage.getItem("DragItems"));
      dataDrag(items,resetData);
    })

    function handleDragStart(e) {
      dragSrcEl = this;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", this.innerHTML, this.style.background);
    }

    function handleDragEnd() {
      items.forEach(function (item) {
        item.classList.remove("over");
      });
    }

    function handleDragOver(e) {
      e.preventDefault();
      e.currentTarget.style;
      return false;
    }

    function handleDragEnter() {
      this.classList.add("over");
    }

    function handleDragLeave() {
      this.classList.remove("over");
    }

    function handleDrop(e) {
      e.stopPropagation();
      if (dragSrcEl !== this) {
        let temp;
        dragSrcEl.innerHTML = this.innerHTML;
        temp = dragSrcEl.style.backgroundColor;
        dragSrcEl.style.backgroundColor = this.style.backgroundColor;
        this.style.backgroundColor = temp;
        this.innerHTML = e.dataTransfer.getData("text/html", dragSrcEl.style.backgroundColor);
      }
      return false;
    }
  },
  false
);





