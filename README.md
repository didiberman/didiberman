<div align="center">
<pre>
██████╗  ██╗ ██████╗  ██╗
██╔══██╗ ██║ ██╔══██╗ ██║
██║  ██║ ██║ ██║  ██║ ██║
██║  ██║ ██║ ██║  ██║ ██║
██████╔╝ ██║ ██████╔╝ ██║
╚═════╝  ╚═╝ ╚═════╝  ╚═╝
</pre>
<p>
  <b>Cloud Platform & Security Engineer — AWS & Kubernetes (EKS)</b> · <a href="https://didibe.dev">didibe.dev</a>
</p>
</div>

<pre>
$ kubectl describe engineer didi

Name:         didi
Role:         Cloud Platform Engineer (Runtime Team — building mEKS)
Focus:        Managed EKS at Scale · Cloud Security & Forensics · GPU/LLM Inference
Website:      <a href="https://didibe.dev">https://didibe.dev</a>

Certifications [CNCF Kubestronaut]:
  ├── [✓] CKS   Certified Kubernetes Security Specialist
  ├── [✓] CKA   Certified Kubernetes Administrator
  ├── [✓] CKAD  Certified Kubernetes Application Developer
  ├── [✓] KCSA  Kubernetes and Cloud Native Security Associate
  ├── [✓] KCNA  Kubernetes and Cloud Native Associate
  ├── [✓] SAA   AWS Certified Solutions Architect – Associate
  └── [⟳] CKNE  Certified Kubernetes Network Engineer (in progress)
</pre>

---

<pre>
$ kubectl get workload llm-d-eks-lab -o wide
</pre>

### ⚡ [llm-d-eks-lab](https://github.com/didiberman/llm-d-eks-lab) — Queue-Depth Autoscaled GPU Inference on EKS

