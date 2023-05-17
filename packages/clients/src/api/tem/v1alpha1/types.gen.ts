// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Region } from '../../../bridge'

export type DomainStatus =
  | 'unknown'
  | 'checked'
  | 'unchecked'
  | 'invalid'
  | 'locked'
  | 'revoked'
  | 'pending'

export type EmailRcptType = 'unknown_rcpt_type' | 'to' | 'cc' | 'bcc'

export type EmailStatus =
  | 'unknown'
  | 'new'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'canceled'

export type ListEmailsRequestOrderBy =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'updated_at_desc'
  | 'updated_at_asc'
  | 'status_desc'
  | 'status_asc'
  | 'mail_from_desc'
  | 'mail_from_asc'
  | 'mail_rcpt_desc'
  | 'mail_rcpt_asc'
  | 'subject_desc'
  | 'subject_asc'

/** Create email request. address. */
export interface CreateEmailRequestAddress {
  /** Email address. */
  email: string
  /** (Optional) Name displayed. */
  name?: string
}

/** Create email request. attachment. */
export interface CreateEmailRequestAttachment {
  /** Filename of the attachment. */
  name: string
  /** MIME type of the attachment. */
  type: string
  /** Content of the attachment encoded in base64. */
  content: string
}

/** Create email response. */
export interface CreateEmailResponse {
  /** Single page of emails matching the requested criteria. */
  emails: Email[]
}

/** Domain. */
export interface Domain {
  /** ID of the domain. */
  id: string
  /** ID of the domain's Organization. */
  organizationId: string
  /** ID of the domain's Project. */
  projectId: string
  /** Domain name (example.com). */
  name: string
  /** Status of the domain. */
  status: DomainStatus
  /** Date and time of domain creation. */
  createdAt?: Date
  /** Date and time of the next scheduled check. */
  nextCheckAt?: Date
  /** Date and time the domain was last valid. */
  lastValidAt?: Date
  /** Date and time of the domain's deletion. */
  revokedAt?: Date
  /** Error message returned if the last check failed. */
  lastError?: string
  /** Snippet of the SPF record to register in the DNS zone. */
  spfConfig: string
  /** DKIM public key to record in the DNS zone. */
  dkimConfig: string
  /** Domain's statistics. */
  statistics?: DomainStatistics
  region: Region
}

export interface DomainStatistics {
  totalCount: number
  sentCount: number
  failedCount: number
  canceledCount: number
}

/** Email. */
export interface Email {
  /** Technical ID of the email. */
  id: string
  /** Message ID of the email. */
  messageId: string
  /** ID of the Project to which the email belongs. */
  projectId: string
  /** Email address of the sender. */
  mailFrom: string
  /** @deprecated (Deprecated) Email address of the recipient. */
  rcptTo?: string
  /** Email address of the recipient. */
  mailRcpt: string
  /** Type of recipient. */
  rcptType: EmailRcptType
  /** Subject of the email. */
  subject: string
  /** Creation date of the email object. */
  createdAt?: Date
  /** Last update of the email object. */
  updatedAt?: Date
  /** Status of the email. */
  status: EmailStatus
  /** Additional status information. */
  statusDetails?: string
  /** Number of attempts to send the email. */
  tryCount: number
  /** Information about the last three attempts to send the email. */
  lastTries: EmailTry[]
}

/** Email. try. */
export interface EmailTry {
  /** Rank number of this attempt to send the email. */
  rank: number
  /** Date of the attempt to send the email. */
  triedAt?: Date
  /**
   * The SMTP status code received after the attempt. 0 if the attempt did not
   * reach an SMTP server.
   */
  code: number
  /**
   * The SMTP message received. If the attempt did not reach an SMTP server, the
   * message returned explains what happened.
   */
  message: string
}

/** List domains response. */
export interface ListDomainsResponse {
  /** Number of domains that match the request (without pagination). */
  totalCount: number
  domains: Domain[]
}

/** List emails response. */
export interface ListEmailsResponse {
  /** Number of emails matching the requested criteria. */
  totalCount: number
  /** Single page of emails matching the requested criteria. */
  emails: Email[]
}

