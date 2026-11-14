<div align="center">

# Didi Berman

**Cloud Platform Engineer — AWS & Kubernetes (EKS)**  
Runtime team building **mEKS**, the managed EKS platform internal product teams ship on.

[![Website](https://img.shields.io/badge/didibe.dev-111827?style=for-the-badge&logo=safari&logoColor=white)](https://didibe.dev)
[![Blog](https://img.shields.io/badge/Engineering_Blog-111827?style=for-the-badge&logo=readthedocs&logoColor=white)](https://didibe.dev/blog)
[![Kubestronaut](https://img.shields.io/badge/CNCF-Kubestronaut-1e3a8a?style=for-the-badge&logo=kubernetes&logoColor=white)](https://www.cncf.io/training/kubestronaut/)

</div>

---

### Featured Build

<table>
  <tr>
    <td>
      <h3><a href="https://github.com/didiberman/llm-d-eks-lab">llm-d-eks-lab</a> — Queue-Depth Autoscaled GPU Inference on EKS</h3>
      <p>
        Open-weights LLM serving on AWS EKS powered by <a href="https://llm-d.ai">llm-d</a> v1.0 and <b>vLLM</b>, autoscaled on <b>inference queue depth</b> (not CPU) via KEDA and the <code>llm-d</code> endpoint picker. Consolidates to <b>zero GPUs</b> when idle with Karpenter, runs without a NAT Gateway, and deploys end-to-end via Terraform and OIDC GitHub Actions (<b>~$0.40</b> for a 3-hour practice session).
      </p>
      <p>
        <kbd>AWS EKS</kbd> <kbd>llm-d v1.0</kbd> <kbd>vLLM</kbd> <kbd>KEDA</kbd> <kbd>Karpenter GPU</kbd> <kbd>Terraform</kbd> <kbd>GitHub OIDC</kbd>
      </p>
    </td>
  </tr>
</table>

### Core Systems & Platforms

<table>
  <tr>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/didiberman/kubewhy">kubewhy</a></h4>
      <p><b>Root-cause Kubernetes troubleshooting agent</b></p>
      <p>Read-only LLM assistant that inspects cluster state step by step, explains each diagnostic check in plain English, and returns root causes backed by live cluster evidence.</p>
      <p><kbd>Go</kbd> <kbd>Kubernetes API</kbd> <kbd>LLM Diagnostics</kbd></p>
    </td>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/didiberman/eks-idp-platform">eks-idp-platform</a></h4>
      <p><b>Production Internal Developer Platform on EKS</b></p>
      <p>Reference IDP engineered with Terraform, Argo CD, Kyverno, Cilium, and Karpenter, paired with supply-chain-hardened CI (SHA-pinned actions, <code>harden-runner</code>, Trivy).</p>
      <p><kbd>EKS</kbd> <kbd>Argo CD</kbd> <kbd>Cilium</kbd> <kbd>Kyverno</kbd> <kbd>Karpenter</kbd></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/didiberman/tokenguard-operator">tokenguard-operator</a></h4>
      <p><b>ServiceAccount least-privilege & token security</b></p>
      <p>Kubernetes operator that scores ServiceAccount least-privilege by comparing RBAC grants against audit-log usage and detects external IP token abuse in real time.</p>
      <p><kbd>Go</kbd> <kbd>Kubebuilder</kbd> <kbd>controller-runtime</kbd> <kbd>RBAC</kbd></p>
    </td>
    <td width="50%" valign="top">
      <h4><a href="https://github.com/didiberman/vcluster-platform">vcluster-platform</a></h4>
      <p><b>Ephemeral virtual clusters via Pull Request</b></p>
      <p>The isolation of a dedicated cluster at the cost of a namespace. Product teams provision virtual Kubernetes clusters by opening a PR, with automated GitOps tenant onboarding.</p>
      <p><kbd>vCluster</kbd> <kbd>Argo CD</kbd> <kbd>Terraform</kbd> <kbd>GitOps</kbd></p>
    </td>
  </tr>
</table>

<details>
<summary><b>More Platform Builds & Archives (8)</b></summary>
<br/>

| Project | Architecture & Focus |
| :--- | :--- |
| **[self-service-idp](https://github.com/didiberman/kratix-platform)** | Self-service IDP integrating Kratix, Backstage, Crossplane, and Flux on k3s with single-command deployment |
| **[practical-aks](https://github.com/didiberman/practical-aks)** | Workload Identity-secured, Trivy-scanned AKS running a live LLM proxy with egress-hardened CI/CD ([the attack it defends against](https://thehackernews.com/2026/03/trivy-security-scanner-github-actions.html)) |
| **[gke-production-patterns](https://github.com/didiberman/gke-production-patterns)** | Production GKE reference architecture: Cloud SQL, Memorystore, Terraform, Helm, observability, and Temporal |
| **[Sovereign-Mesh](https://github.com/didiberman/sovereign-mesh-k8s)** | Multi-tenant AI PaaS on Hetzner running vLLM, Qdrant, and TEI on hardened k3s with Argo CD GitOps |
| **[k0s-hetzner-cluster](https://github.com/didiberman/k0s-hetzner-cluster)** | 2-node k0s cluster on Hetzner provisioned via Terraform |
| **[terraform-aws-chatops-site](https://github.com/didiberman/terraform-aws-chatops-site)** | Static site deployment pipeline triggered via Telegram bot |
| **[youtube-comment-classifier-mlops](https://github.com/didiberman/youtube-comment-classifier-mlops)** | MLOps classification pipeline with FastAPI and k3s |
| **[youtube-channel-intelligence](https://github.com/didiberman/youtube-channel-intelligence)** | Serverless YouTube monitoring and AI analysis on GCP |

</details>

---

### Selected Writing

| Article | Topic |
| :--- | :--- |
| **[The Argo CD Vulnerability That Spreads From One Pod to Your Entire Cluster](https://didibe.dev/blog/argocd-repo-server-flaw)** | How one compromised pod reaches the `repo-server` and escalates to full cluster control—and the single `NetworkPolicy` that shuts the door |
| **[The Trivy CI/CD Hack](https://didibe.dev/blog/trivy-supply-chain-attack)** | Hijacked pipeline secrets, supply-chain blast radius, and the Kubernetes clusters they could reach |
| **[An AI Broke Into AWS Faster Than You Can Imagine](https://didibe.dev/blog/ai-accelerated-aws-compromise)** | Four stolen keys from one IP in the same second: anatomy of an automated cloud compromise and what stops it |
| **[Why Setting Up GPUs for AI Never Quite Works, and What NVIDIA Just Fixed](https://didibe.dev/blog/nvidia-aicr-vcluster)** | Validating GPU driver, CUDA, and Kubernetes compatibility on real hardware with NVIDIA AICR and vCluster |
| **[Engineering in the Age of Noise](https://didibe.dev/blog/engineering-in-the-age-of-noise)** | Staying grounded when AI and infrastructure tooling move at light speed |

---

### Stack & Credentials

| Domain | Technologies |
| :--- | :--- |
| **Kubernetes & AI Infra** | <kbd>AWS EKS</kbd> <kbd>Kubernetes</kbd> <kbd>Karpenter</kbd> <kbd>KEDA</kbd> <kbd>Cilium</kbd> <kbd>llm-d</kbd> <kbd>vLLM</kbd> <kbd>vCluster</kbd> <kbd>Helm</kbd> |
| **GitOps & IDP** | <kbd>Argo CD</kbd> <kbd>Flux</kbd> <kbd>Crossplane</kbd> <kbd>Backstage</kbd> <kbd>Kratix</kbd> |
| **Cloud & Automation** | <kbd>AWS</kbd> <kbd>GCP</kbd> <kbd>Azure</kbd> <kbd>Terraform</kbd> <kbd>GitHub Actions</kbd> <kbd>Temporal</kbd> <kbd>kagent</kbd> <kbd>n8n</kbd> |
| **Security & Operators** | <kbd>Kyverno</kbd> <kbd>Trivy</kbd> <kbd>harden-runner</kbd> <kbd>Go</kbd> <kbd>Kubebuilder</kbd> |
| **Certifications** | **CNCF Kubestronaut** (<kbd>CKA</kbd> <kbd>CKAD</kbd> <kbd>CKS</kbd> <kbd>KCNA</kbd> <kbd>KCSA</kbd>) · <kbd>AWS SAA</kbd> |

<br/>

<div align="center">
  <sub>Off the clock, I wrote <a href="https://www.amazon.de/dp/B0CYM7Y2L1"><i>Social Freedom Unleashed</i></a>, a book on overcoming social anxiety.</sub>
</div>
