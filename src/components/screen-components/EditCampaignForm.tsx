import RegularInputs, { SelectInput, TextAreaInput } from "../inputs/Inputs";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { CampaignSchema } from "../../schemas";
import modalStyles from "../../styles/modals/modal.module.css";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";

export default function EditCampaignForm({
  customFormStyles,
}: {
  customFormStyles?: string;
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        banner_url: "",
        status: "",
      },
      validationSchema: CampaignSchema,
      onSubmit: async (values) => {
        const response = await axios.post(
          "https://test.quups.app/api/create-account",
          values
        );
        console.log(response.data.message);
      },
    });

  useEffect(() => {
    if (
      values.name !== "" &&
      values.description !== "" &&
      values.start_date !== "" &&
      values.end_date !== "" &&
      values.banner_url !== "" &&
      values.status !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <form className={customFormStyles}>
      <RegularInputs
        label="Campaign name"
        id="name"
        type="text"
        name="name"
        value={values.name}
        onChangeEvt={handleChange}
        onBlurEvt={handleBlur}
        customStyles={errors.name && touched.name ? "error_field" : ""}
        errorMsg={errors.name && touched.name ? errors.name : ""}
        required
      />
      <TextAreaInput
        name="description"
        id="description"
        placeholder="Description"
        value={values.description}
        onChangeEvt={handleChange}
        onBlurEvt={handleBlur}
        customStyles={
          errors.description && touched.description ? "error_field" : ""
        }
        errorMsg={
          errors.description && touched.description ? errors.description : ""
        }
        required
      />
      <div className="divider">
        <RegularInputs
          placeholder="Enter start date"
          id="start-date"
          type="date"
          name="start_date"
          value={values.start_date}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={
            errors.start_date && touched.start_date ? "error_field" : ""
          }
          errorMsg={
            errors.start_date && touched.start_date ? errors.start_date : ""
          }
          required
        />
        <RegularInputs
          placeholder="Enter end date"
          id="end-date"
          type="date"
          name="end_date"
          value={values.end_date}
          onChangeEvt={handleChange}
          onBlurEvt={handleBlur}
          customStyles={
            errors.end_date && touched.end_date ? "error_field" : ""
          }
          errorMsg={errors.end_date && touched.end_date ? errors.end_date : ""}
          required
        />
      </div>
      <RegularInputs
        label="Banner URL"
        id="banner"
        type="text"
        name="banner_url"
        value={values.banner_url}
        onChangeEvt={handleChange}
        onBlurEvt={handleBlur}
        customStyles={
          errors.banner_url && touched.banner_url ? "error_field" : ""
        }
        errorMsg={
          errors.banner_url && touched.banner_url ? errors.banner_url : ""
        }
        required
      />
      <SelectInput
        name="status"
        id="status"
        label="Select status"
        options={["Not started", "In progress", "Completed"]}
        value={values.status}
        onChangeEvt={handleChange}
        onBlurEvt={handleBlur}
        customStyles={errors.status && touched.status ? "error_field" : ""}
        errorMsg={errors.status && touched.status ? errors.status : ""}
        required
      />
      <div className={modalStyles.modal_footer}>
          <SecondaryButton label="Cancel" type="button" clickEvt={() => {}} />
          <PrimaryButton
            label="Create Campaign"
            type="submit"
            clickEvt={handleSubmit}
          disabled={isDisabled}
          />
        </div>
    </form>
  );
}
