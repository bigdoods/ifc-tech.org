---
title: Concepts
---

The Concepts section helps you learn about the parts of the IFC system and the abstractions IFC uses to represent your schema, and helps you obtain a deeper understanding of how IFC works.

## Overview
To work with IFC, you use IFC objects to represent the desired content to share though its mapping tooling. Any buildign or asset object that appears in a buildign will have an equivalent in the digital schema. We are constantly working towards adding new object so that the schema progresses along with technology.You can build an ifc file using mappings like IFCXML and ifcJSON.

## IFC Objects

IFC contains a number of abstractions that represent the different layers contanied in the schema; see the [IFC Objects overview](/docs/concepts/overview/) for more details.

The basic IFC objects include:

* domain-layer
* resource-layer
* core-layer
* interoperability-layer

In addition, IFC contains a number of higher-level abstractions defined through object relationships in the schema. These abstractions build upon the basic objects, and provide additional functionality and convenience features. They include:

* Inheritance
* Semantic relationships

## STEP
STEP introduction

In 1984, the Standards for Exchange of Product Data (STEP) project was officially created in the International Standards Organization (ISO) as an outgrowth of standardization projects in the United States and France. The objective of the
STEP project was to develop standards for the exchange of product information among software tools that supported product engineering. It rapidly came to include support for construction engineering and manufacturing systems engineering as well.

An objective of this project was to specify the information content of a product description in a way that was independent of the form of exchange, so that more than one specific exchange form could be specified, while the semantic equivalences would be retained by reference to the common model. In particular, the project members envisaged the need for both database representations and sequential file structures.

At that time, there were no standard information modeling languages, and the languages in common use were purely graphical. In order to specify the relationships between the information model (what we would now call a “platform independent model”) and the data implementation model (a “platform specific model”), it was perceived to be a requirement that the information model have a formal text form. Such a form would enable an information model to be processed by a software tool that could generate the corresponding PSM. There being no usable standard, nor any common language, with these characteristics, the STEP project developed and standardized its own information modeling language: EXPRESS.

The information modeling language EXPRESS was standardized in 1994 as Part 11 of the ISO 10303 Standards for the Exchange of Product Data. It was revised in 1999 and in 2004. It was used for every information model in the STEP series, and in 3 other standards series in ISO TC184 (Industrial Data), and for information models in standards developed by other ISO Technical Committees. As of 2005, there were over 300 major information models for manufacturing and construction information that are formally specified in EXPRESS and standardized by ISO. These models, and the EXPRESS language are in wide use in the manufacturing industry, and the exchange models are supported by dozens of
software tools.

In the more recent past, in order to make these models useful to an industry in which programmers and modelers are not commonly taught EXPRESS, further ISO projects have been undertaken to produce mappings from EXPRESS to XML Schema (ISO 10303-28) and UML (ISO 10303-25). But each of these mappings was specified entirely in text and targeted
version 1 of XML Schema and UML respectively.

From this, many projects with the objective of applying a model-driven technologies to the "EXPRESS" problem emerged. These included metamodels for the EXPRESS language, development of a formal mapping with the goal of having a machine-processable specification and mapping the express metamodel to the metamodel of OWL specification by the w3c Organization.

Taken together these elements will permit automatic generation of OWL, which will neable them to be used as ontologies and tested for consistency using semantic web tooling.

Other topics to include :

* Development of the Express metamodel
* Scope and purpose of STEP


## IFC model architecture

The IFC Object model is a minimal kernel that pre-harmonizes all partial models, but also provides for mapping mechanism to communicate with disperse models surrounding the harmonized part.

The IFC object model architecture has been developed using a set of principles governing its organizaton and structure. These principles focus on basic requirements and can be summarized

* Provide a modular structure to the model
* Provide a framework for sharing information between different disciplines within the AEC/FM industry
* Ease the continued maintenance and development of the model
* Enable information modelers to reuse model components
* Enable software authors to reuse software components
* Facilitate the provision of better upward compatibility between model releases.

The IFC Object model architecture provides a modular struture for the development of model components, the 'model schema'. There are four conceptual layers within the architecture, which use a strict referencing hierarchy. Within each conceptual layer a set of model schema is defined. The layers can be described as follows:

1. Resource Layer - Resource classes used by classes in the higher levels.
2. Core Layer - This core contains the kernel and several core extensions
3. Interoperability Layer -The interoperability layer is a set of modules defining concepts or objects common across multiple application types or AEC industry domains.
4. Domain/applications layer - Provides a set of modules tailored for specific AEC indsutry domain or application type and model 'adapters' to non-IFC domain/application models.

The architecture operates on a 'ladder principle' where at any layer, a class may reference a class at the same or lower layer but not reference a class from a higher layer. References within the same layer must be designed very carefully in order to maintain modularity in the model design.

### Resource Layer
This section describes the evolution of resource schema for each IFC release

### Core Layer
This section covers topics such as IFC Kernel, Core extensions and evolution of core schema for each version of IFC

### Interoperability Layer
This section covers modules defining concepts or objects common to two or more domain/ application models with adapters.

### Domain/Applications layer
Domain/Applications models provide further model detail within the scope requirements from an AEC/FM domain process or a type of application...


Sources:

[IFC model architecture guide - 1998 - T.Liebich et al](http://iaiweb.lbl.gov/Resources/IFC_Releases/IFC_Release_2.0/BETA_Docs_for_Review/IFC_R2_ModelArch_Beta_d2.PDF)

[Express metamodel - 2015 - OMG group](http://www.omg.org/spec/EXPRESS/1.1)

### What's next

If you would like to write a concept page, see
[Using Page Templates](/docs/contribute/page-templates/)
for information about the concept page type and the concept template.
