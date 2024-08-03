import RegularInputs, { SelectInput, TextAreaInput } from "../inputs/Inputs";

export function CreateCampaignForm({
  customFormStyles,
}: {
  customFormStyles?: string;
}) {
  return (
    <form className={customFormStyles}>
      <RegularInputs
        label="Campaign name"
        id="name"
        type="text"
        name="name"
        onChangeEvt={() => {}}
      />
      <TextAreaInput
        name="description"
        id="description"
        placeholder="Description"
      />
      <div className="divider">
        <RegularInputs
          placeholder="Enter start date"
          id="start-date"
          type="date"
          name="start-date"
          onChangeEvt={() => {}}
        />
        <RegularInputs
          placeholder="Enter end date"
          id="end-date"
          type="date"
          name="end-date"
          onChangeEvt={() => {}}
        />
      </div>
      <RegularInputs
        label="Banner URL"
        id="banner"
        type="text"
        name="banner"
        onChangeEvt={() => {}}
      />
      <SelectInput
        name="status"
        id="status"
        label="Select status"
        options={["Not started", "In progress", "Completed"]}
      />
    </form>
  );
}

export function EditCampaignForm({
  customFormStyles,
}: {
  customFormStyles?: string;
}) {
  return (
    <form className={customFormStyles}>
      <RegularInputs
        label="Campaign name"
        id="name"
        type="text"
        name="name"
        onChangeEvt={() => {}}
      />
      <TextAreaInput
        name="description"
        id="description"
        placeholder="Description"
      />
      <div className="divider">
        <RegularInputs
          placeholder="Enter start date"
          id="start-date"
          type="date"
          name="start-date"
          onChangeEvt={() => {}}
        />
        <RegularInputs
          placeholder="Enter end date"
          id="end-date"
          type="date"
          name="end-date"
          onChangeEvt={() => {}}
        />
      </div>
      <RegularInputs
        label="Banner URL"
        id="banner"
        type="text"
        name="banner"
        onChangeEvt={() => {}}
      />
      <SelectInput
        name="status"
        id="status"
        label="Select status"
        options={["Not started", "In progress", "Completed"]}
      />
    </form>
  );
}
