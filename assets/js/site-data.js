"use strict";

window.SITE_DATA = {
  brand: { name: "KARABO", accent: "CYBERLAB", tagline: "Learning. Building. Securing." },

  navigation: [
    { label: "home", href: "index.html", page: "home" },
    { label: "whoami", href: "about.html", page: "about" },
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
    ["focus", "Blue Team • SOC Operations • Network Security • Threat Detection • Incident Response • Cloud Security"],
    ["homelab", "Dual-Node Proxmox Lab"],
    ["toolkit", "pfSense • OPNsense • Wazuh • Security Onion • Kali Linux • Nessus • Burp Suite • MITRE Caldera • MITRE ATT&CK • Docker • Metasploitable2 • Tailscale"],
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
  status: "documented",
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
    "Network Monitoring",
    "Traffic Mirroring",
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
    "Wazuh",
    "tcpdump",
    "Proxmox"
  ],

    summary:
      "Incident 001 investigated controlled network reconnaissance originating from Kali Linux against the Ubuntu server hosting deliberately vulnerable web applications. The activity was correlated across Nmap, pfSense and Security Onion. Zeek recorded the reconnaissance as connection telemetry, while Suricata generated scan-related detections including Nmap user-agent and SSH scanning alerts.",

  findings: [
    "Kali Linux at 10.10.1.50 was used as the reconnaissance source against the VLAN30 Ubuntu application server at 10.10.30.51.",
    "Nmap generated controlled TCP SYN reconnaissance against services including ports 22, 80, 443 and 8080.",
    "Initial Nmap activity was not clearly visible in pfSense because the traffic was matching the broad Default allow LAN to any rule without dedicated logging for the reconnaissance path.",
    "Dedicated logged pass rules were created on the pfSense LAN interface for Kali Linux traffic toward VLAN10, VLAN20 and VLAN30.",
    "The Kali-specific firewall rules were positioned above the broader Default allow LAN to any rule so the reconnaissance traffic matched the dedicated logged rules first.",
    "pfSense subsequently recorded the Kali reconnaissance traffic, including TCP SYN connections from 10.10.1.50 toward 10.10.30.51 on ports 22, 80, 443 and 8080.",
    "A pfSense logging issue was identified when firewall events stopped updating because syslogd was not running. After the service was restored, current firewall events became visible again.",
    "pfSense remote syslog delivery to Wazuh was successfully verified over UDP 514, with pfSense identified in Wazuh by location 10.10.1.254.",
    "The Nmap-specific pfSense PASS events did not surface as normal Wazuh Threat Hunting alerts with the existing Wazuh ruleset.",
    "Security Onion initially could not observe the reconnaissance because its monitoring interface was not receiving mirrored unicast traffic.",
    "A dedicated Security Onion sniffing interface, enp6s19, was configured and added to the Security Onion monitoring bond.",
    "Proxmox traffic mirroring was configured to copy Kali network traffic to the Security Onion sniffing interface.",
    "tcpdump confirmed that Security Onion received the mirrored SYN scan traffic between 10.10.1.50 and 10.10.30.51.",
    "Zeek successfully recorded the reconnaissance in zeek.conn telemetry, showing the Kali source, Ubuntu destination, TCP transport and destination ports 22, 80, 443 and 8080.",
    "Detailed Zeek connection records confirmed individual TCP connection attempts from Kali toward the Ubuntu application server.",
    "Suricata generated multiple scan-related alerts after additional Nmap reconnaissance was performed against the monitored environment.",
    "Suricata detections included ET SCAN Nmap Scripting Engine User-Agent Detected and ET SCAN Possible Nmap User-Agent Observed.",
    "Suricata also generated ET SCAN Potential SSH Scan and ET SCAN Potential SSH Scan OUTBOUND detections during the reconnaissance activity.",
    "The Nmap Scripting Engine detection demonstrated that application-layer reconnaissance could trigger identifiable IDS signatures in addition to the connection metadata recorded by Zeek.",
    "The combination of Zeek connection telemetry and Suricata signature-based alerts provided both behavioural visibility and explicit detection of the reconnaissance activity.",
    "Security Onion correlated the reconnaissance through two complementary detection sources: Zeek recorded the underlying network connections while Suricata generated IDS alerts when the scan matched enabled Emerging Threats signatures.",
    "The reconnaissance activity maps to MITRE ATT&CK T1046 — Network Service Scanning under the Discovery tactic."
  ],

  lessons: [
    "Successful network activity does not automatically mean sufficient security telemetry is being generated for investigation.",
    "Firewall rule logging must be enabled on the rule that actually matches the traffic in order to provide useful visibility.",
    "pfSense evaluates traffic on the interface where it enters the firewall, so reconnaissance originating from Kali Linux was logged through dedicated LAN rules.",
    "Specific firewall rules placed above broad allow rules improve monitoring and make traffic associated with a particular host or experiment easier to identify.",
    "Logging Kali-to-VLAN traffic improves visibility and auditability, but it is not firewall hardening because the traffic is still permitted.",
    "True firewall hardening would require least-privilege rules, reduced broad access and explicit restrictions on unnecessary inter-VLAN communication.",
    "Security Onion does not require endpoint agents for Zeek or Suricata network monitoring; the monitoring interface must receive a copy of the network traffic.",
    "Connecting a sniffing interface to a virtual bridge is not sufficient by itself to observe unicast traffic between other virtual machines.",
    "Traffic mirroring was required on Proxmox so Security Onion could inspect the Kali reconnaissance traffic.",
    "tcpdump is useful for validating packet visibility before troubleshooting Zeek or Suricata at the application layer.",
    "Zeek can provide detailed network metadata even when the same activity does not trigger an IDS signature.",
    "Suricata detection depends on both the enabled ruleset and the characteristics of the reconnaissance traffic; additional Nmap activity triggered several Emerging Threats scan signatures.",
    "Zeek connection telemetry can reveal reconnaissance patterns by showing one source communicating with the same destination across multiple ports in a short period.",
    "Wazuh, pfSense and Security Onion provide different perspectives on the same activity and should not be expected to produce identical detections.",
    "Correlating source addresses, destination addresses, ports, protocols and timestamps across multiple security tools is an important SOC investigation skill.",
    "The experiment demonstrated the difference between telemetry collection and alert generation.",
    "The activity maps to MITRE ATT&CK T1046 — Network Service Scanning."
  ],

  body: [
    "Incident 001 focused on controlled network discovery and reconnaissance within the segmented cybersecurity lab. Kali Linux at 10.10.1.50 was used as the reconnaissance source, while the Ubuntu server at 10.10.30.51 hosted the deliberately vulnerable application environment on VLAN30.",

    "Nmap was used to identify reachable systems, enumerate exposed TCP services and establish what information could be gathered before interacting directly with the vulnerable applications. The reconnaissance included controlled TCP SYN probes against services such as SSH, HTTP, HTTPS and alternative web service ports.",

    "The scan generated traffic toward ports including 22, 80, 443 and 8080 on the Ubuntu application server. This provided a controlled example of network service scanning that could be followed through the lab's defensive monitoring stack.",

    "During initial testing, the Nmap activity was not clearly visible in the pfSense firewall logs. Investigation showed that Kali traffic was being permitted by the broad Default allow LAN to any rule, which did not provide the dedicated logging required for this experiment.",

    "To improve visibility, dedicated pass rules were created on the pfSense LAN interface for Kali Linux at 10.10.1.50. Separate logged rules were configured for VLAN10 at 10.10.10.0/24, VLAN20 at 10.10.20.0/24 and VLAN30 at 10.10.30.0/24. These rules were placed above the broader default LAN allow rule.",

    "After applying the dedicated rules, pfSense clearly recorded Kali-generated TCP SYN traffic toward the Ubuntu server. Events showed 10.10.1.50 communicating with 10.10.30.51 on ports 22, 80, 443 and 8080, providing firewall-level evidence of the reconnaissance activity.",

    "A separate pfSense logging issue was also identified during the investigation. The firewall clock was correct, but the filter log had stopped receiving current events because syslogd was not running. After restoring the logging service, current firewall events immediately began appearing again.",

    "pfSense was also configured to forward syslog events to the Wazuh Manager over UDP port 514. Network capture confirmed delivery from the pfSense address at 10.10.1.254 to the Wazuh server. Wazuh successfully received pfSense-originated system events, although the Nmap-related PASS events did not surface as normal Threat Hunting alerts with the existing Wazuh ruleset.",

    "Security Onion was then used to investigate the same reconnaissance from a network-monitoring perspective. Although Zeek and Suricata were running, the Nmap traffic was initially absent because the Security Onion sniffing interface was not receiving a copy of the unicast traffic generated between Kali and the VLAN30 target.",

    "The dedicated Security Onion sniffing interface enp6s19 was added to the monitoring configuration and attached to the Security Onion monitoring bond. Proxmox traffic mirroring was then configured so that network traffic from the Kali virtual machine was copied to the Security Onion sniffing interface.",

    "Packet capture with tcpdump confirmed that Security Onion was receiving the mirrored reconnaissance traffic. SYN packets from 10.10.1.50 toward 10.10.30.51 were observed on ports 22, 80, 443 and 8080, together with the corresponding responses from the target.",

    "Once packet visibility was established, Zeek successfully generated zeek.conn telemetry for the scan. Security Onion Hunt displayed multiple connection records from the same Kali source to the Ubuntu destination across ports 22, 80, 443 and 8080 at the same timestamp, providing clear network-level evidence of service enumeration.",

    "Individual Zeek event details provided additional context including the source IP, source port, destination server, destination port, TCP transport and Security Onion as the observing platform. This demonstrated how Zeek can preserve useful connection metadata even when the traffic does not generate a traditional IDS alert.",

   "Suricata was reviewed for the same reconnaissance activity after additional Nmap scans were generated from Kali Linux. Security Onion produced multiple Emerging Threats scan detections, including ET SCAN Nmap Scripting Engine User-Agent Detected, ET SCAN Possible Nmap User-Agent Observed, ET SCAN Potential SSH Scan and ET SCAN Potential SSH Scan OUTBOUND. These alerts demonstrated that the reconnaissance had progressed beyond passive connection visibility and was now matching enabled IDS signatures.",

    "The investigation demonstrated the difference between network telemetry and explicit detection. pfSense recorded the routed firewall connections, Zeek preserved detailed connection metadata across the scanned ports, and Suricata generated IDS alerts when reconnaissance behaviour matched enabled signatures. Wazuh separately confirmed ingestion of pfSense syslog telemetry, although the Nmap activity did not produce a dedicated Wazuh Threat Hunting alert with the existing ruleset.",

    
    
    "The activity is mapped to MITRE ATT&CK technique T1046 — Network Service Scanning within the Discovery tactic. Incident 001 demonstrates how controlled reconnaissance can be investigated by correlating offensive activity with firewall, network-monitoring and SIEM telemetry across a segmented virtual lab.",

    "Incident 001 is considered complete. The investigation successfully demonstrated Nmap reconnaissance, pfSense firewall logging, Security Onion packet visibility, Zeek connection analysis, Suricata detection validation and cross-platform telemetry correlation."
  ],

  images: [
    {
      src: "assets/images/incident-001-nmap.png",
      alt: "Nmap reconnaissance from Kali Linux against Ubuntu Docker server",
      caption:
        "Kali Linux performing controlled TCP reconnaissance against the Ubuntu application server in VLAN30.",
      afterParagraph: 3
    },

    {
      src: "assets/images/incident-001-pfsense-rules.png",
      alt: "pfSense logged rules for Kali Linux reconnaissance traffic",
      caption:
        "Dedicated pfSense LAN rules configured for Kali Linux traffic toward VLAN10, VLAN20 and VLAN30, with logging enabled for reconnaissance visibility.",
      afterParagraph: 5
    },

    {
      src: "assets/images/incident-001-pfsense-logs.png",
      alt: "pfSense firewall logs showing Nmap reconnaissance traffic",
      caption:
        "pfSense firewall telemetry showing TCP SYN reconnaissance from Kali Linux at 10.10.1.50 toward the VLAN30 Ubuntu server at 10.10.30.51.",
      afterParagraph: 6
    },

    {
      src: "assets/images/incident-001-security-onion-status.png",
      alt: "Security Onion service status showing Zeek and Suricata running",
      caption:
        "Security Onion service health after restoring the Zeek monitoring service and preparing the platform for network reconnaissance analysis.",
      afterParagraph: 10
    },

    {
      src: "assets/images/incident-001-zeek-connections.png",
      alt: "Zeek connection telemetry showing Nmap reconnaissance",
      caption:
        "Zeek connection telemetry showing Kali Linux at 10.10.1.50 probing the Ubuntu server at 10.10.30.51 across TCP ports 22, 80, 443 and 8080.",
      afterParagraph: 12
    },

    {
      src: "assets/images/incident-001-zeek-event-detail.png",
      alt: "Detailed Zeek connection event from the reconnaissance scan",
      caption:
        "Detailed Zeek connection event showing the Kali source, Ubuntu destination, TCP transport and destination service observed during the reconnaissance scan.",
      afterParagraph: 13
    },

      {
        src: "assets/images/incident-001-suricata-alerts.png",
        alt: "Suricata alerts generated during Nmap reconnaissance",
        caption:
          "Security Onion Suricata alerts generated during the reconnaissance activity, including Nmap user-agent detections and potential SSH scanning signatures.",
        afterParagraph: 14
      },

    {
      src: "assets/images/incident-001-suricata-alert-detail.png",
      alt: "Detailed Suricata Nmap reconnaissance alert",
      caption:
        "Detailed Suricata event showing an Nmap-related reconnaissance signature and the associated source, destination and network context.",
      afterParagraph: 15
    },

    {
      src: "assets/images/incident-001-wazuh.png",
      alt: "Wazuh receiving pfSense syslog telemetry",
      caption:
        "Wazuh confirmed pfSense-originated syslog ingestion from 10.10.1.254, providing an additional telemetry source during Incident 001.",
      afterParagraph: 8
    }
  ]
},


    {
  id: "incident-002-01-sql-injection",
  category: "Cybersecurity Lab",
  status: "documented",
  featured: true,

  title: "Incident 002.1 — Web Application Attacks: SQL Injection",
  date: "2026-09-21",

  tags: [
    "Web Application Security",
    "SQL Injection",
    "DVWA",
    "Burp Suite",
    "Burp Repeater",
    "Kali Linux",
    "MariaDB",
    "Security Onion",
    "Zeek",
    "Apache",
    "OWASP Top 10",
    "OWASP WSTG",
    "A05:2025 Injection",
    "WSTG-INPV-05",
    "CWE-89",
    "Blue Team",
    "Web Security Testing"
  ],

  tools: [
    "Kali Linux",
    "Burp Suite",
    "Burp Proxy",
    "Burp Repeater",
    "DVWA",
    "Apache",
    "MariaDB",
    "Security Onion",
    "Zeek"
  ],

  summary:
    "Performed controlled manual SQL injection testing against DVWA from Kali Linux using Burp Suite Proxy and Repeater. The investigation progressed from a normal baseline request to SQL syntax manipulation, Boolean-based injection, column enumeration and UNION-based testing, while correlating the activity with Security Onion, Zeek and Apache web-server telemetry.",

  findings: [
    "The DVWA SQL Injection page accepted a user-controlled GET parameter named 'id'.",
    "A normal request using id=1 returned a single user record for the administrator account, establishing the baseline application behaviour.",
    "Appending a single quote to the id parameter generated a MariaDB SQL syntax error, confirming that user input was affecting the structure of the backend database query.",
    "The Boolean-based payload 1' OR '1'='1' # caused multiple user records to be returned instead of a single record.",
    "Returned records included admin, Gordon Brown, Hack Me, Pablo Picasso and Bob Smith, demonstrating that the injected Boolean condition altered the intended query logic.",
    "ORDER BY testing showed that ORDER BY 1 and ORDER BY 2 were accepted while ORDER BY 3 produced the error 'Unknown column 3 in order clause'.",
    "The ORDER BY behaviour indicated that the underlying SQL query returned two columns.",
    "A UNION SELECT NULL,NULL test executed successfully, confirming that a two-column UNION query could be appended to the original database query.",
    "An additional attempt to retrieve database-related information produced a database-function error because the supplied function syntax was incorrect, demonstrating the importance of validating payload syntax rather than assuming every request is successful.",
    "Burp Suite HTTP History recorded the sequence of manipulated requests sent to the vulnerable endpoint.",
    "Security Onion captured the activity between Kali Linux at 10.10.1.50 and the DVWA server at 10.10.30.129.",
    "Zeek generated HTTP, connection, file and weird telemetry for the communication with the DVWA server on TCP port 80.",
    "Apache access logs provided a server-side record of HTTP activity originating from the Kali Linux system.",
    "The activity demonstrates CWE-89 — Improper Neutralization of Special Elements used in an SQL Command.",
    "The vulnerability aligns with OWASP Top 10:2025 A05 — Injection and OWASP WSTG testing guidance WSTG-INPV-05 — Testing for SQL Injection."
  ],

  lessons: [
    "A baseline request should be established before attempting to manipulate an application parameter.",
    "Burp Proxy provides visibility into the actual HTTP requests generated by the browser before those requests reach the target application.",
    "Burp Repeater allows individual request parameters to be changed and resent while directly comparing application responses.",
    "A database error caused by a single quote can indicate that user-controlled data is being inserted directly into an SQL query.",
    "Error messages can unintentionally disclose backend technologies such as MariaDB and details about how the application processes input.",
    "Boolean-based SQL injection can be demonstrated by comparing a normal query result with the result of an always-true condition.",
    "The payload 1' OR '1'='1' # changed the query logic and returned records that should not have been returned by the original request.",
    "ORDER BY testing can help determine the number of columns returned by the underlying query.",
    "The failure of ORDER BY 3 after ORDER BY 1 and ORDER BY 2 succeeded indicated that the query contained two result columns.",
    "UNION SELECT should only be attempted after understanding the expected number of columns returned by the original query.",
    "UNION SELECT NULL,NULL confirmed that a compatible two-column query could be appended successfully.",
    "Failed payloads are useful evidence because they help reveal incorrect assumptions and provide additional information about the backend database.",
    "Manual testing provides a clearer understanding of how SQL injection works than immediately relying on automated tools such as sqlmap.",
    "Zeek can provide useful network evidence of web-application activity even when the traffic does not generate a dedicated Suricata alert.",
    "Correlating Burp requests with Zeek events and web-server logs provides both an attacker and defender perspective of the same activity.",
    "Prepared statements and parameterised queries prevent user-controlled values from being interpreted as executable SQL syntax."
  ],

  body: [
    "Incident 002.1 introduces web application security testing into the cybersecurity lab. The first investigation focuses on SQL injection against Damn Vulnerable Web Application (DVWA), a deliberately vulnerable application hosted inside the isolated lab environment.",

    "Kali Linux at 10.10.1.50 was used as the testing system while DVWA was hosted at 10.10.30.129. Burp Suite was positioned between the browser and the target application so that HTTP requests could be intercepted, inspected, modified and resent manually.",

    "Testing began by submitting the value 1 to the DVWA SQL Injection page. Burp identified the request as a GET request to /vulnerabilities/sqli/ with the user-controlled parameter id=1. The server returned a single record containing the admin first name and surname. This request established the normal baseline behaviour of the application.",

    "The captured request was then sent from Burp Proxy to Burp Repeater. Repeater was used throughout the experiment so that only the id parameter could be changed while the remaining session cookies, headers and request structure remained consistent.",

    "The first SQL injection test appended a single quote to the value, changing the parameter to id=1'. The application returned a MariaDB SQL syntax error. This demonstrated that the supplied value was influencing the syntax of a backend SQL statement rather than being handled purely as application data.",

    "A Boolean-based SQL injection test was then performed using the value 1' OR '1'='1' #. The additional expression evaluates to true, while the comment character prevents the remainder of the original statement from interfering with the injected condition.",

    "Instead of returning only the administrator record, the modified request returned multiple database records including admin, Gordon Brown, Hack Me, Pablo Picasso and Bob Smith. The difference between the normal request and the manipulated request confirmed that the application's query logic could be controlled through the id parameter.",

    "The next stage investigated the structure of the database query. ORDER BY tests were submitted incrementally. ORDER BY 1 and ORDER BY 2 were accepted, while ORDER BY 3 generated the response 'Unknown column 3 in order clause'. This demonstrated that the original SELECT statement returned two columns.",

    "With the column count identified, a UNION-based test was performed using UNION SELECT NULL,NULL. DVWA processed the request successfully and rendered an additional result. This confirmed that a second two-column SELECT statement could be combined with the application's original database query.",

    "A subsequent attempt was made to retrieve information through database functions. One request resulted in the message 'FUNCTION dvwa.dataset does not exist' because the submitted database-function syntax was incorrect. Rather than treating the request as successful, the failed response was retained as evidence of the testing process and database behaviour.",

    "Burp Suite HTTP History provided a chronological view of the SQL injection requests generated throughout the experiment. This made it possible to compare the original request, syntax-error tests, Boolean injection, ORDER BY enumeration and UNION requests from one interface.",

    "The same activity was investigated from the defensive side using Security Onion. A Hunt query for traffic from 10.10.1.50 to 10.10.30.129 revealed events generated while the SQL injection testing was taking place.",

    "Zeek recorded multiple datasets including zeek.http, zeek.conn, zeek.file and zeek.weird. The telemetry identified the Kali source address, dynamically allocated source ports, the DVWA destination address and TCP port 80. This demonstrated that the web attack could be reconstructed from network metadata even without relying exclusively on a signature-based alert.",

    "Apache access logs were also reviewed on the DVWA server. The logs provided the server-side perspective of requests generated from Kali Linux and can be correlated with Burp timestamps and Security Onion telemetry during later investigation stages.",

    "The experiment demonstrates the difference between sending an attack and understanding one. Burp Suite exposed how an HTTP parameter travelled from the browser into the application, while the database responses demonstrated how unsafe query construction allowed user-controlled input to alter SQL execution.",

    "The root cause of the vulnerability is the use of untrusted input inside a dynamically constructed database query without effective parameterisation. The appropriate remediation is to use prepared statements and parameterised queries so that supplied values remain data rather than becoming part of the SQL command structure.",

    "This investigation aligns with OWASP Top 10:2025 A05 — Injection, OWASP Web Security Testing Guide WSTG-INPV-05 — Testing for SQL Injection, and CWE-89 — Improper Neutralization of Special Elements used in an SQL Command.",

    "Incident 002 remains in progress. The SQL injection investigation establishes the methodology that will be reused for later web application testing: establish normal behaviour, capture the request with Burp Proxy, reproduce it in Repeater, manipulate one variable at a time, analyse the response, and then correlate the activity with network and endpoint telemetry.",

    "The next stages of Incident 002 will extend this methodology to reflected XSS, stored XSS, broken access control, authentication weaknesses, session and cookie weaknesses, command injection, directory traversal, local file inclusion, unsafe file upload, sensitive information exposure, security misconfiguration and API authorization testing."
  ],

  images: [
    {
      src: "assets/images/incident-002-sqli-baseline.png",
      alt: "DVWA SQL injection baseline request returning the administrator record",
      caption:
        "Baseline DVWA request using id=1. The application returns a single administrator record before any SQL manipulation is performed.",
      afterParagraph: 3
    },

    {
      src: "assets/images/incident-002-burp-baseline.png",
      alt: "Burp Suite Repeater showing the baseline SQL injection request",
      caption:
        "Burp Repeater showing the baseline GET request containing the user-controlled id parameter and the normal application response.",
      afterParagraph: 4
    },

    {
      src: "assets/images/incident-002-sqli-syntax-error.png",
      alt: "DVWA MariaDB SQL syntax error caused by a single quote",
      caption:
        "Appending a single quote to the id parameter generates a MariaDB SQL syntax error, demonstrating that user input is affecting the backend SQL statement.",
      afterParagraph: 5
    },

    {
      src: "assets/images/incident-002-sqli-boolean-repeater.png",
      alt: "Burp Repeater demonstrating Boolean based SQL injection",
      caption:
        "Burp Repeater response after submitting an always-true Boolean condition. Multiple database records are returned instead of the original single result.",
      afterParagraph: 6
    },

    {
      src: "assets/images/incident-002-sqli-boolean-result.png",
      alt: "DVWA returning multiple users after Boolean SQL injection",
      caption:
        "DVWA displaying multiple user records after the injected Boolean condition alters the intended SQL query logic.",
      afterParagraph: 7
    },

    {
      src: "assets/images/incident-002-sqli-orderby.png",
      alt: "ORDER BY 3 SQL error identifying the number of query columns",
      caption:
        "ORDER BY enumeration produced an error at column three after the first two positions succeeded, indicating that the underlying query returns two columns.",
      afterParagraph: 8
    },

    {
      src: "assets/images/incident-002-sqli-union-null.png",
      alt: "Burp Suite demonstrating UNION SELECT NULL NULL against DVWA",
      caption:
        "A two-column UNION SELECT NULL,NULL request executes successfully, confirming compatibility with the original database query.",
      afterParagraph: 9
    },

    {
      src: "assets/images/incident-002-burp-http-history.png",
      alt: "Burp Suite HTTP history containing SQL injection requests",
      caption:
        "Burp Proxy HTTP History showing the sequence of requests generated during manual SQL injection testing.",
      afterParagraph: 11
    },

    {
      src: "assets/images/incident-002-security-onion-zeek.png",
      alt: "Security Onion Zeek telemetry for DVWA SQL injection traffic",
      caption:
        "Security Onion Hunt showing Zeek HTTP, connection, file and weird telemetry between Kali Linux at 10.10.1.50 and the DVWA server at 10.10.30.129.",
      afterParagraph: 12
    },

    {
      src: "assets/images/incident-002-apache-access-log.png",
      alt: "Apache access logs generated during DVWA web application testing",
      caption:
        "Apache access logs provide the server-side view of HTTP requests originating from the Kali Linux testing system.",
      afterParagraph: 14
    }
  ]
},

    {
  id: "incident-002-02-reflected-xss",
  category: "Cybersecurity Lab",
  status: "documented",
  featured: true,

  title: "Incident 002.2 — Web Application Attacks: Reflected XSS",
  date: "2026-09-22",

  incident: "Incident 002 — Web Application Attacks",

  tags: [
    "Web Application Security",
    "Cross-Site Scripting",
    "Reflected XSS",
    "DVWA",
    "Burp Suite",
    "Burp Proxy",
    "Burp Repeater",
    "Kali Linux",
    "Security Onion",
    "Zeek",
    "Suricata",
    "Apache",
    "OWASP",
    "CWE-79",
    "Blue Team",
    "Web Security Testing"
  ],

  tools: [
    "Kali Linux",
    "Burp Suite",
    "Burp Proxy",
    "Burp Repeater",
    "DVWA",
    "Security Onion",
    "Zeek",
    "Suricata",
    "Apache"
  ],

  summary:
    "Performed controlled reflected cross-site scripting testing against DVWA using Burp Suite Proxy and Repeater. The investigation progressed from a normal reflected input baseline to HTML injection and script-tag submission, while Security Onion was used to correlate the activity with Zeek telemetry and a high-severity Suricata web application attack alert.",

  findings: [
    "The DVWA Reflected XSS page accepted a user-controlled GET parameter named 'name'.",
    "A normal request using the value Karabo-XSS-Test was reflected directly into the application response.",
    "Burp Proxy captured the request to /vulnerabilities/xss_r/ and exposed the user-controlled name parameter.",
    "The request was transferred to Burp Repeater so that the input could be modified while preserving the same session and request context.",
    "Submitting <b>Karabo-XSS-Test</b> caused the supplied value to be rendered as HTML rather than displayed as encoded text.",
    "The successful HTML rendering demonstrated that user-controlled markup was being inserted into the returned page without sufficient output encoding.",
    "A script-tag payload containing alert('Karabo-XSS-Test') was submitted through Burp Repeater to test whether executable JavaScript could be introduced into the reflected response.",
    "Security Onion recorded traffic from Kali Linux at 10.10.1.50 to the DVWA server at 10.10.30.129 on TCP port 80.",
    "Zeek generated supporting telemetry including zeek.http, zeek.conn, zeek.file and zeek.weird events for the web request.",
    "Suricata generated an alert with the signature 'ET WEB_SERVER Script tag in URI Possible Cross Site Scripting Attempt'.",
    "The Suricata event was classified as a Web Application Attack with high severity.",
    "The experiment demonstrated the difference between general network visibility from Zeek and signature-based malicious activity detection from Suricata.",
    "The vulnerability maps to CWE-79 — Improper Neutralization of Input During Web Page Generation."
  ],

  lessons: [
    "Reflected XSS occurs when user-controlled input is returned in an HTTP response and interpreted by the browser as active content.",
    "A baseline value should be tested first to understand normal application behaviour before introducing HTML or JavaScript.",
    "Burp Proxy makes it possible to identify exactly which HTTP parameter carries user-controlled input.",
    "Burp Repeater allows the same request to be reproduced and modified without repeatedly using the application form.",
    "Testing HTML markup before JavaScript helps determine whether the application is encoding output correctly.",
    "The successful rendering of a bold HTML tag demonstrated that the application was treating supplied markup as part of the page structure.",
    "Output encoding is an important defence because it ensures characters such as angle brackets are treated as text rather than executable markup.",
    "A reflected XSS request can leave evidence at multiple layers, including browser traffic, web-server requests, Zeek metadata and Suricata alerts.",
    "Zeek provides network and HTTP telemetry even when it is not making a malicious-versus-benign decision.",
    "Suricata can identify known malicious patterns in HTTP requests and classify them as web application attacks.",
    "The Suricata XSS alert provided stronger detection evidence than was observed during the earlier SQL injection exercise.",
    "Correlating source IP, destination IP, destination port, timestamps and alert signatures helps reconstruct web application attack activity.",
    "Manual testing makes it easier to understand the relationship between user input, HTTP requests, application responses and browser interpretation."
  ],

  body: [
    "Incident 002.2 continues the web application testing phase of the cybersecurity lab and focuses on reflected cross-site scripting against Damn Vulnerable Web Application (DVWA).",

    "Kali Linux at 10.10.1.50 was used as the testing system, while DVWA was hosted at 10.10.30.129. Burp Suite was positioned between the browser and the vulnerable application so that HTTP requests could be captured, inspected and modified manually.",

    "The investigation began by submitting the normal value Karabo-XSS-Test through the DVWA Reflected XSS form. The value was returned in the page response as part of the Hello message, establishing that the application reflected user-controlled input back into the HTML response.",

    "Burp Proxy captured the corresponding GET request to /vulnerabilities/xss_r/ with the parameter name=Karabo-XSS-Test. This established the specific request parameter responsible for carrying the user-controlled value.",

    "The captured request was then sent to Burp Repeater. Repeater allowed the name parameter to be changed while retaining the same target, session cookie and request structure used by the authenticated DVWA session.",

    "The first input-handling test replaced the baseline value with the HTML markup <b>Karabo-XSS-Test</b>. When the request was rendered, the supplied value appeared in bold. This confirmed that the application was inserting user-controlled HTML into the returned page rather than safely encoding the markup as text.",

    "The behaviour demonstrated an output-encoding weakness. A safer implementation would convert special HTML characters into encoded representations so that browser rendering treats the supplied value as plain text rather than part of the document structure.",

    "Testing then progressed from HTML markup to a JavaScript-oriented payload using a script element containing alert('Karabo-XSS-Test'). The request was submitted manually through Burp Repeater to observe how the application and monitoring environment handled the suspicious input.",

    "The request was then investigated from the defensive side using Security Onion. Traffic between the Kali Linux source at 10.10.1.50 and the DVWA server at 10.10.30.129 was visible in Security Onion Hunt on destination TCP port 80.",

    "Zeek generated multiple telemetry types associated with the request, including zeek.http, zeek.conn, zeek.file and zeek.weird. These records provided network-level evidence of the communication between the testing system and the vulnerable web server.",

    "Unlike the earlier SQL injection investigation, the XSS request also triggered a Suricata detection. The generated signature was ET WEB_SERVER Script tag in URI Possible Cross Site Scripting Attempt.",

    "Security Onion classified the Suricata event under Web Application Attack with a high severity label. This provided a clear example of signature-based intrusion detection identifying suspicious web application input.",

    "The experiment demonstrated an important distinction between telemetry and detection. Zeek recorded the underlying HTTP communication and connection metadata, while Suricata evaluated the request contents against detection rules and generated a security alert.",

    "From an offensive perspective, Burp showed how the application accepted and reflected user-controlled content. From a defensive perspective, Security Onion showed how the same HTTP request appeared as both network telemetry and a signature-based web application alert.",

    "The root cause of reflected XSS is insufficient output encoding of user-controlled input before it is inserted into an HTML response. Context-appropriate output encoding, input validation, secure templating practices and appropriate Content Security Policy controls can reduce the risk of script execution.",

    "The vulnerability maps to CWE-79 — Improper Neutralization of Input During Web Page Generation. The exercise forms part of Incident 002 — Web Application Attacks and follows the same manual testing methodology used during the earlier SQL injection investigation.",

    "The investigation reinforces the lab methodology of establishing normal behaviour first, capturing the request with Burp Proxy, reproducing it in Repeater, modifying one input at a time, analysing the application response and then correlating the resulting activity across defensive monitoring platforms.",

    "Incident 002.2 is documented as Reflected Cross-Site Scripting. The next stage of Incident 002 will focus on Stored XSS, where malicious input persists within the application and can affect subsequent users or sessions without requiring the payload to be included in every request."
  ],

  images: [
    {
      src: "assets/images/incident-002-02-xss-proxy-baseline.png",
      alt: "Burp Proxy capturing the baseline reflected XSS request",
      caption:
        "Burp Proxy capturing the baseline request containing the user-controlled name=Karabo-XSS-Test parameter.",
      afterParagraph: 4
    },

    {
      src: "assets/images/incident-002-02-xss-baseline-response.png",
      alt: "Burp response showing the reflected baseline value",
      caption:
        "The normal Karabo-XSS-Test value is reflected into the DVWA response, establishing the baseline application behaviour.",
      afterParagraph: 5
    },

    {
      src: "assets/images/incident-002-02-xss-html-injection.png",
      alt: "Burp Repeater showing HTML injection in the reflected XSS page",
      caption:
        "The <b> HTML element is accepted through the name parameter and rendered by the application, demonstrating insufficient output encoding.",
      afterParagraph: 6
    },

    {
      src: "assets/images/incident-002-02-xss-script-repeater.png",
      alt: "Burp Repeater submitting a script tag to the reflected XSS endpoint",
      caption:
        "Burp Repeater used to submit a script-tag payload against the reflected XSS endpoint while preserving the authenticated DVWA session.",
      afterParagraph: 8
    },

    {
      src: "assets/images/incident-002-02-xss-suricata-alert.png",
      alt: "Security Onion Suricata alert detecting a possible cross site scripting attempt",
      caption:
        "Suricata detected the script tag in the HTTP request and generated the signature ET WEB_SERVER Script tag in URI Possible Cross Site Scripting Attempt.",
      afterParagraph: 11
    },

    {
      src: "assets/images/incident-002-02-xss-security-onion-hunt.png",
      alt: "Security Onion Hunt showing Zeek and Suricata events for the XSS request",
      caption:
        "Security Onion Hunt correlating Zeek telemetry and the Suricata XSS alert between Kali Linux at 10.10.1.50 and DVWA at 10.10.30.129.",
      afterParagraph: 13
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

// {
//   id: "google-data-analysis",
//   category: "Research",
//   status: "in progress",
//   featured: false,

//   title: "Analysing My Google Digital Footprint",
//   date: "2026-08-10",

//   tags: [
//     "Google Takeout",
//     "Digital Footprint",
//     "Privacy",
//     "Data Analysis",
//     "OSINT",
//     "Personal Data"
//   ],

//   tools: [
//     "Google Takeout",
//     "Google My Activity",
//     "JSON",
//     "HTML",
//     "Data Analysis"
//   ],

//   summary:
//     "Downloaded and reviewed data associated with my Google account, created in 2014, to understand how more than a decade of searches and online activity can build a detailed personal digital footprint.",

//   findings: [
//     "A Google account used for more than a decade can accumulate a surprisingly detailed record of online activity.",
//     "Search history can reveal changing interests, habits and priorities across different stages of life.",
//     "Some of my earliest searches reflected my teenage interests, including MXit, kickflips, hardflips, Rodney Mullen and 3Square Skate Park.",
//     "The timestamps made the history feel much more personal, with some early skateboarding searches recorded on a Saturday at around 11:23.",
//     "Individual searches may seem insignificant, but years of activity viewed together can reveal a much broader picture of a person's interests and behaviour.",
//     "The exercise highlighted how much historical information can remain associated with an online account long after the user has forgotten about it."
//   ],

//   lessons: [
//     "Learned how to export and inspect personal account data using Google Takeout.",
//     "Developed a better understanding of how digital footprints are created over long periods of time.",
//     "Learned how timestamps and search history can be used to reconstruct past interests and behaviour.",
//     "Recognised the difference between information I remember sharing and information that accumulated passively through normal online activity.",
//     "Improved my awareness of data retention, privacy controls and account activity history.",
//     "Plan to analyse the dataset further and create visualisations showing how my interests and online activity changed over time."
//   ],

//   body: [
//     "I created my Google account in 2014, so I decided to download and review the data associated with it to understand what more than a decade of normal online activity could reveal about me.",

//     "Using Google Takeout and Google My Activity, I started going through historical searches and account activity. It was interesting, nostalgic and slightly unsettling to see how much information had accumulated from searches that I had completely forgotten about.",

//     "Two themes stood out in my earliest Google searches: MXit and skateboarding. My skating searches included kickflips, hardflips, Rodney Mullen and 3Square Skate Park. At the time I was around 14 and was trying to understand how professional skaters landed these tricks so I could attempt them myself.",

//     "What made the history even more interesting was the level of detail preserved with it. Some of those skating searches were made on a Saturday at around 11:23. More than a decade later, that timestamp made it surprisingly easy to imagine what I was probably doing that morning: watching skate videos, researching tricks and planning what I wanted to try next.",

//     "Looking through these searches was funny because MXit, skating and searching for trick tutorials felt completely ordinary at the time. I never considered that those small interactions would still exist years later and form part of a timeline showing what I was interested in as a teenager.",

//     "The biggest privacy lesson was that a digital footprint is not necessarily created by one sensitive search or one major event. It builds gradually. When thousands of ordinary searches, timestamps and interactions are viewed together, they can reveal patterns about interests, habits and how a person changes over time.",

//     "The next phase of this research is to analyse the exported data more systematically, including search activity by year, recurring topics and changes in interests over time. I also plan to create visualisations that show how my Google activity evolved from my teenage years into university, technology, cybersecurity and professional interests."
//   ],

//   images: []
// },

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
      id: "proxmox-storage-troubleshooting", category: "Proxmox Infrastructure", status: "documented", featured: true,
      title: "Proxmox Storage Troubleshooting — Protecting the Main Hypervisor", date: "2026-09-14", tags: ["Proxmox VE", "Storage", "LVM", "LVM-Thin", "Linux", "Disk Management", "Troubleshooting", "Virtualization", "Hypervisor"], tools: ["Proxmox VE 9.2.5", "Linux CLI", "LVM", "lsblk", "df", "pvesm"],
      findings: ["The Proxmox web interface initially showed the main root storage approaching full capacity.",
                "Using df -h confirmed that pve-root was approximately 96 GB, with around 74 GB used and 16 GB available after some cleanup.",
                "pvesm status showed that local storage and local-lvm were separate storage areas, with local-lvm still having significant free capacity.",
                "The VM storage pool was not the source of the immediate problem, so deleting virtual machine disks would not have solved the root filesystem issue.",
                "lsblk showed a single 558.7 GB logical disk presented to Proxmox, containing the root filesystem and the LVM-Thin VM storage pool.",
                "The server storage required careful investigation before deleting files because changes were being made directly on the main PVE hypervisor rather than inside a disposable VM."
      ],
      summary: "Investigated a storage capacity issue on the main Proxmox VE hypervisor after the root filesystem became critically full. The process involved identifying which storage area was actually running out of space, carefully cleaning unnecessary data and mapping the underlying LVM storage before making further changes.",
      lessons: ["Always confirm whether I am working on the main Proxmox hypervisor or inside a virtual machine before running deletion or storage commands.", "I had to keep reminding myself that this was not one of my disposable lab VMs — this was the PVE host supporting the entire environment.", "A mistake on the hypervisor has a much larger blast radius because it can affect multiple virtual machines and services at once.", "A full local storage filesystem does not automatically mean that local-lvm or the virtual machine disk pool is also full.", "df -h, pvesm status and lsblk provide different views of the storage environment and should be used together when troubleshooting.", "Deleting virtual machine disks should never be the first response to a Proxmox storage warning without first identifying which filesystem is actually full.", "Unused ISO images, backups, templates, logs and package caches are safer areas to investigate before touching VM disks.", "Understanding the difference between physical disks, logical volumes, LVM-Thin pools and Proxmox storage definitions is important before making storage changes.", "Infrastructure troubleshooting requires more caution than experimenting inside disposable lab machines because the underlying hypervisor supports the entire environment."],
      body: ["While working in the lab, I noticed that the main Proxmox node was reporting critically high storage utilisation. The web interface initially showed the root storage approaching full capacity, which meant I needed to investigate before the host ran completely out of space.",
              "The first important distinction was understanding exactly which storage was full. Running df -h showed that /dev/mapper/pve-root was approximately 96 GB, with around 74 GB used and 16 GB available after some cleanup. I also used pvesm status to compare this with local-lvm, which still had a significant amount of capacity available.",
              "This was where I had to tread carefully. Throughout the process I kept reminding myself that I was not working inside Kali, Ubuntu, Windows or another disposable VM. I was working directly on the main PVE hypervisor. Running the wrong deletion, LVM or storage command here could affect the entire lab rather than a single virtual machine.",
              "I avoided deleting anything from local-lvm because the investigation showed that this storage contained the virtual disks for many of the machines running in the environment. Removing something from there without understanding the storage layout could have resulted in the loss of one or more lab systems.",
              "Instead, I started with lower-risk cleanup and investigation. I used apt clean to clear the package cache and commands such as df -h, pvesm status and lsblk to understand how the storage was structured before deciding what could safely be removed.",
              "The lsblk output showed that Proxmox currently sees a 558.7 GB logical disk. Within this disk, the Proxmox installation has a 96 GB root logical volume and an approximately 428 GB LVM-Thin data pool containing the virtual machine disks. This explained why the root filesystem could become full even while the VM storage pool still had available capacity.",
              "The troubleshooting also raised another infrastructure question. The physical server contains multiple hard drives, but Proxmox currently sees them through a single logical storage device. This means I still need to investigate how the server's storage controller is presenting the physical disks and whether separating some of them into dedicated VM, backup or ISO storage would improve the design.",
              "This incident became more than a simple disk cleanup exercise. It reinforced the importance of understanding the storage architecture before making changes and thinking about the blast radius of every administrative command. Inside a disposable VM I can afford to experiment more aggressively. On the hypervisor, every command needs to be deliberate because the rest of the lab depends on it."
      ],
      images: [
        {
          src: "assets/images/proxmox-storage-full.png",
          alt: "Proxmox VE dashboard showing critically high root storage utilisation",
          caption:
            "The Proxmox node reporting critically high root filesystem utilisation, triggering an investigation into the storage layout before deleting any data.",
          afterParagraph: 1
        },

        {
          src: "assets/images/proxmox-storage-cli.png",
          alt: "Proxmox terminal showing df and pvesm storage information",
          caption:
            "Using df -h and pvesm status to distinguish between the Proxmox root filesystem and the LVM-Thin pool containing the virtual machine disks.",
          afterParagraph: 5
        },

        {
          src: "assets/images/proxmox-lsblk-storage.png",
          alt: "Proxmox lsblk output showing the logical disk and LVM storage layout",
          caption:
            "Mapping the storage with lsblk revealed the 96 GB pve-root filesystem and the larger LVM-Thin pool used by the lab virtual machines.",
          afterParagraph: 6
        }
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
  id: "hack-the-box-fawn",
  category: "Hack The Box",
  status: "completed",
  featured: true,

  title: "Hack The Box — Fawn",
  date: "2026-09-13",

  tags: [
    "Hack The Box",
    "Fawn",
    "Starting Point",
    "Linux",
    "Enumeration",
    "Reconnaissance",
    "FTP",
    "Anonymous FTP",
    "Penetration Testing",
    "CTF"
  ],

  tools: [
    "Hack The Box",
    "Kali Linux",
    "Nmap",
    "FTP"
  ],

  summary:
    "Completed the Hack The Box Fawn machine, focusing on network reconnaissance, FTP enumeration and the security risks associated with anonymous access to exposed services.",

  findings: [
    "Initial reconnaissance was performed against the target to identify exposed network services.",
    "Nmap identified TCP port 21 as open and revealed that the target was running an FTP service.",
    "The FTP service allowed anonymous authentication without requiring valid user credentials.",
    "Anonymous FTP access exposed files stored on the remote server.",
    "The exposed FTP service demonstrated how weak service configuration can unintentionally disclose sensitive information.",
    "The challenge reinforced the importance of enumerating discovered services rather than relying only on the initial port scan.",
    "FTP configuration should restrict anonymous access unless there is a specific business requirement for it.",
    "The machine was successfully completed as part of my Hack The Box Starting Point progression."
  ],

  lessons: [
    "Port scanning identifies the attack surface, but service enumeration reveals how that attack surface can actually be used.",
    "Nmap service detection helps identify the protocols and applications running behind open ports.",
    "FTP traditionally operates on TCP port 21 for control connections.",
    "Anonymous FTP can allow unauthenticated users to access files when the service is improperly configured.",
    "Default or permissive service configurations can introduce security weaknesses without requiring sophisticated exploitation.",
    "Testing authentication options should form part of a structured service-enumeration methodology.",
    "Simple configuration weaknesses can sometimes provide access without exploiting a software vulnerability.",
    "The exercise reinforces the reconnaissance and enumeration methodology already being practised within my cybersecurity homelab."
  ],

  body: [
    "The second machine in my Hack The Box Starting Point progression was Fawn. The exercise focused on identifying and investigating an exposed FTP service and understanding the risks created by insecure service configuration.",

    "I began the assessment by performing reconnaissance against the target using Nmap. The objective was to identify reachable ports, determine which services were listening and identify potential areas for further enumeration.",

    "The scan identified TCP port 21 as open, indicating that the target was running an FTP service. Instead of treating the open port as the final result of reconnaissance, the next step was to interact directly with the service and investigate how it was configured.",

    "During FTP enumeration, I discovered that the server permitted anonymous authentication. This meant that valid user credentials were not required to establish a session with the FTP server.",

    "After connecting anonymously, I was able to enumerate the files available through the service and retrieve the required challenge file. This demonstrated how an exposed service can disclose information even without a complex vulnerability or exploit.",

    "Fawn reinforced an important penetration-testing principle: discovering an open port is only the beginning of the investigation. Each identified service should be enumerated to understand its configuration, authentication requirements and potential exposure.",

    "From a defensive perspective, anonymous FTP should be disabled unless there is a legitimate requirement for public file access. Organisations should also limit network exposure, enforce appropriate authentication and monitor access to externally reachable services.",

    "Compared with the previous Meow machine, Fawn continued building the same core methodology while introducing a different network service. Meow focused on Telnet enumeration, while Fawn introduced FTP and anonymous service access.",

    "The exercise forms part of my ongoing Hack The Box progression alongside my cybersecurity homelab, where I am developing a repeatable workflow of reconnaissance, enumeration, investigation and documentation."
  ],

  images: [
    {
      src: "assets/images/htb-fawn-nmap.png",
      alt: "Nmap reconnaissance against Hack The Box Fawn machine",
      caption:
        "Initial Nmap reconnaissance identifying the FTP service exposed on TCP port 21.",
      afterParagraph: 2
    },

    {
      src: "assets/images/htb-fawn-ftp.png",
      alt: "FTP connection to Hack The Box Fawn machine",
      caption:
        "Connecting to the exposed FTP service and testing anonymous authentication.",
      afterParagraph: 4
    },

    {
      src: "assets/images/htb-fawn-files.png",
      alt: "Files discovered through anonymous FTP access on Fawn",
      caption:
        "Enumerating files available through the anonymously accessible FTP service.",
      afterParagraph: 5
    },

    {
      src: "assets/images/htb-fawn-completed.png",
      alt: "Hack The Box Fawn machine completed",
      caption:
        "Successful completion of the Fawn Starting Point machine.",
      afterParagraph: 8
    }
  ],

  links: [
    {
      label: "View Fawn on Hack The Box",
      url: "https://app.hackthebox.com/machines/Fawn"
    }
  ]
},

    {
  id: "hack-the-box-meow",
  category: "Hack The Box",
  status: "completed",
  featured: true,

  title: "Hack The Box — Meow",
  date: "2026-09-13",

  tags: [
    "Hack The Box",
    "Meow",
    "Starting Point",
    "Linux",
    "Enumeration",
    "Reconnaissance",
    "Telnet",
    "Penetration Testing",
    "CTF"
  ],

  tools: [
    "Hack The Box",
    "Kali Linux",
    "Nmap",
    "Telnet"
  ],

  summary:
    "Completed the Hack The Box Meow machine as part of my practical cybersecurity training, applying basic reconnaissance, service enumeration and remote access techniques in a controlled environment.",

  findings: [
    "The machine was reachable through the Hack The Box lab network and required basic enumeration before attempting access.",
    "Nmap reconnaissance was used to identify exposed services on the target.",
    "The scan revealed the Telnet service as an accessible attack surface.",
    "The exposed service allowed further interaction with the target system.",
    "Successful access demonstrated how insecure or poorly configured remote management services can expose systems to compromise.",
    "The machine reinforced the importance of identifying open ports and understanding the purpose of exposed network services.",
    "The challenge was completed successfully and the machine was pwned on 13 September 2026.",
    "The achievement awarded 150 XP on Hack The Box."
  ],

  lessons: [
    "Basic reconnaissance remains one of the most important stages of a penetration testing workflow.",
    "Open ports can reveal valuable information about the services and technologies running on a target.",
    "Nmap is useful for quickly identifying reachable services before deeper investigation begins.",
    "Legacy remote-access protocols such as Telnet can introduce significant security risks when exposed or poorly secured.",
    "Enumeration should be methodical rather than immediately attempting exploitation.",
    "Even beginner machines provide useful practice for building a repeatable penetration testing methodology.",
    "Working through Hack The Box complements the practical experimentation already being performed within my own cybersecurity homelab."
  ],

  body: [
    "As part of my continued practical cybersecurity training, I completed the Meow machine on Hack The Box. The machine forms part of the Hack The Box Starting Point environment and focuses on fundamental reconnaissance and service enumeration skills.",

    "The exercise began by establishing connectivity to the Hack The Box target and performing network reconnaissance using Nmap. The objective was to identify exposed ports and determine which services were available for further investigation.",

    "The scan identified an exposed Telnet service. This provided the main path for interacting with the machine and demonstrated why legacy remote administration protocols can create security risks when they are exposed or configured without appropriate authentication controls.",

    "After identifying the service, further enumeration and interaction with Telnet allowed access to the target environment. The machine was successfully compromised and the challenge was completed.",

    "Although Meow is an introductory Hack The Box machine, the workflow closely reflects the same methodology used in my cybersecurity homelab: discover the target, enumerate exposed services, investigate the available attack surface and document the results.",

    "The challenge also reinforced that successful penetration testing does not always begin with complex exploitation. Careful reconnaissance and understanding exposed services can often reveal the most important weaknesses first.",

    "Completing the machine earned 150 XP on Hack The Box and adds another practical exercise to my growing cybersecurity portfolio.",

    "Future Hack The Box machines will be documented using the same approach, with additional focus on enumeration methodology, vulnerabilities discovered, exploitation techniques, privilege escalation and lessons learned."
  ],

  images: [
    {
      src: "assets/images/htb-meow-nmap.png",
      alt: "Nmap reconnaissance against Hack The Box Meow machine",
      caption:
        "Initial Nmap reconnaissance used to identify exposed services on the Hack The Box Meow target.",
      afterParagraph: 2
    },

    {
      src: "assets/images/htb-meow-telnet.png",
      alt: "Telnet connection to Hack The Box Meow machine",
      caption:
        "Interaction with the exposed Telnet service discovered during enumeration.",
      afterParagraph: 3
    },

    {
      src: "assets/images/htb-meow-root.png",
      alt: "Successful access to Hack The Box Meow machine",
      caption:
        "Successful access to the Meow machine after completing the enumeration process.",
      afterParagraph: 4
    },

    {
      src: "assets/images/htb-meow-achievement.png",
      alt: "Hack The Box Meow achievement",
      caption:
        "Hack The Box achievement confirming completion of the Meow machine on 13 September 2026.",
      afterParagraph: 7
    }
  ],

  links: [
    {
      label: "View Hack The Box Achievement",
      url: "https://labs.hackthebox.com/achievement/machine/3965526/394"
    }
  ]
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
