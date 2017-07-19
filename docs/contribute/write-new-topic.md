---
title: Writing a New Topic
---

{% capture overview %}
This page shows how to create a new topic for the IFC docs.
{% endcapture %}

{% capture prerequisites %}
Create a fork of the IFC documentation repository as described in
[Creating a Documentation Pull Request](/docs/contribute/create-pull-request/).
{% endcapture %}

{% capture steps %}

## Choosing a page type

As you prepare to write a new topic, think about which of these page types
is the best fit for your content:

<table>

  <tr>
    <td>Task</td>
    <td>A task page shows how to do a single thing, typically by giving a short sequence of steps. Task pages have minimal explanation, but often provide links to conceptual topics that provide related background and knowledge.</td>
  </tr>

  <tr>
    <td>Tutorial</td>
    <td>A tutorial page shows how to accomplish a goal that is larger than a single task. Typically a tutorial page has several sections, each of which has a sequence of steps. For example, a tutorial might provide a walkthrough of a code sample that illustrates a certain feature of IFC. Tutorials can include surface-level explanations, but should link to related concept topics for deep explanations.</td>
  </tr>

  <tr>
    <td>Concept</td>
    <td>A concept page explains some aspect of IFC. For example, a concept page might describe the IFC Deployment object and explain the role it plays as an application is deployed, scaled, and updated. Typically, concept pages don't include sequences of steps, but instead provide links to tutorials.</td>
  </tr>

</table>

Each page type has a
[template](/docs/contribute/page-templates/)
that you can use as you write your topic.
Using templates helps ensure consistency among topics of a given type.

## Choosing a title and filename

Choose a title that has the keywords you want search engines to find.
Create a filename that uses the words in your title separated by hyphens.
For example, the tutorial with title
[Building an IFC file from source](/docs/tutorials/building-file-from-source.md)
has filename `building-file-from-source`.

## Adding the topic title to the front matter

In your topic, put a `title` field in the
[front matter](https://jekyllrb.com/docs/frontmatter/).
The front matter is the YAML block that is between the
triple-dashed lines at the top of the page. Here's an example:

    ---
    title: Using a object meta-model to abstract IFC data
    ---

## Choosing a directory

Depending on your page type, put your new file in a subdirectory of one of these:

* /docs/tutorials/
* /docs/concepts/

You can put your file in an existing subdirectory, or you can create a new
subdirectory.

## Creating an entry in the table of contents

Depending page type, create an entry in one of these files:

* /_data/tutorials.yaml
* /_data/concepts.yaml

Here's an example of an entry in /_data/tutorials.yaml:

    - docs/tutorials/building-file-from-source.md

## Including code from another file

To include a code file in your topic, place the code file in the IFC
documentation repository, preferably in the same directory as your topic
file. In your topic file, use the `include` tag:

<pre>&#123;% include code.html language="&lt;LEXERVALUE&gt;" file="&lt;RELATIVEPATH&gt;" ghlink="/&lt;PATHFROMROOT&gt;" %&#125;</pre>

where:

* `<LEXERVALUE>` is the language in which the file was written. This must be
[a value supported by Rouge](https://github.com/jneen/rouge/wiki/list-of-supported-languages-and-lexers).
* `<RELATIVEPATH>` is the path to the file you're including, relative to the current file, for example, `clinic.ifc`.
* `<PATHFROMROOT>` is the path to the file relative to root, for example, `docs/tutorials/tutorial.md`.

Here's an example of using the `include` tag:

<pre>&#123;% include code.html language="XML" file="clinic.xml" ghlink="/docs/tutorials/tutorial.xml" %&#125;</pre>

## Showing how to create an IFC object from a configuration file

If you need to show the reader how to create an IFC object based on a
configuration file, place the configuration file in the IFC documentation
repository, preferably in the same directory as your topic file.

In your topic, show this command:

    ifc doSomething http://ifc.com/<PATHFROMROOT>

where `<PATHFROMROOT>` is the path to the configuration file relative to root,
for example, `docs/tutorials/tutorial.xml`.

Here's an example of a command that creates an IFC object from a configuration file:

    ifc doSomething http://ifc.com/docs/tutorials/tutorial.xml

For an example of a topic that uses this technique, see
[An example](/docs/tutorials/tutorial/).

## Adding images to a topic

Put image files in the `/images` directory. The preferred
image format is SVG.

{% endcapture %}

{% capture whatsnext %}
* Learn about [using page templates](/docs/contribute/page-templates/).
* Learn about [staging your changes](/docs/contribute/stage-documentation-changes).
* Learn about [creating a pull request](/docs/contribute/create-pull-request/).
{% endcapture %}
