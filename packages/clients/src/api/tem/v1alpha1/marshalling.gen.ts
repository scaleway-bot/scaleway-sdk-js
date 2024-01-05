// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import {
  isJSONObject,
  unmarshalArrayOfObject,
  unmarshalDate,
} from '../../../bridge'
import type { DefaultValues } from '../../../bridge'
import type {
  CreateDomainRequest,
  CreateEmailRequest,
  CreateEmailRequestAddress,
  CreateEmailRequestAttachment,
  CreateEmailRequestHeader,
  CreateEmailResponse,
  Domain,
  DomainLastStatus,
  DomainLastStatusDkimRecord,
  DomainLastStatusSpfRecord,
  DomainReputation,
  DomainStatistics,
  Email,
  EmailTry,
  ListDomainsResponse,
  ListEmailsResponse,
  Statistics,
} from './types.gen'

const unmarshalEmailTry = (data: unknown): EmailTry => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'EmailTry' failed as data isn't a dictionary.`,
    )
  }

  return {
    code: data.code,
    message: data.message,
    rank: data.rank,
    triedAt: unmarshalDate(data.tried_at),
  } as EmailTry
}

export const unmarshalEmail = (data: unknown): Email => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Email' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    flags: data.flags,
    id: data.id,
    lastTries: unmarshalArrayOfObject(data.last_tries, unmarshalEmailTry),
    mailFrom: data.mail_from,
    mailRcpt: data.mail_rcpt,
    messageId: data.message_id,
    projectId: data.project_id,
    rcptTo: data.rcpt_to,
    rcptType: data.rcpt_type,
    status: data.status,
    statusDetails: data.status_details,
    subject: data.subject,
    tryCount: data.try_count,
    updatedAt: unmarshalDate(data.updated_at),
  } as Email
}

const unmarshalDomainReputation = (data: unknown): DomainReputation => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainReputation' failed as data isn't a dictionary.`,
    )
  }

  return {
    previousScore: data.previous_score,
    previousScoredAt: unmarshalDate(data.previous_scored_at),
    score: data.score,
    scoredAt: unmarshalDate(data.scored_at),
    status: data.status,
  } as DomainReputation
}

const unmarshalDomainStatistics = (data: unknown): DomainStatistics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainStatistics' failed as data isn't a dictionary.`,
    )
  }

  return {
    canceledCount: data.canceled_count,
    failedCount: data.failed_count,
    sentCount: data.sent_count,
    totalCount: data.total_count,
  } as DomainStatistics
}

export const unmarshalDomain = (data: unknown): Domain => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Domain' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    dkimConfig: data.dkim_config,
    id: data.id,
    lastError: data.last_error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    name: data.name,
    nextCheckAt: unmarshalDate(data.next_check_at),
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    reputation: data.reputation
      ? unmarshalDomainReputation(data.reputation)
      : undefined,
    revokedAt: unmarshalDate(data.revoked_at),
    spfConfig: data.spf_config,
    statistics: data.statistics
      ? unmarshalDomainStatistics(data.statistics)
      : undefined,
    status: data.status,
  } as Domain
}

export const unmarshalCreateEmailResponse = (
  data: unknown,
): CreateEmailResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'CreateEmailResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    emails: unmarshalArrayOfObject(data.emails, unmarshalEmail),
  } as CreateEmailResponse
}

const unmarshalDomainLastStatusDkimRecord = (
  data: unknown,
): DomainLastStatusDkimRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusDkimRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusDkimRecord
}

const unmarshalDomainLastStatusSpfRecord = (
  data: unknown,
): DomainLastStatusSpfRecord => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatusSpfRecord' failed as data isn't a dictionary.`,
    )
  }

  return {
    error: data.error,
    lastValidAt: unmarshalDate(data.last_valid_at),
    status: data.status,
  } as DomainLastStatusSpfRecord
}

export const unmarshalDomainLastStatus = (data: unknown): DomainLastStatus => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'DomainLastStatus' failed as data isn't a dictionary.`,
    )
  }

  return {
    dkimRecord: data.dkim_record
      ? unmarshalDomainLastStatusDkimRecord(data.dkim_record)
      : undefined,
    domainId: data.domain_id,
    domainName: data.domain_name,
    spfRecord: data.spf_record
      ? unmarshalDomainLastStatusSpfRecord(data.spf_record)
      : undefined,
  } as DomainLastStatus
}

export const unmarshalListDomainsResponse = (
  data: unknown,
): ListDomainsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListDomainsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    domains: unmarshalArrayOfObject(data.domains, unmarshalDomain),
    totalCount: data.total_count,
  } as ListDomainsResponse
}

export const unmarshalListEmailsResponse = (
  data: unknown,
): ListEmailsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListEmailsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    emails: unmarshalArrayOfObject(data.emails, unmarshalEmail),
    totalCount: data.total_count,
  } as ListEmailsResponse
}

export const unmarshalStatistics = (data: unknown): Statistics => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Statistics' failed as data isn't a dictionary.`,
    )
  }

  return {
    canceledCount: data.canceled_count,
    failedCount: data.failed_count,
    newCount: data.new_count,
    sendingCount: data.sending_count,
    sentCount: data.sent_count,
    totalCount: data.total_count,
  } as Statistics
}

export const marshalCreateDomainRequest = (
  request: CreateDomainRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  accept_tos: request.acceptTos,
  domain_name: request.domainName,
  project_id: request.projectId ?? defaults.defaultProjectId,
})

const marshalCreateEmailRequestAddress = (
  request: CreateEmailRequestAddress,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  email: request.email,
  name: request.name,
})

const marshalCreateEmailRequestAttachment = (
  request: CreateEmailRequestAttachment,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  content: request.content,
  name: request.name,
  type: request.type,
})

const marshalCreateEmailRequestHeader = (
  request: CreateEmailRequestHeader,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  key: request.key,
  value: request.value,
})

export const marshalCreateEmailRequest = (
  request: CreateEmailRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  additional_headers:
    request.additionalHeaders !== undefined
      ? request.additionalHeaders.map(elt =>
          marshalCreateEmailRequestHeader(elt, defaults),
        )
      : undefined,
  attachments:
    request.attachments !== undefined
      ? request.attachments.map(elt =>
          marshalCreateEmailRequestAttachment(elt, defaults),
        )
      : undefined,
  bcc:
    request.bcc !== undefined
      ? request.bcc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
  cc:
    request.cc !== undefined
      ? request.cc.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
  from:
    request.from !== undefined
      ? marshalCreateEmailRequestAddress(request.from, defaults)
      : undefined,
  html: request.html,
  project_id: request.projectId ?? defaults.defaultProjectId,
  send_before: request.sendBefore,
  subject: request.subject,
  text: request.text,
  to:
    request.to !== undefined
      ? request.to.map(elt => marshalCreateEmailRequestAddress(elt, defaults))
      : undefined,
})
