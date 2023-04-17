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
  const response = await fetch('/admin/data.csv');
  const text = await response.text();
  const entries = text.trim().split('\n').slice(-5).reverse();

  const [latestEntry] = entries;
  const [url, timestamp] = latestEntry.split(',');
  const date = new Date(Number(timestamp)).toLocaleString();
  currentTopic.innerHTML = `<a href="${url}">${url}</a> (as of ${date})`;

  const previousTopicList = entries.slice(1);
  for (const entry of previousTopicList) {
    const [url, timestamp] = entry.split(',');
    const date = new Date(Number(timestamp)).toLocaleString();
    const previousTopic = document.createElement('li');
    previousTopic.innerHTML = `<a href="${url}">${url}</a> (as of ${date})`;
    previousTopics.appendChild(previousTopic);
  }
}

updateCurrentTopic();
setInterval(updateCurrentTopic, 30000);
</script>
