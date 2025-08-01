// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money, Region as ScwRegion } from '@scaleway/sdk-client'
import type { LanguageCode as StdLanguageCode } from '@scaleway/sdk-std'

export type DnsRecordStatus = 'unknown_status' | 'valid' | 'invalid'

export type DnsRecordType =
  | 'unknown_type'
  | 'a'
  | 'cname'
  | 'mx'
  | 'txt'
  | 'ns'
  | 'aaaa'

export type DnsRecordsStatus = 'unknown_status' | 'valid' | 'invalid'

export type DomainAction =
  | 'unknown_action'
  | 'transfer'
  | 'manage_external'
  | 'renew'

export type DomainAvailabilityAction =
  | 'unknown_action'
  | 'register'
  | 'transfer'
  | 'manage_external'

export type DomainAvailabilityStatus =
  | 'unknown_status'
  | 'available'
  | 'not_available'
  | 'owned'
  | 'validating'
  | 'error'

export type DomainDnsAction =
  | 'unknown_dns_action'
  | 'auto_config_all_records'
  | 'auto_config_web_records'
  | 'auto_config_mail_records'
  | 'auto_config_nameservers'
  | 'auto_config_none'

export type DomainStatus =
  | 'unknown_status'
  | 'valid'
  | 'invalid'
  | 'validating'
  | 'error'

export type DomainZoneOwner =
  | 'unknown_zone_owner'
  | 'external'
  | 'scaleway'
  | 'online'
  | 'webhosting'

export type HostingStatus =
  | 'unknown_status'
  | 'delivering'
  | 'ready'
  | 'deleting'
  | 'error'
  | 'locked'
  | 'migrating'
  | 'updating'

export type ListDatabaseUsersRequestOrderBy = 'username_asc' | 'username_desc'

export type ListDatabasesRequestOrderBy =
  | 'database_name_asc'
  | 'database_name_desc'

export type ListFtpAccountsRequestOrderBy = 'username_asc' | 'username_desc'

export type ListHostingsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type ListMailAccountsRequestOrderBy =
  | 'username_asc'
  | 'username_desc'
  | 'domain_asc'
  | 'domain_desc'

export type ListOffersRequestOrderBy = 'price_asc'

export type ListWebsitesRequestOrderBy = 'domain_asc' | 'domain_desc'

export type NameserverStatus = 'unknown_status' | 'valid' | 'invalid'

export type OfferOptionName =
  | 'unknown_name'
  | 'domain_count'
  | 'email_count'
  | 'storage_gb'
  | 'vcpu_count'
  | 'ram_gb'
  | 'backup'
  | 'dedicated_ip'
  | 'email_storage_gb'
  | 'database_count'
  | 'support'

export type OfferOptionWarning =
  | 'unknown_warning'
  | 'quota_exceeded_warning'
  | 'usage_low_warning'

export type PlatformPlatformGroup = 'unknown_group' | 'default' | 'premium'

export interface PlatformControlPanelUrls {
  /**
   * URL to connect to the hosting control panel dashboard.
   */
  dashboard: string
  /**
   * URL to connect to the hosting Webmail interface.
   */
  webmail: string
}

export interface OfferOption {
  /**
   * Option ID.
   */
  id: string
  /**
   * Name of the option.
   */
  name: OfferOptionName
  /**
   * Unique identifier used for billing.
   */
  billingOperationPath: string
  /**
   * Minimum value for the option in the offer.
   */
  minValue: number
  /**
   * If a hosting_id was specified in the call, defines the current value of the option in the hosting.
   */
  currentValue: number
  /**
   * Maximum value for the option in the offer.
   */
  maxValue: number
  /**
   * Defines a warning if the maximum value for the option has been reached.
   */
  quotaWarning: OfferOptionWarning
  /**
   * Price of the option for 1 value.
   */
  price?: Money
}

export interface PlatformControlPanel {
  /**
   * Name of the control panel.
   */
  name: string
  /**
   * URL to connect to control panel dashboard and to Webmail interface.
   */
  urls?: PlatformControlPanelUrls
}

export interface CreateDatabaseRequestUser {
  username: string
  password: string
}

