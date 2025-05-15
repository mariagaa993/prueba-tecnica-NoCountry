import Image from "next/image";

const Header = () => {
    return (
        <nav className="container mx-auto px-4 py-6">
            <Image 
                src="/light-no-country-logo.png"
                alt="Logo" 
                width={100} 
                height={40} 
                className="w-32" 
            />
        </nav>
    );
};

export default Header;
