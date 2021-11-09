
//openForm will open the chat box and ask inititial Questions?

function openForm() {
  document.getElementById("myForm").style.display = "block";
  
  const messagesContainer = document.getElementById("myForm");
  let initialDiv = document.createElement("div");
  initialDiv.id = "initialUser";
  initialDiv.className = "first questions";
  initialDiv.innerHTML = `<span>Hi</span> <button>press1</button>` ;
  messagesContainer.appendChild(initialDiv);
}
