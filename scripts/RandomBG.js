if(!window.isBanter) {
  const images = [
    'https://firer.at/files/FireRat-Transparentv3.webp',
    'https://firer.at/files/FireRat-Logo-V2.png',
    'https://firer.at/files/FireRat-Zaleska.png',
    'https://firer.at/files/DALL_E_2024-10-17_11.30.56.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.13.19.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.12.23.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.10.56.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.09.14.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.08.00.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.07.15.webp',
    'https://firer.at/files/DALL_E_2024-10-20_22.16.14.webp',
    'https://firer.at/files/DALL_E_2024-10-20_22.21.40.webp',
    'https://firer.at/files/DALL_E_2024-10-20_22.21.01.webp',
    'https://firer.at/files/DALL_E_2024-10-20_22.19.56.webp',
    'https://firer.at/files/DALL_E_2024-10-20_20.14.31.webp',
    'https://firer.at/files/FireRat-(1).jpeg',
    'https://firer.at/files/FireRat-(2).jpeg',
    'https://firer.at/files/FireRat-(3).jpeg',
    'https://firer.at/files/FireRat-(4).jpeg',
    'https://firer.at/files/FireRat-(5).jpeg',
    'https://firer.at/files/FireRat-(6).jpeg',
    'https://firer.at/files/FireRat-(7).jpeg',
    'https://firer.at/files/FireRat-(8).jpeg',
    'https://firer.at/files/FireRat-(9).jpeg',
    'https://firer.at/files/FireRat-(10).jpeg',
    'https://firer.at/files/FireRat-(11).jpeg',
    'https://firer.at/files/FireRat-(12).jpeg',
    'https://firer.at/files/FireRat-(13).jpeg',
    'https://firer.at/files/FireRat-(14).jpeg',
    'https://firer.at/files/FireRat-(15).jpeg',
    'https://firer.at/files/FireRat-(16).jpeg',
    'https://firer.at/files/FireRat-(17).jpeg',
    'https://firer.at/files/FireRat-(18).jpeg',
    'https://firer.at/files/FireRat-(19).jpeg',
    'https://firer.at/files/FireRat-(20).jpeg',
    'https://firer.at/files/FireRat-(21).jpeg',
    'https://firer.at/files/FireRat-(22).jpeg',
    'https://firer.at/files/FireRat-(23).jpeg',
    'https://firer.at/files/FireRat-(24).jpeg',
    'https://firer.at/files/FireRat-(25).jpeg',
    'https://firer.at/files/FireRat-(26).jpeg',
    'https://firer.at/files/FireRat-(27).jpeg',
    'https://firer.at/files/FireRat-(28).jpeg',
    'https://firer.at/files/FireRat-(29).jpeg',
    'https://firer.at/files/FireRat-(30).jpeg',
    'https://firer.at/files/FireRat-(31).jpeg',
    'https://firer.at/files/FireRat-(32).jpeg',
    'https://firer.at/files/FireRat-(33).jpeg',
    'https://firer.at/files/FireRat-(34).jpeg',
    'https://firer.at/files/FireRat-(35).jpeg',
    'https://firer.at/files/FireRat-(36).jpeg',
    'https://firer.at/files/FireRat-(37).jpeg',
    'https://firer.at/files/FireRat-(38).jpeg',
    'https://firer.at/files/FireRat-(39).jpeg',
    'https://firer.at/files/FireRat-(40).jpeg',
    'https://firer.at/files/FireRat-(41).jpeg',
    'https://firer.at/files/FireRat-(42).jpeg',
    'https://firer.at/files/FireRat-(43).jpeg',
    'https://firer.at/files/FireRat-(44).jpeg',
    'https://firer.at/files/FireRat-(45).jpeg',
    'https://firer.at/files/FireRat-(46).jpeg',
    'https://firer.at/files/FireRat-(47).jpeg',
    'https://firer.at/files/FireRat-(48).jpeg',
    'https://firer.at/files/FireRat-(49).jpeg',
    'https://firer.at/files/FireRat-(50).jpeg',
    'https://firer.at/files/FireRat-(51).jpeg',
    'https://firer.at/files/FireRat-(52).jpg',
    'https://firer.at/files/FireRat-(53).jpg',
    'https://firer.at/files/FireRat-(54).jpg',
    'https://firer.at/files/FireRat-(55).jpg',
    'https://firer.at/files/FireRat-(56).jpg',
    'https://firer.at/files/FireRat-(57).jpg',
    'https://firer.at/files/FireRat-(58).jpg',
    'https://firer.at/files/FireRat-(59).jpg',
    'https://firer.at/files/FireRat-(60).jpg',
    'https://firer.at/files/FireRat-(61).jpg',
    'https://firer.at/files/FireRat-(62).jpg',
    'https://firer.at/files/FireRat-(63).jpg',
    'https://firer.at/files/FireRat-(64).jpg',
    'https://firer.at/files/FireRat-(65).jpg',
    'https://firer.at/files/FireRat-(66).jpg',
    'https://firer.at/files/FireRat-(67).jpg',
    'https://firer.at/files/FireRat-(68).jpg',
    'https://firer.at/files/FireRat-(69).jpg',
    'https://firer.at/files/FireRat-(70).jpg'
  ];

  function setRandomBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.documentElement.style.setProperty( '--background-image', `url('${randomImage}')`);
  };

  setRandomBackground();
}