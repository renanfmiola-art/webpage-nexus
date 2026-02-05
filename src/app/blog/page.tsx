"use client";

export default function Page() {
    const people = [
        {
            name: "Ramon Barbosa",
            role: "Press",
            image: "/ramon.png",
            link: "https://www.linkedin.com/in/monfranco8/"
        },
        {
            name: "Renan Miola",
            role: "Founder",
            image: "/renan-miola.jpg",
            link: "https://www.linkedin.com/in/renan-fernando-miola-4132182bb/"
        },
        {
            name: "Murilo Demarchi",
            role: "CoFounder",
            image: "/murilo-demarchi.png"
        },
    ];

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Insights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {people.map((person, index) => {
                        const CardContent = (
                            <div className="p-8 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shrink-0 bg-white/5">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white tracking-tight uppercase leading-[0.9]">
                                        {person.name}
                                    </h2>
                                    <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        );

                        return person.link ? (
                            <a
                                key={index}
                                href={person.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                {CardContent}
                            </a>
                        ) : (
                            <div
                                key={index}
                                className="group flex flex-col border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
                            >
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
