/*global Ext:false */
Ext.application({
    launch: function () {
        var contactForm = Ext.create('Ext.form.FormPanel', {
            fullscreen: true,
            items: [{
                xtype: 'titlebar',
                title: 'Iniciar Sesion',
                docked: 'bottom',
                style: 'background:red'
            }, {
                xtype: 'fieldset',
                items: [{
                    xtype: 'textfield',
                    name: 'fname',
                    label: 'Nombre de Usuario:'
                }, {
                    xtype: 'passwordfield',
                    name: 'lname',
                    label: 'Contraseña:'
                }] // items
            }, {
                xtype: 'toolbar',
                layout: {
                    pack: 'center'
                }, // layout
                ui: 'plain',
                items: [{
                    xtype: 'button',
                    text: 'Reset',
                    ui: 'decline',
                    handler: function (btn, evt) {
                        Ext.Msg.confirm('', 'AEstas seguro que deseas resetear el formulario?', function (btn) {
                            if (btn === 'yes') {
                                contactForm.setValues({
                                    fname: '',
                                    lname: ''
                                }); // contactForm()
                            } // switch
                        }); // confirm()
                    }
                }, {
                    xtype: 'button',
                    text: 'Submit',
                    ui: 'confirm',
                    handler: function (btn, evt) {
                        var values = contactForm.getValues();
                        Ext.Msg.alert('Welcome', Ext.String.format('{0} {1}', values.fname, values.lname));
                    } // handler
                }] // items (toolbar)
            }] // items (formpanel)
        }); // create()
    } // launch
}); // application()
