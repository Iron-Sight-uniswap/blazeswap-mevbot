import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 81457,
  TESTNET = 168587773
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xAe1026c51874EE547e27C2513Fa059c685fa2f66'
export const MAIN_FACTORY_ADDRESS = '0x23163E670A5E838359D1fc08DFB8AF7D77a5DB6d'


export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: MAIN_FACTORY_ADDRESS,
  [ChainId.TESTNET]: FACTORY_ADDRESS
}

export const INIT_CODE_HASH = '0x08fc1968398e564dd85cc3182acc2dc291bf84d4adc60def7e11fea1c952ca06'
export const MAIN_INIT_CODE_HASH = '0x61e124177289521b2a35cb594440c929cc23ce85686555ab01c6381854fd68c2'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: MAIN_INIT_CODE_HASH,
  [ChainId.TESTNET]: INIT_CODE_HASH
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
