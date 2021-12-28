import { Image } from 'antd';
import React from 'react';
import classes from './index.module.scss';
import LogoLoop from '../../assets/images/LogoLoop.png';
import UserAvatar from '../../assets/images/UserAvatar.png';
import { AnalyticsIconSvg } from '../../assets/icons/AnalyticsIcon';
import { TeamIconSvg } from '../../assets/icons/TeamIcon';
import { FileTextIconSvg } from '../../assets/icons/FileTextIcon';
import { ProcessIconSvg } from '../../assets/icons/ProcessIcon';
import { SettingsIconSvg } from '../../assets/icons/SettingsIcon';
import { PoweroffOutlined } from '@ant-design/icons';

const NavMenuLeft = (): React.ReactElement => {
  return (
    <div className={classes.navMenuLeftPage}>
      <div className={classes.logo}><Image
        width={40}
        preview={false}
        src={LogoLoop}
      /></div>
      <div className={classes.links}>
        <div className={classes.linksItem}><AnalyticsIconSvg /></div>
        <div className={`${classes.linksItem} ${classes.active}`}><TeamIconSvg fill='#40929F' /></div>
        <div className={classes.linksItem}><FileTextIconSvg /></div>
        <div className={classes.linksItem}><ProcessIconSvg /></div>
      </div>
      <div className={classes.options}>
        <div className={classes.optionsItem}>
          <SettingsIconSvg />
        </div>
        <div className={classes.optionsItem}>
          <Image
            width={40}
            preview={false}
            src={UserAvatar}
          />
        </div>
        <div className={classes.optionsItem}>
          <PoweroffOutlined className={classes.poweroff} />
        </div>
      </div>
    </div>
  );
};

export default NavMenuLeft;
