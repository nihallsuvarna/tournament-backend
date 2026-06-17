import { z } from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','createdAt','updatedAt']);

export const RoleScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const ModuleScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt']);

export const PermissionScalarFieldEnumSchema = z.enum(['id','module_id','role_id','read','write','update','delete','createdAt','updatedAt']);

export const UserRoleScalarFieldEnumSchema = z.enum(['id','user_id','role_id','permissionId']);

export const TournamentScalarFieldEnumSchema = z.enum(['id','name','description','sportType','startDate','endDate','location','status','maxTeams','entryFee','prizePool','banner','rules']);

export const SeasonScalarFieldEnumSchema = z.enum(['id','seasonName','year','startDate','endDate']);

export const PlayerScalarFieldEnumSchema = z.enum(['id','name','dob','gender','country','position','jerseyNumber','height','weight']);

export const TeamScalarFieldEnumSchema = z.enum(['id','name','logo','captain_id','coachName','homeGround']);

export const TournamentRegistrationScalarFieldEnumSchema = z.enum(['id','team_id','tournament_id','status','paymentStatus']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const GenderSchema = z.enum(['Male','Female']);

export type GenderType = `${z.infer<typeof GenderSchema>}`

export const PaymentStatusSchema = z.enum(['Pending','Success','Failure']);

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullable(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// ROLE SCHEMA
/////////////////////////////////////////

export const RoleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Role = z.infer<typeof RoleSchema>

/////////////////////////////////////////
// MODULE SCHEMA
/////////////////////////////////////////

export const ModuleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Module = z.infer<typeof ModuleSchema>

/////////////////////////////////////////
// PERMISSION SCHEMA
/////////////////////////////////////////

export const PermissionSchema = z.object({
  id: z.number().int(),
  module_id: z.number().int(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Permission = z.infer<typeof PermissionSchema>

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  role_id: z.number().int(),
  permissionId: z.number().int().nullable(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// TOURNAMENT SCHEMA
/////////////////////////////////////////

export const TournamentSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
})

export type Tournament = z.infer<typeof TournamentSchema>

/////////////////////////////////////////
// SEASON SCHEMA
/////////////////////////////////////////

export const SeasonSchema = z.object({
  id: z.number().int(),
  seasonName: z.string(),
  year: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
})

export type Season = z.infer<typeof SeasonSchema>

/////////////////////////////////////////
// PLAYER SCHEMA
/////////////////////////////////////////

export const PlayerSchema = z.object({
  gender: GenderSchema,
  id: z.number().int(),
  name: z.string(),
  dob: z.coerce.date(),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
})

export type Player = z.infer<typeof PlayerSchema>

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  logo: z.string(),
  captain_id: z.number().int(),
  coachName: z.string(),
  homeGround: z.boolean(),
})

export type Team = z.infer<typeof TeamSchema>

/////////////////////////////////////////
// TOURNAMENT REGISTRATION SCHEMA
/////////////////////////////////////////

export const TournamentRegistrationSchema = z.object({
  paymentStatus: PaymentStatusSchema,
  id: z.number().int(),
  team_id: z.number().int(),
  tournament_id: z.number().int(),
  status: z.boolean(),
})

export type TournamentRegistration = z.infer<typeof TournamentRegistrationSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  userRoles: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROLE
//------------------------------------------------------

export const RoleIncludeSchema: z.ZodType<Prisma.RoleInclude> = z.object({
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const RoleArgsSchema: z.ZodType<Prisma.RoleDefaultArgs> = z.object({
  select: z.lazy(() => RoleSelectSchema).optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
}).strict();

export const RoleCountOutputTypeArgsSchema: z.ZodType<Prisma.RoleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoleCountOutputTypeSelectSchema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z.object({
  permissions: z.boolean().optional(),
  userRoles: z.boolean().optional(),
}).strict();

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// MODULE
//------------------------------------------------------

export const ModuleIncludeSchema: z.ZodType<Prisma.ModuleInclude> = z.object({
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ModuleCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const ModuleArgsSchema: z.ZodType<Prisma.ModuleDefaultArgs> = z.object({
  select: z.lazy(() => ModuleSelectSchema).optional(),
  include: z.lazy(() => ModuleIncludeSchema).optional(),
}).strict();

export const ModuleCountOutputTypeArgsSchema: z.ZodType<Prisma.ModuleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ModuleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ModuleCountOutputTypeSelectSchema: z.ZodType<Prisma.ModuleCountOutputTypeSelect> = z.object({
  permissions: z.boolean().optional(),
}).strict();

export const ModuleSelectSchema: z.ZodType<Prisma.ModuleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  permissions: z.union([z.boolean(),z.lazy(() => PermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ModuleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PERMISSION
//------------------------------------------------------

export const PermissionIncludeSchema: z.ZodType<Prisma.PermissionInclude> = z.object({
  module: z.union([z.boolean(),z.lazy(() => ModuleArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const PermissionArgsSchema: z.ZodType<Prisma.PermissionDefaultArgs> = z.object({
  select: z.lazy(() => PermissionSelectSchema).optional(),
  include: z.lazy(() => PermissionIncludeSchema).optional(),
}).strict();

export const PermissionCountOutputTypeArgsSchema: z.ZodType<Prisma.PermissionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PermissionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PermissionCountOutputTypeSelectSchema: z.ZodType<Prisma.PermissionCountOutputTypeSelect> = z.object({
  userRoles: z.boolean().optional(),
}).strict();

export const PermissionSelectSchema: z.ZodType<Prisma.PermissionSelect> = z.object({
  id: z.boolean().optional(),
  module_id: z.boolean().optional(),
  role_id: z.boolean().optional(),
  read: z.boolean().optional(),
  write: z.boolean().optional(),
  update: z.boolean().optional(),
  delete: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  module: z.union([z.boolean(),z.lazy(() => ModuleArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER ROLE
//------------------------------------------------------

export const UserRoleIncludeSchema: z.ZodType<Prisma.UserRoleInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  permission: z.union([z.boolean(),z.lazy(() => PermissionArgsSchema)]).optional(),
}).strict();

export const UserRoleArgsSchema: z.ZodType<Prisma.UserRoleDefaultArgs> = z.object({
  select: z.lazy(() => UserRoleSelectSchema).optional(),
  include: z.lazy(() => UserRoleIncludeSchema).optional(),
}).strict();

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  role_id: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  permission: z.union([z.boolean(),z.lazy(() => PermissionArgsSchema)]).optional(),
}).strict()

// TOURNAMENT
//------------------------------------------------------

export const TournamentIncludeSchema: z.ZodType<Prisma.TournamentInclude> = z.object({
  tournamentRegistrations: z.union([z.boolean(),z.lazy(() => TournamentRegistrationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TournamentCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const TournamentArgsSchema: z.ZodType<Prisma.TournamentDefaultArgs> = z.object({
  select: z.lazy(() => TournamentSelectSchema).optional(),
  include: z.lazy(() => TournamentIncludeSchema).optional(),
}).strict();

export const TournamentCountOutputTypeArgsSchema: z.ZodType<Prisma.TournamentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TournamentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TournamentCountOutputTypeSelectSchema: z.ZodType<Prisma.TournamentCountOutputTypeSelect> = z.object({
  tournamentRegistrations: z.boolean().optional(),
}).strict();

export const TournamentSelectSchema: z.ZodType<Prisma.TournamentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  sportType: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  location: z.boolean().optional(),
  status: z.boolean().optional(),
  maxTeams: z.boolean().optional(),
  entryFee: z.boolean().optional(),
  prizePool: z.boolean().optional(),
  banner: z.boolean().optional(),
  rules: z.boolean().optional(),
  tournamentRegistrations: z.union([z.boolean(),z.lazy(() => TournamentRegistrationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TournamentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SEASON
//------------------------------------------------------

export const SeasonSelectSchema: z.ZodType<Prisma.SeasonSelect> = z.object({
  id: z.boolean().optional(),
  seasonName: z.boolean().optional(),
  year: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
}).strict()

// PLAYER
//------------------------------------------------------

export const PlayerIncludeSchema: z.ZodType<Prisma.PlayerInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const PlayerArgsSchema: z.ZodType<Prisma.PlayerDefaultArgs> = z.object({
  select: z.lazy(() => PlayerSelectSchema).optional(),
  include: z.lazy(() => PlayerIncludeSchema).optional(),
}).strict();

export const PlayerCountOutputTypeArgsSchema: z.ZodType<Prisma.PlayerCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PlayerCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PlayerCountOutputTypeSelectSchema: z.ZodType<Prisma.PlayerCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
}).strict();

export const PlayerSelectSchema: z.ZodType<Prisma.PlayerSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  dob: z.boolean().optional(),
  gender: z.boolean().optional(),
  country: z.boolean().optional(),
  position: z.boolean().optional(),
  jerseyNumber: z.boolean().optional(),
  height: z.boolean().optional(),
  weight: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PlayerCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TEAM
//------------------------------------------------------

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
  captain: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
  tournamentRegistrations: z.union([z.boolean(),z.lazy(() => TournamentRegistrationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict();

export const TeamArgsSchema: z.ZodType<Prisma.TeamDefaultArgs> = z.object({
  select: z.lazy(() => TeamSelectSchema).optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
}).strict();

export const TeamCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  tournamentRegistrations: z.boolean().optional(),
}).strict();

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  logo: z.boolean().optional(),
  captain_id: z.boolean().optional(),
  coachName: z.boolean().optional(),
  homeGround: z.boolean().optional(),
  captain: z.union([z.boolean(),z.lazy(() => PlayerArgsSchema)]).optional(),
  tournamentRegistrations: z.union([z.boolean(),z.lazy(() => TournamentRegistrationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TOURNAMENT REGISTRATION
//------------------------------------------------------

export const TournamentRegistrationIncludeSchema: z.ZodType<Prisma.TournamentRegistrationInclude> = z.object({
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  tournament: z.union([z.boolean(),z.lazy(() => TournamentArgsSchema)]).optional(),
}).strict();

export const TournamentRegistrationArgsSchema: z.ZodType<Prisma.TournamentRegistrationDefaultArgs> = z.object({
  select: z.lazy(() => TournamentRegistrationSelectSchema).optional(),
  include: z.lazy(() => TournamentRegistrationIncludeSchema).optional(),
}).strict();

export const TournamentRegistrationSelectSchema: z.ZodType<Prisma.TournamentRegistrationSelect> = z.object({
  id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  tournament_id: z.boolean().optional(),
  status: z.boolean().optional(),
  paymentStatus: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  tournament: z.union([z.boolean(),z.lazy(() => TournamentArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
});

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userRoles: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
});

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    email: z.string(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.strictObject({
  id: z.number().int().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
}));

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional(),
});

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const RoleWhereInputSchema: z.ZodType<Prisma.RoleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
});

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  permissions: z.lazy(() => PermissionOrderByRelationAggregateInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
});

export const RoleWhereUniqueInputSchema: z.ZodType<Prisma.RoleWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleWhereInputSchema), z.lazy(() => RoleWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
}));

export const RoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => RoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => RoleSumOrderByAggregateInputSchema).optional(),
});

export const RoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema), z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleScalarWhereWithAggregatesInputSchema), z.lazy(() => RoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const ModuleWhereInputSchema: z.ZodType<Prisma.ModuleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ModuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
});

export const ModuleOrderByWithRelationInputSchema: z.ZodType<Prisma.ModuleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  permissions: z.lazy(() => PermissionOrderByRelationAggregateInputSchema).optional(),
});

export const ModuleWhereUniqueInputSchema: z.ZodType<Prisma.ModuleWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ModuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ModuleWhereInputSchema), z.lazy(() => ModuleWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  permissions: z.lazy(() => PermissionListRelationFilterSchema).optional(),
}));

export const ModuleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ModuleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ModuleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ModuleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ModuleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ModuleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ModuleSumOrderByAggregateInputSchema).optional(),
});

export const ModuleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ModuleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema), z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema), z.lazy(() => ModuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const PermissionWhereInputSchema: z.ZodType<Prisma.PermissionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PermissionWhereInputSchema), z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionWhereInputSchema), z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  module_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  write: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  update: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  delete: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  module: z.union([ z.lazy(() => ModuleScalarRelationFilterSchema), z.lazy(() => ModuleWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema), z.lazy(() => RoleWhereInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
});

export const PermissionOrderByWithRelationInputSchema: z.ZodType<Prisma.PermissionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  write: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => SortOrderSchema).optional(),
  delete: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  module: z.lazy(() => ModuleOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
});

