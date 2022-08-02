define("ContactPageV2", [], function() {
	return {
		entitySchemaName: "Contact",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"KirillSchema5dc8a3f8Detail8254e3cb": {
				"schemaName": "KirillSchema5dc8a3f8Detail",
				"entitySchemaName": "KirillAppealsNew",
				"filter": {
					"detailColumn": "CreatedBy",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"enabled": true
				}
			},
			{
				"operation": "insert",
				"name": "Tab7f270cfcTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab7f270cfcTabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KirillSchema5dc8a3f8Detail8254e3cb",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab7f270cfcTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "RelationshipTabContainer",
				"values": {
					"order": 2
				}
			},
			{
				"operation": "merge",
				"name": "JobTabContainer",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "merge",
				"name": "HistoryTab",
				"values": {
					"order": 6
				}
			},
			{
				"operation": "merge",
				"name": "NotesAndFilesTab",
				"values": {
					"order": 7
				}
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 8
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTab",
				"values": {
					"order": 4
				}
			},
			{
				"operation": "merge",
				"name": "EngagementTab",
				"values": {
					"order": 5
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