export interface AutoConfigDomainDns {
  /**
   * Whether or not to synchronize domain nameservers.
   */
  nameservers: boolean
  /**
   * Whether or not to synchronize web records.
   */
  webRecords: boolean
  /**
   * Whether or not to synchronize mail records.
   */
  mailRecords: boolean
  /**
   * Whether or not to synchronize all types of records. Takes priority over the other fields.
   */
  allRecords: boolean
  /**
   * No automatic domain configuration. Users must configure their domain for the Web Hosting to work.
   */
  none: boolean
}

export interface CreateHostingRequestDomainConfiguration {
  updateNameservers: boolean
  updateWebRecord: boolean
  updateMailRecord: boolean
  updateAllRecords: boolean
}

export interface OfferOptionRequest {
  /**
   * Offer option ID.
   */
  id: string
  /**
   * The option requested quantity to set for the Web Hosting plan.
   */
  quantity: number
}

export interface SyncDomainDnsRecordsRequestRecord {
  name: string
  type: DnsRecordType
}

export interface DnsRecord {
  /**
   * Record name.
   */
  name: string
  /**
   * Record type.
   */
  type: DnsRecordType
  /**
   * Record time-to-live.
   */
  ttl: number
  /**
   * Record value.
   */
  value: string
  /**
   * Record priority level.
   */
  priority?: number
  /**
   * Record status.
   */
  status: DnsRecordStatus
  /**
   * Record representation as it appears in the zone file or DNS management system.
   */
  rawData: string
}

export interface Nameserver {
  /**
   * Hostname of the nameserver.
   */
  hostname: string
  /**
   * Status of the nameserver.
   */
  status: NameserverStatus
  /**
   * Defines whether the nameserver is the default one.
   */
  isDefault: boolean
}

export interface HostingUser {
  /**
   * Main Web Hosting control panel username.
   */
  username: string
  /**
   * @deprecated One-time-password used for the first login to the control panel, cleared after first use (deprecated, use password_b64 instead).
   */
  oneTimePassword?: string
  /**
   * Contact email used for the hosting.
   */
  contactEmail: string
  /**
   * One-time-password used for the first login to the control panel, cleared after first use, encoded in base64.
   */
  oneTimePasswordB64?: string
}

export interface Offer {
  /**
   * Offer ID.
   */
  id: string
  /**
   * Offer name.
   */
  name: string
  /**
   * Unique identifier used for billing.
   */
  billingOperationPath: string
  /**
   * Options available for the offer.
   */
  options: OfferOption[]
  /**
   * Price of the offer.
   */
  price?: Money
  /**
   * If a hosting_id was specified in the call, defines whether the offer is available for a specified hosting plan to migrate (update) to.
   */
  available: boolean
  /**
   * Name of the control panel.
   */
  controlPanelName: string
  /**
   * Indicates if the offer has reached its end of life.
   */
  endOfLife: boolean
  /**
   * Defines a warning if the maximum value for an option in the offer is exceeded.
   */
  quotaWarning: OfferOptionWarning
}

export interface Platform {
  /**
   * Hostname of the host platform.
   */
  hostname: string
  /**
   * Number of the host platform.
   */
  number: number
  /**
   * Group name of the hosting's host platform.
   */
  groupName: PlatformPlatformGroup
  /**
   * IPv4 address of the hosting's host platform.
   */
  ipv4: string
  /**
   * IPv6 address of the hosting's host platform.
   */
  ipv6: string
  /**
   * Details of the platform control panel.
   */
  controlPanel?: PlatformControlPanel
}

export interface ControlPanel {
  /**
   * Control panel name.
   */
  name: string
  /**
   * Define if the control panel type is available to order.
   */
  available: boolean
  /**
   * URL of the control panel's logo.
   */
  logoUrl: string
  /**
   * List of available languages for the control panel.
   */
  availableLanguages: StdLanguageCode[]
}

export interface DatabaseUser {
  /**
   * Name of the database user.
   */
  username: string
  /**
   * List of databases accessible by the user.
   */
  databases: string[]
}

export interface Database {
  /**
   * Name of the database.
   */
  databaseName: string
  /**
   * List of users who have access to the database.
   */
  users: string[]
}

