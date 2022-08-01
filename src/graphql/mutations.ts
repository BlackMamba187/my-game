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
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const createRace = /* GraphQL */ `
  mutation CreateRace(
    $input: CreateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    createRace(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const updateRace = /* GraphQL */ `
  mutation UpdateRace(
    $input: UpdateRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    updateRace(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const deleteRace = /* GraphQL */ `
  mutation DeleteRace(
    $input: DeleteRaceInput!
    $condition: ModelRaceConditionInput
  ) {
    deleteRace(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const createFeat = /* GraphQL */ `
  mutation CreateFeat(
    $input: CreateFeatInput!
    $condition: ModelFeatConditionInput
  ) {
    createFeat(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const updateFeat = /* GraphQL */ `
  mutation UpdateFeat(
    $input: UpdateFeatInput!
    $condition: ModelFeatConditionInput
  ) {
    updateFeat(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const deleteFeat = /* GraphQL */ `
  mutation DeleteFeat(
    $input: DeleteFeatInput!
    $condition: ModelFeatConditionInput
  ) {
    deleteFeat(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const createSpell = /* GraphQL */ `
  mutation CreateSpell(
    $input: CreateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    createSpell(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const updateSpell = /* GraphQL */ `
  mutation UpdateSpell(
    $input: UpdateSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    updateSpell(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const deleteSpell = /* GraphQL */ `
  mutation DeleteSpell(
    $input: DeleteSpellInput!
    $condition: ModelSpellConditionInput
  ) {
    deleteSpell(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const createLanuage = /* GraphQL */ `
  mutation CreateLanuage(
    $input: CreateLanuageInput!
    $condition: ModelLanuageConditionInput
  ) {
    createLanuage(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const updateLanuage = /* GraphQL */ `
  mutation UpdateLanuage(
    $input: UpdateLanuageInput!
    $condition: ModelLanuageConditionInput
  ) {
    updateLanuage(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const deleteLanuage = /* GraphQL */ `
  mutation DeleteLanuage(
    $input: DeleteLanuageInput!
    $condition: ModelLanuageConditionInput
  ) {
    deleteLanuage(input: $input, condition: $condition) {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
