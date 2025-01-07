import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { grid, gradient, roadmap1, roadmap2, roadmap3, roadmap4, roadmap5, roadmap6 } from "../assets";

const roadmap = [
    {
        id: "0",
        title: "Autonomous AI-Driven Digital Twin & Asset Intelligence Platform",
        description: "Real-time asset tracking & AI-driven predictive maintenance platform for industrial assets.",
        usp: "Autonomous, predictive insights for optimal asset management.",
        coreFeatures: "Real-time tracking, predictive maintenance, digital twins.",
        roi: "Up to 30% reduction in maintenance costs and 20% increase in asset lifespan.",
        imageUrl: roadmap1,
        colorful: true,
    },
    {
        id: "1",
        title: "AI-Powered Smart Warehouse & Supply Chain Management System",
        description: "An AI-driven system for optimizing inventory and supply chain processes.",
        usp: "End-to-end visibility and automation of supply chains.",
        coreFeatures: "AI inventory management, IoT tracking, quality checks.",
        roi: "Up to 40% reduction in inventory holding costs and 25% improvement in order accuracy.",
        imageUrl: roadmap2,
        colorful: true,
    },
    {
        id: "2",
        title: "AI-Enhanced Smart Office & Asset Management Platform",
        description: "All-in-one smart office solution integrating AI, IoT, and asset management.",
        usp: "Affordable, integrated office automation for SMEs.",
        coreFeatures: "Real-time asset tracking, energy optimization, document analysis.",
        roi: "Up to 30% reduction in energy costs and 20% increase in office productivity.",
        imageUrl: roadmap3,
        colorful: true,
    },
    {
        id: "3",
        title: "AI-Powered Home Wellness & Safety System",
        description: "A comprehensive smart home solution for wellness, safety, and automation.",
        usp: "Combines home automation, health monitoring, and security.",
        coreFeatures: "Home monitoring, safety alerts, AI health insights.",
        roi: "Up to 25% reduction in home energy costs and improved safety & wellness.",
        imageUrl: roadmap4,
        colorful: true,
    },
    {
        id: "4",
        title: "Personal Mental Wellness Companion",
        description: "A wearable AI-driven device for personalized mental wellness.",
        usp: "Affordable, real-time mental health insights with AI/ML.",
        coreFeatures: "Mood tracking, stress relief, AI-driven insights.",
        roi: "Potential to reduce stress-related healthcare costs by up to 30%.",
        imageUrl: roadmap5,
        colorful: true,
    },
    {
        id: "5",
        title: "Smart Fleet & Logistics Management System",
        description: "A smart logistics platform offering real-time fleet tracking and optimization.",
        usp: "Efficient fleet management with AI and IoT integration.",
        coreFeatures: "Real-time fleet tracking, predictive analytics, document management.",
        roi: "Up to 35% reduction in fuel costs and 20% improvement in fleet utilization.",
        imageUrl: roadmap6,
        colorful: true,
    }
];

const Roadmap = () => (
    <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
            <Heading tag="Ready to get started" title="What were working on" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`} key={item.id}>
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img className="w-full" src={grid} width={550} height={550} alt="" />
                                </div>
                                <div className="relative z-1">
                                    <div className="mb-6 -my-14 -mx-15">
                                        <img className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                                    </div>
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <ul>
                                        <li className="">Description<p className="body-2 text-n-4">{item.description}</p></li>
                                        <li className="mt-4">USP<p className="body-2 text-n-4">{item.usp}</p></li>
                                        <li className="mt-4">Core Features<p className="body-2 text-n-4">{item.coreFeatures}</p></li>
                                        <li className="mt-4">ROI<p className="body-2 text-n-4">{item.roi}</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Link to="/exploreMore">
                    <Button>Explore More</Button>
                </Link>
            </div>
        </div>
    </Section>
);

export default Roadmap;
