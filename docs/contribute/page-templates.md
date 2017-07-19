---
title: Using User-guide Templates
---


<p>These page templates are available for writers who would like to contribute new user guide content to the IFC docs:</p>

 <ul>
    <li><a href="#tutorial_template">Tutorial</a></li>
    <li><a href="#concept_template">Concept</a></li>
</ul> 

<p>The page template is in the <a href="https://github.com/bigdoods/ifc-tech.org/tree/master/_includes/templates" target="_blank">_includes/templates</a> directory of the <a href="https://github.com/bigdoods/ifc-tech.org/">ifc-tech.org</a> repository.
  
<p>A tutorial page shows how to do a single thing, typically by giving a short
sequence of steps. Tutorial pages have minimal explanation, but often provide links
to conceptual topics that provide related background and knowledge.</p>

<p>To write a new tutorial page, create a Markdown file in a subdirectory of the
/docs/user-guides directory. In your Markdown file, provide values for these
variables, and then include templates/tutorial.md:</p>

<ul>
    <li>overview - required</li>
    <li>prerequisites - required</li>
    <li>steps - required</li>
    <li>discussion - optional</li>
    <li>whatsnext - optional</li>
</ul>

<p>In the <code>steps</code> section, use <code>##</code> to start with a level-two heading. For subheadings,
use <code>###</code> and <code>####</code> as needed. Similarly, if you choose to have a <code>discussion</code> section,
start the section with a level-two heading.</p>

<p>Here's an example of a Markdown file that uses the tutorial template:</p>

{% raw %}
<pre>---
title: Configuring This Thing
---

{% capture overview %}
This page shows how to ...
{% endcapture %}

{% capture prerequisites %}
* Do this.
* Do this too.
{% endcapture %}

{% capture steps %}
## Doing ...

1. Do this.
1. Do this next. Possibly read this [related explanation](...).
{% endcapture %}

{% capture discussion %}
## Understanding ...

Here's an interesting thing to know about the steps you just did.
{% endcapture %}

{% capture whatsnext %}
* Learn more about [this](...).
* See this [related task](...).
{% endcapture %}

</pre>
{% endraw %}

<p>Here's an example of a published topic that uses the task template:</p>

<p><a href="/weNeedAtopic/">the topic</a></p>

<h2 id="tutorial_template">Tutorial template</h2>

<p>A tutorial page shows how to accomplish a goal that is larger than a single
task. Typically a tutorial page has several sections, each of which has a
sequence of steps. For example, a tutorial might provide a walkthrough of a
code sample that illustrates a certain feature of IFC. Tutorials can
include surface-level explanations, but should link to related concept topics
for deep explanations.

<p>To write a new tutorial page, create a Markdown file in a subdirectory of the
/docs/tutorials directory. In your Markdown file, provide values for these
variables, and then include templates/tutorial.md:</p>

<ul>
    <li>overview - required</li>
    <li>prerequisites - required</li>
    <li>objectives - required</li>
    <li>lessoncontent - required</li>
    <li>cleanup - optional</li>
    <li>whatsnext - optional</li>
</ul>

<p>In the <code>lessoncontent</code> section, use <code>##</code> to start with a level-two heading. For subheadings,
use <code>###</code> and <code>####</code> as needed.

<p>Here's an example of a Markdown file that uses the tutorial template:</p>

{% raw %}
<pre>---
title: Using IFC to do a thing
---

{% capture overview %}
This page shows how to ...
{% endcapture %}

{% capture prerequisites %}
* Do this.
* Do this too.
{% endcapture %}

{% capture objectives %}
* Learn this.
* Build this.
* Run this.
{% endcapture %}

{% capture lessoncontent %}
## Building ...

1. Do this.
1. Do this next. Possibly read this [related explanation](...).

## Running ...

1. Do this.
1. Do this next.

## Understanding the code
Here's something interesting about the code you ran in the preceding steps.
{% endcapture %}

{% capture whatsnext %}
* Learn more about [this](...).
* See this [related tutorial](...).
{% endcapture %}

{% include user-guides/tutorial.md %}
</pre>
{% endraw %}

<p>Here's an example of a published tutorial that uses the tutorial template:</p>

<!-- (tbc) update link to example page  -->
<p><a href="/docs/concepts/object-metadata/annotations">Building an IFC file from source</a></p>

<h2 id="concept_template">Concept template</h2>

<p>A concept page explains some aspect of IFC. For example, a concept
page might describe an IFC schema object and explain the role it
plays as a schema is built and updated. Typically, concept
pages don't include sequences of steps, but instead provide links to
tutorials.

<p>To write a new concept page, create a Markdown file in a subdirectory of the
/docs/concepts directory. In your Markdown file,  provide values for these
variables, and then include templates/concept.md:</p>

<ul>
    <li>overview - required</li>
    <li>body - required</li>
    <li>whatsnext - optional</li>
</ul>

<p>In the <code>body</code> section, use <code>##</code> to start with a level-two heading. For subheadings,
use <code>###</code> and <code>####</code> as needed.

<p>Here's an example of a page that uses the concept template:</p>

{% raw %}
<pre>---
title: Understanding this Thing
---

{% capture overview %}
This page explains ...
{% endcapture %}

{% capture body %}
## Understanding ...

IFC provides ...

## Using ...

To use ...
{% endcapture %}

{% capture whatsnext %}
* Learn more about [this](...).
* See this [related task](...).
{% endcapture %}

{% include templates/concept.md %}
</pre>
{% endraw %}

<p>Here's an example of a published concept that uses the concept template:</p>

<!-- (tbc) update link to example page  -->
<p><a href="/docs/concepts/object-metadata/annotations">The IFC schema object</a></p>
