"use strict";

window.SITE_DATA = {
  brand: { name: "KARABO", accent: "CYBERLAB", tagline: "Learning. Building. Securing." },

  navigation: [
    { label: "home", href: "index.html", page: "home" },
    { label: "about", href: "about.html", page: "about" },
    { label: "logs/research", href: "logs.html", page: "logs" },
    { label: "homelab", href: "homelab.html", page: "homelab" }
  ],

  socialLinks: [
    { label: "GitHub", href: "https://github.com/KaraboMokobane" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/karabo-mokobane-b9a924205/" }
  ],

  terminalCommands: [
    { prompt: "karabo@cyberlab:~$", command: "whoami", output: "Karabo Mokobane — cybersecurity enthusiast and lab builder" },
    { prompt: "karabo@cyberlab:~$", command: "ls -la", output: "about/  homelab/  logs/  research/" },
    { prompt: "karabo@cyberlab:~$", command: "cd logs", output: "Everything was fine until I touched it." },
    { prompt: "karabo@cyberlab:~/logs$", command: "cat homelab-day-01.md", output: "[ok] topology, pfSense and segmented lab network documented" },
    { prompt: "karabo@cyberlab:~$", command: "grep -r \"Wazuh\" ./research", output: "./research/siem-notes.md: telemetry, agents and pfSense syslog" },
    { prompt: "karabo@cyberlab:~$", command: "echo \"Learning. Building. Securing.\"", output: "Learning. Building. Securing." }
  ],

  home: {
    command: "./portfolio --status active",
    title: "Build. Break. Defend. Document.",
    accentTitle: "Documenting the process.",
    description: "A practical portfolio covering my Proxmox homelab, defensive security experiments, networking, cloud learning and technical research.",
    primaryAction: { label: "Browse research", href: "logs.html" },
    secondaryAction: { label: "Enter the homelab", href: "homelab.html" }
  },

  statistics: [
    { value: "02", label: "Proxmox nodes" },
    { value: "19+", label: "Lab Services" },
    { value: "12", label: "Engineering Logs" }
  ],

about: {
  command: "cat /home/karabo/about.md",
  title: "Operator Profile",

  profile: [
    ["name", "Karabo Mokobane"],
    ["role", "IT Professional | Cybersecurity Enthusiast"],
    ["focus", "Blue Team • Networking • Cloud"],
    ["homelab", "Dual-Node Proxmox Lab"],
    ["toolkit", "pfSense • OPNsense • Wazuh • Security Onion • Kali Linux • Nmap • Nessus • Burp Suite • MITRE Caldera • MITRE ATT&CK • Docker • Portainer • Proxmox VE • Metasploitable2 • Tailscale"],
    ["approach", "Build • Test • Break • Secure • Document"],
    // ["status", "Continuously Learning"]
  ],

  introduction: `Modern infrastructure and security engineering rarely have a single "correct" solution. Every environment is different, and every challenge can be approached from multiple angles. The best way to learn is by building, testing, breaking things, and understanding why they work.

    I created this platform to document my journey through enterprise infrastructure, homelab engineering, and security research. Here you'll find the projects I build, the problems I encounter, the solutions I discover, and the lessons I learn—from Proxmox clusters, pfSense, Wazuh, Docker, Linux, and Active Directory to offensive security labs, threat detection, and vulnerability research.

    This isn't a collection of perfect tutorials—it's a record of real engineering. Every deployment, misconfiguration, troubleshooting session, and solution is documented to capture the learning process behind the technology.

    If something I document helps another engineer troubleshoot an issue, build a better lab, understand a technology more deeply, or see a problem from a different perspective, then this platform has achieved its purpose.`,



  principles: [
    {
      number: "01",
      title: "Build to Understand",
      text: "I deploy technologies in my lab to understand how they work beyond theory. Building systems exposes architecture, dependencies, and failure points that documentation alone cannot."
    },
    {
      number: "02",
      title: "Investigate with Evidence",
      text: "Security decisions should be driven by logs, telemetry, and observable behaviour. Every alert is validated before conclusions are made."
    },
    {
      number: "03",
      title: "Document the Journey",
      text: "Every deployment, challenge, and solution is documented. The difficult parts are often the most valuable because they become repeatable knowledge for future projects."
    }
  ]
},

  entries: [

{
  id: "incident-001-network-reconnaissance",
  category: "Cybersecurity Lab",
  status: "in progress",
  featured: true,

  title: "Incident 001 — Network Discovery and Reconnaissance",
  date: "2026-09-07",

  tags: [
    "Reconnaissance",
    "Nmap",
    "Kali Linux",
    "Ubuntu Server",
    "Docker",
    "Vulnerable Web Apps",
    "Security Onion",
    "Zeek",
    "Suricata",
    "Wazuh",
    "pfSense",
    "MITRE ATT&CK",
    "T1046"
  ],

  tools: [
    "Kali Linux",
    "Nmap",
    "Ubuntu Server",
    "Docker",
    "Portainer",
    "Security Onion",
    "Zeek",
    "Suricata",
    "pfSense",
    "Wazuh"
  ],

 summary:
  "Incident 001 investigates controlled network reconnaissance originating from Kali Linux against the Ubuntu server hosting deliberately vulnerable web applications. The activity is examined across pfSense, Security Onion, Zeek, Suricata and Wazuh to determine how network scanning appears across firewall, network and endpoint telemetry.",
  
  findings: [
    "The experiment compares network reconnaissance from both offensive and defensive perspectives.",
    "Nmap is used from Kali Linux to identify reachable systems, open ports, exposed services and application infrastructure.",
    "Scanning the Ubuntu Docker host can reveal services exposed by both the underlying operating system and containerised applications.",
    "Initial Nmap activity was not clearly visible in the pfSense firewall logs because the traffic was matching the broad default LAN allow rule without dedicated logging for the reconnaissance path.",
    "Dedicated logged pass rules were created on the LAN interface for Kali Linux at 10.10.1.50 to VLAN10, VLAN20 and VLAN30.",
    "The pfSense rules use Kali Linux as a /32 source and each VLAN subnet as the destination, with firewall logging enabled.",
    "The Kali-specific rules were positioned above the broader Default allow LAN to any rule so that reconnaissance traffic matches the dedicated logged rules first.",
    "After applying the rules, pfSense began providing clearer firewall telemetry showing Kali-generated traffic crossing into the segmented VLAN networks.",
    "Zeek telemetry will be reviewed to identify connections between the Kali Linux source and reconnaissance targets.",
    "Suricata will be reviewed for reconnaissance or port-scanning alerts generated during the experiment.",
    "Because the Ubuntu server is monitored by Wazuh, endpoint telemetry will also be reviewed for events that correlate with the network scan.",
    "The reconnaissance activity maps to MITRE ATT&CK T1046 — Network Service Scanning under the Discovery tactic."
  ],

  lessons: [
    "Successful network activity does not automatically mean that sufficient security telemetry is being generated for investigation.",
    "Firewall rule logging must be configured on the rule that actually matches the traffic in order to provide useful visibility.",
    "pfSense evaluates interface rules based on where traffic enters the firewall, so reconnaissance originating from Kali Linux is controlled and logged on the LAN interface.",
    "Specific firewall rules placed above broader allow rules make it easier to identify and investigate traffic associated with a particular host or security experiment.",
    "Logging Kali-to-VLAN traffic improves monitoring and auditability but does not by itself constitute access-control hardening because the traffic is still permitted.",
    "True firewall hardening would involve applying least-privilege access, reducing broad allow rules and explicitly restricting unnecessary inter-VLAN communication.",
    "Network reconnaissance can reveal both host-level services and applications exposed through containers.",
    "Nmap provides several techniques for identifying ports, services, versions and operating system information.",
    "An attacker can build a useful picture of a target environment before attempting exploitation by identifying exposed services first.",
    "Zeek can provide detailed network metadata even when reconnaissance does not trigger a traditional security alert.",
    "Suricata can generate signature-based detections when scanning behaviour matches configured rules.",
    "Wazuh provides an endpoint perspective that can be compared with network and firewall telemetry.",
    "Correlating timestamps, source addresses, destination addresses, ports and protocols across several platforms is an important investigation skill.",
    "The experiment maps reconnaissance activity to MITRE ATT&CK T1046 — Network Service Scanning."
  ],

  body: [
    "Incident 001 of the cybersecurity lab focuses on network discovery and reconnaissance. The first experiment uses Kali Linux and Nmap to perform controlled reconnaissance against segmented lab networks and the Ubuntu server hosting deliberately vulnerable web applications.",

    "Instead of targeting a single vulnerable machine, the Ubuntu server provides a more realistic reconnaissance target because it hosts multiple Docker-based services. The objective is to identify reachable systems, enumerate open ports, fingerprint exposed services and determine what information can be collected before interacting directly with the vulnerable applications.",

    "The scan progresses from basic host discovery to TCP port scanning, service and version detection, and operating system fingerprinting. Particular attention is given to ports exposed by Docker containers and services running directly on the Ubuntu host.",

    "During the initial testing, the Nmap scan generated network traffic successfully, but the expected reconnaissance activity was not clearly visible in the pfSense firewall logs. Investigation showed that Kali traffic was being permitted by the broad Default allow LAN to any rule, which did not provide the dedicated logging required for this experiment.",

    "To improve firewall visibility, dedicated pass rules were created on the LAN interface for the Kali Linux host at 10.10.1.50. Separate rules were configured for VLAN10 at 10.10.10.0/24, VLAN20 at 10.10.20.0/24 and VLAN30 at 10.10.30.0/24. Each rule uses Kali Linux as a single-host /32 source and has packet logging enabled.",

    "The Kali-specific rules were positioned above the broader Default allow LAN to any rule. This ensures that reconnaissance traffic destined for the lab VLANs matches the dedicated rules first and generates firewall log entries that can be correlated with the Nmap scan.",

    "This configuration improves monitoring, auditability and rule specificity, but it is not considered full firewall hardening because the rules continue to permit the traffic. Further hardening would involve replacing broad access with least-privilege policies, limiting unnecessary inter-VLAN communication and permitting only the services required for each lab scenario.",

    "The defensive investigation will examine the same reconnaissance activity through Security Onion. Zeek connection telemetry will be reviewed for communication between Kali Linux and the target systems, while Suricata will be checked for scanning or reconnaissance-related detections.",

    "pfSense firewall logs will provide another network-level perspective by showing inter-VLAN connections initiated by Kali Linux. The source address, destination address, destination ports and protocol information can then be compared with the original Nmap scan.",

    "The Ubuntu server also reports telemetry to the Wazuh Manager, allowing the experiment to include an endpoint perspective. Relevant Wazuh events will be reviewed alongside Nmap output, pfSense logs and Security Onion telemetry.",

    "The investigation will correlate timestamps, source and destination addresses, ports, protocols and identified services across Nmap, Zeek, Suricata, pfSense and Wazuh. The objective is to follow one reconnaissance activity across multiple layers of the monitoring environment.",

    "The simulated incident is documented as Suspicious Network Reconnaissance Against Ubuntu Application Server. The activity maps to MITRE ATT&CK technique T1046 — Network Service Scanning within the Discovery tactic.",

    "Once the experiment is completed, this entry will be updated with the discovered services, Zeek connections, Suricata observations, pfSense firewall events, Wazuh telemetry and conclusions from the investigation."
  ],

  images: [
    {
      src: "assets/images/incident-001-nmap.png",
      alt: "Nmap reconnaissance from Kali Linux against Ubuntu Docker server",
      caption:
        "Nmap reconnaissance from Kali Linux identified six reachable systems and their exposed TCP services across the VLAN 30 application environment.",
      afterParagraph: 3
    },

    {
      src: "assets/images/incident-001-pfsense-rules.png",
      alt: "pfSense logged rules for Kali Linux reconnaissance traffic",
      caption:
        "Dedicated pfSense LAN rules configured for Kali Linux traffic toward VLAN10, VLAN20 and VLAN30, with packet logging enabled to improve reconnaissance visibility.",
      afterParagraph: 6
    },

    {
      src: "assets/images/incident-001-pfsense-logs.png",
      alt: "pfSense firewall logs showing reconnaissance traffic",
      caption:
        "pfSense firewall telemetry showing inter-VLAN reconnaissance traffic originating from the Kali Linux host.",
      afterParagraph: 9
    },

    {
      src: "assets/images/incident-001-security-onion.png",
      alt: "Security Onion telemetry showing reconnaissance against Ubuntu server",
      caption:
        "Security Onion used to review Zeek connections and any Suricata detections generated during reconnaissance of the Ubuntu application server.",
      afterParagraph: 4
    },

    {
      src: "assets/images/incident-001-wazuh.png",
      alt: "Wazuh telemetry from Ubuntu server during reconnaissance",
      caption:
        "Wazuh telemetry from the Ubuntu host reviewed alongside network and firewall evidence generated during the reconnaissance experiment.",
      afterParagraph: 6
    }
  ]
},
    
    {
      id: "AWS", category: "AWS", status: "documented", featured: true,
      title: "AWS Summit 2026 — Red Team vs Blue Team in the AI Era", date: "2026-08-19", tags: ["AWS", "Amazon", "Learning","AI Security", "Red Team", "Blue Team", "Prompt Injection", "Agentic AI", "Cybersecurity"], tools: ["AWS", "Agentic AI"],
      findings: ["AI agents introduce new attack surfaces through tools, permissions and connected workflows.",
                "Prompt injection can manipulate AI systems beyond their intended behaviour.",
                "Tool poisoning and A2A workflow hijacking demonstrate how agentic systems can be abused."
      ],
      summary: "Attended the AWS Summit and explored how modern AI systems can be attacked, manipulated and defended from both Red Team and Blue Team perspectives.",
      lessons: ["AI agents introduce attack surfaces beyond traditional application security.", "Prompt injection can manipulate how an AI system interprets and executes instructions.", "Tool poisoning and misuse become more significant when AI agents can interact with external systems.", "A2A communication can introduce opportunities for workflow hijacking and privilege escalation.", "Red Team and Blue Team approaches are both important when evaluating the security of AI systems.", "AI security is an area I want to explore further through practical lab work."],
      body: ["On 19 August, I attended the AWS Summit, with one of the highlights being a Red Team vs Blue Team session focused on AI security.",
              "The session explored how the growing use of AI agents and connected AI services introduces new attack surfaces. From the Red Team perspective, I learned how techniques such as prompt injection, tool poisoning/tool misuse and A2A escalation or workflow hijacking can be used to manipulate an AI system beyond its intended behaviour.",
              "The Blue Team perspective was equally valuable, focusing on how these attacks can be identified, contained and prevented when designing and operating AI-powered systems. It reinforced that securing AI is not only about protecting the underlying infrastructure, but also understanding how models, tools, permissions, agents and workflows interact.",
              "The summit was not only technical. I also got to see Guru Logic perform live, which was a great change of pace between the sessions and easily one of the fun highlights of the day.",
              "I unexpectedly ran into some of my former university res mates as well. We had the opportunity to catch up on life and where everyone has ended up since those days. It was one of those moments that reminded me how small the world can be and how differently everyone's journey develops over time.",
              "Overall, the AWS Summit was a good combination of learning, technology, music and reconnecting with people — while also giving me a much clearer perspective on the emerging security challenges surrounding AI."
      ], 
      images: [
        {
          src: "assets/images/aws-a2a-escalation.png",
          alt: "AWS Red Team presentation on A2A escalation and workflow hijacking",
          caption:
            "Red Team session demonstrating how a compromised AI agent can influence another agent, alter workflow execution and bypass validation controls.",
          afterParagraph: 2
        },

        {
          src: "assets/images/aws-summit-attendees.png",
          alt: "Attendees at AWS Summit 2026",
          caption:
            "Catching up with a former university residence mate at AWS Summit 2026 — a reminder of how small the technology community can be.",
          afterParagraph: 5
        }
      ]
    },

    {
          id: "local-ai-security-lab",
          category: "AI Security",
          status: "in progress",
          featured: true,

          title: "Local AI Security Lab — Ollama and Open WebUI",
          date: "2026-08-21",

          tags: [
            "AI Security",
            "Ollama",
            "Qwen",
            "Open WebUI",
            "Docker",
            "Local LLM",
            "Red Team",
            "Blue Team",
            "VLAN 30"
          ],

          tools: [
            "Ollama",
            "Qwen2.5:3b",
            "Open WebUI",
            "Docker",
            "Ubuntu",
            "Proxmox VE",
            "pfSense"
          ],

          summary:
            "Built a local AI testing environment with Ollama, Qwen2.5:3b and Open WebUI on an isolated Ubuntu VM, creating the foundation for future adversarial AI testing and defensive monitoring.",

          findings: [
            "Ollama was successfully installed and configured as a persistent systemd service.",
            "The VM does not have a supported NVIDIA or AMD GPU, so Ollama currently performs inference using CPU resources.",
            "Qwen2.5:3b was successfully downloaded and loaded as the first local model.",
            "Open WebUI provides a browser-based interface for interacting with the locally hosted model.",
            "Docker was used to isolate and manage the Open WebUI service.",
            "The AI environment is hosted separately from the Ubuntu server running the vulnerable web applications.",
            "The next phase will introduce Wazuh monitoring before controlled adversarial AI testing begins."
          ],

          lessons: [
            "Learned how to deploy and operate a language model locally using Ollama.",
            "Learned how to verify Ollama using systemd service status and listening ports.",
            "Deployed Qwen2.5:3b as the first model in the AI security lab.",
            "Integrated Open WebUI with Ollama through Docker.",
            "Improved my understanding of the difference between a local LLM runtime and a complete AI agent.",
            "Reinforced the importance of isolating experimental AI workloads before security testing.",
            "The next stage is to onboard the VM into Wazuh and establish monitoring before testing prompt injection and agent-based attacks."
          ],

          body: [
            "This project started after attending the Red Team vs Blue Team AI security session at AWS Summit 2026. After learning about attacks such as prompt injection, tool misuse and workflow hijacking, I wanted to move beyond the theory and build an environment where I could explore these concepts practically.",

            "I created a dedicated Ubuntu VM for the project and placed it on VLAN 30. The AI environment is kept separate from the Ubuntu server already hosting vulnerable web applications, giving me a dedicated system that can be monitored and modified as the AI security lab develops.",

            "Ollama was installed as the local model runtime and configured to start automatically as a systemd service. Service checks confirmed that Ollama was active and listening locally on port 11434. The installation also identified that no supported NVIDIA or AMD GPU was available, so the environment currently operates in CPU-only mode.",

            "Qwen2.5:3b was selected as the first local model. Ollama downloaded the model, verified the manifest and successfully opened an interactive prompt, confirming that local inference was working.",

            "Docker was then installed to deploy Open WebUI. The Open WebUI container was connected to the Ollama service and exposed through the VM so the model could be accessed through a browser instead of only through the command line.",

            "With the base environment operational, the next phase focused on visibility and security monitoring. A Wazuh agent was installed on the Ubuntu VM hosting Ollama and successfully registered with the Wazuh Manager, confirming that the AI host is now reporting telemetry to the central SIEM.",
            "This gives me a monitoring baseline before beginning controlled AI security testing. The goal is to observe system activity, authentication events, process behaviour and configuration changes while experimenting with attacks such as prompt injection, tool misuse and workflow manipulation inspired by the AWS Summit session.",
            "The next step is to generate controlled activity against the local AI environment and review what is visible in Wazuh, allowing the project to be approached from both a Red Team and Blue Team perspective."
          ],

          images: [
            {
              src: "assets/images/ollama-install.png",
              alt: "Ollama installation on Ubuntu",
              caption:
                "Ollama installed on the dedicated Ubuntu AI security VM.",
              afterParagraph: 2
            },

            {
              src: "assets/images/ollama-service.png",
              alt: "Ollama systemd service running",
              caption:
                "Ollama verified as an enabled and active systemd service, running in CPU-only mode.",
              afterParagraph: 3
            },

            {
              src: "assets/images/qwen-model.png",
              alt: "Qwen2.5 3B model running through Ollama",
              caption:
                "Qwen2.5:3b successfully downloaded and loaded through the local Ollama runtime.",
              afterParagraph: 4
            },

            {
              src: "assets/images/open-webui-container.png",
              alt: "Open WebUI Docker container",
              caption:
                "Open WebUI deployed as a Docker container and connected to the local Ollama environment.",
              afterParagraph: 5
            },

            {
              src: "assets/images/open-webui-qwen.png",
              alt: "Qwen2.5 3B running through Open WebUI",
              caption:
                "Qwen2.5:3b accessible through Open WebUI, confirming the local AI environment is operational.",
              afterParagraph: 5
            },
            {
              src: "assets/images/wazuh-ollama-agent.png",
              alt: "Ollama Ubuntu server monitored by Wazuh",
              caption:
                "The Ubuntu server hosting Ollama was onboarded into Wazuh to establish monitoring and telemetry before controlled AI security testing.",
              afterParagraph: 6
            }
          ]
    },

{
  id: "google-data-analysis",
  category: "Research",
  status: "in progress",
  featured: false,

  title: "Analysing My Google Digital Footprint",
  date: "2026-08-10",

  tags: [
    "Google Takeout",
    "Digital Footprint",
    "Privacy",
    "Data Analysis",
    "OSINT",
    "Personal Data"
  ],

  tools: [
    "Google Takeout",
    "Google My Activity",
    "JSON",
    "HTML",
    "Data Analysis"
  ],

  summary:
    "Downloaded and reviewed data associated with my Google account, created in 2014, to understand how more than a decade of searches and online activity can build a detailed personal digital footprint.",

  findings: [
    "A Google account used for more than a decade can accumulate a surprisingly detailed record of online activity.",
    "Search history can reveal changing interests, habits and priorities across different stages of life.",
    "Some of my earliest searches reflected my teenage interests, including MXit, kickflips, hardflips, Rodney Mullen and 3Square Skate Park.",
    "The timestamps made the history feel much more personal, with some early skateboarding searches recorded on a Saturday at around 11:23.",
    "Individual searches may seem insignificant, but years of activity viewed together can reveal a much broader picture of a person's interests and behaviour.",
    "The exercise highlighted how much historical information can remain associated with an online account long after the user has forgotten about it."
  ],

  lessons: [
    "Learned how to export and inspect personal account data using Google Takeout.",
    "Developed a better understanding of how digital footprints are created over long periods of time.",
    "Learned how timestamps and search history can be used to reconstruct past interests and behaviour.",
    "Recognised the difference between information I remember sharing and information that accumulated passively through normal online activity.",
    "Improved my awareness of data retention, privacy controls and account activity history.",
    "Plan to analyse the dataset further and create visualisations showing how my interests and online activity changed over time."
  ],

  body: [
    "I created my Google account in 2014, so I decided to download and review the data associated with it to understand what more than a decade of normal online activity could reveal about me.",

    "Using Google Takeout and Google My Activity, I started going through historical searches and account activity. It was interesting, nostalgic and slightly unsettling to see how much information had accumulated from searches that I had completely forgotten about.",

    "Two themes stood out in my earliest Google searches: MXit and skateboarding. My skating searches included kickflips, hardflips, Rodney Mullen and 3Square Skate Park. At the time I was around 14 and was trying to understand how professional skaters landed these tricks so I could attempt them myself.",

    "What made the history even more interesting was the level of detail preserved with it. Some of those skating searches were made on a Saturday at around 11:23. More than a decade later, that timestamp made it surprisingly easy to imagine what I was probably doing that morning: watching skate videos, researching tricks and planning what I wanted to try next.",

    "Looking through these searches was funny because MXit, skating and searching for trick tutorials felt completely ordinary at the time. I never considered that those small interactions would still exist years later and form part of a timeline showing what I was interested in as a teenager.",

    "The biggest privacy lesson was that a digital footprint is not necessarily created by one sensitive search or one major event. It builds gradually. When thousands of ordinary searches, timestamps and interactions are viewed together, they can reveal patterns about interests, habits and how a person changes over time.",

    "The next phase of this research is to analyse the exported data more systematically, including search activity by year, recurring topics and changes in interests over time. I also plan to create visualisations that show how my Google activity evolved from my teenage years into university, technology, cybersecurity and professional interests."
  ],

  images: []
},

    {
      id: "homelab-day-01", category: "Homelab", status: "documented", featured: true,
      title: "Homelab Day 1 — Foundation and Network Segmentation", date: "2026-07-08",
      tags: ["Proxmox Cluster", "pfSense", "VLANs", "Tailscale", "Kali Linux"], tools: ["Proxmox VE", "pfSense", "Tailscale", "Kali Linux", "Ubuntu Server"],
      summary: "laying the foundation of the lab by installing the core virtual machines, configuring the network, and establishing secure segmentation using VLANs. This created the environment that would later support security monitoring, offensive security testing, and infrastructure management.",
      findings: ["A clear addressing plan makes later troubleshooting easier.", "Management and test traffic should be separated deliberately.", "Connectivity tests should be recorded before adding more services."],
      lessons: ["Document the intended topology before changing interfaces.", "Validate gateway, DNS and VLAN tagging one layer at a time."],


      topologyTerminal: {
                  command: "nmap -sn 10.10.1.0/24 10.20.1.0/24",
                  output: `Nmap scan report for homelab.local
                  Host is up.

                  [DOCUMENTED TOPOLOGY]
                  Internet
                  │
                  ├── Node 1 — Proxmox VE + pfSense
                  │   ├── LAN: 10.10.1.0/24
                  │   ├── VLAN 10: 10.10.10.0/24 → Gateway: 10.10.10.254
                  │   ├── VLAN 20: 10.10.20.0/24 → Gateway: 10.10.20.254
                  │   └── VLAN 30: 10.10.30.0/24 → Gateway: 10.10.30.254
                  │
                  ├── Node 2 — Proxmox VE + OPNsense
                  │   ├── LAN: 10.20.1.0/24
                  │   ├── VLAN 10: 10.20.10.0/24 → Gateway: 10.20.10.254
                  │   ├── VLAN 20: 10.20.20.0/24 → Gateway: 10.20.20.254
                  │   └── VLAN 30: 10.20.30.0/24 → Gateway: 10.20.30.254
                  │
                  └── Tailscale
                      └── Secure remote access to both nodes

                  Nmap done: 2 Proxmox nodes documented.`
        },



      body: ["This homelab uses two Proxmox VE nodes joined in one cluster, with each node running its own firewall and separate network ranges.",
              "Node 1 is connected to the 10.10.1.0/24 LAN and uses pfSense as its firewall. pfSense provides gateway and routing services for the Node 1 VLANs: 10.10.10.0/24, 10.10.20.0/24 and 10.10.30.0/24. The firewall gateway for each of these networks is configured as .254.",
              "Node 2 is connected to the separate 10.20.1.0/24 LAN and uses OPNsense as its firewall. OPNsense manages the Node 2 VLANs: 10.20.10.0/24, 10.20.20.0/24 and 10.20.30.0/24, also using .254 as the gateway address for each VLAN.",
              "Both nodes use a /24 subnet mask (255.255.255.0) and are managed together through the Proxmox cluster, while their firewall policies and workload environments remain separated.",
              "This separation allows Node 1 to remain the core environment while Node 2 is used for expansion, isolated testing, containers, and additional security services. Both nodes can still be viewed and managed through the Proxmox cluster interface, while the firewalls maintain separate routing and security policies.",
              "Tailscale provides encrypted remote access to the management environment, allowing secure administration of both Proxmox nodes without exposing their web interfaces directly to the internet."

            ],

      images: [
            {
              src: "assets/images/topology.png",
              alt: "Homelab network topology showing Proxmox, pfSense, OPNsense and VLAN segmentation",
              caption:
                "Homelab architecture across two Proxmox environments, with pfSense and OPNsense providing routing, firewalling and VLAN segmentation."
            },
          
            {
              src: "assets/images/pfsense-dashboard.png",
              alt: "pfSense firewall dashboard running on Proxmox Node 1",
              caption:
                "pfSense deployed as the primary firewall and gateway for the Node 1 environment, managing the 10.10.1.0/24 network and segmented lab VLANs."
            },
          
            {
              src: "assets/images/pfsense-vlans.png",
              alt: "pfSense VLAN interfaces configured for the Proxmox homelab",
              caption:
                "VLAN interfaces configured in pfSense to separate vulnerable systems, Windows infrastructure and container-based workloads."
            },
          
            {
              src: "assets/images/pfsense-firewall-rules.png",
              alt: "pfSense firewall rules controlling traffic between homelab VLANs",
              caption:
                "Firewall policies used to control communication between VLANs and enforce network segmentation within the lab. The rule set was replicated across the remaining VLAN interfaces to maintain consistent traffic control and security boundaries."
            },
          
            {
              src: "assets/images/proxmox-node2.png",
              alt: "Proxmox Node 2 configuration and hosted virtual machines",
              caption:
                "Node 2 provides a separate Proxmox environment on 10.20.1.0/24 with OPNsense and additional lab workloads. Recurring RAID and availability issues are documented separately under Proxmox Cluster Operations."
            }
          ]
    },
    {
      id: "homelab-day-02", category: "Homelab", status: "documented", featured: true,
      title: "Homelab Day 2 — Vulnerable Systems and Containers", date: "2026-07-09",
      tags: ["Metasploitable", "Docker", "Portainer", "macvlan", "Containerization", "VLAN 10", "SSH", "Troubleshooting", "Network Segmentation"], tools: ["Metasploitable2", "Docker", "Portainer", "macvlan", "Containerization"],
      summary: "Expanded the Proxmox homelab by deploying Metasploitable 2, configuring Docker and Portainer, implementing macvlan networking, resolving deployment issues, and preparing a realistic environment for cybersecurity testing and monitoring.",
      findings: ["QCOW2 performs better in Proxmox than importing VMDK disks directly.", "A macvlan network can give containers distinct lab addresses.", "Docker containers require additional networking configuration to integrate cleanly into enterprise VLANs.", "Careful documentation of errors significantly reduces troubleshooting time in future deployments."],
      lessons: ["Learned how to import VMware virtual machines into Proxmox.", "Understood the difference between VMDK and QCOW2 disk formats.", "Learned how Docker networking differs from traditional virtual machines.", "Improved troubleshooting skills by diagnosing storage and networking issues."],
      body: ["Day 2 focused on expanding the home lab from a basic virtual infrastructure into a realistic environment capable of hosting vulnerable systems and containerized applications. The main objective was to create targets for future penetration testing while improving the overall network architecture.", 
              "The first task involved deploying Metasploitable 2 on Proxmox. Since the image was distributed as a VMware virtual disk, it had to be converted from VMDK to QCOW2 before it could be used efficiently by Proxmox. After importing the disk, the VM configuration was updated manually to reference the converted disk, and the machine was placed on VLAN 10 to isolate vulnerable systems.",
              "The second task focused on building a container environment using Ubuntu Server, Docker, and Portainer. Docker was installed to host lightweight services while Portainer provided a web-based interface for managing containers.",
              "To allow containers to appear as independent devices on the network, a macvlan network was configured. This enabled each container to receive its own IP address within VLAN 30 (10.10.30.0/24) rather than sharing the Ubuntu host's IP address. This setup better simulates real enterprise infrastructure and simplifies network scanning and security monitoring.",
              "Several deployment issues were encountered throughout the day, including storage configuration problems in Proxmox and initial Portainer setup difficulties. Each issue was investigated, documented, and resolved before moving to the next stage.",
            ], 
      images: [
                {
                  src: "assets/images/Screenshot 2026-08-08 001555v.png",
                  alt: "Proxmox Cluster configuration and hosted virtual machines",
                  caption: "Node 1: Core Proxmox environment on 10.10.1.0/24, protected by pfSense and hosting the primary lab services across VLANs 10, 20, and 30."
                },
                {
                  src: "assets/images/Screenshot 2026-07-08 002045v.png",
                  alt: "Proxmox Node 2 configuration and hosted containers",
                  caption: "Portainer is used to manage containerized vulnerable web applications deployed for controlled security testing, exploitation practice, and detection validation within the isolated lab environment."
                }
      ]
    },
    {
      id: "homelab-day-03", category: "Homelab", status: "documented", featured: true,
      title: "Homelab Day 3 — Wazuh and pfSense Telemetry", date: "2026-07-16",
      tags: ["Wazuh", "pfSense", "SIEM", "Syslog", "SOC", "Firewall Logs", "Nessus"], tools: ["Wazuh", "pfSense", "Filebeat", "Syslog", "SOC","Firewall Logs", "Nessus"],
      summary: "Configured Wazuh SIEM to centralize security telemetry, integrated pfSense firewall logs through Syslog, onboarded Linux endpoints, and deployed Nessus for vulnerability scanning.",
      findings: ["The newer pfSense version could not run the Wazuh agent directly.", "Remote Syslog was used as an alternative method to send pfSense telemetry to Wazuh.", "A working Wazuh dashboard does not guarantee that logs are being ingested.", "XML configuration errors can stop the Wazuh Manager service.", "Version differences can affect configuration and troubleshooting.", "Wazuh and Nessus provide complementary security visibility."],
      lessons: ["Learned how Wazuh components work together.", "Learned when to use agent-based monitoring versus Syslog forwarding.", "Configured centralized pfSense firewall log collection.", "Improved troubleshooting of SIEM log pipelines.", "Learned how to verify Syslog communication over UDP 514.", "Understood the difference between security monitoring and vulnerability scanning."],
      body: ["Day 3 focused on introducing centralized security monitoring and vulnerability detection into the homelab, moving the environment beyond basic networking and system deployment.", 
            "Wazuh was deployed as the central SIEM platform, and Linux endpoints were successfully onboarded so that security events and system activity could be monitored from a single dashboard. An attempt was also made to install a Wazuh agent directly on pfSense, but the newer pfSense version did not support the required agent installation.",
            "As an alternative, pfSense was configured to forward firewall and system logs to Wazuh using Syslog over UDP 514. This allowed network activity and firewall events to be collected without installing an agent directly on the firewall.",
            "Troubleshooting involved checking Wazuh services, Filebeat, Syslog forwarding settings, UDP 514 connectivity and the ossec.conf configuration. Configuration and version-related issues were identified and resolved, after which pfSense firewall events became visible in Wazuh Threat Hunting, confirming successful log ingestion.",
            "Nessus was also deployed to add vulnerability scanning to the environment. This complemented Wazuh by providing active vulnerability assessment alongside continuous security monitoring and log analysis."], 
      images: [
                {
                  src: "assets/images/wazuhbuild.png",
                  alt: "Wazuh Dashboard running",
                  caption: "Wazuh SIEM successfully deployed and accessible from the lab network."
                },
                {
                  src: "assets/images/wazuhagents.png",
                  alt: "Kali / multiple Wazuh agents active",
                  caption: "Linux endpoints successfully onboarded and reporting to the Wazuh Manager."
                },
                {
                  src: "assets/images/pfsenseerror.png",
                  alt: "pfSense troubleshooting/configuration",
                  caption: "Attempted Wazuh agent deployment on pfSense before moving to Syslog-based monitoring."
                },
                {
                  src: "assets/images/nessusrunning.png",
                  alt: "NESSUS VULNARABILITY SCANNER BUILD",
                  caption: "Nessus deployed to provide vulnerability assessment alongside Wazuh monitoring."
                }
      ]
    },
    {
      id: "homelab-day-04", category: "Homelab", status: "documented", featured: true,
      title: "Homelab Day 4 — Caldera and Security Onion", date: "2026-07-19",
      tags: ["Caldera", "Security Onion", "Proxmox", "MITRE ATT&CK", "SOC", "UEFI", "Troubleshooting"],
      tools: ["MITRE Caldera", "Security Onion", "Proxmox VE", "Ubuntu Server", "UEFI", "systemd"],
      summary: "Deployed MITRE Caldera for adversary-emulation research and Security Onion for network security monitoring, while resolving deployment, boot, and service configuration issues.",
      findings: [
        "MITRE Caldera was successfully deployed on a dedicated Ubuntu VM and its web interface became accessible from the lab network.",
        "Caldera did not automatically return after the VM rebooted because the application had initially been started manually.",
        "Security Onion installation failed when the VM used an incompatible firmware and boot configuration.",
        "Changing the Security Onion VM to UEFI allowed the installer to boot correctly.",
        "Security Onion was configured as a standalone node with a static management interface on the homelab network."
      ],
      lessons: [
        "Applications started manually during testing should be given a persistent startup method before the VM is considered production-ready.",
        "Troubleshoot virtual appliances layer by layer: hypervisor configuration, firmware, boot media, operating system and finally the application."
      ],
      body: [
        "Day 4 focused on deploying MITRE Caldera and Security Onion as part of the lab’s offensive and defensive security capabilities. Caldera was configured for adversary-emulation research and MITRE ATT&CK-based testing.",
        "Security Onion 2.4.211 was deployed as a standalone monitoring platform. Installation issues related to firmware and boot configuration were resolved by switching the VM to UEFI and correcting the boot sequence. The platform was then configured with a static management address and SOC telemetry enabled."
      ],
      images: [
                {
                  src: "assets/images/MITRECaldera.png",
                  alt: "MITRE Caldera installation and initial server configuration.",
                  caption: "MITRE Caldera installation and initial server configuration."
                },
                {
                  src: "assets/images/Calderadeployed.png",
                  alt: "MITRE Caldera successfully deployed with the web interface accessible.",
                  caption: "MITRE Caldera successfully deployed with the web interface accessible on http://10.10.1.53:8888."
                },
                {
                  src: "assets/images/SecurityOnion.png",
                  alt: "Security Onion 2.4.211 installation environment during deployment.",
                  caption: "Security Onion 2.4.211 installation environment during deployment."
                }
      ]
    },

    {
      id: "homelab-day-05", category: "Homelab", status: "documented", featured: true,
      title: "Homelab Day 5 — Active Directory, DHCP, DNS and Group Policy",
      date: "2026-07-22",

      tags: [
        "Active Directory",
        "Windows Server",
        "DHCP",
        "DNS",
        "Group Policy",
        "Windows 10",
        "VLAN"
      ],

      tools: [
        "Windows Server 2022",
        "Active Directory Domain Services",
        "DHCP",
        "DNS",
        "Group Policy",
        "pfSense",
        "Windows 10"
      ],

      summary:
        "Built a Windows Server 2022 domain environment, configured Active Directory, DNS and DHCP for VLAN 20, created domain users and groups, deployed a network drive through Group Policy, and successfully joined a Windows 10 client to the domain.",

      body: [
        "Day 5 focused on introducing Windows enterprise infrastructure into the homelab by deploying Windows Server 2022 and configuring the core services commonly used in a domain environment.",
        "The server was configured with a static address on VLAN 20 and promoted to a domain controller for the techport.local domain. Active Directory Domain Services, DNS and DHCP roles were installed to centralize identity, name resolution and network addressing.",
        "DHCP for VLAN 20 was moved to Windows Server, with pfSense remaining the network gateway. A DHCP scope was created for 10.10.20.100–10.10.20.120, using 10.10.20.254 as the default gateway and 10.10.20.10 as the DNS server.",
        "Active Directory users and security groups were created, followed by a shared network folder. Group Policy was then configured to automatically map the shared folder as a network drive for selected domain users.",
        "A Windows 10 VM was deployed as a client workstation and successfully received its network configuration from the Windows DHCP server. The machine was joined to the techport.local domain, authenticated using a domain account and received the mapped network drive through Group Policy."
      ],

      images: [
        {
          src: "assets/images/ad-services.png",
          alt: "Windows Server Active Directory DHCP and DNS roles",
          caption:
            "Active Directory Domain Services, DHCP and DNS configured on Windows Server 2022.",
          afterParagraph: 1
        },
        {
          src: "assets/images/dhcp-scope.png",
          alt: "Windows Server DHCP scope options for VLAN 20",
          caption:
            "VLAN 20 DHCP scope configured with the pfSense gateway, internal DNS server and techport.local domain.",
          afterParagraph: 3
        },
        {
          src: "assets/images/gpo-network-drive.png",
          alt: "Group Policy mapped network drive configuration",
          caption:
            "Group Policy configured to automatically deploy the shared network drive to domain users.",
          afterParagraph: 4
        },
        {
          src: "assets/images/domain-join.png",
          alt: "Windows 10 joined to techport.local",
          caption:
            "Windows 10 workstation successfully joined to the techport.local Active Directory domain.",
          afterParagraph: 5
        },
        {
          src: "assets/images/mapped-drive.png",
          alt: "Mapped network drive on Windows 10",
          caption:
            "Shared network drive successfully applied to the domain workstation through Group Policy.",
          afterParagraph: 5
        }
      ],

      findings: [
        "Active Directory clients must use the domain controller as their DNS server for reliable domain discovery and authentication.",
        "Only one DHCP service should manage the VLAN scope, so pfSense DHCP was disabled while Windows Server handled VLAN 20 addressing.",
        "pfSense can remain the VLAN gateway while Windows Server provides DHCP and DNS services.",
        "Group Policy can centrally deploy resources such as mapped network drives to domain users.",
        "The Windows 10 client successfully received its IP configuration from Windows DHCP and joined the Active Directory domain."
      ],

      lessons: [
        "Learned how Active Directory Domain Services, DNS and DHCP work together.",
        "Configured and managed a Windows Server DHCP scope.",
        "Created Active Directory users and security groups.",
        "Learned how DNS affects domain joining and authentication.",
        "Configured Group Policy to deploy a mapped network drive.",
        "Successfully joined and authenticated a Windows workstation against an Active Directory domain."
      ]
},


{
  id: "proxmox-cluster-notes",
  category: "Infrastructure",
  status: "in progress",
  featured: false,

  title: "Proxmox Cluster Operations",
  date: "2026-09-06",

  tags: [
    "Homelab",
    "Proxmox",
    "Cluster",
    "Quorum",
    "RAID",
    "Recovery",
    "Power Outages",
    "LXC",
    "OPNsense"
  ],

  tools: [
    "Proxmox VE",
    "Corosync",
    "SSH",
    "HP ProLiant Gen8",
    "LXC",
    "OPNsense",
    "Pi-hole"
  ],

  summary:
    "Documented the failure and recovery of PVE2 in a two-node Proxmox cluster, tracing recurring RAID and boot problems to faulty hard drives, replacing the failed storage, rebuilding Proxmox from scratch and planning a lighter LXC-based environment for Node 2.",

  findings: [
    "The recurring PVE2 boot and RAID issues were ultimately traced to faulty hard drives.",
    "Periodic power outages contributed to repeated unexpected shutdowns and made the storage problems more disruptive.",
    "When PVE2 became unavailable, the two-node cluster could lose quorum even though PVE1 itself remained operational.",
    "Loss of quorum affected normal VM management operations on the remaining node.",
    "Replacing the faulty drives and reinstalling Proxmox was more reliable than continuing to troubleshoot unstable storage.",
    "After rebuilding PVE2, stale cluster configuration had to be removed before the rebuilt node could be added back into the environment.",
    "The replacement drives have limited storage capacity, making lightweight LXC containers more suitable for the rebuilt node than heavier virtual machines.",
    "PVE2 will now be used primarily as an experimental playground rather than hosting critical lab workloads."
  ],

  lessons: [
    "Learned to separate hardware, storage, network and cluster-level problems during troubleshooting.",
    "Confirmed that persistent RAID and boot problems can indicate failing physical drives rather than only configuration issues.",
    "Learned how quorum affects a two-node Proxmox cluster when one node becomes unavailable.",
    "Improved my understanding of rebuilding and reintroducing a failed Proxmox node into a cluster.",
    "Recognised the importance of reliable power protection for virtualization hosts and storage systems.",
    "Learned to adapt infrastructure design to available hardware resources.",
    "Plan to compare LXC containers with Docker-based workloads to better understand their different use cases.",
    "Keep recovery notes and important configuration information outside the cluster so they remain available during failures."
  ],

  body: [
    "This entry documents one of the more significant failures in my homelab. My area experiences power outages from time to time, which can result in unexpected shutdowns of the physical Proxmox hosts. PVE2 began experiencing recurring RAID, storage and boot problems after several of these interruptions.",

    "Initially, the problem appeared to be related to RAID configuration or the Proxmox installation itself. Troubleshooting involved changing storage settings, checking drive detection, testing different boot configurations and attempting to bring the node back online through the console and SSH.",

    "After continued troubleshooting, I confirmed that the hard drives themselves were faulty. At that point, continuing to repair the existing installation was no longer worthwhile. I replaced the drives and performed a fresh Proxmox installation on PVE2.",

    "Because PVE2 had previously been part of the two-node cluster, the old cluster state also had to be cleaned up before the rebuilt node could be introduced again. This effectively meant starting from scratch on Node 2 while keeping the main PVE1 environment intact.",

    "The incident also demonstrated one of the weaknesses of a two-node cluster. When PVE2 was unavailable, PVE1 could remain powered on and reachable while the cluster lost quorum, restricting normal management of virtual machines. This helped me understand the difference between an individual node being healthy and the cluster itself being healthy.",

    "The rebuilt PVE2 will take a different direction. The replacement drives are smaller, so instead of filling the node with larger virtual machines and another Docker-heavy environment, I plan to experiment primarily with lightweight LXC containers.",

    "One of the goals is to compare LXC containers with the Docker environment already running elsewhere in the homelab. I want to understand the differences in resource usage, networking, isolation, management and the types of services that are better suited to each approach.",

    "I also plan to deploy OPNsense again as the firewall for Node 2 and rebuild its separate network environment. This will allow the node to remain isolated from the primary pfSense-based environment while giving me another firewall platform to experiment with.",

    "Pi-hole is one of the first services I want to deploy as an LXC container. Beyond basic DNS filtering, I want to explore its DNS logs, query behaviour, blocking policies and how DNS activity can be monitored from a security perspective.",

    "Going forward, PVE2 will function more as a playground for experimentation. Instead of trying to duplicate everything running on PVE1, the rebuilt node will be used to test LXC containers, OPNsense, DNS services and other infrastructure ideas while keeping the main security lab stable."
  ],

  images: []
},

{
  id: "docker-portainer-notes",
  category: "Containers",
  status: "in progress",
  featured: false,

  title: "Docker, Portainer and Vulnerable Web Applications",
  date: "2026-08-06",

  tags: [
    "Docker",
    "Portainer",
    "Containers",
    "DVWA",
    "bWAPP",
    "WebGoat",
    "Vulnerable Applications",
    "Macvlan",
    "Wazuh"
  ],

  tools: [
    "Docker Engine",
    "Portainer",
    "Ubuntu Server",
    "DVWA",
    "bWAPP",
    "WebGoat",
    "Docker Macvlan",
    "Wazuh"
  ],

  summary:
    "Documented the Docker and Portainer environment used to host isolated vulnerable web applications, including DVWA, bWAPP and WebGoat, with macvlan networking providing each container with its own address for controlled security testing.",

  findings: [
    "Portainer provides a central interface for managing Docker containers, images, volumes and networks.",
    "DVWA, bWAPP and WebGoat provide intentionally vulnerable web applications for controlled security testing.",
    "Docker macvlan allows containers to appear as individual hosts on the lab network instead of relying only on host port mappings.",
    "Container status, network configuration, exposed services and host firewall rules all affect application reachability.",
    "Vulnerable applications should remain isolated from trusted networks and only be reachable from approved testing systems.",
    "Container logs can provide useful evidence when reviewing attacks performed against vulnerable applications."
  ],

  lessons: [
    "Improved my understanding of Docker container deployment and management through Portainer.",
    "Learned how to configure macvlan networking for containers that require individual network addresses.",
    "Learned how deliberately vulnerable applications can be used to practise web application security testing.",
    "Improved troubleshooting of container connectivity, port exposure and network configuration.",
    "Learned to verify basic container and service health before rebuilding or changing configurations.",
    "Plan to correlate activity against vulnerable applications with Docker and Wazuh logs to better understand the defensive view of attacks."
  ],

  body: [
    "This entry documents the Docker environment running on an Ubuntu Server VM and managed through Portainer. The environment is used to deploy services quickly while keeping container management and network configuration visible from a central interface.",

    "Portainer was deployed with persistent storage and connected to the local Docker environment. It is used to monitor running containers, inspect networks, manage images and review the state of services running inside the lab.",

    "The current vulnerable web application environment includes DVWA, bWAPP and WebGoat. These applications are intentionally vulnerable and provide controlled targets for practising common web application attacks and understanding how insecure configurations and application weaknesses can be exploited.",

    "A Docker macvlan network was configured on VLAN 30 using the 10.10.30.0/24 network. This allows the vulnerable containers to receive their own network addresses and behave more like independent systems on the lab network, rather than exposing every application through ports on the Ubuntu host.",

    "These vulnerable web applications form part of the offensive testing side of the homelab alongside targets such as Metasploitable 2. The intention is not only to exploit these systems, but also to observe what evidence those attacks generate across the network and monitoring platforms.",

    "The next stage of this work is to review and document the logs generated by the containers during testing. Docker event and application logs will be compared with Wazuh telemetry to identify which actions are visible, what alerts are generated and how attack activity can be investigated from a Blue Team perspective.",

    "As the container environment develops, screenshots, selected logs and attack observations will be added to this entry to document both the vulnerable applications and the security telemetry produced when they are tested."
  ],

  images: []
},
    
{
  id: "shodan-research-journal",
  category: "Research",
  status: "in progress",
  featured: false,

  title: "Shodan Research Journal",
  date: "2026-08-21",

  tags: [
    "Shodan",
    "OSINT",
    "Reconnaissance",
    "Attack Surface",
    "Open Ports",
    "Cybersecurity Research"
  ],

  tools: [
    "Shodan",
    "Nmap",
    "Browser",
    "CVE References"
  ],

  summary:
    "Used Shodan to study how internet-facing systems are discovered, fingerprinted and indexed, with a focus on exposed services, open ports, banners and the security risks created by unnecessary public exposure.",

  findings: [
    "Shodan can reveal internet-facing services without actively scanning the target myself.",
    "Service banners can expose useful information such as software, versions, operating systems and device types.",
    "Commonly exposed services include web servers, SSH, RDP, databases, VPN gateways and network appliances.",
    "An open port is not automatically a vulnerability, but unnecessary exposure increases the available attack surface.",
    "Older software versions visible in banners can provide useful leads for vulnerability research.",
    "Shodan results should be treated as reconnaissance data and verified before drawing conclusions about a system's security."
  ],

  lessons: [
    "Learned how Shodan differs from a traditional search engine.",
    "Improved my understanding of passive reconnaissance and internet-facing attack surfaces.",
    "Learned how ports, services and banners can be used to identify technologies.",
    "Practised connecting exposed software versions with publicly documented vulnerabilities.",
    "Learned not to assume that a listed CVE means a system is definitely vulnerable.",
    "Improved my understanding of why administrators should minimise unnecessary internet-facing services."
  ],

  body: [
    "This research focused on learning how Shodan can be used to understand what devices and services are exposed to the public internet. Unlike a normal search engine that indexes website content, Shodan provides information about internet-connected systems and the services they expose.",

    "I started by exploring searches for common technologies and services, paying attention to information such as IP addresses, ports, protocols, service banners, software versions and geographic information. The goal was to understand what an external observer could learn about a system without having direct administrative access to it.",

    "One of the main observations was how much information can be revealed through service banners alone. In some cases, the banner identifies the product and version being used, which can then be compared against publicly documented vulnerabilities and security advisories.",

    "I also explored commonly exposed services such as SSH, RDP and web interfaces. This reinforced that an open port is not necessarily evidence of a vulnerability, but every publicly accessible service represents an additional part of the attack surface that needs to be maintained and secured.",

    "The research helped connect concepts I have been working with in my homelab, particularly Nmap scanning, firewall rules, vulnerability assessment and network segmentation. Shodan effectively provides an external perspective of the same type of exposure that I would normally investigate internally within the lab.",

    "Future research will focus on documenting selected Shodan queries, comparing results with CVE information and recreating safe examples inside my own homelab to understand how exposed services appear from both an attacker and defender perspective."
  ],

  images: []
},
  ],

  footer: { text: "Built and documented by Karabo Mokobane. All research examples are intended for authorised, defensive lab use." }
};
