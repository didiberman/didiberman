# Didi Berman

**Cloud Platform Engineer (AWS & Kubernetes / EKS)** · **CNCF Kubestronaut** · **[didibe.dev](https://didibe.dev)**

I work on a Runtime platform team building and operating **mEKS**—a managed EKS platform that internal product teams ship on. My focus is fleet-scale Kubernetes on AWS, internal developer platforms, GPU/LLM inference autoscaling, and supply-chain-hardened CI/CD.

---

## Featured Projects

**[llm-d-eks-lab](https://github.com/didiberman/llm-d-eks-lab)** — Queue-depth autoscaled GPU inference on EKS  
[llm-d](https://llm-d.ai) v1.0 and vLLM on AWS EKS, autoscaled on inference queue depth (not CPU) via KEDA and the `llm-d` endpoint picker. Consolidates to zero GPUs when idle with Karpenter, runs without a NAT Gateway, and deploys via Terraform and OIDC GitHub Actions (~$0.40 for a 3-hour practice session).

**[kubewhy](https://github.com/didiberman/kubewhy)** — Root-cause Kubernetes troubleshooting assistant  
Read-only LLM assistant that inspects a cluster step by step, explains each check in plain English, and returns the root cause backed by cluster evidence.

**[eks-idp-platform](https://github.com/didiberman/eks-idp-platform)** — Production Internal Developer Platform on AWS EKS  
Reference IDP built with Terraform, Argo CD, Kyverno, Cilium, and Karpenter, paired with supply-chain-hardened CI (SHA-pinned actions, `harden-runner`, and Trivy).

**[tokenguard-operator](https://github.com/didiberman/tokenguard-operator)** — Kubernetes ServiceAccount least-privilege operator  
Go / Kubebuilder operator that scores ServiceAccount least-privilege by comparing RBAC grants against audit-log usage and detects external IP token abuse.

**[NinjaDevOps](https://ninjadevops.com)** — Interactive DevOps & Kubernetes challenge platform  
80+ real-world troubleshooting scenarios across Linux, Docker, and Kubernetes (CKA / CKAD / CKS) running on live GCP VMs directly in a browser terminal.

**[vcluster-platform](https://github.com/didiberman/vcluster-platform)** — Self-service virtual Kubernetes clusters  
The isolation of a real cluster at the cost of a namespace: teams provision virtual Kubernetes clusters by opening a PR, with automated GitOps tenant onboarding.

<details>
<summary>More platform builds & archives</summary>
<br/>

- **[self-service-idp](https://github.com/didiberman/kratix-platform)** — Self-service IDP assembled from open-source parts (Kratix, Backstage, Flux) on k3s, deployed with a single command.
- **[practical-aks](https://github.com/didiberman/practical-aks)** — Blank Azure subscription to a Workload Identity-secured, Trivy-scanned AKS cluster running a live LLM proxy with supply-chain-hardened CI/CD ([the attack it defends against](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)).
- **[gke-production-patterns](https://github.com/didiberman/gke-production-patterns)** — Production-grade GKE reference architecture: Cloud SQL, Memorystore, Terraform, Helm, observability, Temporal workflows, and incident response.
- **[Sovereign-Mesh](https://github.com/didiberman/sovereign-mesh-k8s)** — Multi-tenant AI PaaS on Hetzner: vLLM, Qdrant, and TEI on a hardened k3s cluster with tenant isolation and Argo CD GitOps.
- **[k0s-hetzner-cluster](https://github.com/didiberman/k0s-hetzner-cluster)** — 2-node k0s cluster on Hetzner via Terraform.
- **[terraform-aws-chatops-site](https://github.com/didiberman/terraform-aws-chatops-site)** — Deploy static sites by texting a Telegram bot.
- **[youtube-comment-classifier-mlops](https://github.com/didiberman/youtube-comment-classifier-mlops)** — MLOps pipeline with FastAPI and k3s.
- **[youtube-channel-intelligence](https://github.com/didiberman/youtube-channel-intelligence)** — Serverless YouTube monitoring and AI analysis on GCP.

</details>

---

## Writing

Recent posts on **[didibe.dev/blog](https://didibe.dev/blog)**:

- **[The Argo CD Vulnerability That Spreads From One Pod to Your Entire Cluster](https://didibe.dev/blog/argocd-repo-server-flaw)** — One compromised pod reaches the `repo-server` and escalates to full cluster control; still no patch, but one NetworkPolicy shuts the door.
- **[The Trivy CI/CD Hack](https://didibe.dev/blog/trivy-supply-chain-attack)** — Hijacked pipeline secrets and the Kubernetes clusters they could reach.
- **[An AI Broke Into AWS Faster Than You Can Imagine](https://didibe.dev/blog/ai-accelerated-aws-compromise)** — Four stolen keys, one IP, same second: how it happened and what stops it.
- **[Engineering in the Age of Noise](https://didibe.dev/blog/engineering-in-the-age-of-noise)** — Staying grounded when AI and infrastructure tooling move at light speed.
- **[Why Setting Up GPUs for AI Never Quite Works, and What NVIDIA Just Fixed](https://didibe.dev/blog/nvidia-aicr-vcluster)** — Validating GPU driver, CUDA, and Kubernetes compatibility on real clusters with NVIDIA AICR and vCluster.

---

## Stack & Certifications

- **Kubernetes & AI Infra:** Kubernetes (EKS / GKE / AKS / k3s), Helm, Karpenter, KEDA, Cilium, `llm-d`, vLLM, vCluster
- **GitOps & IDP:** Argo CD, Flux, Crossplane, Backstage, Kratix
- **Cloud & Automation:** AWS, GCP, Azure, Terraform, GitHub Actions, Temporal, kagent, n8n
- **Security:** Kyverno, Trivy, `harden-runner`, Kubebuilder / Go Operators
- **Certifications:** **CNCF Kubestronaut** (`CKA` · `CKAD` · `CKS` · `KCNA` · `KCSA`) · `AWS Certified Solutions Architect – Associate`

---

Off the clock, I wrote *[Social Freedom Unleashed](https://www.amazon.de/dp/B0CYM7Y2L1)*, a book on overcoming social anxiety.
