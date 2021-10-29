import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getConsentLabel } from "./consent.constant";
import styles from "./consent.module.css";

export function ConsentList() {
  const { consents } = useSelector((state: RootState) => state.consent);
  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Consent given for</th>
        </tr>
      </thead>
      <tbody>
        {consents.map((consent, index) => {
          return (
            <tr key={index}>
              <td>{consent.name}</td>
              <td>{consent.email}</td>
              <td>{consent.consentTypes.map(getConsentLabel).join(", ")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
