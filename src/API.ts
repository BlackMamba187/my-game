/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email?: string | null,
  Hero?: ModelHeroConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelHeroConnection = {
  __typename: "ModelHeroConnection",
  items:  Array<Hero | null >,
  nextToken?: string | null,
};

export type Hero = {
  __typename: "Hero",
  id: string,
  User?:  Array<User | null > | null,
  Alignment?: string | null,
  Image?: string | null,
  MaxExpPoints?: number | null,
  CurrentExpPoints?: number | null,
  MaxHpPoints?: number | null,
  CurrentHpPoints?: number | null,
  Shield?: number | null,
  Armor?: number | null,
  Dodge?: number | null,
  Natural?: number | null,
  Deflect?: number | null,
  Class?: ModelClassConnection | null,
  Race?: ModelRaceConnection | null,
  SavingThrowFort?: number | null,
  SavingThrowRef?: number | null,
  SavingThrowWill?: number | null,
  MeleeAtk?: number | null,
  RangedAtk?: number | null,
  AbilityScoreStr?: number | null,
  AbilityScoreDex?: number | null,
  AbilityScoreCon?: number | null,
  AbilityScoreInt?: number | null,
  AbilityScoreWis?: number | null,
  AbilityScoreCha?: number | null,
  Feat?: ModelFeatConnection | null,
  Spell?: ModelSpellConnection | null,
  Equipment?: ModelEquipmentConnection | null,
  Wealth?: number | null,
  Lanuage?: ModelLanuageConnection | null,
  MaxWeight?: number | null,
  Speed?: number | null,
  X?: number | null,
  Y?: number | null,
  Map?: string | null,
  Game?: ModelGameHeroConnection | null,
  createdAt: string,
  updatedAt: string,
  userHeroId?: string | null,
};

export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type Class = {
  __typename: "Class",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroClassId?: string | null,
};

export type ModelRaceConnection = {
  __typename: "ModelRaceConnection",
  items:  Array<Race | null >,
  nextToken?: string | null,
};

export type Race = {
  __typename: "Race",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroRaceId?: string | null,
};

export type ModelFeatConnection = {
  __typename: "ModelFeatConnection",
  items:  Array<Feat | null >,
  nextToken?: string | null,
};

export type Feat = {
  __typename: "Feat",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroFeatId?: string | null,
};

export type ModelSpellConnection = {
  __typename: "ModelSpellConnection",
  items:  Array<Spell | null >,
  nextToken?: string | null,
};

export type Spell = {
  __typename: "Spell",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroSpellId?: string | null,
};

export type ModelEquipmentConnection = {
  __typename: "ModelEquipmentConnection",
  items:  Array<Equipment | null >,
  nextToken?: string | null,
};

export type Equipment = {
  __typename: "Equipment",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroEquipmentId?: string | null,
};

export type ModelLanuageConnection = {
  __typename: "ModelLanuageConnection",
  items:  Array<Lanuage | null >,
  nextToken?: string | null,
};

export type Lanuage = {
  __typename: "Lanuage",
  id: string,
  Name?: string | null,
  createdAt: string,
  updatedAt: string,
  heroLanuageId?: string | null,
};

export type ModelGameHeroConnection = {
  __typename: "ModelGameHeroConnection",
  items:  Array<GameHero | null >,
  nextToken?: string | null,
};

export type GameHero = {
  __typename: "GameHero",
  id: string,
  heroID: string,
  gameID: string,
  hero: Hero,
  game: Game,
  createdAt: string,
  updatedAt: string,
};

