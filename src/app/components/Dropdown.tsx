type DropdownProps = {
  options: { id: number; label: string }[];
  activeTab: number;
  setActiveTab: (index: number) => void;
};

const Dropdown = ({ options, activeTab, setActiveTab }: DropdownProps) => {
  return (
        <select
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none 
            bg-white"
            value={activeTab}
            onChange={(e) => setActiveTab(Number(e.target.value))}>
            {
                options.map((option, idx) => (
                    <option key={option.id} value={idx}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    );
};

export default Dropdown;
