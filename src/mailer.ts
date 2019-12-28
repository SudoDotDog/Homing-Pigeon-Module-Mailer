/**
 * @author WMXPY
 * @namespace Module_Mailer
 * @description Mailer Module
 */

import { Activity, IHomingPigeonModule } from "homing-pigeon";
import * as NodeMailer from "nodemailer";
import * as Mail from "nodemailer/lib/mailer";
import * as SMTPTransport from "nodemailer/lib/smtp-transport";

export class HomingPigeonMailerModule implements IHomingPigeonModule {

    public static create(nodeMailerOptions: SMTPTransport.Options): HomingPigeonMailerModule {

        return new HomingPigeonMailerModule(nodeMailerOptions);
    }

    private readonly _mailer: Mail;

    private constructor(nodeMailerOptions: SMTPTransport.Options) {

        this._mailer = NodeMailer.createTransport(nodeMailerOptions);
    }

    public validate(activity: Activity): boolean {

        return false;
    }

    public async execute(activity: Activity): Promise<boolean> {

        return false;
    }
}
