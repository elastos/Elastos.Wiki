---
title: Basic Security Considerations
---

### Environment

- Use WIFI in public areas with caution (such as hotels, coffee shops, etc.)
- Avoid using unencrypted wireless networks

### Personnel

- Need to have professional ability to organize operation and maintenance implementation
- Need to be familiar with technology, understand process, follow norms
- Unrelated personnel are prohibited from accessing important network information

### Facilities

- Choose cloud services from major international companies (AWS Global, Google Cloud, MS Azure, etc.)
- Subscription to commercial support services to receive technical support as quickly as possible
- Choose an international geographical area to place facilities in order to obtain good connectivity with the main network
- Add 2FA login to avoid cloud service account hacking
- Treat API keys with caution, if there is no need for automation, prohibit or do not generate apikey
- Use special equipment to operate the facility

### Communication

- Sign and encrypt communication
- Do not open emails from unknown sources
- Avoid transmitting private keys over public networks

### Login

- Log in to the server using a certificate or a proxy solution (AWS Systems Manager)
- It is forbidden to log in to the server facility with username and password
- Lock the IP, only the specific authorized IP can log in to the server facility
- Eliminate unnecessary network-wide authorization (0.0.0.0/0)

### System

- Timely patch the operating system
- The server uses a new version of the kernel (4.4+)

### Ports

- Do not open unnecessary ports
- Disable RPC port

### Version

- Obtain the software version from official channels
- Before installing or running the software, check the version source and verify the content

### Service

- Enable advanced protection (AWS Shield, Cloudflare, Incapsula, etc.)
- Enable TLS
- Enable WAF
- Prohibit starting node services as privileged users
- Configure the number of P2P single IP node connections
- Configure P2P with timeout mechanism

### Logs

- Recording (such as AWS FlowLog) and analyzing network logs
- Record node log

### Backup

- Make an offline cold backup of the private key
