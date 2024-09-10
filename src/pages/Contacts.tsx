import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import { ContactItem } from "../components/ContactItem";
import { EmptyList } from "../components/EmptyList";
import { ContactButton } from "../components/ContactButton";

export const Contacts = () => {
  const contactList = useSelector(
    (store: AppState) => store.contact.contactList
  );
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex pt-20">
        <Link to="/new-contact">
          <ContactButton text={"Add Contact"} clickHandler={() => {}} />
        </Link>
      </div>
      {contactList.length === 0 ? (
        <div className="w-full flex justify-center mt-20">
          <EmptyList />
        </div>
      ) : (
        <div className="w-full flex-1 p-20">
          <div className="grid md:grid-cols-3 gap-12 grid-cols-1">
            {contactList.map((item, index) => (
              <ContactItem key={index} contact={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
