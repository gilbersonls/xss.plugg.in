import Tab from "./Tab";

const Tabs: React.FC = () => {
  return (
    <div className="flex gap-x-3">
      <Tab active />
      <Tab />
      <Tab add />
    </div>
  );
};

export default Tabs;
