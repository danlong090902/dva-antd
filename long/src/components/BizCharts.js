/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/6
 * Time: 14:23
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Chart, Axis, Tooltip, Geom,Legend} from "bizcharts";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      { year: "1991", value: 3 },
      { year: "1992", value: 4 },
      { year: "1993", value: 3.5 },
      { year: "1994", value: 5 },
      { year: "1995", value: 4.9 },
      { year: "1996", value: 6 },
      { year: "1997", value: 7 },
      { year: "1998", value: 9 },
      { year: "1999", value: 13 }
    ];
    const cols = {
      'value': { min: 0 ,alias: '数量'},
      'year': {range: [ 0 , 1] ,alias: '年份'}
    };
    return (
      <div>
        <Chart width={600} height={400} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Legend position="top" dy={-20} />
          <Tooltip crosshairs={{type : "y"}}/>
          <Geom type="line" position="year*value" size={2} />
          <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
        </Chart>
      </div>
    )
  }
}

export default Index