export type Game = {
  __typename: "Game",
  id: string,
  Name?: string | null,
  Hero?: ModelGameHeroConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateHeroInput = {
  id?: string | null,
  Alignment?: string | null,
  Image?: string | null,
  MaxExpPoints?: number | null,
  CurrentExpPoints?: number | null,
  MaxHpPoints?: number | null,
  CurrentHpPoints?: number | null,
  Shield?: number | null,
  Armor?: number | null,
  Dodge?: number | null,
  Natural?: number | null,
  Deflect?: number | null,
  SavingThrowFort?: number | null,
  SavingThrowRef?: number | null,
  SavingThrowWill?: number | null,
  MeleeAtk?: number | null,
  RangedAtk?: number | null,
  AbilityScoreStr?: number | null,
  AbilityScoreDex?: number | null,
  AbilityScoreCon?: number | null,
  AbilityScoreInt?: number | null,
  AbilityScoreWis?: number | null,
  AbilityScoreCha?: number | null,
  Wealth?: number | null,
  MaxWeight?: number | null,
  Speed?: number | null,
  X?: number | null,
  Y?: number | null,
  Map?: string | null,
  userHeroId?: string | null,
};

export type ModelHeroConditionInput = {
  Alignment?: ModelStringInput | null,
  Image?: ModelStringInput | null,
  MaxExpPoints?: ModelIntInput | null,
  CurrentExpPoints?: ModelIntInput | null,
  MaxHpPoints?: ModelIntInput | null,
  CurrentHpPoints?: ModelIntInput | null,
  Shield?: ModelIntInput | null,
  Armor?: ModelIntInput | null,
  Dodge?: ModelIntInput | null,
  Natural?: ModelIntInput | null,
  Deflect?: ModelIntInput | null,
  SavingThrowFort?: ModelIntInput | null,
  SavingThrowRef?: ModelIntInput | null,
  SavingThrowWill?: ModelIntInput | null,
  MeleeAtk?: ModelIntInput | null,
  RangedAtk?: ModelIntInput | null,
  AbilityScoreStr?: ModelIntInput | null,
  AbilityScoreDex?: ModelIntInput | null,
  AbilityScoreCon?: ModelIntInput | null,
  AbilityScoreInt?: ModelIntInput | null,
  AbilityScoreWis?: ModelIntInput | null,
  AbilityScoreCha?: ModelIntInput | null,
  Wealth?: ModelIntInput | null,
  MaxWeight?: ModelIntInput | null,
  Speed?: ModelIntInput | null,
  X?: ModelIntInput | null,
  Y?: ModelIntInput | null,
  Map?: ModelStringInput | null,
  and?: Array< ModelHeroConditionInput | null > | null,
  or?: Array< ModelHeroConditionInput | null > | null,
  not?: ModelHeroConditionInput | null,
  userHeroId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateHeroInput = {
  id: string,
  Alignment?: string | null,
  Image?: string | null,
  MaxExpPoints?: number | null,
  CurrentExpPoints?: number | null,
  MaxHpPoints?: number | null,
  CurrentHpPoints?: number | null,
  Shield?: number | null,
  Armor?: number | null,
  Dodge?: number | null,
  Natural?: number | null,
  Deflect?: number | null,
  SavingThrowFort?: number | null,
  SavingThrowRef?: number | null,
  SavingThrowWill?: number | null,
  MeleeAtk?: number | null,
  RangedAtk?: number | null,
  AbilityScoreStr?: number | null,
  AbilityScoreDex?: number | null,
  AbilityScoreCon?: number | null,
  AbilityScoreInt?: number | null,
  AbilityScoreWis?: number | null,
  AbilityScoreCha?: number | null,
  Wealth?: number | null,
  MaxWeight?: number | null,
  Speed?: number | null,
  X?: number | null,
  Y?: number | null,
  Map?: string | null,
  userHeroId?: string | null,
};

export type DeleteHeroInput = {
  id: string,
};

export type CreateClassInput = {
  id?: string | null,
  Name?: string | null,
  heroClassId?: string | null,
};

export type ModelClassConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelClassConditionInput | null > | null,
  or?: Array< ModelClassConditionInput | null > | null,
  not?: ModelClassConditionInput | null,
  heroClassId?: ModelIDInput | null,
};

export type UpdateClassInput = {
  id: string,
  Name?: string | null,
  heroClassId?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type CreateRaceInput = {
  id?: string | null,
  Name?: string | null,
  heroRaceId?: string | null,
};

export type ModelRaceConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelRaceConditionInput | null > | null,
  or?: Array< ModelRaceConditionInput | null > | null,
  not?: ModelRaceConditionInput | null,
  heroRaceId?: ModelIDInput | null,
};

export type UpdateRaceInput = {
  id: string,
  Name?: string | null,
  heroRaceId?: string | null,
};

export type DeleteRaceInput = {
  id: string,
};

export type CreateFeatInput = {
  id?: string | null,
  Name?: string | null,
  heroFeatId?: string | null,
};

export type ModelFeatConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelFeatConditionInput | null > | null,
  or?: Array< ModelFeatConditionInput | null > | null,
  not?: ModelFeatConditionInput | null,
  heroFeatId?: ModelIDInput | null,
};

