---
title: XML Overview
---

In addition to the IFC-EXPRESS specification an ifcXML specification is published as well (since the IFC2x release). The ifcXML spec is provided as an <a href="http://www.w3.org/XML/Schema#dev">XML schema 1.0</a>, as defined by W3C. The ifcXML exchange file structure (the syntax of the IFC data file with suffix ".ifcXML") is the XML document structure. The XML schema is automatically created from the IFC-EXPRESS source using the "XML representation of EXPRESS schemas and data", defined as ISO10303-28 ed. 2. This ensures that both IFC-EXPRESS and ifcXML handle the same data consistently and that the *.ifc and *.ifcXML data files can be converted bi-directionally.