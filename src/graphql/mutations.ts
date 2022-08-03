/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createHero = /* GraphQL */ `
  mutation CreateHero(
    $input: CreateHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    createHero(input: $input, condition: $condition) {
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
export const updateHero = /* GraphQL */ `
  mutation UpdateHero(
    $input: UpdateHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    updateHero(input: $input, condition: $condition) {
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
export const deleteHero = /* GraphQL */ `
  mutation DeleteHero(
    $input: DeleteHeroInput!
    $condition: ModelHeroConditionInput
  ) {
    deleteHero(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGameHero = /* GraphQL */ `
  mutation CreateGameHero(
    $input: CreateGameHeroInput!
    $condition: ModelGameHeroConditionInput
  ) {
    createGameHero(input: $input, condition: $condition) {
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
export const updateGameHero = /* GraphQL */ `
  mutation UpdateGameHero(
    $input: UpdateGameHeroInput!
    $condition: ModelGameHeroConditionInput
  ) {
    updateGameHero(input: $input, condition: $condition) {
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
export const deleteGameHero = /* GraphQL */ `
  mutation DeleteGameHero(
    $input: DeleteGameHeroInput!
    $condition: ModelGameHeroConditionInput
  ) {
    deleteGameHero(input: $input, condition: $condition) {
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