export interface FtpAccount {
  /**
   * The username of the FTP account.
   */
  username: string
  /**
   * The path associated with the FTP account.
   */
  path: string
}

export interface HostingSummary {
  /**
   * ID of the Web Hosting plan.
   */
  id: string
  /**
   * ID of the Scaleway Project the Web Hosting plan belongs to.
   */
  projectId: string
  /**
   * Date on which the Web Hosting plan was created.
   */
  createdAt?: Date
  /**
   * Date on which the Web Hosting plan was last updated.
   */
  updatedAt?: Date
  /**
   * Status of the Web Hosting plan.
   */
  status: HostingStatus
  /**
   * Main domain associated with the Web Hosting plan.
   */
  domain: string
  /**
   * Whether the hosting is protected or not.
   */
  protected: boolean
  /**
   * @deprecated DNS status of the Web Hosting plan.
   */
  dnsStatus?: DnsRecordsStatus
  /**
   * Name of the active offer for the Web Hosting plan.
   */
  offerName: string
  /**
   * Main domain status of the Web Hosting plan.
   */
  domainStatus: DomainStatus
  /**
   * Region where the Web Hosting plan is hosted.
   */
  region: ScwRegion
}

export interface MailAccount {
  /**
   * Domain part of the mail account address.
   */
  domain: string
  /**
   * Username part address of the mail account address.
   */
  username: string
}

export interface Website {
  /**
   * The domain of the website.
   */
  domain: string
  /**
   * The directory path of the website.
   */
  path: string
  /**
   * The SSL status of the website.
   */
  sslStatus: boolean
}

export interface DomainAvailability {
  /**
   * Fully qualified domain name (FQDN).
   */
  name: string
  /**
   * DNS zone associated with the domain.
   */
  zoneName: string
  /**
   * Availability status of the domain.
   */
  status: DomainAvailabilityStatus
  /**
   * A list of actions that can be performed on the domain.
   */
  availableActions: DomainAvailabilityAction[]
  /**
   * Whether a hosting can be created for this domain.
   */
  canCreateHosting: boolean
  /**
   * Price for registering the domain.
   */
  price?: Money
}

export interface CheckUserOwnsDomainResponse {
  /**
   * Indicates whether the specified project owns the domain.
   */
  ownsDomain: boolean
}

export type ControlPanelApiListControlPanelsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of control panels to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
}

export type DatabaseApiAssignDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database to be assigned.
   */
  databaseName: string
  /**
   * Name of the user to assign.
   */
  username: string
}

export type DatabaseApiChangeDatabaseUserPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the user to update.
   */
  username: string
  /**
   * New password.
   */
  password: string
}

export type DatabaseApiCreateDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan where the database will be created.
   */
  hostingId: string
  /**
   * Name of the database to be created.
   */
  databaseName: string
  /**
   * (Optional) Username and password to create a user and link to the database.
   *
   * One-of ('user'): at most one of 'newUser', 'existingUsername' could be set.
   */
  newUser?: CreateDatabaseRequestUser
  /**
   * (Optional) Username to link an existing user to the database.
   *
   * One-of ('user'): at most one of 'newUser', 'existingUsername' could be set.
   */
  existingUsername?: string
}

export type DatabaseApiCreateDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the user to create.
   */
  username: string
  /**
   * Password of the user to create.
   */
  password: string
}

export type DatabaseApiDeleteDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database to delete.
   */
  databaseName: string
}

export type DatabaseApiDeleteDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database user to delete.
   */
  username: string
}

export type DatabaseApiGetDatabaseRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database.
   */
  databaseName: string
}

export type DatabaseApiGetDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database user to retrieve details.
   */
  username: string
}

export type DatabaseApiListDatabaseUsersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of database users to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order of database users in the response.
   */
  orderBy?: ListDatabaseUsersRequestOrderBy
}

export type DatabaseApiListDatabasesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of databases to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order of databases in the response.
   */
  orderBy?: ListDatabasesRequestOrderBy
}

export type DatabaseApiUnassignDatabaseUserRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Name of the database to be unassigned.
   */
  databaseName: string
  /**
   * Name of the user to unassign.
   */
  username: string
}

export type DnsApiCheckUserOwnsDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain for which ownership is to be verified.
   */
  domain: string
  /**
   * ID of the project currently in use.
   */
  projectId?: string
}

export type DnsApiGetDomainDnsRecordsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain associated with the DNS records.
   */
  domain: string
}

export type DnsApiGetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain name to get.
   */
  domainName: string
  /**
   * ID of the Scaleway Project in which to get the domain to create the Web Hosting plan.
   */
  projectId?: string
}

export type DnsApiSearchDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain name to search.
   */
  domainName: string
  /**
   * ID of the Scaleway Project in which to search the domain to create the Web Hosting plan.
   */
  projectId?: string
}

export type DnsApiSyncDomainDnsRecordsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Domain for which the DNS records will be synchronized.
   */
  domain: string
  /**
   * @deprecated Whether or not to synchronize the web records (deprecated, use auto_config_domain_dns).
   */
  updateWebRecords?: boolean
  /**
   * @deprecated Whether or not to synchronize the mail records (deprecated, use auto_config_domain_dns).
   */
  updateMailRecords?: boolean
  /**
   * @deprecated Whether or not to synchronize all types of records. This one has priority (deprecated, use auto_config_domain_dns).
   */
  updateAllRecords?: boolean
  /**
   * @deprecated Whether or not to synchronize domain nameservers (deprecated, use auto_config_domain_dns).
   */
  updateNameservers?: boolean
  /**
   * @deprecated Custom records to synchronize.
   */
  customRecords?: SyncDomainDnsRecordsRequestRecord[]
  /**
   * Whether or not to synchronize each types of records.
   */
  autoConfigDomainDns?: AutoConfigDomainDns
}

export interface DnsRecords {
  /**
   * List of DNS records.
   */
  records: DnsRecord[]
  /**
   * List of nameservers.
   */
  nameServers: Nameserver[]
  /**
   * Status of the records.
   */
  status: DnsRecordsStatus
  /**
   * @deprecated Records dns auto configuration settings (deprecated, use auto_config_domain_dns).
   */
  dnsConfig?: DomainDnsAction[]
  /**
   * Whether or not to synchronize each types of records.
   */
  autoConfigDomainDns?: AutoConfigDomainDns
}

export interface Domain {
  /**
   * Name of the domain.
   */
  name: string
  /**
   * Current status of the domain.
   */
  status: DomainStatus
  /**
   * Zone owner of the domain.
   */
  owner: DomainZoneOwner
  /**
   * Main domain for this zone.
   */
  zoneDomainName: string
  /**
   * A list of actions that can be performed on the domain.
   */
  availableActions: DomainAction[]
  /**
   * @deprecated A list of DNS-related actions that can be auto configured for the domain (deprecated, use auto_config_domain_dns instead).
   */
  availableDnsActions?: DomainDnsAction[]
  /**
   * Whether or not to synchronize each type of record.
   */
  autoConfigDomainDns?: AutoConfigDomainDns
}

export type FtpAccountApiChangeFtpAccountPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Username of the FTP account.
   */
  username: string
  /**
   * New password for the FTP account.
   */
  password: string
}

export type FtpAccountApiCreateFtpAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Username for the new FTP account.
   */
  username: string
  /**
   * Path for the new FTP account.
   */
  path: string
  /**
   * Password for the new FTP account.
   */
  password: string
}

export type FtpAccountApiListFtpAccountsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of FTP accounts to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order of FTP accounts in the response.
   */
  orderBy?: ListFtpAccountsRequestOrderBy
  /**
   * Domain to filter the FTP accounts.
   */
  domain?: string
}

export type FtpAccountApiRemoveFtpAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Username of the FTP account to be deleted.
   */
  username: string
}

