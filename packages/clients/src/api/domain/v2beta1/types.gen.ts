// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Money } from '../../../bridge'

export type ContactEmailStatus =
  | 'email_status_unknown'
  | 'validated'
  | 'not_validated'
  | 'invalid_email'

export type ContactExtensionFRMode =
  | 'mode_unknown'
  | 'individual'
  | 'company_identification_code'
  | 'duns'
  | 'local'
  | 'association'
  | 'trademark'
  | 'code_auth_afnic'

export type ContactExtensionNLLegalForm =
  | 'legal_form_unknown'
  | 'other'
  | 'non_dutch_eu_company'
  | 'non_dutch_legal_form_enterprise_subsidiary'
  | 'limited_company'
  | 'limited_company_in_formation'
  | 'cooperative'
  | 'limited_partnership'
  | 'sole_company'
  | 'european_economic_interest_group'
  | 'religious_entity'
  | 'partnership'
  | 'public_company'
  | 'mutual_benefit_company'
  | 'residential'
  | 'shipping_company'
  | 'foundation'
  | 'association'
  | 'trading_partnership'
  | 'natural_person'

export type ContactLegalForm =
  | 'legal_form_unknown'
  | 'individual'
  | 'corporate'
  | 'association'
  | 'other'

export type DNSZoneStatus =
  | 'unknown'
  | 'active'
  | 'pending'
  | 'error'
  | 'locked'

export type DSRecordAlgorithm =
  | 'rsamd5'
  | 'dh'
  | 'dsa'
  | 'rsasha1'
  | 'dsa_nsec3_sha1'
  | 'rsasha1_nsec3_sha1'
  | 'rsasha256'
  | 'rsasha512'
  | 'ecc_gost'
  | 'ecdsap256sha256'
  | 'ecdsap384sha384'
  | 'ed25519'
  | 'ed448'

export type DSRecordDigestType =
  | 'sha_1'
  | 'sha_256'
  | 'gost_r_34_11_94'
  | 'sha_384'

export type DomainFeatureStatus =
  | 'feature_status_unknown'
  | 'enabling'
  | 'enabled'
  | 'disabling'
  | 'disabled'

export type DomainRecordHTTPServiceConfigStrategy = 'random' | 'hashed' | 'all'

export type DomainRecordType =
  | 'unknown'
  | 'A'
  | 'AAAA'
  | 'CNAME'
  | 'TXT'
  | 'SRV'
  | 'TLSA'
  | 'MX'
  | 'NS'
  | 'PTR'
  | 'CAA'
  | 'ALIAS'
  | 'LOC'
  | 'SSHFP'
  | 'HINFO'
  | 'RP'
  | 'URI'
  | 'DS'
  | 'NAPTR'
  | 'DNAME'

export type DomainRegistrationStatusTransferStatus =
  | 'status_unknown'
  | 'pending'
  | 'waiting_vote'
  | 'rejected'
  | 'processing'
  | 'done'

export type DomainStatus =
  | 'status_unknown'
  | 'active'
  | 'creating'
  | 'create_error'
  | 'renewing'
  | 'renew_error'
  | 'xfering'
  | 'xfer_error'
  | 'expired'
  | 'expiring'
  | 'updating'
  | 'checking'
  | 'locked'
  | 'deleting'

export type HostStatus = 'unknown_status' | 'active' | 'updating' | 'deleting'

export type LanguageCode = 'unknown_language_code' | 'en_US' | 'fr_FR' | 'de_DE'

export type ListContactsRequestRole =
  | 'unknown_role'
  | 'owner'
  | 'administrative'
  | 'technical'

export type ListDNSZoneRecordsRequestOrderBy = 'name_asc' | 'name_desc'

export type ListDNSZonesRequestOrderBy =
  | 'domain_asc'
  | 'domain_desc'
  | 'subdomain_asc'
  | 'subdomain_desc'