export const PermissionWhereUniqueInputSchema: z.ZodType<Prisma.PermissionWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PermissionWhereInputSchema), z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionWhereInputSchema), z.lazy(() => PermissionWhereInputSchema).array() ]).optional(),
  module_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  write: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  update: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  delete: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  module: z.union([ z.lazy(() => ModuleScalarRelationFilterSchema), z.lazy(() => ModuleWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema), z.lazy(() => RoleWhereInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
}));

export const PermissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.PermissionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  write: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => SortOrderSchema).optional(),
  delete: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PermissionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PermissionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PermissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PermissionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PermissionSumOrderByAggregateInputSchema).optional(),
});

export const PermissionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PermissionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema), z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema), z.lazy(() => PermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  module_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  read: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  write: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  update: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  delete: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema), z.lazy(() => RoleWhereInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => PermissionNullableScalarRelationFilterSchema), z.lazy(() => PermissionWhereInputSchema) ]).optional().nullable(),
});

export const UserRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  permission: z.lazy(() => PermissionOrderByWithRelationInputSchema).optional(),
});

export const UserRoleWhereUniqueInputSchema: z.ZodType<Prisma.UserRoleWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number().int() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema), z.lazy(() => RoleWhereInputSchema) ]).optional(),
  permission: z.union([ z.lazy(() => PermissionNullableScalarRelationFilterSchema), z.lazy(() => PermissionWhereInputSchema) ]).optional().nullable(),
}));

export const UserRoleOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserRoleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserRoleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserRoleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserRoleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserRoleSumOrderByAggregateInputSchema).optional(),
});

export const UserRoleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserRoleScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema), z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema), z.lazy(() => UserRoleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  user_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
});

export const TournamentWhereInputSchema: z.ZodType<Prisma.TournamentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TournamentWhereInputSchema), z.lazy(() => TournamentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentWhereInputSchema), z.lazy(() => TournamentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sportType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  maxTeams: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  entryFee: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  prizePool: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  banner: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rules: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationListRelationFilterSchema).optional(),
});

export const TournamentOrderByWithRelationInputSchema: z.ZodType<Prisma.TournamentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  sportType: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
  banner: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationOrderByRelationAggregateInputSchema).optional(),
});

export const TournamentWhereUniqueInputSchema: z.ZodType<Prisma.TournamentWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TournamentWhereInputSchema), z.lazy(() => TournamentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentWhereInputSchema), z.lazy(() => TournamentWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sportType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  maxTeams: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  entryFee: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  prizePool: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  banner: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  rules: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationListRelationFilterSchema).optional(),
}));

export const TournamentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TournamentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  sportType: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
  banner: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TournamentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TournamentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TournamentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TournamentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TournamentSumOrderByAggregateInputSchema).optional(),
});

export const TournamentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TournamentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TournamentScalarWhereWithAggregatesInputSchema), z.lazy(() => TournamentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentScalarWhereWithAggregatesInputSchema), z.lazy(() => TournamentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  sportType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  maxTeams: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  entryFee: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  prizePool: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  banner: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  rules: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export const SeasonWhereInputSchema: z.ZodType<Prisma.SeasonWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SeasonWhereInputSchema), z.lazy(() => SeasonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeasonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeasonWhereInputSchema), z.lazy(() => SeasonWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  seasonName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const SeasonOrderByWithRelationInputSchema: z.ZodType<Prisma.SeasonOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seasonName: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonWhereUniqueInputSchema: z.ZodType<Prisma.SeasonWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => SeasonWhereInputSchema), z.lazy(() => SeasonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeasonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeasonWhereInputSchema), z.lazy(() => SeasonWhereInputSchema).array() ]).optional(),
  seasonName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
}));

export const SeasonOrderByWithAggregationInputSchema: z.ZodType<Prisma.SeasonOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seasonName: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SeasonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SeasonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SeasonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SeasonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SeasonSumOrderByAggregateInputSchema).optional(),
});

export const SeasonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SeasonScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => SeasonScalarWhereWithAggregatesInputSchema), z.lazy(() => SeasonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SeasonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SeasonScalarWhereWithAggregatesInputSchema), z.lazy(() => SeasonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  seasonName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export const PlayerWhereInputSchema: z.ZodType<Prisma.PlayerWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema), z.lazy(() => GenderSchema) ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  jerseyNumber: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  weight: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
});

export const PlayerOrderByWithRelationInputSchema: z.ZodType<Prisma.PlayerOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
});

export const PlayerWhereUniqueInputSchema: z.ZodType<Prisma.PlayerWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerWhereInputSchema), z.lazy(() => PlayerWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema), z.lazy(() => GenderSchema) ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  jerseyNumber: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  height: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  weight: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
}));

export const PlayerOrderByWithAggregationInputSchema: z.ZodType<Prisma.PlayerOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PlayerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PlayerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PlayerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PlayerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PlayerSumOrderByAggregateInputSchema).optional(),
});

export const PlayerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PlayerScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema), z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema), z.lazy(() => PlayerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderWithAggregatesFilterSchema), z.lazy(() => GenderSchema) ]).optional(),
  country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  jerseyNumber: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  height: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  weight: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
});

export const TeamWhereInputSchema: z.ZodType<Prisma.TeamWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  captain_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  coachName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  homeGround: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  captain: z.union([ z.lazy(() => PlayerScalarRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationListRelationFilterSchema).optional(),
});

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
  coachName: z.lazy(() => SortOrderSchema).optional(),
  homeGround: z.lazy(() => SortOrderSchema).optional(),
  captain: z.lazy(() => PlayerOrderByWithRelationInputSchema).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationOrderByRelationAggregateInputSchema).optional(),
});

export const TeamWhereUniqueInputSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema), z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  captain_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  coachName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  homeGround: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  captain: z.union([ z.lazy(() => PlayerScalarRelationFilterSchema), z.lazy(() => PlayerWhereInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationListRelationFilterSchema).optional(),
}));

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
  coachName: z.lazy(() => SortOrderSchema).optional(),
  homeGround: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TeamAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TeamSumOrderByAggregateInputSchema).optional(),
});

export const TeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema), z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  captain_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  coachName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  homeGround: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
});

export const TournamentRegistrationWhereInputSchema: z.ZodType<Prisma.TournamentRegistrationWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TournamentRegistrationWhereInputSchema), z.lazy(() => TournamentRegistrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentRegistrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentRegistrationWhereInputSchema), z.lazy(() => TournamentRegistrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  team_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  tournament_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paymentStatus: z.union([ z.lazy(() => EnumPaymentStatusFilterSchema), z.lazy(() => PaymentStatusSchema) ]).optional(),
  team: z.union([ z.lazy(() => TeamScalarRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  tournament: z.union([ z.lazy(() => TournamentScalarRelationFilterSchema), z.lazy(() => TournamentWhereInputSchema) ]).optional(),
});

export const TournamentRegistrationOrderByWithRelationInputSchema: z.ZodType<Prisma.TournamentRegistrationOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  tournament: z.lazy(() => TournamentOrderByWithRelationInputSchema).optional(),
});

export const TournamentRegistrationWhereUniqueInputSchema: z.ZodType<Prisma.TournamentRegistrationWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TournamentRegistrationWhereInputSchema), z.lazy(() => TournamentRegistrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentRegistrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentRegistrationWhereInputSchema), z.lazy(() => TournamentRegistrationWhereInputSchema).array() ]).optional(),
  team_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  tournament_id: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paymentStatus: z.union([ z.lazy(() => EnumPaymentStatusFilterSchema), z.lazy(() => PaymentStatusSchema) ]).optional(),
  team: z.union([ z.lazy(() => TeamScalarRelationFilterSchema), z.lazy(() => TeamWhereInputSchema) ]).optional(),
  tournament: z.union([ z.lazy(() => TournamentScalarRelationFilterSchema), z.lazy(() => TournamentWhereInputSchema) ]).optional(),
}));

export const TournamentRegistrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.TournamentRegistrationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TournamentRegistrationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TournamentRegistrationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TournamentRegistrationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TournamentRegistrationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TournamentRegistrationSumOrderByAggregateInputSchema).optional(),
});

export const TournamentRegistrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TournamentRegistrationScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TournamentRegistrationScalarWhereWithAggregatesInputSchema), z.lazy(() => TournamentRegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentRegistrationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentRegistrationScalarWhereWithAggregatesInputSchema), z.lazy(() => TournamentRegistrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  team_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  tournament_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean() ]).optional(),
  paymentStatus: z.union([ z.lazy(() => EnumPaymentStatusWithAggregatesFilterSchema), z.lazy(() => PaymentStatusSchema) ]).optional(),
});

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.strictObject({
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
});

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.strictObject({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutUserNestedInputSchema).optional(),
});

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
});

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.strictObject({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.strictObject({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionCreateNestedManyWithoutRoleInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleUpdateInputSchema: z.ZodType<Prisma.RoleUpdateInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUpdateManyWithoutRoleNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const RoleUncheckedUpdateInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const RoleCreateManyInputSchema: z.ZodType<Prisma.RoleCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const RoleUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleUpdateManyMutationInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ModuleCreateInputSchema: z.ZodType<Prisma.ModuleCreateInput> = z.strictObject({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionCreateNestedManyWithoutModuleInputSchema).optional(),
});

export const ModuleUncheckedCreateInputSchema: z.ZodType<Prisma.ModuleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutModuleInputSchema).optional(),
});

export const ModuleUpdateInputSchema: z.ZodType<Prisma.ModuleUpdateInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUpdateManyWithoutModuleNestedInputSchema).optional(),
});

export const ModuleUncheckedUpdateInputSchema: z.ZodType<Prisma.ModuleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutModuleNestedInputSchema).optional(),
});

