import React from "react";

export interface CardHeroProps {
  svg: React.ReactNode;
  title: string;
  description: string;
}

export default function CardHero({ svg, title, description }: CardHeroProps) {
  return (
    <div
      className={`relative w-full md:w-[48%] h-64 p-4 bg-gradient-to-r from-containerSecondary via-containerSecondary to-containerTernary rounded-3xl`}
    >
      {/* <Image className={`absolute right-4 w-52 text-primary`} src={Padlock} alt={"Padlock"} /> */}
      <div className={`absolute right-4 w-52 text-primary`}>{svg}</div>
      <div className={`z-10 flex flex-col md:w-2/3 lg:w-1/2 h-full justify-between`}>
        <h1 className={`z-10 text-3xl`}>{title}</h1>
        <p className={`z-10 text-textSecondary lg:text-xl`}>{description}</p>
      </div>
    </div>
  );
}
