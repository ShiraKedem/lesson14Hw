export const selectDonationToShow = (donation) => {
    return {
        type: "SELECT_DONATION_TO_SHOW",
        Donation: donation
    }
}

export const deleteDonation = (donateid) => {
    return {
        type: "DELETE_DONATION",
        donateId: donateid
    }
}

export const addDonation = (donation) => {
    return {
        type: "ADD_DONATION",
        add: donation
    }
}

export const selectDonationForEdit = (donation) => {
    return {
        type: "SELECT_DONATION_FOR_EDIT",
        select: donation
    }
}

export const saveEditedDonation = (donation) => {
    return {
        type: "SAVE_EDITED_DONATION",
        save: donation
    }
}


