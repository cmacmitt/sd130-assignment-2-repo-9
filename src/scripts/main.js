const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 

addName.addEventListener("click", () => {
  const classmateName = "Ming";
  let li = document.createElement("li");
  li.textContent=classmateName;
  nameList.insertAdjacentElement("beforeend", li);
})