export type ListDomainsRequestOrderBy = 'domain_asc' | 'domain_desc'

export type ListRenewableDomainsRequestOrderBy = 'domain_asc' | 'domain_desc'

export type ListTasksRequestOrderBy =
  | 'domain_desc'
  | 'domain_asc'
  | 'type_asc'
  | 'type_desc'
  | 'status_asc'
  | 'status_desc'
  | 'updated_at_asc'
  | 'updated_at_desc'

export type RawFormat = 'unknown_raw_format' | 'bind'

export type RenewableDomainStatus =
  | 'unknown'
  | 'renewable'
  | 'late_reneweable'
  | 'not_renewable'

export type SSLCertificateStatus =
  | 'unknown'
  | 'new'
  | 'pending'
  | 'success'
  | 'error'

export type TaskStatus =
  | 'unavailable'
  | 'new'
  | 'waiting_payment'
  | 'pending'
  | 'success'
  | 'error'

export type TaskType =
  | 'unknown'
  | 'create_domain'
  | 'create_external_domain'
  | 'renew_domain'
  | 'transfer_domain'
  | 'trade_domain'
  | 'lock_domain_transfer'
  | 'unlock_domain_transfer'
  | 'enable_dnssec'
  | 'disable_dnssec'
  | 'update_domain'
  | 'update_contact'
  | 'delete_domain'
  | 'cancel_task'
  | 'generate_ssl_certificate'
  | 'renew_ssl_certificate'
  | 'send_message'
  | 'delete_domain_expired'
  | 'delete_external_domain'
  | 'create_host'
  | 'update_host'
  | 'delete_host'
  | 'move_project'

export interface AvailableDomain {
  domain: string
  available: boolean
  tld?: Tld
}

/** Check contacts compatibility response. */
export interface CheckContactsCompatibilityResponse {
  compatible: boolean
  ownerCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
  administrativeCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
  technicalCheckResult?: CheckContactsCompatibilityResponseContactCheckResult
}

export interface CheckContactsCompatibilityResponseContactCheckResult {
  compatible: boolean
  errorMessage?: string
}

/** Clear dns zone records response. */
export interface ClearDNSZoneRecordsResponse {}

/** Contact. */
export interface Contact {
  id: string
  legalForm: ContactLegalForm
  firstname: string
  lastname: string
  companyName: string
  email: string
  emailAlt: string
  phoneNumber: string
  faxNumber: string
  addressLine1: string
  addressLine2: string
  zip: string
  city: string
  country: string
  vatIdentificationCode: string
  companyIdentificationCode: string
  lang: LanguageCode
  resale: boolean
  /** @deprecated */
  questions?: ContactQuestion[]
  extensionFr?: ContactExtensionFR
  extensionEu?: ContactExtensionEU
  whoisOptIn: boolean
  emailStatus: ContactEmailStatus
  state: string
  extensionNl?: ContactExtensionNL
}

export interface ContactExtensionEU {
  europeanCitizenship: string
}

export interface ContactExtensionFR {
  mode: ContactExtensionFRMode
  /**
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo',
   * 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  individualInfo?: ContactExtensionFRIndividualInfo
  /**
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo',
   * 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  dunsInfo?: ContactExtensionFRDunsInfo
  /**
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo',
   * 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  associationInfo?: ContactExtensionFRAssociationInfo
  /**
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo',
   * 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  trademarkInfo?: ContactExtensionFRTrademarkInfo
  /**
   * One-of ('modeFields'): at most one of 'individualInfo', 'dunsInfo',
   * 'associationInfo', 'trademarkInfo', 'codeAuthAfnicInfo' could be set.
   */
  codeAuthAfnicInfo?: ContactExtensionFRCodeAuthAfnicInfo
}

export interface ContactExtensionFRAssociationInfo {
  publicationJo?: Date
  publicationJoPage: number
}

export interface ContactExtensionFRCodeAuthAfnicInfo {
  codeAuthAfnic: string
}

