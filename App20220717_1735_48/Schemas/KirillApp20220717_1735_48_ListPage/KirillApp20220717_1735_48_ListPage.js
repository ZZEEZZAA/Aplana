 define("KirillApp20220717_1735_48_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[{
			"operation": "merge",
			"name": "DataTable",
			"values": {
				"columns": [
					{
						"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
						"code": "PDS_KirillName",
						"caption": "#ResourceString(PDS_KirillName)#",
						"dataValueType": 1
					},
					{
						"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
						"code": "PDS_CreatedOn",
						"caption": "#ResourceString(PDS_CreatedOn)#",
						"dataValueType": 7
					},
					{
						"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
						"code": "PDS_CreatedBy",
						"caption": "#ResourceString(PDS_CreatedBy)#",
						"dataValueType": 10
					},
				],
				"primaryColumnName": "PDS_Id",
				"paginationChange": {
					"request": "crt.LoadDataRequest",
					"params": {
						"dataSourceName": "PDS",
						"parameters": []
					}
				}
			}
		}]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"isCollection": true,
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						}
					}, 
					"viewModelConfig": {
						"attributes": {
							"PDS_Id": {
								"modelConfig": {
									"path": 'PDS.Id',
								}
							},
							"PDS_KirillName": {
								"modelConfig": {
									"path": "PDS.KirillName"
								}
							},
							"PDS_CreatedOn": {
								"modelConfig": {
									"path": "PDS.CreatedOn"
								}
							},
							"PDS_CreatedBy": {
								"modelConfig": {
									"path": "PDS.CreatedBy"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "KirillApp20220717_1735_48"
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/
	};
});
