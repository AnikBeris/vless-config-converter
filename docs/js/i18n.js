const i18n = {
    currentLang: 'ru',
    translations: {
        ru: {
            subtitle: "Профессиональный конвертер VLESS-ссылок в конфигурацию Clash Meta",
            developer: "Разработчик: Anik Beris",
            input_title: "Настройки",
            vless_link: "VLESS ссылка",
            vless_placeholder: "vless://uuid@server:port?...",
            vless_hint: "Вставьте полную VLESS-ссылку",
            country_flag: "Флаг страны",
            no_flag: "Без флага",
            proxy_name: "Имя прокси",
            name_placeholder: "Введите название",
            config_type: "Тип конфигурации",
            proxy_only: "Только прокси",
            full_config: "Полный конфиг",
            convert_btn: "Конвертировать",
            preview_title: "Предпросмотр",
            server: "Сервер",
            port: "Порт",
            uuid: "UUID",
            security: "Безопасность",
            network: "Сеть",
            result_title: "Результат",
            copy_btn: "Копировать",
            copied: "Скопировано в буфер обмена!",
            footer_text: "2025 Андрей Аникин (Anik Beris). Все права защищены.",
            error_no_link: "Введите VLESS-ссылку",
            error_invalid_link: "Неверный формат VLESS-ссылки"
        },
        en: {
            subtitle: "Professional VLESS to Clash Meta config converter",
            developer: "Developer: Anik Beris",
            input_title: "Settings",
            vless_link: "VLESS Link",
            vless_placeholder: "vless://uuid@server:port?...",
            vless_hint: "Paste your full VLESS link",
            country_flag: "Country Flag",
            no_flag: "No flag",
            proxy_name: "Proxy Name",
            name_placeholder: "Enter name",
            config_type: "Config Type",
            proxy_only: "Proxy Only",
            full_config: "Full Config",
            convert_btn: "Convert",
            preview_title: "Preview",
            server: "Server",
            port: "Port",
            uuid: "UUID",
            security: "Security",
            network: "Network",
            result_title: "Result",
            copy_btn: "Copy",
            copied: "Copied to clipboard!",
            footer_text: "2025 Andrey Anikin (Anik Beris). All rights reserved.",
            error_no_link: "Please enter a VLESS link",
            error_invalid_link: "Invalid VLESS link format"
        }
    },

    init() {
        this.updatePage();
    },

    changeLanguage(lang) {
        this.currentLang = lang;
        this.updatePage();
    },

    t(key) {
        return this.translations[this.currentLang]?.[key] || key;
    },

    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
    }
};