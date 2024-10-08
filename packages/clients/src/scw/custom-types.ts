/**
 * Represents API metadata.
 *
 * @remarks These metadata are only here for debugging. Do not rely on these values.
 *
 * @internal
 */
export interface ServiceInfo {
  /** Name of the API */
  name: string
  /** Human readable description for the API. */
  description: string
  /** Version of the API. */
  version: string
  /** Web url where the documentation of the API can be found. */
  documentationUrl?: string
}

/**
 * Represents an amount of money with its currency type.
 */
export interface Money {
  /** 3-letter currency code defined in ISO 4217. */
  currencyCode: string
  /**
   * Whole units of the amount.
   *
   * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
   */
  units: number
  /**
   * Number of nano (10^-9) units of the amount.
   *
   * The value must be between -999,999,999 and +999,999,999 inclusive.
   * If `units` is positive, `nanos` must be positive or zero.
   * If `units` is zero, `nanos` can be positive, zero, or negative.
   * If `units` is negative, `nanos` must be negative or zero.
   * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   */
  nanos: number
}

/** Represents a point in a TimeSeries. */
export interface TimeSeriesPoint {
  /** Date of the point. */
  timestamp?: Date
  /** Value of the point. */
  value: number
}

/** Represents a time series that could be used for graph purposes. */
export interface TimeSeries {
  /** Name of the metric. */
  name: string
  /** Points contains all the points that composed the series. */
  points: TimeSeriesPoint[]
  /** Metadata contains some string metadata related to a metric. */
  metadata: Record<string, string>
}

/** Represents a Scaleway file. */
export interface ScwFile {
  /** Name of the file. */
  name: string
  /** Content-type of the file. */
  contentType: string
  /** Content of the file in base64. */
  content: string
}

/** A representation of a decimal value, such as 2.5.
 * Comparable to language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal.
 * Lookup protobuf google.type.Decimal for details  */
export class Decimal {
  private readonly str: string

  constructor(v: string) {
    this.str = v
  }

  public toString = (): string => this.str

  public marshal = (): object => ({ value: this.str })
}
