{% assign product = include.product %}
{% assign product-escaped = include.product | split: " " | join: "%20" %}
{% assign show-title = include.show-title | default: 1 %}
{% assign kankoda-url = include.company-url | default: "https://kankoda.com" %}
{% assign privacy-url = include.cprivacy-url | default: "/privacy" %}
{% assign custom-email = site.urls.email | append: "?subject=" | append: product-escaped | append: "%20-%20Custom%20Plan" %}


These are the Standard Terms & Conditions for the [{{product}} SDK]({{include.url}}) ("the Software"), which is owned and licensed by [Kankoda Sweden AB]({{kankoda-url}}) (“the Licensor").


## Scope

The standard license is for indies, startups and small businesses. For companies with $10M+ annual revenue or apps with $1M+ annual revenue, please [contact us]({{custom-email}}) for a custom license.


## License Activation

Standard licenses that are purchased via a subscription can be used immediately after signup, using the unique license key that is provided with the subscription purchase confirmation.

Licenses that are purchased via invoicing or any other means of payment, will typically be activated within two business days after payment has been received.


## License Validation

Standard licenses are validated using network requests. The license validation is designed to handle temporary connectivity loss, but requires regular connectivity for a license to be properly validated.

Yearly Gold/Business/Custom/Enterprise licenses are delivered as encrypted files and are validated on-device, without the need for network-based validation.


## License Expiration

Standard licenses expire when the subscription ends, or when the on-device license or license file expires. This will stop the Software from being used until the license is renewed.

Yearly Gold/Business/Custom/Enterprise licenses can customize the license expiration behavior to allow a grace period in already shipped versions of the related product.


## Free Trial

Standard licenses that are purchased via the online store include a free trial with unlimited access to non-consumption based features in the selected tier. 

The trial will automatically convert to a paid plan if it's not cancelled before the trial period ends.


## Refunds

Standard licenses that are purchased via the online store honor the store-specific refund policy (7 days for Gumroad, and 14 days for Paddle).

No refunds will be approved after a license has been activated and encoded into the Software, or delivered as a license file to the licensee.


## Technical Information

The Software targets the current major OS version, and two major versions back (one for macOS). Any support for older OS versions will only be removed in a major version bump.

The Software is built with the latest version of Xcode, but offers on-demand builds using the last major version, up to three months after the latest major version was released. 


## Feature Disclaimer

The Software depends on hardware- and operating system capabilities that are provided by Apple and that can be changed or removed at any time, at Apple’s discretion.

Features that stop working due to, but not limited to, such changes, may be removed at any time, without replacement or compensation, since the required capabilities may no longer be available.


## Data Collection

By using the Software under the Standard License, you grant {{site.copyright_owner}} a right to collect usage data and crash reports from the Software.

The Software reserves the right to adjust its data collection practices in any future update. For a full specification on how the Software may collect data, see the Software's [privacy policy]({{privacy-url}}).

Custom/Enterprise licenses can opt-out of any data collection practices in the license agreement.


## Right to Market

By using the Software under the Standard License, you grant {{site.copyright_owner}} a non-exclusive, worldwide, royalty-free right to use your app/company name and logo in our marketing materials, case studies, and promotional content. 

The Right to Market includes the right to identifying you as a customer and describing your general use of the Software.

Custom/Enterprise license customers can opt-out of the right to market in the license agreement.


## Closed-Source License Agreement

This license agreement applies to the {{ product }} SDK (hereby referred to as "the Software").

The Software and any associated software, documentation and resources  must only be used with a valid license key and a prior written agreement between the licenser and the licensee.

The Software must only be used in application(s) that are included in the license agreement, and must not be distributed to, or used by, individual developers, teams, companies or other parties that are not covered by the license agreement.

Any attempts to bypass, disable or work around these limitations or any other restrictions or security mechanisms in the Software, will be considered as an attempt to violate the license agreement and may terminate the license and render the licenser liable to compensate the licensee for any efforts, damages, loss of IP or any other economic losses caused by the infringement.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT-ABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Laws and Regulations

These terms and conditions are governed by and construed in accordance with Swedish law.

The courts of Sweden shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these terms. The seat of arbitration shall be Stockholm. The language to be used in the arbitral proceedings shall be Swedish. This contract shall be governed by the substantive law of Sweden. The Parties undertake and agree that all arbitral proceedings conducted with reference to this arbitration section will be kept strictly confidential.


## Copyright

Copyright © {{site.copyright_year}} {{site.copyright_owner}}