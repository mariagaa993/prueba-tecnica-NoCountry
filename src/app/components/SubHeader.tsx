import { StarIcon } from "@heroicons/react/24/solid";
import Tabs from "./Tabs";
import Dropdown from "./Dropdown";
import { tab } from "../utils/tab";

type SubHeaderProps = {
    title: string, 
    activeTab: number,
    setActiveTab: (index: number) => void;
    teamName: string,
};

const SubHeader = ({ title, activeTab, setActiveTab, teamName } : SubHeaderProps) => {
    return (
        <div className="pb-6 md:pb-10">
            <h1 className="font-semibold text-2xl pb-6">{title}</h1>  
            <div className="hidden md:block">
                <Tabs
                    tabs={tab.team}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="flex items-center gap-2 pt-8 md:pt-10">
                    <StarIcon className="w-6 h-6 text-yellow-300" />
                    <h2 className="font-semibold text-xl">{teamName}</h2> 
                </div> 
            </div>
            <div className="md:hidden">
                <Dropdown
                    options={tab.team}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <div className="flex items-center gap-2 pt-8">
                    <StarIcon className="w-6 h-6 text-yellow-300" />
                    <h2 className="font-semibold text-xl">{teamName}</h2> 
                </div>   
            </div>
        </div>
    );
};

export default SubHeader;
