var teamData = [

    { id: 1, name: "Ing. Michal Kompan, PhD.", linkedin: null, github: null, role: "Mentor tímu",
      profileData: [ "Bakalársky projekt Softvérový návrh v medzinárodnej súťaži.",
                     "Diplomový projekt Personalizované odporúčanie zaujímavých textov.",
                     "Dizertačný projekt Group and single-user modelling for personalised recommendation.",
                     "Má skúsenosti s Ruby, Java, C, PostgreSQL, MySQL.",
                     "Zaujíma sa o Web a analýzu dát.",
                     "Baví ho šport a hudba." ]
    },
    
    { id: 2, name: "Bc. Dušan Cymorek", linkedin: null, github: null, role: "",
      profileData: [ "Bakalársky projekt Mobilné zariadenia a RFID technológia v knižnici (C++).",
                     "Má skúsenosti s programovacími jazykmi Java, C, C++ a SQL databázami.",
                     "Pracovné skúsenosti získava v oblasti správy Windows a sieťovej infraštruktúry.",
                     "Zaujíma sa o hardvér a správu systémov a sietí.",
                     "Vo voľnom čase rád číta knihy, sleduje filmy, hrá počítačové hry a sleduje dianie doma i vo svete." ]
    },
    
    { id: 3, name: "Bc. Peter Gašpar", linkedin: "https://www.linkedin.com/pub/peter-gašpar/91/968/95/", github: "petergaspar", role: "",
      profileData: [ "Bakalársky projekt Odporúčanie s využitím osobných vyjadrení.",
                     "Má pokročilé vedomosti a skúsenosti s programovacím jazykom PHP.",
                     "V práci nadobudol základné znalosti frameworku Nette.",
                     "Počas štúdia sa oboznámil najmä s jazykmi C, Java, SQL.",
                     "Zaujíma sa o webové technológie a tvorbu webových aplikácií.",
                     "Vo voľnom čase najviac obľubuje čítanie kníh, sledovanie komediálnych seriálov a šport."
                   ]
    },
    
    { id: 4, name: "Bc. Vlamidír Ľalík", linkedin: "https://www.linkedin.com/pub/vladim%C3%ADr-%C4%BEal%C3%ADk/90/a28/3b4", github: null, role: "",
      profileData: [ "Bakalársky projekt Klientská časť pre bezdrôtové ovládanie pohybu vo virtuálnom priestore Android(Java), Unity3D (C#).",
                     "Má skúsenosti Javou, Php frameworkom (codeigniter), MySQL databázami, C++.",
                     "Pracovné skúsenosti s webovými aplikáciami (Wordpress).",
                     "Zaujíma sa o tvorbu mobilných a webových aplikácií.",
                     "Baví ho snowboard, fitness, horský bicykel." ]
    },
    
    { id: 5, name: "Bc. Michal Polko", linkedin: null, github: null, role: "",
      profileData: [ "Bakalársky projekt Zobrazovanie svetelných polí v prostredí webového prehliadača.",
                     "Má pokročilé znalosti jazyka JavaScript, ktoré využíva pri vývoji webových aplikácií.",
                     "Má skúsenosti s jazykmi PHP, C, Java, Go a s prácou s WebGL/OpenGL.",
                     "Zaujíma sa o webové technológie a počítačovú grafiku.",
                     "Baví ho cestovanie po severských krajinách a sledovanie dobrých seriálov (t.j. Top Gear)." ]
    },
    
    { id: 6, name: "Bc. Slavomír Šárik", linkedin: "https://www.linkedin.com/pub/slavom%C3%ADr-%C5%A1%C3%A1rik/96/4b1/610", github: "slavosarik", role: "",
      profileData: [ "Bakalársky projekt Vytváranie databázových SQL dopytov v prirodzenom jazyku (Java, MySQL).",
                     "Pracovná skúsenosť v startupe s RubyOnRails.",
                     "Má skúsenosti s C, Javou, SQL databázami a webovými aplikáciami v Jave a RubyOnRails.",
                     "Zaujíma sa o mobilné technológie a hardware.",
                     "Baví ho jazda na motokárach a horskom bicykli."
                   ]
    },
    
    { id: 7, name: "Bc. Miroslav Šafárik", linkedin: null, github: null, role: "",
      profileData: [ "Bakalárske štúdium ukončil na matfyze v Bratislave vypracovaním bakalárskej práce na tému Informačný systém pre autoškoly. ",
                     "Pri jej tvorbe získal skúsenosti s frameworkom .NET (najmä s technológiami ADO.NET Entity Framework, WCF a WPF) a jazykom C#. ",
                     "Počas štúdia sa tiež oboznámil s jazykmi C++, Java, SQL, PL/SQL a PHP. ",
                     "Má základné skúsenosti s PHP frameworkom Yii a s Javou EE.",
                     "Má veľmi rád letectvo a lietadlá ako také.",
                     "Vo voľnom čase si rád pozrie dobrý film alebo seriál, prípadne si rád prečíta, čo sa deje v politike na Slovensku a vo svete."
                   ]
    },
    
    { id: 8, name: "Bc. Štefan Šmihla", linkedin: "https://www.linkedin.com/pub/%C5%A1tefan-%C5%A1mihla/85/628/352/en", github: null, role: "",
      profileData: [ "Bakalársky projekt Vplyv biometrických charakteristík používateľa na autentifikáciu pod smartfónovou platformou.", 
                     "Má skúsenosti Python, Ruby, Java, C, PostgreSQL, MySQL.", 
                     "Pracovné skúsenosti API & Integration developer (Python, MySQL) a APi community support.", 
                     "Zaujíma sa o bezpečnosť, integrovateľnosť, webový backend, mobilné technológie.", 
                     "Baví ho programovanie, hebrejčina, kryptografia, psychológia, turistika, lyžovanie, korčuľovanie a prechádzky po lese."
                   ]
    }

];

