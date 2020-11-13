$(document).ready(() => {
    let weapons = [
        {
            name: '44_Pistol',
            damage: 48,
            fireRate: 6,
            range: 1.19,
            accuracy: 66,
            weight: 4.2,
            value: 99
        },
        {
            name: '10mm_Pistol',
            damage: 44,
            fireRate: 36,
            range: 4.00,
            accuracy: 18,
            weight: 3.7,
            value: 80
        },
        {
            name: 'Rifle',
            damage: 88,
            fireRate: 16,
            range: 5.22,
            accuracy: 88,
            weight: 1.0,
            value: 120
        }
    ];

    $('#status_weapons a').on('mouseenter', (e) => {
        let item = weapons.filter((weapon) => weapon.name == e.currentTarget.className).pop();


        for (var key of Object.keys(item)) {
            let ele = $('.item-stats').find('.' + key)[0];
            if (!!ele) {
                ele.innerText = item[key]
            }


        }

    })

})