type TeamToggleProps = {
    team: string;
    nameTeam: string;
    price: number;
    selected: boolean;
    onToggle: () => void;
};

const TeamToggle = ({ team, nameTeam, price, selected, onToggle }: TeamToggleProps) => {
    return (
        <div onClick={onToggle}
            className={`flex justify-between items-center px-4 py-2 border rounded cursor-pointer select-none
            ${selected ? "border-indigo-600 bg-indigo-50" : "border-gray-300 hover:border-indigo-400"}`}>
            <div>
                <p className="text-sm">{team}</p>
                <p className="text-md font-bold">{nameTeam}</p>
            </div>
            <p className="font-bold text-indigo-600">${price.toFixed(2)}</p>
        </div>
    );
};

export default TeamToggle;
