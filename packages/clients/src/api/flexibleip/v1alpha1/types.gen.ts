// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import type { Zone } from '../../../bridge'

export type FlexibleIPStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'attached'
  | 'error'
  | 'detaching'
  | 'locked'

export type ListFlexibleIPsRequestOrderBy = 'created_at_asc' | 'created_at_desc'

export type MACAddressStatus =
  | 'unknown'
  | 'ready'
  | 'updating'
  | 'used'
  | 'error'
  | 'deleting'

export type MACAddressType = 'unknown_type' | 'vmware' | 'xen' | 'kvm'

/** Attach flexible i ps response. */
export interface AttachFlexibleIPsResponse {
  /** Total count of flexible IPs that are being updated. */
  totalCount: number
  /** List of flexible IPs in an updating state. */
  flexibleIps: FlexibleIP[]
}

/** Detach flexible i ps response. */
export interface DetachFlexibleIPsResponse {
  /** Total count of flexible IPs that are being detached. */
  totalCount: number
  /** List of flexible IPs in a detaching state. */
  flexibleIps: FlexibleIP[]
}

/** Flexible ip. */
export interface FlexibleIP {
  /** ID of the flexible IP. */
  id: string
  /** ID of the Organization the flexible IP is attached to. */
  organizationId: string
  /** ID of the Project the flexible IP is attached to. */
  projectId: string
  /** Flexible IP description. */
  description: string
  /** Flexible IP tags. */
  tags: string[]
  /** Date on which the flexible IP was last updated. */
  updatedAt?: Date
  /** Date on which the flexible IP was created. */
  createdAt?: Date
  /**
   * Flexible IP status.
   *
   * - Ready : flexible IP is created and ready to be attached to a server or to
   *   be associated with a virtual MAC.
   * - Updating: flexible IP is being attached to a server or a virtual MAC
   *   operation is ongoing
   * - Attached: flexible IP is attached to a server
   * - Error: a flexible IP operation resulted in an error
   * - Detaching: flexible IP is being detached from a server
   * - Locked: the resource of the flexible IP is locked.
   */
  status: FlexibleIPStatus
  /** IP of the flexible IP. */
  ipAddress: string
  /** MAC address of the flexible IP. */
  macAddress?: MACAddress
  /** ID of the server linked to the flexible IP. */
  serverId?: string
  /** Reverse DNS value. */
  reverse: string
  /** Availability Zone of the flexible IP. */
  zone: Zone
}

/** List flexible i ps response. */
export interface ListFlexibleIPsResponse {
  /** Total count of matching flexible IPs. */
  totalCount: number
  /** List of all flexible IPs. */
  flexibleIps: FlexibleIP[]
}

/** Mac address. */
export interface MACAddress {
  /** ID of the flexible IP. */
  id: string
  /** MAC address of the Virtual MAC. */
  macAddress: string
  /** Type of virtual MAC. */
  macType: MACAddressType
  /** Status of virtual MAC. */
  status: MACAddressStatus
  /** Date on which the virtual MAC was last updated. */
  updatedAt?: Date
  /** Date on which the virtual MAC was created. */
  createdAt?: Date
  /** MAC address IP Availability Zone. */
  zone: Zone
}

export type CreateFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the project to associate with the Flexible IP. */
  projectId?: string
  /** Flexible IP description (max. of 255 characters). */
  description: string
  /** Tags to associate to the flexible IP. */
  tags?: string[]
  /** ID of the server to which the newly created flexible IP will be attached. */
  serverId?: string
  /** Value of the reverse DNS. */
  reverse?: string
  /** Defines whether the flexible IP has an IPv6 address. */
  isIpv6: boolean
}

export type GetFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the flexible IP. */
  fipId: string
}

export type ListFlexibleIPsRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** Sort order of the returned flexible IPs. */
  orderBy?: ListFlexibleIPsRequestOrderBy
  /** Page number. */
  page?: number
  /** Maximum number of flexible IPs per page. */
  pageSize?: number
  /**
   * Filter by tag, only flexible IPs with one or more matching tags will be
   * returned.
   */
  tags?: string[]
  /** Filter by status, only flexible IPs with this status will be returned. */
  status?: FlexibleIPStatus[]
  /**
   * Filter by server IDs, only flexible IPs with these server IDs will be
   * returned.
   */
  serverIds?: string[]
  /**
   * Filter by Organization ID, only flexible IPs from this Organization will be
   * returned.
   */
  organizationId?: string
  /** Filter by Project ID, only flexible IPs from this Project will be returned. */
  projectId?: string
}

export type UpdateFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the flexible IP to update. */
  fipId: string
  /** Flexible IP description (max. 255 characters). */
  description?: string
  /** Tags associated with the flexible IP. */
  tags?: string[]
  /** Value of the reverse DNS. */
  reverse?: string
}

export type DeleteFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the flexible IP to delete. */
  fipId: string
}

export type AttachFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * List of flexible IP IDs to attach to a server. Multiple IDs can be
   * provided, but note that flexible IPs must belong to the same MAC group (see
   * details about MAC groups).
   */
  fipsIds: string[]
  /** ID of the server on which to attach the flexible IPs. */
  serverId: string
}

export type DetachFlexibleIPRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * List of flexible IP IDs to detach from a server. Multiple IDs can be
   * provided. Note that flexible IPs must belong to the same MAC group.
   */
  fipsIds: string[]
}

export type GenerateMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /** ID of the flexible IP for which to generate a virtual MAC. */
  fipId: string
  /** TODO. */
  macType: MACAddressType
}

export type DuplicateMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * ID of the flexible IP on which to duplicate the virtual MAC. Note that the
   * flexible IPs need to be attached to the same server.
   */
  fipId: string
  /**
   * ID of the flexible IP to duplicate the Virtual MAC from. Note that flexible
   * IPs need to be attached to the same server.
   */
  duplicateFromFipId: string
}

export type MoveMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  fipId: string
  dstFipId: string
}

export type DeleteMACAddrRequest = {
  /** Zone to target. If none is passed will use default zone from the config. */
  zone?: Zone
  /**
   * ID of the flexible IP from which to delete the virtual MAC. If the flexible
   * IP belongs to a MAC group, the MAC will be removed from both the MAC group
   * and flexible IP.
   */
  fipId: string
}
