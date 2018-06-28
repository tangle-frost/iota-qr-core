[@tangle-frost/iota-qr-core](../README.md) > [BitBuffer](../classes/bitbuffer.md)

# Class: BitBuffer

Class for maintaining data bits. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**BitBuffer**

## Index

### Constructors

* [constructor](bitbuffer.md#constructor)

### Methods

* [getBuffer](bitbuffer.md#getbuffer)
* [getLengthInBits](bitbuffer.md#getlengthinbits)
* [put](bitbuffer.md#put)
* [putBit](bitbuffer.md#putbit)
* [toString](bitbuffer.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BitBuffer**(): [BitBuffer](bitbuffer.md)

*Defined in helpers/bitBuffer.ts:7*

**Returns:** [BitBuffer](bitbuffer.md)

___

## Methods

<a id="getbuffer"></a>

###  getBuffer

▸ **getBuffer**(): `number`[]

*Defined in helpers/bitBuffer.ts:14*

**Returns:** `number`[]

___
<a id="getlengthinbits"></a>

###  getLengthInBits

▸ **getLengthInBits**(): `number`

*Defined in helpers/bitBuffer.ts:18*

**Returns:** `number`

___
<a id="put"></a>

###  put

▸ **put**(num: *`number`*, length: *`number`*): `void`

*Defined in helpers/bitBuffer.ts:22*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |
| length | `number` |

**Returns:** `void`

___
<a id="putbit"></a>

###  putBit

▸ **putBit**(bit: *`boolean`*): `void`

*Defined in helpers/bitBuffer.ts:28*

**Parameters:**

| Param | Type |
| ------ | ------ |
| bit | `boolean` |

**Returns:** `void`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in helpers/bitBuffer.ts:38*

**Returns:** `string`

___

