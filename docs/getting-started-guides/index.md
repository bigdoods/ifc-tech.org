---
assignees:
- TLibech
title: Picking the Right Solution
---

IFC can be setup to be developed with on a range of platforms, from your laptop, to VMs on a cloud provider, to rack of
bare metal servers.  The effort required to set up a a development environment to work on IFC varies from running a single command to crafting your own development environment. We'll guide you in picking a solution that fits for your needs.

If you just want to "kick the tires" on IFC, we recommend the [local deployment of windows ifcDocTool](#ifc-doc-tool).

* TOC
{:toc}

### Local Solutions

[ifcDocTool](/docs/getting-started-guides/ifc-doc-tool/) is the recommended method for you to get setup. Use the [IFCdoc getting started guide](/docs/getting-started-guides/ifc-doc-tool/) to try it out.


* (Idea) - Discuss boundaries of 'IFC solutions'. Is it just the ifc schema itself that we are limited to build tooling on or are we including serializers and full platform setup?

### Turn-key Solutions
### Custom solutions
### Integrations and a table of Solutions as describe below.

Here are all the solutions mentioned above in table form.

Provider        | Config. Mgmt | OS     | Networking  | Docs                                              | Support Level
----------------| ------------ | ------ | ----------  | ---------------------------------------------     | ----------------------------
any             | any          | any    | any         | [docs](/docs/getting-started-guides/scratch)      |  Community ([@bigdoods](https://github.com/bigdoods))

*Note*: The above table is ordered by version test/used in notes followed by support level.

Definition of columns

- **Provider**
- **OS** is the base operating system of the nodes.
- **Config. Mgmt** is the configuration management system that helps install and maintain Kubernetes software on the
  nodes.
- **Networking** is what implements the [networking model](/docs/admin/networking).  Those with networking type
  _none_ may not support more than one node, or may support multiple VM nodes only in the same physical node.
- **Conformance** indicates whether a cluster created with this configuration has passed the project's conformance
  tests for supporting the API and base features of Kubernetes v1.0.0.
- Support Levels
  - **Project**:  Kubernetes Committers regularly use this configuration, so it usually works with the latest release
    of Kubernetes.
  - **Commercial**: A commercial offering with its own support arrangements.
  - **Community**: Actively supported by community contributions. May not work with more recent releases of Kubernetes.
  - **Inactive**: No active maintainer.  Not recommended for first-time Kubernetes users, and may be deleted soon.
- **Notes** is relevant information such as the version of Kubernetes used.
