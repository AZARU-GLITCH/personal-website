// C
function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        
    };
    const serviceID="service_0zoyqjz";
    const templateID="template_hn5h4nm";
     
    emailjs
    .send(serviceID,templateID,params)  

    .then( (res) =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
  console.log(res);
  alert("Your Sent Message is success fully");
})
.catch((err)=> console.log(err));
}