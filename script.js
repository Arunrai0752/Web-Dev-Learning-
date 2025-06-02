function Submit()
{

    const nm = document.getElementById("fullName").value.trim();
    const em = document.getElementById("emailAddress").value.trim();
    const ph = document.getElementById("phoneNumber").value.trim();

    if(!nm || !em || !ph)
        {
            alert("Please fill all the field Correctly")

        }

}

function Reset()
{
    document.querySelectorAll("input".array.forEach(element => {
        element.value = "" ;
        
    }));
}