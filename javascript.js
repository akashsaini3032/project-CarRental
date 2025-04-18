let signup=()=>{
    let signname=document.querySelector("#signupname").value
    let signnum=document.querySelector("#signupnum").value
    let signemail=document.querySelector("#signupemail").value
    let signpass=document.querySelector("#signuppass").value
    let signcpass=document.querySelector("#signupcpass").value

    
    let errname = document.querySelector("#errname");
    let errnum = document.querySelector("#errnum");
    let erremail = document.querySelector("#erremail");
    let errpass = document.querySelector("#errpass");
    let errcpass = document.querySelector("#errcpass");
  


    if(signname==""){
        errname.innerHTML="Please Enter Your Name Here"
        errname.style.color = "red";
        return false
    }

    // Number validation
    if (signnum === "") {
        errnum.innerHTML = "Please enter the number";
        errnum.style.color = "red";
        return false
      }
    
       else if (isNaN(signnum)) {
        errnum.innerHTML = "Please enter a valid number";
        errnum.style.color = "red";
        return false
      }
    
       else if (signnum.length !== 10) {
        errnum.innerHTML = "Please enter a valid phone number (10 digits)";
        errnum.style.color = "red";
        return false
      }

      // Email validation
    if (signemail === "") {
        erremail.innerHTML = "Please enter the email";
        erremail.style.color = "red";
        return false
      }
     
      else if (!(signemail.includes("@") && signemail.includes(".com"))) {
        erremail.innerHTML = "Please enter a valid email address";
        erremail.style.color = "red";
        return false
      }

      // Password validation
    if (signpass === "") {
        errpass.innerHTML = "Please enter the Password";
       errpass.style.color="red";
       return false

      } else if (
        !(
            signpass.match(/[0-9]/) &&
            signpass.match(/[!@#$%^&*()]/) &&
            signpass.match(/[a-z]/) &&
            signpass.match(/[A-Z]/)
        )
      ) {
        errpass.innerHTML = "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
        errpass.style.color = "red";
        return false
      }


      // Confirm Password validation
if (signcpass === "") {
  errcpass.innerHTML = "Please confirm your password";
  errcpass.style.color = "red";
  return false;
} else if (signcpass !== signpass) {
  errcpass.innerHTML = "Passwords do not match";
  errcpass.style.color = "red";
  document.querySelector("#signupcpass").focus();
  document.querySelector("#signupcpass").value = "";
  return false; // Move this return statement here
}



    localStorage.setItem("Name",signname)
    localStorage.setItem("Number",signnum)
    localStorage.setItem("Email",signemail)
    localStorage.setItem("Password",signpass)
    localStorage.setItem("CPassword",signcpass)

    location.href="login.html"
    return false
}

let login=()=>{
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("Name")
    let localpass=localStorage.getItem("Password")

    if(loginname==localname && loginpass==localpass){
        location.href="index.html"
    }

    else{
        alert("invalid username and password")
    }

    return false
}

let logout=()=>{
    localStorage.clear()
}