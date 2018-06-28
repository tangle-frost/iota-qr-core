[@tangle-frost/iota-qr-core](../README.md) > [QRDataBase](../classes/qrdatabase.md)

# Class: QRDataBase

Base class for storing QR Data. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**QRDataBase**

↳  [QRAlphaNumeric](qralphanumeric.md)

↳  [QRByte8](qrbyte8.md)

↳  [QRNumber](qrnumber.md)

## Index

### Constructors

* [constructor](qrdatabase.md#constructor)

### Methods

* [getData](qrdatabase.md#getdata)
* [getLength](qrdatabase.md#getlength)
* [getLengthInBits](qrdatabase.md#getlengthinbits)
* [getMode](qrdatabase.md#getmode)
* [write](qrdatabase.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QRDataBase**(mode: *[QRDataMode](../enums/qrdatamode.md)*, data: *`string`*): [QRDataBase](qrdatabase.md)

*Defined in models/qrDataBase.ts:12*

Create a new instance of QRDataBase.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mode | [QRDataMode](../enums/qrdatamode.md) |  The mode for the data. |
| data | `string` |  The data. |

**Returns:** [QRDataBase](qrdatabase.md)

___

## Methods

<a id="getdata"></a>

###  getData

▸ **getData**(): `string`

*Defined in models/qrDataBase.ts:36*

Get the data.

**Returns:** `string`
The data.

___
<a id="getlength"></a>

### `<Abstract>` getLength

▸ **getLength**(): `number`

*Defined in models/qrDataBase.ts:44*

Get the length of the data.

**Returns:** `number`
The length of the data.

___
<a id="getlengthinbits"></a>

###  getLengthInBits

▸ **getLengthInBits**(typeNumber: *`number`*): `number`

*Defined in models/qrDataBase.ts:57*

Get the length in bits of the data.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| typeNumber | `number` |  The type number to get the length for. |

**Returns:** `number`
The length in bits.

___
<a id="getmode"></a>

###  getMode

▸ **getMode**(): [QRDataMode](../enums/qrdatamode.md)

*Defined in models/qrDataBase.ts:28*

Get the data mode.

**Returns:** [QRDataMode](../enums/qrdatamode.md)
The data mode.

___
<a id="write"></a>

### `<Abstract>` write

▸ **write**(buffer: *[BitBuffer](bitbuffer.md)*): `void`

*Defined in models/qrDataBase.ts:50*

Write data into the buffer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buffer | [BitBuffer](bitbuffer.md) |  The buffer to write into. |

**Returns:** `void`

___

