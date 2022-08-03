/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getHero = /* GraphQL */ `
  query GetHero($id: ID!) {
    getHero(id: $id) {
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
export const listHeroes = /* GraphQL */ `
  query ListHeroes(
    $filter: ModelHeroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHeroes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Hero {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameHero = /* GraphQL */ `
  query GetGameHero($id: ID!) {
    getGameHero(id: $id) {
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
export const listGameHeroes = /* GraphQL */ `
  query ListGameHeroes(
    $filter: ModelGameHeroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameHeroes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        heroID
        gameID
        hero {
          id
          createdAt
          updatedAt
          userHeroId
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
