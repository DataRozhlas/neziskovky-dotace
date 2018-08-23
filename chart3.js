
Highcharts.chart('graf3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Do jakých oblastí směřovaly v roce 2016 dotace neziskovkám?'
    },
    xAxis: {
     categories: ['']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procenta'
        },
        reversedStacks: false
    },
    legend: {
        reversed: false
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} Kč</b> ({point.percentage:.1f}%)<br/>'
    },
    credits: {
    enabled: true,
        text: 'Zdroj: Rada vlády pro nestátní neziskové organizace',
        href: 'https://www.vlada.cz/cz/ppov/rnno/zakladni-informace-767/'
    },
    plotOptions: {
        series: {
            stacking: 'percent'
        }
    },
    series: [{
            name:'Sociální věci a politika zaměstnanosti',
            data:[4050215000]
        },
        {
            name:'Tělovýchova',
            data:[3103307000]
        },
        {
            name:'Vzdělávání a školské služby',
            data:[1463554000]
        },
        {
            name:'Výzkum a vývoj',
            data:[461978000]
        },
        {
            name:'Zahraniční pomoc a mezinárodní spolupráce',
            data:[346779000]
        },
        {
            name:'Kultura a ochrana památek',
            data:[344016000]
        },
        {
            name:'Zdravotnictví',
            data:[237811000]
        },
        {
            name:'Průmyslová a ostatní odvětví hospodářství',
            data:[211388000]
        },
        {
            name:'Zájmová činnost a rekreace',
            data:[204881000]
        },
        {
            name:'Zemědělství, lesní hospodářství',
            data:[200402000]
        },
        {
            name:'Civilní připravenost na krizové stavy, bezpečnost a veřejný pořádek',
            data:[59380000]
        },
        {
            name:'Ochrana životního prostředí',
            data:[53672000]
        },
        {
            name:'Státní moc, státní správa a územní samospráva',
            data:[48409000]
        },
        {
            name:'Bydlení, komunální služby a územní rozvoj',
            data:[29474000]
        },
        {
            name:'Finanční operace a ostatní činnosti',
            data:[23205000]
        },
        {
            name:'Požární ochrana a IZS',
            data:[21041000]
        }


    ]
});