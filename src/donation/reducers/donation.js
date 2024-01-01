const initialState = {
    arr: [
        { id: 1, name: "rina", lastName: "cohen", sum: 3.4 },
        { id: 2, name: "mira", lastName: "kedem", sum: 3.4 },
        { id: 3, name: "diza", lastName: "levi", sum: 7.4 },
    ],
    selectedDonation: null,
    selectedDonationForEdit: null
};

export const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DONATION":
            return {
                ...state,
                arr: [...state.arr, action.add]
            };
        case "SELECT_DONATION_TO_SHOW":
            return {
                selectedDonation: action.Donation,
                selectedDonationForEdit: state.selectedDonationForEdit,
                arr: state.arr
            };
        case "DELETE_DONATION":
            return {
                selectedDonation: state.selectedDonation,
                selectedDonationForEdit: state.selectedDonationForEdit,
                arr: state.arr.filter(item => item.id !== action.donateId)
            };
        case "SELECT_DONATION_FOR_EDIT":
            return {
                selectedDonation: state.selectedDonation,
                selectedDonationForEdit: action.select,
                arr: state.arr
            };
        case "SAVE_EDITED_DONATION":
            let b = state.arr.map(item => {
                if (item.id === action.save.id)
                    return action.save;
                return item;
            });
            return {
                selectedDonation: state.selectedDonation,
                selectedDonationForEdit: null,
                arr: b
            };
        default:
            return state;
    }
};