/** Module to redirect the AppsMenu click to open Home Menu Apps directly */
odoo.define('ultimate_backend_theme.override_appswitcher', function (require) {
    "use strict";

    const { patch } = require('web.utils');
    const Navbar = require('web.NavBar');

    patch(Navbar.prototype, 'ultimate_backend_theme', {
        setup() {
            this._super.apply();
            this.appsMenuClick = this.appsMenuClick.bind(this);
        },

        appsMenuClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            this.env.services.action.doAction('base.action_open_home_menu');
        }
    });
});
