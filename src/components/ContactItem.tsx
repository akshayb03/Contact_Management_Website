import { useDispatch } from "react-redux";
import { ContactType } from "../utils/utils";
import { AppDispatch } from "../store";
import { deleteContact } from "../store/contact";
import { useNavigate } from "react-router-dom";

export const ContactItem = ({ contact }: { contact: ContactType }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const onEdit = () => {
    navigate("/edit-contact", { replace: true, state: { contact: contact } });
  };

  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className="border-2 border-black">
      <div className="bg-white p-6 space-y-2">
        <p>
          {contact.firstName} {contact.lastName}
        </p>
        <p>Status: {contact.status}</p>
      </div>
      <div className="flex flex-col justify-around">
        <button
          className="bg-[#10b981] p-2 text-white font-bold"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="bg-[#f43f5e] p-2 text-white font-bold"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
