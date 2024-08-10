import React from 'react';
import cx from 'classnames';

import type { ActionSheetProps } from './ActionSheet';

import { Button } from '../button';
import useConfig from '../_util/useConfig';

type ActionSheetListProps = {
  items: ActionSheetProps['items'];
  align: ActionSheetProps['align'];
};

export function ActionSheetList(props: ActionSheetListProps) {
  const { items, align } = props;
  const { classPrefix } = useConfig();
  const cls = `${classPrefix}-action-sheet`;

  return (
    <div className={cx(`${cls}__list`)}>
      {items?.map((it, idx) => (
        <Button
          key={idx}
          variant="text"
          block
          className={
            cx({
              [`${cls}__list-item`]: true,
              [`${cls}__list-item--left`]: align === 'left',
            })
          }
        >{it}</Button>
      ))}
    </div>
  );
}
