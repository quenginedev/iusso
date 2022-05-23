type ObjectId = import("mongodb").ObjectId;
type MongoDocument = import("mongodb").Document;
type ValidateFunction = import("ajv").ValidateFunction;
type APIGatewayProxyResultV2 = import("aws-lambda").APIGatewayProxyResultV2;
type Document = import("mongoose").Document;

interface Document {
  _id: import("mongodb").ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

type HandleResponse = (
  params: { statusCode?: number; body: any },
) => import("aws-lambda").APIGatewayProxyResultV2;

type CreateOneQueryFn = <T>(props: {
  data: T;
}) => Promise<T & Document>;

type CreateOneQuery = (deps: {
  collection: string;
  validate: import("ajv").ValidateFunction;
}) => CreateOneQueryFn;

type CreateManyQueryFn = <T>(props: {
  data: T[];
}) => Promise<(Document & T)[]>;

type CreateManyQuery = (deps: {
  collection: string;
  validate: import("ajv").ValidateFunction;
}) => CreateManyQueryFn;

type FindQueryResult = import("mongodb").WithId<import("mongodb").Document>;

type FindOneQueryFn = <T>(props: {
  filter: import("mongodb").Filter<T & Document>;
}) => Promise<FindQueryResult | null>;

type FindOneQuery = (deps: {
  collection: string;
}) => FindOneQueryFn;

type FindByIdQueryFn = <T>(props: {
  _id: import("mongodb").ObjectId;
}) => Promise<FindQueryResult | null>;

type FindByIdQuery = <T>(deps: {
  collection: string;
}) => FindByIdQueryFn;

type FindManyQueryFn = <T>(props: {
  filter: import("mongodb").Filter<T & Document>;
}) => Promise<import("mongodb").FindCursor<FindQueryResult>>;

type FindManyQuery = (deps: {
  collection: string;
}) => FindManyQueryFn;

type CreateModel = (
  params: { collection: string; validate: import("ajv").ValidateFunction },
) => {
  findOne: FindOneQueryFn;
  findMany: FindManyQueryFn;
  findById: FindByIdQueryFn;
  createOne: CreateOneQueryFn;
  createMany: CreateManyQueryFn;
};

interface StoreAddress {
  street: string;
  lat: number;
  lng: number;
}

interface Store {
  ownerId: string;
  name: string;
  address: StoreAddress;
  logo: string;
}

interface AuthLoginCredentials {
  email: string;
  password: string;
}

interface AuthCreatePayload extends AuthLoginCredentials {
  name: string;
  phoneNumber: string;
  verificationCode?: string;
  verified?: boolean;
}

type CreateUser = (params: {
  userPayload: AuthCreatePayload;
}) => Promise<{
  _id: ObjectId;
}>;

type SendMail = (params: {
  template: string;
  toAddress: string;
  fromAddress: string;
  subject: string;
  data: any;
}) => Promise<boolean>;

type SendEventToS3 = ({
  Body: any,
}) => Promise<boolean>;

type EmailIntegration = (EmailConfiguration: {
  toAddresses: string[];
  subject: string;
  template: string;
  fromAddress: string;
  data: any;
}) => Promise<void>;

type IntegrationsMap = { [type: string]: (params?: any) => void };

type VerifyUser = (userVerificationConfig: {
  verificationCode: string;
  _id: string;
  ip: string;
}) => Promise<UserLoginResult>;

type AuthMetaData = Omit<
  AuthCreatePayload,
  "password" | "verificationCode" | "verified"
>;

type UserLoginResult = {
  token: string;
  meta: AuthMetaData;
};
