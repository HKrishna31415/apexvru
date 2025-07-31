import React from 'react';

const ClimateSolution: React.FC = () => {
  return (
    <div className="animate-fade-in bg-black text-white min-h-screen">
      <section className="py-20 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How APEX Energy is Turning a Climate Problem into a Market Solution
          </h1>
          <p className="mt-4 text-lg text-brand-gray-300">
            <span className="font-semibold">Bloomberg Green</span> &bull; October 10, 2024
          </p>
          <div className="mt-10 text-lg space-y-6 text-brand-gray-200 leading-relaxed">
            <p>
              In a world grappling with the urgent realities of climate change, innovative solutions are not just desirable—they are essential. APEX Energy stands at the forefront of this movement, transforming what was once considered an intractable environmental challenge into a viable economic opportunity. Their groundbreaking approach to vapor recovery is not only mitigating harmful emissions but also creating significant value for industries worldwide.
            </p>
            <p>
              Traditional methods of managing industrial emissions, particularly volatile organic compounds (VOCs) and methane, have often been costly and inefficient. These gases, byproducts of various industrial processes, contribute significantly to air pollution and climate change. APEX Energy has developed a proprietary technology that captures these vapors with unprecedented efficiency, preventing their release into the atmosphere.
            </p>
            <p>
              What sets APEX apart is their dual focus: environmental stewardship and economic benefit. By capturing these valuable hydrocarbons, APEX enables companies to recover and reuse resources that would otherwise be lost. This not only reduces operational costs but also creates new revenue streams, making environmental responsibility a profitable endeavor. This market-driven solution incentivizes industries to adopt cleaner practices, accelerating the transition to a more sustainable economy.
            </p>
            <p>
              The company's success is built on a foundation of cutting-edge engineering and a deep understanding of industrial processes. Their systems are designed for seamless integration into existing infrastructure, minimizing disruption and maximizing impact. Early adopters have reported significant reductions in emissions and substantial returns on investment, proving the efficacy and economic viability of APEX Energy's technology.
            </p>
            <p>
              As global regulations tighten and corporate sustainability goals become more ambitious, the demand for APEX Energy's solutions is set to skyrocket. They are not just selling a product; they are offering a pathway to a cleaner, more prosperous future, demonstrating that environmental protection and economic growth can, and must, go hand in hand.
            </p>
          </div>
          <div className="mt-12">
            <a href="/ir" className="inline-flex items-center text-brand-blue-400 hover:text-brand-blue-300 transition-colors duration-200">
              &larr; Back to Investor Relations
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClimateSolution;