import React from 'react';
import { Table } from 'tdesign-mobile-react';

const data = [];
const total = 10;
for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    applicant: ['内容', '内容', '内容'][i % 3],
    status: ['内容', '内容', '内容'][i % 3],
    channel: ['内容', '内容', '内容'][i % 3],
    detail: {
      email: ['内容', '内容', '内容'][i % 3],
    },
  });
}

const columns = [
  { colKey: 'applicant', title: '标题' },
  {
    colKey: 'status',
    title: '标题',
  },
  { colKey: 'channel', title: '标题' },
  { colKey: 'detail.email', title: '标题', ellipsis: true },
];

export function StripeExample() {
  return (
    <div style={{ margin: '16px 16px 0' }}>
      <Table columns={columns} data={data} rowKey="index" showHeader stripe maxHeight={400}></Table>
    </div>
  );
}