export type UpdateFeatInput = {
  id: string,
  Name?: string | null,
  heroFeatId?: string | null,
};

export type DeleteFeatInput = {
  id: string,
};

export type CreateSpellInput = {
  id?: string | null,
  Name?: string | null,
  heroSpellId?: string | null,
};

export type ModelSpellConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelSpellConditionInput | null > | null,
  or?: Array< ModelSpellConditionInput | null > | null,
  not?: ModelSpellConditionInput | null,
  heroSpellId?: ModelIDInput | null,
};

export type UpdateSpellInput = {
  id: string,
  Name?: string | null,
  heroSpellId?: string | null,
};

export type DeleteSpellInput = {
  id: string,
};

export type CreateEquipmentInput = {
  id?: string | null,
  Name?: string | null,
  heroEquipmentId?: string | null,
};

export type ModelEquipmentConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelEquipmentConditionInput | null > | null,
  or?: Array< ModelEquipmentConditionInput | null > | null,
  not?: ModelEquipmentConditionInput | null,
  heroEquipmentId?: ModelIDInput | null,
};

export type UpdateEquipmentInput = {
  id: string,
  Name?: string | null,
  heroEquipmentId?: string | null,
};

export type DeleteEquipmentInput = {
  id: string,
};

export type CreateLanuageInput = {
  id?: string | null,
  Name?: string | null,
  heroLanuageId?: string | null,
};

export type ModelLanuageConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelLanuageConditionInput | null > | null,
  or?: Array< ModelLanuageConditionInput | null > | null,
  not?: ModelLanuageConditionInput | null,
  heroLanuageId?: ModelIDInput | null,
};

export type UpdateLanuageInput = {
  id: string,
  Name?: string | null,
  heroLanuageId?: string | null,
};

export type DeleteLanuageInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  Name?: string | null,
};

export type ModelGameConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
  Name?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateGameHeroInput = {
  id?: string | null,
  heroID: string,
  gameID: string,
};

export type ModelGameHeroConditionInput = {
  heroID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelGameHeroConditionInput | null > | null,
  or?: Array< ModelGameHeroConditionInput | null > | null,
  not?: ModelGameHeroConditionInput | null,
};

export type UpdateGameHeroInput = {
  id: string,
  heroID?: string | null,
  gameID?: string | null,
};

