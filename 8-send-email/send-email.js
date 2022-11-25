const nodemailer = require('nodemailer');
const details = {
    service:"gmail",
    auth:{
        user:"vishulkumar61@gmail.com",
        pass:"<App password genrate from google account>",
    },
    port:465,
    host:"smtp.gamil.com"
}
const transporter = nodemailer.createTransport(details);

 const mailOption = {
    from:" ",
    to:"",
    subject:"i am test the email sending enivrmanet",
    text:`A single module with zero dependencies – code is easily auditable, as there are no dark cornersHeavy focus on security,
     no-one likes RCE vulnerabilitiesUnicode support to use any characters, including emoji 💪`,
     html:""
 }

 transporter.sendMail(mailOption,(err,data)=>{
    if(err){
        return console.log(err);
    }else{
        console.log(data)
    }
 })