import { ContactType } from "../utils/utils";

export const Form = ({
  changeHandler,
  newContact,
}: {
  changeHandler: Function;
  newContact: ContactType;
}) => {
  return (
    <div className="flex flex-col border border-black w-full p-4 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:space-x-4 space-y-2 lg:space-y-0">
        <label htmlFor="firstName" className="font-semibold w-1/4">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="border p-2 flex-1 rounded"
          onChange={(e) => changeHandler(e)}
          value={newContact.firstName}
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:space-x-4 space-y-2 lg:space-y-0">
        <label htmlFor="lastName" className="font-semibold w-1/4">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="border p-2 flex-1 rounded"
          onChange={(e) => changeHandler(e)}
          value={newContact.lastName}
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:space-x-4 space-y-3 lg:space-y-0">
        <span className="font-semibold w-1/4">Status</span>
        <div className="flex flex-col space-y-2 flex-1">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              id="active"
              name="status"
              value="Active"
              className="form-radio"
              onChange={(e) => changeHandler(e)}
              checked={newContact.status === "Active"}
            />
            <span>Active</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="InActive"
              className="form-radio"
              onChange={(e) => changeHandler(e)}
              checked={newContact.status === "InActive"}
            />
            <span>Inactive</span>
          </label>
        </div>
      </div>
    </div>
  );
};
