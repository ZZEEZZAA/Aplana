define("KirillSchema7c3e712bPage", [], function() {
	return {
		entitySchemaName: "KirillTicketsAppeal",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"KirillTicketsAppealCatalogUslug": {
				"ad4a82c7-0bd3-40b8-949f-3b5cf5f52a7d": {
					"uId": "ad4a82c7-0bd3-40b8-949f-3b5cf5f52a7d",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "KirillCatalogUslugSostoyanie",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "5104bc73-2b5d-43ca-9ec4-87f2ef02d531",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "KirillTicketsAppealOwner600601d0-163e-46f8-b832-fbe873da3763",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillTicketsAppealOwner"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KirillTicketsAppealCostea0f0b0c-174f-4e36-8aeb-74d418ba80fa",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillTicketsAppealCost"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KirillTicketsAppealCatalogUslug729e6931-bbeb-4064-a148-2cacc68215aa",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillTicketsAppealCatalogUslug",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KirillTicketsAppealCategory1e382680-f51b-4143-a8d5-d5048b25a749",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillTicketsAppealCategory",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "KirillTicketsAppealColumn838ec581-7a80-43e5-8021-b997faa04250",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillTicketsAppealColumn",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DATETIME43e1e82c-721b-4171-bdbb-8c5dd990bc54",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillDatetimeCheck",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_DIFF*/
	};
});
