/**
 * @author WMXPY
 * @namespace Module_Mailer
 * @description Mailer Module
 */

import { Activity, IHomingPigeonModule } from "homing-pigeon";

export class HomingPigeonMailerModule implements IHomingPigeonModule {

    public static create(): HomingPigeonMailerModule {

        return new HomingPigeonMailerModule();
    }

    public validate(activity: Activity): boolean {

        return false;
    }

    public async execute(activity: Activity): Promise<boolean> {

        return false;
    }
}
