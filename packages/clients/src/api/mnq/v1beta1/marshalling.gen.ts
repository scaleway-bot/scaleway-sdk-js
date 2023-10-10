// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  File,
  ListNatsAccountsResponse,
  ListNatsCredentialsResponse,
  ListSnsCredentialsResponse,
  ListSqsCredentialsResponse,
  NatsAccount,
  NatsApiCreateNatsAccountRequest,
  NatsApiCreateNatsCredentialsRequest,
  NatsApiUpdateNatsAccountRequest,
  NatsCredentials,
  SnsApiActivateSnsRequest,
  SnsApiCreateSnsCredentialsRequest,
  SnsApiDeactivateSnsRequest,
  SnsApiUpdateSnsCredentialsRequest,
  SnsCredentials,
  SnsInfo,
  SnsPermissions,
  SqsApiActivateSqsRequest,
  SqsApiCreateSqsCredentialsRequest,
  SqsApiDeactivateSqsRequest,
  SqsApiUpdateSqsCredentialsRequest,
  SqsCredentials,
  SqsInfo,
  SqsPermissions,
} from './types.gen'

const unmarshalFile = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'File' failed as data isn't a dictionary.`,
    )
  }

  return { content: data.content, name: data.name } as File
}

const unmarshalSnsPermissions = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnsPermissions' failed as data isn't a dictionary.`,
    )
  }

  return {
    canManage: data.can_manage,
    canPublish: data.can_publish,
    canReceive: data.can_receive,
  } as SnsPermissions
}

const unmarshalSqsPermissions = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SqsPermissions' failed as data isn't a dictionary.`,
    )
  }

  return {
    canManage: data.can_manage,
    canPublish: data.can_publish,
    canReceive: data.can_receive,
  } as SqsPermissions
}

export const unmarshalNatsAccount = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NatsAccount' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    endpoint: data.endpoint,
    id: data.id,
    name: data.name,
    projectId: data.project_id,
    region: data.region,
    updatedAt: unmarshalDate(data.updated_at),
  } as NatsAccount
}

export const unmarshalNatsCredentials = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'NatsCredentials' failed as data isn't a dictionary.`,
    )
  }

  return {
    checksum: data.checksum,
    createdAt: unmarshalDate(data.created_at),
    credentials: data.credentials ? unmarshalFile(data.credentials) : undefined,
    id: data.id,
    name: data.name,
    natsAccountId: data.nats_account_id,
    updatedAt: unmarshalDate(data.updated_at),
  } as NatsCredentials
}

export const unmarshalSnsCredentials = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnsCredentials' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    permissions: data.permissions
      ? unmarshalSnsPermissions(data.permissions)
      : undefined,
    projectId: data.project_id,
    region: data.region,
    secretChecksum: data.secret_checksum,
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as SnsCredentials
}

export const unmarshalSqsCredentials = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SqsCredentials' failed as data isn't a dictionary.`,
    )
  }

  return {
    accessKey: data.access_key,
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    permissions: data.permissions
      ? unmarshalSqsPermissions(data.permissions)
      : undefined,
    projectId: data.project_id,
    region: data.region,
    secretChecksum: data.secret_checksum,
    secretKey: data.secret_key,
    updatedAt: unmarshalDate(data.updated_at),
  } as SqsCredentials
}

export const unmarshalListNatsAccountsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNatsAccountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    natsAccounts: unmarshalArrayOfObject(
      data.nats_accounts,
      unmarshalNatsAccount,
    ),
    totalCount: data.total_count,
  } as ListNatsAccountsResponse
}

export const unmarshalListNatsCredentialsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListNatsCredentialsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    natsCredentials: unmarshalArrayOfObject(
      data.nats_credentials,
      unmarshalNatsCredentials,
    ),
    totalCount: data.total_count,
  } as ListNatsCredentialsResponse
}

export const unmarshalListSnsCredentialsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSnsCredentialsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    snsCredentials: unmarshalArrayOfObject(
      data.sns_credentials,
      unmarshalSnsCredentials,
    ),
    totalCount: data.total_count,
  } as ListSnsCredentialsResponse
}

export const unmarshalListSqsCredentialsResponse = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListSqsCredentialsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    sqsCredentials: unmarshalArrayOfObject(
      data.sqs_credentials,
      unmarshalSqsCredentials,
    ),
    totalCount: data.total_count,
  } as ListSqsCredentialsResponse
}

export const unmarshalSnsInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SnsInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    projectId: data.project_id,
    region: data.region,
    snsEndpointUrl: data.sns_endpoint_url,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SnsInfo
}

export const unmarshalSqsInfo = (data: unknown) => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SqsInfo' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    projectId: data.project_id,
    region: data.region,
    sqsEndpointUrl: data.sqs_endpoint_url,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as SqsInfo
}

const marshalSnsPermissions = (
  request: SnsPermissions,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  can_manage: request.canManage,
  can_publish: request.canPublish,
  can_receive: request.canReceive,
})

const marshalSqsPermissions = (
  request: SqsPermissions,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  can_manage: request.canManage,
  can_publish: request.canPublish,
  can_receive: request.canReceive,
})

export const marshalNatsApiCreateNatsAccountRequest = (
  request: NatsApiCreateNatsAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq'),
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalNatsApiCreateNatsCredentialsRequest = (
  request: NatsApiCreateNatsCredentialsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq'),
  nats_account_id: request.natsAccountId,
})

export const marshalNatsApiUpdateNatsAccountRequest = (
  request: NatsApiUpdateNatsAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
})

export const marshalSnsApiActivateSnsRequest = (
  request: SnsApiActivateSnsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSnsApiCreateSnsCredentialsRequest = (
  request: SnsApiCreateSnsCredentialsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq_sns'),
  permissions: request.permissions
    ? marshalSnsPermissions(request.permissions, defaults)
    : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSnsApiDeactivateSnsRequest = (
  request: SnsApiDeactivateSnsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSnsApiUpdateSnsCredentialsRequest = (
  request: SnsApiUpdateSnsCredentialsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  permissions: request.permissions
    ? marshalSnsPermissions(request.permissions, defaults)
    : undefined,
})

export const marshalSqsApiActivateSqsRequest = (
  request: SqsApiActivateSqsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSqsApiCreateSqsCredentialsRequest = (
  request: SqsApiCreateSqsCredentialsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name || randomName('mnq_sqs'),
  permissions: request.permissions
    ? marshalSqsPermissions(request.permissions, defaults)
    : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSqsApiDeactivateSqsRequest = (
  request: SqsApiDeactivateSqsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  project_id: request.projectId ?? defaults.defaultProjectId,
})

export const marshalSqsApiUpdateSqsCredentialsRequest = (
  request: SqsApiUpdateSqsCredentialsRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  permissions: request.permissions
    ? marshalSqsPermissions(request.permissions, defaults)
    : undefined,
})
