interface ImpactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ImpactCard = ({ title, description, icon }: ImpactCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start p-5 rounded-lg hover:bg-white/60 transition-colors duration-300">
      <div className="h-12 w-12 bg-space-blue rounded-full flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-space-blue mb-2">{title}</h3>
        <p className="text-[#718096]">{description}</p>
      </div>
    </div>
  );
};

export default ImpactCard;