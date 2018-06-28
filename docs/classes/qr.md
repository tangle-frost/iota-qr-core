[@tangle-frost/iota-qr-core](../README.md) > [QR](../classes/qr.md)

# Class: QR

Class to generates QR codes from data. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**QR**

## Index

### Constructors

* [constructor](qr.md#constructor)

### Methods

* [addData](qr.md#adddata)
* [generate](qr.md#generate)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QR**(typeNumber?: *`number`*, errorCorrectLevel?: *[ErrorCorrectLevel](../enums/errorcorrectlevel.md)*): [QR](qr.md)

*Defined in qr.ts:33*

Create a new instance of QR.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` typeNumber | `number` | 1 |  1 to 40 |
| `Default value` errorCorrectLevel | [ErrorCorrectLevel](../enums/errorcorrectlevel.md) |  ErrorCorrectLevel.L |  'L','M','Q','H' |

**Returns:** [QR](qr.md)

___

## Methods

<a id="adddata"></a>

###  addData

▸ **addData**(qrData: * [QRDataBase](qrdatabase.md) &#124; `string`*): `void`

*Defined in qr.ts:54*

Add data to the QR Code.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| qrData |  [QRDataBase](qrdatabase.md) &#124; `string`|  The data to add. |

**Returns:** `void`

___
<a id="generate"></a>

###  generate

▸ **generate**(cellSize?: *`number`*, margin?: *`number`*): `boolean`[][]

*Defined in qr.ts:70*

Generate the display buffer.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` cellSize | `number` | 2 |  The size of the cell to generate. |
| `Default value` margin | `number` |  cellSize * 4 |  The size of the margins to generate. |

**Returns:** `boolean`[][]
Boolean buffer of pixels

___

