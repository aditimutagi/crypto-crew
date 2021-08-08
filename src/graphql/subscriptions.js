/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePool = /* GraphQL */ `
  subscription OnCreatePool {
    onCreatePool {
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
export const onUpdatePool = /* GraphQL */ `
  subscription OnUpdatePool {
    onUpdatePool {
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
export const onDeletePool = /* GraphQL */ `
  subscription OnDeletePool {
    onDeletePool {
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
export const onCreateCoin = /* GraphQL */ `
  subscription OnCreateCoin {
    onCreateCoin {
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
export const onUpdateCoin = /* GraphQL */ `
  subscription OnUpdateCoin {
    onUpdateCoin {
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
export const onDeleteCoin = /* GraphQL */ `
  subscription OnDeleteCoin {
    onDeleteCoin {
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
export const onCreateWallet = /* GraphQL */ `
  subscription OnCreateWallet {
    onCreateWallet {
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
export const onUpdateWallet = /* GraphQL */ `
  subscription OnUpdateWallet {
    onUpdateWallet {
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
export const onDeleteWallet = /* GraphQL */ `
  subscription OnDeleteWallet {
    onDeleteWallet {
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
