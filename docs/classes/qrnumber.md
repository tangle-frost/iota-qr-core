[@tangle-frost/iota-qr-core](../README.md) > [QRNumber](../classes/qrnumber.md)

# Class: QRNumber

QR Data for representing a number. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

 [QRDataBase](qrdatabase.md)

**↳ QRNumber**

## Index

### Constructors

* [constructor](qrnumber.md#constructor)

### Methods

* [getData](qrnumber.md#getdata)
* [getLength](qrnumber.md#getlength)
* [getLengthInBits](qrnumber.md#getlengthinbits)
* [getMode](qrnumber.md#getmode)
* [write](qrnumber.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QRNumber**(data: *`string`*): [QRNumber](qrnumber.md)

*Overrides [QRDataBase](qrdatabase.md).[constructor](qrdatabase.md#constructor)*

*Defined in data/qrNumber.ts:9*

Create a new instance of QRNumber.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The data for the qr number. |

**Returns:** [QRNumber](qrnumber.md)

___

## Methods

<a id="getdata"></a>

###  getData

▸ **getData**(): `string`

*Inherited from [QRDataBase](qrdatabase.md).[getData](qrdatabase.md#getdata)*

*Defined in models/qrDataBase.ts:36*

Get the data.

**Returns:** `string`
The data.

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(): `number`

*Overrides [QRDataBase](qrdatabase.md).[getLength](qrdatabase.md#getlength)*

*Defined in data/qrNumber.ts:22*

Get the length of the data.

**Returns:** `number`
The length of the data.

___
<a id="getlengthinbits"></a>

###  getLengthInBits

▸ **getLengthInBits**(typeNumber: *`number`*): `number`

*Inherited from [QRDataBase](qrdatabase.md).[getLengthInBits](qrdatabase.md#getlengthinbits)*

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

*Inherited from [QRDataBase](qrdatabase.md).[getMode](qrdatabase.md#getmode)*

*Defined in models/qrDataBase.ts:28*

Get the data mode.

**Returns:** [QRDataMode](../enums/qrdatamode.md)
The data mode.

___
<a id="write"></a>

###  write

▸ **write**(buffer: *[BitBuffer](bitbuffer.md)*): `void`

*Overrides [QRDataBase](qrdatabase.md).[write](qrdatabase.md#write)*

*Defined in data/qrNumber.ts:30*

Write data into the buffer.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| buffer | [BitBuffer](bitbuffer.md) |  The buffer to write into. |

**Returns:** `void`

___

