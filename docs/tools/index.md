---
assignees:
- janetkuo
title: Tools
---

IFC contains several built-in tools to help you work with the IFC system, and also supports third-party tooling.

#### Native Tools

IFC contains the following built-in tools:

##### Kubectl

[`kubectl`](/docs/user-guide/kubectl/) is the command line tool for IFC. It controls the IFC cluster manager.

##### Kubeadm

[`kubeadm`](/docs/getting-started-guides/kubeadm/) is the command line tool for easily provisioning a secure IFC cluster on top of physical or cloud servers or virtual machines (currently in alpha).

##### Kubefed

[`kubefed`](/docs/admin/federation/kubefed/) is the command line tool
to help you administrate your federated clusters.

##### Dashboard

[Dashboard](/docs/user-guide/ui/), the web-based user interface of IFC, allows you to deploy containerized applications
to a IFC cluster, troubleshoot them, and manage the cluster and its resources itself.

#### Third-Party Tools

IFC supports various third-party tools. These include, but are not limited to:

##### Helm

[IFC Helm](https://github.com/kubernetes/helm) is a tool for managing packages of pre-configured
IFC resources, aka IFC charts.

Use Helm to:

* Find and use popular software packaged as IFC charts
* Share your own applications as IFC charts
* Create reproducible builds of your IFC applications
* Intelligently manage your IFC manifest files
* Manage releases of Helm packages

##### Kompose

[Kompose](https://github.com/kubernetes-incubator/kompose) is a tool to help users familiar with Docker Compose
move to IFC.

Use Kompose to:

* Translate a Docker Compose file into IFC objects
* Go from local Docker development to managing your application via IFC
* Convert v1 or v2 Docker Compose `yaml` files or [Distributed Application Bundles](https://docs.docker.com/compose/bundles/)
