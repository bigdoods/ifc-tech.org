---
assignees:
- Tlibech
title: What is IFC?
---

IFC (Industry Foundation Classes) is a name given to a schema that describes construction specific object classes and their relationships. The schema represents building and related asset information defined according to the STEP (standard for exchange product information) developed by the International standards organisation.

The IFC standard is developed and maintained by [buildingSMART](http://buildingsmart.org/) international which is a non-profit industry-led organisation. As such, IFC is a neutral standard and independent of any particular vendor's software development plans.

IFC is used to [exchange data amongst software tooling used by AEC practitioners](http://www.slideshare.net/metalalp/building-information-modeling-bim-industry-foundation-classes-ifc-presentation)

With IFC, you are able to quickly and efficiently respond to customer demand:

 - Common file format for Industry applications.
 - Extend schema according to demand.
 - Lower barrier to entry to development for industry specific applications.

Our goal is to foster an ecosystem of components and tools that relieve the burden of development of industry related applications.

#### IFC is:

* **portable**: desktop, public, private, hybrid, multi-cloud
* **extensible**: modular, pluggable, composable

The IFC project was [started by the International Alliance for Interoperability](http://buildingsmart.org/about/about-buildingsmart/history/) in 1994. The partners involved with development of the standard are still involved. The IFC project builds upon the shared resources partner companies that have [actively used and supported the standard](https://www.slideshare.net/SanderLijbers/interop-bim-whitepaper-autodesk-july-2013-24173689) to aid ther process of sharing industry exchange data combined with best-of-breed ideas and practices from the community.

##### Ready to [Get Started](/docs/getting-started-guides/)?

## Why IFC object data model?

Looking for reasons why you should be using [IFC](https://buildings.lbl.gov/sites/all/files/lbnl-40681.pdf)?

The *Old Way* to build applications was to build your own libraries on top of your own kernel. This had the disadvantage of entangling the applications' executables, configuration, libraries, and lifecycles with each other and with the host OS. One could try to save files in another vendor software file format, but the effort would be too great to meet requirements from each vendor.

The *New Way* is to read/write files according to a common data object model that is open to use and supported by most software vendors in the industry. The benefits are that you must only map your classes making up your application once, and to IFC.

* (tbc) : 1. Extend further benefits of IFC
2. Summary of IFC benefits
3. Why do I need IFC and what can it do?
Discuss what demands that it satisfies for developers(users) and include examples from user-guide.


#### Why and how is IFC a platform?

Even though IFC provides a lot of functionality, there are always new scenarios that would benefit from new features. Application-specific workflows can be streamlined to accelerate developer velocity. Ad hoc IFC subsets that are acceptable initially often requires robust workflows to give mission critical reliability. This is why IFC was also designed to serve as a platform for building an ecosystem of components and tools to make it easier to convert, extend for application purpose.

* (Idea for add to toolkit) Features built into the IFC ecosystem/Toolkit to enable developers to work more efficiently with the standard. This might include things like Labels, annotations to help decorate their version of the schema that can be worked with in future. Additionally users could build their own tools to work with IFC which could be coupled by a genral-purpose command line tool.

* (Idea - link to design of IFC documentation. discuss how a developer could extend IFC. Show how it is 'open' for this purpose)

* (tbc) : Section on what IFC is not. This includes answering trivial things such as 'IFC is not an application.'
