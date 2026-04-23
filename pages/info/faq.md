---
title: FAQ
layout: page-sidebar
permalink: /faq

description: This page contains frequently asked questions about custom keyboards.
---

Find answers to common questions about custom keyboards and KeyboardKit below. If you can't find what you're looking for, feel free to [reach out](/contact).

## Custom Keyboards

{% assign items = site.data.faq | where: "tag", "custom-keyboards" %}
{% include kankoda/components/faq-list items=items %}

## KeyboardKit

{% assign items = site.data.faq | where: "tag", "keyboardkit" %}
{% include kankoda/components/faq-list items=items %}

## Licensing & Pricing

{% assign items = site.data.faq | where: "tag", "licensing" %}
{% include kankoda/components/faq-list items=items %}

## Privacy & Security

{% assign items = site.data.faq | where: "tag", "privacy" %}
{% include kankoda/components/faq-list items=items %}
