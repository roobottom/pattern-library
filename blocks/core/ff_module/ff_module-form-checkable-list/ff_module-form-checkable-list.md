---
data:
    modifier: inline
    inputs: 
        - 
            label: "Radio item 1"
            type: radio
            id: "radio-id-1"
            value: "radio-value-1"
            name: "radio-list-group"
            checked: false
        - 
            label: "Radio item 2"
            type: radio
            id: "radio-id-2"
            value: "radio-value-2"
            name: "radio-list-group"
            checked: true
        - 
            label: "Radio item 3"
            type: radio
            id: "radio-id-3"
            value: "radio-value-3"
            name: "radio-list-group"
            checked: false

requires: 
    - ff_module-form-label
    - ff_module-form-input
---

## Description

A module for displaying groups of radio or checkboxes.

## Modifier options:

- inline (default)
- stacked

## Default list type:

- radio
