type Tab = {
  id: number;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  activeTab: number;
  setActiveTab?: (id: number) => void;
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
    return (
        <div className="border-b border-gray-300">
            <div className="flex flex-wrap gap-x-8 gap-y-2" role="tablist">
                {
                    tabs.map(tab => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab?.(tab.id)}
                            className={`relative py-3 px-4 font-medium text-sm whitespace-nowrap
                            transition-colors duration-300 cursor-pointer focus:outline-none
                            ${tab.id === activeTab ? "text-indigo-600" : "text-gray-600 hover:text-indigo-500"}`}
                            role="tab"
                            aria-selected={tab.id === activeTab}
                            tabIndex={tab.id === activeTab ? 0 : -1}>
                            {tab.label}
                            {
                                tab.id === activeTab && (
                                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 
                                    rounded-t-md" aria-hidden="true" />
                                )
                            }
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Tabs;
