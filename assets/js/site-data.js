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
    { value: "16", label: "Engineering Logs" }
  ],

about: {
  command: "cat /home/karabo/about.md",
  title: "Operator Profile",

  profile: [
    ["name", "Karabo Mokobane"],
    ["role", "IT Professional | Cybersecurity Enthusiast"],
    ["focus", "Blue Team • Networking • Cloud"],
    ["homelab", "Dual-Node Proxmox Lab"],
    ["toolkit", "pfSense • OPNsense • Wazuh • Docker  • Caldera • Security Onion • Metasploitable2"],
    ["approach", "Build • Test • Break • Secure • Document"],
    ["status", "Continuously Learning"]
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
                  src: "assets/images/node1config.png",
                  alt: "Proxmox Cluster configuration and hosted virtual machines",
                  caption: "Node 1: Core Proxmox environment on 10.10.1.0/24, protected by pfSense and hosting the primary lab services across VLANs 10, 20, and 30."
                },
                {
                  src: "assets/images/Screenshot 2026-08-11 080159.png",
                  alt: "Proxmox Node 2 configuration and hosted containers",
                  caption: "Node 2: Separate Proxmox environment on 10.20.1.0/24, protected by OPNsense and used for isolated testing, containers, and expanded security services."
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
      featured: true,

      title: "Proxmox Cluster Operations",
      date: "2026-08-04",

      tags: [
        "Homelab",
        "Proxmox",
        "Cluster",
        "Quorum",
        "RAID",
        "Recovery",
        "Power Outages"
      ],

      tools: [
        "Proxmox VE",
        "Corosync",
        "SSH",
        "HP ProLiant Gen8"
      ],

      summary:
        "Documented operational and recovery challenges within a two-node Proxmox cluster, including recurring PVE2 RAID issues following local power outages and the resulting impact on cluster quorum and PVE1 availability.",

      findings: [
        "Periodic power outages in my area have contributed to recurring stability issues on PVE2, particularly with its RAID/storage subsystem.",
        "When PVE2 becomes unavailable, the two-node cluster can lose quorum even though PVE1 itself is still operational.",
        "Loss of quorum can prevent normal VM management operations on the remaining healthy node.",
        "Cluster health, RAID health and individual node reachability need to be checked separately when troubleshooting.",
        "A two-node Proxmox cluster is more sensitive to unexpected node failures because there is no third vote available for quorum."
      ],

      lessons: [
        "Learned how quorum affects management operations in a two-node Proxmox cluster.",
        "Improved troubleshooting of node, storage and cluster-level failures separately.",
        "Recognised the importance of checking RAID health after unexpected shutdowns or power interruptions.",
        "Learned why reliable power protection is important for virtualization hosts and storage arrays.",
        "Understood the limitations of running a two-node cluster without an additional quorum vote.",
        "Keep recovery procedures and important configuration information available outside the cluster."
      ],

      body: [
        "This entry documents the operational challenges of maintaining my two-node Proxmox cluster. My area experiences power outages from time to time, which can result in unexpected shutdowns of the physical hosts and create problems when the environment is brought back online.",

        "PVE2, running on an HP ProLiant Gen8, has experienced recurring RAID and storage-related issues following these interruptions. In some cases the node fails to return to a healthy state, requiring troubleshooting through the console or SSH before it can properly rejoin the cluster.",

        "Because the environment currently consists of only two Proxmox nodes, losing PVE2 also affects cluster quorum. This resulted in situations where PVE1 was online and reachable but normal management operations, including access to or control of running virtual machines, were restricted because the cluster no longer had quorum.",

        "Troubleshooting involved checking PVE2 independently from the cluster, reviewing its RAID and storage state, confirming network connectivity, checking Corosync membership and verifying quorum status from PVE1. This helped separate hardware or storage problems on PVE2 from the wider effects they caused at cluster level.",

        "The experience highlighted an important weakness in a two-node cluster design. A failure on one physical node can affect management of the remaining node even when that server is otherwise healthy. Future improvements include better power protection, continued RAID health monitoring and implementing a more resilient quorum strategy."
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
  id: "google-data-analysis",
  category: "Research",
  status: "Documented",
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
    "Downloaded and reviewed data associated with a Google account created in 2014 to understand how years of searches, activity and online behaviour can build a detailed personal digital footprint.",

  findings: [
    "A Google account used for more than a decade can accumulate a significant historical record of online activity.",
    "Search history can reveal changing interests, priorities and behaviour across different stages of life.",
    "My earliest recorded search was \"[FIRST RECORDED SEARCH]\", which was particularly funny to discover because I was still a teenager at the time.",
    "Individual searches may appear insignificant, but years of activity combined can reveal much more context about a person.",
    "Reviewing my own data demonstrated the difference between information I consciously remember sharing and information that has accumulated through normal online activity.",
    "The exercise highlighted why account privacy settings, retention controls and periodic data reviews are important."
  ],

  lessons: [
    "Learned how to export and inspect personal account data using Google Takeout.",
    "Developed a better understanding of how digital footprints build over long periods of time.",
    "Learned to think about personal data from both a privacy and security perspective.",
    "Recognised how behavioural data can become meaningful when analysed collectively rather than as isolated events.",
    "Improved my awareness of data retention and the importance of reviewing privacy settings.",
    "Plan to visualise the dataset to identify trends in searches and activity over time."
  ],

  body: [
    "I created my Google account in 2014, so I decided to download my Google data and investigate what more than a decade of normal online activity could reveal about me.",

    "Using Google Takeout and My Activity, I began reviewing historical searches and other activity associated with the account. It was interesting, but also slightly uncomfortable, to see how much context can be reconstructed simply from years of searches and interactions.",

    "Two themes stood out in my earliest Google searches: MXit and skateboarding. My skating searches included kickflips, hardflips, Rodney Mullen and 3Square Skate Park. Some of them were made on a Saturday at around 11:23, which made the history feel strangely specific — I could almost picture 14-year-old me spending the weekend watching professional skaters and trying to figure out how to land the same tricks myself.",
    "Seeing those ordinary searches still associated with my account more than a decade later was funny and nostalgic, but also slightly unsettling. What felt like forgettable moments at the time had quietly become part of a detailed digital timeline of who I was and what I was interested in.",

    "More importantly, the exercise demonstrated that a digital footprint is not necessarily created by one particularly sensitive piece of information. It develops gradually. Searches that seem meaningless individually can collectively reveal interests, hobbies, concerns, places, technology use and how someone's priorities change over time.",

    "The project also changed how I think about privacy. Having access to my own historical data made data retention feel much more tangible than simply reading about it. The next stage is to analyse the exported information further and create visualisations showing how my Google activity has changed over time."
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
