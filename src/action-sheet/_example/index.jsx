import React from 'react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';
import TDemoHeader from '../../../site/mobile/components/DemoHeader';
import List from './list';

import './style/index.less';

export default function Base() {
  return (
    <div className="tdesign-mobile-demo">
      <TDemoHeader title="ActionSheet 动作面板" summary="从底部弹出的模态框，提供和当前场景相关的操作动作，也支持提供信息输入和描述。" />
      <TDemoBlock title="01 类型" summary="列表型">
        <List />
      </TDemoBlock>
    </div>
  );
}
