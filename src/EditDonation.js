import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedDonation } from "./donation/actions/donation";

const EditDonation = () => {
  // שים לב שהשם הנכון הוא selectedDonationForEdit
  let donationForEdit = useSelector(state => state.selectedDonationForEdit);
  const disp = useDispatch(); // שימוש ב-const

  // שימוש ב־useForm ופעולת השליחה
  let { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: donationForEdit
  });

  const saveDetails = (data) => {
    console.log(data);
    disp(saveEditedDonation(data));
  };

  return (
    <form onSubmit={handleSubmit(saveDetails)}>
      <label>שם</label>
      <input {...register("name", { minLength: 3 })} />
      {errors.name && <span>שם לא תקין</span>}

      <label>שם משפחה</label>
      <input {...register("lastName", { minLength: 3 })} /> {/* תיקון: נוסיף רווח */}
      {errors.lastName && <span>שם לא תקין</span>}

      <label>sum</label>
      <input {...register("sum")} />

      <input type="submit" />
    </form>
  );
};

export default EditDonation;
