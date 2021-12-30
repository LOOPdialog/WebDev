import React from 'react';
import { Table, Typography } from 'antd';
import { EmailIconSvg } from '../../assets/icons/EmailIcon';
import { GoogleIconSvg } from '../../assets/icons/GoogleIcon';
import { WhatsappIconSvg } from '../../assets/icons/WhatsappIcon';
import { FacebookIconSvg } from '../../assets/icons/FacebookIcon';
import classes from './index.module.scss';
import { getColumns } from './components/columnsData';
import { useQuery } from '@apollo/client';
// import COMPANY_SUCTOMERS from '../../gql/query/companyCustomers';
import LOGGED from '../../gql/query/loggedUser';
import dataTableDeal from './dataTableDeal';

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
  // const { loading, error, data } = useQuery(COMPANY_SUCTOMERS, {
  //   variables: { company_id: '12312', errorPolicy: 'all' }
  // });
  const { loading, error, data } = useQuery(LOGGED, {
    variables: { company_id: '12312', errorPolicy: 'all' }
  });
  console.log(loading, error?.graphQLErrors, data);

  const dataL = dataTableDeal;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onChange(pagination, filters, sorter, extra) {
    // console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Table
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
        onRow={() => {
          return {
            // onClick: _event => { console.log(record, rowIndex, _event); onOpen(prev => !prev); }
          };
        }} />
    </div>
  );
};

export default TableDeal;