Open-weights LLM serving on AWS EKS powered by **[llm-d](https://llm-d.ai) v1.0** and **vLLM**. Autoscales on **inference queue depth** (not CPU) via KEDA and the `llm-d` endpoint picker, consolidates to **zero GPUs** when idle with Karpenter, and runs without a NAT Gateway (~$0.40 for a 3-hour practice session).

<pre>
 git push ──▶ GitHub Actions (OIDC) ──▶ Terraform ──▶ AWS EKS
                                                       ├── llm-d router + endpoint picker
                                                       ├── vLLM serving model (KEDA queue-depth)
                                                       └── Karpenter GPU nodes (0 ──▶ N on demand)
</pre>

---

<pre>
$ kubectl get projects -l tier=core
</pre>

- **[kubewhy](https://github.com/didiberman/kubewhy)** — **Root-Cause Kubernetes Investigation & Triage Agent**  
  Read-only LLM assistant that inspects live cluster state, events, and logs step by step, explains each diagnostic check in plain English, and returns root-cause findings backed by verifiable cluster evidence.

- **[tokenguard-operator](https://github.com/didiberman/tokenguard-operator)** — **Kubernetes Audit-Log Forensics & RBAC Security Operator**  
  Go / Kubebuilder operator that analyzes Kubernetes audit logs against RBAC grants to score ServiceAccount least-privilege, map blast radius, and detect external IP token exfiltration and abuse.

- **[eks-idp-platform](https://github.com/didiberman/eks-idp-platform)** — **Hardened Production Internal Developer Platform on AWS EKS**  
  Terraform, Argo CD, Kyverno admission guardrails, Cilium network policies, and Karpenter, paired with supply-chain-hardened CI (SHA-pinned actions, `harden-runner` egress filtering, Trivy).

- **[vcluster-platform](https://github.com/didiberman/vcluster-platform)** — **Blast-Radius Isolated Virtual Kubernetes Clusters**  
  The isolation of a dedicated cluster at the cost of a namespace: teams provision virtual clusters by opening a PR, with automated GitOps tenant onboarding.

<details>
<summary><code>$ kubectl get projects -l tier=extended</code> &nbsp;(8 more builds)</summary>
<br/>

- **[practical-aks](https://github.com/didiberman/practical-aks)** — Blank Azure subscription → Workload Identity-secured, Trivy-scanned AKS running a live LLM proxy with egress-hardened CI/CD ([the attack it defends against](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)).
- **[self-service-idp](https://github.com/didiberman/kratix-platform)** — Self-service IDP assembled from open-source parts (Kratix, Backstage, Flux) on k3s, deployed with one command.
- **[gke-production-patterns](https://github.com/didiberman/gke-production-patterns)** — Production GKE reference architecture: Cloud SQL, Memorystore, Terraform, Helm, observability, Temporal workflows, and incident response.
- **[Sovereign-Mesh](https://github.com/didiberman/sovereign-mesh-k8s)** — Multi-tenant AI PaaS on Hetzner: vLLM, Qdrant, and TEI on a hardened k3s cluster with tenant isolation and Argo CD GitOps.
- **[k0s-hetzner-cluster](https://github.com/didiberman/k0s-hetzner-cluster)** — 2-node k0s cluster on Hetzner via Terraform.
- **[terraform-aws-chatops-site](https://github.com/didiberman/terraform-aws-chatops-site)** — Deploy static sites by texting a Telegram bot.
- **[youtube-comment-classifier-mlops](https://github.com/didiberman/youtube-comment-classifier-mlops)** — MLOps pipeline with FastAPI and k3s.
- **[youtube-channel-intelligence](https://github.com/didiberman/youtube-channel-intelligence)** — Serverless YouTube monitoring and AI analysis on GCP.

</details>

---

<pre>
$ kubectl logs -n security-and-engineering-blog --tail=6
</pre>

- **[Cloud Infiltration in Plain English: The Fake IT Call That Walks Attackers Into Microsoft 365](https://didibe.dev/blog/cloud-infiltration-passkey-phishing)**  
  Passkey-phishing cloud breach anatomy: a fake IT call, a planted MFA key, quiet Graph API recon and bulk SharePoint and OneDrive exfiltration, and the sequence of events that gives it away.
- **[llm-d in Plain English: Serving LLMs on Kubernetes](https://didibe.dev/blog/llm-d-serving-llms-on-kubernetes)**  
  Why an LLM is not a web app: queue-depth autoscaling, the KV cache, and GPU nodes from zero, with real numbers from a 72B model on EKS.
- **[An AI Broke Into AWS Faster Than You Can Imagine](https://didibe.dev/blog/ai-accelerated-aws-compromise)**  
  Cloud breach anatomy: four stolen IAM keys from one IP in the same second, automated recon & privilege escalation, and the controls that stop it.
- **[The Argo CD Vulnerability That Spreads From One Pod to Your Entire Cluster](https://didibe.dev/blog/argocd-repo-server-flaw)**  
  Lateral movement from a single compromised pod to full cluster takeover via `repo-server`, and the `NetworkPolicy` that contains it.
- **[The Trivy CI/CD Hack](https://didibe.dev/blog/trivy-supply-chain-attack)**  
  Supply-chain attack forensics: hijacked pipeline secrets, runner egress abuse, and the Kubernetes clusters they could reach.
- **[Why Setting Up GPUs for AI Never Quite Works, and What NVIDIA Just Fixed](https://didibe.dev/blog/nvidia-aicr-vcluster)**  
  Validating GPU driver, CUDA, and Kubernetes compatibility on real hardware with NVIDIA AICR and vCluster.

---

<pre>
$ helm list -n stack

NAMESPACE       MODULES
─────────       ───────
k8s-core        EKS · Kubernetes · Karpenter · KEDA · Cilium · Helm · vCluster
sec-forensics   K8s Audit Logs · CloudTrail · Kyverno · Trivy · harden-runner · IAM/OIDC
ai-inference    llm-d · vLLM · GPU NodePools · Queue-Depth Autoscaling
gitops-idp      Argo CD · Flux · Crossplane · Backstage · Kratix
cloud-iac       AWS · GCP · Azure · Terraform · GitHub Actions · Go / Kubebuilder
</pre>

---

<p align="center">
  <sub>Off the clock: I wrote <a href="https://www.amazon.de/dp/B0CYM7Y2L1">Social Freedom Unleashed</a>, a book on overcoming social anxiety.</sub>
</p>
