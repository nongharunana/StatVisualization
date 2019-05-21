// Radialize the colors
Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7
        },
        stops: [
          [0, color],
          [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
      };
    })
  });
  
  // Build the chart
  Highcharts.chart('pie', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'งบประมาณประจำจังหวัดมุกดาหาร'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          },
          connectorColor: 'silver'
        }
      }
    },
    series: [{
      name: 'คิดเป็น',
      data: [
        { name: 'กระทรวงคมนาคม', y: 675407603 },
        { name: 'กระทรวงเกษตรและสหกรณ์', y: 232009637 },
        { name: 'กระทรวงแรงงาน', y:11510037 },
        { name: 'กระทรวงกลาโหม', y: 19926432 },
        { name: 'กระทรวงการคลัง', y: 17469913 },
        { name: 'กระทรวงการท่องเที่ยวและกีฬา', y: 4956908 },
        { name: 'กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์', y: 214698988 },
        { name: 'กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม', y: 39807950 },
        { name: 'กระทรวงมหาดไทย', y: 884803397 },
        { name: 'กระทรวงยุติธรรม', y: 28605781 },
        { name: 'กระทรวงวัฒนธรรม', y: 2349800 },
        { name: 'กระทรวงศึกษาธิการ', y: 194486052 },
        { name: 'กระทรวงสาธารณสุข', y: 84372479 }
        
      ]
    }]
  });
  
  												


  												







