const language = {
  en: {
    Dienste: 'Services',
    Projekte: 'Project',
    Kontakt: 'Contact',
  },
  de: {
    Dienste: 'Dienste',
    Projekte: 'Projekte',
    Kontakt: 'Kontakt',
  }
};

const language_main = {
  en: {
    aToZ: 'A to Z',
    // Hausreperatur: 'House Repair',
    // Mein_arbeit: 'See My Work',
    Dienste_card: 'Services',
    // slogan: 'Once popped never stopped again',
    Reno: 'Renovations and Repairs',
    Experience:'We offer you the service,',
    exceptional: 'that you miss with others.',
  },
  de: {
    aToZ: 'A to Z',
    // Hausreperatur: 'Haus Reperatur',
    // Mein_arbeit: 'Sehe mein Arbeit',
    Dienste_card: 'Dienste',
    // slogan: 'Einmal gepoppt nie mehr gestoppt',
    Reno: 'Renovierungen und Reparaturen',
    Experience:'Wir bieten Ihnen den Service,',
    exceptional: 'den Sie bei anderen vermissen.',
  }
};

const language_Dienste = {
  en: {
    Hausreperatur_Dienste: 'Hausreperatur',
    tapezieren: 'Wallpapering',
    Hausanstrich: 'Painting',
    Herstellung: 'Plaster',
    Rolllaeden: 'Kitchen assembly/repair',
    Kartonmoebeln: 'Laminate and tile work',
    bad: 'Bathroom renovation',
  },
  de: {
    Hausreperatur_Dienste: 'Hausreperatur',
    tapezieren: 'Tapezieren',
    Hausanstrich: 'Malern',
    Herstellung: 'Verputz',
    Rolllaeden: 'K&uuml;chenmontage/Reparatur',
    Kartonmoebeln: 'Laminat- und Fliesenarbeit',
    bad: 'Bad Renovierung',
  }
};

const language_Reparatur = {
  en: {
    Reparatur: 'Repair',
    Lampen: 'Production of lamps and other items',
    Fliesen: 'Construction of kitchens, tiles and laminate flooring and skirting boards',
    Anbringung: 'Application of plaster on the walls and other surfaces',
    Austausch: 'Repair or replacement of heaters',
    // Heizungen: 'Heating',
    Badezimmern: 'Bathroom repair or replacement',
  },
  de: {
    Reparatur: 'Reparatur',
    Lampen: 'Herstellung von Lampen und anderen Gegenständen',
    Fliesen: 'Bau von K&uuml;chen, Fliesen und Laminatb&ouml;den sowie Sockelleisten',
    Anbringung: 'Anbringung von Gips an den W&auml;nden und anderen Fl&auml;chen',
    Austausch: 'Reparatur oder Austausch von Heizungen',
    // Heizungen: 'Heizungen',
    Badezimmern: 'Reparatur oder Austausch von Badezimmern',
  }
};

const language_Abbau = {
  en: {
    Abbau: 'Dismantling',
    Montage: 'Disassembly and assembly of doors',
    Zaeunen: 'Building fences',
    Gartenhaeusern: 'Garden house construction',
  },
  de: {
    Abbau: 'Abbau',
    Montage: 'Abbau und Montage von T&uuml;ren',
    Zaeunen: 'Bau von Z&auml;unen',
    Gartenhaeusern: 'Bau von Gartenh&auml;usern',
  }
};

// const language_Projektte = {
//   en: {
//     Projektte: 'Projects',
//     Projektte_info: 'h',
//     mehr_info: 'More details'
//   },
//   de: {
//     Projektte: 'Projekte',
//     Projektte_info: 'he',
//     mehr_info: 'Mehr Details',
//   }
// };

const language_kontakt = {
  en: {
    KontaktInfo: 'Contact',
    tel_card: 'Phone',
    face_card: 'A to Z Renovations and Repairs',
    arbeitszeit: 'Working time',
    mo: 'Mo - Fr:&emsp;8:00 - 16:00',
    sa: 'Sa:&emsp;&emsp;&emsp; 10:00 - 15:00',
    so: 'Su:&emsp;&emsp;&emsp; Only by appointment',
  },
  de: {
    KontaktInfo: 'Kontakt',
    tel_card: 'Telefon',
    face_card: 'A bis Z Renovierungen und Reparaturen',
    arbeitszeit: 'Arbeitszeit',
    mo: 'Mo - Fr:&emsp;8:00 - 16:00',
    sa: 'Sa:&emsp;&emsp;&emsp; 10:00 - 15:00',
    so: 'So:&emsp;&emsp;&emsp; Nur nach Vereinbarung',
  }
};



