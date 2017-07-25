---
title: change-log
---

<p> The purpose of this technical corrigendum is to correct several known minor technical problems found since the release of the IFC2x Edition 3 specification and to improve the documentation generally.

Technical corrections include the deletion, modification, or addition of a number of where rules in the EXPRESS schema. As well, a number of functions in the EXPRESS schema have been modified and a new one added. Several derived attributes have been removed from the EXPRESS schema because of ambiguity that could not be resolved satisfactorily.

The modification of the defined type IfcCompoundPlaneAngleMeasure to allow optionally for the expression of angles to a fraction of a second is the only change of the EXPRESS schema that is reflected in the exchange file. This change therefore affects the specification (and existing software implementations) minimally but is an important first step in bringing the IFC and geospatial information specifications into alignment.

Clarifications have been introduced to the accompanying documentation in a number of places. All these changes have been made to realize the intent of the specification developers and to remove difficulties that implementers were having with data creation and validation. The IFC2x3 to IFC2x3 TC1 change log should be consulted for more details.</p>

<p>Purpose of the Technical Corrigendum
The main purpose of the technical corrigendum is to reflect the required improvements of the documentation that became evident during the implementation if this IFC release. It mainly relates to ambiguities, potentially erroneous explanations, missing guidance on using certain classes and geometric use cases or similar. It is not meant to change the schema that would require a recompilation of the toolboxes used for implementation, nor the *.ifc exchange files, so that files remain upwards and downwards compatible.</p>
