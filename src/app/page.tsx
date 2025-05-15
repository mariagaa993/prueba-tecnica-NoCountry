"use client"
import { useState } from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Team from "./components/Members";
import Insight from "./components/Insight";
import Modal from "./components/Modal";
import { mock } from "./utils/mock";

const Home = () => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTeam = mock.teams[activeTab];
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="bg-white md:bg-gray-100">
            <div className="bg-gray-200">
                <Header />
            </div>
            <div className="container mx-auto px-4 pb-20 pt-12 md:py-6 lg:px-20">
                <div className="bg-white md:shadow-md md:rounded-md md:px-3 md:pt-8 md:pb-12 lg:px-8">
                    <SubHeader 
                        title={"Panel de Seguimiento de Equipos"} 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab}
                        teamName={activeTeam.name}
                    />
                    <Team members={activeTeam.members} />
                    <Insight insights={activeTeam.insights} />
                    <div className="flex justify-center md:pt-4">
                        <button 
                            type="button" 
                            className="w-full md:w-auto bg-black text-white px-20 py-2 cursor-pointer 
                            rounded text-sm font-bold" 
                            onClick={() => setModalOpen(true)}>Ver insights
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Talento">
                holaaaa
            </Modal>
        </div>
    );
};

export default Home;
