---
title: Real-time reports API
description: Retrieve real-time reports using the API
---

# Analytics 2.0 real-time reports API

The Analytics 2.0 real-time report API endpoint allows you to access real-time data programmatically through Adobe Developer. The real-time data reported is less than two minutes latent and auto-updates on a minute-by-minute basis. See the [Real-time reporting overview](https://experienceleague.adobe.com/en/docs/analytics/components/real-time-reporting/realtime) for more information.

The endpoint described in this guide is routed through analytics.adobe.io. To use it, you will need to first create a client with access to the Adobe Analytics Reporting API. For more information, refer to [Getting started with the Analytics API](https://developer.adobe.com/analytics-apis/docs/2.0/guides/).

<InlineAlert variant="info" slots="text" />

Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes.

## POST real-time report

Use this endpoint to Generates a real-time report for the data requested in a POST body.

**POST**  `https://analytics.adobe.io/api/{GLOBAL_COMPANY_ID}/reports/realtime`

<InlineAlert variant="info" slots="text" />

You can find your global company ID by using the [Discovery API](../discovery.md).

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

### Request

```sh
curl -X POST "https://analytics.adobe.io/api/{GLOBAL_COMPANY-ID}/reports/realtime" \
  -H "accept: application/json" \
  -H "x-api-key: {CLIENT_ID}" \
  -H "Authorization: Bearer {ACCESS_TOKEN}"\
  -d '{
  "rsid": "examplersid",
  "globalFilters": [
    {
      "type": "dateRange",
      "dateRange": "YYYY-MM-24T09:00:00/YYYY-MM-24T09:30:00"
    }
  ],
  "metricContainer": {
    "metrics": [
      {
        "columnId": "0",
	"id": "metrics/occurrences"
      }
    ]
  },
  "dimensions": [
    {
      "id": "variables/daterangeminute",
      "dimensionColumnId": "0"
    }
  ],
  "settings": {
    "realTimeMinuteGranularity": 10,
    "limit": 20
  }
}'
```

### Response

```json
{
  "totalPages": 1,
  "firstPage": true,
  "lastPage": true,
  "numberOfElements": 3,
  "number": 0,
  "totalElements": 3,
  "rows": [
    {
      "itemIds": [
        "12403260900"
      ],
      "values": [
        "09:00 YYYY-MM-24"
      ],
      "data": [
        2183
      ],
      "value": "09:00 YYYY-MM-24",
      "itemId": "12403260900"
    },
    {
      "itemIds": [
        "12403260910"
      ],
      "values": [
        "09:10 YYYY-MM-24"
      ],
      "data": [
        2256
      ],
      "value": "09:10 YYYY-MM-24",
      "itemId": "12403260910"
    },
    {
      "itemIds": [
        "12403260920"
      ],
      "values": [
        "09:20 YYY-MM-24"
      ],
      "data": [
        2034
      ],
      "value": "09:20 YYYY-MM-24",
      "itemId": "12403260920"
    }
  ],
  "summaryData": {
    "totals": [
      6473
    ]
  }
}
```

### Request example details

The above example creates a real-time report request for the following:

* To show data for the dimension `daterangeminute` and the metric `occurences`for the rsid `examplersid`.
* To show data over a 30-minute time period on from `YYYY-MM-24T09:00:00` to `YYYY-MM-24T09:30:00`, or on the same day--the 24th between the time from `09:00` to `09:30`. The start date cannot be earlier than 20 hours from the time the request is made, according to the time zone specified for the report suite.
* To show data at a granularity of `10` minutes, as specified in the value of `realTimeMinuteGranularity`.

#### Request parameters

The POST real-time reports endpoint includes the following request parameters:

| Parameter | Req/Opt | Type | Description |
| --- | --- | -- | -- |
| `rsid` | required | string | report suite ID |
| `locale` | optional | string | The specified language |
| `globalFilters` | optional | container | Contains the `type` and `dateRange` parameters |
| `type` | optional | dateRange | The type of filter to be applied |
| `dateRange` | optional | string | The start and end dates for the report. The format is `YYYY-DD-DDT00:00:00/YYYY-MM-DDT00:00:00`and is based on the timezone of the `rsid`.|
| `metricContainer` | optional | container | Contains the `metrics` container |
| `columnId` | optional | string | The column ID |
| `id` | optional | string | The metric or dimension ID |
| `dimensions` | required | container | Contains the `id` and `dimensionColumnId` of the dimensions to be included in the report. For real-time reports, the `variables/daterangeminute` is required. |
| `dimensionColumnId` | required | string | The dimension column ID |
| `settings` | optional | container | Contains the `settings` object members for the specified real-time report, including `realTimeMinuteGranularity` |
| `realtimeMinuteGranularity` | optional |  | The number of minutes between the reporting of the specified data |
| `limit` | optional | $int32 | The maximum number of items to show per page |

### Response example details

The above JSON response example shows the following details:

* The number of `occurrences` from 9:00 to 9:10 on the 24th is `2183`.
* The number of `occurrences` from 9:10 to 9:20 on the 24th is `2256`.
* The number of `occurrences` from 9:20 to just before 9:30 on the 24th is `2034`.
* The total number of `occurrences` from 9:00 to 9:30 on the 24th is `6473`.

#### Response parameters

The POST real-time reports endpoint includes the following response parameters:

| Parameter | Type | Description |
| --- | --- | -- |
| `totalPages` | $int32 | The total pages for the report |
| `firstPage` | boolean | Whether the response includes the first page of report |
| `lastPage` | boolean | Whether the response includes the last page of report |
| `numberOfElements` | $int32 | The total number of elements included in the report |
| `rows` | container | Contains the `row` parameters `itemIds`, `values`, `data`, `value`, and `itemId`. |
| `itemIds` | string | Processing numbers used to associate time values |
| `values` | string | The `values`--or in this case the tim--associated with the `data`|
| `data` | $double | The `data`--or in this case the `occurrences`--associated with the specified item and `value` |
| `value` | string | The `values`--or in this case the tim--associated with the `data` |
| `itemId` | string | Processing number used to associate time values |
| `summaryData` | container | Contains objects providing summary for report |
| `totals` | $int32 | The total for all `data` results in the report |

## Real-time report with multiple dimensions

The following example shows a trended real-time report. The POST request includes an additional dimension ([`clickmaplinkbyregion`](https://experienceleague.adobe.com/en/docs/analytics/components/dimensions/compatibility)), along with the `daterangeminute` dimension shown in the first example above. The result is an additional row with the data values for the added dimension.

### Request and response examples

Click the **Request** tab in the following example to see a cURL request for this endpoint. Click the **Response** tab to see a successful JSON response for the request.

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

### Request

```json
{
  "rsid": "examplersid",
  "globalFilters": [
    {
      "type": "dateRange",
      "dateRange": "YYYY-MM-25T09:00:00/YYYY-MM-25T09:30:00"
    }
  ],
  "metricContainer": {
    "metrics": [
      {
        "columnId": "0",
    "id": "metrics/occurrences"
      }
    ]
  },
  "dimensions": [
    {
      "id": "variables/daterangeminute",
      "dimensionColumnId": "0"
    },
        {
      "id": "variables/clickmaplinkbyregion",
      "dimensionColumnId": "1"
    }
  ],
  "settings": {
    "realTimeMinuteGranularity": 10,
    "limit": 20
  }
}
```

### Response

```json
{
  "totalPages": 2,
  "firstPage": true,
  "lastPage": false,
  "numberOfElements": 20,
  "number": 0,
  "totalElements": 30,
  "rows": [
    {
      "itemIds": [
        "12404020900",
        "1411878551"
      ],
      "values": [
        "09:00 2024-05-02",
        "Save|BODY"
      ],
      "data": [
        53
      ]
    },
    {
      "itemIds": [
        "12404020900",
        "4192888170"
      ],
      "values": [
        "09:00 2024-05-02",
        "Discard changes|BODY"
      ],
      "data": [
        44
      ]
    },
    {
      "itemIds": [
        "12404020910",
        "1411878551"
      ],
      "values": [
        "09:10 2024-05-02",
        "Save|BODY"
      ],
      "data": [
        60
      ]
    },
    {
      "itemIds": [
        "12404020910",
        "4192888170"
      ],
      "values": [
        "09:10 2024-05-02",
        "Discard changes|BODY"
      ],
      "data": [
        45
      ]
    }
  ],
  "summaryData": {
    "totals": [
      202
    ],
    "realTimeTotalsPerPeriod": [
      3726,
      3710,
      3998
    ]
  }
}
```

## Third example

```json
{
    "rsid": "examplersid",
    "globalFilters": [
        {
            "type": "dateRange",
            "dateRange": "YYYY-MM-25T09:31:01/YYYY-MM-25T10:00"
        }
    ],
    "metricContainer": {
        "metrics": [
            {
                "columnId": "0",
                "id": "metrics/occurrences",
                "filters": [
                    "0"
                ]
            }
        ],
        "metricFilters": [
            {
                "id": "0",
                "type": "breakdown",
                "dimension": "variables/clickmaplinkbyregion",
                "itemId": "812776935"
            }
        ]
    },
    "dimensions": [
        {
            "id": "variables/daterangeminute",
            "dimensionColumnId": "0"
        },
        {
            "id": "variables/clickmappage",
            "dimensionColumnId": "1"
        }
    ],
    "settings": {
        "realTimeMinuteGranularity": 1
    }
}
```

