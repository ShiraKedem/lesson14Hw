import { useSelector } from "react-redux";

const DonationDetails = () => {
    let donation = useSelector(state => state.selectedDonation)
    return (<div className="">
        פרטי השיר הנבחר
        <h1>{donation.name}</h1>
        <h2>{donation.lastName}</h2>
        <h2>{donation.sum}</h2>
    </div>);
}

export default DonationDetails;