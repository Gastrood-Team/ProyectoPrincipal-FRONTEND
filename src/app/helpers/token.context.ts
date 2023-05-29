import { HttpContext, HttpContextToken } from "@angular/common/http";

export const NO_TOKEN = new HttpContextToken<boolean>(() => false);

export function skipToken() {
    return new HttpContext().set(NO_TOKEN, true);
}
