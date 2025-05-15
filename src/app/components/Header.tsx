import Image from "next/image";

const Header = () => {
    return (
        <nav className="container mx-auto px-4 py-6">
            <Image 
                src="/next.svg"
                alt="Logo" 
                width={120} 
                height={40} 
                className="w-32 md:w-40 lg:w-48" 
            />
        </nav>
    );
};

export default Header;
