---
title: Concepts
---

The Concepts section helps you learn about IFC.

In order to understand IFC implementation, it is important to understand the IFC model. Prior to the understanding of encoding IFC, it is advised to understand what the IFC schema does. 

The IFC model section consists of concept topics including the spatial organisation, physical building elements and subsets of an IFC model.

Once familiar with these concepts, move onto more advanced topics such as encoding IFC. This includes topics such as IFC schema formats, mapping and data formats. 

Following these two sections will be a set of tutorials that will guide a user through from an introduction to tools that help with tasks described in the previous sections to more advanced topics such as geometry creation.

## IFC Overview

The Industry Foundation Classes (IFC) data model is intended to describe building and construction industry data.
It is a platform neutral, open file format specification that is not controlled by a single vendor or group of vendors. It is an object-based file format with a data model developed by buildingSMART (formerly the International Alliance for Interoperability, IAI) to facilitate interoperability in the architecture, engineering and construction (AEC) industry, and is a commonly used collaboration format in Building information modeling (BIM) based projects. The IFC model specification is open and available, registered by ISO and is an official International Standard ISO 16739:2013.


## History

The IFC initiative began in 1994, when Autodesk formed an industry consortium to advise the company on the development of a set of C++ classes that could support integrated application development. Twelve US companies joined the consortium. These companies included AT&T, HOK Architects, Honeywell, Carrier, Tishman and Butler Manufacturing.[4] Initially named the Industry Alliance for Interoperability, the Alliance opened membership to all interested parties in September, 1995 and changed its name in 1997 to the International Alliance for Interoperability. The new Alliance was reconstituted as a non-profit industry-led organization, with the goal of publishing the Industry Foundation Class (IFC) as a neutral AEC product model responding to the AEC building lifecycle. A further name change occurred in 2005, and the IFC specification is now developed and maintained by buildingSMART.

## Architecture 

IFC defines an EXPRESS based entity-relationship model consisting of several hundred entities organized into an object-based inheritance hierarchy. Examples of entities include building elements such as IfcWall, geometry such as IfcExtrudedAreaSolid, and basic constructs such as IfcCartesianPoint.[7]

At the most abstract level, IFC divides all entities into rooted and non-rooted entities. Rooted entities derive from IfcRoot and have a concept of identity (having a GUID), along with attributes for name, description, and revision control. Non-rooted entities do not have identity and instances only exist if referenced from a rooted instance directly or indirectly. IfcRoot is subdivided into three abstract concepts: object definitions, relationships, property sets:

* IfcObjectDefinition captures tangible object occurrences and types
* IfcRelationship captures relationships among objects
* IfcPropertyDefinition captures dynamically extensible properties about objects

### IfcObjectDefinition 
IfcObjectDefinition is split into object occurrences and object types. IfcObject captures object occurrences such as a product installation having serial number and physical placement. IfcTypeObject captures type definitions (or templates) such as a product type having a particular model number and common shape. Occurrences and types are further subdivided into six fundamental concepts: actors ("who"), controls ("why"), groups ("what"), products ("where"), processes ("when"), and resources ("how").
* IfcActor represents people or organizations.
* IfcControl represents rules controlling time, cost, or scope such as work orders.
* IfcGroup represents collections of objects for particular purpose such as electrical circuits.
* IfcProduct represents occurrences in space such as physical building elements and spatial locations.
* IfcProcess represents occurrences in time such as tasks, events, and procedures.
* IfcResource represents usage of something with limited availability such as materials, labor, and equipment.

### IfcRelationship 
IfcRelationship captures relationships among objects. There are five fundamental relationship types: composition, assignment, connectivity, association, and definition.
* IfcRelDecomposes captures a whole-part relationship having exclusive containment such as subdividing a building into floors and rooms or a wall into studs and sheathing.
* IfcRelAssigns captures assignment relationships where one object consumes the services of another object, such as a labor resource assigned to a task, or a task assigned to a building element.
* IfcRelConnects indicates connectivity between objects such as a floor slab connected to a beam or a pipe connected to a sink.
* IfcRelAssociates indicates external references for an object such an external IFC library file where an object is defined.
* IfcRelDefines indicates an instance-of relationship such as a pipe segment being of a particular type.

