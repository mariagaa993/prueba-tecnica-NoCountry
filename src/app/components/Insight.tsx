import Carousel from "./Carousel";
import {   
    ChatBubbleLeftIcon, 
    HandRaisedIcon, 
    CheckCircleIcon 
} from "@heroicons/react/24/outline";

type Insight = {
    key: string;
    value: string;
    label: string;
};

type InsightProps = {
    insights: Insight[];
};

const getIcon = (key: string) => {
    switch (key) {
        case "messages":
            return <ChatBubbleLeftIcon className="w-10 h-10 text-indigo-600" />;
        case "participation":
            return <HandRaisedIcon className="w-10 h-10 text-green-600" />;
        case "attendance":
            return <CheckCircleIcon className="w-10 h-10 text-blue-600" />;
        default:
            return null;
    }
};

const Insight = ({ insights } : InsightProps) => {
    return (
        <Carousel> 
            {
                insights.map(item => (
                    <div
                        key={item.key}
                        className="min-w-[230px] snap-start bg-white p-5 border border-gray-200 
                        rounded-md shadow-md flex items-center gap-4">
                        <div>{getIcon(item.key)}</div>
                        <div className="">
                            <p className="text-2xl font-bold">{item.value}</p>
                            <p className="text-sm text-gray-500">{item.label}</p>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default Insight;
