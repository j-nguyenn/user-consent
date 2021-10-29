export enum ConsentType {
  NEWSLETTER = "NEWSLETTER",
  ADS = "ADS",
  STATISTICS = "STATISTICS",
}

export const getConsentLabel = (type: ConsentType) => {
  switch (type) {
    case ConsentType.NEWSLETTER:
      return "Receive newsletter";
    case ConsentType.ADS:
      return "Be shown target ads";
    case ConsentType.STATISTICS:
      return "Contribute to anonymous visit statistics";
    default:
      return type;
  }
};