### IfcPropertyDefinition 
IfcPropertyDefinition captures dynamically extensible property sets. A property set contains one or more properties which may be a single value (e.g. string, number, unit measurement), a bounded value (having minimum and maximum), an enumeration, a list of values, a table of values, or a data structure. While IFC defines several hundred property sets for specific types, custom property sets may be defined by application vendors or end users.
* IfcPropertySet represents a set of properties attached to an object occurrence or object type.
* IfcPropertySetTemplate [IFC2x4] captures definitions of properties and their data types.

### Products 
* IfcProduct is the base class for all physical objects and is subdivided into spatial elements, physical elements, structural analysis items, and other concepts. Products may have associated materials, shape representations, and placement in space. Spatial elements include IfcSite, IfcBuilding, IfcBuildingStorey, and IfcSpace. Physical building elements include IfcWall, IfcBeam, IfcDoor, IfcWindow, IfcStair, etc. Distribution elements (HVAC, electrical, plumbing) have a concept of ports where elements may have specific connections for various services, and connected together using cables, pipes, or ducts to form a system. Various connectivity relationships are used for building elements such as walls having openings filled by doors or windows.
Materials may be defined for products as a whole, or as layers, profiles, or constituents for specified parts.
* IfcMaterial indicates a specific material, with optional properties (e.g. mechanical, thermal) and styles (e.g. colors, textures).
* IfcMaterialLayerSet captures a list of layers, each indicating a material of a specified thickness.
* IfcMaterialProfileSet [IFC2x4] captures a set of profiles, each indicating a material of a specified cross-section.
* IfcMaterialConstituentSet [IFC2x4] captures a set of constituents, each indicating a material used at a named shape aspect.

Representations may be defined for explicit 3D shape, and optionally as parametric constraints. Each representation is identified by IfcShapeRepresentation with a well-known name.
* 'Body' indicates a 3D shape which may be represented by B-rep, NURBS, Constructive Solid Geometry (CSG), or swept profiles. It may be defined directly or derived by applying material definitions to other representations.
* 'Axis' indicates a path for linear elements (e.g. wall, beam, pipe) for which material profiles or layers are aligned.
* 'FootPrint' indicates a boundary for planar elements (e.g. slab, staircase) for which material layers are bounded.
* 'Profile' indicates a side profile for opening elements (e.g. door, window) for which material constituents are bounded.
* 'SurveyPoints' indicates a set of points for surface elements (e.g. site) for describing contours.

Placement may indicate position, vertical angle, and horizontal angle.
* IfcLocalPlacement indicates placement relative to an enclosing element hierarchy.
* IfcGridPlacement indicates placement relative to a grid with user-defined axes.
Quantities may be defined for take-off purposes such as Gross Area, Gross Volume, Gross Weight, Net Weight, etc. IFC defines various quantities specific to each element type and the method of calculation according to geometry and relationships.

### Processes 
IfcProcess is the base class for processes and is subdivided into tasks, events, and procedures. Processes may have durations and be scheduled to occur at specific time periods. Processes may be sequenced such that a successor task may start after a predecessor task finishes, following the Critical Path Method. Processes may be nested into sub-processes for summary roll-up. Processes may be assigned to products indicating the output produced by the work performed.

### Resources 
IfcResource is the base class for resources and is subdivided into materials, labor, equipment, subcontracts, crews, and more. Resources may have various costs and calendars of availability. Resources may be nested into sub-resources for granular allocation. Resources may be assigned to processes indicating tasks performed on behalf of a resource.

### Contexts 

IfcProject encapsulates an overall project and indicates the project name, description, default units, currency, coordinate system, and other contextual information. A valid IFC file must always include exactly one IfcProject instance, from which all other objects relate directly or indirectly. A project may include multiple buildings, multiple participants, and/or multiple phases according to the particular use.

In addition to project-specific information, an IfcProject may also reference external projects from which shared definitions may be imported such as product types. Each external project is encapsulated using IfcProjectLibrary [IFC2x4] along with IfcRelAssociatesLibrary and IfcLibraryInformation to identify the particular revision of the imported project library.

Projects support revision control where any IfcRoot-based entity has a unique identifier and may be marked as added, modified, deleted, or having no change. Such capability allows multiple IFC files to be merged deterministically, ensuring data integrity without human intervention.


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
