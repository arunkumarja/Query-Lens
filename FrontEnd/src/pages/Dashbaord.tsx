import {FileText,Gauge,ArrowLeftRight,BarChart3 } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import QueryCard from "../components/QueryActions";
import FeatureCard from "../components/FeatureCard";

const Dashboard = () => {
  return (
    <MainLayout>

      <Hero />

      <div className="mt-8">
        <QueryCard />
      </div>

      <div className="
        mt-8
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      ">
        <FeatureCard
          icon={<FileText size={18} />}
          title="Explain"
          description="Get a plain English explanation of your SQL query"
        />

        <FeatureCard
          icon={<Gauge size={18} />}
          title="Optimize"
          description="Find performance issues and get optimization suggestions"
        />

        <FeatureCard
          icon={<ArrowLeftRight size={18} />}
          title="Convert"
          description="Convert to SQLAlchemy, LINQ, Hibernate and more"
        />

        <FeatureCard
          icon={<BarChart3 size={18} />}
          title="Visualize"
          description="See query flow and structure in a visual diagram"
        />
      </div>

    </MainLayout>
  );
};

export default Dashboard;