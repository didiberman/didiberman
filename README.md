<div align="center">
<pre>
██████╗  ██╗ ██████╗  ██╗
██╔══██╗ ██║ ██╔══██╗ ██║
██║  ██║ ██║ ██║  ██║ ██║
██║  ██║ ██║ ██║  ██║ ██║
██████╔╝ ██║ ██████╔╝ ██║
╚═════╝  ╚═╝ ╚═════╝  ╚═╝
</pre>
</div>

<pre>
$ kubectl describe deployment didi

Name:          didi
Role:          Cloud Platform Engineer @ idealo
Status:        Kubestronaut
Focus:         Managed EKS at scale · Internal Developer Platforms
               Supply Chain Security
Exploring:     Crossplane · Backstage · kagent

Events:
  Reason           Message
  ------           -------
  JoinedTeam       <b>Cloud Platform Engineer @ idealo</b> - Runtime team, building
                   mEKS: the managed EKS platform internal product teams
                   ship on
  ProjectLaunched  <a href="https://github.com/didiberman/kubewhy">kubewhy</a> - an LLM assistant that root-causes
                   Kubernetes issues with evidence
  BlogPublished    <a href="https://didibe.dev/blog/argocd-repo-server-flaw">The Argo CD Vulnerability That Spreads From One Pod</a>
                   <a href="https://didibe.dev/blog/argocd-repo-server-flaw">to Your Entire Cluster</a>: one compromised pod reaches the
                   repo-server and escalates to full cluster control - still no
                   patch, but one NetworkPolicy shuts the door
  BlogPublished    <a href="https://didibe.dev/blog/trivy-supply-chain-attack">The Trivy CI/CD Hack</a>: hijacked pipeline secrets
                   and the Kubernetes clusters they could reach
  BlogPublished    <a href="https://didibe.dev/blog/ai-accelerated-aws-compromise">An AI Broke Into AWS Faster Than You Can Imagine</a>: four
                   stolen keys, one IP, same second - how it happened and what stops it
</pre>

<p align="center">
  🔗 <a href="https://didibe.dev">didibe.dev</a>
</p>

---

```console
$ kubectl config current-context
```

**Cloud Platform Engineer @ idealo** — Runtime team

I work on **mEKS**, idealo's managed EKS platform: the Kubernetes foundation that
internal product teams run their services on. 

---

```console
$ kubectl get projects -l tier=featured
```

