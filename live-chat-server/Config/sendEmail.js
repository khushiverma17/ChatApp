const nodemailer = require("nodemailer")

module.exports = async(email, subject, text) => {
    try{
    //   console.log("email is " ,email)
    //   console.log("subject is ", subject)
    //   console.log("text is ", text)
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.EMAIL_PORT,
            service: process.env.SERVICE,
            secure: process.env.SECURE,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })

        const html = `<b>${text}</b>`
        
        let info = await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text,
             html: html
        })
        console.log("Email sent successfully")
        // console.log("info.message is ", info.message)
           return info

    }catch(error){
        console.log("Email not sent")
        console.log(error)
    }
}