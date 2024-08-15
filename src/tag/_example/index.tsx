import React from 'react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';
import CheckeableDemo from './checkable';
import ClosableDemo from './closable';
import SizeDemo from './size';
import './style/index.less';
import ThemeDemo from './theme';
import TypeDemo from './type';

export default function Base() {
  return (
    <div className="tdesign-mobile-demo">
      <h1 className="title">Tag 标签</h1>
      <p className="summary">用于表明主体的类目，属性或状态。</p>
      <TDemoBlock title="01 组件类型">
        <TypeDemo />
        <ClosableDemo />
        <CheckeableDemo />
      </TDemoBlock>
      <TDemoBlock title="02 组件状态">
        <ThemeDemo />
      </TDemoBlock>
      <TDemoBlock title="03 组件尺寸">
        <div className="group padding-bottom d-flex">
          <SizeDemo />
        </div>
      </TDemoBlock>
    </div>
  );
}
