define("KirillAppealsNew29cecda9Section", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "KirillAppealsNew",
		
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		methods: {
			onPageClick: function() {
				var activeRowId = this.get("ActiveRow");
				var args = {
					sysProcessName: "KirillProcessAppealsControl",
					parameters: {
						OppID: activeRowId
					}
				};
				ProcessModuleUtilities.executeProcess(args);
				
			}
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"name": "NewButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
                    "caption": {bindTo: "Resources.Strings.NewButtonCaption"},
                    "classes": {"textClass": "actions-button-margin-right"},
					"click": {bindTo: "onPageClick"},
					"style": Terrasoft.controls.ButtonEnums.style.BLUE
				}
            }
		]/**SCHEMA_DIFF*/
	};
});