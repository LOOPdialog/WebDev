import React from 'react';
import classes from './dealersDetailSection.module.scss';
import { PhoneOutlined, RightOutlined } from '@ant-design/icons';
import { UserIconSvg } from '../../../assets/icons/UserIcon';
import LogoLoop from '../../../assets/images/LogoLoop.png';
import UserAvatar from '../../../assets/images/UserAvatar.png';
import { Image } from 'antd';
import { NavigateIconSvg } from '../../../assets/icons/NavigateIcon';
import { LocationIconSvg } from '../../../assets/icons/LocationIcon';

const DealersDetailSection = () => {
  return (
    <div className={classes.dealersDetailSectionPage}>
      <div className={classes.dealersDetailSectionPageHeader}>
        <div className={classes.dealersDetailHeaderTitle}>
          <div className={classes.dealersDetailHeaderTitleText}>Händlername</div>
          <div className={classes.dealersDetailHeaderTitlePhone}><PhoneOutlined /></div>
        </div>
        <div className={classes.dealersDetailHeaderBody}>
          <div>
            <span>ID</span>
            <span>457665468</span>
          </div>
          <div>
            <span>Standorte</span>
            <span>2</span>
          </div>
          <div>
            <span>Status</span>
            <span>Aktiv seit 24.04.2019</span>
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
            <div className={classes.title}>Marc Lobinger</div>
            <div className={classes.preTitle}>Geburtsdatum</div>
            <div className={classes.text}>14.03.1998 (In 65 Tagen)</div>
            <div className={classes.preTitle}>Adresse</div>
            <div className={classes.text}>Bergstraße 4<br />
              48064 Rostock</div>
            <div className={classes.preTitle}>Firma</div>
            <div className={classes.text}>Standort</div>
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
        <div className={classes.dealersDetailLocationItem}>
          <div className={classes.header}>
            <LocationIconSvg className={classes.leftIcon} width={15} height={18} />
            <span className={classes.text}>Standort</span>
            <NavigateIconSvg className={classes.rightIcon} width={16} height={16} />
          </div>
          <div className={classes.content}>
            <div className={classes.contentLeft}>
              <span className={classes.title}>Shop Bamberg</span>
              <span className={classes.address}>Hauptwachstr. 16<br />
                96047 Bamberg</span>
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
        <div className={classes.dealersDetailLocationItem}>
          <div className={classes.header}>
            <LocationIconSvg className={classes.leftIcon} width={15} height={18} />
            <span className={classes.text}>Standort</span>
            <NavigateIconSvg className={classes.rightIcon} width={16} height={16} />
          </div>
          <div className={classes.content}>
            <div className={classes.contentLeft}>
              <span className={classes.title}>Shop Erlangen</span>
              <span className={classes.address}>Hauptwachstr. 16<br />
                96047 Bamberg</span>
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
      </div>
    </div>
  );
};

export default DealersDetailSection;