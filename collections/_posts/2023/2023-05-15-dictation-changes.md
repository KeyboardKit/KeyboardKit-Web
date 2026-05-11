---
title:  Dictation changes
date:   2023-05-15 08:00:00 +0100
tags:   dictation

tweet:  https://twitter.com/GetKeyboardKit/status/1658457509068251142?s=20
toot:   https://techhub.social/@keyboardkit/110378488624461760
---

KeyboardKit 7.6 will fix a dictation-related problem, where you had to add dictation permissions to your app when submitting it to the App Store, even if you didn't use the dictation feature.


## The problem

KeyboardKit 7.5 added a new dictation engine that lets you perform dictation in the app as well, as well as from keyboard extensions where microphone access is blocked.

KeyboardKit dictation works by making the keyboard open its main app, where microphone access can be granted by the user. If granted access, the main app performs dictation, then returns to the keyboard extension, which in turn handles the dictation result by sending it to the document.

However, after the dictation feature was released, people started reporting that submitting apps to the App Store failed with an `Invalid Binary` error if the app didn't specify dictation permissions in its `Info.plist` file, even if the app didn't use the dictation features.

Turns out that the `Speech` framework, which is at the heart of the speech recognition parts of the dictation feature, will automatically enforce these permissions when the speech recognizer code is compiled into the app binary, even if dictation isn't used by the app itself.


## The solution

To solve this problem, KeyboardKit 7.6 separates the speech recognizion parts from the dictation, by requiring that you pass in a speech recognizer when setting up dictation.

This makes it a little more complicated to set up dictation, but actually makes things more modular, since you can now pass in a custom speech recognizer without affecting the dictation logic.

KeyboardKit has a standard speech recognizer ready for you to use, but since the `Speech` code can't be added to the library, you have to add it to your app when you need it:

```swift
#if os(iOS)
import Speech
import KeyboardKitPro

public class StandardSpeechRecognizer: SpeechRecognizer {

    public init() {}

    private var resultHandler: ResultHandler?
    private var speechRecognizer: SFSpeechRecognizer?
    private var speechRecognizerRequest: SFSpeechAudioBufferRecognitionRequest?
    private var speechRecognizerTask: SFSpeechRecognitionTask?

    public var authorizationStatus: DictationAuthorizationStatus {
        SFSpeechRecognizer.authorizationStatus().keyboardDictationStatus
    }

    public func requestDictationAuthorization() async throws -> DictationAuthorizationStatus {
        await withCheckedContinuation { continuation in
            SFSpeechRecognizer.requestAuthorization { status in
                continuation.resume(returning: status.keyboardDictationStatus)
            }
        }
    }

    public func resetDictationResult() async throws {}

    public func startDictation(
        with config: DictationConfiguration
    ) async throws {
        try await startDictation(with: config, resultHandler: nil)
    }

    public func startDictation(
        with config: DictationConfiguration,
        resultHandler: ResultHandler?
    ) async throws {
        guard let recognizer = setupSpeechRecognizer(for: config) else { throw DictationServiceError.missingSpeechRecognizer }
        guard let request = setupSpeechRecognizerRequest() else { throw DictationServiceError.missingSpeechRecognitionRequest }
        self.resultHandler = resultHandler
        setupSpeechRecognizerTask(for: recognizer, and: request)
    }

    public func stopDictation() async throws {
        speechRecognizerRequest?.endAudio()
        speechRecognizerRequest = nil
        speechRecognizerTask?.cancel()
        speechRecognizerTask = nil
    }

    public func setupAudioEngineBuffer(_ buffer: AVAudioPCMBuffer) {
        speechRecognizerRequest?.append(buffer)
    }
}

private extension StandardSpeechRecognizer {

    func setupSpeechRecognizer(for config: DictationConfiguration) -> SFSpeechRecognizer? {
        let locale = Locale(identifier: config.localeId)
        speechRecognizer = SFSpeechRecognizer(locale: locale)
        return speechRecognizer
    }

    func setupSpeechRecognizerRequest() -> SFSpeechAudioBufferRecognitionRequest? {
        speechRecognizerRequest = SFSpeechAudioBufferRecognitionRequest()
        speechRecognizerRequest?.shouldReportPartialResults = true
        return speechRecognizerRequest
    }

    func setupSpeechRecognizerTask(
        for recognizer: SFSpeechRecognizer,
        and request: SFSpeechRecognitionRequest
    ) {
        speechRecognizerTask = recognizer.recognitionTask(with: request) { [weak self] in
            self?.handleTaskResult($0, error: $1)
        }
    }

    func handleTaskResult(_ result: SFSpeechRecognitionResult?, error: Error?) {
        let result = SpeechRecognizerResult(
            dictatedText: result?.bestTranscription.formattedString,
            error: error,
            isFinal: result?.isFinal ?? true)
        resultHandler?(result)
    }
}
#endif
```

If you know how the code could be included in the source code without causing this problem, please reach out.


## More improvements

Besides fixing this problem, KeyboardKit 7.6 will also improve the dictation performance, add more information to the dictation context and make it possible to start dictation in more ways.

For instance, DocumentGroup-based apps can't use `onOpenURL` and SwiftUI deep links, since they may have no document view loaded that can start dictation.

To work around this, you now have more view modifiers that let you start dictation without a deep link. Future versions will add even more document-supporting features to improve things further.

There will also be a bunch of renamings and restylings, where the document overlay and indicator will be renamed and redesigned to by default mimic the native iOS keyboard dictation view.


## Conclusion

KeyboardKit 7.6 will make pretty drastic changes to the dictation engine. Most changes are using proper deprecations to avoid breaking changes, but some breaking changes couldn't be avoided.

Are you using KeyboardKit dictation in your app? If so, don't hesitate to reach out and share your thoughts on how it's designed, if you have any feedback or feature requests etc.