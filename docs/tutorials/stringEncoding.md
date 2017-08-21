---
title: String Encoding
---

The IFC exchange format "STEP physical file" only allows characters represented by decimal value 32 to 126 from the code table in ISO 8859-1. Any other character, like some Western characters, like the German "Umlaut", Greek or Cyrillic letters, or Asian characters, has to be encoded before being exchanged as part of a string value.

The rules for decoding and encoding are defined in ISO10303-21: "Industrial automation systems and integration — Product data representation and exchange — Part 21: Implementation methods: Clear text encoding of the exchange structure". A short summary and guideline is included in the IFC Implementation Guide (section "Encoding in STEP physical file structure", available [here](/docs/guides/index.md).


<i><b>Example:</b> The following encodings define the character "Upper A umlaut" Ä - the hexadecimal character code is xC4 (decimal 196)</i>

<table style="width:80%">
  <tr>
    <td>'\S\D' </td>  
    <td>character code of D = x44 (decimal 68) added to x80 (128) is  x44 + x80 (68+128) = xC4 (196); since Ä is defined in ISO 8859-1 it is the default code page and no \P encoding is required.</td>
  </tr>
  <tr>
    <td>'\PA\\S\D'  </td>
    <td>same as above, but the \PA\ directive at the begin of the string explicitly defines that the value of xC4 (196) is taken from ISO 8859-1</td>
  </tr>
  <tr>
    <td>'\X\C4'  </td>       
    <td>character code xC4 as 8-bit character code found in ISO 10646 (first 255 characters - also referred to as "row 0")</td>
  </tr>
  <tr>
    <td>'\X2\00C4\X0\'  </td>	
    <td>character code xC4 as 16-bit character x00C4 in ISO 10646 (Unicode)</td>
  </tr>
</table>

To support the encoding and decoding of strings, the team from Bauhaus University Weimar and Hochtief, developers of the OPENIFCTOOLS, has extracted code from its IFC Open Java Toolbox  (btw. now also available as .NET) and made available as a standalone tool with accompanying source code. It is, in the same way as the whole OPENIFCTOOLS, under the license expressed at http://creativecommons.org/licenses/by-nc-sa/3.0.

 

The package made available includes:

OPENIFCTOOLS_StringConverter.jar - the binary, under the Windows environment it can be started by double-click, if .jar is associated with java.exe
OPENIFCTOOLS_StringConverter_src.jar - contains the Source Code
OPENIFCTOOLS_StringConverter_doc.zip - contains the javadoc documentation
 

download the package [here](http://www.buildingsmart-tech.org/downloads/accompanying-tools/string-decoding/OPENIFCTOOLS_StringConverter.zip)
when downloading you agree to the license expressed at http://creativecommons.org/licenses/by-nc-sa/3.0 

<i>Note: buildingSMART provided the content on behalf of its developers on an as-is basis and is not responsible for its content.</i>
