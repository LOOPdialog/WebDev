import React from 'react';
import { Table } from 'antd';
import { EmailIconSvg } from '../../assets/icons/EmailIcon';
import { GoogleIconSvg } from '../../assets/icons/GoogleIcon';
import { WhatsappIconSvg } from '../../assets/icons/WhatsappIcon';
import { FacebookIconSvg } from '../../assets/icons/FacebookIcon';
import classes from './index.module.scss';
import { getColumns } from './components/columnsData';

interface ISocialIconByName {
  [key: string]: React.ReactNode;
}

export const socialIconByName: ISocialIconByName = {
  email: <EmailIconSvg width={20} height={20} />,
  google: <GoogleIconSvg width={20} height={20} />,
  whatsapp: <WhatsappIconSvg width={20} height={20} />,
  facebook: <FacebookIconSvg width={20} height={20} />
};

const TableDeal = ({ onOpen }: any): React.ReactElement => {
  const columns: any = getColumns(classes, onOpen);

  const data = [
    {
      key: '1',
      vodafoneId: 847563534,
      name: 'Handlername',
      teammiglieder: 'Stefan Richter',
      standorte: 1,
      status: true,
      kanale: ['whatsapp', 'google', 'email', 'facebook'],
      nachrichten: 1.230
    },
    {
      key: '2',
      vodafoneId: 847563532,
      name: 'Handlername',
      teammiglieder: 'Stefan Richter',
      standorte: 1,
      status: false,
      kanale: [],
      nachrichten: 542
    },
    {
      key: '3',
      vodafoneId: 847563531,
      name: 'Handlername',
      teammiglieder: 'Stefan Richter',
      standorte: 1,
      status: false,
      kanale: [],
      nachrichten: 542
    },
    {
      key: '4',
      vodafoneId: 847553231,
      name: 'Handlername',
      teammiglieder: 'Stefan Richter',
      standorte: 1,
      status: false,
      kanale: [],
      nachrichten: 542
    },
    {
      key: '5',
      vodafoneId: 847563231,
      name: 'Handlername',
      teammiglieder: 'Stefan Richter',
      standorte: 1,
      status: false,
      kanale: [],
      nachrichten: 542
    }
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  return (
    <div>
      <Table className={classes.tableRender} pagination={false} columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 800, y: 700 }} onRow={() => {
        return {
          onClick: _event => { onOpen(prev => !prev); }
        };
      }} />
    </div>
  );
};

export default TableDeal;
