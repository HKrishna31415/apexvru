export const SECTIONS = {
    introduction: {
      title: "What is Vapor Recovery?",
      content: "Vapor recovery is the process of capturing and recovering volatile organic compounds (VOCs) and other harmful vapors that are released during the transfer and storage of petroleum products and other chemicals. Instead of allowing these vapors to escape into the atmosphere, specialized units capture, process, and often convert them back into a usable liquid form."
    },
    science: {
      title: "The Science Behind It",
      content: "Vapor recovery technologies rely on fundamental principles of physical chemistry to separate and capture VOCs from an air stream. The most common methods include:",
      methods: [
        { name: "Adsorption", description: "Vapors pass through a bed of activated carbon, which has a porous structure that adsorbs hydrocarbon molecules onto its surface." },
        { name: "Absorption", description: "Vapors are bubbled through a liquid (like gasoline itself) that absorbs the similar hydrocarbon molecules." },
        { name: "Condensation", description: "The vapor stream is cooled to very low temperatures, causing the vapors to condense back into a liquid state." },
        { name: "Membrane Separation", description: "A special polymer membrane allows air to pass through while blocking larger hydrocarbon molecules, effectively separating them." }
      ]
    },
    components: {
      title: "Key Components of a Modern VRU",
      content: "A modern Vapor Recovery Unit (VRU) often uses a multi-stage process involving membrane separation and condensation. Here are the key components illustrated in the diagram:",
      items: [
        { name: "Vapor Inlet", description: "Collects the vapor-laden air (a mix of VOCs and air) from a source like a storage tank." },
        { name: "Membrane Separator", description: "Uses a specialized polymer membrane that is permeable to air but not to larger hydrocarbon molecules. This separates the incoming stream." },
        { name: "Permeate Stream (Clean Air Vent)", description: "The clean air (permeate) that passes through the membrane is safely vented into the atmosphere." },
        { name: "Retentate Stream (Concentrated Vapors)", description: "The concentrated VOC vapors (retentate) that do not pass through the membrane are directed to the next stage." },
        { name: "Condenser Unit", description: "This unit cools the concentrated vapor stream, often using refrigeration or compression, causing the VOCs to condense back into a liquid form." },
        { name: "Condensate Stream (Liquid Return)", description: "The recovered liquid (condensate) is piped back to a storage tank, effectively recycling the product." }
      ]
    },
    applications: {
      title: "Where is it Used?",
      content: "Vapor recovery is essential in many industries to comply with environmental regulations and improve efficiency. Common applications include:",
      examples: ["Gasoline Dispensing Stations", "Petroleum Refineries", "Chemical Processing Plants", "Marine Loading Docks", "Bulk Fuel Terminals", "Crude Oil Storage Tanks"]
    },
    benefits: {
      title: "Environmental & Economic Benefits",
      content: "Implementing vapor recovery systems offers significant advantages for both the planet and the business's bottom line.",
      environmental: [
        "Reduces smog-forming VOCs and air pollution.",
        "Minimizes emissions of hazardous air pollutants (HAPs) like benzene.",
        "Helps combat climate change by capturing greenhouse gases.",
      ],
      economic: [
        "Recovers valuable product that would otherwise be lost to evaporation.",
        "Ensures compliance with environmental regulations, avoiding costly fines.",
        "Improves workplace safety by reducing flammable vapor concentrations."
      ]
    }
  };
  
  export const FAQ_DATA = [
    {
      id: 1,
      question: "How does temperature affect the efficiency of vapor recovery?",
      answer: "Temperature plays a crucial role. Higher temperatures increase the volatility of hydrocarbons, meaning more vapors are generated. However, for condensation-based systems, lower temperatures are needed to effectively turn the vapor back into liquid. For adsorption systems, lower temperatures can improve the carbon's ability to capture vapors, but regeneration might require higher temperatures. It's a balancing act optimized for the specific technology and application."
    },
    {
      id: 2,
      question: "What is the difference between a passive and an active vapor recovery system?",
      answer: "A <strong>passive system</strong> uses the pressure created during fuel transfer to push vapors through the recovery process, often seen in Stage II systems at gas stations where vapors from the vehicle's tank are pushed back into the underground storage tank. An <strong>active system</strong> uses pumps or compressors to actively pull vapors into the unit for processing. Active systems are more powerful and are typically used in larger industrial applications like bulk terminals and refineries."
    },
    {
      id: 3,
      question: "Explain the role of activated carbon in the adsorption process.",
      answer: "Activated carbon is the key material in adsorption systems. It is treated to have an incredibly porous structure, creating a massive internal surface area. When the vapor stream passes over this carbon bed, hydrocarbon molecules (VOCs) get trapped on the surface through a process called adsorption, sticking to it like magnets. The clean air, being composed of smaller molecules, passes through. Later, the carbon bed is 'regenerated' (usually with vacuum or heat) to release the captured hydrocarbons, which are then recovered."
    },
    {
      id: 4,
      question: "Are there any byproducts or waste from the vapor recovery process?",
      answer: "Ideally, a well-functioning vapor recovery system has minimal waste. The primary goal is to convert vapors back into the original, usable liquid product. In adsorption systems, the activated carbon beds have a finite lifespan and eventually need to be replaced and disposed of. In some absorption processes, the absorption liquid might degrade over time. However, compared to releasing raw vapors, the process is significantly cleaner and primarily focused on recycling, not waste generation."
    },
    {
      id: 5,
      question: "How has vapor recovery technology evolved over the last 20 years?",
      answer: "Technology has advanced significantly. Modern systems are more efficient, achieving recovery rates above 99%. Key evolutions include: <br />- <strong>Improved Adsorbents:</strong> Development of more effective and durable activated carbon and other adsorbent materials.<br />- <strong>Automation & Control:</strong> Sophisticated PLC (Programmable Logic Controller) systems now monitor pressure, temperature, and flow rates in real-time to optimize efficiency and safety.<br />- <strong>Hybrid Systems:</strong> Combining methods, like condensation followed by adsorption, to handle a wider range of vapor compositions.<br />- <strong>Membrane Technology:</strong> The use of advanced polymer membranes for separation has become more common and cost-effective for certain applications."
    }
  ];