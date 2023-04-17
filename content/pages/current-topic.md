---
title: Current Topics
date: Last Modified 
permalink: /current-topics/
eleventyNavigation:
  key: current-topics 
  order: 1
  title: Current Topics
---

This page is a list of the topic being CURRENTLY DISCUSSED IN THE SESSION.

# Current Topic
<div id="current-topic">Loading...</div>

# Previous Topics
<ul id="previous-topics"></ul>

<script>
const currentTopic = document.querySelector('#current-topic');
const previousTopics = document.querySelector('#previous-topics');

async function updateCurrentTopic() {
  const response = await fetch('/netlify/edge-functions/current-topic');
  const { url, timestamp } = await response.json();
  const date = new Date(timestamp).toLocaleString();
  currentTopic.innerHTML = `<a href="${url}">${url}</a> (as of ${date})`;
  const previousTopic = document.createElement('li');
  previousTopic.innerHTML = `<a href="${url}">${url}</a> (as of ${date})`;
  previousTopics.prepend(previousTopic);
}

updateCurrentTopic();
setInterval(updateCurrentTopic, 30000);


</script>