/** Statistics. */
export interface Statistics {
  /** Total number of emails matching the requested criteria. */
  totalCount: number
  /**
   * Number of emails still in the `new` transient state. This means emails
   * received from the API but not yet processed.
   */
  newCount: number
  /**
   * Number of emails still in the `sending` transient state. This means emails
   * received from the API but not yet in their final status.
   */
  sendingCount: number
  /**
   * Number of emails in the final `sent` state. This means emails that have
   * been delivered to the target mail system.
   */
  sentCount: number
  /**
   * Number of emails in the final `failed` state. This means emails that have
   * been refused by the target mail system with a final error status.
   */
  failedCount: number
  /**
   * Number of emails in the final `canceled` state. This means emails that have
   * been canceled upon request.
   */
  canceledCount: number
}

export type CreateEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Sender information. Must be from a checked domain declared in the Project. */
  from?: CreateEmailRequestAddress
  /** Array of recipient information (limited to 1 recipient). */
  to?: CreateEmailRequestAddress[]
  /** Array of recipient information (unimplemented). */
  cc?: CreateEmailRequestAddress[]
  /** Array of recipient information (unimplemented). */
  bcc?: CreateEmailRequestAddress[]
  /** Subject of the email. */
  subject: string
  /** Text content. */
  text: string
  /** HTML content. */
  html: string
  /** ID of the Project in which to create the email. */
  projectId?: string
  /** Array of attachments. */
  attachments?: CreateEmailRequestAttachment[]
  /** Maximum date to deliver the email. */
  sendBefore?: Date
}

export type GetEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the email to retrieve. */
  emailId: string
}

export type ListEmailsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  page?: number
  pageSize?: number
  /** (Optional) ID of the Project in which to list the emails. */
  projectId?: string
  /** (Optional) ID of the domain for which to list the emails. */
  domainId?: string
  /** (Optional) ID of the message for which to list the emails. */
  messageId?: string
  /** (Optional) List emails created after this date. */
  since?: Date
  /** (Optional) List emails created before this date. */
  until?: Date
  /** (Optional) List emails sent with this sender's email address. */
  mailFrom?: string
  /**
   * @deprecated (Deprecated) List emails sent to this recipient's email
   *   address.
   */
  mailTo?: string
  /** (Optional) List emails sent to this recipient's email address. */
  mailRcpt?: string
  /** (Optional) List emails with any of these statuses. */
  statuses?: EmailStatus[]
  /** (Optional) List emails with this subject. */
  subject?: string
  /**
   * (Optional) List emails corresponding to specific criteria. You can filter
   * your emails in ascending or descending order using:
   *
   * - Created_at
   * - Updated_at
   * - Status
   * - Mail_from
   * - Mail_rcpt
   * - Subject.
   */
  orderBy?: ListEmailsRequestOrderBy
}

export type GetStatisticsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** (Optional) Number of emails for this Project. */
  projectId?: string
  /**
   * (Optional) Number of emails sent from this domain (must be coherent with
   * the `project_id` and the `organization_id`).
   */
  domainId?: string
  /** (Optional) Number of emails created after this date. */
  since?: Date
  /** (Optional) Number of emails created before this date. */
  until?: Date
  /** (Optional) Number of emails sent with this sender's email address. */
  mailFrom?: string
}

export type CancelEmailRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the email to cancel. */
  emailId: string
}

export type CreateDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the project to which the domain belongs. */
  projectId?: string
  /** Fully qualified domain dame. */
  domainName: string
  /** Accept Scaleway's Terms of Service. */
  acceptTos: boolean
}

export type GetDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain. */
  domainId: string
}

export type ListDomainsRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** Requested page number. Value must be greater or equal to 1. */
  page?: number
  /** Page size. */
  pageSize?: number
  projectId?: string
  status?: DomainStatus[]
  organizationId?: string
  name?: string
}

export type RevokeDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain to delete. */
  domainId: string
}

export type CheckDomainRequest = {
  /**
   * Region to target. If none is passed will use default region from the
   * config.
   */
  region?: Region
  /** ID of the domain to check. */
  domainId: string
}
