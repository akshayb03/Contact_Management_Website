import CrossIcon from "../assets/cross-mark-on-a-black-circle-background.png";
import EmptyIcon from "../assets/list.png";

export const EmptyList = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={EmptyIcon} width={260} height={260} alt="empty-list" />
      <div className="max-w-96 flex flex-row bg-[#a3a3a3] p-4 border border-black rounded-full items-center">
        <div>
          <img src={CrossIcon} width={70} height={70} alt="cross-icon" />
        </div>
        <div className="w-6" />
        <div>
          <h4 className="font-bold">No Contact found!</h4>
          <p>Please add contact from Create contact button</p>
        </div>
      </div>
      <div className="h-12" />
    </div>
  );
};
