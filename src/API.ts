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
  Game?: ModelGameHeroConnection | null,
  createdAt: string,
  updatedAt: string,
  userHeroId?: string | null,
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
  userHeroId?: string | null,
};

export type ModelHeroConditionInput = {
  and?: Array< ModelHeroConditionInput | null > | null,
  or?: Array< ModelHeroConditionInput | null > | null,
  not?: ModelHeroConditionInput | null,
  userHeroId?: ModelIDInput | null,
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
  userHeroId?: string | null,
};

export type DeleteHeroInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
};

export type ModelGameConditionInput = {
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
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
  and?: Array< ModelHeroFilterInput | null > | null,
  or?: Array< ModelHeroFilterInput | null > | null,
  not?: ModelHeroFilterInput | null,
  userHeroId?: ModelIDInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
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

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
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

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
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
        createdAt: string,
        updatedAt: string,
        userHeroId?: string | null,
      },
      game:  {
        __typename: "Game",
        id: string,
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

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
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
