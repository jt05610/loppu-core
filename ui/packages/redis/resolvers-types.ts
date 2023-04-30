import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  join__FieldSet: any;
  link__Import: any;
};

export type Query = {
  __typename?: 'Query';
  /** The details of a specific stream */
  stream?: Maybe<Stream>;
  /** All streams available */
  streams: Array<Stream>;
};


export type QueryStreamArgs = {
  name: Scalars['String'];
};

export type Stream = {
  __typename?: 'Stream';
  items?: Maybe<Array<StreamItem>>;
  name?: Maybe<Scalars['String']>;
};

export type StreamItem = {
  __typename?: 'StreamItem';
  id: Scalars['ID'];
  stream?: Maybe<Stream>;
};

export enum Join__Graph {
  Streams = 'STREAMS'
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  Stream: ResolverTypeWrapper<Stream>;
  StreamItem: ResolverTypeWrapper<StreamItem>;
  String: ResolverTypeWrapper<Scalars['String']>;
  join__FieldSet: ResolverTypeWrapper<Scalars['join__FieldSet']>;
  join__Graph: Join__Graph;
  link__Import: ResolverTypeWrapper<Scalars['link__Import']>;
  link__Purpose: Link__Purpose;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Query: {};
  Stream: Stream;
  StreamItem: StreamItem;
  String: Scalars['String'];
  join__FieldSet: Scalars['join__FieldSet'];
  link__Import: Scalars['link__Import'];
}>;

export type Join__EnumValueDirectiveArgs = {
  graph: Join__Graph;
};

export type Join__EnumValueDirectiveResolver<Result, Parent, ContextType = any, Args = Join__EnumValueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Join__FieldDirectiveArgs = {
  external?: Maybe<Scalars['Boolean']>;
  graph?: Maybe<Join__Graph>;
  override?: Maybe<Scalars['String']>;
  provides?: Maybe<Scalars['join__FieldSet']>;
  requires?: Maybe<Scalars['join__FieldSet']>;
  type?: Maybe<Scalars['String']>;
  usedOverridden?: Maybe<Scalars['Boolean']>;
};

export type Join__FieldDirectiveResolver<Result, Parent, ContextType = any, Args = Join__FieldDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Join__GraphDirectiveArgs = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Join__GraphDirectiveResolver<Result, Parent, ContextType = any, Args = Join__GraphDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Join__ImplementsDirectiveArgs = {
  graph: Join__Graph;
  interface: Scalars['String'];
};

export type Join__ImplementsDirectiveResolver<Result, Parent, ContextType = any, Args = Join__ImplementsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Join__TypeDirectiveArgs = {
  extension?: Scalars['Boolean'];
  graph: Join__Graph;
  isInterfaceObject?: Scalars['Boolean'];
  key?: Maybe<Scalars['join__FieldSet']>;
  resolvable?: Scalars['Boolean'];
};

export type Join__TypeDirectiveResolver<Result, Parent, ContextType = any, Args = Join__TypeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Join__UnionMemberDirectiveArgs = {
  graph: Join__Graph;
  member: Scalars['String'];
};

export type Join__UnionMemberDirectiveResolver<Result, Parent, ContextType = any, Args = Join__UnionMemberDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  as?: Maybe<Scalars['String']>;
  for?: Maybe<Link__Purpose>;
  import?: Maybe<Array<Maybe<Scalars['link__Import']>>>;
  url?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  stream?: Resolver<Maybe<ResolversTypes['Stream']>, ParentType, ContextType, RequireFields<QueryStreamArgs, 'name'>>;
  streams?: Resolver<Array<ResolversTypes['Stream']>, ParentType, ContextType>;
}>;

export type StreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stream'] = ResolversParentTypes['Stream']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['StreamItem']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StreamItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['StreamItem'] = ResolversParentTypes['StreamItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stream?: Resolver<Maybe<ResolversTypes['Stream']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Join__FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['join__FieldSet'], any> {
  name: 'join__FieldSet';
}

export interface Link__ImportScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['link__Import'], any> {
  name: 'link__Import';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Stream?: StreamResolvers<ContextType>;
  StreamItem?: StreamItemResolvers<ContextType>;
  join__FieldSet?: GraphQLScalarType;
  link__Import?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  join__enumValue?: Join__EnumValueDirectiveResolver<any, any, ContextType>;
  join__field?: Join__FieldDirectiveResolver<any, any, ContextType>;
  join__graph?: Join__GraphDirectiveResolver<any, any, ContextType>;
  join__implements?: Join__ImplementsDirectiveResolver<any, any, ContextType>;
  join__type?: Join__TypeDirectiveResolver<any, any, ContextType>;
  join__unionMember?: Join__UnionMemberDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
}>;