export interface Hosting {
  /**
   * ID of the Web Hosting plan.
   */
  id: string
  /**
   * ID of the Scaleway Project the Web Hosting plan belongs to.
   */
  projectId: string
  /**
   * Date on which the Web Hosting plan was last updated.
   */
  updatedAt?: Date
  /**
   * Date on which the Web Hosting plan was created.
   */
  createdAt?: Date
  /**
   * Status of the Web Hosting plan.
   */
  status: HostingStatus
  /**
   * Main domain associated with the Web Hosting plan.
   */
  domain: string
  /**
   * Details of the Web Hosting plan offer and options.
   */
  offer?: Offer
  /**
   * Details of the hosting platform.
   */
  platform?: Platform
  /**
   * List of tags associated with the Web Hosting plan.
   */
  tags: string[]
  /**
   * @deprecated DNS status of the Web Hosting plan.
   */
  dnsStatus?: DnsRecordsStatus
  /**
   * Current IPv4 address of the hosting.
   */
  ipv4: string
  /**
   * Whether the hosting is protected or not.
   */
  protected: boolean
  /**
   * Details of the hosting user.
   */
  user?: HostingUser
  /**
   * Main domain status of the Web Hosting plan.
   */
  domainStatus: DomainStatus
  /**
   * Region where the Web Hosting plan is hosted.
   */
  region: ScwRegion
}

export type HostingApiCreateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * ID of the selected offer for the Web Hosting plan.
   */
  offerId: string
  /**
   * ID of the Scaleway Project in which to create the Web Hosting plan.
   */
  projectId?: string
  /**
   * Contact email for the Web Hosting client.
   */
  email: string
  /**
   * List of tags for the Web Hosting plan.
   */
  tags?: string[]
  /**
   * Domain name to link to the Web Hosting plan. You must already own this domain name, and have completed the DNS validation process beforehand.
   */
  domain: string
  /**
   * List of the Web Hosting plan options IDs with their quantities.
   */
  offerOptions?: OfferOptionRequest[]
  /**
   * Default language for the control panel interface.
   */
  language?: StdLanguageCode
  /**
   * @deprecated Indicates whether to update hosting domain name servers and DNS records for domains managed by Scaleway Elements (deprecated, use auto_config_domain_dns instead).
   */
  domainConfiguration?: CreateHostingRequestDomainConfiguration
  /**
   * Indicates whether to skip a welcome email to the contact email containing hosting info.
   */
  skipWelcomeEmail?: boolean
  /**
   * Indicates whether to update hosting domain name servers and DNS records for domains managed by Scaleway Elements (deprecated, use auto_update_* fields instead).
   */
  autoConfigDomainDns?: AutoConfigDomainDns
}

export type HostingApiCreateSessionRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hosting ID.
   */
  hostingId: string
}

export type HostingApiDeleteHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hosting ID.
   */
  hostingId: string
}

export type HostingApiGetHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hosting ID.
   */
  hostingId: string
}

export type HostingApiGetResourceSummaryRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hosting ID.
   */
  hostingId: string
}

export type HostingApiListHostingsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number to return, from the paginated results (must be a positive integer).
   */
  page?: number
  /**
   * Number of Web Hosting plans to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order for Web Hosting plans in the response.
   */
  orderBy?: ListHostingsRequestOrderBy
  /**
   * Tags to filter for, only Web Hosting plans with matching tags will be returned.
   */
  tags?: string[]
  /**
   * Statuses to filter for, only Web Hosting plans with matching statuses will be returned.
   */
  statuses?: HostingStatus[]
  /**
   * Domain to filter for, only Web Hosting plans associated with this domain will be returned.
   */
  domain?: string
  /**
   * Project ID to filter for, only Web Hosting plans from this Project will be returned.
   */
  projectId?: string
  /**
   * Organization ID to filter for, only Web Hosting plans from this Organization will be returned.
   */
  organizationId?: string
  /**
   * Name of the control panel to filter for, only Web Hosting plans from this control panel will be returned.
   */
  controlPanels?: string[]
}

export type HostingApiResetHostingPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting.
   */
  hostingId: string
}

export type HostingApiUpdateHostingRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Hosting ID.
   */
  hostingId: string
  /**
   * New contact email for the Web Hosting plan.
   */
  email?: string
  /**
   * New tags for the Web Hosting plan.
   */
  tags?: string[]
  /**
   * List of the Web Hosting plan options IDs with their quantities.
   */
  offerOptions?: OfferOptionRequest[]
  /**
   * ID of the new offer for the Web Hosting plan.
   */
  offerId?: string
  /**
   * Whether the hosting is protected or not.
   */
  protected?: boolean
}

