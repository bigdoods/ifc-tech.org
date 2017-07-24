---
title: change-log
---

<p> Purpose of the Technical Corrigendum
The main purpose of the technical corrigendum is to reflect the required improvements of the documentation that became evident during the implementation if this IFC release. It mainly relates to ambiguities, potentially erroneous explanations, missing guidance on using certain classes and geometric use cases or similar. It is not meant to change the schema that would require a recompilation of the toolboxes used for implementation, nor the *.ifc exchange files, so that files remain upwards and downwards compatible.

The purpose of this technical corrigendum is to correct several known minor technical problems found since the release of the IFC2x Edition 3 specification and to improve the documentation generally.

In the world of paper-based standards, a technical corrigendum typically is a collection of errata published separately from the specification to which they apply. Users are expected to insert the corrections by hand into their (printed) copy of the original specification. This process is basically infeasible with an electronic specification. The IAI Model Support Group has chosen to release the corrected specification in its entirety but call it a technical corrigendum since it is fundamentally a correction of the existing specification rather than an expansion of scope and functionality.

A specific technical change to be noted in this technical corrigendum is the modification of the defined type IfcCompoundPlaneAngleMeasure to allow optionally for the expression of angles to a fraction of a second. This change affects the specification (and existing software implementations) minimally but is an important first step in bringing the IFC and geospatial information specifications into alignment. This change allows an IFC-specified building model to be referenced to a set of geospatial coordinates with the precision necessary for geospatial work.

Technical corrections include the deletion, modification, or addition of a number of where rules in the EXPRESS schema. As well, a number of functions in the EXPRESS schema have been modified and a new one added. Several derived attributes have been removed from the EXPRESS schema because of ambiguity that could not be resolved satisfactorily. Clarifications have been introduced to the accompanying documentation in a number of places. All these changes have been made to realize the intent of the specification developers and to remove difficulties that implementers were having with data creation and validation. The IFC2x3 to IFC2x3 TC1 change log should be consulted for more details.

Editorially, some instances of awkward English syntax have been adjusted and misspellings and other typographical errors such as incorrect hyperlinks have been corrected as they have been discovered. </p>
