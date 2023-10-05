// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type ContainerHttpOption =
  | 'unknown_http_option'
  | 'enabled'
  | 'redirected'

export type ContainerPrivacy = 'unknown_privacy' | 'public' | 'private'

export type ContainerProtocol = 'unknown_protocol' | 'http1' | 'h2c'

export type ContainerStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'
  | 'created'

export type CronStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

export type DomainStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

export type ListContainersRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListCronsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListDomainsRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'hostname_asc'
  | 'hostname_desc'

export type ListLogsRequestOrderBy = 'timestamp_desc' | 'timestamp_asc'

export type ListNamespacesRequestOrderBy =
  | 'created_at_asc'
  | 'created_at_desc'
  | 'name_asc'
  | 'name_desc'

export type ListTokensRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListTriggersRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type LogStream = 'unknown' | 'stdout' | 'stderr'

export type NamespaceStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'creating'
  | 'pending'

export type NullValue = 'NULL_VALUE'

export type TokenStatus =
  | 'unknown'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'

export type TriggerInputType =
  | 'unknown_input_type'
  | 'sqs'
  | 'scw_sqs'
  | 'nats'
  | 'scw_nats'

export type TriggerStatus =
  | 'unknown_status'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'creating'
  | 'pending'

/** Container. */
export interface Container {
  /** UUID of the container. */
  id: string
  /** Name of the container. */
  name: string
  /** UUID of the namespace the container belongs to. */
  namespaceId: string
  /** Status of the container. */
  status: ContainerStatus
  /** Environment variables of the container. */
  environmentVariables: Record<string, string>
  /** Minimum number of instances to scale the container to. */
  minScale: number
  /** Maximum number of instances to scale the container to. */
  maxScale: number
  /** Memory limit of the container in MB. */
  memoryLimit: number
  /** CPU limit of the container in mvCPU. */
  cpuLimit: number
  /** Processing time limit for the container. */
  timeout?: string
  /** Last error message of the container. */
  errorMessage?: string
  /** Privacy setting of the container. */
  privacy: ContainerPrivacy
  /** Description of the container. */
  description?: string
  /**
   * Name of the registry image (e.g.
   * "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage: string
  /** Number of maximum concurrent executions of the container. */
  maxConcurrency: number
  /** Domain name attributed to the contaioner. */
  domainName: string
  /** Protocol the container uses. */
  protocol: ContainerProtocol
  /** Port the container listens on. */
  port: number
  /** Secret environment variables of the container. */
  secretEnvironmentVariables: SecretHashedValue[]
  /**
   * Configuration for the handling of HTTP and HTTPS requests. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption: ContainerHttpOption
  /** Region in which the container will be deployed. */
  region: Region
}

export interface CreateTriggerRequestMnqNatsClientConfig {
  mnqNamespaceId: string
  subject: string
  mnqProjectId: string
  mnqRegion: string
  mnqNatsAccountId: string
}

export interface CreateTriggerRequestMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
}

export interface CreateTriggerRequestSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

/** Cron. */
export interface Cron {
  /** UUID of the cron. */
  id: string
  /** UUID of the container invoked by this cron. */
  containerId: string
  /** UNIX cron shedule. */
  schedule: string
  /** Arguments to pass with the cron. */
  args?: Record<string, unknown>
  /** Status of the cron. */
  status: CronStatus
  /** Name of the cron. */
  name: string
}

/** Domain. */
export interface Domain {
  /** UUID of the domain. */
  id: string
  /** Domain assigned to the container. */
  hostname: string
  /** UUID of the container. */
  containerId: string
  /** URL (TBD). */
  url: string
  /** Status of the domain. */
  status: DomainStatus
  /** Last error message of the domain. */
  errorMessage?: string
}

/** List containers response. */
export interface ListContainersResponse {
  /** Array of containers. */
  containers: Container[]
  /** Total number of containers. */
  totalCount: number
}

/** List crons response. */
export interface ListCronsResponse {
  /** Array of crons. */
  crons: Cron[]
  /** Total number of crons. */
  totalCount: number
}

/** List domains response. */
export interface ListDomainsResponse {
  /** Array of domains. */
  domains: Domain[]
  /** Total number of domains. */
  totalCount: number
}

/** List logs response. */
export interface ListLogsResponse {
  logs: Log[]
  totalCount: number
}

/** List namespaces response. */
export interface ListNamespacesResponse {
  /** Array of the namespaces. */
  namespaces: Namespace[]
  /** Total number of namespaces. */
  totalCount: number
}

export interface ListTokensResponse {
  tokens: Token[]
  totalCount: number
}

export interface ListTriggersResponse {
  triggers: Trigger[]
  totalCount: number
}

/** Log. */
export interface Log {
  message: string
  timestamp?: Date
  id: string
  /** Contains the severity of the log (info, debug, error, ...). */
  level: string
  /** Source of the log (core runtime or user code). */
  source: string
  /** Can be stdout or stderr. */
  stream: LogStream
}

