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
  FileSystem,
  Attachment,
  ListAttachmentsResponse,
  ListFileSystemsResponse,
  CreateFileSystemRequest,
  UpdateFileSystemRequest,
} from './types.gen.js'

export const unmarshalFileSystem = (data: unknown): FileSystem => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'FileSystem' failed as data isn't a dictionary.`,
    )
  }

  return {
    createdAt: unmarshalDate(data.created_at),
    id: data.id,
    name: data.name,
    numberOfAttachments: data.number_of_attachments,
    organizationId: data.organization_id,
    projectId: data.project_id,
    region: data.region,
    size: data.size,
    status: data.status,
    tags: data.tags,
    updatedAt: unmarshalDate(data.updated_at),
  } as FileSystem
}

const unmarshalAttachment = (data: unknown): Attachment => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'Attachment' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystemId: data.filesystem_id,
    id: data.id,
    resourceId: data.resource_id,
    resourceType: data.resource_type,
    zone: data.zone,
  } as Attachment
}

export const unmarshalListAttachmentsResponse = (
  data: unknown,
): ListAttachmentsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListAttachmentsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    attachments: unmarshalArrayOfObject(data.attachments, unmarshalAttachment),
    totalCount: data.total_count,
  } as ListAttachmentsResponse
}

export const unmarshalListFileSystemsResponse = (
  data: unknown,
): ListFileSystemsResponse => {
  if (!isJSONObject(data)) {
    throw new TypeError(
      `Unmarshalling the type 'ListFileSystemsResponse' failed as data isn't a dictionary.`,
    )
  }

  return {
    filesystems: unmarshalArrayOfObject(data.filesystems, unmarshalFileSystem),
    totalCount: data.total_count,
  } as ListFileSystemsResponse
}

export const marshalCreateFileSystemRequest = (
  request: CreateFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  project_id: request.projectId ?? defaults.defaultProjectId,
  size: request.size,
  tags: request.tags,
})

export const marshalUpdateFileSystemRequest = (
  request: UpdateFileSystemRequest,
  defaults: DefaultValues,
): Record<string, unknown> => ({
  name: request.name,
  size: request.size,
  tags: request.tags,
})
