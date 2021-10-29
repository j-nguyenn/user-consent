import { ConsentType } from "./consent.constant";

export interface Consent {
  name: string;
  email: string;
  consentTypes: ConsentType[];
}
export interface ConsentState {
  consents: Consent[];
}
