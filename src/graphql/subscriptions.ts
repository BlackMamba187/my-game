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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
      id
      Name
      createdAt
      updatedAt
      heroClassId
    }
  }
`;
export const onCreateRace = /* GraphQL */ `
  subscription OnCreateRace {
    onCreateRace {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const onUpdateRace = /* GraphQL */ `
  subscription OnUpdateRace {
    onUpdateRace {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const onDeleteRace = /* GraphQL */ `
  subscription OnDeleteRace {
    onDeleteRace {
      id
      Name
      createdAt
      updatedAt
      heroRaceId
    }
  }
`;
export const onCreateFeat = /* GraphQL */ `
  subscription OnCreateFeat {
    onCreateFeat {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const onUpdateFeat = /* GraphQL */ `
  subscription OnUpdateFeat {
    onUpdateFeat {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const onDeleteFeat = /* GraphQL */ `
  subscription OnDeleteFeat {
    onDeleteFeat {
      id
      Name
      createdAt
      updatedAt
      heroFeatId
    }
  }
`;
export const onCreateSpell = /* GraphQL */ `
  subscription OnCreateSpell {
    onCreateSpell {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const onUpdateSpell = /* GraphQL */ `
  subscription OnUpdateSpell {
    onUpdateSpell {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const onDeleteSpell = /* GraphQL */ `
  subscription OnDeleteSpell {
    onDeleteSpell {
      id
      Name
      createdAt
      updatedAt
      heroSpellId
    }
  }
`;
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment {
    onCreateEquipment {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment {
    onUpdateEquipment {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment {
    onDeleteEquipment {
      id
      Name
      createdAt
      updatedAt
      heroEquipmentId
    }
  }
`;
export const onCreateLanuage = /* GraphQL */ `
  subscription OnCreateLanuage {
    onCreateLanuage {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const onUpdateLanuage = /* GraphQL */ `
  subscription OnUpdateLanuage {
    onUpdateLanuage {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const onDeleteLanuage = /* GraphQL */ `
  subscription OnDeleteLanuage {
    onDeleteLanuage {
      id
      Name
      createdAt
      updatedAt
      heroLanuageId
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
