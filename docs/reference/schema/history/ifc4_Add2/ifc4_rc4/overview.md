---
title: IFC4_RC4 Overview
---

## Release Notes
The purpose of the IFC4 is to enhance the capability of the IFC specification in several areas of building elements, building service elements and structural elements and accompanying basic definitions. It also corrects several known technical problems found since the release of the IFC2x Edition 3 specification. Another main goal is to improve readability and ease the access to the IFC specification, by adding examples, more use definitions and to generalize the fundamental concepts that apply to many elements. With this release candidate 4 the IFC specification now also covers both EXPRESS and XML schema, the baseline for all Model View Definitions (MVD) and links to the buildingSMART data dictionary.

NOTE  The IFC4 RC4 is the last release 
candidate before publishing IFC4 final

## Highlighted News in Release Candidate 4

new ifcXML4 schema part of the specification
fully integrated with new MVD technology
definitions of fundamental concepts (MVD)
use definitions link to fundamental concepts
all property sets link to buildingSMART data dictionary
many more fully linked examples
automatically generated change logs
many documentation improvements and instantiation diagrams
Improvements made in this Release Candidate 4
The main task that had been to integrate the IFC specifications with other buildingSMART developments, in particular the simple ifcXML, the new mvdXML methodology, the buildingSMART data dictionary and the development of ifcDoc, the buildingSMART specification development toolkit.

simple ifcXML

The simple ifcXML technology stands for generating a simple XML Schema from the IFC and from all Model View Definitions, created following the mvdXML methodology. First tests show a decrease of XML exchange footage to about 20-25% compared with previous XML files written according to the ifcXML for IFC2x3 schema. The ifcXML4 schema is published for the first time in the IFC4 development cycle, and it is fully integrated into the IFC specification (any construct within the IFC specification has both, the EXPRESS and the XSD code).

MVD fundamental concepts and concept use definitions

The new mvdXML methodology defines the Model View Definition as applying a set of fundamental concepts required by the particular exchange scenario (expressed as an Information Delivery Manual, IDM) and adding specific rules on how such fundamental concepts are to be used by the selected subset of IFC constructs. A valid MVD is therefore a legal subset of the whole IFC schema with additional rules applying. Many of such fundamental concepts (called "concept template" in mvdXML) are now part of the IFC4 specification as Chapter 4. Many IFC entities have concept use definitions showing how such fundamental concepts are used. This provides an ideal kick-start for future MVD developments.

Property Sets link to buildingSMART Data Dictionary

All property set definitions and included property definitionsare now included in the buildingSMART data dictionary (bsDD, formally known as IFD). A direct look-up link is provided. Each individual property definition provided as part of IFC has an own library GUID, managed within the bsDD. In addition, property set and property definitions can now be expressed within the IFC schema itself (as property set and property template),, hence they are also published as an IFC and ifcXML file (see Annex A).

Examples and instantiation diagrams

One of the recognized issues with the IFC specification has always been its complex nature and the steep learning curve to get a first understanding. And nothing provides a better explanation than small examples. Therefore the Annex-E has been greatly enhanced to cover now many examples that are bi-directionally linked (from the example to the specification and vice versa). Most of the examples come with an IFC file that can be used for testing.

General documentation improvements

Many explanations for the IFC constructs have been enhanced, and the new method of deriving the use definitions from applying general concepts is introduced step by step. This also includes instantiation diagrams that are automatically generated from the concepts that are applicable to a certain IFC entity. The change logs (both for the IFC schema and for the property set definitions) are now automatically generated and available in Annex-F.

 

Purpose
The purpose of publishing the IFC2x4 RC3 is to further encourage the international buildingSMART community to provide feedback and issue reports in order to increase quality and implementability of the next IFC release. The focus of the feedback should be the improvement of documentation, adding new examples and better overall guidance of the readers. Any comments about the ease of use and examples to demonstrate the use of IFC concepts that could be incorporated are highly appreciated. No schema changes are acceptable for the upcoming IFC2x4 final release (or, if necessary, the IFC2x4 RC4).

A link to the official documentation can be found <a href="/docs/reference/schema/history/ifc2x3-tc1/ifc2x-Add1/ifc2x-Add1.md">here</a>
An overview of all changes since IFC2x is provided <a href="/docs/reference/schema/history/ifc2x3-tc1/ifc2x-Add1/change-log.md">here</a>