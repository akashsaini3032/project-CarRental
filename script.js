let fetchData= async()=>{
    let url="http://localhost:3000/carrental"
    let res= await fetch(url, {method:"GET"}) 

    let data= await res.json()

    console.log(data);

    let Show=document.querySelector("#datashow")

    data.map(
        (e)=>{

            Show.innerHTML+=`
    
            <tr>
                <td> ${e.name}</td>
                <td> ${e.age}</td>
                <td> ${e.aadhar}</td>
                <td> ${e.checkin}</td>
                <td> ${e.checkout}</td>
                <td> ${e.mobile}</td>
                 <td> ${e.country}</td>
                <td> ${e.person}</td>
                <td> ${e.price*e.person}</td>
                <td onclick="del('${e.id}')"> delete </td>
                <td onclick="formfill('${e.id}')"> Update </td>
            </tr>
            
            `
        }
    )
}

fetchData()

let del=(id)=>{
    let url=`http://localhost:3000/carrental/${id}`
    fetch(url, {method:"DELETE"}) 

}

let book=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value
    let inpaadhar=document.querySelector("#aadhar").value
    let inpcheckin=document.querySelector("#checkin").value
    let inpcheckout=document.querySelector("#checkout").value
    let inpmobile=document.querySelector("#mobile").value
    let inpcountry=document.querySelector("#country").value
    let inpperson=document.querySelector("#person").value

     let url="http://localhost:3000/carrental"

     fetch(url, {
        method:"POST" ,
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(

            {

      "name": inpname,
      "age": inpage,
      "aadhar": inpaadhar,
      "checkin": inpcheckin,
      "checkout": inpcheckout,
      "mobile":inpmobile,
      "country":inpcountry,
      "person":inpperson,
      "price":2000 

            }
        )
     })

     location.href="order.html"
     return false

    
}



let formfill=async(id)=>{

    let url=`http://localhost:3000/carrental/${id}`
    let res= await fetch(url,{method:"GET"})

    let data= await res.json()
    console.log(data);

    let FormData=document.querySelector("#DataShow")

    FormData.innerHTML=`


        <form id="booking-form" action="">
    <label for="name">Enter Name:</label>
    <input type="text" id="upname" value="${data.name}"><br><br>

    <label for="age">Enter Age:</label>
    <input type="number"  id="upage" value="${data.age}"><br><br>

    <label for="aadhar">Enter AdharNo:</label>
    <input type="text"  id="upaadhar" value="${data.aadhar}"><br><br>

    <label for="checkin">Enter CheckIn:</label>
    <input type="date"  id="upcheckin" value="${data.checkin}"><br><br>

    <label for="checkout">Enter CheckOut:</label>
    <input type="date"  id="upcheckout" value="${data.checkout}><br><br>

    <label for="mobile">Enter Mobile:</label>
    <input type="number" id="upmobile" value="${data.mobile}"><br><br>

    <label for="country">Choose Country:</label>
    <select  id="upcountry" value="${data.country}">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="China">China</option>
        <option value="Nepal">Nepal</option>
        <option value="Italy">Italy</option>
    </select><br><br>

    <label for="person">Enter Person:</label>
    <input type="text" id="upperson" value="${data.person}"><br><br>

    <input type="submit" value="Update Now" onclick="return FinalUpdate('${data.id}')">
</form>

        


    
    
    `

}


let FinalUpdate=(id)=>{

    let inpname=document.querySelector("#upname").value
    let inpage=document.querySelector("#upage").value
    let inpaadhar=document.querySelector("#upaadhar").value
    let inpcheckin=document.querySelector("#upcheckin").value
    let inpcheckout=document.querySelector("#upcheckout").value
    let inpmobile=document.querySelector("#upmobile").value
    let inpcountry=document.querySelector("#upcountry").value
    let inpperson=document.querySelector("#upperson").value

     let url=`http://localhost:3000/carrental/${id}`

     fetch(url, {
        method:"PUT" ,
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(

            {

      "name": inpname,
      "age": inpage,
      "aadhar": inpaadhar,
      "checkin": inpcheckin,
      "checkout": inpcheckout,
      "mobile":inpmobile,
      "person":inpperson,
      "country":inpcountry,
      "price":2000 

            }
        )
     })

     location.href="order.html"
     return false

}