export interface ContactExtensionFRDunsInfo {
  dunsId: string
  localId: string
}

export interface ContactExtensionFRIndividualInfo {
  whoisOptIn: boolean
}

export interface ContactExtensionFRTrademarkInfo {
  trademarkInpi: string
}

export interface ContactExtensionNL {
  legalForm: ContactExtensionNLLegalForm
  legalFormRegistrationNumber: string
}

export interface ContactQuestion {
  question: string
  answer: string
}

export interface ContactRoles {
  contact?: Contact
  roles: Record<string, ContactRolesRoles>
}

export interface ContactRolesRoles {
  isOwner: boolean
  isAdministrative: boolean
  isTechnical: boolean
}

export interface DNSZone {
  domain: string
  subdomain: string
  ns: string[]
  nsDefault: string[]
  nsMaster: string[]
  status: DNSZoneStatus
  message?: string
  updatedAt?: Date
  projectId: string
}

export interface DNSZoneVersion {
  id: string
  createdAt?: Date
}

export interface DSRecord {
  keyId: number
  algorithm: DSRecordAlgorithm
  /** One-of ('type'): at most one of 'digest', 'publicKey' could be set. */
  digest?: DSRecordDigest
  /** One-of ('type'): at most one of 'digest', 'publicKey' could be set. */
  publicKey?: DSRecordPublicKey
}

export interface DSRecordDigest {
  type: DSRecordDigestType
  digest: string
  publicKey?: DSRecordPublicKey
}

export interface DSRecordPublicKey {
  key: string
}

/** Delete dns zone response. */
export interface DeleteDNSZoneResponse {}

/** Delete external domain response. */
export interface DeleteExternalDomainResponse {}

/** Delete ssl certificate response. */
export interface DeleteSSLCertificateResponse {}

/** Domain. */
export interface Domain {
  domain: string
  organizationId: string
  projectId: string
  autoRenewStatus: DomainFeatureStatus
  dnssec?: DomainDNSSEC
  eppCode: string[]
  expiredAt?: Date
  updatedAt?: Date
  registrar: string
  isExternal: boolean
  status: DomainStatus
  dnsZones: DNSZone[]
  ownerContact?: Contact
  technicalContact?: Contact
  administrativeContact?: Contact
  /**
   * One-of ('registrationStatus'): at most one of
   * 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be
   * set.
   */
  externalDomainRegistrationStatus?: DomainRegistrationStatusExternalDomain
  /**
   * One-of ('registrationStatus'): at most one of
   * 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be
   * set.
   */
  transferRegistrationStatus?: DomainRegistrationStatusTransfer
  tld?: Tld
}

export interface DomainDNSSEC {
  status: DomainFeatureStatus
  dsRecords: DSRecord[]
}

export interface DomainRecord {
  data: string
  name: string
  priority: number
  ttl: number
  type: DomainRecordType
  comment?: string
  /**
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig',
   * 'weightedConfig', 'viewConfig' could be set.
   */
  geoIpConfig?: DomainRecordGeoIPConfig
  /**
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig',
   * 'weightedConfig', 'viewConfig' could be set.
   */
  httpServiceConfig?: DomainRecordHTTPServiceConfig
  /**
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig',
   * 'weightedConfig', 'viewConfig' could be set.
   */
  weightedConfig?: DomainRecordWeightedConfig
  /**
   * One-of ('dynamicData'): at most one of 'geoIpConfig', 'httpServiceConfig',
   * 'weightedConfig', 'viewConfig' could be set.
   */
  viewConfig?: DomainRecordViewConfig
  id: string
}

export interface DomainRecordGeoIPConfig {
  matches: DomainRecordGeoIPConfigMatch[]
  default: string
}

export interface DomainRecordGeoIPConfigMatch {
  countries: string[]
  continents: string[]
  data: string
}

