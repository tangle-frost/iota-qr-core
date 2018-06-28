[@tangle-frost/iota-qr-core](../README.md) > [Polynomial](../classes/polynomial.md)

# Class: Polynomial

Class to represent a polynomial. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**Polynomial**

## Index

### Constructors

* [constructor](polynomial.md#constructor)

### Methods

* [getAt](polynomial.md#getat)
* [getLength](polynomial.md#getlength)
* [mod](polynomial.md#mod)
* [multiply](polynomial.md#multiply)
* [toLogString](polynomial.md#tologstring)
* [toString](polynomial.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Polynomial**(num: *`number`[]*, shift?: *`number`*): [Polynomial](polynomial.md)

*Defined in helpers/polynomial.ts:9*

Create a new instance of Polynomial.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| num | `number`[] | - |  The num of the polynomial. |
| `Default value` shift | `number` | 0 |  The shift for the polynomial. |

**Returns:** [Polynomial](polynomial.md)

___

## Methods

<a id="getat"></a>

###  getAt

▸ **getAt**(index: *`number`*): `number`

*Defined in helpers/polynomial.ts:38*

The the value of the polynomial at given index.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The index. |

**Returns:** `number`
The value of the polynomial.

___
<a id="getlength"></a>

###  getLength

▸ **getLength**(): `number`

*Defined in helpers/polynomial.ts:46*

Get the length of the polynomial.

**Returns:** `number`
The polynomial.

___
<a id="mod"></a>

###  mod

▸ **mod**(e: *[Polynomial](polynomial.md)*): [Polynomial](polynomial.md)

*Defined in helpers/polynomial.ts:105*

Get the modulus of the polynomial from another.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | [Polynomial](polynomial.md) |  The polynomial. |

**Returns:** [Polynomial](polynomial.md)
The modules of the polynomials.

___
<a id="multiply"></a>

###  multiply

▸ **multiply**(e: *[Polynomial](polynomial.md)*): [Polynomial](polynomial.md)

*Defined in helpers/polynomial.ts:85*

Multiply the polynomial with another one.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | [Polynomial](polynomial.md) |  The polynomial to multiply. |

**Returns:** [Polynomial](polynomial.md)
The multiplication of the polynomials.

___
<a id="tologstring"></a>

###  toLogString

▸ **toLogString**(): `string`

*Defined in helpers/polynomial.ts:69*

Get the log representation of the polynomial.

**Returns:** `string`
The log representation of the polynomial.

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in helpers/polynomial.ts:54*

Convert the polynomial to a string.

**Returns:** `string`
The string representation of the polynomial.

___

