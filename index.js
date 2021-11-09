
// openForm will open the chat box and ask inititial Questions

function openForm() {
  //document.getElementById("myForm").style.display = "block";
 
  const messagesContainer = document.getElementById("messages");
  messagesContainer.style.display = "block";
  let initialDiv = document.createElement("div");
  initialDiv.id = "initialUser";
  initialDiv.className = "first questions";
  initialDiv.innerHTML =  `Hi <break/><button>yes</button><break/><button>No</button> ` ;
  messagesContainer.appendChild(initialDiv);
}