export interface ListControlPanelsResponse {
  /**
   * Number of control panels returned.
   */
  totalCount: number
  /**
   * List of control panels.
   */
  controlPanels: ControlPanel[]
}

export interface ListDatabaseUsersResponse {
  /**
   * Total number of database users.
   */
  totalCount: number
  /**
   * List of database users.
   */
  users: DatabaseUser[]
}

export interface ListDatabasesResponse {
  /**
   * Total number of databases.
   */
  totalCount: number
  /**
   * List of databases.
   */
  databases: Database[]
}

export interface ListFtpAccountsResponse {
  /**
   * Total number of FTP accounts.
   */
  totalCount: number
  /**
   * List of FTP accounts.
   */
  ftpAccounts: FtpAccount[]
}

export interface ListHostingsResponse {
  /**
   * Number of Web Hosting plans returned.
   */
  totalCount: number
  /**
   * List of Web Hosting plans.
   */
  hostings: HostingSummary[]
}

export interface ListMailAccountsResponse {
  /**
   * Total number of mail accounts.
   */
  totalCount: number
  /**
   * List of mail accounts.
   */
  mailAccounts: MailAccount[]
}

export interface ListOffersResponse {
  /**
   * Total number of offers.
   */
  totalCount: number
  /**
   * List of offers.
   */
  offers: Offer[]
}

export interface ListWebsitesResponse {
  /**
   * Total number of websites.
   */
  totalCount: number
  /**
   * List of websites.
   */
  websites: Website[]
}

export type MailAccountApiChangeMailAccountPasswordRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Domain part of the mail account address.
   */
  domain: string
  /**
   * Username part of the mail account address.
   */
  username: string
  /**
   * New password for the mail account.
   */
  password: string
}

export type MailAccountApiCreateMailAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Domain part of the mail account address.
   */
  domain: string
  /**
   * Username part address of the mail account address.
   */
  username: string
  /**
   * Password for the new mail account.
   */
  password: string
}

export type MailAccountApiListMailAccountsRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of mail accounts to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order of mail accounts in the response.
   */
  orderBy?: ListMailAccountsRequestOrderBy
  /**
   * Domain to filter the mail accounts.
   */
  domain?: string
}

export type MailAccountApiRemoveMailAccountRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Domain part of the mail account address.
   */
  domain: string
  /**
   * Username part of the mail account address.
   */
  username: string
}

export type OfferApiListOffersRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of websites to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order for Web Hosting offers in the response.
   */
  orderBy?: ListOffersRequestOrderBy
  /**
   * UUID of the hosting plan.
   */
  hostingId?: string
  /**
   * Name of the control panel(s) to filter for.
   */
  controlPanels?: string[]
}

export interface ResetHostingPasswordResponse {
  /**
   * @deprecated New temporary password (deprecated, use password_b64 instead).
   */
  oneTimePassword?: string
  /**
   * New temporary password, encoded in base64.
   */
  oneTimePasswordB64: string
}

export interface ResourceSummary {
  /**
   * Total number of active databases in the Web Hosting plan.
   */
  databasesCount: number
  /**
   * Total number of active email accounts in the Web Hosting plan.
   */
  mailAccountsCount: number
  /**
   * Total number of active FTP accounts in the Web Hosting plan.
   */
  ftpAccountsCount: number
  /**
   * Total number of active domains in the Web Hosting plan.
   */
  websitesCount: number
}

export interface SearchDomainsResponse {
  /**
   * List of domains availability.
   */
  domainsAvailable: DomainAvailability[]
}

export interface Session {
  /**
   * Logged user's session URL.
   */
  url: string
}

export type WebsiteApiListWebsitesRequest = {
  /**
   * Region to target. If none is passed will use default region from the config.
   */
  region?: ScwRegion
  /**
   * UUID of the hosting plan.
   */
  hostingId: string
  /**
   * Page number (must be a positive integer).
   */
  page?: number
  /**
   * Number of websites to return (must be a positive integer lower or equal to 100).
   */
  pageSize?: number
  /**
   * Sort order for Web Hosting websites in the response.
   */
  orderBy?: ListWebsitesRequestOrderBy
}
