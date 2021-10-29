import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { ConsentType, getConsentLabel } from "./consent.constant";
import { addConsentAsync } from "./consentSlice";
import styles from "./consent.module.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router";

export function ConsentForm() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consents, setConsents] = useState<ConsentType[]>([]);

  const onGiveConsent = () => {
    dispatch(addConsentAsync({ name, email, consentTypes: consents }))
      .then(unwrapResult)
      .then(() => {
        history.push("/list");
      });
  };

  const onConsentChange = (key: ConsentType) => {
    if (consents.includes(key)) {
      setConsents(consents.filter((consent) => consent !== key));
    } else {
      setConsents([...consents, key]);
    }
  };

  const isConsentButtonDisabled = () => {
    return !(name.length && email.length && consents.length);
  };

  return (
    <div className={styles.form}>
      <div className={styles.section}>
        <input
          name="name"
          placeholder="Enter your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          name="email"
          placeholder="Enter your email ..."
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className={styles.section}>
        <p>I agree to</p>
        <div>
          {Object.keys(ConsentType).map((key: any) => {
            return (
              <div key={key}>
                <input
                  className={styles["form-check"]}
                  type="checkbox"
                  onChange={() => onConsentChange(key)}
                ></input>
                <label>{getConsentLabel(key)}</label>
              </div>
            );
          })}
        </div>
      </div>
      <button
        disabled={isConsentButtonDisabled()}
        className={styles.button}
        onClick={onGiveConsent}
      >
        Give consent
      </button>
    </div>
  );
}
