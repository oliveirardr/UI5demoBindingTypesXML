sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.treinamento.demoBindingTypesXML.controller.Root", {
		
		onInit: function(oEvent){
		
			this._definirModeloLocalPadrao();
			
		},
		
		_definirModeloLocalPadrao: function(){
			
			var obj = {
				texto : "Texto Exemplo",
				objeto: {
					propriedade1: "Propriedade 1",
					propriedade2: 2
				},
				vetor: [
					{
						id: 1,
						texto: "Item 1"
					},
					{
						id: 2,
						texto: "Item 2"
					},
					{
						id: 3,
						texto: "Item 3"
					}
				]
			};
				
			var oLocalJSONModel = new JSONModel(obj);
			this.getView().setModel(oLocalJSONModel);
		}
		
	});
});