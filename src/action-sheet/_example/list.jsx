import React, { useState } from 'react';
import { Button, ActionSheet } from 'tdesign-mobile-react';

export default function List() {
  const [visible, setVisible] = useState(false);

  return (
    <div className='action-sheet-demo'>
      <div className='action-sheet-demo-btns'>
        <Button block variant="outline" theme="primary" onClick={() => setVisible(true)}>常规列表型</Button>
        <Button block variant="outline" theme="primary">函数调用</Button>
        <Button block variant="outline" theme="primary">带描述列表型</Button>
        <Button block variant="outline" theme="primary">带图标列表型</Button>
        <Button block variant="outline" theme="primary">带徽标列表型</Button>
      </div>

      <ActionSheet
        visible={visible}
        items={['1', '2', '3']}
        onClose={() => {
          setVisible(false)
        }}
      >

      </ActionSheet>
    </div>
  )
}
