import { Consent } from "./consent.interface";

export function fetchConsent(consent: Consent) {
  return new Promise<{ data: Consent }>((resolve) =>
    setTimeout(() => resolve({ data: consent }), 500)
  );
}
