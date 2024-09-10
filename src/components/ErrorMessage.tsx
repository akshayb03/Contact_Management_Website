export const ErrorMessage = ({ msg }: { msg: string }) => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <h4>{msg}.</h4>
    </div>
  );
};
