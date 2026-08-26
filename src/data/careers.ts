export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications?: string[];
  skills?: string[];
  salary?: string;
  status: "open" | "closed";
  postedDate: string;
}

export const jobOpenings: JobOpening[] = [
  // 1. TECHNOLOGY & SOFTWARE (4 roles: 2 Open, 2 Closed)
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    department: "Technology & Software",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Build interactive engineering dashboards, spatial rendering interfaces, and B2B client tools.",
    description: "Vayu Galaxy is seeking a Full Stack Developer to lead the engineering of our public web applications, interactive design monograph portals, and internal project dashboards. You will build highly responsive, graphics-rich interfaces that display telemetry data, flight simulation parameters, and urban planning blueprints.",
    responsibilities: [
      "Develop and optimize B2B user interfaces for Vayu Galaxy interactive showcases using Next.js and React.",
      "Build high-performance REST APIs and real-time WebSocket pipelines in Node.js.",
      "Integrate WebGL/Three.js assets to display complex high-altitude concepts.",
      "Collaborate with aerospace and mechatronics teams to render live telemetry charts."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or related technical field.",
      "Strong proficiency in TypeScript, React, Next.js, and Node.js.",
      "Experience styling clean interfaces using modern Tailwind CSS frameworks.",
      "Familiarity with state management libraries and responsive database synchronization."
    ],
    preferredQualifications: [
      "Experience with Three.js, React Three Fiber, or shaders (GLSL).",
      "Familiarity with containerized deployments (Docker) and AWS serverless architecture."
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "REST APIs", "Git"],
    status: "open",
    postedDate: "2026-08-10"
  },
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "Technology & Software",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Develop custom models for drone navigation, obstacle classification, and sensor-fusion analysis.",
    description: "We are looking for an AI/ML Engineer to design, train, and deploy computational intelligence models for autonomous flight systems and rolling robotics. You will work on real-time classification, pathfinding optimization, and telemetry anomaly detection.",
    responsibilities: [
      "Develop deep learning models for autonomous navigation, path planning, and spatial classification.",
      "Optimize reinforcement learning agents in virtual physics simulators.",
      "Fine-tune lightweight object-detection networks to run on resource-constrained embedded systems.",
      "Partner with sensor-fusion teams to process raw LiDAR and thermal camera inputs."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Robotics, or Data Science.",
      "Strong proficiency in Python, PyTorch, or TensorFlow.",
      "Solid understanding of neural networks, computer vision, and machine learning mathematics.",
      "Familiarity with Linux environments and git-based workflows."
    ],
    preferredQualifications: [
      "Experience deploying models using ONNX or TensorRT on embedded hardware.",
      "Familiarity with reinforcement learning tools like Stable Baselines."
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Linux", "ROS", "Git"],
    status: "open",
    postedDate: "2026-08-15"
  },
  {
    slug: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    department: "Technology & Software",
    location: "New Delhi, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Develop real-time object detection and visual positioning models for Devi Drone payloads.",
    description: "Vayu Galaxy is hiring a Computer Vision Engineer to implement camera-based positioning systems, landing target identification, and environmental mapping. Your code will run on the Devi Drone payload computers to enable autonomous visual flight.",
    responsibilities: [
      "Implement real-time visual inertial odometry (VIO) and optical flow algorithms.",
      "Train convolutional networks for automated detection of specific landing markings.",
      "Optimize image preprocessing pipelines for low-latency video feeds.",
      "Coordinate with simulation engineers to evaluate vision models under simulated weather conditions."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Electrical Engineering, or related field.",
      "Proficiency in Python, C++, and OpenCV.",
      "Familiarity with image processing algorithms and spatial geometry.",
      "Strong debugging skills in Linux-based embedded platforms."
    ],
    preferredQualifications: [
      "Experience with NVIDIA Jetson boards and hardware acceleration.",
      "Familiarity with PX4 flight control visual alignment protocols."
    ],
    skills: ["C++", "Python", "OpenCV", "CUDA", "Linux", "Jetson", "Git"],
    status: "closed",
    postedDate: "2026-07-20"
  },
  {
    slug: "software-engineering-intern",
    title: "Software Engineering Intern",
    department: "Technology & Software",
    location: "Delhi NCR, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Assist in building internal data plotting tools, telemetry parsers, and site updates.",
    description: "We are seeking a Software Engineering Intern to join our digital systems division. You will gain hands-on experience building web interfaces, scripting data parsers, and testing API integrations for conceptual technology showcases.",
    responsibilities: [
      "Write clean, component-based code using Next.js, React, and TypeScript.",
      "Develop scripts to parse flight-control logs and output clean JSON datasets.",
      "Assist in writing unit and integration tests for form submission routers.",
      "Update visual assets and copy across the Vayu Galaxy public platforms."
    ],
    requirements: [
      "Current student or recent graduate in Computer Science or engineering discipline.",
      "Familiarity with HTML, CSS, JavaScript, and React.",
      "Basic understanding of Git version control.",
      "Eagerness to learn new web technologies and frontend frameworks."
    ],
    preferredQualifications: [
      "Personal projects built with Next.js or Tailwind CSS.",
      "Familiarity with Node.js scripting."
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "TypeScript", "Git"],
    status: "closed",
    postedDate: "2026-07-25"
  },

  // 2. ROBOTICS & AUTONOMOUS SYSTEMS (4 roles: 2 Open, 2 Closed)
  {
    slug: "robotics-engineer",
    title: "Robotics Engineer",
    department: "Robotics & Autonomous Systems",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "2-4 years",
    shortDescription: "Design kinetic mechanisms, wheel suspensions, and chassis frames for the Proto Rolling Robot.",
    description: "Vayu Galaxy is looking for a Robotics Engineer to design mechatronics and kinematics structures for the Proto Rolling Robot. You will focus on high-velocity stability, suspension physics, and modular payload mechanisms.",
    responsibilities: [
      "Design robotic mechanical assemblies, link linkages, and suspension joints using CAD.",
      "Perform vibration, drop, and thermal simulations on robotic chassis prototypes.",
      "Select and integrate servo motors, high-torque actuators, and encoder feedback loops.",
      "Collaborate with software engineers to optimize mechanical response parameters."
    ],
    requirements: [
      "Bachelor's degree in Robotics, Mechanical, or Mechatronics Engineering.",
      "Solid proficiency in SolidWorks, Autodesk Fusion, or similar CAD software.",
      "Hands-on experience building physical robotic assemblies.",
      "Strong understanding of dynamic physics and kinematics calculations."
    ],
    preferredQualifications: [
      "Experience with carbon-fiber or lightweight metal manufacturing.",
      "Familiarity with high-velocity rolling robotic systems."
    ],
    skills: ["CAD", "SolidWorks", "Actuators", "Kinematics", "FEA", "Prototyping"],
    status: "open",
    postedDate: "2026-08-12"
  },
  {
    slug: "robotics-software-engineer",
    title: "Robotics Software Engineer",
    department: "Robotics & Autonomous Systems",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Develop custom navigation models, SLAM nodes, and motion controllers in ROS/ROS2.",
    description: "We are seeking a Robotics Software Engineer to develop autonomous navigation software for the Proto Rolling Robot. You will design, simulate, and deploy SLAM, local path planners, and motion control models.",
    responsibilities: [
      "Implement and test LiDAR/camera-based SLAM systems in indoor and outdoor environments.",
      "Write custom ROS2 nodes in C++ and Python for motion coordination and kinematics.",
      "Optimize real-time trajectory planners to ensure safe velocity adjustments at high speeds.",
      "Interface low-level motor controllers with high-level navigation decisions."
    ],
    requirements: [
      "Bachelor's degree in Robotics, Computer Science, or Electrical Engineering.",
      "Strong programming experience in C++ and Python within Linux environments.",
      "Hands-on experience with ROS/ROS2 and Navigation2 stacks.",
      "Familiarity with kinematics equations and trajectory planning logic."
    ],
    preferredQualifications: [
      "Experience with Gazebo or Webots simulator environments.",
      "Familiarity with Kalman filtering and IMU data integration."
    ],
    skills: ["ROS2", "C++", "Python", "SLAM", "Navigation2", "Linux", "Git"],
    status: "open",
    postedDate: "2026-08-18"
  },
  {
    slug: "autonomous-systems-engineer",
    title: "Autonomous Systems Engineer",
    department: "Robotics & Autonomous Systems",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Coordinate system-wide autonomous safety logic, fail-safes, and telemetry systems.",
    description: "Vayu Galaxy is hiring an Autonomous Systems Engineer to define system-wide integration architectures, sensor pipelines, and fail-safe safety protocols. You will ensure consistent autonomy logic across our UAV and rolling robotics platforms.",
    responsibilities: [
      "Define system integration requirements for autonomous sensor arrays.",
      "Design safety recovery state machines to handle signal loss, hardware failures, or obstacles.",
      "Validate autonomous system behaviors in software-in-the-loop (SITL) simulators.",
      "Analyze multi-system coordination logic for swarm operations."
    ],
    requirements: [
      "Bachelor's degree in Systems Engineering, Aerospace, or Robotics.",
      "Solid understanding of systems engineering principles and safety-critical designs.",
      "Familiarity with PX4, ArduPilot, or ROS frameworks.",
      "Excellent technical documentation and coordination skills."
    ],
    preferredQualifications: [
      "Experience drafting corporate systems monographs or engineering specifications.",
      "Familiarity with simulation platforms."
    ],
    skills: ["Systems Engineering", "SITL", "Fail-safe", "PX4", "Telemetry", "ROS"],
    status: "closed",
    postedDate: "2026-07-15"
  },
  {
    slug: "robotics-engineering-intern",
    title: "Robotics Engineering Intern",
    department: "Robotics & Autonomous Systems",
    location: "New Delhi, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Support mechanical assembly, wiring testing, and ROS node logging under senior engineers.",
    description: "We are seeking a Robotics Engineering Intern to assist in the physical assembly, circuit wiring, and software testing of Proto prototype robots. You will work closely with mechatronics and software leads.",
    responsibilities: [
      "Assist in physical structural assembly and soldering of robot electrical harnesses.",
      "Run basic hardware calibration procedures under structural test vectors.",
      "Record telemetry logs during prototype rolling tests and flag unexpected warnings.",
      "Maintain the lab workspace, inventory lists, and prototype tools."
    ],
    requirements: [
      "Current student or recent graduate in Robotics, Mechatronics, or Electrical Engineering.",
      "Basic understanding of electronic circuits, microcontrollers, and wiring.",
      "Familiarity with Python or basic C/C++.",
      "Eagerness to work with physical hardware and laboratory tools."
    ],
    preferredQualifications: [
      "Academic projects building small mobile robots or Arduino systems.",
      "Familiarity with Linux terminal commands."
    ],
    skills: ["Arduino", "Soldering", "Circuit Design", "Python", "Linux"],
    status: "closed",
    postedDate: "2026-07-28"
  },

  // 3. UAV & AEROSPACE (4 roles: 2 Open, 2 Closed)
  {
    slug: "uav-systems-engineer",
    title: "UAV Systems Engineer",
    department: "UAV & Aerospace",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Lead system design, component selection, and structural payload integration for Devi Drone.",
    description: "Vayu Galaxy is seeking a UAV Systems Engineer to drive the end-to-end structural architecture of the Devi Drone UAV. You will lead component selection, weight budget analysis, and payload integration for emergency and defense missions.",
    responsibilities: [
      "Design systems layout and power distribution frameworks for modular UAV platforms.",
      "Calculate weight budgets, center of gravity (CG), and thrust-to-weight ratios.",
      "Coordinate mechanical, electrical, and software interfaces on the drone.",
      "Oversee physical flight test programs and document system performance reports."
    ],
    requirements: [
      "Bachelor's degree in Aerospace, Aeronautical, or Systems Engineering.",
      "Experience designing multirotor or fixed-wing UAV platforms.",
      "Familiarity with PX4/ArduPilot autopilots and hardware configurations.",
      "Strong analytical skills regarding thermal, mechanical, and power budgets."
    ],
    preferredQualifications: [
      "Experience with carbon-fiber aerospace structural designs.",
      "Familiarity with Indian DGCA drone regulations and certification rules."
    ],
    skills: ["UAV Design", "PX4", "Aerospace Systems", "Weight Budgeting", "Testing"],
    status: "open",
    postedDate: "2026-08-20"
  },
  {
    slug: "flight-control-engineer",
    title: "Flight Control Engineer",
    department: "UAV & Aerospace",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Design autopilot control loops, stabilization parameters, and hardware-in-the-loop tests.",
    description: "We are looking for a Flight Control Engineer to develop control loops, dynamic models, and stabilization logic for our high-altitude drones and atmospheric designs. You will optimize flight handling under challenging atmospheric conditions.",
    responsibilities: [
      "Develop mathematical flight dynamics models and simulations in MATLAB/Simulink.",
      "Tune PID and model predictive control (MPC) loops for multirotor drone platforms.",
      "Implement and test flight control logic in PX4/ArduPilot custom firmware.",
      "Execute hardware-in-the-loop (HITL) simulations to validate control parameters."
    ],
    requirements: [
      "Bachelor's degree in Aerospace, Control Systems, or Robotics Engineering.",
      "Strong background in control theory (classical and modern control system loops).",
      "Proficiency in MATLAB/Simulink and C++ code customization.",
      "Experience with flight simulators and software-in-the-loop testing."
    ],
    preferredQualifications: [
      "Experience tuning flight controllers for large heavy-lift drone platforms.",
      "Familiarity with high-altitude aerodynamic models."
    ],
    skills: ["Control Systems", "MATLAB", "Simulink", "PX4 Firmware", "C++", "HITL"],
    status: "open",
    postedDate: "2026-08-22"
  },
  {
    slug: "aerospace-engineer",
    title: "Aerospace Engineer",
    department: "UAV & Aerospace",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "5+ years",
    shortDescription: "Model high-altitude aerodynamics, wind resistance, and structural balloon stabilization.",
    description: "Vayu Galaxy is hiring a senior Aerospace Engineer to lead the conceptual aerodynamic calculations for the Atmospheric Township and solar shielding designs. You will model boundary layer dynamics, wind shear stability, and structural loads.",
    responsibilities: [
      "Perform CFD (Computational Fluid Dynamics) simulations on high-altitude conceptual models.",
      "Calculate aerodynamic lift, drag, and stability metrics for suspended platforms.",
      "Evaluate high-altitude wind resistance structures using computational parameters.",
      "Advise mechanical teams on aerodynamic surface optimization and weight limitations."
    ],
    requirements: [
      "Bachelor's or Master's degree in Aerospace or Aeronautical Engineering.",
      "Proficiency in CFD software (ANSYS Fluent, Star-CCM+, or OpenFOAM).",
      "Solid understanding of fluid mechanics, structural dynamics, and atmospheric physics.",
      "Strong conceptual design capability for experimental structures."
    ],
    preferredQualifications: [
      "PhD in Aerodynamics or related research field.",
      "Experience with high-altitude scientific payloads or balloon systems."
    ],
    skills: ["CFD", "ANSYS Fluent", "Fluid Dynamics", "Aerodynamics", "Structural Dynamics"],
    status: "closed",
    postedDate: "2026-07-10"
  },
  {
    slug: "uav-engineering-intern",
    title: "UAV Engineering Intern",
    department: "UAV & Aerospace",
    location: "Delhi NCR, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Assist in preparing drone components, flight testing logistics, and logging telemetry data.",
    description: "We are seeking a UAV Engineering Intern to support our flight test and assembly team. You will gain hands-on experience checking components, preparing drone structures for test flights, and reviewing telemetry logs.",
    responsibilities: [
      "Assist in the structural integration and battery charging of test UAVs.",
      "Set up telemetry ground stations and log parameters during field flights.",
      "Help assemble carbon-fiber frames, propellers, and motor mounts.",
      "Participate in documenting post-flight structural inspections."
    ],
    requirements: [
      "Current student in Aerospace, Aeronautical, or Mechanical Engineering.",
      "Basic understanding of drone mechanics, RC transmitters, and batteries.",
      "Familiarity with Mission Planner or QGroundControl softwares.",
      "Strong interest in hands-on field testing."
    ],
    preferredQualifications: [
      "Experience building custom RC planes or multirotors.",
      "Basic soldering skills."
    ],
    skills: ["QGroundControl", "Telemetry", "Multirotor Assembly", "Soldering"],
    status: "closed",
    postedDate: "2026-07-29"
  },

  // 4. MECHANICAL & PRODUCT ENGINEERING (3 roles: 2 Open, 1 Closed)
  {
    slug: "mechanical-design-engineer",
    title: "Mechanical Design Engineer",
    department: "Mechanical & Product Engineering",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "2-4 years",
    shortDescription: "Create detailed 3D CAD models, structural drawings, and material specifications for assemblies.",
    description: "We are seeking a Mechanical Design Engineer to create structural blueprints, dynamic linkages, and enclosure designs for rolling robots and drone airframes. You will focus on weight minimization, structural rigidity, and IP-rated enclosures.",
    responsibilities: [
      "Create detailed 3D part models and engineering assembly drawings using CAD software.",
      "Perform FEA stress analysis on load-bearing brackets and rotational joints.",
      "Select advanced materials (carbon fiber, anodized aluminum, polymers) matching stress limits.",
      "Collaborate with manufacturing partners to prototype custom mechanical joints."
    ],
    requirements: [
      "Bachelor's degree in Mechanical or Product Design Engineering.",
      "Proficiency in SolidWorks, PTC Creo, or Autodesk Fusion 360.",
      "Solid understanding of GD&T, tolerance stack-up analysis, and material selection.",
      "Experience designing injection-molded, machined, or sheet-metal components."
    ],
    preferredQualifications: [
      "Experience with carbon-fiber molding techniques.",
      "Familiarity with IP67 waterproofing design methodologies."
    ],
    skills: ["SolidWorks", "CAD", "FEA", "GD&T", "Materials Selection", "Prototyping"],
    status: "open",
    postedDate: "2026-08-11"
  },
  {
    slug: "mechatronics-engineer",
    title: "Mechatronics Engineer",
    department: "Mechanical & Product Engineering",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Integrate electromechanical drives, robotic actuators, and sensor brackets.",
    description: "Vayu Galaxy is hiring a Mechatronics Engineer to bridge the gap between structural mechanics and embedded electronics. You will design, test, and integrate motor drives, precision actuators, and sensor mounts for our autonomous systems.",
    responsibilities: [
      "Design electromechanical systems incorporating actuators, sensors, and microcontrollers.",
      "Develop and test wire harnesses, connector schemes, and power distribution systems.",
      "Configure and tune motor speed/torque parameters on brushless ESCs.",
      "Test electromechanical components under thermal and vibration stresses."
    ],
    requirements: [
      "Bachelor's degree in Mechatronics, Robotics, or Electrical-Mechanical Engineering.",
      "Hands-on experience with brushless DC motors, servos, and motor drivers.",
      "Familiarity with basic PCB routing and schematic validation.",
      "Strong debugging skills using oscilloscopes, multimeters, and logic analyzers."
    ],
    preferredQualifications: [
      "Experience designing custom mechatronics brackets for UAV payloads.",
      "Basic programming skills in C/C++ for firmware tests."
    ],
    skills: ["Mechatronics", "BLDC Motors", "ESC Tuning", "Circuit Testing", "CAD", "PCB Layout"],
    status: "open",
    postedDate: "2026-08-16"
  },
  {
    slug: "product-prototyping-engineer",
    title: "Product Prototyping Engineer",
    department: "Mechanical & Product Engineering",
    location: "New Delhi, India",
    employmentType: "Full-time",
    experience: "2-4 years",
    shortDescription: "Lead the rapid prototyping lab, 3D printing tasks, CNC milling, and hardware mockups.",
    description: "We are seeking a Product Prototyping Engineer to run our rapid prototyping laboratory. You will translate CAD models into physical proof-of-concept models using 3D printing, laser cutting, CNC routing, and manual workshop tools.",
    responsibilities: [
      "Operate and maintain rapid prototyping machinery (FDM/SLA 3D printers, CNC mills).",
      "Fabricate structural enclosures and test fixtures using workshop machinery.",
      "Execute vacuum forming and carbon-fiber layup procedures for structural testing.",
      "Maintain laboratory safety standards, material inventories, and machine calibrations."
    ],
    requirements: [
      "Diploma or Bachelor's degree in Mechanical Engineering, Industrial Design, or related.",
      "Strong hands-on experience in a workshop, fab-lab, or prototyping shop.",
      "Proficiency with 3D printer slicers and basic CAM setups for CNC milling.",
      "Excellent manual fabrication skills and mechanical intuition."
    ],
    preferredQualifications: [
      "Experience with carbon-fiber layup and composites.",
      "Familiarity with sheet metal forming techniques."
    ],
    skills: ["3D Printing", "CNC Milling", "CAM", "Workshop Tools", "Composites", "Rapid Prototyping"],
    status: "closed",
    postedDate: "2026-07-22"
  },

  // 5. RESEARCH & INNOVATION (3 roles: 2 Open, 1 Closed)
  {
    slug: "research-engineer",
    title: "Research Engineer",
    department: "Research & Innovation",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Conduct feasibility studies on solar deflection shields, high-altitude materials, and energy concepts.",
    description: "Vayu Galaxy is seeking a Research Engineer to investigate next-generation technologies. You will perform literature reviews, computational modeling, and feasibility studies on high-altitude materials, energy harvest concepts, and climate technology models like the SPD T1.",
    responsibilities: [
      "Conduct technical feasibility studies and literature reviews on emerging technologies.",
      "Perform numerical simulations for solar radiation deflection and thermal transfer.",
      "Evaluate material properties under extreme high-altitude atmospheric conditions.",
      "Draft comprehensive research monographs and conceptual specifications."
    ],
    requirements: [
      "Master's or Bachelor's degree in Applied Physics, Materials Science, or Engineering.",
      "Strong mathematical modeling and computational analysis skills.",
      "Experience using Python, MATLAB, or physics solvers for data analysis.",
      "Excellent technical writing and documentation skills."
    ],
    preferredQualifications: [
      "PhD in physics, material sciences, or related engineering fields.",
      "Familiarity with solar radiation models or atmospheric dynamics."
    ],
    skills: ["Physics Modeling", "Data Analysis", "Python", "MATLAB", "Technical Writing", "Feasibility Studies"],
    status: "open",
    postedDate: "2026-08-14"
  },
  {
    slug: "simulation-computational-engineer",
    title: "Simulation & Computational Engineer",
    department: "Research & Innovation",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Build multi-physics models, structural simulations, and thermal profiles for extreme systems.",
    description: "We are looking for a Simulation & Computational Engineer to develop multi-physics models of our conceptual high-altitude urban townships and atmospheric shielding systems. You will optimize structural geometry and thermal management under simulated winds.",
    responsibilities: [
      "Build dynamic FEA, CFD, and thermal simulation models for high-altitude systems.",
      "Optimize structural weight and drag coefficients using computational solvers.",
      "Post-process simulation results and present structural limits data to design teams.",
      "Write automated scripts to streamline multi-run simulation workflows."
    ],
    requirements: [
      "Bachelor's or Master's degree in Mechanical, Aerospace, or Computational Engineering.",
      "Expertise in ANSYS, COMSOL Multi-physics, or OpenFOAM.",
      "Solid understanding of numerical methods, finite element analysis, and fluid dynamics.",
      "Programming skills in Python or C++ for custom simulation setups."
    ],
    preferredQualifications: [
      "Experience simulating high-altitude structural wind shear profiles.",
      "Familiarity with optimization algorithms."
    ],
    skills: ["COMSOL", "ANSYS", "OpenFOAM", "CFD", "Python", "Finite Element Analysis"],
    status: "open",
    postedDate: "2026-08-19"
  },
  {
    slug: "rand-intern",
    title: "R&D Intern",
    department: "Research & Innovation",
    location: "Delhi NCR, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Assist research teams with data gathering, literature indexing, and drafting specifications.",
    description: "We are seeking an R&D Intern to support our conceptual research division. You will assist in compiling scientific publications, preparing presentation slides, and running basic numerical models for our atmospheric engineering studies.",
    responsibilities: [
      "Conduct literature searches and index scientific papers on high-altitude materials.",
      "Organize and clean simulation datasets, formatting output variables into CSV/JSON structures.",
      "Help draft research sections and bibliography logs for engineering monographs.",
      "Prepare visualization plots and slide decks for internal project updates."
    ],
    requirements: [
      "Current student in Physics, Aerospace, or Mechanical Engineering.",
      "Basic programming skills in Python (NumPy, Pandas, Matplotlib).",
      "Excellent online research and organizational skills.",
      "Proficiency with Markdown, LaTeX, or document processing tools."
    ],
    preferredQualifications: [
      "Experience with LaTeX document structures.",
      "Familiarity with basic data plotting libraries."
    ],
    skills: ["Data Plotting", "Python", "LaTeX", "Online Research", "Documentation"],
    status: "closed",
    postedDate: "2026-07-26"
  },

  // 6. ARCHITECTURE & FUTURE LIVING (3 roles: 2 Open, 1 Closed)
  {
    slug: "architectural-designer",
    title: "Architectural Designer",
    department: "Architecture & Future Living",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Design conceptual high-altitude layouts, modular habitation pods, and spatial plans.",
    description: "Vayu Galaxy is seeking an Architectural Designer to lead the spatial and aesthetic planning of our conceptual Atmospheric Township. You will draft modular living layouts, sky lobbies, structural support nodes, and environmental circulation paths.",
    responsibilities: [
      "Draft conceptual layouts and spatial designs for modular high-altitude pods.",
      "Coordinate structural designs with aerospace and mechatronics parameters.",
      "Prepare architectural diagrams, layout floorplans, and spatial sections.",
      "Produce high-fidelity architectural rendering packages for publication."
    ],
    requirements: [
      "Bachelor's or Master's degree in Architecture (B.Arch / M.Arch).",
      "Proficiency in Rhino, AutoCAD, and rendering tools (V-Ray, Lumion, or Enscape).",
      "Strong portfolio demonstrating advanced spatial designs and conceptual projects.",
      "Understanding of structural mechanics, human ergonomics, and circulation design."
    ],
    preferredQualifications: [
      "Experience with modular or prefab housing designs.",
      "Familiarity with environmental sustainable architectural systems."
    ],
    skills: ["Rhino", "AutoCAD", "V-Ray", "Conceptual Design", "Rendering", "Space Planning"],
    status: "open",
    postedDate: "2026-08-11"
  },
  {
    slug: "computational-architect",
    title: "Computational Architect",
    department: "Architecture & Future Living",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Develop Grasshopper scripts, parametric models, and envelope optimization structures.",
    description: "We are hiring a Computational Architect to develop parametric scripts and geometric optimization models for our high-altitude structures. You will generate complex space frames, wind-deflecting envelopes, and structural patterns.",
    responsibilities: [
      "Build custom Grasshopper and RhinoCommon scripts for parametric structural generation.",
      "Perform geometric optimization of structural panels to minimize material volume.",
      "Integrate environmental data (wind vectors, solar paths) into generative design algorithms.",
      "Collaborate with computational simulation teams to validate structural stress tolerances."
    ],
    requirements: [
      "Bachelor's or Master's degree in Architecture or Computational Design.",
      "Deep expertise in Rhino, Grasshopper, and parametric modeling workflows.",
      "Programming experience in Python or C# within Rhino/Grasshopper environments.",
      "Solid understanding of complex geometry, topology, and space frames."
    ],
    preferredQualifications: [
      "Experience with structural optimization plugins (Karamba3D, Galapagos).",
      "Familiarity with environmental analysis tools (Ladybug, Honeybee)."
    ],
    skills: ["Rhino", "Grasshopper", "Parametric Modeling", "Python", "Karamba3D", "Computational Design"],
    status: "open",
    postedDate: "2026-08-15"
  },
  {
    slug: "future-habitat-research-intern",
    title: "Future Habitat Research Intern",
    department: "Architecture & Future Living",
    location: "New Delhi, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Support architectural modeling, rendering, and research on space-saving layouts.",
    description: "We are seeking a Future Habitat Research Intern to assist our architectural design team. You will support modeling tasks, prepare renders, and conduct research on space-saving layouts and life support modules.",
    responsibilities: [
      "Support the creation of 3D architectural models in Rhino or AutoCAD.",
      "Configure light and material settings to produce visual renderings.",
      "Conduct database research on micro-housing layouts and autonomous waste systems.",
      "Assist in formatting design dossiers and concept reports."
    ],
    requirements: [
      "Current student in Architecture, Interior Design, or Urban Planning.",
      "Familiarity with Rhino, AutoCAD, and basic rendering software.",
      "Strong aesthetic sensibility and attention to design details.",
      "Ability to compile structured research summaries."
    ],
    preferredQualifications: [
      "Experience with Photoshop or Illustrator post-processing.",
      "Interest in speculative or sci-fi spatial concepts."
    ],
    skills: ["Rhino", "AutoCAD", "Rendering", "Photoshop", "Spatial Research"],
    status: "closed",
    postedDate: "2026-07-23"
  },

  // 7. ELECTRONICS & EMBEDDED SYSTEMS (3 roles: 2 Open, 1 Closed)
  {
    slug: "embedded-systems-engineer",
    title: "Embedded Systems Engineer",
    department: "Electronics & Embedded Systems",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Write firmware in C/C++, configure RTOS systems, and integrate sensor arrays.",
    description: "Vayu Galaxy is seeking an Embedded Systems Engineer to write low-level firmware, configure real-time operating systems (RTOS), and interface sensor arrays for our UAVs and rolling robotics. You will focus on low-latency data processing.",
    responsibilities: [
      "Write clean, optimized firmware in C/C++ for STM32 or ESP32 microcontrollers.",
      "Configure and tune FreeRTOS schedules for task prioritization and timing.",
      "Develop driver routines for I2C, SPI, UART, and CAN communication buses.",
      "Implement low-latency telemetry transmission protocols over radio channels."
    ],
    requirements: [
      "Bachelor's degree in Embedded Systems, Electronics, or Computer Engineering.",
      "Strong programming skills in C and C++ for microcontrollers.",
      "Experience with FreeRTOS or similar real-time operating systems.",
      "Familiarity with debugging tools (JTAG, GDB, logic analyzers)."
    ],
    preferredQualifications: [
      "Experience writing custom drivers for sensors (IMUs, magnetometers).",
      "Familiarity with PX4 firmware development."
    ],
    skills: ["C/C++", "FreeRTOS", "STM32", "CAN bus", "Telemetry", "JTAG"],
    status: "open",
    postedDate: "2026-08-16"
  },
  {
    slug: "electronics-design-engineer",
    title: "Electronics Design Engineer",
    department: "Electronics & Embedded Systems",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Design custom PCBs, schematic routing, and power distribution systems for UAVs.",
    description: "We are looking for an Electronics Design Engineer to design high-reliability printed circuit boards (PCBs), power distribution units, and sensor interface circuits. You will focus on signal integrity and electromagnetic compatibility.",
    responsibilities: [
      "Design schematic diagrams and multi-layer PCB layouts using Altium or KiCad.",
      "Configure power distribution networks for heavy-lift drone ESCs.",
      "Optimize board layouts for signal integrity, EMI/EMC compliance, and thermal dissipation.",
      "Assemble, solder, and test prototype boards in the hardware laboratory."
    ],
    requirements: [
      "Bachelor's degree in Electronics, Electrical, or Instrument Engineering.",
      "Proficiency in Altium Designer, KiCad, or Eagle PCB design software.",
      "Solid understanding of analog circuit design, filtering, and switching regulators.",
      "Experience soldering small SMD components (down to 0603 and QFN packages)."
    ],
    preferredQualifications: [
      "Experience designing high-current power distribution boards.",
      "Familiarity with RF antenna tuning and layout guidelines."
    ],
    skills: ["Altium Designer", "PCB Layout", "Analog Design", "SMD Soldering", "EMI/EMC", "Power Electronics"],
    status: "open",
    postedDate: "2026-08-18"
  },
  {
    slug: "hardware-engineering-intern",
    title: "Hardware Engineering Intern",
    department: "Electronics & Embedded Systems",
    location: "Delhi NCR, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Assist in PCB component inventory tracking, testing boards, and basic soldering.",
    description: "We are seeking a Hardware Engineering Intern to assist our electronics team. You will support laboratory tasks, trace circuit board schematics, hand-solder test boards, and log component voltage behaviors.",
    responsibilities: [
      "Assist in tracking laboratory components, SMD reels, and hardware tools.",
      "Hand-solder passives and basic IC packages onto prototype test boards.",
      "Measure and record voltages, currents, and signals on prototype boards under tests.",
      "Help update schematic files and Bill of Materials (BOM) documentation."
    ],
    requirements: [
      "Current student in Electronics, Electrical, or Telecommunications Engineering.",
      "Basic knowledge of circuit theory, multimeters, and passive components.",
      "Basic manual soldering skills and interest in laboratory testing.",
      "Eagerness to work with physical laboratory instrumentation."
    ],
    preferredQualifications: [
      "Experience building basic electronic hobby projects.",
      "Familiarity with KiCad schematic software."
    ],
    skills: ["Soldering", "Multimeter", "KiCad", "Circuit Testing", "BOM Drafting"],
    status: "closed",
    postedDate: "2026-07-24"
  },

  // 8. OPERATIONS & PROGRAM MANAGEMENT (2 roles: 1 Open, 1 Closed)
  {
    slug: "technical-program-coordinator",
    title: "Technical Program Coordinator",
    department: "Operations & Program Management",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "2-4 years",
    shortDescription: "Coordinate interdisciplinary workflows, track sprints, and maintain engineering document logs.",
    description: "Vayu Galaxy is hiring a Technical Program Coordinator to manage research sprints, synchronize deliverables across mechatronics, aerospace, and software teams, and coordinate test program schedules.",
    responsibilities: [
      "Maintain detailed engineering project timelines, sprint backlogs, and test schedules.",
      "Coordinate weekly progress syncs across mechatronics, aerospace, and software divisions.",
      "Manage hardware part shipping logs, coordinate with vendors, and track incoming deliverables.",
      "Maintain centralized engineering document systems and technical monographs."
    ],
    requirements: [
      "Bachelor's degree in engineering or business discipline with a technical focus.",
      "Experience coordinating engineering project workflows (Jira, Trello, or MS Project).",
      "Excellent written, verbal, and cross-functional coordination skills.",
      "Strong attention to detail, file organization, and deadline tracking."
    ],
    preferredQualifications: [
      "Experience working in a rapid-prototyping hardware startup.",
      "Familiarity with Agile or Scrum project management methodologies."
    ],
    skills: ["Project Coordination", "Jira", "Sprint Tracking", "Vendor Coordination", "Documentation"],
    status: "open",
    postedDate: "2026-08-25"
  },
  {
    slug: "engineering-operations-associate",
    title: "Engineering Operations Associate",
    department: "Operations & Program Management",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "1-3 years",
    shortDescription: "Oversee lab inventory systems, equipment tracking, and safety compliance.",
    description: "We are seeking an Engineering Operations Associate to manage day-to-day operations in our laboratory workshop. You will maintain component inventory levels, track equipment calibration dates, and verify lab safety compliance.",
    responsibilities: [
      "Track and maintain laboratory tool inventories, material levels, and component stocks.",
      "Oversee equipment maintenance, calibration scheduling, and hardware supplier contacts.",
      "Ensure adherence to workshop safety regulations, hazardous waste handling, and lab protocols.",
      "Coordinate office logistics and shipping for prototype parts and client deliverables."
    ],
    requirements: [
      "Bachelor's degree in Business, Operations, or related field.",
      "Experience managing a workshop, fab-lab, warehouse, or laboratory space.",
      "Strong organizational skills and proficiency with inventory database software.",
      "Basic understanding of hardware components and tool terminology."
    ],
    preferredQualifications: [
      "Experience working in a manufacturing or mechatronics facility.",
      "Familiarity with procurement systems."
    ],
    skills: ["Inventory Management", "Lab Safety", "Procurement", "Supplier Relations", "Logistics"],
    status: "closed",
    postedDate: "2026-07-18"
  },

  // 9. BUSINESS & STRATEGIC PARTNERSHIPS (2 roles: 1 Open, 1 Closed)
  {
    slug: "business-development-associate",
    title: "Business Development Associate",
    department: "Business & Strategic Partnerships",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "2-4 years",
    shortDescription: "Identify B2B clients, pitch drone logistics integrations, and manage research accounts.",
    description: "Vayu Galaxy is seeking a Business Development Associate to lead client outreach, pitch modular UAV integration concepts to logistics and defense firms, and manage collaborative research accounts.",
    responsibilities: [
      "Research and identify potential B2B partners in logistics, disaster response, and security fields.",
      "Prepare pitch presentations, technical proposal decks, and feasibility overviews.",
      "Manage prospective partner communication channels and coordinate initial scoping meetings.",
      "Track industry shifts, competitor offerings, and government research funding grants."
    ],
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field.",
      "Experience in B2B sales, account management, or business development.",
      "Strong communication, presentation, and document preparation skills.",
      "Ability to quickly grasp complex technical concepts regarding drones and robotics."
    ],
    preferredQualifications: [
      "Experience working in a technology or hardware startup environment.",
      "Familiarity with defense or commercial logistics procurement processes."
    ],
    skills: ["B2B Sales", "Client Relations", "Pitch Decks", "Market Research", "Proposal Writing"],
    status: "open",
    postedDate: "2026-08-24"
  },
  {
    slug: "strategic-partnerships-associate",
    title: "Strategic Partnerships Associate",
    department: "Business & Strategic Partnerships",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "3-5 years",
    shortDescription: "Manage relationships with academic research labs, government bodies, and developers.",
    description: "We are seeking a Strategic Partnerships Associate to cultivate long-term partnerships with academic research institutions, aerospace labs, and real estate developers to collaborate on our monographs.",
    responsibilities: [
      "Establish and manage relationships with academic research centers and aerospace labs.",
      "Draft Memorandum of Understanding (MoU) frameworks and joint research proposals.",
      "Coordinate communication with government regulatory bodies regarding test flight permissions.",
      "Present Vayu Galaxy design monographs at industry exhibitions and technology panels."
    ],
    requirements: [
      "Bachelor's or Master's degree in Business, Public Relations, or related field.",
      "Experience managing institutional or government relationships.",
      "Excellent negotiation, communication, and contract-drafting skills.",
      "Polished interpersonal skills for high-level stakeholder management."
    ],
    preferredQualifications: [
      "Experience working with Indian drone regulatory frameworks or space associations.",
      "Background in academic or joint research coordination."
    ],
    skills: ["Partnership Development", "MoU Drafting", "Stakeholder Relations", "Public Relations", "Exhibition Coordination"],
    status: "closed",
    postedDate: "2026-07-12"
  },

  // 10. MARKETING, DESIGN & COMMUNICATIONS (2 roles: 1 Open, 1 Closed)
  {
    slug: "technical-content-communications-associate",
    title: "Technical Content & Communications Associate",
    department: "Marketing, Design & Communications",
    location: "Delhi NCR, India",
    employmentType: "Full-time",
    experience: "1-3 years",
    shortDescription: "Write project monographs, technical blogs, and manage technology storytelling campaigns.",
    description: "Vayu Galaxy is looking for a Technical Content & Communications Associate to translate complex engineering specs into engaging articles, project booklets, social media updates, and website copy.",
    responsibilities: [
      "Write engaging articles, blog updates, and technical monographs for Vayu Galaxy platforms.",
      "Interview internal engineers to extract technical details and write clear descriptions.",
      "Manage social media channels (LinkedIn, Twitter), publishing project renders and updates.",
      "Proofread, edit, and format outgoing PDF proposals, research dossiers, and client booklets."
    ],
    requirements: [
      "Bachelor's degree in Communications, English, Journalism, or engineering field.",
      "Strong portfolio demonstrating technical writing, journalism, or content creation.",
      "Ability to write clearly about aerospace, robotics, and architectural concepts.",
      "Familiarity with basic SEO writing guidelines and markdown layouts."
    ],
    preferredQualifications: [
      "Experience running content campaigns for tech startups.",
      "Basic graphic design skills to format visual layouts."
    ],
    skills: ["Technical Writing", "Copywriting", "Social Media", "SEO Writing", "Editing", "Storytelling"],
    status: "open",
    postedDate: "2026-08-25"
  },
  {
    slug: "brand-visual-design-intern",
    title: "Brand & Visual Design Intern",
    department: "Marketing, Design & Communications",
    location: "New Delhi, India",
    employmentType: "Internship",
    experience: "0-1 years",
    shortDescription: "Support branding layout creation, social media graphic design, and presentations.",
    description: "We are seeking a Brand & Visual Design Intern to assist our creative department. You will design social media graphics, format PDF brochures, clean visual assets, and assist in refining presentation layouts.",
    responsibilities: [
      "Design graphical assets for social media updates (LinkedIn, Twitter, YouTube).",
      "Format and layout corporate presentation decks, booklets, and project briefs.",
      "Perform basic photo editing, crop render assets, and organize image files.",
      "Assist in maintaining visual brand consistency across online digital channels."
    ],
    requirements: [
      "Current student in Graphic Design, Communication Design, or related digital arts field.",
      "Proficiency in Adobe Photoshop, Illustrator, and Figma.",
      "Strong visual sense, layout eye, and typography selection.",
      "Ability to work collaboratively under quick project sprints."
    ],
    preferredQualifications: [
      "Academic projects focusing on premium B2B technology branding.",
      "Basic understanding of video cropping or editing tools."
    ],
    skills: ["Figma", "Photoshop", "Illustrator", "Layout Design", "Brand Identity"],
    status: "closed",
    postedDate: "2026-07-30"
  }
];
