---
title: IFC4_RC3 Overview
---

## Release Notes
The purpose of the IFC2x Edition 4 is to enhance the capability of the IFC specification in several areas of building elements, building service elements and structural elements and accompanying basic definitions. It also corrects several known technical problems found since the release of the IFC2x Edition 3 specification and it improves the documentation generally. Some elements that have been deprecated in earlier releases have been removed or adjusted.

IFC2x4 new documentation format thumbnail
The Release Candidate 3 is the basis for developing and publishing the Draft International Standard DIS of ISO 16739. The ISO/DIS 16739 is expected to be submitted to the International Standardization Organization ISO in November 2011.

Since IFC2x4 RC2 a new documentation format has been developed and it is going to be further enhanced.

Improvements made in this Release Candidate
The main new characteristics of RC3 is the enhancement of the new documentation format (introduced in RC2). A new addition is a separate directory where an entry point for the definition of each IFC construct is provided, this makes referencing into the IFC specification far more easy and useful.

Based on the composed URL:

<IFC specification URL/>+<release name/>+<version/>+<html/>+<link/>+<name of IFC construct>+<.htm>
Each IFC entity, type, property set or quantity set can be directly accessed, for example:

http://buildingsmart-tech.org/ifc/IFC2x4/rc3/html/link/IfcBeamStandardCase.htm
http://buildingsmart-tech.org/ifc/IFC2x4/rc3/html/link/IfcBeamTypeEnum.htm
http://buildingsmart-tech.org/ifc/IFC2x4/rc3/html/link/Pset_BeamCommon.htm
http://buildingsmart-tech.org/ifc/IFC2x4/rc3/html/link/QTO_BeamBaseQuantities.htm
Another new enhancement is the multi-lingual publication of property sets and quantity sets, where English is now regarded as a language, together with other languages. Therefore it is separate from the property name (or keyword). See Pset_SpaceCommon, and QTO_SpaceBaseQuantities for an example. Further contributions to the translation are welcome.

Starting with IFC2x4 RC3 the definition of main concepts (see Model View Definition overview) is introduced as part of the IFC specification. Chapter 4 of the specification defines the concept templates, whereas the "use definitions" at the individual IFC entities are gradually moved into concept definitions. In RC3 this has been done for the concepts "Property set assignment" and "Quantity set assignment". It is anticipated that an initial mvdXML baseline for IFC2x4 will be generated automatically from the IFC2x4 specification.

The main addition to the IFC4 schema is the support for tessellated geometry, otherwise a few correction have been made. See the "IFC2x3 to IFC2x4 RC3 change log" for these changes (highlighted in color).

A "What's new in IFC2x4 RC3" section is added to the specification for a quick overview of major changes, the "IFC2x3 TC1 to IFC2x4 RC3 change log" should be consulted for more details. Please also look into the "IFC2x3 TC1 to IFC2x4 RC3 list of deprecated elements". For a basic introduction to IFC2x4 see the unveiling of IFC2x4 summary presentation.

## Purpose of the Release Candidate
The main task that had been resolved in Release Candidate 3 is the enhancement of the documentation, the improvement of the new documentation format. Beside the reference sections of the individual descriptions of each type and entity, several sections on overall scope, terms and information content are added. RC3 focused also on the consistency and stability improvement for IFC2x4. The list of deprecated entities had been discussed with all interested parties and a decision had been made to remove some obsolete definitions. An intense verification work had been carried out to ensure, that IFC2x4 RC3 is upward compatible to the IFC2x3 coordination view sub schema.

The purpose of publishing the IFC2x4 RC3 is to further encourage the international buildingSMART community to provide feedback and issue reports in order to increase quality and implementability of the next IFC release. The focus of the feedback should be the improvement of documentation, adding new examples and better overall guidance of the readers. Any comments about the ease of use and examples to demonstrate the use of IFC concepts that could be incorporated are highly appreciated. No schema changes are acceptable for the upcoming IFC2x4 final release (or, if necessary, the IFC2x4 RC4).