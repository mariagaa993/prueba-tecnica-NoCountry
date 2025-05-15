import MemberCard from "./MemberCard";

type Members = {
    name: string,
    role: string,
    location: string,
    imageUrl: string
};

type MembersProps = {
    members: Members[];
};

const Members = ({ members } : MembersProps) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pb-10">
            {
                members.map((member, i) => (
                    <div
                        key={member.name} className={i % 2 !== 0 ? "mt-20" : ""}>
                        <MemberCard member={member} />
                    </div>
                ))
            }
        </div>
    );
};

export default Members;
