define("KirillAppeal1MiniPage", [], function() {
	return {
		entitySchemaName: "KirillAppeal",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KirillInteger107c3d8b5-fcca-41ee-9113-4ddb10fd1c22",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "KirillInteger1"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KirillName72a81fed-7f62-46a9-b095-0d0f890b6802",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "KirillName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KirillLookup1b2508809-fafa-45a9-b34a-3bfc8d019cdb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "KirillLookup1"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "KirillLookup376fe0eaa-79ac-421e-86db-34a01759a3d1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "KirillLookup3"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "KirillDatetime18d1cda0a-ce49-49d9-9847-5896d0b12e13",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "KirillDatetime1"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CreatedOna72627d0-0daf-4502-901d-8977c61826fc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_DIFF*/
	};
});
