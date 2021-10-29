import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConsentType } from "./consent.constant";
import { Consent, ConsentState } from "./consent.interface";
import { fetchConsent } from "./consentAPI";

const initialState: ConsentState = {
  consents: [
    {
      name: "Bojack horseman",
      email: "bojack@horseman",
      consentTypes: [ConsentType.ADS, ConsentType.NEWSLETTER],
    },
    {
      name: "Princess Carolyn",
      email: "princess@manager",
      consentTypes: [ConsentType.NEWSLETTER],
    },
  ],
};

export const addConsentAsync = createAsyncThunk(
  "consent/fetchConsent",
  async (consent: Consent) => {
    const response = await fetchConsent(consent);
    return response.data;
  }
);

export const consentSlice = createSlice({
  name: "consent",
  initialState,
  reducers: {
    addNewConsent: (state, action: PayloadAction<Consent>) => {
      state.consents = [...state.consents, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addConsentAsync.fulfilled, (state, action) => {
      state.consents = [...state.consents, action.payload];
    });
  },
});
export default consentSlice.reducer;