/** Namespace. */
export interface Namespace {
  /** UUID of the namespace. */
  id: string
  /** Name of the namespace. */
  name: string
  /** Environment variables of the namespace. */
  environmentVariables: Record<string, string>
  /** UUID of the Organization the namespace belongs to. */
  organizationId: string
  /** UUID of the Project the namespace belongs to. */
  projectId: string
  /** Status of the namespace. */
  status: NamespaceStatus
  /** UUID of the registry namespace. */
  registryNamespaceId: string
  /** Last error message of the namesace. */
  errorMessage?: string
  /** Registry endpoint of the namespace. */
  registryEndpoint: string
  /** Description of the endpoint. */
  description?: string
  /** Secret environment variables of the namespace. */
  secretEnvironmentVariables: SecretHashedValue[]
  /** Region in which the namespace will be created. */
  region: Region
}

export interface Secret {
  key: string
  value?: string
}

export interface SecretHashedValue {
  key: string
  hashedValue: string
}

/** Token. */
export interface Token {
  /** UUID of the token. */
  id: string
  /** Identifier of the token. */
  token: string
  /**
   * UUID of the container the token belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  containerId?: string
  /**
   * UUID of the namespace the token belongs to.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /** @deprecated Public key of the token. */
  publicKey?: string
  /** Status of the token. */
  status: TokenStatus
  /** Description of the token. */
  description?: string
  /** Expiry date of the token. */
  expiresAt?: Date
}

export interface Trigger {
  id: string
  name: string
  description: string
  inputType: TriggerInputType
  status: TriggerStatus
  errorMessage?: string
  containerId: string
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwSqsConfig?: TriggerMnqSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  sqsConfig?: TriggerSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwNatsConfig?: TriggerMnqNatsClientConfig
}

export interface TriggerMnqNatsClientConfig {
  mnqNamespaceId: string
  subject: string
  mnqProjectId: string
  mnqRegion: string
  mnqCredentialId?: string
}

export interface TriggerMnqSqsClientConfig {
  mnqNamespaceId: string
  queue: string
  mnqProjectId: string
  mnqRegion: string
  mnqCredentialId?: string
}

export interface TriggerSqsClientConfig {
  endpoint: string
  queueUrl: string
  accessKey: string
  secretKey: string
}

export interface UpdateTriggerRequestSqsClientConfig {
  accessKey?: string
  secretKey?: string
}

export type ListNamespacesRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of namespaces per page. */
  pageSize?: number
  /** Order of the namespaces. */
  orderBy?: ListNamespacesRequestOrderBy
  /** Name of the namespaces. */
  name?: string
  /** UUID of the Organization the namespace belongs to. */
  organizationId?: string
  /** UUID of the Project the namespace belongs to. */
  projectId?: string
}

export type GetNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace to get. */
  namespaceId: string
}

export type CreateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Name of the namespace to create. */
  name?: string
  /** Environment variables of the namespace to create. */
  environmentVariables?: Record<string, string>
  /** UUID of the Project in which the namespace will be created. */
  projectId?: string
  /** Description of the namespace to create. */
  description?: string
  /** Secret environment variables of the namespace to create. */
  secretEnvironmentVariables?: Secret[]
}

export type UpdateNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace to update. */
  namespaceId: string
  /** Environment variables of the namespace to update. */
  environmentVariables?: Record<string, string>
  /** Description of the namespace to update. */
  description?: string
  /** Secret environment variables of the namespace to update. */
  secretEnvironmentVariables?: Secret[]
}

export type DeleteNamespaceRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace to delete. */
  namespaceId: string
}

export type ListContainersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of containers per page. */
  pageSize?: number
  /** Order of the containers. */
  orderBy?: ListContainersRequestOrderBy
  /** UUID of the namespace the container belongs to. */
  namespaceId: string
  /** Name of the container. */
  name?: string
  /** UUID of the Organization the container belongs to. */
  organizationId?: string
  /** UUID of the Project the container belongs to. */
  projectId?: string
}

export type GetContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container to get. */
  containerId: string
}

