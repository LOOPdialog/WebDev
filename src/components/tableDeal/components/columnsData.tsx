import React from 'react';
import { InfoIconSvg } from '../../../assets/icons/InfoIcon';
import { SearchOutlined } from '@ant-design/icons';
import { socialIconByName } from '../index';
import { Col, Row } from 'antd';

export const getColumns: any = (classes, onOpen) => {
  return [
    {
      title: 'Vodafone ID',
      dataIndex: 'vodafoneId',
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      sorter: (a, b) => a.age - b.age
    },
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe'
        },
        {
          text: 'Jim',
          value: 'Jim'
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green'
            },
            {
              text: 'Black',
              value: 'Black'
            }
          ]
        }
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      // sortDirections: ['descend']
    },
    {
      title: 'Teammiglieder',
      dataIndex: 'teammiglieder',
      sorter: (a, b) => a.name.length - b.name.length,
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    },
    {
      title: 'Standorte',
      dataIndex: 'standorte',
      sorter: (a, b) => a.name.length - b.name.length
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.age - b.age,
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
        </div>
      ),
      render: (status) => {
        return (<Row gutter={8} justify="start">
          {status
            ? <div className={classes.activStatus}><span className={classes.icon}></span><span className={classes.text}>Aktiv</span></div>
            : <div className={classes.inactivStatus}><span className={classes.icon}></span><span className={classes.text}>Inaktiv</span></div>
          }
        </Row>
        );
      }
    },
    {
      title: 'Kanale',
      dataIndex: 'kanale',
      sorter: (a, b) => a.age - b.age,
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
        </div>
      ),
      render: (kanale: string[]) => {
        const render = kanale?.map(item => {
          return socialIconByName[item] || null;
        }) || [];
        return (<Row gutter={8} justify="space-around">
          {(!render.length && '-') ||
            render.map((item, index) => {
              return (<Col key={`${index}_kanale`} span={3}>{item}</Col>);
            })}
        </Row>
        );
      }
    },
    {
      title: 'Nachrichten',
      dataIndex: 'nachrichten',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
        </div>
      )
    },
    {
      title: '',
      dataIndex: 'info',
      render: _info => (
        <InfoIconSvg />
      ),
      filterDropdown: () => (
        <div style={{ padding: 0 }}>
        </div>
      ),
      filterIcon: _filtered => <InfoIconSvg />,
      onclick: () => { onOpen(prev => !prev); }
    }
  ];
};
