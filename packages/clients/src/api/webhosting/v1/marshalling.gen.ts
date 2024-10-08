// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalMoney,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  ControlPanel,
  CreateHostingRequestDomainConfiguration,
  Database,
  DatabaseApiAssignDatabaseUserRequest,
  DatabaseApiChangeDatabaseUserPasswordRequest,
  DatabaseApiCreateDatabaseRequest,
  DatabaseApiCreateDatabaseUserRequest,
  DatabaseApiUnassignDatabaseUserRequest,
  DatabaseUser,
  FtpAccount,
  FtpAccountApiChangeFtpAccountPasswordRequest,
  FtpAccountApiCreateFtpAccountRequest,
  Hosting,
  HostingApiCreateHostingRequest,
  HostingApiUpdateHostingRequest,
  HostingCpanelUrls,
  HostingOption,
  HostingSummary,
  ListControlPanelsResponse,
  ListDatabaseUsersResponse,
  ListDatabasesResponse,
  ListFtpAccountsResponse,
  ListHostingsResponse,
  ListMailAccountsResponse,
  ListOffersResponse,
  ListWebsitesResponse,
  MailAccount,
  MailAccountApiChangeMailAccountPasswordRequest,
  MailAccountApiCreateMailAccountRequest,
  MailAccountApiRemoveMailAccountRequest,
  Offer,
  OfferOption,
  OfferOptionRequest,
  ResetHostingPasswordResponse,
  Session,
  Website,
} from './types.gen'

export const unmarshalDatabaseUser = (data: unknown): DatabaseUser => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DatabaseUser' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: data.databases,
    username: data.username,
  } as DatabaseUser
}

export const unmarshalDatabase = (data: unknown): Database => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Database' failed as data isn't a dictionary.`,
    )
  }

  return {
    databaseName: data.database_name,
    users: data.users,
  } as Database
}

export const unmarshalFtpAccount = (data: unknown): FtpAccount => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FtpAccount' failed as data isn't a dictionary.`,
    )
  }

  return {
    path: data.path,
    username: data.username,
  } as FtpAccount
}

export const unmarshalMailAccount = (data: unknown): MailAccount => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'MailAccount' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    username: data.username,
  } as MailAccount
}

const unmarshalHostingCpanelUrls = (data: unknown): HostingCpanelUrls => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingCpanelUrls' failed as data isn't a dictionary.`,
    )
  }

  return {
    dashboard: data.dashboard,
    webmail: data.webmail,
  } as HostingCpanelUrls
}

const unmarshalHostingOption = (data: unknown): HostingOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    id: data.id,
    name: data.name,
    quantity: data.quantity,
  } as HostingOption
}

export const unmarshalHosting = (data: unknown): Hosting => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Hosting' failed as data isn't a dictionary.`,
    )
  }

  return {
    contactEmail: data.contact_email,
    controlPanelName: data.control_panel_name,
    cpanelUrls: data.cpanel_urls
      ? unmarshalHostingCpanelUrls(data.cpanel_urls)
      : undefined,
    createdAt: unmarshalDate(data.created_at),
    dnsStatus: data.dns_status,
    domain: data.domain,
    id: data.id,
    ipv4: data.ipv4,
    ipv6: data.ipv6,
    offerEndOfLife: data.offer_end_of_life,
    offerId: data.offer_id,
    offerName: data.offer_name,
    oneTimePassword: data.one_time_password,
    options: unmarshalArrayOfObject(data.options, unmarshalHostingOption),
    platformGroup: data.platform_group,
    platformHostname: data.platform_hostname,
    platformNumber: data.platform_number,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
    username: data.username,
  } as Hosting
}

const unmarshalControlPanel = (data: unknown): ControlPanel => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ControlPanel' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    availableLanguages: data.available_languages,
    logoUrl: data.logo_url,
    name: data.name,
  } as ControlPanel
}

export const unmarshalListControlPanelsResponse = (
  data: unknown,
): ListControlPanelsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListControlPanelsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    controlPanels: unmarshalArrayOfObject(
      data.control_panels,
      unmarshalControlPanel,
    ),
    totalCount: data.total_count,
  } as ListControlPanelsResponse
}

export const unmarshalListDatabaseUsersResponse = (
  data: unknown,
): ListDatabaseUsersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabaseUsersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    users: unmarshalArrayOfObject(data.users, unmarshalDatabaseUser),
  } as ListDatabaseUsersResponse
}

export const unmarshalListDatabasesResponse = (
  data: unknown,
): ListDatabasesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDatabasesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    databases: unmarshalArrayOfObject(data.databases, unmarshalDatabase),
    totalCount: data.total_count,
  } as ListDatabasesResponse
}

export const unmarshalListFtpAccountsResponse = (
  data: unknown,
): ListFtpAccountsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFtpAccountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    ftpAccounts: unmarshalArrayOfObject(data.ftp_accounts, unmarshalFtpAccount),
    totalCount: data.total_count,
  } as ListFtpAccountsResponse
}

const unmarshalHostingSummary = (data: unknown): HostingSummary => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'HostingSummary' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    id: data.id,
    projectId: data.project_id,
    protected: data.protected,
    region: data.region,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
  } as HostingSummary
}

export const unmarshalListHostingsResponse = (
  data: unknown,
): ListHostingsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListHostingsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    hostings: unmarshalArrayOfObject(data.hostings, unmarshalHostingSummary),
    totalCount: data.total_count,
  } as ListHostingsResponse
}

