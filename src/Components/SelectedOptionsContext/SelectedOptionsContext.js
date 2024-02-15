import { createContext, useContext, useState } from "react";

const SelectedOptionsContext = createContext();
export function SelectedOptionsProvider({ children }) {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupCity, setPickupCity] = useState(0);
  const [selectedpickHub, setSelectedpickHub] = useState(0);
  const [selecteddropHub, setSelecteddropHub] = useState(0);
  const [pairportid, setpairport] = useState(0);
  const [cartype, setCartype] = useState([]);
  const [total_amt, settotal_amt] = useState(0);
  return (
    <SelectedOptionsContext.Provider
      value={{
        pickupDate,
        setPickupDate,
        returnDate,
        setReturnDate,
        pickupCity,
        setPickupCity,
        selectedpickHub,
        setSelectedpickHub,
        selecteddropHub,
        setSelecteddropHub,
        pairportid,
        setpairport,
        cartype,
        setCartype,
        total_amt,
        settotal_amt,
      }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  );
}

export function useSelectedOptions() {
  return useContext(SelectedOptionsContext);
}
