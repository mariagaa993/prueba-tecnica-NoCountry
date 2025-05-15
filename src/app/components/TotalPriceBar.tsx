type TotalPriceProps = {
    selectedTeams: number[];
    teams: { price: number }[];
};

const TotalPriceBar = ({ selectedTeams, teams } : TotalPriceProps) => {
    const total = selectedTeams.reduce((acc, i) => acc + teams[i].price, 0);

    if (selectedTeams.length === 0) return null;

    return (
        <div className="flex flex-wrap justify-between items-center py-3 md:pb-0 mt-8 border-t border-gray-300">
            <p className="text-md font-semibold py-3">Precio total: ${total}</p>
            <button
                type="button"
                className="w-full bg-black text-white px-20 py-2 cursor-pointer 
                rounded text-sm font-bold">
                Comprar
            </button>
        </div>
    );
};

export default TotalPriceBar;
