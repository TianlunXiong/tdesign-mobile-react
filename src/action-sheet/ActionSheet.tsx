import React, { useState } from 'react';
import cx from 'classnames';

import type { TdActionSheetProps } from './type';

import { Popup } from '../popup';
import useConfig from '../_util/useConfig';

import { ActionSheetList } from './ActionSheetList';

export type ActionSheetProps = TdActionSheetProps;

export const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const { defaultVisible = false, items, visible, onClose, theme = 'list', align } = props;
  const { classPrefix } = useConfig();
  const cls = `${classPrefix}-action-sheet`;

  const [innerVisible, setInnerVisible] = useState(defaultVisible);

  const finalVisible = typeof visible !== 'undefined' ? visible : innerVisible;

  return (
    <Popup
      visible={finalVisible}
      className={cls}
      placement='bottom'
      onVisibleChange={(value) => {
        setInnerVisible(value);
        if (!value) onClose?.('overlay');
      }}
    >
      <div className={cx(`${cls}__content`)}>
        {
          theme === 'list'
            ? <ActionSheetList items={items} align={align} />
            : null
        }
      </div>
    </Popup>
  )
};

export default ActionSheet;
