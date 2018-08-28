import React from 'react';
import {Map,Marker} from 'react-amap'

const Example = () => {
  const key = '1927ab84465aec448189a31a21bd037a';
  const plugins = [
    'MapType',
    'Scale',
    'OverView',
    'ControlBar', // v1.1.0 新增
    {
      name: 'ToolBar',
      options: {
        visible: true,  // 不设置该属性默认就是 true
        onCreated(ins){
          console.log(ins);
        },
      },
    }
  ];
  // 85.0511287798
  let position =  {
    longitude: '',
    latitude: ''
  };
  const events = {
    created: (ins) => {console.log(ins);position.longitude = ins.F.center.N;position.latitude = ins.F.center.Q;},
    click: () => {console.log('You Clicked The Map')}
  };

  console.log(position);
  return (
    <div>

    </div>
  );
};

Example.propTypes = {
};

export default Example;
