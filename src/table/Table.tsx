import React, { forwardRef } from 'react';
import type { TdBaseTableProps } from './type';
import useConfig from '../_util/useConfig';

type TableProps = TdBaseTableProps;

export const Table = forwardRef((props: TableProps, ref: React.Ref<HTMLTableElement>) => {
  const { classPrefix } = useConfig();

  props;
  ref;
  classPrefix;

  return <table ref={ref}></table>;
});
