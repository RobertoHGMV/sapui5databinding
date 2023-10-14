sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast",
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (Button, MessageToast, Text, JSONModel, XMLView, ResourceModel) {
	"use strict";

    // Anexa uma função anônima ao evento SAPUI5 'init'
    sap.ui.getCore().attachInit(function() {

        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/products.json");
        sap.ui.getCore().setModel(oProductModel, "products");

        // Cria JSON model de um objeto
        let oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "1 Any Lane",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            priceThreshold: 20,
            currencyCode: "EUR"
        });

        // this.getView().setModel(oModel);
        sap.ui.getCore().setModel(oModel, "modelo");

        var oResourceModel = new ResourceModel({
            bundleName: "sapDatabinding.i18n.i18n",
            suppertedLocales: ["", "en", "pt"],
            fallbackLocate: ""
        });

        // Assina o modelo de objeto com SAPUI5 core
        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // Mostra a view XML App
        var oView = new XMLView({
            viewName: "sapDatabinding.view.App"
        });

        // Registra a view com o administrador de mensagem
        sap.ui.getCore().getMessageManager().registerObject(oView);

        // Mostra a view XML App
        oView.placeAt("content");
    })
})