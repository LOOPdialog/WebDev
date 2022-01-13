import React, { useMemo } from 'react';
import { Table, Typography } from 'antd';
import { EmailIconSvg } from '../../assets/icons/EmailIcon';
import { GoogleIconSvg } from '../../assets/icons/GoogleIcon';
import { WhatsappIconSvg } from '../../assets/icons/WhatsappIcon';
import { FacebookIconSvg } from '../../assets/icons/FacebookIcon';
import classes from './index.module.scss';
import { getColumns } from './components/columnsData';
import { useQuery } from '@apollo/client';
import COMPANY_CUSTOMERS from '../../gql/query/companyCustomers';
import { LoadingOutlined } from '@ant-design/icons';

interface ISocialIconByName {
  [key: string]: React.ReactNode;
}

export const socialIconByName: ISocialIconByName = {
  email: <EmailIconSvg width={20} height={20} />,
  google: <GoogleIconSvg width={20} height={20} />,
  whatsapp: <WhatsappIconSvg width={20} height={20} />,
  facebook: <FacebookIconSvg width={20} height={20} />
};

const TableDeal = ({ onOpen, setVariables }: any): React.ReactElement => {
  const columns: any = getColumns(classes, onOpen, setVariables);
  const { loading, data } = useQuery(COMPANY_CUSTOMERS, {
    variables: {
      company_id: process.env.REACT_APP_GRAPHQL_COMPANY_ID || ''
    }
  });
  const dataL = useMemo(() => {
    return data?.companyCustomers?.map((item, index) => { // eslint-disable-line @typescript-eslint/no-unsafe-return
      return {
        key: index,
        vodafoneId: item.id,
        name: item.customerType?.name || '',
        teammiglieder: `${item.profile.firstName} ${item.profile.lastName}`,
        standorte: item.opportunitiesCount,
        status: item.internalNotes?.read,
        kanale: item.profile?.channels?.map((item): string => `${item.type}`) || [],
        info: '1',
        nachrichten: item?.opportunities?.messagesCount || `${Number(Math.random() * 100).toFixed(2)}`
      };
    }) || [];
  }, [data]);

  function onChange(pagination, filters, sorter, extra) { // eslint-disable-line @typescript-eslint/no-unused-vars
    // console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      {loading &&
        <div className={classes.loading}><LoadingOutlined style={{ fontSize: 56 }} spin /></div>}
      {!loading && dataL && <Table
        rowClassName={(_record, index: number): string => index % 2 === 0 ? `${classes.tableRowLight}` : `${classes.tableRowDark}`}
        className={classes.tableRender}
        columns={columns}
        dataSource={dataL}
        onChange={onChange}
        scroll={{
          x: 1200
        }}
        components={{
          body: {
            cell: (cell) => {
              return (
                <td {...cell} >
                  <Typography.Paragraph>
                    {cell?.children?.map((item: string): string => item)}
                  </Typography.Paragraph>
                </td>);
            }
          }
        }}
        sticky
        bordered
        pagination={false}
      />}
    </div>
  );
};

export default TableDeal;
