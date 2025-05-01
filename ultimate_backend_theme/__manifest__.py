{
    'name': 'Ultimate Backend Theme',
    'version': '18.0',
    'category': 'Themes/Backend',
    'summary': 'Ultra Modern Backend Theme with Dark/Light Mode, Sidebar Animation, Kanban Customization',
    'description': 'Complete redesign of Odoo Community backend: Light/Dark mode, animated sidebar, kanban customization, modern typography.',
    'author': 'InfoLabWeb',
    'website': "https://infolabweb.odoo.com",
    'price': '28',
    'currency': 'USD',
    'images': ['static/description/icon.gif'],
    'license': 'LGPL-3',
    'depends': ['web'],
    # 'data': [
    #     'views/assets.xml',
    # ],
    'assets': {
        'web.assets_backend': [
            'ultimate_backend_theme/static/src/css/backend_style.css',
            # 'ultimate_backend_theme/static/src/js/backend_style.js',
            # 'ultimate_backend_theme/static/src/xml/nav_menu.xml',
        ],
        # 'web.assets_common': [
        #     'ultimate_backend_theme/static/src/xml/nav_menu.xml',
        # ],
        'web.assets_frontend': [
            'ultimate_backend_theme/static/src/css/login_style.css',
        ],
    },
    'installable': True,
    'application': False,
}
