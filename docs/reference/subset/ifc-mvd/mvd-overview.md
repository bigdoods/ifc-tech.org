---
title: MVD XML Overview
---

<!-- An IFC View Definition, or Model View Definition, MVD, defines a subset of the IFC schema, that is needed to satisfy one or many Exchange Requirements of the AEC industry. The method used and propagated by buildingSMART to define such Exchange Requirements is the Information Delivery Manual, IDM (also ISO 29481).

The official Model View Definitions are published by buildingSMART using the <a href="http://www.buildingsmart-tech.org/specifications/mvd-overview/mvd-overview-summary">neutral mvdXML format</a>, the mvdXML delivery is integrated into the documentation package of the MVD accessible through this website. buildingSMART has develeoped the software tool <a href="http://www.buildingsmart-tech.org/specifications/specification-tools/ifcdoc-tool/ifcdoc-beta-summary">ifcDoc</a> for defining and documenting MVD's.


The following Model View Definitions are currently developed and are available as official buildingSMART Model View Definition:

Model View Definitions for IFC4

The two successors of the IFC2x3 Coordination View V2.0 designed for IFC4 are buildingSMART final standards.
<li><a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/ifc4-reference-view/ifc4-reference-view">the IFC4 Reference View</a></li>
<li><a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/ifc4-design-transfer-view/ifc4-design-transfer-view">the IFC4 Design Transfer View</a></li>

The main difference of mvdXML-based definitions of IFC4 MVD's to earlier publications of MVD's in general is the publication as:

a full documentation and schema definition subset for human reference (so no need to look into different documentations to find MVD relevant information)
a computer readable publication as mvdXML and as EXPRESS & XSD sub schemas (so MVD's can be parsed, filtered and later validated)

### Model View Definitions for IFC2x3

These are the MVD's that are currently in place and supported by software tools.

The <a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/coordination-view-v2.0/summary">IFC2x3 Coordination View</a> Version 2.0 (available - supersedes IFC2x3 Coordination View)
(currently in process of finalization and providing the basis for IFC2x3 Coordination View Certifications from 2010 onwards)

The IFC2x3 Coordination View Version 2.0 can be extended by the following add-on model view definitions. An add-on view extends a base MVD by some small concepts that need to supported in addition to support additional exchange requirements. The currently defined add-on views include:
the Quantity Take-off add-on view - it adds the ability to transmit base quantities for all spatial, building, building service and structural elements.
The <a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/space-boundary-addon-view/space-boundary-summary">Space boundary add-on view</a> - it supports the use case of using BIM in thermal and energy analysis by adding building element to space relationships.
the 2D Annotation add-on view - it supports the exchange of additional 2D element representations and annotations of building models

the <a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/coordination-view-version-1.0/coordination-view-v1-summary">IFC2x3 Coordination View</a> (released - outdated as of Jan 2010)
(Version 1.0 finalized in 2007 that had been the basis of IFC2x3 Coordination View Certifications until 2009)
the <a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/structural-analysis-view/structural-analysis-view-summary">IFC2x3 Structural Analysis View</a> (released)
(Version 1.0 finalized in 2008)
the <a href="http://www.buildingsmart-tech.org/specifications/ifc-view-definition/fm-handover-aquarium/fm-handover-aquarium">IFC2x3 Basic FM HandOver view</a> (released)
(Version 1.1 developed within the buildingSMART aquarium project "FM Handover View"
 
### Model View Definitions developed outside of buildingSMART International

Several other Model View Definitions are currently under development by organizations or development teams outside of buildingSMART International. They may be submitted to and accepted by buildingSMART International to become official buildingSMART International MVD's at a later point. Once accepted, those MVD's will be published here.

 

 

### MVD development resources

buildingSMART International develops the ifcDoc tool to streamline the IFC and MVD development process. See MVD overview about news and how to download or join the development program.

The official buildingSMART software certification center, http://gtds.buildingsmart.com, also has the capability to create MVD documentation, link it to the certification test cases and rule checking and to export the mvdXML definitions. -->


### MVDXML Overview Summary
Industry Foundation Classes (IFC) is a data schema for representing buildings and associated activities for designing, constructing, and maintaining them. It may be encoded as XML (markup language commonly used for document-related data) or SPF (STEP Physical File commonly used for engineering-related data). The resulting data encoding may reside in a file or as part of Internet communication between desktop computers, servers, and mobile devices. Data may represent an entire project, a subset of information within a project, or changes to data within a project.

To support interoperability across hundreds of software applications, industry domains, and regions worldwide, IFC is designed to accommodate many different configurations and levels of detail. For example, a wall can be represented as a line (or curve) segment between two points, 3D geometry for visualization, and/or in construction detail (capturing individual studs, pipe fittings, wiring, etc.) along with engineering properties, scheduling and cost information. As different users of building data have different needs, and authors of building data will provide detail in different domains, there's a need to clarify which data is needed for a particular use.  A Model View Definition provides a way to specifically indicate what data is needed. When parties are involved in a contract requiring data to be provided, a contract may indicate that data is to be delivered according to a specific Model View Definition and such data may be automatically validated to determine conformance.

Model View Definitions (MVDs) are encoded in a format called MVDXML, and define allowable values at particular attributes of particular data types. For example, an MVD may require that a wall provide a fire rating, a classification according to OmniClass Table 22, and information required for structural analysis such as elastic modulus of materials. In simple cases, such rules may define a single attribute on a single data type, while more complex cases may consist of graphs of objects and collections.

Various validation formats are already commonplace in the software industry for checking data conformance such as XML Schema Definition (XSD), EXPRESS (ISO 10303-11), Schematron, and validation frameworks within programming languages and tools (e.g. NUnit, JUnit). It is not the goal of MVDXML to replace such approaches, but rather automate them such that information requirements can be defined at a higher level, where downstream validation formats can be automatically generated, rather than relying on manual efforts which are error-prone and may become out-of-sync with specifications. However, validation is only one use for MVDXML; the higher-level nature of MVDXML enables many other uses as follows.

Software applications may make use of MVDXML either statically (designed to support a particular model view), or dynamically (designed to support any model view). Examples of dynamic functionality that may be supported include:

* Exporting data that is automatically filtered to include only data within a model view
* Downloading data from a server (where MVDXML essentially serves as a query language)
* Validating data to ensure it contains required information
* Prompting users to provide missing information
* Providing re-usable templates for product types, including parametric behaviors
* Importing and exporting tabular data with specified configurations of tables and columns
* Filtering application functionality to a subset within a model view (e.g. electrical domain)
* Providing attribute editing functionality for high-level concepts instead of low-level data.
 
While MVDXML is used within IFC4, it does not depend on IFC4; it may also be used with IFC2x3, earlier IFC releases, or entirely separate schemas.


### MVDXML tools
While mvdXML files may be authored using a text editor or XML editor, or any other third-party MVD editing tool, buildingSMART International has provided a Windows application for simplified ifcXML editing and documentation generation called "ifcDoc". For download and an overview presentation go <a href="http://www.buildingsmart-tech.org/specifications/specification-tools/ifcdoc-tool/ifcdoc-beta-summary">here</a>.

The IfcDoc tool is also used to generate documentation of the IFC specification itself, and the baseline MVD concept templates and concepts that are part of the IFC4 specification (the first release of IFC that comes with predefined concept definitions). It therefore allows to quickly expand the generic MVD concepts to cover the specific requirements and business rules that are introduced by a set of Exchange Requirements. This shall speed-up the MVD development process.