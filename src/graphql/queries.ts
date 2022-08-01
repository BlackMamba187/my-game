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
          Alignment
          Image
          MaxExpPoints
          CurrentExpPoints
          MaxHpPoints
          CurrentHpPoints
          Shield
          Armor
          Dodge
          Natural
          Deflect
          SavingThrowFort
          SavingThrowRef
          SavingThrowWill
          MeleeAtk
          RangedAtk
          AbilityScoreStr
          AbilityScoreDex
          AbilityScoreCon
          AbilityScoreInt
          AbilityScoreWis
          AbilityScoreCha
          Wealth
          MaxWeight
          Speed
          X
          Y
          Map
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
      Alignment
      Image
      MaxExpPoints
      CurrentExpPoints
      MaxHpPoints
      CurrentHpPoints
      Shield
      Armor
      Dodge
      Natural
      Deflect
      Class {
        items {
          id
          Name
          createdAt
          updatedAt
          heroClassId
        }
        nextToken
      }
      Race {
        items {
          id
          Name
          createdAt
          updatedAt
          heroRaceId
        }
        nextToken
      }
      SavingThrowFort
      SavingThrowRef
      SavingThrowWill
      MeleeAtk
      RangedAtk
      AbilityScoreStr
      AbilityScoreDex
      AbilityScoreCon
      AbilityScoreInt
      AbilityScoreWis
      AbilityScoreCha
      Feat {
        items {
          id
          Name
          createdAt
          updatedAt
          heroFeatId
        }
        nextToken
      }
      Spell {
        items {
          id
          Name
          createdAt
          updatedAt
          heroSpellId
        }
        nextToken
      }
      Equipment {
        items {
          id
          Name
          createdAt
          updatedAt
          heroEquipmentId
        }
        nextToken
      }
      Wealth
      Lanuage {
        items {
          id
          Name
          createdAt
          updatedAt
          heroLanuageId
        }
        nextToken
      }
      MaxWeight
      Speed
      X
      Y
      Map
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
        Alignment
        Image
        MaxExpPoints
        CurrentExpPoints
        MaxHpPoints
        CurrentHpPoints
        Shield
        Armor
        Dodge
        Natural
        Deflect
        Class {
          nextToken
        }
        Race {
          nextToken
        }
        SavingThrowFort
        SavingThrowRef
        SavingThrowWill
        MeleeAtk
        RangedAtk
        AbilityScoreStr
        AbilityScoreDex
        AbilityScoreCon
        AbilityScoreInt
        AbilityScoreWis
        AbilityScoreCha
        Feat {
          nextToken
        }
        Spell {
          nextToken
        }
        Equipment {
          nextToken
        }
        Wealth
        Lanuage {
          nextToken
        }
        MaxWeight
        Speed
        X
        Y
        Map
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
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroClassId
      }
      nextToken
    }
  }
`;
export const getRace = /* GraphQL */ `
  query GetRace($id: ID!) {
    getRace(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const listRaces = /* GraphQL */ `
  query ListRaces(
    $filter: ModelRaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroRaceId
      }
      nextToken
    }
  }
`;
export const getFeat = /* GraphQL */ `
  query GetFeat($id: ID!) {
    getFeat(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const listFeats = /* GraphQL */ `
  query ListFeats(
    $filter: ModelFeatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroFeatId
      }
      nextToken
    }
  }
`;
export const getSpell = /* GraphQL */ `
  query GetSpell($id: ID!) {
    getSpell(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const listSpells = /* GraphQL */ `
  query ListSpells(
    $filter: ModelSpellFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpells(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroSpellId
      }
      nextToken
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const listEquipment = /* GraphQL */ `
  query ListEquipment(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipment(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroEquipmentId
      }
      nextToken
    }
  }
`;
export const getLanuage = /* GraphQL */ `
  query GetLanuage($id: ID!) {
    getLanuage(id: $id) {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const listLanuages = /* GraphQL */ `
  query ListLanuages(
    $filter: ModelLanuageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLanuages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        heroLanuageId
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      Name
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
        Name
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
        Alignment
        Image
        MaxExpPoints
        CurrentExpPoints
        MaxHpPoints
        CurrentHpPoints
        Shield
        Armor
        Dodge
        Natural
        Deflect
        Class {
          nextToken
        }
        Race {
          nextToken
        }
        SavingThrowFort
        SavingThrowRef
        SavingThrowWill
        MeleeAtk
        RangedAtk
        AbilityScoreStr
        AbilityScoreDex
        AbilityScoreCon
        AbilityScoreInt
        AbilityScoreWis
        AbilityScoreCha
        Feat {
          nextToken
        }
        Spell {
          nextToken
        }
        Equipment {
          nextToken
        }
        Wealth
        Lanuage {
          nextToken
        }
        MaxWeight
        Speed
        X
        Y
        Map
        Game {
          nextToken
        }
        createdAt
        updatedAt
        userHeroId
      }
      game {
        id
        Name
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
          Alignment
          Image
          MaxExpPoints
          CurrentExpPoints
          MaxHpPoints
          CurrentHpPoints
          Shield
          Armor
          Dodge
          Natural
          Deflect
          SavingThrowFort
          SavingThrowRef
          SavingThrowWill
          MeleeAtk
          RangedAtk
          AbilityScoreStr
          AbilityScoreDex
          AbilityScoreCon
          AbilityScoreInt
          AbilityScoreWis
          AbilityScoreCha
          Wealth
          MaxWeight
          Speed
          X
          Y
          Map
          createdAt
          updatedAt
          userHeroId
        }
        game {
          id
          Name
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
