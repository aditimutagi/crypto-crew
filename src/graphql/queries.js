/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPool = /* GraphQL */ `
  query GetPool($id: ID!) {
    getPool(id: $id) {
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
export const listPools = /* GraphQL */ `
  query ListPools(
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        coins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoin = /* GraphQL */ `
  query GetCoin($id: ID!) {
    getCoin(id: $id) {
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
export const listCoins = /* GraphQL */ `
  query ListCoins(
    $filter: ModelCoinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getWallet = /* GraphQL */ `
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
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
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coinID
        coin {
          id
          title
          poolID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