function switchLanguage(lang) {
  //==================== Header
  document.getElementById('Dienste').innerHTML = language[lang].Dienste;
  // document.getElementById('Projekte').innerHTML = language[lang].Projekte;
  document.getElementById('Kontakt').innerHTML = language[lang].Kontakt;

  //==================== Main
  document.getElementById('aToZ').innerHTML = language_main[lang].aToZ;
  // document.getElementById('Mein_arbeit').innerHTML = language_main[lang].Mein_arbeit;
  // document.getElementById('Mein_arbeit').innerHTML = language_main[lang].Mein_arbeit;
  document.getElementById('Dienste_card').innerHTML = language_main[lang].Dienste_card;
  document.getElementById('Reno').innerHTML = language_main[lang].Reno;
  document.getElementById('Experience').innerHTML = language_main[lang].Experience;
  document.getElementById('exceptional').innerHTML = language_main[lang].exceptional;
  
  //==================== Dienste
  document.getElementById('Hausreperatur_Dienste').innerHTML = language_Dienste[lang].Hausreperatur_Dienste;
  document.getElementById('tapezieren').innerHTML = language_Dienste[lang].tapezieren;
  document.getElementById('Hausanstrich').innerHTML = language_Dienste[lang].Hausanstrich;
  document.getElementById('Herstellung').innerHTML = language_Dienste[lang].Herstellung;
  document.getElementById('Rolllaeden').innerHTML = language_Dienste[lang].Rolllaeden;
  document.getElementById('Kartonmoebeln').innerHTML = language_Dienste[lang].Kartonmoebeln;
  document.getElementById('bad').innerHTML = language_Dienste[lang].bad;

  //==================== Reperatur
  document.getElementById('Reparatur').innerHTML = language_Reparatur[lang].Reparatur;
  document.getElementById('Lampen').innerHTML = language_Reparatur[lang].Lampen;
  document.getElementById('Fliesen').innerHTML = language_Reparatur[lang].Fliesen;
  document.getElementById('Anbringung').innerHTML = language_Reparatur[lang].Anbringung;
  document.getElementById('Austausch').innerHTML = language_Reparatur[lang].Austausch;
  // document.getElementById('li_leitung Heizungen').innerHTML = language_Reparatur[lang].Heizungen;
  document.getElementById('Badezimmern').innerHTML = language_Reparatur[lang].Badezimmern;

  //==================== Abbau
  document.getElementById('Abbau').innerHTML = language_Abbau[lang].Abbau;
  document.getElementById('Montage').innerHTML = language_Abbau[lang].Montage;
  document.getElementById('Zaeunen').innerHTML = language_Abbau[lang].Zaeunen;
  document.getElementById('Gartenhaeusern').innerHTML = language_Abbau[lang].Gartenhaeusern;

  // //==================== Abbau
  // document.getElementById('Projektte').innerHTML = language_Projektte[lang].Projektte;
  // document.getElementById('Projektte_info').innerHTML = language_Projektte[lang].Projektte_info;
  // document.getElementById('mehr_info').innerHTML = language_Projektte[lang].mehr_info;

  //==================== Kontakt
  document.getElementById('KontaktInfo').innerHTML = language_kontakt[lang].KontaktInfo;
  document.getElementById('tel_card').innerHTML = language_kontakt[lang].tel_card;
  document.getElementById('face_card').innerHTML = language_kontakt[lang].face_card;
  document.getElementById('arbeitszeit').innerHTML = language_kontakt[lang].arbeitszeit;
  document.getElementById('mo').innerHTML = language_kontakt[lang].mo;
  document.getElementById('sa').innerHTML = language_kontakt[lang].sa;
  document.getElementById('so').innerHTML = language_kontakt[lang].so;  
}