export interface DomainRecordHTTPServiceConfig {
  ips: string[]
  mustContain?: string
  url: string
  userAgent?: string
  strategy: DomainRecordHTTPServiceConfigStrategy
}

export interface DomainRecordViewConfig {
  views: DomainRecordViewConfigView[]
}

export interface DomainRecordViewConfigView {
  subnet: string
  data: string
}

export interface DomainRecordWeightedConfig {
  weightedIps: DomainRecordWeightedConfigWeightedIP[]
}

export interface DomainRecordWeightedConfigWeightedIP {
  ip: string
  weight: number
}

export interface DomainRegistrationStatusExternalDomain {
  validationToken: string
}

export interface DomainRegistrationStatusTransfer {
  status: DomainRegistrationStatusTransferStatus
  voteCurrentOwner: boolean
  voteNewOwner: boolean
}

export interface DomainSummary {
  domain: string
  projectId: string
  autoRenewStatus: DomainFeatureStatus
  dnssecStatus: DomainFeatureStatus
  eppCode: string[]
  expiredAt?: Date
  updatedAt?: Date
  registrar: string
  isExternal: boolean
  status: DomainStatus
  /**
   * One-of ('registrationStatus'): at most one of
   * 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be
   * set.
   */
  externalDomainRegistrationStatus?: DomainRegistrationStatusExternalDomain
  /**
   * One-of ('registrationStatus'): at most one of
   * 'externalDomainRegistrationStatus', 'transferRegistrationStatus' could be
   * set.
   */
  transferRegistrationStatus?: DomainRegistrationStatusTransfer
  organizationId: string
}

/** Get dns zone tsig key response. */
export interface GetDNSZoneTsigKeyResponse {
  name: string
  key: string
  algorithm: string
}

/** Get dns zone version diff response. */
export interface GetDNSZoneVersionDiffResponse {
  changes: RecordChange[]
}

/** Get domain auth code response. */
export interface GetDomainAuthCodeResponse {
  authCode: string
}

export interface Host {
  domain: string
  name: string
  ips: string[]
  status: HostStatus
}

export interface ImportProviderDNSZoneRequestOnlineV1 {
  token: string
}

/** Import provider dns zone response. */
export interface ImportProviderDNSZoneResponse {
  records: DomainRecord[]
}

export interface ImportRawDNSZoneRequestAXFRSource {
  nameServer: string
  tsigKey?: ImportRawDNSZoneRequestTsigKey
}

export interface ImportRawDNSZoneRequestBindSource {
  content: string
}

export interface ImportRawDNSZoneRequestTsigKey {
  name: string
  key: string
  algorithm: string
}

/** Import raw dns zone response. */
export interface ImportRawDNSZoneResponse {
  records: DomainRecord[]
}

/** List contacts response. */
export interface ListContactsResponse {
  totalCount: number
  contacts: ContactRoles[]
}

/** List dns zone nameservers response. */
export interface ListDNSZoneNameserversResponse {
  /** DNS zone name servers returned. */
  ns: Nameserver[]
}

/** List dns zone records response. */
export interface ListDNSZoneRecordsResponse {
  /** Total number of DNS zone records. */
  totalCount: number
  /** Paginated returned DNS zone records. */
  records: DomainRecord[]
}

/** List dns zone version records response. */
export interface ListDNSZoneVersionRecordsResponse {
  /** Total number of DNS zones versions records. */
  totalCount: number
  records: DomainRecord[]
}

/** List dns zone versions response. */
export interface ListDNSZoneVersionsResponse {
  /** Total number of DNS zones versions. */
  totalCount: number
  versions: DNSZoneVersion[]
}

/** List dns zones response. */
export interface ListDNSZonesResponse {
  /** Total number of DNS zones matching the requested criteria. */
  totalCount: number
  /** Paginated returned DNS zones. */
  dnsZones: DNSZone[]
}

/** List domain hosts response. */
export interface ListDomainHostsResponse {
  totalCount: number
  hosts: Host[]
}

