"use strict";(self.webpackChunkanalytics_2_0_apis=self.webpackChunkanalytics_2_0_apis||[]).push([[8295],{27317:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return h}});var t=a(58168),o=a(98587),s=(a(36190),a(28619)),r=a(83407),p=["components"],m={},d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",n)}},l=d("InlineAlert"),i=d("CodeBlock"),c={_frontmatter:m},u=r.A;function h(e){var n=e.components,a=(0,o.A)(e,p);return(0,s.mdx)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"shares-api"},"Shares API"),(0,s.mdx)("p",null,"The Analytics 2.0 Shares APIs allow you to retrieve, update, or create associations with components programmatically through Adobe Developer. The APIs use the same data and methods that Adobe uses in the product UI."),(0,s.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Adobe may add optional request and response members (name/value pairs) to existing API objects at any time and without notice or changes in versioning. Adobe recommends that you refer to the API documentation of any third-party tool you integrate with our APIs so that such additions are ignored in processing if not understood. If implemented properly, such additions are non-breaking changes for your implementation. Adobe will not remove parameters or add required parameters without first providing standard notification through release notes."),(0,s.mdx)("h2",{id:"retrieve-multiple-shares"},"Retrieve multiple shares"),(0,s.mdx)("p",null,"Retrieve a list of shares that the user can access."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares")),(0,s.mdx)("p",null,"You can paginate results by using the ",(0,s.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"page")," query strings."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},(0,s.mdx)("inlineCode",{parentName:"strong"},"limit")),": An integer that represents the number of results per page."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},(0,s.mdx)("inlineCode",{parentName:"strong"},"page")),": An integer that represents which page to return results.")),(0,s.mdx)("p",null,"For example, use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"page")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"limit")," query strings to only retrieve the first 3 shares in a company:"),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \"https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares?page=0&limit=3\" \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'x-api-key: {CLIENTID}' \\\n")),(0,s.mdx)("h4",{id:"response"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "shareId": 2085535,\n      "shareToId": 622293,\n      "shareToType": "user",\n      "componentType": "segment",\n      "componentId": "s300006186_590cb8b9e4b0ca84fe8152b9",\n      "shareToDisplayName": null\n    },\n    {\n      "shareId": 11684455,\n      "shareToId": 239343,\n      "shareToType": "group",\n      "componentType": "segment",\n      "componentId": "s300006186_5f4eb5bc3f56a12f743e1405",\n      "shareToDisplayName": null\n    },\n    {\n      "shareId": 11684456,\n      "shareToId": 622291,\n      "shareToType": "user",\n      "componentType": "segment",\n      "componentId": "s300006186_5f4eb5bb8aca3c5a990878e8",\n      "shareToDisplayName": null\n    }\n  ],\n  "totalPages": 38,\n  "totalElements": 113,\n  "number": 0,\n  "numberOfElements": 3,\n  "firstPage": true,\n  "lastPage": false,\n  "sort": null,\n  "size": 3\n}\n')),(0,s.mdx)("h2",{id:"retrieve-a-single-share-by-id"},"Retrieve a single share by ID"),(0,s.mdx)("p",null,"Returns information around a single share if you know the share ID."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/{ID}")),(0,s.mdx)("p",null,"For example, return information around the share with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"11684455"),":"),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-1"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \"https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/11684455\" \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'x-api-key: {CLIENTID}'\n")),(0,s.mdx)("h4",{id:"response-1"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": 11684455,\n  "shareToId": 239343,\n  "shareToType": "group",\n  "componentType": "segment",\n  "componentId": "s300006186_5f4eb5bc3f56a12f743e1405",\n  "shareToDisplayName": null\n}\n')),(0,s.mdx)("h2",{id:"retrieve-shares-for-multiple-components"},"Retrieve shares for multiple components"),(0,s.mdx)("p",null,"Finds one or more shares with desired values."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/component/search")),(0,s.mdx)("p",null,"This API call requires a JSON request body to determine search criteria. For example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "componentType": "segment",\n  "componentIds": [\n    "example-component-1"\n  ]\n}\n')),(0,s.mdx)("p",null,"This API call sends a JSON request body with search criteria. Adobe returns the first three shares that involve the segment with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"92845"),"."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-2"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X POST \"https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/component/search?page=0&limit=3\" \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'Content-Type: application/json' \\\n  -H 'x-api-key: {CLIENTID}' \\\n  -d '{\"componentType\": \"segment\",\"componentIds\": [\"92845\"]}'\n")),(0,s.mdx)("h4",{id:"response-2"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "content": [\n    {\n      "componentType": "segment",\n      "componentId": "92845",\n      "shares": [\n        {\n          "shareId": 11684456,\n          "shareToId": 622291,\n          "shareToType": "user",\n          "componentType": "segment",\n          "componentId": "92845",\n          "shareToDisplayName": null\n        }\n      ]\n    }\n  ],\n  "totalPages": 1,\n  "totalElements": 1,\n  "number": 0,\n  "numberOfElements": 1,\n  "firstPage": true,\n  "lastPage": true,\n  "sort": null,\n  "size": 10\n}\n')),(0,s.mdx)("h2",{id:"retrieve-components-shared-to-current-user"},"Retrieve components shared to current user"),(0,s.mdx)("p",null,"Returns an array of all components of a type shared to the user making the API call."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/sharedto/me?componentType={COMPONENT_TYPE}")),(0,s.mdx)("p",null,"This API call requires the ",(0,s.mdx)("inlineCode",{parentName:"p"},"componentType")," query string. Valid values include:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"dashboard")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"bookmark")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"calculatedMetric")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"project")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"dateRange")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"metric")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"dimension")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"virtualReportSuite")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"scheduledJob")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"alert")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"classificationSet"))),(0,s.mdx)("p",null,"For example, get all calculated metrics shared with me:"),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-3"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \"https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/sharedto/me?componentType=calculatedMetric\" \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'x-api-key: {CLIENTID}'\n")),(0,s.mdx)("h4",{id:"response-3"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  "example-calculated-metric-id-1"\n]\n')),(0,s.mdx)("h2",{id:"create-a-share"},"Create a share"),(0,s.mdx)("p",null,"Shares a component with a group."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"POST https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares")),(0,s.mdx)("p",null,"This API call requires a JSON body that determines what component to share and who to share it with. For example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "componentId": "{COMPONENTID}",\n  "componentType": "{COMPONENTTYPE}",\n  "shareToId": "{groupId}",\n  "shareToType": "group"\n}\n')),(0,s.mdx)("p",null,"For example, share a segment with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"83045")," to a group with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"38951"),":"),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-4"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares" \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {ACCESSTOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'x-api-key: {CLIENTID}\' \\\n  -d \'{"componentId": "83045",\n  "componentType": "segment",\n  "shareToId": 38951,\n  "shareToType": "group"}\'\n')),(0,s.mdx)("h4",{id:"response-4"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": 12345,\n  "componentId": "83045",\n  "componentType": "segment",\n  "shareToId": 38951,\n  "shareToType": "group"\n}\n')),(0,s.mdx)("h2",{id:"delete-a-share"},"Delete a share"),(0,s.mdx)("p",null,"Removes a share from a component."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"DELETE https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/{ID}")),(0,s.mdx)("p",null,"For example, deletes a share with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"11439"),"."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-5"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},"curl -X DELETE \"https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares/11439\" \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {ACCESSTOKEN}' \\\n  -H 'x-api-key: {CLIENTID}'\n")),(0,s.mdx)("h4",{id:"response-5"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "shareId": 11439,\n  "status": {\n    "success": true\n  }\n}\n')),(0,s.mdx)("h2",{id:"update-shares-for-components"},"Update shares for components"),(0,s.mdx)("p",null,"Set the shares for one or more components. This endpoint overwrites all existing shares for the component, meaning that existing shares are removed."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"PUT https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares")),(0,s.mdx)("p",null,"This API call requires a JSON request body that contains the components to update and the tags to set. For example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "{COMPONENT_TYPE}",\n    "componentId": "{ID}",\n    "shares": [\n      {\n        "shareId": 11684456,\n        "shareToId": 622291,\n        "shareToType": "user",\n        "componentType": "{COMPONENT_TYPE}",\n        "componentId": "{ID}",\n        "shareToDisplayName": null\n      }\n    ]\n  }\n]\n')),(0,s.mdx)("p",null,"For example, creates a share to segment with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"48372")," to user with ID ",(0,s.mdx)("inlineCode",{parentName:"p"},"622291"),". If there are any existing shares associated with this segment, those shares are lost."),(0,s.mdx)(i,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"request-6"},"Request"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X PUT "https://analytics.adobe.io/api/{GLOBALCOMPANYID}/componentmetadata/shares" \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {ACCESSTOKEN}\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'x-api-key: {CLIENTID}\' \\\n  -d \'[{"componentType": "segment",\n    "componentId": "48372",\n    "shares": [{\n        "shareId": 11684456,\n        "shareToId": 622291,\n        "shareToType": "user",\n        "componentType": "segment",\n        "componentId": "48372",\n        "shareToDisplayName": null\n      }]}]\'\n')),(0,s.mdx)("h4",{id:"response-6"},"Response"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "componentType": "segment",\n    "componentId": "48372",\n    "shares": [\n      {\n        "shareToId": 622291,\n        "shareToType": "user",\n        "accessLevel": null\n      }\n    ],\n    "status": {\n      "success": true\n    }\n  }\n]\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-componentmetadata-shares-md-f16af832cf18cecb91f0.js.map