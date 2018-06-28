[@tangle-frost/iota-qr-core](../README.md) > [RSBlock](../classes/rsblock.md)

# Class: RSBlock

Class to represent a RS Block. Based on [https://github.com/kazuhikoarase/qrcode-generator/](https://github.com/kazuhikoarase/qrcode-generator/)

## Hierarchy

**RSBlock**

## Index

### Constructors

* [constructor](rsblock.md#constructor)

### Methods

* [getDataCount](rsblock.md#getdatacount)
* [getTotalCount](rsblock.md#gettotalcount)
* [getRSBlocks](rsblock.md#getrsblocks)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RSBlock**(totalCount: *`number`*, dataCount: *`number`*): [RSBlock](rsblock.md)

*Defined in helpers/rsBlock.ts:257*

Create a new insstance of RSBlock.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| totalCount | `number` |  The total count for the block. |
| dataCount | `number` |  The data count for the block. |

**Returns:** [RSBlock](rsblock.md)

___

## Methods

<a id="getdatacount"></a>

###  getDataCount

▸ **getDataCount**(): `number`

*Defined in helpers/rsBlock.ts:316*

Get the data count.

**Returns:** `number`
The data count.

___
<a id="gettotalcount"></a>

###  getTotalCount

▸ **getTotalCount**(): `number`

*Defined in helpers/rsBlock.ts:324*

Get the total count.

**Returns:** `number`
The total count.

___
<a id="getrsblocks"></a>

### `<Static>` getRSBlocks

▸ **getRSBlocks**(typeNumber: *`number`*, errorCorrectLevel: *[ErrorCorrectLevel](../enums/errorcorrectlevel.md)*): [RSBlock](rsblock.md)[]

*Defined in helpers/rsBlock.ts:275*

Get RS Blocks for the type number and error correct level.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| typeNumber | `number` |  The type number. |
| errorCorrectLevel | [ErrorCorrectLevel](../enums/errorcorrectlevel.md) |  The error correct level. |

**Returns:** [RSBlock](rsblock.md)[]
The RS Blocks.

___

