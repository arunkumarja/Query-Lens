import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;