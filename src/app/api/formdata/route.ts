import { NextRequest, NextResponse } from "next/server"
import Nodemailer from 'nodemailer';
import { emailTemplate } from "@/app/emailtemplate/template_1";
import Handlebars from "handlebars";

const transporter = Nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS

    }
})




export async function POST(req: NextRequest) {
    const { firstName, lastName, phone, email, message } = await req.json()

    const complieEmailTemplate = (firstName: string, lastName: string, phone: string, email: string, message: string) => {
        const logoUrl = `https://raw.githubusercontent.com/goddrummerofdw/stefano-portfolio/master/public/images/navbar/logo-dark.jpg`
        const template = Handlebars.compile(emailTemplate)
        const htmlBody = template({ firstName: firstName, lastName: lastName, phone: phone, email: email, message: message, logoUrl: logoUrl })
        return htmlBody;
    }
   

    try {
        const statusCode = NextResponse.json({}).status
        const senderName = '"Stefanos Website"' + process.env.EMAIL_FROM
        const mailData = {
            to: process.env.EMAIL_TO,
            from: senderName,
            subject: `New Customer ${firstName} ${lastName}`,
            html: complieEmailTemplate(firstName, lastName, phone, email, message)
        }

        await new Promise((resolve, reject) => {
            // send mail
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(info);
                    resolve(info);
                }
            });
        });


        if (statusCode === 200) {
            return NextResponse.json({ status: statusCode, message: "message sent successfully!" })

        } else {
            return NextResponse.json({ status: statusCode, message: "something went wrong, please try calling us instead" })
        }
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: error })
    }
}