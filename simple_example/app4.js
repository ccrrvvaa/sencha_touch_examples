/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.define('ListItem', {
             extend: 'Ext.data.Model',
             config: {
                 fields: [{
                     name: 'text',
                     type: 'string'
                 }/*,
                 {
                     name: 'idVenta',
                     type: 'number'
                 }*/]
             }
        });

         var store = Ext.create('Ext.data.TreeStore', {
             model: 'ListItem',
             defaultRootProperty: 'items',
             root: {
                 text: 'Groceries',
                 items: [{
                     text: 'Drinks',
                     items: [{
                         text: 'Coffee',
                         //idVenta: 1,
                         leaf: true
                     }, {
                         text: 'Espresso',
                         leaf: true
                     }, {
                         text: 'Redbull',
                         leaf: true
                     }, {
                         text: 'Coke',
                         leaf: true
                     }, {
                         text: 'Diet Coke',
                         leaf: true
                     }]
                 }, {
                     text: 'Fruit',
                     items: [{
                         text: 'Bananas',
                         leaf: true
                     }, {
                         text: 'Lemon',
                         leaf: true
                     }]
                 }]
             }
         });

        Ext.create('Ext.Carousel', {
            fullscreen: true,

            defaults: {
                styleHtmlContent: true
            },

            items: [
                {
                    xtype: 'list',
                    layout: 'fit',
                    store: {
                        fields: ['name', 'value'],
                        data: [
                            {name: 'Cowper', value: 1},
                            {name: 'Everett', value: 2},
                            {name: 'University', value: 3},
                            {name: 'Forest', value: 4}
                        ]
                    },

                    itemTpl: '{name} : {value}',

                    listeners: {
                        select: function(view, record) {
                            Ext.Msg.alert('Selected!', 'You selected ' + record.get('name') + ' : ' + record.get('value'));
                        }
                    }
                },
                {
                    xtype: 'nestedlist',
                    layout: 'card',
                    title: 'Groceries',
                    displayField: 'text',
                    store: store
                },
                {
                    html : 'Item 3'
                }
            ]
        });
    } // launch
}); // application()