/** List domains response. */
export interface ListDomainsResponse {
  totalCount: number
  domains: DomainSummary[]
}

/** List renewable domains response. */
export interface ListRenewableDomainsResponse {
  totalCount: number
  domains: RenewableDomain[]
}

/** List ssl certificates response. */
export interface ListSSLCertificatesResponse {
  totalCount: number
  certificates: SSLCertificate[]
}

/** List tasks response. */
export interface ListTasksResponse {
  totalCount: number
  tasks: Task[]
}

export interface Nameserver {
  name: string
  ip: string[]
}

export interface NewContact {
  legalForm: ContactLegalForm
  firstname: string
  lastname: string
  companyName?: string
  email: string
  emailAlt?: string
  phoneNumber: string
  faxNumber?: string
  addressLine1: string
  addressLine2?: string
  zip: string
  city: string
  country: string
  vatIdentificationCode?: string
  companyIdentificationCode?: string
  lang: LanguageCode
  resale: boolean
  /** @deprecated */
  questions?: ContactQuestion[]
  extensionFr?: ContactExtensionFR
  extensionEu?: ContactExtensionEU
  whoisOptIn: boolean
  state?: string
  extensionNl?: ContactExtensionNL
}

export interface OrderResponse {
  domains: string[]
  organizationId: string
  projectId: string
  taskId: string
  createdAt?: Date
}

export interface RecordChange {
  /**
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be
   * set.
   */
  add?: RecordChangeAdd
  /**
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be
   * set.
   */
  set?: RecordChangeSet
  /**
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be
   * set.
   */
  delete?: RecordChangeDelete
  /**
   * One-of ('change'): at most one of 'add', 'set', 'delete', 'clear' could be
   * set.
   */
  clear?: RecordChangeClear
}

export interface RecordChangeAdd {
  records: DomainRecord[]
}

export interface RecordChangeClear {}

export interface RecordChangeDelete {
  /** One-of ('identifier'): at most one of 'id', 'idFields' could be set. */
  id?: string
  /** One-of ('identifier'): at most one of 'id', 'idFields' could be set. */
  idFields?: RecordIdentifier
}

export interface RecordChangeSet {
  /** One-of ('identifier'): at most one of 'id', 'idFields' could be set. */
  id?: string
  /** One-of ('identifier'): at most one of 'id', 'idFields' could be set. */
  idFields?: RecordIdentifier
  records: DomainRecord[]
}

export interface RecordIdentifier {
  name: string
  type: DomainRecordType
  data?: string
  ttl?: number
}

/** Refresh dns zone response. */
export interface RefreshDNSZoneResponse {
  /** DNS zones returned. */
  dnsZones: DNSZone[]
}

export interface RegisterExternalDomainResponse {
  domain: string
  organizationId: string
  validationToken: string
  createdAt?: Date
  projectId: string
}

export interface RenewableDomain {
  domain: string
  projectId: string
  organizationId: string
  status: RenewableDomainStatus
  renewableDurationInYears?: number
  expiredAt?: Date
  limitRenewAt?: Date
  limitRedemptionAt?: Date
  estimatedDeleteAt?: Date
  tld?: Tld
}

/** Restore dns zone version response. */
export interface RestoreDNSZoneVersionResponse {}

export interface SSLCertificate {
  dnsZone: string
  alternativeDnsZones: string[]
  status: SSLCertificateStatus
  privateKey: string
  certificateChain: string
  createdAt?: Date
  expiredAt?: Date
}

/** Search available domains response. */
export interface SearchAvailableDomainsResponse {
  /** Array of available domains. */
  availableDomains: AvailableDomain[]
}

export interface Task {
  id: string
  projectId: string
  organizationId: string
  domain?: string
  type: TaskType
  status: TaskStatus
  startedAt?: Date
  updatedAt?: Date
  message?: string
}