export type DeleteGameHeroInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelHeroFilterInput = {
  id?: ModelIDInput | null,
  Alignment?: ModelStringInput | null,
  Image?: ModelStringInput | null,
  MaxExpPoints?: ModelIntInput | null,
  CurrentExpPoints?: ModelIntInput | null,
  MaxHpPoints?: ModelIntInput | null,
  CurrentHpPoints?: ModelIntInput | null,
  Shield?: ModelIntInput | null,
  Armor?: ModelIntInput | null,
  Dodge?: ModelIntInput | null,
  Natural?: ModelIntInput | null,
  Deflect?: ModelIntInput | null,
  SavingThrowFort?: ModelIntInput | null,
  SavingThrowRef?: ModelIntInput | null,
  SavingThrowWill?: ModelIntInput | null,
  MeleeAtk?: ModelIntInput | null,
  RangedAtk?: ModelIntInput | null,
  AbilityScoreStr?: ModelIntInput | null,
  AbilityScoreDex?: ModelIntInput | null,
  AbilityScoreCon?: ModelIntInput | null,
  AbilityScoreInt?: ModelIntInput | null,
  AbilityScoreWis?: ModelIntInput | null,
  AbilityScoreCha?: ModelIntInput | null,
  Wealth?: ModelIntInput | null,
  MaxWeight?: ModelIntInput | null,
  Speed?: ModelIntInput | null,
  X?: ModelIntInput | null,
  Y?: ModelIntInput | null,
  Map?: ModelStringInput | null,
  and?: Array< ModelHeroFilterInput | null > | null,
  or?: Array< ModelHeroFilterInput | null > | null,
  not?: ModelHeroFilterInput | null,
  userHeroId?: ModelIDInput | null,
};

export type ModelClassFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelClassFilterInput | null > | null,
  or?: Array< ModelClassFilterInput | null > | null,
  not?: ModelClassFilterInput | null,
  heroClassId?: ModelIDInput | null,
};

export type ModelRaceFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelRaceFilterInput | null > | null,
  or?: Array< ModelRaceFilterInput | null > | null,
  not?: ModelRaceFilterInput | null,
  heroRaceId?: ModelIDInput | null,
};

export type ModelFeatFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelFeatFilterInput | null > | null,
  or?: Array< ModelFeatFilterInput | null > | null,
  not?: ModelFeatFilterInput | null,
  heroFeatId?: ModelIDInput | null,
};

export type ModelSpellFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelSpellFilterInput | null > | null,
  or?: Array< ModelSpellFilterInput | null > | null,
  not?: ModelSpellFilterInput | null,
  heroSpellId?: ModelIDInput | null,
};

export type ModelEquipmentFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelEquipmentFilterInput | null > | null,
  or?: Array< ModelEquipmentFilterInput | null > | null,
  not?: ModelEquipmentFilterInput | null,
  heroEquipmentId?: ModelIDInput | null,
};

export type ModelLanuageFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelLanuageFilterInput | null > | null,
  or?: Array< ModelLanuageFilterInput | null > | null,
  not?: ModelLanuageFilterInput | null,
  heroLanuageId?: ModelIDInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items:  Array<Game | null >,
  nextToken?: string | null,
};

