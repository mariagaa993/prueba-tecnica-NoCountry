import Image from "next/image";

type Member = {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
};

type MemberCardProps = {
  member: Member;
};

const MemberCard = ({ member }: MemberCardProps) => {
    return (
        <div className="flex flex-col items-center text-center p-4 max-w-xs">
            <div className="relative mb-4">
                <div className="absolute -top-4 -left-6 w-32 h-28 rounded-full bg-indigo-200 
                    opacity-50 blur-xl"></div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg 
                    border-4 border-white">
                    <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                    />
                </div>
            </div>
            <h3 className="text-sm font-semibold text-[#000115]">{member.name}</h3>
            <p className="text-sm text-indigo-600">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.location}</p>
        </div>
    );
};

export default MemberCard;
