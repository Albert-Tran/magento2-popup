define(
    [
        'jquery',
        'Magento_Ui/js/modal/modal'
    ],
    function($) {
        "use strict";

        $.widget('AlbertTran.ModalPopup', {
            options: {
                modalForm: '#simple-modal_popup',
                modalButton: '#open-modal_popup'
            },
            _create: function() {
                this.options.modalOption = this.getModalOptions();
                this._bind();
            },

            getModalOptions: function() {
                return {
                    type: 'popup',
                    responsive: true,
                    clickableOverlay: false,
                    title: $.mage.__('Modal PopUp'),
                    modalClass: 'popup',
                    buttons: [{
                        text: $.mage.__('Click me to close!'),
                        class: '',
                        click: function () {
                            this.closeModal();
                        }
                    }]
                };
            },

            _bind: function(){
                var modalOption = this.options.modalOption;
                var modalForm = this.options.modalForm;

                $(document).on('click', this.options.modalButton, function(){
                    $(modalForm).modal(modalOption);
                    $(modalForm).trigger('openModal');
                });
            }
        });

        return $.AlbertTran.ModalPopup;
    }
);