export interface Tld {
  name: string
  dnssecSupport: boolean
  durationInYearsMin: number
  durationInYearsMax: number
  idnSupport: boolean
  offers: Record<string, TldOffer>
  specifications: Record<string, string>
}

export interface TldOffer {
  action: string
  operationPath: string
  price?: Money
}

export interface TransferInDomainRequestTransferRequest {
  domain: string
  authCode: string
}

export interface UpdateContactRequestQuestion {
  question?: string
  answer?: string
}

/** Update dns zone nameservers response. */
export interface UpdateDNSZoneNameserversResponse {
  /** DNS zone name servers returned. */
  ns: Nameserver[]
}

/** Update dns zone records response. */
export interface UpdateDNSZoneRecordsResponse {
  /** DNS zone records returned. */
  records: DomainRecord[]
}

export type ListDNSZonesRequest = {
  /** Organization ID on which to filter the returned DNS zones. */
  organizationId?: string
  /** Project ID on which to filter the returned DNS zones. */
  projectId?: string
  /** Sort order of the returned DNS zones. */
  orderBy?: ListDNSZonesRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of DNS zones to return per page. */
  pageSize?: number
  /** Domain on which to filter the returned DNS zones. */
  domain: string
  /** DNS zone on which to filter the returned DNS zones. */
  dnsZone: string
}

export type CreateDNSZoneRequest = {
  /** Domain in which to crreate the DNS zone. */
  domain: string
  /** Subdomain of the DNS zone to create. */
  subdomain: string
  /** Project ID in which to create the DNS zone. */
  projectId?: string
}

export type UpdateDNSZoneRequest = {
  /** DNS zone to update. */
  dnsZone: string
  /** Name of the new DNS zone to create. */
  newDnsZone: string
  /** Project ID in which to create the new DNS zone. */
  projectId?: string
}

export type CloneDNSZoneRequest = {
  /** DNS zone to clone. */
  dnsZone: string
  /** Destination DNS zone in which to clone the chosen DNS zone. */
  destDnsZone: string
  /** Specifies whether or not the destination DNS zone will be overwritten. */
  overwrite: boolean
  /** Project ID of the destination DNS zone. */
  projectId?: string
}

export type DeleteDNSZoneRequest = {
  /** DNS zone to delete. */
  dnsZone: string
  /** Project ID of the DNS zone to delete. */
  projectId?: string
}

export type ListDNSZoneRecordsRequest = {
  /** DNS zone on which to filter the returned DNS zone records. */
  dnsZone: string
  /** Project ID on which to filter the returned DNS zone records. */
  projectId?: string
  /** Sort order of the returned DNS zone records. */
  orderBy?: ListDNSZoneRecordsRequestOrderBy
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of DNS zone records per page. */
  pageSize?: number
  /** Name on which to filter the returned DNS zone records. */
  name: string
  /** Record type on which to filter the returned DNS zone records. */
  type?: DomainRecordType
  /** Record ID on which to filter the returned DNS zone records. */
  id?: string
}

export type UpdateDNSZoneRecordsRequest = {
  /** DNS zone in which to update the DNS zone records. */
  dnsZone: string
  /** Changes made to the records. */
  changes: RecordChange[]
  /** Specifies whether or not to return all the records. */
  returnAllRecords?: boolean
  /**
   * Disable the creation of the target zone if it does not exist. Target zone
   * creation is disabled by default.
   */
  disallowNewZoneCreation: boolean
  /** Use the provided serial (0) instead of the auto-increment serial. */
  serial?: number
}

export type ListDNSZoneNameserversRequest = {
  /** DNS zone on which to filter the returned DNS zone name servers. */
  dnsZone: string
  /** Project ID on which to filter the returned DNS zone name servers. */
  projectId?: string
}

export type UpdateDNSZoneNameserversRequest = {
  /** DNS zone in which to update the DNS zone name servers. */
  dnsZone: string
  /** New DNS zone name servers. */
  ns: Nameserver[]
}

