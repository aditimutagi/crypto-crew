/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPool = /* GraphQL */ `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      id
      name
      coins {
        items {
          id
          title
          poolID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePool = /* GraphQL */ `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
      id
      name
      coins {
        items {
          id
          title
          poolID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePool = /* GraphQL */ `
  mutation DeletePool(
    $input: DeletePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    deletePool(input: $input, condition: $condition) {
      id
      name
      coins {
        items {
          id
          title
          poolID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCoin = /* GraphQL */ `
  mutation CreateCoin(
    $input: CreateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    createCoin(input: $input, condition: $condition) {
      id
      title
      poolID
      pool {
        id
        name
        coins {
          nextToken
        }
        createdAt
        updatedAt
      }
      wallets {
        items {
          id
          coinID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCoin = /* GraphQL */ `
  mutation UpdateCoin(
    $input: UpdateCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    updateCoin(input: $input, condition: $condition) {
      id
      title
      poolID
      pool {
        id
        name
        coins {
          nextToken
        }
        createdAt
        updatedAt
      }
      wallets {
        items {
          id
          coinID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCoin = /* GraphQL */ `
  mutation DeleteCoin(
    $input: DeleteCoinInput!
    $condition: ModelCoinConditionInput
  ) {
    deleteCoin(input: $input, condition: $condition) {
      id
      title
      poolID
      pool {
        id
        name
        coins {
          nextToken
        }
        createdAt
        updatedAt
      }
      wallets {
        items {
          id
          coinID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
      id
      coinID
      coin {
        id
        title
        poolID
        pool {
          id
          name
          createdAt
          updatedAt
        }
        wallets {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
      id
      coinID
      coin {
        id
        title
        poolID
        pool {
          id
          name
          createdAt
          updatedAt
        }
        wallets {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
      id
      coinID
      coin {
        id
        title
        poolID
        pool {
          id
          name
          createdAt
          updatedAt
        }
        wallets {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