export type CreateContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the namespace the container belongs to. */
  namespaceId: string
  /** Name of the container. */
  name: string
  /** Environment variables of the container. */
  environmentVariables?: Record<string, string>
  /** Minimum number of instances to scale the container to. */
  minScale?: number
  /** Maximum number of instances to scale the container to. */
  maxScale?: number
  /** Memory limit of the container in MB. */
  memoryLimit?: number
  /** CPU limit of the container in mvCPU. */
  cpuLimit?: number
  /** Processing time limit for the container. */
  timeout?: string
  /** Privacy setting of the container. */
  privacy?: ContainerPrivacy
  /** Description of the container. */
  description?: string
  /**
   * Name of the registry image (e.g.
   * "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage?: string
  /** Number of maximum concurrent executions of the container. */
  maxConcurrency?: number
  /** Protocol the container uses. */
  protocol?: ContainerProtocol
  /** Port the container listens on. */
  port?: number
  /** Secret environment variables of the container. */
  secretEnvironmentVariables?: Secret[]
  /**
   * Configure how HTTP and HTTPS requests are handled. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: ContainerHttpOption
}

export type UpdateContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container to update. */
  containerId: string
  /** Environment variables of the container. */
  environmentVariables?: Record<string, string>
  /** Minimum number of instances to scale the container to. */
  minScale?: number
  /** Maximum number of instances to scale the container to. */
  maxScale?: number
  /** Memory limit of the container in MB. */
  memoryLimit?: number
  /** CPU limit of the container in mvCPU. */
  cpuLimit?: number
  /** Processing time limit for the container. */
  timeout?: string
  /** Defines whether to redeploy failed containers. */
  redeploy?: boolean
  /** Privacy settings of the container. */
  privacy?: ContainerPrivacy
  /** Description of the container. */
  description?: string
  /**
   * Name of the registry image (e.g.
   * "rg.fr-par.scw.cloud/something/image:tag").
   */
  registryImage?: string
  /** Number of maximum concurrent executions of the container. */
  maxConcurrency?: number
  protocol?: ContainerProtocol
  port?: number
  secretEnvironmentVariables?: Secret[]
  /**
   * Configure how HTTP and HTTPS requests are handled. Possible values:
   *
   * - Redirected: Responds to HTTP request with a 301 redirect to ask the clients
   *   to use HTTPS.
   * - Enabled: Serve both HTTP and HTTPS traffic.
   */
  httpOption?: ContainerHttpOption
}

export type DeleteContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container to delete. */
  containerId: string
}

export type DeployContainerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container to deploy. */
  containerId: string
}

export type ListCronsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of crons per page. */
  pageSize?: number
  /** Order of the crons. */
  orderBy?: ListCronsRequestOrderBy
  /** UUID of the container invoked by the cron. */
  containerId: string
}

export type GetCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to get. */
  cronId: string
}

export type CreateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container to invoke by the cron. */
  containerId: string
  /** UNIX cron shedule. */
  schedule: string
  /** Arguments to pass with the cron. */
  args?: Record<string, unknown>
  /** Name of the cron to create. */
  name?: string
}

export type UpdateCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to update. */
  cronId: string
  /** UUID of the container invoked by the cron. */
  containerId?: string
  /** UNIX cron schedule. */
  schedule?: string
  /** Arguments to pass with the cron. */
  args?: Record<string, unknown>
  /** Name of the cron. */
  name?: string
}

export type DeleteCronRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the cron to delete. */
  cronId: string
}

export type ListLogsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the container. */
  containerId: string
  /** Page number. */
  page?: number
  /** Number of logs per page. */
  pageSize?: number
  /** Order of the logs. */
  orderBy?: ListLogsRequestOrderBy
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of domains per page. */
  pageSize?: number
  /** Order of the domains. */
  orderBy?: ListDomainsRequestOrderBy
  /** UUID of the container the domain belongs to. */
  containerId: string
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the domain to get. */
  domainId: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Domain to assign. */
  hostname: string
  /** UUID of the container to assign the domain to. */
  containerId: string
}

export type DeleteDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the domain to delete. */
  domainId: string
}

export type IssueJWTRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  containerId?: string
  /** One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set. */
  namespaceId?: string
  expiresAt?: Date
}

export type CreateTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /**
   * UUID of the container to create the token for.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  containerId?: string
  /**
   * UUID of the namespace to create the token for.
   *
   * One-of ('scope'): at most one of 'containerId', 'namespaceId' could be set.
   */
  namespaceId?: string
  /** Description of the token. */
  description?: string
  /** Expiry date of the token. */
  expiresAt?: Date
}

export type GetTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the token to get. */
  tokenId: string
}

export type ListTokensRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Page number. */
  page?: number
  /** Number of tokens per page. */
  pageSize?: number
  /** Order of the tokens. */
  orderBy?: ListTokensRequestOrderBy
  /** UUID of the container the token belongs to. */
  containerId?: string
  /** UUID of the namespace the token belongs to. */
  namespaceId?: string
}

export type DeleteTokenRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** UUID of the token to delete. */
  tokenId: string
}

export type CreateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  name: string
  description?: string
  containerId: string
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwSqsConfig?: CreateTriggerRequestMnqSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  sqsConfig?: CreateTriggerRequestSqsClientConfig
  /**
   * One-of ('config'): at most one of 'scwSqsConfig', 'sqsConfig',
   * 'scwNatsConfig' could be set.
   */
  scwNatsConfig?: CreateTriggerRequestMnqNatsClientConfig
}

export type GetTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
}

export type ListTriggersRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  orderBy?: ListTriggersRequestOrderBy
  /**
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId'
   * could be set.
   */
  containerId?: string
  /**
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId'
   * could be set.
   */
  namespaceId?: string
  /**
   * One-of ('scope'): at most one of 'containerId', 'namespaceId', 'projectId'
   * could be set.
   */
  projectId?: string
}

export type UpdateTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
  name?: string
  description?: string
  /** One-of ('config'): at most one of 'sqsConfig' could be set. */
  sqsConfig?: UpdateTriggerRequestSqsClientConfig
}

export type DeleteTriggerRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  triggerId: string
}
