interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="card group hover:border-mars-orange border border-transparent transition-all duration-300">
      <div className="h-12 w-12 bg-gradient-to-br from-mars-orange/20 to-mars-red/20 rounded-lg flex items-center justify-center mb-5 text-mars-red group-hover:scale-110 transform transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#2d3748] mb-2">{title}</h3>
      <p className="text-[#718096]">{description}</p>
    </div>
  );
};

export default FeatureCard;