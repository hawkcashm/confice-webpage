const lang = {
    en: {
        "menu-home": "Home",
        "menu-about": "About Us",
        "menu-portfolio": "Portfolio",
        "menu-contacts": "Contacts",
        "welcome-title": "Welcome",
        "welcome-text": "to the website of Confice Ltd., a company focused on development" +
            " and construction of individual technical solutions and putting them into production",
        "languageDropdownButton": "Language",
        "lang-cz": "Czech",
        "lang-en": "English",
        "h-services" : "Our Services",
        "h-design" : "Construction plan",
        "p-design" : "In 3D, fit to the customer's requirements.",
        "h-documentation" : "Documentation",
        "p-documentation" : "3D models, designs, service and user manuals.",
        "h-calc" : "Calculations",
        "p-calc" : "Static / Dynamic",
        "h-pnd" : "Production and delivery",
        "p-pnd" : "Arrangement of a complete production and delivery of the product as a whole.",
        "h-about": "About us",
        "p-about1": "Confice Ltd. was founded by three long-term partners after a number of successful projects" +
            " in the field of construction and production of single-purpose machines. The motive for its establishment" +
            " was to satisfy the increasing demand for our services, provided until now via unofficial business partnerships" +
            " of individuals, and their improvement.",
        "p-about2" : "Our vision is to establish ourselves on the market as a reliable and trustworthy company." +
            " We want to achieve this through an individual, focused approach to each project, fair negotiations " +
            "and carefully set pricing policy.",
        "h-contact" : "Contact us",
        "p-phonenum" : "+420 123 456 789",
        "p-mail" : "mail@email.cz",
        "p-address1" : "420 Yeet Street",
        "p-address2" : "Hradec Králové, Czech Republic, 500 00",
        "h-hours" : "Our hours",
        "p-hours1" : "Mon-Fri 0:00 am - 12:00 pm",
        "p-hours2" : "Sat-Sun Closed"
    },
    cz: {
        "menu-home": "Úvod",
        "menu-about": "O Nás",
        "menu-portfolio": "Portfolio",
        "menu-contacts": "Kontakty",
        "welcome-title": "Vítejte",
        "welcome-text": "na stránkách firmy Confice s.r.o., společnosti zaměřené na vývoj a konstrukci " +
            "individuálních technických řešení a na jejich a uvedení do výroby.",
        "languageDropdownButton": "Jazyk",
        "lang-cz": "Česky",
        "lang-en": "Anglicky",
        "h-services" : "Naše služby",
        "h-design" : "Konstrukční návrh",
        "p-design" : "Ve 3D, na míru dle požadavků zákazníka.",
        "h-documentation" : "Dokumentace",
        "p-documentation" : "3D modely, výkresy, údržbové a uživatelské manuály.",
        "h-calc" : "Výpočty",
        "p-calc" : "Statické / Dynamické",
        "h-pnd" : "Výroba a dodání",
        "p-pnd" : "Zařízení kompletní výroby a dodání objednaného zařízení jako celku.",
        "h-about": "O nás",
        "p-about1": "Společnost Confice s.r.o. vznikla za účasti tří dlouhodobých partnerů po řadě úspěšných projektů" +
            " v oblasti konstrukce a výroby jednoúčelových strojů. Motivem pro její založení bylo uspokojení zvyšující" +
            " se poptávky po službách, do té doby poskytovaných v rámci neoficiálního obchodního partnerství fyzických" +
            " osob, a jejich zkvalitnění.",
        "p-about2" : "Naší vizí je prosadit se na trhu jako spolehlivá důvěryhodná firma." +
            "Toho chceme docílit individuálním soustředěným přístupem k jednotlivým projektům," +
            "férovým jednáním a pečlivě nastavenou cenovou politikou.",
        "h-contact" : "Kontaktujte nás",
        "p-phonenum" : "+420 123 456 789",
        "p-mail" : "mail@email.cz",
        "p-address1" : "420 Yeet Street",
        "p-address2" : "Hradec Králové, Česká Republika, 500 00",
        "h-hours" : "Otevírací doba",
        "p-hours1" : "Po-Pá 00:00-24:00",
        "p-hours2" : "So-Ne Zavřeno"


    }
};

var getFirstBrowserLanguage = function () {
    var nav = window.navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
            language = nav.languages[i];
            if (language && language.length) {
                return language;
            }
        }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
            return language;
        }
    }

    return null;
};

function setLanguage(selected) {
    console.log("changing language");
    for (key in lang[selected]) {
        document.getElementById(key).innerHTML = lang[selected][key];
    }


}

function setFirstLanguage() {
    var preferred = getFirstBrowserLanguage();
    if (preferred.includes("en")) {
        setLanguage("en");
    } else if (preferred.includes("cz") || preferred.includes("cs") || preferred.includes("sk")) {
        setLanguage("cz");
    } else {
        setLanguage("en");//default
    }
}