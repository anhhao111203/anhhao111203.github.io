function myFunction() {
    alert("You've created your account successfully!");
  }

function myFunction2() {
    alert("You haven't ever had your account. Please sign up the account")
}

function myFunction3() {
    alert("Your order has been submitted! ")
}



function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++)
    {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;

        if (elementTop < windowHeight - elementVisible)
        {
            reveals[i].classList.add("active");
        }
        else
        {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);