export const unmarshalListMailAccountsResponse = (
  data: unknown,
): ListMailAccountsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListMailAccountsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    mailAccounts: unmarshalArrayOfObject(
      data.mail_accounts,
      unmarshalMailAccount,
    ),
    totalCount: data.total_count,
  } as ListMailAccountsResponse
}

const unmarshalOfferOption = (data: unknown): OfferOption => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'OfferOption' failed as data isn't a dictionary.`,
    )
  }

  return {
    billingOperationPath: data.billing_operation_path,
    currentValue: data.current_value,
    id: data.id,
    maxValue: data.max_value,
    minValue: data.min_value,
    name: data.name,
    quotaWarning: data.quota_warning,
  } as OfferOption
}

const unmarshalOffer = (data: unknown): Offer => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Offer' failed as data isn't a dictionary.`,
    )
  }

  return {
    available: data.available,
    billingOperationPath: data.billing_operation_path,
    controlPanelName: data.control_panel_name,
    endOfLife: data.end_of_life,
    id: data.id,
    options: unmarshalArrayOfObject(data.options, unmarshalOfferOption),
    price: data.price ? unmarshalMoney(data.price) : undefined,
  } as Offer
}

export const unmarshalListOffersResponse = (
  data: unknown,
): ListOffersResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListOffersResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    offers: unmarshalArrayOfObject(data.offers, unmarshalOffer),
    totalCount: data.total_count,
  } as ListOffersResponse
}

const unmarshalWebsite = (data: unknown): Website => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Website' failed as data isn't a dictionary.`,
    )
  }

  return {
    domain: data.domain,
    path: data.path,
    sslStatus: data.ssl_status,
  } as Website
}

export const unmarshalListWebsitesResponse = (
  data: unknown,
): ListWebsitesResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListWebsitesResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    totalCount: data.total_count,
    websites: unmarshalArrayOfObject(data.websites, unmarshalWebsite),
  } as ListWebsitesResponse
}

export const unmarshalResetHostingPasswordResponse = (
  data: unknown,
): ResetHostingPasswordResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ResetHostingPasswordResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    oneTimePassword: data.one_time_password,
  } as ResetHostingPasswordResponse
}

export const unmarshalSession = (data: unknown): Session => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Session' failed as data isn't a dictionary.`,
    )
  }

  return {
    url: data.url,
  } as Session
}

export const marshalDatabaseApiAssignDatabaseUserRequest = (
  request: DatabaseApiAssignDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalDatabaseApiChangeDatabaseUserPasswordRequest = (
  request: DatabaseApiChangeDatabaseUserPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalDatabaseApiCreateDatabaseRequest = (
  request: DatabaseApiCreateDatabaseRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  database_name: request.databaseName,
})

export const marshalDatabaseApiCreateDatabaseUserRequest = (
  request: DatabaseApiCreateDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  username: request.username,
})

export const marshalDatabaseApiUnassignDatabaseUserRequest = (
  request: DatabaseApiUnassignDatabaseUserRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  username: request.username,
})

export const marshalFtpAccountApiChangeFtpAccountPasswordRequest = (
  request: FtpAccountApiChangeFtpAccountPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
})

export const marshalFtpAccountApiCreateFtpAccountRequest = (
  request: FtpAccountApiCreateFtpAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  password: request.password,
  path: request.path,
  username: request.username,
})

const marshalCreateHostingRequestDomainConfiguration = (
  request: CreateHostingRequestDomainConfiguration,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  update_all_records: request.updateAllRecords,
  update_mail_record: request.updateMailRecord,
  update_nameservers: request.updateNameservers,
  update_web_record: request.updateWebRecord,
})

const marshalOfferOptionRequest = (
  request: OfferOptionRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  id: request.id,
  quantity: request.quantity,
})

export const marshalHostingApiCreateHostingRequest = (
  request: HostingApiCreateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  domain_configuration:
    request.domainConfiguration !== undefined
      ? marshalCreateHostingRequestDomainConfiguration(
          request.domainConfiguration,
          defaults,
        )
      : undefined,
  email: request.email,
  language: request.language,
  offer_id: request.offerId,
  offer_options:
    request.offerOptions !== undefined
      ? request.offerOptions.map(elt =>
          marshalOfferOptionRequest(elt, defaults),
        )
      : undefined,
  project_id: request.projectId ?? defaults.defaultProjectId,
  skip_welcome_email: request.skipWelcomeEmail,
  tags: request.tags,
})

export const marshalHostingApiUpdateHostingRequest = (
  request: HostingApiUpdateHostingRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  offer_id: request.offerId,
  offer_options:
    request.offerOptions !== undefined
      ? request.offerOptions.map(elt =>
          marshalOfferOptionRequest(elt, defaults),
        )
      : undefined,
  protected: request.protected,
  tags: request.tags,
})

export const marshalMailAccountApiChangeMailAccountPasswordRequest = (
  request: MailAccountApiChangeMailAccountPasswordRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  password: request.password,
  username: request.username,
})

export const marshalMailAccountApiCreateMailAccountRequest = (
  request: MailAccountApiCreateMailAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  password: request.password,
  username: request.username,
})

export const marshalMailAccountApiRemoveMailAccountRequest = (
  request: MailAccountApiRemoveMailAccountRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  domain: request.domain,
  username: request.username,
})
