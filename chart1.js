Highcharts.setOptions({
    lang: {
        numericSymbols: [' tis.', ' mil.']
    },
    colors: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#fdbf6f','#e31a1c','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']
});

Highcharts.chart('graf1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Dotace poskytnuté nestátním neziskovým organizacím ze státního rozpočtu'
    },
    subtitle: {
        text: '84,8 % dotací pro neziskovky ze státního rozpočtu poskytla v roce 2016 dvě ministerstva: školství a sociálních věcí. Kliknutím do legendy můžete porovnávat údaje z posledních let.'
    },
    xAxis: {
        categories: [
            'Ministerstvo školství, mládeže a tělovýchovy',
            'Ministerstvo práce a sociálních věcí',
            'Ministerstvo kultury',
            'Ministerstvo zahraničních věcí',
            'Ministerstvo zemědělství',
            'Ministerstvo pro místní rozvoj',
            'Úřad vlády ČR',
            'Ministerstvo vnitra',
            'Ministerstvo zdravotnictví',
            'Ministerstvo průmyslu a obchodu',
            'Ministerstvo životního prostředí',
            'Technologická agentura ČR',
            'Ministerstvo obrany',
            'Všeobecná pokladní správa',
            'Ministerstvo spravedlnosti',
            'Grantová agentura ČR',
            'Akademie věd ČR',
            'Ministerstvo dopravy'
        ],
        crosshair: true
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Rada vlády pro nestátní neziskové organizace',
        href: 'https://www.vlada.cz/cz/ppov/rnno/zakladni-informace-767/'
    },
    yAxis: {
        labels: {
            formatter: function() {
                return this.value/1000000000;
            }
        },
        min: 0,
        title: {
            text: 'miliardy Kč'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' Kč'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        visible: false,
        name: '2010',
        data: [1855157000,2591022000,203142000,162304000,52448000,147580000,127437000,58857000,107935000,32471000,67181000,0,18702000,309650000,1950000,11186000,6918000,12660000]

    }, {
        visible: false,
        name: '2011',
        data: [2119639000,2209135000,250500000,229580000,53368000,174669000,127279000,39058000,67929000,48493000,48987000,0,18082000,313285000,1994000,25112000,5776000,7941000]

    }, {
        visible: false,
        name: '2012',
        data: [3024845000,2612951000,178152000,210092000,51248000,172376000,117298000,49432000,74414000,41404000,23179000,4144000,16831000,74637000,2111000,14728000,5600000,6790000]

    }, {
        visible: false,
        name: '2013',
        data: [3379035000,2465694000,177845000,255901000,63050000,161460000,125317000,62117000,81572000,60450000,19367000,9497000,11888000,102717000,4466000,17332000,6301000,7098000]

    }, {
        visible: false,
        name: '2014',
        data: [4862634000,3085831000,267057000,274434000,65837000,206412000,123083000,64508000,81079000,43104000,59275000,84999000,22562000,44197000,10505000,13550000,6650000,6612000]

    }, {
        visible: false,
        name: '2015',
        data: [4697988000,3510341000,299886000,302974000,103649000,210793000,130255000,69832000,89033000,26676000,69621000,118441000,26249000,60995000,12328000,20510000,6500000,9206000]

    }, {
        name: '2016',
        data: [5164943000,4050215000,334126000,317276000,209724000,199865000,153916000,105918000,104333000,48929000,46701000,45981000,28664000,23205000,13814000,9880000,8060000,7778000]

    }, {
        visible: false,
        name: '2017 (odhad)',
        data: [7838000000,5864000000,335000000,310000000,140000000,185000000,174000000,183000000,125000000,55000000,20000000,0,28000000,0,22000000,0,0,8000000]

    }]
});