---
title: License Validation
layout: page-sidebar
permalink: /pro/license-validation

description: KeyboardKit Pro can validate standard licenses over the Internet, and business licensess directly on-device.
---

{{page.description}}

## Online License Validation

All [standard licenses](/pro) are validated over a network call to a license server. This means that your keyboard will need Full Access to be able to validate your license key.

KeyboardKit will automatically cache successful license validations to handle temporary connection loss, but the first launch and periodic launches will require a new validation.


## On-Device License Validation

All [business licenses](/business) are validated on-device, without need for Full Access. These licenses are delivered on a file that automatically unlocks KeyboardKit Pro when you add it to your app.


## License Files

A KeyboardKit license file is a binary file that can be added to your app to enable KeyboardKit. Just add and link it to the main app target and its keyboard extension, and KeyboardKit will use it to register your license.

You will get a new license file after renewing your license. Until then, all license validation will be performed on device, with no need to call an external license service.