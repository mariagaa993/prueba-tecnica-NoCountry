import {   
    ChatBubbleLeftIcon, 
    HandRaisedIcon, 
    CheckCircleIcon,
    HeartIcon 
} from "@heroicons/react/24/solid";

type Insight = {
    key: string;
    label: string;
    value: string | number;
};

type Props = {
    title: string;      
    insights: Insight[];
};

const getIcon = (key: string) => {
    switch (key) {
        case "messages":
            return <ChatBubbleLeftIcon className="w-5 h-5 text-indigo-600" />;
        case "participation":
            return <HandRaisedIcon className="w-5 h-5 text-green-600" />;
        case "attendance":
            return <CheckCircleIcon className="w-5 h-5 text-blue-600" />;
        case "compromiso":
            return <HeartIcon className="w-5 h-5 text-red-600" />;
        default:
            return null;
    }
};

const AllInsights = ({ title, insights }: Props) => {
    return (
        <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="text-md font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap md:justify-between gap-7">
                {
                    insights.map((insight) => (
                        <div 
                            key={insight.key} 
                            className="flex flex-col md:items-center">
                            <span>{getIcon(insight.key)}</span>
                            <p className="text-md font-bold mt-1">{insight.value}</p>
                            <p className="text-sm text-center text-gray-600">{insight.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllInsights;
