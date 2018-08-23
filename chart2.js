
Highcharts.chart('graf2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jak velkou část jejich rozpočtu tvořily v roce 2016 dotace nestátním neziskovým organizacím?'
    },
    xAxis: {
        categories: ["Úřad vlády ČR","Ministerstvo zahraničních věcí","Ministerstvo školství","Ministerstvo kultury","Technologická agentura ČR","Ministerstvo zdravotnictví","Ministerstvo pro místní rozvoj","Ministerstvo práce a sociálních věcí","Ministerstvo životního prostředí","Ministerstvo zemědělství","Grantová agentura ČR","Ministerstvo průmyslu a obchodu","Ministerstvo vnitra","Akademie věd ČR","Ministerstvo obrany","Ministerstvo spravedlnosti","Všeobecná pokladní správa","Ministerstvo dopravy"]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procenta'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} Kč</b> ({point.percentage:.1f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Rada vlády pro nestátní neziskové organizace, Monitor státní pokladny a vlastní výpočet',
        href: 'https://www.vlada.cz/cz/ppov/rnno/zakladni-informace-767/'
    },
    series: [{
        name: 'zbytek rozpočtu',
        data: [719467000,6756770000,135399350000,11436494000,2777406000,8057928000,16582364000,535114935000,8927568000,54779638000,3917564000,27686112000,60518717000,4769870000,45642153000,24478634000,132704013000,54400993000],
        color: '#BEBEBE'
    }, {
        name: 'dotace neziskovkám',
        data: [153916000,317276000,5164943000,334126000,45981000,104333000,199865000,4050215000,46701000,209724000,9880000,48929000,105918000,8060000,28664000,13814000,23205000,7778000],
        color: '#d52834'
    }]
});