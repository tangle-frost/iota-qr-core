[@tangle-frost/iota-qr-core](../README.md) > [QRHelper](../classes/qrhelper.md)

# Class: QRHelper

Helper methods for QR generation. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**QRHelper**

## Index

### Methods

* [getBCHTypeInfo](qrhelper.md#getbchtypeinfo)
* [getBCHTypeNumber](qrhelper.md#getbchtypenumber)
* [getErrorCorrectPolynomial](qrhelper.md#geterrorcorrectpolynomial)
* [getMaskMethod](qrhelper.md#getmaskmethod)
* [getMaxLength](qrhelper.md#getmaxlength)
* [getPatternPosition](qrhelper.md#getpatternposition)

---

## Methods

<a id="getbchtypeinfo"></a>

### `<Static>` getBCHTypeInfo

▸ **getBCHTypeInfo**(data: *`number`*): `number`

*Defined in [helpers/qrHelper.ts:172](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L172*

Get the BCH type info.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `number` |  The data to get the BCH type info for. |

**Returns:** `number`
The type info.

___
<a id="getbchtypenumber"></a>

### `<Static>` getBCHTypeNumber

▸ **getBCHTypeNumber**(data: *`number`*): `number`

*Defined in [helpers/qrHelper.ts:186](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L186*

Get the BCH type number.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `number` |  The data to get the BCH type number for. |

**Returns:** `number`
The type number.

___
<a id="geterrorcorrectpolynomial"></a>

### `<Static>` getErrorCorrectPolynomial

▸ **getErrorCorrectPolynomial**(errorCorrectLength: *`number`*): [Polynomial](polynomial.md)

*Defined in [helpers/qrHelper.ts:128](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L128*

Get the error correction polynomial for the error correcto length.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| errorCorrectLength | `number` |  The error correction length to get the polynomial for. |

**Returns:** [Polynomial](polynomial.md)
The polynomial for the error correction length.

___
<a id="getmaskmethod"></a>

### `<Static>` getMaskMethod

▸ **getMaskMethod**(maskPattern: *`number`*): `function`

*Defined in [helpers/qrHelper.ts:143](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L143*

Get the mask method for the given pattern.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| maskPattern | `number` |  The pattern to get the mask for. |

**Returns:** `function`
The mask method for the pattern.

___
<a id="getmaxlength"></a>

### `<Static>` getMaxLength

▸ **getMaxLength**(typeNumber: *`number`*, mode: *[QRDataMode](../enums/qrdatamode.md)*, errorCorrectLevel: *[ErrorCorrectLevel](../enums/errorcorrectlevel.md)*): `number`

*Defined in [helpers/qrHelper.ts:98](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L98*

Get the max length of the data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| typeNumber | `number` |  The type number to get the max length for. |
| mode | [QRDataMode](../enums/qrdatamode.md) |  The data mode to get data max length for. |
| errorCorrectLevel | [ErrorCorrectLevel](../enums/errorcorrectlevel.md) |  The error correction to get the max length for. |

**Returns:** `number`
The max length.

___
<a id="getpatternposition"></a>

### `<Static>` getPatternPosition

▸ **getPatternPosition**(typeNumber: *`number`*): `number`[]

*Defined in [helpers/qrHelper.ts:87](https://github.com/tangle-frost/iota-qr-core/tree/master/src/helpers/qrHelper.ts#L87*

Get the pattern position for the given type number.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| typeNumber | `number` |  The type number to get the pattern for. |

**Returns:** `number`[]
The pattern for the type number.

___

