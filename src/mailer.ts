/**
 * @author WMXPY
 * @namespace Module_Mailer
 * @description Mailer Module
 */

import { Activity, IHomingPigeonModule } from "homing-pigeon";
import * as NodeMailer from "nodemailer";

export class HomingPigeonMailerModule implements IHomingPigeonModule {

    public static create(nodeMailerOptions: any): HomingPigeonMailerModule {

        return new HomingPigeonMailerModule(nodeMailerOptions);
    }

    private readonly _mailer;

    private constructor(nodeMailerOptions: any) {

        this._mailer = NodeMailer.createTransport(nodeMailerOptions);
    }

    public validate(activity: Activity): boolean {

        return false;
    }

    public async execute(activity: Activity): Promise<boolean> {

        return false;
    }
}
