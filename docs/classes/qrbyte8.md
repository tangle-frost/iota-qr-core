[@tangle-frost/iota-qr-core](../README.md) > [QRByte8](../classes/qrbyte8.md)

# Class: QRByte8

QR Data for representing a 8 bit data. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

 [QRDataBase](qrdatabase.md)

**↳ QRByte8**

## Index

### Constructors

* [constructor](qrbyte8.md#constructor)

### Methods

* [getData](qrbyte8.md#getdata)
* [getLength](qrbyte8.md#getlength)
* [getLengthInBits](qrbyte8.md#getlengthinbits)
* [getMode](qrbyte8.md#getmode)
* [write](qrbyte8.md#write)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new QRByte8**(data: *`string`*): [QRByte8](qrbyte8.md)

*Overrides [QRDataBase](qrdatabase.md).[constructor](qrdatabase.md#constructor)*

*Defined in [data/qrByte8.ts:9](https://github.com/tangle-frost/iota-qr-core/tree/master/src/data/qrByte8.ts#L9*

Create a new instance of QRByte8.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The data for the qr 8 bit data. |

**Returns:** [QRByte8](qrbyte8.md)

___

## Methods

<a id="getdata"></a>

###  getData

▸ **getData**(): `string`

*Inherited from [QRDataBase](qrdatabase.md).[getData](qrdatabase.md#getdata)*

*Defined in [models/qrDataBase.ts:36](https://github.com/tangle-frost/iota-qr-core/tree/master/src/models/qrDataBase.ts#L36*

Get the data for the qr.

**Returns:** `string`
The data.

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(): `number`

*Overrides [QRDataBase](qrdatabase.md).[getLength](qrdatabase.md#getlength)*

*Defined in [data/qrByte8.ts:22](https://github.com/tangle-frost/iota-qr-core/tree/master/src/data/qrByte8.ts#L22*

Get the length of the data.

**Returns:** `number`
The length of the data.

___
<a id="getlengthinbits"></a>

###  getLengthInBits

▸ **getLengthInBits**(typeNumber: *`number`*): `number`

*Inherited from [QRDataBase](qrdatabase.md).[getLengthInBits](qrdatabase.md#getlengthinbits)*

*Defined in [models/qrDataBase.ts:57](https://github.com/tangle-frost/iota-qr-core/tree/master/src/models/qrDataBase.ts#L57*

Get the length in bits of the data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| typeNumber | `number` |  The type number to get the length for. |

**Returns:** `number`
The length in bits.

___
<a id="getmode"></a>

###  getMode

▸ **getMode**(): [QRDataMode](../enums/qrdatamode.md)

*Inherited from [QRDataBase](qrdatabase.md).[getMode](qrdatabase.md#getmode)*

*Defined in [models/qrDataBase.ts:28](https://github.com/tangle-frost/iota-qr-core/tree/master/src/models/qrDataBase.ts#L28*

Get the data mode.

**Returns:** [QRDataMode](../enums/qrdatamode.md)
The data mode.

___
<a id="write"></a>

###  write

▸ **write**(buffer: *[BitBuffer](bitbuffer.md)*): `void`

*Overrides [QRDataBase](qrdatabase.md).[write](qrdatabase.md#write)*

*Defined in [data/qrByte8.ts:30](https://github.com/tangle-frost/iota-qr-core/tree/master/src/data/qrByte8.ts#L30*

Write data into the buffer.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buffer | [BitBuffer](bitbuffer.md) |  The buffer to write into. |

**Returns:** `void`

___

