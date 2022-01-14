import React from 'react';
import classes from './dealersDetailSection.module.scss';
import { PhoneOutlined, RightOutlined } from '@ant-design/icons';
import { UserIconSvg } from '../../../assets/icons/UserIcon';
import LogoLoop from '../../../assets/images/LogoLoop.png';
import UserAvatar from '../../../assets/images/UserAvatar.png';
import { Image } from 'antd';
import { NavigateIconSvg } from '../../../assets/icons/NavigateIcon';
import { LocationIconSvg } from '../../../assets/icons/LocationIcon';

interface IDealersDetailSection {
  deal?: {
    id: string;
    standorte: number;
    status: string;
    lastDate: string;
    name: string;
  };
  person?: {
    fullname: string;
    birthday: string;
    address: string;
    firma: string;
    shops?: Array<{
      name: string;
      address: string;
    }>;
  };
}

const DealersDetailSection = ({ deal, person }: IDealersDetailSection): React.ReactElement => {
  return (
    <div className={classes.dealersDetailSectionPage}>
      <div className={classes.dealersDetailSectionPageHeader}>
        <div className={classes.dealersDetailHeaderTitle}>
          <div className={classes.dealersDetailHeaderTitleText}>{deal?.name || ''}</div>
          <div className={classes.dealersDetailHeaderTitlePhone}><PhoneOutlined /></div>
        </div>
        <div className={classes.dealersDetailHeaderBody}>
          <div>
            <span>ID</span>
            <span>{deal?.id || ''}</span>
          </div>
          <div>
            <span>Standorte</span>
            <span>{deal?.standorte || ''}</span>
          </div>
          <div>
            <span>Status</span>
            <span>{deal?.status || ''}Aktiv seit {deal?.lastDate || ''}</span>
          </div>
        </div>
      </div>
      <div className={classes.dealersDetailSectionPageCustomer}>
        <div className={classes.dealersDetailSectionPageCustomerHeader}>
          <span className={classes.icon}><UserIconSvg width={15} height={17} /></span>
          <span className={classes.text}>Anprechpartner</span>
        </div>
        <div className={classes.dealersDetailSectionPageCustomerInfo}>
          <div className={classes.dealersDetailSectionPageCustomerInfoText}>
            <div className={classes.title}>{person?.fullname || ''}</div>
            <div className={classes.preTitle}>Geburtsdatum</div>
            <div className={classes.text}>{person?.birthday || ''} (In Tagen)</div>
            <div className={classes.preTitle}>Adresse</div>
            <div className={classes.text}>{person?.address || ''}</div>
            <div className={classes.preTitle}>Firma</div>
            <div className={classes.text}>{person?.firma || ''}</div>
            <div className={classes.link}>Mehr Informationen<span className={classes.icon}><RightOutlined /></span></div>
          </div>
          <div className={classes.dealersDetailSectionPageCustomerInfoImg}>
            <Image
              width={60}
              preview={false}
              src={UserAvatar}
            />
          </div>
        </div>
      </div>
      <div className={classes.dealersDetailSectionPageLocation}>
        {
          person?.shops.map((item, index): React.ReactNode => (
            <div key={`${index}_person.shop`} className={classes.dealersDetailLocationItem}>
              <div className={classes.header}>
                <LocationIconSvg className={classes.leftIcon} width={15} height={18} />
                <span className={classes.text}>Standort</span>
                <NavigateIconSvg className={classes.rightIcon} width={16} height={16} />
              </div>
              <div className={classes.content}>
                <div className={classes.contentLeft}>
                  <span className={classes.title}>{item.name}</span>
                  <span className={classes.address}>{item.address}</span>
                </div>
                <div className={classes.contentRight}>
                  <Image
                    width={60}
                    preview={false}
                    src={LogoLoop}
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DealersDetailSection;
