import ContactIcon from "../assets/contact-w.png";

export const ContactButton = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: Function;
}) => {
  return (
    <button
      onClick={() => clickHandler()}
      className="w-56 pt-2 pb-2 pr-4 border-2 border-[#0369a1] rounded-full flex items-center justify-center bg-[#0369a1] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
    >
      <img src={ContactIcon} width={52} height={52} alt="contact-icon" />
      <span className="mb-[1px] text-white font-bold">{text}</span>
    </button>
  );
};
