const nodemailer = require('nodemailer');
const details = {
    service:"gmail",
    auth:{
        user:"vishulkumar61@gmail.com",
        pass:""
    },
    port:465,
    host:'smtp.gmail.com'
}

const transporter = nodemailer.createTransport(details)
const mailData = {
    from:"vishulkumar61@gmail.com",
    to:"vk4993102@gmail.com",
    subject:"i am test the email sending enivrmanet emil 2",
    text:`hello bro how are you ?`,
     html:"<h1>Hello codeGrow</h1>"
}
transporter.sendMail(mailData,(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data)
    }
})