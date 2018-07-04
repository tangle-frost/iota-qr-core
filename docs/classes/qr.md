[@tangle-frost/iota-qr-core](../README.md) > [QR](../classes/qr.md)

# Class: QR

Class to generates QR codes from data. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**QR**

## Index

### Constructors

* [constructor](qr.md#constructor)

### Methods

* [addAlphaNumeric](qr.md#addalphanumeric)
* [addNumber](qr.md#addnumber)
* [addText](qr.md#addtext)
* [generate](qr.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QR**(typeNumber?: *`number`*, errorCorrectLevel?: *[ErrorCorrectLevel](../enums/errorcorrectlevel.md)*): [QR](qr.md)

*Defined in qr.ts:37*

Create a new instance of QR.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` typeNumber | `number` | 6 |  0 to 40, 0 means autodetect |
| `Default value` errorCorrectLevel | [ErrorCorrectLevel](../enums/errorcorrectlevel.md) |  ErrorCorrectLevel.L |  'L','M','Q','H' |

**Returns:** [QR](qr.md)

___

## Methods

<a id="addalphanumeric"></a>

###  addAlphaNumeric

▸ **addAlphaNumeric**(qrData: *`string`*): `void`

*Defined in qr.ts:77*

Add alpha numeric to the QR Code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qrData | `string` |  The data to add. |

**Returns:** `void`

___
<a id="addnumber"></a>

###  addNumber

▸ **addNumber**(qrData: *`string`*): `void`

*Defined in qr.ts:69*

Add number to the QR Code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qrData | `string` |  The data to add. |

**Returns:** `void`

___
<a id="addtext"></a>

###  addText

▸ **addText**(qrData: *`string`*): `void`

*Defined in qr.ts:61*

Add text data to the QR Code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qrData | `string` |  The data to add. |

**Returns:** `void`

___
<a id="generate"></a>

###  generate

▸ **generate**(): [QRCellData](../#qrcelldata)

*Defined in qr.ts:87*

Generate the display buffer.

**Returns:** [QRCellData](../#qrcelldata)
Boolean buffer of pixels

___

