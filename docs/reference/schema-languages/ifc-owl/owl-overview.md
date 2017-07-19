---
title: OWL Overview
assignees:
- pipauwel
- bigdoods
---

IfcOWL provides a Web Ontology Language (OWL) representation of the Industry Foundation Classes (IFC) schema. The goal of the project is to make IFC available as an OWL ontology to allow the usage of semantic web technologies.

Using the ifcOWL ontology, one can represent building data using semantic web and linked data technologies. IFC data becomes available in directed labelled graphs (RDF). This graph model and the underlying web technology stack allows building data to be easily linked to material data, GIS data, product manufacturer data, sensor data, classification schemas, social data, and so forth. The result is a web of linked building data for data management and exchange in the construction industry.

<div class="image-wrapper"><img src="/images/expressxsdowl-768x492.png"></div>


The ifcOWL ontology is a standard for exchange in linked and semantic data across the lifecycle of buildings. It is developed around a list of recommended use cases for linked data based applications.

Organisations who use data from building information modelling applications and other data related to the building life cycle (sensor data, GIS data, material data, geographical data, and so forth) can achieve their business processes and will benefit from greater integration of data and interoperability between their data sets and the wider linked data communities.


## Sample Use Case

Benefit may be obtained by publishing and combining localised data on new cheaper building materials, energy efficient building devices and systems, along with real time data on weather patterns, energy prices and geodata. By making this data available to applications, they will be better able to support decision makers during the whole of the building life cycle, which includes design, construction, commissioning, operation, retrofitting/refurbishment/reconfiguration, demolition, and recycling of buildings.

One feature of this language is to support interoperability between software applications, including Web services and intelligent agents. Linked Data tooling can be developed in accordance with this open standard.

## ifcOWL structure

The entire IFC EXPRESS schema (IFC entities and types and properties and so forth) is made available in one large ifcOWL ontology. In addition, the ifcOWL ontology uses some OWL classes and properties that are defined elsewhere. Namely, data types that are specific to EXPRESS (not to IFC) and to the representation of lists are defined in the following locations:

[Express ontology](http://w3id.org/express#)

[List ontology](http://w3id.org/list#)

The ifcOWL ontology only imports the EXPRESS ontology. The EXPRESS ontology in turn imports the LIST ontology.

<div class="image-wrapper"><img src="/images/express_basics_1.png"></div>

## ifcOWL extensions

At the moment, one extension is available for the ifcOWL ontology. This extension represents the WR RULES defined in the original IFC schemas. The extension imports the ifcOWL ontology. It thus provides a more complete version of the ifcOWL ontology.

Click [here](/docs/reference/schema-languages/ifc-owl/owl-specification/) for a complete list of extensions.

<div class="image-wrapper"><img src="/images/express_rules1.png"></div>

## Tooling

(tbc)


## Getting started

Get started with some common tasks associated with ifcOWL by choosing a tutorial from below;

<!-- (tbc) links to actual tutorials -->
[Generating ifcOWL]()

[Converting IFC files to RDF graphs]()

[Using ifcOWL-based RDF graphs]()
