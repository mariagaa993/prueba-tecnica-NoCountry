"use client"
import { useState } from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Team from "./Members";
import Insight from "./Insight";
import Modal from "./Modal";
import TeamToggleList from "./TeamToggleList";
import AllInsights from "./AllInsights";
import TotalPriceBar from "./TotalPriceBar";
import { mock } from "../utils/mock";

const TeamTrackingPanel = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTeam = mock.teams[activeTab];
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTeams, setSelectedTeams] = useState<number[]>([]);

    return (
        <div className="bg-[#000115]">
            <div className="bg-[#000115] border-b border-gray-800">
                <Header />
            </div>
            <div className="container mx-auto md:pb-20 md:pt-8 md:px-4 lg:px-20">
                <div className="bg-white md:rounded-3xl px-4 pt-12 pb-20 md:px-3 
                    md:pt-6 md:pb-12 lg:px-8 lg:pt-8">
                    <SubHeader 
                        title={"Panel de Seguimiento de Equipos"} 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                        teamName={`Equipo ${activeTeam.name}`}
                    />
                    <Team members={activeTeam.members} />
                    <Insight insights={activeTeam.insights} />
                    <div className="flex justify-center md:pt-4">
                        <button 
                            type="button" 
                            className="w-full md:w-auto bg-indigo-600 text-white px-20 py-2 cursor-pointer 
                            rounded text-sm font-bold" 
                            onClick={() => setModalOpen(true)}>Ver insights
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} 
                title="Selecciona un equipo y descubre más insights">
               <TeamToggleList
                    teams={mock.teams}
                    selected={selectedTeams}         
                    setSelected={setSelectedTeams}  
                />
                {
                    selectedTeams.map((teamIndex, idx) => (
                        <AllInsights
                            key={teamIndex}
                            title={`Equipo ${idx + 1}`}
                            insights={mock.teams[teamIndex]?.insights || []}
                        />
                    ))
                }
                <TotalPriceBar 
                    selectedTeams={selectedTeams} 
                    teams={mock.teams} 
                />
            </Modal>
        </div>
    );
};

export default TeamTrackingPanel;
