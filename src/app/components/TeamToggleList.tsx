"use client";
import TeamToggle from "./TeamToggle";

type Team = { 
    name: string;
    price: number;
};

type TeamToggleProps = {
    teams: Team[];
    selected: number[]; 
    setSelected: (selected: number[]) => void;
    onChange?: (selectedIndexes: number[]) => void;
};

const TeamToggleList = ({ teams, selected, setSelected, onChange }: TeamToggleProps) => {
    const toggle = (index: number) => {
        const newSelected = selected.includes(index)
        ? selected.filter(i => i !== index)
        : [...selected, index];
        setSelected(newSelected);

        if (onChange) onChange(newSelected);
    };

    return (
        <div className="flex flex-col space-y-2">
            {
                teams.map((team, index) => (
                    <TeamToggle
                        key={index}
                        team={`Equipo ${index + 1}`}
                        nameTeam={team.name}
                        price={team.price}
                        selected={selected.includes(index)}
                        onToggle={() => toggle(index)}
                    />
                ))
            }
        </div>
    );
};

export default TeamToggleList;
