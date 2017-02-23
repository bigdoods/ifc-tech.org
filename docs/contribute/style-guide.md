---
title: Documentation Style Guide
---

{% capture overview %}
This page gives writing style guidelines for the IFC documentation.
These are guidelines, not rules. Use your best judgment, and feel free to
propose changes to this document in a pull request.

For additional information on creating new content for the IFC
docs, follow the instructions on
[using page templates](/docs/contribute/page-templates/) and
[creating a documentation pull request](/docs/contribute/create-pull-request/).
{% endcapture %}

{% capture body %}

## Documentation formatting standards


### Use angle brackets for placeholders

Use angle brackets for placeholders. Tell the reader what a placeholder
represents.

1. Display contents of a folder:

        ls -la <folder-name>

    where `<folder-name>` is the name of one of a folder in the current directory.

### Use bold for user interface elements

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Click <b>Fork</b>.</td><td>Click "Fork".</td></tr>
  <tr><td>Select <b>Other</b>.</td><td>Select 'Other'.</td></tr>
</table>

### Use italics to define or introduce new terms

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>A <i>object class</i> is a set of characteristics ...</td><td>An "object" is a set of metadata to decribe an object ...</td></tr>
</table>

### Use code style for filenames, directories, and paths

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Open the <code>envars.yaml</code> file.</td><td>Open the envars.yaml file.</td></tr>
  <tr><td>Go to the <code>/docs/tutorials</code> directory.</td><td>Go to the /docs/tutorials directory.</td></tr>
  <tr><td>Open the <code>/_data/concepts.yaml</code> file.</td><td>Open the /_data/concepts.yaml file.</td></tr>
</table>

## Inline code formatting

### Use code style for inline code and commands

For inline code in an HTML document, use the `<code>` tag. In a Markdown
document, use the backtick (`).

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>The <code>IFC</code> file is used for interoperability.</td><td>IFC is used for interoperability.</td></tr>
  <tr><td>The <code>IFC</code> file is used for interoperability.</td><td>IFC is used for interoperability.</td></tr>
</table>

### Use code style for object field names

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Set the value of the <code>something</code> field in the file.</td><td>Set the value of the "something" field in the file.</td></tr>
  <tr><td>The value of the <code>something</code> field is a something object.</td><td>The value of some object.</td></tr>
</table>

### Use normal style for string and integer field values

For field values of type string or integer, use normal style without quotation marks.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Set the value of <code>something</code> to Always.</td><td>Set the value of <code>something</code> to "Always".</td></tr>
  <tr><td>Set the value of <code>something</code> to something.</td><td>Set the value of <code>something</code> to <code>something</code>.</td></tr>
  <tr><td>Set the value of the <code>something</code> field to 2.</td><td>Set the value of the <code>something</code> field to <code>2</code>.</td></tr>
</table>

## Code snippet formatting

### Don't include the command prompt

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>change directory</td><td>$ cd somewhere</td></tr>
</table>


{% comment %}## IFC word list

A list of IFC-specific terms and words to be used consistently across the site.

<table>
  <tr><th>Term</th><th>Useage</th></tr>
  <tr><td>TBD</td><td>TBD</td></tr>
</table>{% endcomment %}


## Content best practices

This section contains suggested best practices for clear, concise, and consistent content.

### Use present tense

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>This command does something.</td><td>This command will do something.</td></tr>
</table>

Exception: Use future or past tense if it is required to convey the correct
meaning.

### Use active voice

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>You can explore IFC using a browser.</td><td>The IFC can be explored using a browser.</td></tr>
  <tr><td>The IFC file specifies the file header.</td><td>The file header is specified in the IFC file.</td></tr>
</table>

Exception: Use passive voice if active voice leads to an awkward construction.

### Use simple and direct language

Use simple and direct language. Avoid using unnecessary phrases, such as saying "please."

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>To open the IFC file, ...</td><td>In order to read the header, ...</td></tr>
  <tr><td>See the configuration file.</td><td>Please see the configuration file.</td></tr>
  <tr><td>View the object classes.</td><td>With this next command, we'll view the object classes.</td></tr>

</table>

### Address the reader as "you"

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>You can create an IFC file by ...</td><td>We'll create a IFC file by ...</td></tr>
    <tr><td>In the preceding output, you can see...</td><td>In the preceding output, we can see ...</td></tr>
</table>

## Patterns to avoid

### Avoid using "we"

Using "we" in a sentence can be confusing, because the reader might not know
whether they're part of the "we" you're describing.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Version IFC5 includes ...</td><td>In version IFC5, we have added ...</td></tr>
  <tr><td>IFC provides a new feature for ...</td><td>We provide a new feature ...</td></tr>
  <tr><td>This page teaches you how to use IFC headers.</td><td>In this page, we are going to learn about IFC headers.</td></tr>
</table>

### Avoid jargon and idioms

Some readers speak English as a second language. Avoid jargon and idioms to help make their understanding easier.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>Internally, ...</td><td>Under the hood, ...</td></tr>
    <tr><td>Create a new file.</td><td>Turn up a new file.</td></tr>
</table>

### Avoid statements about the future

Avoid making promises or giving hints about the future. If you need to talk about
an alpha feature, put the text under a heading that identifies it as alpha
information.

### Avoid statements that will soon be out of date

Avoid words like "currently" and "new." A feature that is new today might not be
considered new in a few months.

<table>
  <tr><th>Do</th><th>Don't</th></tr>
  <tr><td>In version IFC5, ...</td><td>In the current version, ...</td></tr>
    <tr><td>The feature provides ...</td><td>The new feature provides ...</td></tr>
</table>

{% endcapture %}


{% capture whatsnext %}
* Learn about [writing a new topic](/docs/contribute/write-new-topic/).
* Learn about [using page templates](/docs/contribute/page-templates/).
* Learn about [staging your changes](/docs/contribute/stage-documentation-changes/)
* Learn about [creating a pull request](/docs/contribute/create-pull-request/).
{% endcapture %}

{% include templates/concept.md %}