export type ClearDNSZoneRecordsRequest = {
  /** DNS zone to clear. */
  dnsZone: string
}

export type ExportRawDNSZoneRequest = {
  /** DNS zone to export. */
  dnsZone: string
  /** DNS zone format. */
  format?: RawFormat
}

export type ImportRawDNSZoneRequest = {
  /** DNS zone to import. */
  dnsZone: string
  /** @deprecated */
  content?: string
  projectId?: string
  /** @deprecated */
  format?: RawFormat
  /**
   * Import a bind file format.
   *
   * One-of ('source'): at most one of 'bindSource', 'axfrSource' could be set.
   */
  bindSource?: ImportRawDNSZoneRequestBindSource
  /**
   * Import from the name server given with TSIG, to use or not.
   *
   * One-of ('source'): at most one of 'bindSource', 'axfrSource' could be set.
   */
  axfrSource?: ImportRawDNSZoneRequestAXFRSource
}

export type ImportProviderDNSZoneRequest = {
  dnsZone: string
  /** One-of ('provider'): at most one of 'onlineV1' could be set. */
  onlineV1?: ImportProviderDNSZoneRequestOnlineV1
}

export type RefreshDNSZoneRequest = {
  /** DNS zone to refresh. */
  dnsZone: string
  /** Specifies whether or not to recreate the DNS zone. */
  recreateDnsZone: boolean
  /** Specifies whether or not to recreate the sub DNS zone. */
  recreateSubDnsZone: boolean
}

export type ListDNSZoneVersionsRequest = {
  dnsZone: string
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of DNS zones versions per page. */
  pageSize?: number
}

export type ListDNSZoneVersionRecordsRequest = {
  dnsZoneVersionId: string
  /** Page number to return, from the paginated results. */
  page?: number
  /** Maximum number of DNS zones versions records per page. */
  pageSize?: number
}

export type GetDNSZoneVersionDiffRequest = {
  dnsZoneVersionId: string
}

export type RestoreDNSZoneVersionRequest = {
  dnsZoneVersionId: string
}

export type GetSSLCertificateRequest = {
  dnsZone: string
}

export type CreateSSLCertificateRequest = {
  dnsZone: string
  alternativeDnsZones?: string[]
}

export type ListSSLCertificatesRequest = {
  dnsZone: string
  page?: number
  pageSize?: number
  projectId?: string
}

export type DeleteSSLCertificateRequest = {
  dnsZone: string
}

export type GetDNSZoneTsigKeyRequest = {
  dnsZone: string
}

export type DeleteDNSZoneTsigKeyRequest = {
  dnsZone: string
}

export type RegistrarApiListTasksRequest = {
  page?: number
  pageSize?: number
  projectId?: string
  organizationId?: string
  domain?: string
  types?: TaskType[]
  statuses?: TaskStatus[]
  orderBy?: ListTasksRequestOrderBy
}

export type RegistrarApiBuyDomainsRequest = {
  domains: string[]
  durationInYears: number
  projectId?: string
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContact?: NewContact
}

export type RegistrarApiRenewDomainsRequest = {
  domains: string[]
  durationInYears: number
  forceLateRenewal?: boolean
}

export type RegistrarApiTransferInDomainRequest = {
  domains: TransferInDomainRequestTransferRequest[]
  projectId?: string
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContact?: NewContact
}

export type RegistrarApiTradeDomainRequest = {
  domain: string
  projectId?: string
  /**
   * One-of ('newOwnerContactType'): at most one of 'newOwnerContactId',
   * 'newOwnerContact' could be set.
   */
  newOwnerContactId?: string
  /**
   * One-of ('newOwnerContactType'): at most one of 'newOwnerContactId',
   * 'newOwnerContact' could be set.
   */
  newOwnerContact?: NewContact
}

export type RegistrarApiRegisterExternalDomainRequest = {
  domain: string
  projectId?: string
}