export const ModuleCreateManyInputSchema: z.ZodType<Prisma.ModuleCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ModuleUpdateManyMutationInputSchema: z.ZodType<Prisma.ModuleUpdateManyMutationInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ModuleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ModuleUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PermissionCreateInputSchema: z.ZodType<Prisma.PermissionCreateInput> = z.strictObject({
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutPermissionsInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionUncheckedCreateInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  module_id: z.number().int(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionUpdateInputSchema: z.ZodType<Prisma.PermissionUpdateInput> = z.strictObject({
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  module: z.lazy(() => ModuleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  module_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionCreateManyInputSchema: z.ZodType<Prisma.PermissionCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  module_id: z.number().int(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const PermissionUpdateManyMutationInputSchema: z.ZodType<Prisma.PermissionUpdateManyMutationInput> = z.strictObject({
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PermissionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  module_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.strictObject({
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutUserRolesInputSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUserRolesInputSchema).optional(),
});

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  role_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.strictObject({
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneWithoutUserRolesNestedInputSchema).optional(),
});

export const UserRoleUncheckedUpdateInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  role_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const UserRoleUpdateManyMutationInputSchema: z.ZodType<Prisma.UserRoleUpdateManyMutationInput> = z.strictObject({
});

export const UserRoleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const TournamentCreateInputSchema: z.ZodType<Prisma.TournamentCreateInput> = z.strictObject({
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationCreateNestedManyWithoutTournamentInputSchema).optional(),
});

export const TournamentUncheckedCreateInputSchema: z.ZodType<Prisma.TournamentUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedCreateNestedManyWithoutTournamentInputSchema).optional(),
});

export const TournamentUpdateInputSchema: z.ZodType<Prisma.TournamentUpdateInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUpdateManyWithoutTournamentNestedInputSchema).optional(),
});

export const TournamentUncheckedUpdateInputSchema: z.ZodType<Prisma.TournamentUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedUpdateManyWithoutTournamentNestedInputSchema).optional(),
});

export const TournamentCreateManyInputSchema: z.ZodType<Prisma.TournamentCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
});

export const TournamentUpdateManyMutationInputSchema: z.ZodType<Prisma.TournamentUpdateManyMutationInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TournamentUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeasonCreateInputSchema: z.ZodType<Prisma.SeasonCreateInput> = z.strictObject({
  seasonName: z.string(),
  year: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export const SeasonUncheckedCreateInputSchema: z.ZodType<Prisma.SeasonUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  seasonName: z.string(),
  year: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export const SeasonUpdateInputSchema: z.ZodType<Prisma.SeasonUpdateInput> = z.strictObject({
  seasonName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeasonUncheckedUpdateInputSchema: z.ZodType<Prisma.SeasonUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seasonName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeasonCreateManyInputSchema: z.ZodType<Prisma.SeasonCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  seasonName: z.string(),
  year: z.number().int(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
});

export const SeasonUpdateManyMutationInputSchema: z.ZodType<Prisma.SeasonUpdateManyMutationInput> = z.strictObject({
  seasonName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const SeasonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SeasonUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  seasonName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PlayerCreateInputSchema: z.ZodType<Prisma.PlayerCreateInput> = z.strictObject({
  name: z.string(),
  dob: z.coerce.date(),
  gender: z.lazy(() => GenderSchema),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutCaptainInputSchema).optional(),
});

export const PlayerUncheckedCreateInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  dob: z.coerce.date(),
  gender: z.lazy(() => GenderSchema),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutCaptainInputSchema).optional(),
});

export const PlayerUpdateInputSchema: z.ZodType<Prisma.PlayerUpdateInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutCaptainNestedInputSchema).optional(),
});

export const PlayerUncheckedUpdateInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutCaptainNestedInputSchema).optional(),
});

export const PlayerCreateManyInputSchema: z.ZodType<Prisma.PlayerCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  dob: z.coerce.date(),
  gender: z.lazy(() => GenderSchema),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
});

export const PlayerUpdateManyMutationInputSchema: z.ZodType<Prisma.PlayerUpdateManyMutationInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PlayerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.strictObject({
  name: z.string(),
  logo: z.string(),
  coachName: z.string(),
  homeGround: z.boolean(),
  captain: z.lazy(() => PlayerCreateNestedOneWithoutTeamsInputSchema),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationCreateNestedManyWithoutTeamInputSchema).optional(),
});

export const TeamUncheckedCreateInputSchema: z.ZodType<Prisma.TeamUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  logo: z.string(),
  captain_id: z.number().int(),
  coachName: z.string(),
  homeGround: z.boolean(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
});

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  captain: z.lazy(() => PlayerUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export const TeamUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  captain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  logo: z.string(),
  captain_id: z.number().int(),
  coachName: z.string(),
  homeGround: z.boolean(),
});

export const TeamUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamUpdateManyMutationInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  captain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationCreateInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateInput> = z.strictObject({
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
  team: z.lazy(() => TeamCreateNestedOneWithoutTournamentRegistrationsInputSchema),
  tournament: z.lazy(() => TournamentCreateNestedOneWithoutTournamentRegistrationsInputSchema),
});

export const TournamentRegistrationUncheckedCreateInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  team_id: z.number().int(),
  tournament_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationUpdateInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateInput> = z.strictObject({
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema).optional(),
  tournament: z.lazy(() => TournamentUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema).optional(),
});

export const TournamentRegistrationUncheckedUpdateInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tournament_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationCreateManyInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyInput> = z.strictObject({
  id: z.number().int().optional(),
  team_id: z.number().int(),
  tournament_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationUpdateManyMutationInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyMutationInput> = z.strictObject({
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateManyInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tournament_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const UserRoleListRelationFilterSchema: z.ZodType<Prisma.UserRoleListRelationFilter> = z.strictObject({
  every: z.lazy(() => UserRoleWhereInputSchema).optional(),
  some: z.lazy(() => UserRoleWhereInputSchema).optional(),
  none: z.lazy(() => UserRoleWhereInputSchema).optional(),
});

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.strictObject({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional(),
});

export const UserRoleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserRoleOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const PermissionListRelationFilterSchema: z.ZodType<Prisma.PermissionListRelationFilter> = z.strictObject({
  every: z.lazy(() => PermissionWhereInputSchema).optional(),
  some: z.lazy(() => PermissionWhereInputSchema).optional(),
  none: z.lazy(() => PermissionWhereInputSchema).optional(),
});

export const PermissionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PermissionOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const RoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const RoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.RoleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const RoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const RoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const RoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.RoleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const ModuleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ModuleCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ModuleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ModuleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const ModuleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ModuleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ModuleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ModuleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const ModuleSumOrderByAggregateInputSchema: z.ZodType<Prisma.ModuleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const ModuleScalarRelationFilterSchema: z.ZodType<Prisma.ModuleScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ModuleWhereInputSchema).optional(),
  isNot: z.lazy(() => ModuleWhereInputSchema).optional(),
});

export const RoleScalarRelationFilterSchema: z.ZodType<Prisma.RoleScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => RoleWhereInputSchema).optional(),
  isNot: z.lazy(() => RoleWhereInputSchema).optional(),
});

export const PermissionCountOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  write: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => SortOrderSchema).optional(),
  delete: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PermissionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
});

export const PermissionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  write: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => SortOrderSchema).optional(),
  delete: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PermissionMinOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  write: z.lazy(() => SortOrderSchema).optional(),
  update: z.lazy(() => SortOrderSchema).optional(),
  delete: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export const PermissionSumOrderByAggregateInputSchema: z.ZodType<Prisma.PermissionSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  module_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
});

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional(),
});

export const PermissionNullableScalarRelationFilterSchema: z.ZodType<Prisma.PermissionNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => PermissionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PermissionWhereInputSchema).optional().nullable(),
});

export const UserRoleCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
});

export const UserRoleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
});

export const UserRoleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
});

export const UserRoleMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
});

export const UserRoleSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserRoleSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  role_id: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
});

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
});

export const TournamentRegistrationListRelationFilterSchema: z.ZodType<Prisma.TournamentRegistrationListRelationFilter> = z.strictObject({
  every: z.lazy(() => TournamentRegistrationWhereInputSchema).optional(),
  some: z.lazy(() => TournamentRegistrationWhereInputSchema).optional(),
  none: z.lazy(() => TournamentRegistrationWhereInputSchema).optional(),
});

export const TournamentRegistrationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentCountOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  sportType: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
  banner: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  sportType: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
  banner: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentMinOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  sportType: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
  banner: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentSumOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  maxTeams: z.lazy(() => SortOrderSchema).optional(),
  entryFee: z.lazy(() => SortOrderSchema).optional(),
  prizePool: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonCountOrderByAggregateInputSchema: z.ZodType<Prisma.SeasonCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seasonName: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SeasonAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SeasonMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seasonName: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonMinOrderByAggregateInputSchema: z.ZodType<Prisma.SeasonMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  seasonName: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
});

export const SeasonSumOrderByAggregateInputSchema: z.ZodType<Prisma.SeasonSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
});

export const EnumGenderFilterSchema: z.ZodType<Prisma.EnumGenderFilter> = z.strictObject({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema), z.lazy(() => NestedEnumGenderFilterSchema) ]).optional(),
});

export const TeamListRelationFilterSchema: z.ZodType<Prisma.TeamListRelationFilter> = z.strictObject({
  every: z.lazy(() => TeamWhereInputSchema).optional(),
  some: z.lazy(() => TeamWhereInputSchema).optional(),
  none: z.lazy(() => TeamWhereInputSchema).optional(),
});

export const TeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export const PlayerCountOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
});

export const PlayerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
});

export const PlayerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
});

export const PlayerMinOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
});

export const PlayerSumOrderByAggregateInputSchema: z.ZodType<Prisma.PlayerSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  jerseyNumber: z.lazy(() => SortOrderSchema).optional(),
  height: z.lazy(() => SortOrderSchema).optional(),
  weight: z.lazy(() => SortOrderSchema).optional(),
});

export const EnumGenderWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGenderWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema), z.lazy(() => NestedEnumGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
});

export const PlayerScalarRelationFilterSchema: z.ZodType<Prisma.PlayerScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => PlayerWhereInputSchema).optional(),
  isNot: z.lazy(() => PlayerWhereInputSchema).optional(),
});

export const TeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
  coachName: z.lazy(() => SortOrderSchema).optional(),
  homeGround: z.lazy(() => SortOrderSchema).optional(),
});

export const TeamAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TeamAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
});

export const TeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
  coachName: z.lazy(() => SortOrderSchema).optional(),
  homeGround: z.lazy(() => SortOrderSchema).optional(),
});

export const TeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
  coachName: z.lazy(() => SortOrderSchema).optional(),
  homeGround: z.lazy(() => SortOrderSchema).optional(),
});

export const TeamSumOrderByAggregateInputSchema: z.ZodType<Prisma.TeamSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  captain_id: z.lazy(() => SortOrderSchema).optional(),
});

export const EnumPaymentStatusFilterSchema: z.ZodType<Prisma.EnumPaymentStatusFilter> = z.strictObject({
  equals: z.lazy(() => PaymentStatusSchema).optional(),
  in: z.lazy(() => PaymentStatusSchema).array().optional(),
  notIn: z.lazy(() => PaymentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusFilterSchema) ]).optional(),
});

export const TeamScalarRelationFilterSchema: z.ZodType<Prisma.TeamScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TeamWhereInputSchema).optional(),
  isNot: z.lazy(() => TeamWhereInputSchema).optional(),
});

export const TournamentScalarRelationFilterSchema: z.ZodType<Prisma.TournamentScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TournamentWhereInputSchema).optional(),
  isNot: z.lazy(() => TournamentWhereInputSchema).optional(),
});

export const TournamentRegistrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentRegistrationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentRegistrationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentRegistrationMinOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
});

export const TournamentRegistrationSumOrderByAggregateInputSchema: z.ZodType<Prisma.TournamentRegistrationSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  tournament_id: z.lazy(() => SortOrderSchema).optional(),
});

export const EnumPaymentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPaymentStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => PaymentStatusSchema).optional(),
  in: z.lazy(() => PaymentStatusSchema).array().optional(),
  notIn: z.lazy(() => PaymentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
});

