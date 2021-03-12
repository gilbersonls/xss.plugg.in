import Tabs from "./Tabs";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-900">
      <div className="flex justify-between pt-4 pr-6">
        <div>
          <Tabs />
        </div>
        <div>
          <h1 className="text-gray-300 text-right">XSS Generator</h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
