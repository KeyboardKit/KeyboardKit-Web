---
title:  How to (not) navigate back to the keyboard from the app
date:   2024-01-31 08:00:00 +0100
tags:   navigation

tweet:  https://x.com/GetKeyboardKit/status/1752969884886044881?s=20
toot:   https://techhub.social/@keyboardkit/111855245325388950
---

Keyboard extensions may sometimes want to open the main app to perform some operations, or provide a larger UI for settings. Getting back to the keyboard is however unfortunately not as easy.

[KeyboardKit Pro](/pro) had a `PreviousAppNavigator` that could be used to navigate back to the keyboard (in the previously open app) from the main app. This was used to e.g. take the user back to the keyboard when dictation finished in the app.

However, the first implementation, which is also used by apps like Gboard, stopped working in iOS 17, leaving dictation stuck in the main app.

To fix this, KeyboardKit 8 added a new implementation, that used `LSApplicationWorkspace` to rather open the bundle ID of the previous app. This fix was however rejected by Apple. If you want to risk using the rejected code, here are two implementations that you can add *at your own risk*.


### Option 1 - Using LSApplicationWorkspace

The following code uses `LSApplicationWorkspace` to navigate "forward" to any bundle ID.

```swift
func openPreviousApplication() {
    guard let obj = objc_getClass("LSApplicationWorkspace") as? NSObject else { return false }
    let workspace = obj.perform(Selector(("defaultWorkspace")))?.takeUnretainedValue() as? NSObject
    guard let workspace else { return }
    let selector = Selector(("openApplicationWithBundleID:"))
    let bundleId = previousApplicationBundleId
    _ = workspace.perform(selector, with: bundleId)
}
```

This code works in iOS 17, but will most likely be rejected by the App Store review process, which is why the library doesn't include it, since it would affect all apps.



### Option 2 - Resolving UIApplication.shared

This code tries to resolve `UIApplication.shared` to perform a back navigation.

```swift
func openPreviousApplication() {
    let sysNavIvar = class_getInstanceVariable(UIApplication.self, variableId),
    let action = object_getIvar(UIApplication.shared, sysNavIvar) as? NSObject,
    _ = action.perform(#selector(getter: PrivateSelectors.destinations)).takeUnretainedValue() as? [NSNumber],
}
```

This code works in iOS 16, but doesn't work in iOS 17, and will also most probably be rejected.


## Conclusion

There currently doesn't seem to be a way to navigate back to the keyboard in the last opened app, to return to the keyboard after performing some work in the main app.

Since the lack of back navigation gives a bad user experience, please use Apple Feedback Assistant to request a native way to achieve this navigation.

If you happen to know a way to get this to work in a way that doesn't get rejected by the App Store review process, please tell us about it in a tweet or toot.