export const UserRoleCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const UserRoleUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional().nullable(),
});

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.coerce.date().optional(),
});

export const UserRoleUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleCreateWithoutUserInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const PermissionCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.PermissionCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionCreateWithoutRoleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
});

export const UserRoleCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const PermissionUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionCreateWithoutRoleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
});

export const UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const PermissionUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionCreateWithoutRoleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
});

export const UserRoleUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const PermissionUncheckedUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionCreateWithoutRoleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
});

export const UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const PermissionCreateNestedManyWithoutModuleInputSchema: z.ZodType<Prisma.PermissionCreateNestedManyWithoutModuleInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionCreateWithoutModuleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyModuleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
});

export const PermissionUncheckedCreateNestedManyWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateNestedManyWithoutModuleInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionCreateWithoutModuleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyModuleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
});

export const PermissionUpdateManyWithoutModuleNestedInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithoutModuleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionCreateWithoutModuleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutModuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyModuleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutModuleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutModuleInputSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutModuleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
});

export const PermissionUncheckedUpdateManyWithoutModuleNestedInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutModuleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionCreateWithoutModuleInputSchema).array(), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema), z.lazy(() => PermissionCreateOrConnectWithoutModuleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PermissionUpsertWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => PermissionUpsertWithWhereUniqueWithoutModuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PermissionCreateManyModuleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PermissionWhereUniqueInputSchema), z.lazy(() => PermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateWithWhereUniqueWithoutModuleInputSchema), z.lazy(() => PermissionUpdateWithWhereUniqueWithoutModuleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PermissionUpdateManyWithWhereWithoutModuleInputSchema), z.lazy(() => PermissionUpdateManyWithWhereWithoutModuleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
});

export const ModuleCreateNestedOneWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleCreateNestedOneWithoutPermissionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ModuleCreateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
});

export const RoleCreateNestedOneWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutPermissionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
});

export const UserRoleCreateNestedManyWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleCreateNestedManyWithoutPermissionInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateWithoutPermissionInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyPermissionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const UserRoleUncheckedCreateNestedManyWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutPermissionInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateWithoutPermissionInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyPermissionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.strictObject({
  set: z.boolean().optional(),
});

export const ModuleUpdateOneRequiredWithoutPermissionsNestedInputSchema: z.ZodType<Prisma.ModuleUpdateOneRequiredWithoutPermissionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ModuleCreateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ModuleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  upsert: z.lazy(() => ModuleUpsertWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => ModuleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ModuleUpdateToOneWithWhereWithoutPermissionsInputSchema), z.lazy(() => ModuleUpdateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutPermissionsInputSchema) ]).optional(),
});

export const RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutPermissionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutPermissionsInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutPermissionsInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutPermissionsInputSchema), z.lazy(() => RoleUpdateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]).optional(),
});

export const UserRoleUpdateManyWithoutPermissionNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutPermissionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateWithoutPermissionInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyPermissionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutPermissionInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutPermissionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const UserRoleUncheckedUpdateManyWithoutPermissionNestedInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutPermissionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateWithoutPermissionInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyPermissionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutPermissionInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutPermissionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export const UserCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserRolesInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export const RoleCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUserRolesInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
});

export const PermissionCreateNestedOneWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutUserRolesInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputSchema).optional(),
});

export const UserUpdateOneRequiredWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserRolesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserRolesInputSchema), z.lazy(() => UserUpdateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
});

export const RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUserRolesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoleCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => RoleUpsertWithoutUserRolesInputSchema).optional(),
  connect: z.lazy(() => RoleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoleUpdateToOneWithWhereWithoutUserRolesInputSchema), z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
});

export const PermissionUpdateOneWithoutUserRolesNestedInputSchema: z.ZodType<Prisma.PermissionUpdateOneWithoutUserRolesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PermissionCreateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutUserRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PermissionCreateOrConnectWithoutUserRolesInputSchema).optional(),
  upsert: z.lazy(() => PermissionUpsertWithoutUserRolesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PermissionWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PermissionWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PermissionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PermissionUpdateToOneWithWhereWithoutUserRolesInputSchema), z.lazy(() => PermissionUpdateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUserRolesInputSchema) ]).optional(),
});

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.strictObject({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
});

export const TournamentRegistrationCreateNestedManyWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateNestedManyWithoutTournamentInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTournamentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
});

export const TournamentRegistrationUncheckedCreateNestedManyWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedCreateNestedManyWithoutTournamentInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTournamentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
});

export const TournamentRegistrationUpdateManyWithoutTournamentNestedInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyWithoutTournamentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTournamentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTournamentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
});

export const TournamentRegistrationUncheckedUpdateManyWithoutTournamentNestedInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateManyWithoutTournamentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTournamentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTournamentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
});

export const TeamCreateNestedManyWithoutCaptainInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutCaptainInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamCreateWithoutCaptainInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema), z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyCaptainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
});

export const TeamUncheckedCreateNestedManyWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutCaptainInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamCreateWithoutCaptainInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema), z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyCaptainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
});

export const EnumGenderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => GenderSchema).optional(),
});

export const TeamUpdateManyWithoutCaptainNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutCaptainNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamCreateWithoutCaptainInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema), z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutCaptainInputSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutCaptainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyCaptainInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutCaptainInputSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutCaptainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutCaptainInputSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutCaptainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
});

export const TeamUncheckedUpdateManyWithoutCaptainNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutCaptainNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamCreateWithoutCaptainInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema), z.lazy(() => TeamCreateOrConnectWithoutCaptainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutCaptainInputSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutCaptainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyCaptainInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutCaptainInputSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutCaptainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutCaptainInputSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutCaptainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
});

export const PlayerCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerCreateNestedOneWithoutTeamsInput> = z.strictObject({
  create: z.union([ z.lazy(() => PlayerCreateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
});

export const TournamentRegistrationCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateNestedManyWithoutTeamInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
});

export const TournamentRegistrationUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedCreateNestedManyWithoutTeamInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
});

export const PlayerUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.PlayerUpdateOneRequiredWithoutTeamsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PlayerCreateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PlayerCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => PlayerUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => PlayerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PlayerUpdateToOneWithWhereWithoutTeamsInputSchema), z.lazy(() => PlayerUpdateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
});

export const TournamentRegistrationUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyWithoutTeamNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
});

export const TournamentRegistrationUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateManyWithoutTeamNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema).array(), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TournamentRegistrationCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TournamentRegistrationWhereUniqueInputSchema), z.lazy(() => TournamentRegistrationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
});

export const TeamCreateNestedOneWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutTournamentRegistrationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTournamentRegistrationsInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
});

export const TournamentCreateNestedOneWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentCreateNestedOneWithoutTournamentRegistrationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TournamentCreateOrConnectWithoutTournamentRegistrationsInputSchema).optional(),
  connect: z.lazy(() => TournamentWhereUniqueInputSchema).optional(),
});

export const EnumPaymentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPaymentStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => PaymentStatusSchema).optional(),
});

export const TeamUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneRequiredWithoutTournamentRegistrationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutTournamentRegistrationsInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutTournamentRegistrationsInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]).optional(),
});

export const TournamentUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema: z.ZodType<Prisma.TournamentUpdateOneRequiredWithoutTournamentRegistrationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TournamentCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TournamentCreateOrConnectWithoutTournamentRegistrationsInputSchema).optional(),
  upsert: z.lazy(() => TournamentUpsertWithoutTournamentRegistrationsInputSchema).optional(),
  connect: z.lazy(() => TournamentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TournamentUpdateToOneWithWhereWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]).optional(),
});

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
});

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
});

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
});

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
});

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
});

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.strictObject({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
});

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
});

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.strictObject({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
});

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
});

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.strictObject({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
});

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
});

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.strictObject({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional(),
});

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
});

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.strictObject({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
});

export const NestedEnumGenderFilterSchema: z.ZodType<Prisma.NestedEnumGenderFilter> = z.strictObject({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema), z.lazy(() => NestedEnumGenderFilterSchema) ]).optional(),
});

export const NestedEnumGenderWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGenderWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema), z.lazy(() => NestedEnumGenderWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGenderFilterSchema).optional(),
});

export const NestedEnumPaymentStatusFilterSchema: z.ZodType<Prisma.NestedEnumPaymentStatusFilter> = z.strictObject({
  equals: z.lazy(() => PaymentStatusSchema).optional(),
  in: z.lazy(() => PaymentStatusSchema).array().optional(),
  notIn: z.lazy(() => PaymentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusFilterSchema) ]).optional(),
});

export const NestedEnumPaymentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPaymentStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => PaymentStatusSchema).optional(),
  in: z.lazy(() => PaymentStatusSchema).array().optional(),
  notIn: z.lazy(() => PaymentStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
});

export const UserRoleCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z.strictObject({
  role: z.lazy(() => RoleCreateNestedOneWithoutUserRolesInputSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUserRolesInputSchema).optional(),
});

export const UserRoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.number().int().optional(),
  role_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const UserRoleCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema) ]),
});

export const UserRoleCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserRoleCreateManyUserInputSchema), z.lazy(() => UserRoleCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const UserRoleUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutUserInputSchema) ]),
});

export const UserRoleUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutUserInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutUserInputSchema) ]),
});

export const UserRoleUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema), z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export const UserRoleScalarWhereInputSchema: z.ZodType<Prisma.UserRoleScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  permissionId: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
});

export const PermissionCreateWithoutRoleInputSchema: z.ZodType<Prisma.PermissionCreateWithoutRoleInput> = z.strictObject({
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutPermissionsInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.number().int().optional(),
  module_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema) ]),
});

export const PermissionCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.PermissionCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PermissionCreateManyRoleInputSchema), z.lazy(() => PermissionCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const UserRoleCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutRoleInput> = z.strictObject({
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema),
  permission: z.lazy(() => PermissionCreateNestedOneWithoutUserRolesInputSchema).optional(),
});

export const UserRoleUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const UserRoleCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema) ]),
});

export const UserRoleCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserRoleCreateManyRoleInputSchema), z.lazy(() => UserRoleCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const PermissionUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PermissionUpdateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutRoleInputSchema) ]),
});

export const PermissionUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutRoleInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutRoleInputSchema) ]),
});

export const PermissionUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => PermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateManyMutationInputSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export const PermissionScalarWhereInputSchema: z.ZodType<Prisma.PermissionScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PermissionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PermissionScalarWhereInputSchema), z.lazy(() => PermissionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  module_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  role_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  write: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  update: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  delete: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export const UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema) ]),
});

export const UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputSchema) ]),
});

export const UserRoleUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema), z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export const PermissionCreateWithoutModuleInputSchema: z.ZodType<Prisma.PermissionCreateWithoutModuleInput> = z.strictObject({
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputSchema),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionUncheckedCreateWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutModuleInput> = z.strictObject({
  id: z.number().int().optional(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export const PermissionCreateOrConnectWithoutModuleInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutModuleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema) ]),
});

export const PermissionCreateManyModuleInputEnvelopeSchema: z.ZodType<Prisma.PermissionCreateManyModuleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PermissionCreateManyModuleInputSchema), z.lazy(() => PermissionCreateManyModuleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const PermissionUpsertWithWhereUniqueWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUpsertWithWhereUniqueWithoutModuleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PermissionUpdateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutModuleInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutModuleInputSchema) ]),
});

export const PermissionUpdateWithWhereUniqueWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUpdateWithWhereUniqueWithoutModuleInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutModuleInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutModuleInputSchema) ]),
});

export const PermissionUpdateManyWithWhereWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUpdateManyWithWhereWithoutModuleInput> = z.strictObject({
  where: z.lazy(() => PermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PermissionUpdateManyMutationInputSchema), z.lazy(() => PermissionUncheckedUpdateManyWithoutModuleInputSchema) ]),
});

export const ModuleCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleCreateWithoutPermissionsInput> = z.strictObject({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ModuleUncheckedCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleUncheckedCreateWithoutPermissionsInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const ModuleCreateOrConnectWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleCreateOrConnectWithoutPermissionsInput> = z.strictObject({
  where: z.lazy(() => ModuleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ModuleCreateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutPermissionsInputSchema) ]),
});

export const RoleCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateWithoutPermissionsInput> = z.strictObject({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleUncheckedCreateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleCreateOrConnectWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutPermissionsInput> = z.strictObject({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]),
});

export const UserRoleCreateWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutPermissionInput> = z.strictObject({
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutUserRolesInputSchema),
});

export const UserRoleUncheckedCreateWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutPermissionInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  role_id: z.number().int(),
});

export const UserRoleCreateOrConnectWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema) ]),
});

export const UserRoleCreateManyPermissionInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyPermissionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserRoleCreateManyPermissionInputSchema), z.lazy(() => UserRoleCreateManyPermissionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const ModuleUpsertWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleUpsertWithoutPermissionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ModuleUpdateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => ModuleCreateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedCreateWithoutPermissionsInputSchema) ]),
  where: z.lazy(() => ModuleWhereInputSchema).optional(),
});

export const ModuleUpdateToOneWithWhereWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleUpdateToOneWithWhereWithoutPermissionsInput> = z.strictObject({
  where: z.lazy(() => ModuleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ModuleUpdateWithoutPermissionsInputSchema), z.lazy(() => ModuleUncheckedUpdateWithoutPermissionsInputSchema) ]),
});

export const ModuleUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleUpdateWithoutPermissionsInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const ModuleUncheckedUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.ModuleUncheckedUpdateWithoutPermissionsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RoleUpsertWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpsertWithoutPermissionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional(),
});

export const RoleUpdateToOneWithWhereWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutPermissionsInput> = z.strictObject({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutPermissionsInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputSchema) ]),
});

export const RoleUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUpdateWithoutPermissionsInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const RoleUncheckedUpdateWithoutPermissionsInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPermissionsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const UserRoleUpsertWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutPermissionInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutPermissionInputSchema) ]),
});

export const UserRoleUpdateWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutPermissionInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutPermissionInputSchema) ]),
});

export const UserRoleUpdateManyWithWhereWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema), z.lazy(() => UserRoleUncheckedUpdateManyWithoutPermissionInputSchema) ]),
});

export const UserCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateWithoutUserRolesInput> = z.strictObject({
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserUncheckedCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserRolesInput> = z.strictObject({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]),
});

export const RoleCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleCreateWithoutUserRolesInput> = z.strictObject({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleUncheckedCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUserRolesInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  permissions: z.lazy(() => PermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export const RoleCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleCreateOrConnectWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => RoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]),
});

export const PermissionCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionCreateWithoutUserRolesInput> = z.strictObject({
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  module: z.lazy(() => ModuleCreateNestedOneWithoutPermissionsInputSchema),
  role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputSchema),
});

export const PermissionUncheckedCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutUserRolesInput> = z.strictObject({
  id: z.number().int().optional(),
  module_id: z.number().int(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const PermissionCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionCreateOrConnectWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PermissionCreateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutUserRolesInputSchema) ]),
});

export const UserUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserRolesInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export const UserUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserRolesInputSchema) ]),
});

export const UserUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUpdateWithoutUserRolesInput> = z.strictObject({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserUncheckedUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserRolesInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const RoleUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUpsertWithoutUserRolesInput> = z.strictObject({
  update: z.union([ z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => RoleCreateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => RoleWhereInputSchema).optional(),
});

export const RoleUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUpdateToOneWithWhereWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => RoleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoleUpdateWithoutUserRolesInputSchema), z.lazy(() => RoleUncheckedUpdateWithoutUserRolesInputSchema) ]),
});

export const RoleUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUpdateWithoutUserRolesInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const RoleUncheckedUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUserRolesInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  permissions: z.lazy(() => PermissionUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export const PermissionUpsertWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionUpsertWithoutUserRolesInput> = z.strictObject({
  update: z.union([ z.lazy(() => PermissionUpdateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUserRolesInputSchema) ]),
  create: z.union([ z.lazy(() => PermissionCreateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedCreateWithoutUserRolesInputSchema) ]),
  where: z.lazy(() => PermissionWhereInputSchema).optional(),
});

export const PermissionUpdateToOneWithWhereWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionUpdateToOneWithWhereWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => PermissionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PermissionUpdateWithoutUserRolesInputSchema), z.lazy(() => PermissionUncheckedUpdateWithoutUserRolesInputSchema) ]),
});

export const PermissionUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionUpdateWithoutUserRolesInput> = z.strictObject({
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  module: z.lazy(() => ModuleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateWithoutUserRolesInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateWithoutUserRolesInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  module_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationCreateWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateWithoutTournamentInput> = z.strictObject({
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
  team: z.lazy(() => TeamCreateNestedOneWithoutTournamentRegistrationsInputSchema),
});

export const TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedCreateWithoutTournamentInput> = z.strictObject({
  id: z.number().int().optional(),
  team_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationCreateOrConnectWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateOrConnectWithoutTournamentInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema) ]),
});

export const TournamentRegistrationCreateManyTournamentInputEnvelopeSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyTournamentInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TournamentRegistrationCreateManyTournamentInputSchema), z.lazy(() => TournamentRegistrationCreateManyTournamentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUpsertWithWhereUniqueWithoutTournamentInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateWithoutTournamentInputSchema) ]),
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTournamentInputSchema) ]),
});

export const TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateWithWhereUniqueWithoutTournamentInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TournamentRegistrationUpdateWithoutTournamentInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateWithoutTournamentInputSchema) ]),
});

export const TournamentRegistrationUpdateManyWithWhereWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyWithWhereWithoutTournamentInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TournamentRegistrationUpdateManyMutationInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateManyWithoutTournamentInputSchema) ]),
});

export const TournamentRegistrationScalarWhereInputSchema: z.ZodType<Prisma.TournamentRegistrationScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TournamentRegistrationScalarWhereInputSchema), z.lazy(() => TournamentRegistrationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  team_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  tournament_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  paymentStatus: z.union([ z.lazy(() => EnumPaymentStatusFilterSchema), z.lazy(() => PaymentStatusSchema) ]).optional(),
});

export const TeamCreateWithoutCaptainInputSchema: z.ZodType<Prisma.TeamCreateWithoutCaptainInput> = z.strictObject({
  name: z.string(),
  logo: z.string(),
  coachName: z.string(),
  homeGround: z.boolean(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationCreateNestedManyWithoutTeamInputSchema).optional(),
});

export const TeamUncheckedCreateWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutCaptainInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  logo: z.string(),
  coachName: z.string(),
  homeGround: z.boolean(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
});

export const TeamCreateOrConnectWithoutCaptainInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutCaptainInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema) ]),
});

export const TeamCreateManyCaptainInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyCaptainInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TeamCreateManyCaptainInputSchema), z.lazy(() => TeamCreateManyCaptainInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const TeamUpsertWithWhereUniqueWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutCaptainInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutCaptainInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedCreateWithoutCaptainInputSchema) ]),
});

export const TeamUpdateWithWhereUniqueWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutCaptainInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutCaptainInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutCaptainInputSchema) ]),
});

export const TeamUpdateManyWithWhereWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutCaptainInput> = z.strictObject({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema), z.lazy(() => TeamUncheckedUpdateManyWithoutCaptainInputSchema) ]),
});

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  captain_id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  coachName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  homeGround: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
});

export const PlayerCreateWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerCreateWithoutTeamsInput> = z.strictObject({
  name: z.string(),
  dob: z.coerce.date(),
  gender: z.lazy(() => GenderSchema),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
});

export const PlayerUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerUncheckedCreateWithoutTeamsInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  dob: z.coerce.date(),
  gender: z.lazy(() => GenderSchema),
  country: z.string(),
  position: z.number().int(),
  jerseyNumber: z.number().int(),
  height: z.number().int(),
  weight: z.number().int(),
});

export const PlayerCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerCreateOrConnectWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => PlayerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PlayerCreateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedCreateWithoutTeamsInputSchema) ]),
});

export const TournamentRegistrationCreateWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateWithoutTeamInput> = z.strictObject({
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
  tournament: z.lazy(() => TournamentCreateNestedOneWithoutTournamentRegistrationsInputSchema),
});

export const TournamentRegistrationUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedCreateWithoutTeamInput> = z.strictObject({
  id: z.number().int().optional(),
  tournament_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateOrConnectWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema) ]),
});

export const TournamentRegistrationCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyTeamInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TournamentRegistrationCreateManyTeamInputSchema), z.lazy(() => TournamentRegistrationCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export const PlayerUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerUpsertWithoutTeamsInput> = z.strictObject({
  update: z.union([ z.lazy(() => PlayerUpdateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => PlayerCreateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => PlayerWhereInputSchema).optional(),
});

export const PlayerUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerUpdateToOneWithWhereWithoutTeamsInput> = z.strictObject({
  where: z.lazy(() => PlayerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PlayerUpdateWithoutTeamsInputSchema), z.lazy(() => PlayerUncheckedUpdateWithoutTeamsInputSchema) ]),
});

export const PlayerUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerUpdateWithoutTeamsInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const PlayerUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.PlayerUncheckedUpdateWithoutTeamsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema), z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  jerseyNumber: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  height: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  weight: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUpsertWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TournamentRegistrationUpdateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => TournamentRegistrationCreateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedCreateWithoutTeamInputSchema) ]),
});

export const TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateWithWhereUniqueWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TournamentRegistrationUpdateWithoutTeamInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateWithoutTeamInputSchema) ]),
});

export const TournamentRegistrationUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyWithWhereWithoutTeamInput> = z.strictObject({
  where: z.lazy(() => TournamentRegistrationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TournamentRegistrationUpdateManyMutationInputSchema), z.lazy(() => TournamentRegistrationUncheckedUpdateManyWithoutTeamInputSchema) ]),
});

export const TeamCreateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamCreateWithoutTournamentRegistrationsInput> = z.strictObject({
  name: z.string(),
  logo: z.string(),
  coachName: z.string(),
  homeGround: z.boolean(),
  captain: z.lazy(() => PlayerCreateNestedOneWithoutTeamsInputSchema),
});

export const TeamUncheckedCreateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutTournamentRegistrationsInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  logo: z.string(),
  captain_id: z.number().int(),
  coachName: z.string(),
  homeGround: z.boolean(),
});

export const TeamCreateOrConnectWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutTournamentRegistrationsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]),
});

export const TournamentCreateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentCreateWithoutTournamentRegistrationsInput> = z.strictObject({
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
});

export const TournamentUncheckedCreateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentUncheckedCreateWithoutTournamentRegistrationsInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string(),
  sportType: z.string(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  location: z.string(),
  status: z.boolean(),
  maxTeams: z.number().int(),
  entryFee: z.number().int(),
  prizePool: z.number().int(),
  banner: z.string(),
  rules: z.string(),
});

export const TournamentCreateOrConnectWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentCreateOrConnectWithoutTournamentRegistrationsInput> = z.strictObject({
  where: z.lazy(() => TournamentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TournamentCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]),
});

export const TeamUpsertWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamUpsertWithoutTournamentRegistrationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TeamUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
});

export const TeamUpdateToOneWithWhereWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutTournamentRegistrationsInput> = z.strictObject({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]),
});

export const TeamUpdateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamUpdateWithoutTournamentRegistrationsInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  captain: z.lazy(() => PlayerUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
});

export const TeamUncheckedUpdateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutTournamentRegistrationsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  captain_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentUpsertWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentUpsertWithoutTournamentRegistrationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TournamentUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]),
  create: z.union([ z.lazy(() => TournamentCreateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedCreateWithoutTournamentRegistrationsInputSchema) ]),
  where: z.lazy(() => TournamentWhereInputSchema).optional(),
});

export const TournamentUpdateToOneWithWhereWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentUpdateToOneWithWhereWithoutTournamentRegistrationsInput> = z.strictObject({
  where: z.lazy(() => TournamentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TournamentUpdateWithoutTournamentRegistrationsInputSchema), z.lazy(() => TournamentUncheckedUpdateWithoutTournamentRegistrationsInputSchema) ]),
});

export const TournamentUpdateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentUpdateWithoutTournamentRegistrationsInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentUncheckedUpdateWithoutTournamentRegistrationsInputSchema: z.ZodType<Prisma.TournamentUncheckedUpdateWithoutTournamentRegistrationsInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sportType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  maxTeams: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  entryFee: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prizePool: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  banner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rules: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserRoleCreateManyUserInputSchema: z.ZodType<Prisma.UserRoleCreateManyUserInput> = z.strictObject({
  id: z.number().int().optional(),
  role_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const UserRoleUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutUserInput> = z.strictObject({
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneWithoutUserRolesNestedInputSchema).optional(),
});

export const UserRoleUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const UserRoleUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutUserInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const PermissionCreateManyRoleInputSchema: z.ZodType<Prisma.PermissionCreateManyRoleInput> = z.strictObject({
  id: z.number().int().optional(),
  module_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const UserRoleCreateManyRoleInputSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  permissionId: z.number().int().optional().nullable(),
});

export const PermissionUpdateWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUpdateWithoutRoleInput> = z.strictObject({
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  module: z.lazy(() => ModuleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateWithoutRoleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  module_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateManyWithoutRoleInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutRoleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  module_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserRoleUpdateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutRoleInput> = z.strictObject({
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
  permission: z.lazy(() => PermissionUpdateOneWithoutUserRolesNestedInputSchema).optional(),
});

export const UserRoleUncheckedUpdateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutRoleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const UserRoleUncheckedUpdateManyWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutRoleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  permissionId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
});

export const PermissionCreateManyModuleInputSchema: z.ZodType<Prisma.PermissionCreateManyModuleInput> = z.strictObject({
  id: z.number().int().optional(),
  role_id: z.number().int(),
  read: z.boolean(),
  write: z.boolean(),
  update: z.boolean(),
  delete: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const PermissionUpdateWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUpdateWithoutModuleInput> = z.strictObject({
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutPermissionsNestedInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateWithoutModuleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedUpdateManyWithoutPermissionNestedInputSchema).optional(),
});

export const PermissionUncheckedUpdateManyWithoutModuleInputSchema: z.ZodType<Prisma.PermissionUncheckedUpdateManyWithoutModuleInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  write: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  update: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserRoleCreateManyPermissionInputSchema: z.ZodType<Prisma.UserRoleCreateManyPermissionInput> = z.strictObject({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  role_id: z.number().int(),
});

export const UserRoleUpdateWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutPermissionInput> = z.strictObject({
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
  role: z.lazy(() => RoleUpdateOneRequiredWithoutUserRolesNestedInputSchema).optional(),
});

export const UserRoleUncheckedUpdateWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateWithoutPermissionInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const UserRoleUncheckedUpdateManyWithoutPermissionInputSchema: z.ZodType<Prisma.UserRoleUncheckedUpdateManyWithoutPermissionInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationCreateManyTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyTournamentInput> = z.strictObject({
  id: z.number().int().optional(),
  team_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationUpdateWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateWithoutTournamentInput> = z.strictObject({
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema).optional(),
});

export const TournamentRegistrationUncheckedUpdateWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateWithoutTournamentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationUncheckedUpdateManyWithoutTournamentInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateManyWithoutTournamentInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TeamCreateManyCaptainInputSchema: z.ZodType<Prisma.TeamCreateManyCaptainInput> = z.strictObject({
  id: z.number().int().optional(),
  name: z.string(),
  logo: z.string(),
  coachName: z.string(),
  homeGround: z.boolean(),
});

export const TeamUpdateWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUpdateWithoutCaptainInput> = z.strictObject({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export const TeamUncheckedUpdateWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutCaptainInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  tournamentRegistrations: z.lazy(() => TournamentRegistrationUncheckedUpdateManyWithoutTeamNestedInputSchema).optional(),
});

export const TeamUncheckedUpdateManyWithoutCaptainInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutCaptainInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coachName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  homeGround: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationCreateManyTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyTeamInput> = z.strictObject({
  id: z.number().int().optional(),
  tournament_id: z.number().int(),
  status: z.boolean(),
  paymentStatus: z.lazy(() => PaymentStatusSchema),
});

export const TournamentRegistrationUpdateWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUpdateWithoutTeamInput> = z.strictObject({
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  tournament: z.lazy(() => TournamentUpdateOneRequiredWithoutTournamentRegistrationsNestedInputSchema).optional(),
});

export const TournamentRegistrationUncheckedUpdateWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateWithoutTeamInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tournament_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

export const TournamentRegistrationUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.TournamentRegistrationUncheckedUpdateManyWithoutTeamInput> = z.strictObject({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  tournament_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
});

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(), 
  having: UserScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const RoleFindFirstArgsSchema: z.ZodType<Prisma.RoleFindFirstArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(), 
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleFindFirstOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(), 
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(), 
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema, RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(), 
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(), RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(), 
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(), RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(), 
  having: RoleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const RoleFindUniqueArgsSchema: z.ZodType<Prisma.RoleFindUniqueArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema, 
}).strict();

export const RoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoleFindUniqueOrThrowArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema, 
}).strict();

export const ModuleFindFirstArgsSchema: z.ZodType<Prisma.ModuleFindFirstArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(), 
  orderBy: z.union([ ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema ]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ModuleScalarFieldEnumSchema, ModuleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ModuleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ModuleFindFirstOrThrowArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(), 
  orderBy: z.union([ ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema ]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ModuleScalarFieldEnumSchema, ModuleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ModuleFindManyArgsSchema: z.ZodType<Prisma.ModuleFindManyArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereInputSchema.optional(), 
  orderBy: z.union([ ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema ]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ModuleScalarFieldEnumSchema, ModuleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const ModuleAggregateArgsSchema: z.ZodType<Prisma.ModuleAggregateArgs> = z.object({
  where: ModuleWhereInputSchema.optional(), 
  orderBy: z.union([ ModuleOrderByWithRelationInputSchema.array(), ModuleOrderByWithRelationInputSchema ]).optional(),
  cursor: ModuleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ModuleGroupByArgsSchema: z.ZodType<Prisma.ModuleGroupByArgs> = z.object({
  where: ModuleWhereInputSchema.optional(), 
  orderBy: z.union([ ModuleOrderByWithAggregationInputSchema.array(), ModuleOrderByWithAggregationInputSchema ]).optional(),
  by: ModuleScalarFieldEnumSchema.array(), 
  having: ModuleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const ModuleFindUniqueArgsSchema: z.ZodType<Prisma.ModuleFindUniqueArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema, 
}).strict();

export const ModuleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ModuleFindUniqueOrThrowArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema, 
}).strict();

export const PermissionFindFirstArgsSchema: z.ZodType<Prisma.PermissionFindFirstArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(), 
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(), PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PermissionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PermissionFindFirstOrThrowArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(), 
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(), PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PermissionFindManyArgsSchema: z.ZodType<Prisma.PermissionFindManyArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereInputSchema.optional(), 
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(), PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PermissionAggregateArgsSchema: z.ZodType<Prisma.PermissionAggregateArgs> = z.object({
  where: PermissionWhereInputSchema.optional(), 
  orderBy: z.union([ PermissionOrderByWithRelationInputSchema.array(), PermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: PermissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PermissionGroupByArgsSchema: z.ZodType<Prisma.PermissionGroupByArgs> = z.object({
  where: PermissionWhereInputSchema.optional(), 
  orderBy: z.union([ PermissionOrderByWithAggregationInputSchema.array(), PermissionOrderByWithAggregationInputSchema ]).optional(),
  by: PermissionScalarFieldEnumSchema.array(), 
  having: PermissionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PermissionFindUniqueArgsSchema: z.ZodType<Prisma.PermissionFindUniqueArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema, 
}).strict();

export const PermissionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PermissionFindUniqueOrThrowArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema, 
}).strict();

export const UserRoleFindFirstArgsSchema: z.ZodType<Prisma.UserRoleFindFirstArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(), UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema, UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserRoleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindFirstOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(), UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema, UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserRoleFindManyArgsSchema: z.ZodType<Prisma.UserRoleFindManyArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(), UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema, UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const UserRoleAggregateArgsSchema: z.ZodType<Prisma.UserRoleAggregateArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(), UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserRoleGroupByArgsSchema: z.ZodType<Prisma.UserRoleGroupByArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithAggregationInputSchema.array(), UserRoleOrderByWithAggregationInputSchema ]).optional(),
  by: UserRoleScalarFieldEnumSchema.array(), 
  having: UserRoleScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const UserRoleFindUniqueArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema, 
}).strict();

export const UserRoleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserRoleFindUniqueOrThrowArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema, 
}).strict();

export const TournamentFindFirstArgsSchema: z.ZodType<Prisma.TournamentFindFirstArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentOrderByWithRelationInputSchema.array(), TournamentOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentScalarFieldEnumSchema, TournamentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TournamentFindFirstOrThrowArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentOrderByWithRelationInputSchema.array(), TournamentOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentScalarFieldEnumSchema, TournamentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentFindManyArgsSchema: z.ZodType<Prisma.TournamentFindManyArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentOrderByWithRelationInputSchema.array(), TournamentOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentScalarFieldEnumSchema, TournamentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentAggregateArgsSchema: z.ZodType<Prisma.TournamentAggregateArgs> = z.object({
  where: TournamentWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentOrderByWithRelationInputSchema.array(), TournamentOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TournamentGroupByArgsSchema: z.ZodType<Prisma.TournamentGroupByArgs> = z.object({
  where: TournamentWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentOrderByWithAggregationInputSchema.array(), TournamentOrderByWithAggregationInputSchema ]).optional(),
  by: TournamentScalarFieldEnumSchema.array(), 
  having: TournamentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TournamentFindUniqueArgsSchema: z.ZodType<Prisma.TournamentFindUniqueArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereUniqueInputSchema, 
}).strict();

export const TournamentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TournamentFindUniqueOrThrowArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereUniqueInputSchema, 
}).strict();

