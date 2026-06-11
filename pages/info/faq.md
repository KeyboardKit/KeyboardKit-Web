---
permalink: /faq
layout: page-sidebar

title: FAQ

description: This page contains frequently asked questions about custom keyboards.
---

Find answers to common questions about custom keyboards and KeyboardKit below. If you can't find what you're looking for, feel free to [reach out](/contact).

## Custom Keyboards

{% assign items = site.data.faq | where: "tag", "custom-keyboards" %}
{% include kankoda/components/faq-list items=items %}

## KeyboardKit

{% assign items = site.data.faq | where: "tag", "keyboardkit" %}
{% include kankoda/components/faq-list items=items %}

## KeyboardKit Pro

{% assign items = site.data.faq | where: "tag", "pro" %}
{% include kankoda/components/faq-list items=items %}

## Licenses

{% assign items = site.data.faq | where: "tag", "licenses" %}
{% include kankoda/components/faq-list items=items %}

## Privacy & Security

{% assign items = site.data.faq | where: "tag", "privacy" %}
{% include kankoda/components/faq-list items=items %}

## Terminology

{% assign items = site.data.faq | where: "tag", "terminology" %}
{% include kankoda/components/faq-list items=items %}
