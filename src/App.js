import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import EditDonation from "./EditDonation";
import DonationDetails from "./DonationDetails";
import DonationList from "./DonationList";

function App() {
  let selected = useSelector((state) => state.selectedDonation);
  let selectedForEdit = useSelector((state) => state.selectedDonationForEdit);

  return (
    <>
      <DonationList />
      {selected && <DonationDetails />}
      {selectedForEdit && <EditDonation />}
    </>
  );
}

export default App;
