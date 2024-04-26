let data="";
const wrapper = document.getElementById("wrapper");
document.createElement("h1")

// GRABBING DATA FROM WEBSITE
async function getAllPartyMembers(){

    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events");
    return await response.json();
}

console.log(getAllPartyMembers());


getAllPartyMembers().then((response)=>{
    console.log(response.data);
    response.data.forEach((itm) => {
        createEvents(itm);
    });
})


// DISPLAYING DATA ON HTML
function createEvents(info){
    const ele = document.createElement("div");
    
    const nameEle = document.createElement("h1");
    const descriptionEle = document.createElement("p");
    const dateEle = document.createElement("p");
    const timeEle = document.createElement("p");
    const locationEle = document.createElement("p");
    const delbutton = document.createElement("button");


    nameEle.innerHTML=info.name;
    descriptionEle.innerHTML=info.description;
    dateEle.innerHTML = info.date;
    timeEle.innerHTML = info.time;
    locationEle.innerHTML = info.location;
    delbutton.innerHTML= "Delete Event";
    delbutton.addEventListener("click",async()=>{
        await deleteApiElement(info.id);
        ele.remove();
    });

    ele.appendChild(nameEle);
    ele.appendChild(descriptionEle);
    ele.appendChild(dateEle);
    ele.appendChild(timeEle);
    ele.appendChild(locationEle);
    wrapper.appendChild(ele);

    async function deleteApiElement(elementId){
        getAllPartyMembers().then((response)=>{
            response.data.forEach((itm) => {
                createEvents(itm);
            });
        });
    };
}


function addForm(){
    const form = document.createElement("form");
    const namelabel = document.createElement("label");
    namelabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("name","name");

    const submit = document.createElement("button");
    submit.setAttribute("type","submit");
    submit.textContent = "submit";

    form.appendChild(namelabel);
    form.appendChild(nameInput);
    form.appendChild(submit);

    form.addEventListener("submit", async function(event){
        event.preventDefault();
        const formData = new(formData);
    });
    formContainer.appendChild(form);

}


// async function addEvent(){
//     const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",{
//         method:"POST",
//         // send back information
//         body: JSON.stringify({
//             name:
//             description,
//             date:
//             time,
//             location:
//         })
//     })

//     return response
// }

// async function delEvent(){
//     const delresponse = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2404-FTB-ET-WEB-FT/events",{
//         method:"DELETE",
//         // send back information
//     })
// }