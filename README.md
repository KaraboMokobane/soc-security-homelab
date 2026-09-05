# Karabo Cyberlab

**Security Engineering • SOC Monitoring • Adversary Emulation • Network Defense • AI Security**

Karabo Cyberlab is a self-hosted cybersecurity homelab designed to simulate enterprise security environments, defensive monitoring workflows, adversary activity, network segmentation, vulnerable systems, and emerging AI security threats.

The environment is built on **Proxmox VE** and combines offensive and defensive security platforms including **Wazuh, Security Onion, MITRE Caldera, Kali Linux, pfSense, Docker, Windows Server, and Ollama**.

This repository also contains the static web interface used to document the lab architecture, deployments, incidents, troubleshooting, experiments, findings, and security research.

---

## Overview

The Cyberlab provides a controlled environment for developing practical experience across multiple cybersecurity domains:

* Security Operations Center workflows
* SIEM deployment and log analysis
* Network security monitoring
* Threat detection and investigation
* Adversary emulation
* MITRE ATT&CK mapping
* Vulnerability testing
* Network segmentation
* Windows and Linux security
* Firewall administration
* Container security
* AI and LLM security research
* Incident troubleshooting
* Security architecture and infrastructure management

The lab is continuously expanded as new technologies, attack techniques, defensive controls, and research areas are introduced.

---

## Lab Architecture

The environment runs across a virtualized Proxmox infrastructure with isolated network segments separating administrative systems, vulnerable targets, services, monitoring infrastructure, and research workloads.

### Virtualization

* Proxmox VE
* Multi-node lab environment
* Virtual machines and Linux containers
* Isolated testing environments
* Snapshot-based recovery for security experiments

### Network Security

* pfSense
* VLAN segmentation
* Inter-VLAN firewall policies
* Controlled routing between security zones
* Centralized firewall logging
* Remote administrative access using Tailscale

The network is intentionally segmented so that vulnerable machines, security tooling, infrastructure services, and AI workloads can be tested without placing all systems within the same trust boundary.

---

## Security Monitoring

### Wazuh

Wazuh provides centralized endpoint monitoring and SIEM capabilities across the environment.

Current use cases include:

* Windows endpoint monitoring
* Linux endpoint monitoring
* Authentication event analysis
* File integrity monitoring
* Security event correlation
* pfSense syslog ingestion
* Docker monitoring
* Threat hunting
* Agent health monitoring
* Security alert investigation

### Security Onion

Security Onion provides network-focused monitoring and investigation capabilities.

It is used for:

* Network security monitoring
* Traffic visibility
* Detection engineering
* Event investigation
* SOC workflow experimentation
* Network-based threat analysis

---

## Adversary Emulation

### MITRE Caldera

MITRE Caldera is deployed inside the lab for controlled adversary-emulation exercises.

The platform is used to study:

* MITRE ATT&CK techniques
* Adversary behaviour
* Detection coverage
* Endpoint telemetry
* Attack-chain visibility
* Defensive response workflows

All offensive testing is conducted against systems owned by or intentionally deployed within the Cyberlab.

---

## Offensive Security

### Kali Linux

Kali Linux serves as the primary security testing workstation.

It is used for controlled:

* Reconnaissance
* Enumeration
* Vulnerability assessment
* Web application testing
* Network testing
* Exploit research
* Security validation

### Vulnerable Targets

Purpose-built vulnerable systems are deployed to provide realistic targets for security testing.

Examples include:

* Metasploitable
* Vulnerable web applications
* Isolated Linux services
* Windows test systems
* Containerized security targets

These environments allow attacks and detections to be studied together instead of treating offensive and defensive security as separate disciplines.

---

## AI Security Lab

A dedicated AI security environment has been introduced using **Ollama** and locally hosted language models.

The environment is isolated from vulnerable workloads and monitored as part of the wider security lab.

Research areas include:

* Local LLM deployment
* AI service monitoring
* Prompt injection
* Agent security
* Tool misuse
* AI workflow manipulation
* LLM attack surfaces
* Security telemetry for AI workloads
* Detection of abnormal AI service activity

The objective is to explore how traditional SOC and infrastructure security controls can be extended to modern AI-enabled environments.

---

## Infrastructure Services

The lab contains additional systems used to reproduce common enterprise infrastructure.

### Windows

* Windows Server
* Active Directory research
* DNS
* DHCP
* Group Policy
* Windows endpoints
* Wazuh agents

