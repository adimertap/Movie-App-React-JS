import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function subscriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard 
                    name="Basic"
                    price={299000}
                    durationInMonth={3}
                    features={
                        ["Feature 1", "Feature 2", "Feature 3"]
                    }></SubscriptionCard>

                    {/* For Greatest */}
                    <SubscriptionCard 
                    isPremium={true}
                    name="Premium"
                    price={699000}
                    durationInMonth={6}
                    features={
                    ["Premium 1", "Premium 2", "Premium 3"]}
                    ></SubscriptionCard>
                    
                </div>
            </div>
        </Authenticated>
    )
};