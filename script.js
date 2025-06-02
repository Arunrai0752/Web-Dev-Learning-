function Submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("emailAddress").value.trim();
  const ph = document.getElementById("phoneNumber").value.trim();

  if (!nm || !em || !ph) {
    alert("Please fill all the fields Correctly");
    return;
  }

  if(!validate())
    {
        return ;
    }

    let tempData = JSON.parse(localStorage.getItem("Data"))|| []


    tempData.push({
        Name: nm,
        Email: em,
        Phone: ph,
    });

    const Data = JSON.stringify(tempData)
    localStorage.setItem("Data" ,Data);
    

    Reset();



}

function Reset() {
  document.querySelectorAll(
    "input").forEach((element) => {
      element.value = "";
    });
}

function validate() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("emailAddress").value.trim();
  const ph = document.getElementById("phoneNumber").value.trim();

  let isValid = true;

  document
    .querySelectorAll(".error")
    .forEach((element) => (element.innerText = ""));

  if (!/^[a-zA-Z]+$/.test(nm) || nm.length < 3) {
    document.getElementById("nameError").innerText =
      "Only Alphabets Allowed & Minimum";
      isValid = false;
  }


  if (!/^[a-zA-Z0-9]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(em)) {
    document.getElementById("emailError").innerText =
      " Please Enter A Valiid Email";
            isValid = false;
  }

  if(!/^[6-9]\d(9)$/.test(ph)|| ph.length !==10)
    {

        document.getElementById("phoneError").innerText = "Enter A Valid Indian number";
        isValid =false;
    }

    return isValid ;
}