### Linux

Ubuntu Server systems are used for:

* Security tooling
* Docker workloads
* Ollama
* Wazuh agents
* Application hosting
* Infrastructure services

### Containers

Docker and Portainer are used to deploy and manage isolated application workloads and vulnerable services.

---

## Security Workflow

A typical Cyberlab exercise follows the complete security lifecycle:

```text
Deploy Target
      ↓
Establish Baseline
      ↓
Collect Telemetry
      ↓
Execute Controlled Attack
      ↓
Generate Security Events
      ↓
Investigate Logs
      ↓
Correlate Activity
      ↓
Map Behaviour to MITRE ATT&CK
      ↓
Document Findings
      ↓
Improve Detection or Architecture
```

This allows the lab to demonstrate not only whether an attack works, but also **what evidence the attack produces and how a defender could identify it**.

---

## Project Documentation

Research and implementation work is documented as individual Cyberlab entries.

Entries may include:

* Architecture decisions
* Installation procedures
* Configuration changes
* Security experiments
* Detection results
* Troubleshooting
* Screenshots
* Technical findings
* Lessons learned
* Incident analysis
* Infrastructure improvements

The archive provides a chronological record of how the environment has evolved.

---

## Portfolio Interface

The project documentation is presented through a custom cybersecurity-themed frontend built with:

* HTML5
* CSS3
* Vanilla JavaScript
* Responsive layouts
* Dynamic JavaScript data
* Terminal-inspired UI
* Animated network visualization

No frontend framework or runtime package installation is required.

The interface includes:

* Interactive homepage terminal
* Cyberlab project archive
* Searchable research logs
* Homelab project index
* Dynamic individual research entries
* Responsive navigation
* Mobile support
* Reduced-motion accessibility support
* Custom 404 handling

---

## Repository Structure

```text
soc-security-homelab/
│
├── index.html              # Home page
├── about.html              # About / profile page
├── homelab.html            # Homelab overview
├── logs.html               # Research and project archive
├── entry.html              # Individual project/log entry renderer
├── 404.html                # Custom error page
├── vercel.json             # Vercel deployment configuration
├── README.md               # Project documentation
│
└── assets/
    ├── css/
    │   └── styles.css      # Global styling and responsive layout
    │
    ├── images/
    │   └── screenshots, topology diagrams and project visuals
    │
    └── js/
        ├── app.js          # Page rendering and site behaviour
        ├── components.js   # Reusable UI components
        └── site-data.js    # Homelab, research and portfolio content
```

## Technology Stack

| Area                        | Technologies                                |
| --------------------------- | ------------------------------------------- |
| Virtualization              | Proxmox VE                                  |
| Firewall & Routing          | pfSense                                     |
| SIEM / XDR                  | Wazuh                                       |
| Network Security Monitoring | Security Onion                              |
| Adversary Emulation         | MITRE Caldera                               |
| Offensive Security          | Kali Linux                                  |
| Vulnerable Systems          | Metasploitable, vulnerable web applications |
| Windows Infrastructure      | Windows Server, Windows endpoints           |
| Linux Infrastructure        | Ubuntu Server                               |
| Containers                  | Docker, Portainer                           |
| AI Security                 | Ollama, local LLMs                          |
| Remote Administration       | Tailscale                                   |
| Frontend                    | HTML, CSS, JavaScript                       |
| Hosting                     | Vercel / GitHub Pages                       |

---

## Project Goals

The Cyberlab is built around three primary objectives:

**Build**
Design and operate security infrastructure rather than relying exclusively on preconfigured training environments.

**Attack**
Safely reproduce adversary techniques against controlled targets.

**Defend**
Collect telemetry, investigate activity, develop detections, and understand how attacks appear from the defender's perspective.

The long-term objective is to continuously develop the environment into a realistic security engineering and adversary-simulation platform covering traditional infrastructure, cloud technologies, containers, and AI systems.

---

## Responsible Use

This repository documents cybersecurity research performed within an isolated lab environment.

Techniques, tools, and demonstrations contained in this project are intended for:

* Authorized security testing
* Cybersecurity education
* Defensive research
* Security engineering
* Controlled adversary simulation

Do not perform security testing against systems, networks, applications, or infrastructure without explicit authorization.

---

## Status

**Active Development**

The Cyberlab is continuously evolving as new infrastructure, security controls, detection capabilities, vulnerable environments, adversary techniques, and AI security experiments are introduced.
