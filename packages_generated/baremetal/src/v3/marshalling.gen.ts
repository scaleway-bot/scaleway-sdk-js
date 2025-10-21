// This file was automatically generated. DO NOT EDIT.
// If you have any remark or suggestion do not hesitate to open an issue.
import randomName from '@scaleway/random-name'
import {
  isJSONObject,
  marshalBlobToScwFile,
  marshalDecimal,
  marshalMoney,
  marshalScwFile,
  marshalTimeSeries,
  resolveOneOf,
  unmarshalArrayOfObject,
  unmarshalDate,
  unmarshalDecimal,
  unmarshalMapOfObject,
  unmarshalMoney,
  unmarshalScwFile,
  unmarshalServiceInfo,
  unmarshalTimeSeries,
  unmarshalTimeSeriesPoint,
} from '@scaleway/sdk-client'
import type {
  Zone as ScwZone,
  Region as ScwRegion,
  DefaultValues,
} from '@scaleway/sdk-client'
import type {
  ServerPrivateNetwork,
  ListServerPrivateNetworksResponse,
  SetServerPrivateNetworksResponse,
  PrivateNetworkApiAddServerPrivateNetworkRequest,
  PrivateNetworkApiSetServerPrivateNetworksRequest,
} from './types.gen.js'

export const unmarshalServerPrivateNetwork = (
  data: unknown,
): ServerPrivateNetwork => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ServerPrivateNetwork' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    ipamIpIds: data.ipam_ip_ids,
    privateNetworkId: data.private_network_id,
    projectId: data.project_id,
    serverId: data.server_id,
    status: data.status,
    updatedAt: unmarshalDate(data.updated_at),
    vlan: data.vlan,
  } as ServerPrivateNetwork
}

export const unmarshalListServerPrivateNetworksResponse = (
  data: unknown,
): ListServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
    totalCount: data.total_count,
  } as ListServerPrivateNetworksResponse
}

export const unmarshalSetServerPrivateNetworksResponse = (
  data: unknown,
): SetServerPrivateNetworksResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'SetServerPrivateNetworksResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    serverPrivateNetworks: unmarshalArrayOfObject(
      data.server_private_networks,
      unmarshalServerPrivateNetwork,
    ),
  } as SetServerPrivateNetworksResponse
}

export const marshalPrivateNetworkApiAddServerPrivateNetworkRequest = (
  request: PrivateNetworkApiAddServerPrivateNetworkRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  ipam_ip_ids: request.ipamIpIds,
  private_network_id: request.privateNetworkId,
})

export const marshalPrivateNetworkApiSetServerPrivateNetworksRequest = (
  request: PrivateNetworkApiSetServerPrivateNetworksRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  per_private_network_ipam_ip_ids: request.perPrivateNetworkIpamIpIds,
})
