const testimonials = [
    {
        user: "Rosetta Q",
        message: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
        url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
        user: "Shadysusy",
        message: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
        url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },
    {
        user: "Sonniii",
        message: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
        url: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    },

]

let item = 0;

function setData() {
    const {user, message, url} = testimonials[item];

    document.getElementById("usn").innerHTML = user;
    document.getElementById("msg").innerHTML = message;
    document.getElementById("pfp").src = url;
}


setData();

let i = setInterval(function() { setData(); 
    console.log(testimonials[item]);
    
    if(item >= 2) {
        item = 0;
    }
    else{
        item++;  
    }

}, 6000); 
