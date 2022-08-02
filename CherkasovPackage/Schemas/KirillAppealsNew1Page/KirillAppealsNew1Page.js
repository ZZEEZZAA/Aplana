define("KirillAppealsNew1Page", [], function() {
	return {
		entitySchemaName: "KirillAppealsNew",
		attributes: {
            "KirillAppealsNewCommServiceCatalog": {
                "dataValueType": Terrasoft.DataValueType.LOOKUP,
                "lookupListConfig": {
                    "filters": [
                        function() {
							var IdCategoryService = this.get("KirillAppealsNewPodrazelUslugi");
                            var filterGroup = Ext.create("Terrasoft.FilterGroup");
							if (IdCategoryService){
                            filterGroup.add("IsActiveService",
                                Terrasoft.createColumnFilterWithParameter(
                                    Terrasoft.ComparisonType.EQUAL,
                                    "[KirillCatalogUslug:Id:Id].KirillCatalogUslugPodrazdelUslugi",
                                    IdCategoryService.value));
                            return filterGroup;}
							
							return filterGroup;
                        }
                    ]
                }
            }
			
			
			
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "KirillAppealsNewFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "KirillAppealsNew"
				}
			},
			"VisaDetailV28723b177": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "KirillAppealsNewVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "KirillAppealsNew"
				}
			},
			"KirillSchemae631789aDetailf2179186": {
				"schemaName": "KirillSchemae631789aDetail",
				"entitySchemaName": "KirillTicketsAppeal",
				"filter": {
					"detailColumn": "KirillTicketsAppealColumn",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"KirillAppealsNewResponsible": {
				"5ebbf918-9b2b-40a4-9720-0f15dde2914d": {
					"uId": "5ebbf918-9b2b-40a4-9720-0f15dde2914d",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewState"
							},
							"rightExpression": {
								"type": 0,
								"value": "3bce1037-4693-4e8b-bcf9-49c6698dec6b",
								"dataValueType": 10
							}
						}
					]
				},
				"2fdf4419-9ed8-4070-8462-e811cb275848": {
					"uId": "2fdf4419-9ed8-4070-8462-e811cb275848",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			},
			"KirillAppealsNewComment": {
				"4b1a80d3-6424-416f-8aeb-7acf582246dc": {
					"uId": "4b1a80d3-6424-416f-8aeb-7acf582246dc",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewCommServiceCatalog"
							}
						}
					]
				},
				"b49292a1-ed32-4897-8328-aa134e1f9639": {
					"uId": "b49292a1-ed32-4897-8328-aa134e1f9639",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"KirillAppealsNewCheck": {
				"b7ee8cdc-526e-48db-b9b5-4cdc956a1b8a": {
					"uId": "b7ee8cdc-526e-48db-b9b5-4cdc956a1b8a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			},
			"KirillAppealsNewCommServiceCatalog": {
				"514c0206-bb3b-426f-b38e-a856fa64245a": {
					"uId": "514c0206-bb3b-426f-b38e-a856fa64245a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewState"
							},
							"rightExpression": {
								"type": 0,
								"value": "e758bc93-2fbb-4b92-b5a0-84252a9aac83",
								"dataValueType": 10
							}
						}
					]
				},
				"f848f25b-b124-4a90-a0ba-75d2a079a9d2": {
					"uId": "f848f25b-b124-4a90-a0ba-75d2a079a9d2",
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
				},
				"458c7b20-c1e9-40fc-9a96-0648d3aac170": {
					"uId": "458c7b20-c1e9-40fc-9a96-0648d3aac170",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewCheck"
							},
							"rightExpression": {
								"type": 0,
								"value": false,
								"dataValueType": 12
							}
						}
					]
				},
				"13550432-428f-40b4-8c8f-61046b688fc8": {
					"uId": "13550432-428f-40b4-8c8f-61046b688fc8",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewPodrazelUslugi"
							}
						}
					]
				}
			},
			"KirillAppealsNewStartTime": {
				"1c6a755b-de51-4828-a5f0-1428a5eaa5a3": {
					"uId": "1c6a755b-de51-4828-a5f0-1428a5eaa5a3",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewStartTime"
							}
						}
					]
				}
			},
			"KirillAppealsNewState": {
				"92fdee80-c79f-4e59-b4d7-8c1b5efa2a94": {
					"uId": "92fdee80-c79f-4e59-b4d7-8c1b5efa2a94",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewState"
							},
							"rightExpression": {
								"type": 0,
								"value": "e758bc93-2fbb-4b92-b5a0-84252a9aac83",
								"dataValueType": 10
							}
						}
					]
				},
				"513564cf-e5c5-4393-afc3-313c5c24bd5a": {
					"uId": "513564cf-e5c5-4393-afc3-313c5c24bd5a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewState"
							},
							"rightExpression": {
								"type": 0,
								"value": "6bfe5ecc-64c0-4a80-918c-c296cf1b4f2f",
								"dataValueType": 10
							}
						}
					]
				},
				"2d5c2879-bc06-42f0-ac37-377726981b43": {
					"uId": "2d5c2879-bc06-42f0-ac37-377726981b43",
					"enabled": true,
					"removed": true,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "KirillAppealsNewState"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewCode"
							}
						}
					]
				},
				"5993ceb6-b284-4fd0-8c88-815c83c68336": {
					"uId": "5993ceb6-b284-4fd0-8c88-815c83c68336",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Name",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "Новый",
					"dataValueType": 1
				}
			},
			"KirillAppealsNewPodrazelUslugi": {
				"93ebcf95-d0af-4998-8886-77492e16e6cf": {
					"uId": "93ebcf95-d0af-4998-8886-77492e16e6cf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "KirillAppealsNewPodrazelUslugi"
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "STRING7f128a93-12e3-4900-8e0c-f518c3ebee5c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewCode",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KirillName4daf5f8e-950f-4ffc-ae77-cd3f479ab4dd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedBy5c216345-4234-43c0-aed6-c0433eb437c1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CreatedBy",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPc3e51398-606a-446c-83d6-d2f1dd4a6479",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewState",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPe04969d5-81d1-401d-bfdb-691063c40ebe",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewResponsible",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP92d96de1-f20a-4989-a39b-584ac9081b5f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewPodrazelUslugi",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "KirillAppealsNewCommServiceCatalogb60dcd3f-a42c-46cb-b229-803aa9b07cc4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewCommServiceCatalog"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRINGe8cbd202-9993-434d-a0a4-42adab270557",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "BOOLEANdc192b61-8812-47c9-8728-33825f5e4b57",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "KirillAppealsNewCheck",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGroup6eaa0e50",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabGroup6eaa0e50GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTabGridLayout795bd865",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "NotesAndFilesTabGroup6eaa0e50",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedOnf3ffe3b8-e6dc-4d50-9898-c04fefef622a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayout795bd865"
					},
					"bindTo": "CreatedOn",
					"enabled": false
				},
				"parentName": "NotesAndFilesTabGridLayout795bd865",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATETIME08f8410d-b8e1-4b2c-90f0-b3a83dccb71c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "NotesAndFilesTabGridLayout795bd865"
					},
					"bindTo": "KirillAppealsNewStartTime",
					"enabled": true
				},
				"parentName": "NotesAndFilesTabGridLayout795bd865",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT6f4c8a4c-81d7-4302-9bb1-e2ffabcad3dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "NotesAndFilesTabGridLayout795bd865"
					},
					"bindTo": "KirillAppealsNewTIme",
					"enabled": false
				},
				"parentName": "NotesAndFilesTabGridLayout795bd865",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPdafe4bcb-bc34-4bbd-a92f-c5f2fa86bb77",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "NotesAndFilesTabGridLayout795bd865"
					},
					"bindTo": "KirillAppealsNewTimeUnits",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "NotesAndFilesTabGridLayout795bd865",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab71d44bddTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab71d44bddTabLabelTabCaption"
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
				"name": "Tab71d44bddTabLabelGroup8a141bf9",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab71d44bddTabLabelGroup8a141bf9GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab71d44bddTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab71d44bddTabLabelGridLayouta38bd1c9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab71d44bddTabLabelGroup8a141bf9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATe7bfec5e-22c1-4f2e-9bbd-1df7d53bd190",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab71d44bddTabLabelGridLayouta38bd1c9"
					},
					"bindTo": "KirillAppealsNewMostCost",
					"enabled": false
				},
				"parentName": "Tab71d44bddTabLabelGridLayouta38bd1c9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT5bb9be0e-79b9-4b0e-a8c6-21e47d2989af",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tab71d44bddTabLabelGridLayouta38bd1c9"
					},
					"bindTo": "KirillAppealsNewAverage",
					"enabled": false
				},
				"parentName": "Tab71d44bddTabLabelGridLayouta38bd1c9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT3fbb4028-9166-41d8-b79c-17613cb4bac0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab71d44bddTabLabelGridLayouta38bd1c9"
					},
					"bindTo": "KirillAppealsNewAll",
					"enabled": false
				},
				"parentName": "Tab71d44bddTabLabelGridLayouta38bd1c9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "KirillSchemae631789aDetailf2179186",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab71d44bddTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab9ec1fc3aTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "VisaDetailV28723b177",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab9ec1fc3aTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "move",
				"name": "TimelineTab",
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			}
		]/**SCHEMA_DIFF*/
	};
});
