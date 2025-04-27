/** @odoo-module **/

import { patchService } from "@web/core/utils/patch";
import { menuService } from "@web/webclient/menus/menu_service";

patchService(menuService, {
    async load() {
        const menus = await this._super(); // important to keep original behavior
        const appMenus = Object.values(menus).filter(m => m.parent_id === false);

        // Load web_icon_data manually
        const icons = await this.orm.searchRead('ir.ui.menu', [['parent_id', '=', false]], ['id', 'web_icon_data']);
        const iconMap = Object.fromEntries(icons.map(i => [i.id, i.web_icon_data]));

        appMenus.forEach(app => {
            app.web_icon_data = iconMap[app.id] || null;
        });

        return menus;
    },
});