export type RegistrarApiDeleteExternalDomainRequest = {
  domain: string
}

export type RegistrarApiCheckContactsCompatibilityRequest = {
  domains?: string[]
  tlds?: string[]
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * One-of ('ownerContactType'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * One-of ('administrativeContactType'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * One-of ('technicalContactType'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContact?: NewContact
}

export type RegistrarApiListContactsRequest = {
  page?: number
  pageSize?: number
  domain?: string
  projectId?: string
  organizationId?: string
  role?: ListContactsRequestRole
  emailStatus?: ContactEmailStatus
}

export type RegistrarApiGetContactRequest = {
  contactId: string
}

export type RegistrarApiUpdateContactRequest = {
  contactId: string
  email?: string
  emailAlt?: string
  phoneNumber?: string
  faxNumber?: string
  addressLine1?: string
  addressLine2?: string
  zip?: string
  city?: string
  country?: string
  vatIdentificationCode?: string
  companyIdentificationCode?: string
  lang?: LanguageCode
  resale?: boolean
  /** @deprecated */
  questions?: UpdateContactRequestQuestion[]
  extensionFr?: ContactExtensionFR
  extensionEu?: ContactExtensionEU
  whoisOptIn?: boolean
  state?: string
  extensionNl?: ContactExtensionNL
}

export type RegistrarApiListDomainsRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListDomainsRequestOrderBy
  registrar?: string
  status?: DomainStatus
  projectId?: string
  organizationId?: string
  isExternal?: boolean
  domain?: string
}

export type RegistrarApiListRenewableDomainsRequest = {
  page?: number
  pageSize?: number
  orderBy?: ListRenewableDomainsRequestOrderBy
  projectId?: string
  organizationId?: string
}

export type RegistrarApiGetDomainRequest = {
  domain: string
}

export type RegistrarApiUpdateDomainRequest = {
  domain: string
  /**
   * One-of ('technicalContactInfo'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContactId?: string
  /**
   * One-of ('technicalContactInfo'): at most one of 'technicalContactId',
   * 'technicalContact' could be set.
   */
  technicalContact?: NewContact
  /**
   * One-of ('ownerContactInfo'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContactId?: string
  /**
   * One-of ('ownerContactInfo'): at most one of 'ownerContactId',
   * 'ownerContact' could be set.
   */
  ownerContact?: NewContact
  /**
   * One-of ('administrativeContactInfo'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContactId?: string
  /**
   * One-of ('administrativeContactInfo'): at most one of
   * 'administrativeContactId', 'administrativeContact' could be set.
   */
  administrativeContact?: NewContact
}

export type RegistrarApiLockDomainTransferRequest = {
  domain: string
}

export type RegistrarApiUnlockDomainTransferRequest = {
  domain: string
}

export type RegistrarApiEnableDomainAutoRenewRequest = {
  domain: string
}

export type RegistrarApiDisableDomainAutoRenewRequest = {
  domain: string
}

export type RegistrarApiGetDomainAuthCodeRequest = {
  domain: string
}

export type RegistrarApiEnableDomainDNSSECRequest = {
  domain: string
  dsRecord?: DSRecord
}

export type RegistrarApiDisableDomainDNSSECRequest = {
  domain: string
}

export type RegistrarApiSearchAvailableDomainsRequest = {
  /** A list of domain to search, TLD is optional. */
  domains: string[]
  /** Array of tlds to search on. */
  tlds?: string[]
  /** Search exact match. */
  strictSearch: boolean
}

export type RegistrarApiCreateDomainHostRequest = {
  domain: string
  name: string
  ips?: string[]
}

export type RegistrarApiListDomainHostsRequest = {
  domain: string
  page?: number
  pageSize?: number
}

export type RegistrarApiUpdateDomainHostRequest = {
  domain: string
  name: string
  ips?: string[]
}

export type RegistrarApiDeleteDomainHostRequest = {
  domain: string
  name: string
}
