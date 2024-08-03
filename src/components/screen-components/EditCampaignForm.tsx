import RegularInputs, { SelectInput, TextAreaInput } from "../inputs/Inputs";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { CampaignSchema } from "../../schemas";
import modalStyles from "../../styles/modals/modal.module.css";
import { PrimaryButton, SecondaryButton } from "../buttons/Buttons";
import { toast } from "react-toastify";

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
        try {
          const response = await axios.post(
            "https://test.quups.app/api/campaigns",
            values,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
            }
          );
          if (response.status === 200) {
            toast.success("Campaign updated successfully");
          } else {
            toast.error("Something went wrong. Please retry");
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.response.data.message);
        }
      },
    });

  useEffect(() => {
    if (
      touched.name ||
      touched.description ||
      touched.start_date ||
      touched.end_date ||
      touched.banner_url ||
      touched.status
    ) {
      if (
        !errors.name &&
        !errors.description &&
        !errors.start_date &&
        !errors.end_date &&
        !errors.banner_url &&
        !errors.status
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [errors, touched]);

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
          type="datetime-local"
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
          type="datetime-local"
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
