// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ListCredentialsRequestOrderBy =
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'
  | 'id_asc'
  | 'id_desc'
  | 'name_asc'
  | 'name_desc'
  | 'project_id_asc'
  | 'project_id_desc'

export type NamespaceProtocol = 'unknown' | 'nats' | 'sqs_sns'

/** Credential. */
export interface Credential {
  /** ID of the credentials. */
  id: string
  /** Name of the credentials. */
  name: string
  /** Namespace containing the credentials. */
  namespaceId: string
  /** Protocol associated with the credentials. */
  protocol: NamespaceProtocol
  /**
   * Object containing the credentials, if the credentials are for a NATS
   * namespace.
   *
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials' could be set.
   */
  natsCredentials?: CredentialNATSCredsFile
  /**
   * Object containing the credentials and their metadata, if the credentials
   * are for an SQS/SNS namespace.
   *
   * One-of ('credentialType'): at most one of 'natsCredentials',
   * 'sqsSnsCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSQSSNSCreds
}

/** Credential.nats creds file. */
export interface CredentialNATSCredsFile {
  /** Raw content of the NATS credentials file. */
  content: string
}

/** Credential.sqssns creds. */
export interface CredentialSQSSNSCreds {
  /** Access key ID. */
  accessKey: string
  /** Secret key ID. */
  secretKey?: string
  /** Permissions associated with these credentials. */
  permissions?: Permissions
}

/** Credential summary. */
export interface CredentialSummary {
  /** ID of the credentials. */
  id: string
  /** Name of the credentials. */
  name: string
  /** Namespace containing the credentials. */
  namespaceId: string
  /** Protocol associated with the credentials. */
  protocol: NamespaceProtocol
  /**
   * Object containing the credentials and their metadata, if the credentials
   * are for an SQS/SNS namespace.
   *
   * One-of ('credentialType'): at most one of 'sqsSnsCredentials' could be set.
   */
  sqsSnsCredentials?: CredentialSummarySQSSNSCreds
}

/** Credential summary.sqssns creds. */
export interface CredentialSummarySQSSNSCreds {
  /** Access key ID. */
  accessKey: string
  /** Permissions associated with these credentials. */
  permissions?: Permissions
}

/** List credentials response. */
export interface ListCredentialsResponse {
  /** Total count of existing credentials (matching any filters specified). */
  totalCount: number
  /** Credentials on this page. */
  credentials: CredentialSummary[]
}

/** List namespaces response. */
export interface ListNamespacesResponse {
  /** Total count of existing namespaces (matching any filters specified). */
  totalCount: number
  /** Namespaces on this page. */
  namespaces: Namespace[]
}

/** Namespace. */
export interface Namespace {
  /** Namespace ID. */
  id: string
  /** Namespace name. */
  name: string
  /** Endpoint of the service matching the namespace's protocol. */
  endpoint: string
  /** Namespace protocol. */
  protocol: NamespaceProtocol
  /** Project ID of the Project containing the namespace. */
  projectId: string
  /** Region where the namespace is deployed. */
  region: Region
  /** Namespace creation date. */
  createdAt?: Date
  /** Namespace last modification date. */
  updatedAt?: Date
}

/** Permissions. */
export interface Permissions {
  /**
   * Defines whether the credentials bearer can publish messages to the service
   * (send messages to SQS queues or publish to SNS topics).
   */
  canPublish?: boolean
  /**
   * Defines whether the credentials bearer can receive messages from the
   * service.
   */
  canReceive?: boolean
  /**
   * Defines whether the credentials bearer can manage the associated resources
   * (SQS queues or SNS topics or subscriptions).
   */
  canManage?: boolean
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Include only namespaces in this Organization. */
  organizationId?: string
  /** Include only namespaces in this Project. */
  projectId?: string
  /** Page number to return. */
  page?: number
  /** Maximum number of namespaces to return per page. */
  pageSize?: number
  /** Order in which to return results. */
  orderBy?: ListNamespacesRequestOrderBy
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Namespace name. */
  name?: string
  /**
   * Namespace protocol. You must specify a valid protocol (and not `unknown`)
   * to avoid an error.
   */
  protocol: NamespaceProtocol
  /** Project containing the Namespace. */
  projectId?: string
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Namespace to update. */
  namespaceId: string
  /** Namespace name. */
  name?: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the Namespace to get. */
  namespaceId: string
}

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the namespace to delete. */
  namespaceId: string
}

export type CreateCredentialRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Namespace containing the credentials. */
  namespaceId: string
  /** Name of the credentials. */
  name?: string
  /**
   * Permissions associated with these credentials.
   *
   * One-of ('optionalPermissions'): at most one of 'permissions' could be set.
   */
  permissions?: Permissions
}

export type DeleteCredentialRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the credentials to delete. */
  credentialId: string
}

export type ListCredentialsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Namespace containing the credentials. */
  namespaceId?: string
  /** Page number to return. */
  page?: number
  /** Maximum number of credentials to return per page. */
  pageSize?: number
  /** Order in which to return results. */
  orderBy?: ListCredentialsRequestOrderBy
}

export type UpdateCredentialRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the credentials to update. */
  credentialId: string
  /** Name of the credentials. */
  name?: string
  /**
   * Permissions associated with these credentials.
   *
   * One-of ('optionalPermissions'): at most one of 'permissions' could be set.
   */
  permissions?: Permissions
}

export type GetCredentialRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the credentials to get. */
  credentialId: string
}
