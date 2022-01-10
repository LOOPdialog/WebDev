/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { InfoIconSvg } from '../../../assets/icons/InfoIcon';
import { SearchOutlined } from '@ant-design/icons';
import { socialIconByName } from '../index';
import { Button, Col, Input, Row, Space } from 'antd';
import Highlighter from 'react-highlight-words';

export const getColumns: (classes: any, onOpen: any, setIdDealer: any) => any[] = (classes, onOpen, setIdDealer) => {
  let state: any = {
    searchText: '',
    searchedColumn: ''
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    state = {
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    };
  };

  const handleReset = clearFilters => {
    clearFilters();
    state.searchText = '';
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            state.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e): void => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              state = ({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => state.searchInput.select(), 100);
      }
    },
    render: text =>
      state.searchedColumn === dataIndex
        ? (<Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />)
        : (text)
  });
  return [
    {
      title: 'Vodafone ID',
      dataIndex: 'vodafoneId',
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      sorter: (a, b) => a.vodafoneId - b.vodafoneId,
      ...getColumnSearchProps('vodafoneId')
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
        }
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name - b.name,
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      ...getColumnSearchProps('name')
    },
    {
      title: 'Teammiglieder',
      dataIndex: 'teammiglieder',
      sorter: (a, b) => a.name.length - b.name.length,
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      ...getColumnSearchProps('teammiglieder')
    },
    {
      title: 'Standorte',
      dataIndex: 'standorte',
      sorter: (a, b) => a.teammiglieder - b.teammiglieder
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Aktiv',
          value: true
        },
        {
          text: 'Inaktiv',
          value: false
        }
      ],
      onFilter: (value: boolean, record) => {
        return record.status === value;
      },
      sorter: (a, b) => a.standorte.length - b.standorte.length,
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
      sorter: (a, b) => a.kanale.length - b.kanale.length,
      filters: [
        {
          text: 'Whatsapp',
          value: 'whatsapp'
        },
        {
          text: 'Google',
          value: 'google'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Facebook',
          value: 'facebook'
        }
      ],
      onFilter: (value: string, record) => record.kanale.indexOf(value) === 0,
      render: (kanale: string[]) => {
        const render = kanale?.map(item => {
          return socialIconByName[item] || null;
        }) || [];
        return (<Row gutter={8} justify="space-around">
          {(!render.length && '-') ||
            render.map((item, index) => {
              return (<Col key={`${index}_kanale`} span={4}>{item}</Col>);
            })}
        </Row>
        );
      }
    },
    {
      title: 'Nachrichten',
      dataIndex: 'nachrichten',
      sorter: (a, b) => a.nachrichten - b.nachrichten
    },
    {
      title: '',
      width: 50,
      key: 'info',
      fixed: 'right',
      render: info => (
        <div onClick={(_event) => {
          onOpen(prev => {
            return {
              ...prev,
              id: info.vodafoneId,
              firstClick: true,
              open: (info?.vodafoneId !== prev?.id ? prev.open : !prev.open) || !prev?.firstClick
            };
          }); setIdDealer({ company_id: `${info.vodafoneId}` });
        }}>
          <InfoIconSvg style={{ cursor: 'pointer' }} />
        </div>
      ),
      filterDropdown: () => (
        <div style={{ padding: 0 }}>
        </div>
      ),
      filterIcon: _filtered => <InfoIconSvg style={{
        transform: 'translateX(-26%)'
      }} />
    }
  ];
};
