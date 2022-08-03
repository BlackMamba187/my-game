/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      Hero {
        items {
          id
          createdAt
          updatedAt
          userHeroId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      Hero {
        items {
          id
          createdAt
          updatedAt
          userHeroId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      Hero {
        items {
          id
          createdAt
          updatedAt
          userHeroId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateHero = /* GraphQL */ `
  subscription OnCreateHero {
    onCreateHero {
      id
      User {
        id
        name
        email
        Hero {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      Game {
        items {
          id
          heroID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userHeroId
    }
  }
`;
export const onUpdateHero = /* GraphQL */ `
  subscription OnUpdateHero {
    onUpdateHero {
      id
      User {
        id
        name
        email
        Hero {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      Game {
        items {
          id
          heroID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userHeroId
    }
  }
`;
export const onDeleteHero = /* GraphQL */ `
  subscription OnDeleteHero {
    onDeleteHero {
      id
      User {
        id
        name
        email
        Hero {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      Game {
        items {
          id
          heroID
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userHeroId
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      Hero {
        items {
          id
          heroID
          gameID
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      Hero {
        items {
          id
          heroID
          gameID
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      Hero {
        items {
          id
          heroID
          gameID
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
export const onCreateGameHero = /* GraphQL */ `
  subscription OnCreateGameHero {
    onCreateGameHero {
      id
      heroID
      gameID
      hero {
        id
        User {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        Game {
          nextToken
        }
        createdAt
        updatedAt
        userHeroId
      }
      game {
        id
        Hero {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameHero = /* GraphQL */ `
  subscription OnUpdateGameHero {
    onUpdateGameHero {
      id
      heroID
      gameID
      hero {
        id
        User {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        Game {
          nextToken
        }
        createdAt
        updatedAt
        userHeroId
      }
      game {
        id
        Hero {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameHero = /* GraphQL */ `
  subscription OnDeleteGameHero {
    onDeleteGameHero {
      id
      heroID
      gameID
      hero {
        id
        User {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        Game {
          nextToken
        }
        createdAt
        updatedAt
        userHeroId
      }
      game {
        id
        Hero {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