$(function() {
    
    //$('#teamModal').modal('show');
    //loadTeamProfile(0);
    
    fullfillProfiles();
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $(document).on('click',function() {
        $('.navbar-collapse').collapse('hide');
    });

});

function fullfillProfiles() {

    //user-desc-7
    $.each(teamData, function(key, data) {
        
        if (key == 0) {
            $("[rel='user-desc-"+key+"']").html(teamData[key].profileData[3].substr(0, 50)+"... <i class=\"fa fa-plus-circle\"></i>");
        }
        else {
            $("[rel='user-desc-"+key+"']").html(teamData[key].profileData[1].substr(0, 50)+"... <i class=\"fa fa-plus-circle\"></i>");
        }
        
    });

}

function loadTeamProfile(id, modal) {

    var modal = (typeof(modal) == "undefined" ? false:modal);
    
    if (modal) {
        $('#teamModal').modal('show');
    }
    
    $("[rel='team-user-picture']").attr("src", "assets/img/team/"+teamData[id].id+".jpg");
    $("[rel='team-user-name']").html(teamData[id].name);
    
    /*if (teamData[id].linkedin) {
        $("[rel='team-user-links'] .linkedin").show().attr("href", teamData[id].linkedin);
        $("[rel='team-user-links'] .linkedin span").html("Pracovný profil");
    }
    else {
        $("[rel='team-user-links'] .linkedin").hide();
    }
    
    if (teamData[id].github) {
        $("[rel='team-user-links'] .github").show().attr("href", "https://github.com/"+teamData[id].github);
        $("[rel='team-user-links'] .github span").html(teamData[id].github);
    }
    else {
        $("[rel='team-user-links'] .github").hide();
    }*/
    
    $("[rel='team-user-role']").html(teamData[id].role);
    
    $("[rel='team-user-data']").html("");
    
    $.each(teamData[id].profileData, function(key, value) {
        $("[rel='team-user-data']").append('<li>'+value+'</li>');
    });

}

jQuery(window).on('resize', function() {
    // Opravit poziciu aktivneho prvku menu po resize
    var activeItem = jQuery('.nav > .active');
    if (activeItem.length > 0) {
        var aM = jQuery('#active-menu');
        var offset = activeItem.offset();
        var width = activeItem.width();

        // Zmenit poziciu bez animacii
        aM.removeClass('transitions');
        aM.width(width).css('left', offset.left);
        aM.offset(); // Force reflow
        aM.addClass('transitions');
    }
});