export const SeasonFindFirstArgsSchema: z.ZodType<Prisma.SeasonFindFirstArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereInputSchema.optional(), 
  orderBy: z.union([ SeasonOrderByWithRelationInputSchema.array(), SeasonOrderByWithRelationInputSchema ]).optional(),
  cursor: SeasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeasonScalarFieldEnumSchema, SeasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeasonFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SeasonFindFirstOrThrowArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereInputSchema.optional(), 
  orderBy: z.union([ SeasonOrderByWithRelationInputSchema.array(), SeasonOrderByWithRelationInputSchema ]).optional(),
  cursor: SeasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeasonScalarFieldEnumSchema, SeasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeasonFindManyArgsSchema: z.ZodType<Prisma.SeasonFindManyArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereInputSchema.optional(), 
  orderBy: z.union([ SeasonOrderByWithRelationInputSchema.array(), SeasonOrderByWithRelationInputSchema ]).optional(),
  cursor: SeasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SeasonScalarFieldEnumSchema, SeasonScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const SeasonAggregateArgsSchema: z.ZodType<Prisma.SeasonAggregateArgs> = z.object({
  where: SeasonWhereInputSchema.optional(), 
  orderBy: z.union([ SeasonOrderByWithRelationInputSchema.array(), SeasonOrderByWithRelationInputSchema ]).optional(),
  cursor: SeasonWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SeasonGroupByArgsSchema: z.ZodType<Prisma.SeasonGroupByArgs> = z.object({
  where: SeasonWhereInputSchema.optional(), 
  orderBy: z.union([ SeasonOrderByWithAggregationInputSchema.array(), SeasonOrderByWithAggregationInputSchema ]).optional(),
  by: SeasonScalarFieldEnumSchema.array(), 
  having: SeasonScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const SeasonFindUniqueArgsSchema: z.ZodType<Prisma.SeasonFindUniqueArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereUniqueInputSchema, 
}).strict();

export const SeasonFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SeasonFindUniqueOrThrowArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereUniqueInputSchema, 
}).strict();

export const PlayerFindFirstArgsSchema: z.ZodType<Prisma.PlayerFindFirstArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(), 
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PlayerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindFirstOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(), 
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PlayerFindManyArgsSchema: z.ZodType<Prisma.PlayerFindManyArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereInputSchema.optional(), 
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PlayerScalarFieldEnumSchema, PlayerScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const PlayerAggregateArgsSchema: z.ZodType<Prisma.PlayerAggregateArgs> = z.object({
  where: PlayerWhereInputSchema.optional(), 
  orderBy: z.union([ PlayerOrderByWithRelationInputSchema.array(), PlayerOrderByWithRelationInputSchema ]).optional(),
  cursor: PlayerWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PlayerGroupByArgsSchema: z.ZodType<Prisma.PlayerGroupByArgs> = z.object({
  where: PlayerWhereInputSchema.optional(), 
  orderBy: z.union([ PlayerOrderByWithAggregationInputSchema.array(), PlayerOrderByWithAggregationInputSchema ]).optional(),
  by: PlayerScalarFieldEnumSchema.array(), 
  having: PlayerScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const PlayerFindUniqueArgsSchema: z.ZodType<Prisma.PlayerFindUniqueArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema, 
}).strict();

export const PlayerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PlayerFindUniqueOrThrowArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema, 
}).strict();

export const TeamFindFirstArgsSchema: z.ZodType<Prisma.TeamFindFirstArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(), 
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TeamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamFindFirstOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(), 
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TeamFindManyArgsSchema: z.ZodType<Prisma.TeamFindManyArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(), 
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TeamAggregateArgsSchema: z.ZodType<Prisma.TeamAggregateArgs> = z.object({
  where: TeamWhereInputSchema.optional(), 
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TeamGroupByArgsSchema: z.ZodType<Prisma.TeamGroupByArgs> = z.object({
  where: TeamWhereInputSchema.optional(), 
  orderBy: z.union([ TeamOrderByWithAggregationInputSchema.array(), TeamOrderByWithAggregationInputSchema ]).optional(),
  by: TeamScalarFieldEnumSchema.array(), 
  having: TeamScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TeamFindUniqueArgsSchema: z.ZodType<Prisma.TeamFindUniqueArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema, 
}).strict();

export const TeamFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamFindUniqueOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema, 
}).strict();

export const TournamentRegistrationFindFirstArgsSchema: z.ZodType<Prisma.TournamentRegistrationFindFirstArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentRegistrationOrderByWithRelationInputSchema.array(), TournamentRegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentRegistrationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentRegistrationScalarFieldEnumSchema, TournamentRegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentRegistrationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TournamentRegistrationFindFirstOrThrowArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentRegistrationOrderByWithRelationInputSchema.array(), TournamentRegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentRegistrationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentRegistrationScalarFieldEnumSchema, TournamentRegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentRegistrationFindManyArgsSchema: z.ZodType<Prisma.TournamentRegistrationFindManyArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentRegistrationOrderByWithRelationInputSchema.array(), TournamentRegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentRegistrationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TournamentRegistrationScalarFieldEnumSchema, TournamentRegistrationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export const TournamentRegistrationAggregateArgsSchema: z.ZodType<Prisma.TournamentRegistrationAggregateArgs> = z.object({
  where: TournamentRegistrationWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentRegistrationOrderByWithRelationInputSchema.array(), TournamentRegistrationOrderByWithRelationInputSchema ]).optional(),
  cursor: TournamentRegistrationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TournamentRegistrationGroupByArgsSchema: z.ZodType<Prisma.TournamentRegistrationGroupByArgs> = z.object({
  where: TournamentRegistrationWhereInputSchema.optional(), 
  orderBy: z.union([ TournamentRegistrationOrderByWithAggregationInputSchema.array(), TournamentRegistrationOrderByWithAggregationInputSchema ]).optional(),
  by: TournamentRegistrationScalarFieldEnumSchema.array(), 
  having: TournamentRegistrationScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export const TournamentRegistrationFindUniqueArgsSchema: z.ZodType<Prisma.TournamentRegistrationFindUniqueArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereUniqueInputSchema, 
}).strict();

export const TournamentRegistrationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TournamentRegistrationFindUniqueOrThrowArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereUniqueInputSchema, 
}).strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
}).strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
  create: z.union([ UserCreateInputSchema, UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
}).strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema, UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema, UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema, 
}).strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema, RoleUncheckedCreateInputSchema ]),
}).strict();

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema, 
  create: z.union([ RoleCreateInputSchema, RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema, RoleUncheckedUpdateInputSchema ]),
}).strict();

export const RoleCreateManyArgsSchema: z.ZodType<Prisma.RoleCreateManyArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema, RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const RoleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoleCreateManyInputSchema, RoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const RoleDeleteArgsSchema: z.ZodType<Prisma.RoleDeleteArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereUniqueInputSchema, 
}).strict();

export const RoleUpdateArgsSchema: z.ZodType<Prisma.RoleUpdateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleUpdateInputSchema, RoleUncheckedUpdateInputSchema ]),
  where: RoleWhereUniqueInputSchema, 
}).strict();

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema, RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RoleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RoleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema, RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const RoleDeleteManyArgsSchema: z.ZodType<Prisma.RoleDeleteManyArgs> = z.object({
  where: RoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ModuleCreateArgsSchema: z.ZodType<Prisma.ModuleCreateArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  data: z.union([ ModuleCreateInputSchema, ModuleUncheckedCreateInputSchema ]),
}).strict();

export const ModuleUpsertArgsSchema: z.ZodType<Prisma.ModuleUpsertArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema, 
  create: z.union([ ModuleCreateInputSchema, ModuleUncheckedCreateInputSchema ]),
  update: z.union([ ModuleUpdateInputSchema, ModuleUncheckedUpdateInputSchema ]),
}).strict();