export type ModelGameHeroFilterInput = {
  id?: ModelIDInput | null,
  heroID?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelGameHeroFilterInput | null > | null,
  or?: Array< ModelGameHeroFilterInput | null > | null,
  not?: ModelGameHeroFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateHeroMutationVariables = {
  input: CreateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type CreateHeroMutation = {
  createHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type UpdateHeroMutationVariables = {
  input: UpdateHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type UpdateHeroMutation = {
  updateHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type DeleteHeroMutationVariables = {
  input: DeleteHeroInput,
  condition?: ModelHeroConditionInput | null,
};

export type DeleteHeroMutation = {
  deleteHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type CreateClassMutationVariables = {
  input: CreateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type UpdateClassMutationVariables = {
  input: UpdateClassInput,
  condition?: ModelClassConditionInput | null,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type DeleteClassMutationVariables = {
  input: DeleteClassInput,
  condition?: ModelClassConditionInput | null,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type CreateRaceMutationVariables = {
  input: CreateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type CreateRaceMutation = {
  createRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type UpdateRaceMutationVariables = {
  input: UpdateRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type UpdateRaceMutation = {
  updateRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type DeleteRaceMutationVariables = {
  input: DeleteRaceInput,
  condition?: ModelRaceConditionInput | null,
};

export type DeleteRaceMutation = {
  deleteRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type CreateFeatMutationVariables = {
  input: CreateFeatInput,
  condition?: ModelFeatConditionInput | null,
};

export type CreateFeatMutation = {
  createFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type UpdateFeatMutationVariables = {
  input: UpdateFeatInput,
  condition?: ModelFeatConditionInput | null,
};

export type UpdateFeatMutation = {
  updateFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type DeleteFeatMutationVariables = {
  input: DeleteFeatInput,
  condition?: ModelFeatConditionInput | null,
};

export type DeleteFeatMutation = {
  deleteFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type CreateSpellMutationVariables = {
  input: CreateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type CreateSpellMutation = {
  createSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type UpdateSpellMutationVariables = {
  input: UpdateSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type UpdateSpellMutation = {
  updateSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type DeleteSpellMutationVariables = {
  input: DeleteSpellInput,
  condition?: ModelSpellConditionInput | null,
};

export type DeleteSpellMutation = {
  deleteSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type CreateEquipmentMutationVariables = {
  input: CreateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type CreateEquipmentMutation = {
  createEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type UpdateEquipmentMutationVariables = {
  input: UpdateEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type UpdateEquipmentMutation = {
  updateEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type DeleteEquipmentMutationVariables = {
  input: DeleteEquipmentInput,
  condition?: ModelEquipmentConditionInput | null,
};

export type DeleteEquipmentMutation = {
  deleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type CreateLanuageMutationVariables = {
  input: CreateLanuageInput,
  condition?: ModelLanuageConditionInput | null,
};

export type CreateLanuageMutation = {
  createLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type UpdateLanuageMutationVariables = {
  input: UpdateLanuageInput,
  condition?: ModelLanuageConditionInput | null,
};

export type UpdateLanuageMutation = {
  updateLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type DeleteLanuageMutationVariables = {
  input: DeleteLanuageInput,
  condition?: ModelLanuageConditionInput | null,
};

export type DeleteLanuageMutation = {
  deleteLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameHeroMutationVariables = {
  input: CreateGameHeroInput,
  condition?: ModelGameHeroConditionInput | null,
};

export type CreateGameHeroMutation = {
  createGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameHeroMutationVariables = {
  input: UpdateGameHeroInput,
  condition?: ModelGameHeroConditionInput | null,
};

export type UpdateGameHeroMutation = {
  updateGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameHeroMutationVariables = {
  input: DeleteGameHeroInput,
  condition?: ModelGameHeroConditionInput | null,
};

export type DeleteGameHeroMutation = {
  deleteGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHeroQueryVariables = {
  id: string,
};

export type GetHeroQuery = {
  getHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type ListHeroesQueryVariables = {
  filter?: ModelHeroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHeroesQuery = {
  listHeroes?:  {
    __typename: "ModelHeroConnection",
    items:  Array< {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroClassId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRaceQueryVariables = {
  id: string,
};

export type GetRaceQuery = {
  getRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type ListRacesQueryVariables = {
  filter?: ModelRaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRacesQuery = {
  listRaces?:  {
    __typename: "ModelRaceConnection",
    items:  Array< {
      __typename: "Race",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroRaceId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFeatQueryVariables = {
  id: string,
};

export type GetFeatQuery = {
  getFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type ListFeatsQueryVariables = {
  filter?: ModelFeatFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeatsQuery = {
  listFeats?:  {
    __typename: "ModelFeatConnection",
    items:  Array< {
      __typename: "Feat",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroFeatId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSpellQueryVariables = {
  id: string,
};

export type GetSpellQuery = {
  getSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type ListSpellsQueryVariables = {
  filter?: ModelSpellFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpellsQuery = {
  listSpells?:  {
    __typename: "ModelSpellConnection",
    items:  Array< {
      __typename: "Spell",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroSpellId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEquipmentQueryVariables = {
  id: string,
};

export type GetEquipmentQuery = {
  getEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type ListEquipmentQueryVariables = {
  filter?: ModelEquipmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEquipmentQuery = {
  listEquipment?:  {
    __typename: "ModelEquipmentConnection",
    items:  Array< {
      __typename: "Equipment",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroEquipmentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLanuageQueryVariables = {
  id: string,
};

export type GetLanuageQuery = {
  getLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type ListLanuagesQueryVariables = {
  filter?: ModelLanuageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLanuagesQuery = {
  listLanuages?:  {
    __typename: "ModelLanuageConnection",
    items:  Array< {
      __typename: "Lanuage",
      id: string,
      Name?: string | null,
      createdAt: string,
      updatedAt: string,
      heroLanuageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGameHeroQueryVariables = {
  id: string,
};

export type GetGameHeroQuery = {
  getGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameHeroesQueryVariables = {
  filter?: ModelGameHeroFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameHeroesQuery = {
  listGameHeroes?:  {
    __typename: "ModelGameHeroConnection",
    items:  Array< {
      __typename: "GameHero",
      id: string,
      heroID: string,
      gameID: string,
      hero:  {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      },
      game:  {
        __typename: "Game",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    Hero?:  {
      __typename: "ModelHeroConnection",
      items:  Array< {
        __typename: "Hero",
        id: string,
        Alignment?: string | null,
        Image?: string | null,
        MaxExpPoints?: number | null,
        CurrentExpPoints?: number | null,
        MaxHpPoints?: number | null,
        CurrentHpPoints?: number | null,
        Shield?: number | null,
        Armor?: number | null,
        Dodge?: number | null,
        Natural?: number | null,
        Deflect?: number | null,
        SavingThrowFort?: number | null,
        SavingThrowRef?: number | null,
        SavingThrowWill?: number | null,
        MeleeAtk?: number | null,
        RangedAtk?: number | null,
        AbilityScoreStr?: number | null,
        AbilityScoreDex?: number | null,
        AbilityScoreCon?: number | null,
        AbilityScoreInt?: number | null,
        AbilityScoreWis?: number | null,
        AbilityScoreCha?: number | null,
        Wealth?: number | null,
        MaxWeight?: number | null,
        Speed?: number | null,
        X?: number | null,
        Y?: number | null,
        Map?: string | null,
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateHeroSubscription = {
  onCreateHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type OnUpdateHeroSubscription = {
  onUpdateHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type OnDeleteHeroSubscription = {
  onDeleteHero?:  {
    __typename: "Hero",
    id: string,
    User?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      Hero?:  {
        __typename: "ModelHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    Alignment?: string | null,
    Image?: string | null,
    MaxExpPoints?: number | null,
    CurrentExpPoints?: number | null,
    MaxHpPoints?: number | null,
    CurrentHpPoints?: number | null,
    Shield?: number | null,
    Armor?: number | null,
    Dodge?: number | null,
    Natural?: number | null,
    Deflect?: number | null,
    Class?:  {
      __typename: "ModelClassConnection",
      items:  Array< {
        __typename: "Class",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroClassId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Race?:  {
      __typename: "ModelRaceConnection",
      items:  Array< {
        __typename: "Race",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroRaceId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    SavingThrowFort?: number | null,
    SavingThrowRef?: number | null,
    SavingThrowWill?: number | null,
    MeleeAtk?: number | null,
    RangedAtk?: number | null,
    AbilityScoreStr?: number | null,
    AbilityScoreDex?: number | null,
    AbilityScoreCon?: number | null,
    AbilityScoreInt?: number | null,
    AbilityScoreWis?: number | null,
    AbilityScoreCha?: number | null,
    Feat?:  {
      __typename: "ModelFeatConnection",
      items:  Array< {
        __typename: "Feat",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroFeatId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Spell?:  {
      __typename: "ModelSpellConnection",
      items:  Array< {
        __typename: "Spell",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroSpellId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Equipment?:  {
      __typename: "ModelEquipmentConnection",
      items:  Array< {
        __typename: "Equipment",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroEquipmentId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    Wealth?: number | null,
    Lanuage?:  {
      __typename: "ModelLanuageConnection",
      items:  Array< {
        __typename: "Lanuage",
        id: string,
        Name?: string | null,
        createdAt: string,
        updatedAt: string,
        heroLanuageId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    MaxWeight?: number | null,
    Speed?: number | null,
    X?: number | null,
    Y?: number | null,
    Map?: string | null,
    Game?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userHeroId?: string | null,
  } | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroClassId?: string | null,
  } | null,
};

export type OnCreateRaceSubscription = {
  onCreateRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type OnUpdateRaceSubscription = {
  onUpdateRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type OnDeleteRaceSubscription = {
  onDeleteRace?:  {
    __typename: "Race",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroRaceId?: string | null,
  } | null,
};

export type OnCreateFeatSubscription = {
  onCreateFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type OnUpdateFeatSubscription = {
  onUpdateFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type OnDeleteFeatSubscription = {
  onDeleteFeat?:  {
    __typename: "Feat",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroFeatId?: string | null,
  } | null,
};

export type OnCreateSpellSubscription = {
  onCreateSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type OnUpdateSpellSubscription = {
  onUpdateSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type OnDeleteSpellSubscription = {
  onDeleteSpell?:  {
    __typename: "Spell",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroSpellId?: string | null,
  } | null,
};

export type OnCreateEquipmentSubscription = {
  onCreateEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type OnUpdateEquipmentSubscription = {
  onUpdateEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type OnDeleteEquipmentSubscription = {
  onDeleteEquipment?:  {
    __typename: "Equipment",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroEquipmentId?: string | null,
  } | null,
};

export type OnCreateLanuageSubscription = {
  onCreateLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type OnUpdateLanuageSubscription = {
  onUpdateLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type OnDeleteLanuageSubscription = {
  onDeleteLanuage?:  {
    __typename: "Lanuage",
    id: string,
    Name?: string | null,
    createdAt: string,
    updatedAt: string,
    heroLanuageId?: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    Name?: string | null,
    Hero?:  {
      __typename: "ModelGameHeroConnection",
      items:  Array< {
        __typename: "GameHero",
        id: string,
        heroID: string,
        gameID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameHeroSubscription = {
  onCreateGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameHeroSubscription = {
  onUpdateGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameHeroSubscription = {
  onDeleteGameHero?:  {
    __typename: "GameHero",
    id: string,
    heroID: string,
    gameID: string,
    hero:  {
      __typename: "Hero",
      id: string,
      User?:  Array< {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      Alignment?: string | null,
      Image?: string | null,
      MaxExpPoints?: number | null,
      CurrentExpPoints?: number | null,
      MaxHpPoints?: number | null,
      CurrentHpPoints?: number | null,
      Shield?: number | null,
      Armor?: number | null,
      Dodge?: number | null,
      Natural?: number | null,
      Deflect?: number | null,
      Class?:  {
        __typename: "ModelClassConnection",
        nextToken?: string | null,
      } | null,
      Race?:  {
        __typename: "ModelRaceConnection",
        nextToken?: string | null,
      } | null,
      SavingThrowFort?: number | null,
      SavingThrowRef?: number | null,
      SavingThrowWill?: number | null,
      MeleeAtk?: number | null,
      RangedAtk?: number | null,
      AbilityScoreStr?: number | null,
      AbilityScoreDex?: number | null,
      AbilityScoreCon?: number | null,
      AbilityScoreInt?: number | null,
      AbilityScoreWis?: number | null,
      AbilityScoreCha?: number | null,
      Feat?:  {
        __typename: "ModelFeatConnection",
        nextToken?: string | null,
      } | null,
      Spell?:  {
        __typename: "ModelSpellConnection",
        nextToken?: string | null,
      } | null,
      Equipment?:  {
        __typename: "ModelEquipmentConnection",
        nextToken?: string | null,
      } | null,
      Wealth?: number | null,
      Lanuage?:  {
        __typename: "ModelLanuageConnection",
        nextToken?: string | null,
      } | null,
      MaxWeight?: number | null,
      Speed?: number | null,
      X?: number | null,
      Y?: number | null,
      Map?: string | null,
      Game?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userHeroId?: string | null,
    },
    game:  {
      __typename: "Game",
      id: string,
      Name?: string | null,
      Hero?:  {
        __typename: "ModelGameHeroConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
