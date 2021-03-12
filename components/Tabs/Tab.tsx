import cn from "classnames";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { AiOutlinePlus as AddIcon } from "react-icons/ai";

type TabProps =
  | {
      label?: string;
      active?: boolean;
      add?: false;
    }
  | {
      label?: never;
      active?: never;
      add: true;
    };

const Tab: React.FC<TabProps> = ({ label, active, add }) => {
  return (
    <div
      className={cn(
        "group hover:bg-gray-700 text-sm font-medium px-3 py-2 flex items-center gap-x-2 rounded-t-sm cursor-pointer",
        { "bg-gray-800 text-gray-500": add || !active },
        { "bg-gray-700 text-gray-300 ": !add && active }
      )}
    >
      {!add && (
        <>
          <p>{label || "Untitled"}</p>
          <CloseIcon
            className={cn("text-base text-gray-500", {
              "opacity-0 parent group-hover:opacity-100": !active,
            })}
          />
        </>
      )}

      {add && <AddIcon className="text-base text-gray-500 " />}
    </div>
  );
};

export default Tab;