export const ModuleCreateManyArgsSchema: z.ZodType<Prisma.ModuleCreateManyArgs> = z.object({
  data: z.union([ ModuleCreateManyInputSchema, ModuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ModuleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ModuleCreateManyAndReturnArgs> = z.object({
  data: z.union([ ModuleCreateManyInputSchema, ModuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const ModuleDeleteArgsSchema: z.ZodType<Prisma.ModuleDeleteArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  where: ModuleWhereUniqueInputSchema, 
}).strict();

export const ModuleUpdateArgsSchema: z.ZodType<Prisma.ModuleUpdateArgs> = z.object({
  select: ModuleSelectSchema.optional(),
  include: ModuleIncludeSchema.optional(),
  data: z.union([ ModuleUpdateInputSchema, ModuleUncheckedUpdateInputSchema ]),
  where: ModuleWhereUniqueInputSchema, 
}).strict();

export const ModuleUpdateManyArgsSchema: z.ZodType<Prisma.ModuleUpdateManyArgs> = z.object({
  data: z.union([ ModuleUpdateManyMutationInputSchema, ModuleUncheckedUpdateManyInputSchema ]),
  where: ModuleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ModuleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ModuleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ModuleUpdateManyMutationInputSchema, ModuleUncheckedUpdateManyInputSchema ]),
  where: ModuleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const ModuleDeleteManyArgsSchema: z.ZodType<Prisma.ModuleDeleteManyArgs> = z.object({
  where: ModuleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PermissionCreateArgsSchema: z.ZodType<Prisma.PermissionCreateArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  data: z.union([ PermissionCreateInputSchema, PermissionUncheckedCreateInputSchema ]),
}).strict();

export const PermissionUpsertArgsSchema: z.ZodType<Prisma.PermissionUpsertArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema, 
  create: z.union([ PermissionCreateInputSchema, PermissionUncheckedCreateInputSchema ]),
  update: z.union([ PermissionUpdateInputSchema, PermissionUncheckedUpdateInputSchema ]),
}).strict();

export const PermissionCreateManyArgsSchema: z.ZodType<Prisma.PermissionCreateManyArgs> = z.object({
  data: z.union([ PermissionCreateManyInputSchema, PermissionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PermissionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PermissionCreateManyAndReturnArgs> = z.object({
  data: z.union([ PermissionCreateManyInputSchema, PermissionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PermissionDeleteArgsSchema: z.ZodType<Prisma.PermissionDeleteArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  where: PermissionWhereUniqueInputSchema, 
}).strict();

export const PermissionUpdateArgsSchema: z.ZodType<Prisma.PermissionUpdateArgs> = z.object({
  select: PermissionSelectSchema.optional(),
  include: PermissionIncludeSchema.optional(),
  data: z.union([ PermissionUpdateInputSchema, PermissionUncheckedUpdateInputSchema ]),
  where: PermissionWhereUniqueInputSchema, 
}).strict();

export const PermissionUpdateManyArgsSchema: z.ZodType<Prisma.PermissionUpdateManyArgs> = z.object({
  data: z.union([ PermissionUpdateManyMutationInputSchema, PermissionUncheckedUpdateManyInputSchema ]),
  where: PermissionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PermissionUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PermissionUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PermissionUpdateManyMutationInputSchema, PermissionUncheckedUpdateManyInputSchema ]),
  where: PermissionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PermissionDeleteManyArgsSchema: z.ZodType<Prisma.PermissionDeleteManyArgs> = z.object({
  where: PermissionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserRoleCreateArgsSchema: z.ZodType<Prisma.UserRoleCreateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  data: z.union([ UserRoleCreateInputSchema, UserRoleUncheckedCreateInputSchema ]),
}).strict();

export const UserRoleUpsertArgsSchema: z.ZodType<Prisma.UserRoleUpsertArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema, 
  create: z.union([ UserRoleCreateInputSchema, UserRoleUncheckedCreateInputSchema ]),
  update: z.union([ UserRoleUpdateInputSchema, UserRoleUncheckedUpdateInputSchema ]),
}).strict();

export const UserRoleCreateManyArgsSchema: z.ZodType<Prisma.UserRoleCreateManyArgs> = z.object({
  data: z.union([ UserRoleCreateManyInputSchema, UserRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserRoleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserRoleCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserRoleCreateManyInputSchema, UserRoleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const UserRoleDeleteArgsSchema: z.ZodType<Prisma.UserRoleDeleteArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  where: UserRoleWhereUniqueInputSchema, 
}).strict();

export const UserRoleUpdateArgsSchema: z.ZodType<Prisma.UserRoleUpdateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: UserRoleIncludeSchema.optional(),
  data: z.union([ UserRoleUpdateInputSchema, UserRoleUncheckedUpdateInputSchema ]),
  where: UserRoleWhereUniqueInputSchema, 
}).strict();

export const UserRoleUpdateManyArgsSchema: z.ZodType<Prisma.UserRoleUpdateManyArgs> = z.object({
  data: z.union([ UserRoleUpdateManyMutationInputSchema, UserRoleUncheckedUpdateManyInputSchema ]),
  where: UserRoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserRoleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserRoleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserRoleUpdateManyMutationInputSchema, UserRoleUncheckedUpdateManyInputSchema ]),
  where: UserRoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const UserRoleDeleteManyArgsSchema: z.ZodType<Prisma.UserRoleDeleteManyArgs> = z.object({
  where: UserRoleWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentCreateArgsSchema: z.ZodType<Prisma.TournamentCreateArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  data: z.union([ TournamentCreateInputSchema, TournamentUncheckedCreateInputSchema ]),
}).strict();

export const TournamentUpsertArgsSchema: z.ZodType<Prisma.TournamentUpsertArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereUniqueInputSchema, 
  create: z.union([ TournamentCreateInputSchema, TournamentUncheckedCreateInputSchema ]),
  update: z.union([ TournamentUpdateInputSchema, TournamentUncheckedUpdateInputSchema ]),
}).strict();

export const TournamentCreateManyArgsSchema: z.ZodType<Prisma.TournamentCreateManyArgs> = z.object({
  data: z.union([ TournamentCreateManyInputSchema, TournamentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TournamentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TournamentCreateManyAndReturnArgs> = z.object({
  data: z.union([ TournamentCreateManyInputSchema, TournamentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TournamentDeleteArgsSchema: z.ZodType<Prisma.TournamentDeleteArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  where: TournamentWhereUniqueInputSchema, 
}).strict();

export const TournamentUpdateArgsSchema: z.ZodType<Prisma.TournamentUpdateArgs> = z.object({
  select: TournamentSelectSchema.optional(),
  include: TournamentIncludeSchema.optional(),
  data: z.union([ TournamentUpdateInputSchema, TournamentUncheckedUpdateInputSchema ]),
  where: TournamentWhereUniqueInputSchema, 
}).strict();

export const TournamentUpdateManyArgsSchema: z.ZodType<Prisma.TournamentUpdateManyArgs> = z.object({
  data: z.union([ TournamentUpdateManyMutationInputSchema, TournamentUncheckedUpdateManyInputSchema ]),
  where: TournamentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TournamentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TournamentUpdateManyMutationInputSchema, TournamentUncheckedUpdateManyInputSchema ]),
  where: TournamentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentDeleteManyArgsSchema: z.ZodType<Prisma.TournamentDeleteManyArgs> = z.object({
  where: TournamentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeasonCreateArgsSchema: z.ZodType<Prisma.SeasonCreateArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  data: z.union([ SeasonCreateInputSchema, SeasonUncheckedCreateInputSchema ]),
}).strict();

export const SeasonUpsertArgsSchema: z.ZodType<Prisma.SeasonUpsertArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereUniqueInputSchema, 
  create: z.union([ SeasonCreateInputSchema, SeasonUncheckedCreateInputSchema ]),
  update: z.union([ SeasonUpdateInputSchema, SeasonUncheckedUpdateInputSchema ]),
}).strict();

export const SeasonCreateManyArgsSchema: z.ZodType<Prisma.SeasonCreateManyArgs> = z.object({
  data: z.union([ SeasonCreateManyInputSchema, SeasonCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SeasonCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SeasonCreateManyAndReturnArgs> = z.object({
  data: z.union([ SeasonCreateManyInputSchema, SeasonCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const SeasonDeleteArgsSchema: z.ZodType<Prisma.SeasonDeleteArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  where: SeasonWhereUniqueInputSchema, 
}).strict();

export const SeasonUpdateArgsSchema: z.ZodType<Prisma.SeasonUpdateArgs> = z.object({
  select: SeasonSelectSchema.optional(),
  data: z.union([ SeasonUpdateInputSchema, SeasonUncheckedUpdateInputSchema ]),
  where: SeasonWhereUniqueInputSchema, 
}).strict();

export const SeasonUpdateManyArgsSchema: z.ZodType<Prisma.SeasonUpdateManyArgs> = z.object({
  data: z.union([ SeasonUpdateManyMutationInputSchema, SeasonUncheckedUpdateManyInputSchema ]),
  where: SeasonWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeasonUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SeasonUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SeasonUpdateManyMutationInputSchema, SeasonUncheckedUpdateManyInputSchema ]),
  where: SeasonWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const SeasonDeleteManyArgsSchema: z.ZodType<Prisma.SeasonDeleteManyArgs> = z.object({
  where: SeasonWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PlayerCreateArgsSchema: z.ZodType<Prisma.PlayerCreateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  data: z.union([ PlayerCreateInputSchema, PlayerUncheckedCreateInputSchema ]),
}).strict();

export const PlayerUpsertArgsSchema: z.ZodType<Prisma.PlayerUpsertArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema, 
  create: z.union([ PlayerCreateInputSchema, PlayerUncheckedCreateInputSchema ]),
  update: z.union([ PlayerUpdateInputSchema, PlayerUncheckedUpdateInputSchema ]),
}).strict();

export const PlayerCreateManyArgsSchema: z.ZodType<Prisma.PlayerCreateManyArgs> = z.object({
  data: z.union([ PlayerCreateManyInputSchema, PlayerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PlayerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PlayerCreateManyAndReturnArgs> = z.object({
  data: z.union([ PlayerCreateManyInputSchema, PlayerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const PlayerDeleteArgsSchema: z.ZodType<Prisma.PlayerDeleteArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  where: PlayerWhereUniqueInputSchema, 
}).strict();

export const PlayerUpdateArgsSchema: z.ZodType<Prisma.PlayerUpdateArgs> = z.object({
  select: PlayerSelectSchema.optional(),
  include: PlayerIncludeSchema.optional(),
  data: z.union([ PlayerUpdateInputSchema, PlayerUncheckedUpdateInputSchema ]),
  where: PlayerWhereUniqueInputSchema, 
}).strict();

export const PlayerUpdateManyArgsSchema: z.ZodType<Prisma.PlayerUpdateManyArgs> = z.object({
  data: z.union([ PlayerUpdateManyMutationInputSchema, PlayerUncheckedUpdateManyInputSchema ]),
  where: PlayerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PlayerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PlayerUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PlayerUpdateManyMutationInputSchema, PlayerUncheckedUpdateManyInputSchema ]),
  where: PlayerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const PlayerDeleteManyArgsSchema: z.ZodType<Prisma.PlayerDeleteManyArgs> = z.object({
  where: PlayerWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TeamCreateArgsSchema: z.ZodType<Prisma.TeamCreateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamCreateInputSchema, TeamUncheckedCreateInputSchema ]),
}).strict();

export const TeamUpsertArgsSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema, 
  create: z.union([ TeamCreateInputSchema, TeamUncheckedCreateInputSchema ]),
  update: z.union([ TeamUpdateInputSchema, TeamUncheckedUpdateInputSchema ]),
}).strict();

export const TeamCreateManyArgsSchema: z.ZodType<Prisma.TeamCreateManyArgs> = z.object({
  data: z.union([ TeamCreateManyInputSchema, TeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TeamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamCreateManyInputSchema, TeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TeamDeleteArgsSchema: z.ZodType<Prisma.TeamDeleteArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema, 
}).strict();

export const TeamUpdateArgsSchema: z.ZodType<Prisma.TeamUpdateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamUpdateInputSchema, TeamUncheckedUpdateInputSchema ]),
  where: TeamWhereUniqueInputSchema, 
}).strict();

export const TeamUpdateManyArgsSchema: z.ZodType<Prisma.TeamUpdateManyArgs> = z.object({
  data: z.union([ TeamUpdateManyMutationInputSchema, TeamUncheckedUpdateManyInputSchema ]),
  where: TeamWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TeamUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TeamUpdateManyMutationInputSchema, TeamUncheckedUpdateManyInputSchema ]),
  where: TeamWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TeamDeleteManyArgsSchema: z.ZodType<Prisma.TeamDeleteManyArgs> = z.object({
  where: TeamWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentRegistrationCreateArgsSchema: z.ZodType<Prisma.TournamentRegistrationCreateArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  data: z.union([ TournamentRegistrationCreateInputSchema, TournamentRegistrationUncheckedCreateInputSchema ]),
}).strict();

export const TournamentRegistrationUpsertArgsSchema: z.ZodType<Prisma.TournamentRegistrationUpsertArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereUniqueInputSchema, 
  create: z.union([ TournamentRegistrationCreateInputSchema, TournamentRegistrationUncheckedCreateInputSchema ]),
  update: z.union([ TournamentRegistrationUpdateInputSchema, TournamentRegistrationUncheckedUpdateInputSchema ]),
}).strict();

export const TournamentRegistrationCreateManyArgsSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyArgs> = z.object({
  data: z.union([ TournamentRegistrationCreateManyInputSchema, TournamentRegistrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TournamentRegistrationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TournamentRegistrationCreateManyAndReturnArgs> = z.object({
  data: z.union([ TournamentRegistrationCreateManyInputSchema, TournamentRegistrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export const TournamentRegistrationDeleteArgsSchema: z.ZodType<Prisma.TournamentRegistrationDeleteArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  where: TournamentRegistrationWhereUniqueInputSchema, 
}).strict();

export const TournamentRegistrationUpdateArgsSchema: z.ZodType<Prisma.TournamentRegistrationUpdateArgs> = z.object({
  select: TournamentRegistrationSelectSchema.optional(),
  include: TournamentRegistrationIncludeSchema.optional(),
  data: z.union([ TournamentRegistrationUpdateInputSchema, TournamentRegistrationUncheckedUpdateInputSchema ]),
  where: TournamentRegistrationWhereUniqueInputSchema, 
}).strict();

export const TournamentRegistrationUpdateManyArgsSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyArgs> = z.object({
  data: z.union([ TournamentRegistrationUpdateManyMutationInputSchema, TournamentRegistrationUncheckedUpdateManyInputSchema ]),
  where: TournamentRegistrationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentRegistrationUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TournamentRegistrationUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TournamentRegistrationUpdateManyMutationInputSchema, TournamentRegistrationUncheckedUpdateManyInputSchema ]),
  where: TournamentRegistrationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export const TournamentRegistrationDeleteManyArgsSchema: z.ZodType<Prisma.TournamentRegistrationDeleteManyArgs> = z.object({
  where: TournamentRegistrationWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();