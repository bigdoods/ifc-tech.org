---
title: Concepts
---

The Concepts section helps you learn about the parts of the IFC system and the abstractions IFC uses to represent your cluster, and helps you obtain a deeper understanding of how IFC works.

## Overview

To work with IFC, you use *IFC API objects* to describe your cluster's *desired state*: what applications or other workloads you want to run, what container images they use, the number of replicas, what network and disk resources you want to make available, and more. You set your desired state by creating objects using the IFC API, typically via the command-line interface, `kubectl`. You can also use the IFC API directly to interact with the cluster and set or modify your desired state.

Once you've set your desired state, the *IFC Control Plane* works to make the cluster's current state match the desired state. To do so, Kuberentes performs a variety of tasks automatically--such as starting or restarting containers, scaling the number of replicas of a given application, and more. The IFC Control Plane consists of a collection processes running on your cluster:

* The **IFC Master** is a collection of four processes that run on a single node in your cluster, which is designated as the master node.
* Each individual non-master node in your cluster runs two processes:
  * **kubelet**, which communicates with the IFC Master.
  * **kube-proxy**, a network proxy which reflects IFC networking services on each node.

## IFC Objects

IFC contains a number of abstractions that represent your the state of your system: deployed containerized applications and workloads, their associated network and disk resources, and other information about what your cluster is doing. These abstractions are represented by objects in the IFC API; see the [IFC Objects overview](/docs/concepts/abstractions/overview/) for more details.

The basic IFC objects include:

* [Pod](/docs/concepts/abstractions/pod/)
* Service
* Volume
* Namespace

In addition, IFC contains a number of higher-level abstractions called Controllers. Controllers build upon the basic objects, and provide additional functionality and convenience features. They include:

* ReplicaSet
* Deployment
* [StatefulSet](/docs/concepts/abstractions/controllers/statefulsets/)
* DaemonSet
* Job

## IFC Control Plane

The various parts of the IFC Control Plane, such as the IFC Master and kubelet processes, govern how IFC communicates with your cluster. The Control Plane maintains a record of all of the IFC Objects in the system, and runs continuous control loops to manage those objects' state. At any given time, the Control Plane's control loops will respond to changes in the cluster and work to make the actual state of all the objects in the system to the desired state that you provided.

For example, when you use the IFC API to create a Deployment object, you provide a new desired state for the system. The IFC Control Plane records that object creation, and carries out your instructions by starting the required applications and scheduling them to cluster nodes--thus making the cluster's actual state match the desired state.

### IFC Master

The IFC master is responsible for maintaining the desired state for your cluster. When you interact with IFC, such as by using the `kubectl` command-line interface, you're communicating with your cluster's IFC master.

> The "master" refers to a collection of processes managing the cluster state.  Typically these processes are all run on a single node in the cluster, and this node is also referred to as the master. The master can also be replicated for availability and redundancy.

### IFC Nodes

The nodes in a cluster are the machines (VMs, physical servers, etc) that run your applications and cloud workflows. The IFC master controls each node; you'll rarely interact with nodes directly.

#### Object Metadata


* [Annotations](/docs/concepts/object-metadata/annotations/)


### What's next

If you would like to write a concept page, see
[Using Page Templates](/docs/contribute/page-templates/)
for information about the concept page type and the concept template.