- 🧠 **[kubewhy](https://github.com/didiberman/kubewhy)** - Read-only Kubernetes assistant: an LLM inspects the cluster step by step, explains each check in plain English, and returns the root cause with evidence.
- 🏗️ **[eks-idp-platform](https://github.com/didiberman/eks-idp-platform)** - Production IDP on AWS EKS: Terraform, ArgoCD, Kyverno, Cilium, Karpenter, and supply-chain-hardened CI (SHA-pinned actions, `harden-runner`, Trivy).
- ⚡ **[llm-d-eks-lab](https://github.com/didiberman/llm-d-eks-lab)** - llm-d v1.0 inference on EKS that autoscales on inference queue depth, not CPU: KEDA driven by llm-d's endpoint picker, Karpenter consolidating to zero GPUs when idle, no NAT Gateway. Terraform; a 3-hour practice session costs ~$0.40.
- 🔐 **[tokenguard-operator](https://github.com/didiberman/tokenguard-operator)** - Kubernetes operator that scores ServiceAccount least-privilege by comparing RBAC grants against audit-log usage and detects external IP token abuse. Go, Kubebuilder, controller-runtime.
- 🥷 **[NinjaDevOps](https://ninjadevops.com)** - Interactive DevOps challenge platform: 80+ real-world scenarios (Linux, Docker, CKA/CKAD/CKS) on live GCP VMs, all from a browser terminal.
- 🧬 **[vcluster-platform](https://github.com/didiberman/vcluster-platform)** - The isolation of a real cluster at the cost of a namespace: teams get virtual Kubernetes clusters by opening a PR, with GitOps tenant onboarding.
- 🛠️ **[self-service-idp](https://github.com/didiberman/kratix-platform)** - Self-service IDP assembled from open-source parts (Kratix, Backstage, Flux) on k3s - the work was the integration. One command deploys the whole stack.
- 🛡️ **[practical-aks](https://github.com/didiberman/practical-aks)** - Blank Azure subscription → Workload Identity-secured, Trivy-scanned AKS running a live LLM proxy, with supply-chain-hardened CI/CD ([the attack it defends against](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)).

<details>
<summary><code>$ kubectl get projects -l tier=platform</code> &nbsp;- 2 more platform builds</summary>
<br/>

- **[gke-production-patterns](https://github.com/didiberman/gke-production-patterns)** - Production-grade GKE reference architecture: Cloud SQL, Memorystore, Terraform, Helm, observability, Temporal workflows, incident response.
- **[Sovereign-Mesh](https://github.com/didiberman/sovereign-mesh-k8s)** - Multi-tenant AI PaaS on Hetzner: vLLM, Qdrant, and TEI on a hardened K3s cluster with tenant isolation and ArgoCD GitOps.

</details>

---

```console
$ helm list -n stack
```

**Kubernetes & Orchestration** &nbsp;
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=flat&logo=helm&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Karpenter](https://img.shields.io/badge/Karpenter-FF9900?style=flat&logo=amazonaws&logoColor=white)
![KEDA](https://img.shields.io/badge/KEDA-009BDB?style=flat&logo=kubernetes&logoColor=white)
![vCluster](https://img.shields.io/badge/vCluster-F5821F?style=flat&logoColor=white)

**GitOps & IDP** &nbsp;
![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=flat&logo=argo&logoColor=white)
![Flux](https://img.shields.io/badge/Flux-5468FF?style=flat&logo=flux&logoColor=white)
![Kratix](https://img.shields.io/badge/Kratix-6C36A9?style=flat&logoColor=white)
![Backstage](https://img.shields.io/badge/Backstage-9BF0E1?style=flat&logo=backstage&logoColor=black)
![Crossplane](https://img.shields.io/badge/Crossplane-E7526A?style=flat&logo=crossplane&logoColor=white)

**Cloud & Infra** &nbsp;
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonwebservices&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)

**AI, Workflows & Automation** &nbsp;
![kagent](https://img.shields.io/badge/kagent-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Temporal](https://img.shields.io/badge/Temporal-000000?style=flat&logo=temporal&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat&logo=n8n&logoColor=white)

**Security** &nbsp;
![Trivy](https://img.shields.io/badge/Trivy-1904DA?style=flat&logo=aquasecurity&logoColor=white)
![harden-runner](https://img.shields.io/badge/harden--runner-00A651?style=flat&logo=githubactions&logoColor=white)

---

```console
$ kubectl get certifications

CKA ✓   CKAD ✓   CKS ✓   KCNA ✓   KCSA ✓   AWS-SAA ✓   →   KUBESTRONAUT 🧑‍🚀
```

<details>
<summary><code>$ kubectl get projects -n archive</code> &nbsp;- older experiments</summary>
<br/>

- [k0s-hetzner-cluster](https://github.com/didiberman/k0s-hetzner-cluster) - 2-node k0s cluster on Hetzner via Terraform
- [terraform-aws-chatops-site](https://github.com/didiberman/terraform-aws-chatops-site) - Deploy static sites by texting a Telegram bot
- [youtube-comment-classifier-mlops](https://github.com/didiberman/youtube-comment-classifier-mlops) - MLOps pipeline with FastAPI + K3s
- [youtube-channel-intelligence](https://github.com/didiberman/youtube-channel-intelligence) - Serverless YouTube monitoring + AI analysis on GCP

</details>

---

<p align="center">
  📖 Off the clock: I wrote <a href="https://www.amazon.de/dp/B0CYM7Y2L1">Social Freedom Unleashed</a>, a book on overcoming social anxiety.
</p>
