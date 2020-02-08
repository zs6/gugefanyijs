function googleTranslateElementInit() {
            new google.translate.TranslateElement({
            autoDisplay: true,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            multilanguagePage: true,
            pageLanguage: 'auto',
            includedLanguages: 'zh-CN,zh-TW'
            }, 'google_translate_element');
        }
