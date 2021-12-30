import { Image, Typography } from 'antd';
import React from 'react';
import classes from './index.module.scss';
import LogoLoop from '../../assets/images/LogoLoop.png';
import { AnalyticsIconSvg } from '../../assets/icons/AnalyticsIcon';
import { TeamIconSvg } from '../../assets/icons/TeamIcon';
import { FileTextIconSvg } from '../../assets/icons/FileTextIcon';
import { ProcessIconSvg } from '../../assets/icons/ProcessIcon';
import { SettingsIconSvg } from '../../assets/icons/SettingsIcon';
import { PoweroffOutlined } from '@ant-design/icons';
import { UserIconSvg } from '../../assets/icons/UserIcon';

const NavMenuLeft = (): React.ReactElement => {
  const { Link } = Typography;
  return (
    <div className={`${classes.navMenuLeftPage} shadow-1`}>
      <div className={classes.logo}><Image
        width={40}
        preview={false}
        src={LogoLoop}
      /></div>
      <div className={classes.links}>
        <div className={classes.linksItem}><Link><AnalyticsIconSvg className={classes.linksItemChild} /></Link></div>
        <div className={`${classes.linksItem} ${classes.active}`}><Link><TeamIconSvg fill='#40929F' className={classes.linksItemChild} /></Link></div>
        <div className={classes.linksItem}><Link><FileTextIconSvg className={classes.linksItemChild} /></Link></div>
        <div className={classes.linksItem}><Link><ProcessIconSvg className={classes.linksItemChild} /></Link></div>
      </div>
      <div className={classes.options}>
        <div className={classes.optionsItem}>
        <Link><SettingsIconSvg className={classes.linksItemChild} /></Link>
        </div>
        <div className={classes.optionsItem}>
        <Link><UserIconSvg className={classes.linksItemChild} /></Link>
          {/* <Image
            width={40}
            preview={false}
            src={UserAvatar}
          /> */}
        </div>
        <div className={classes.optionsItem}>
        <Link><PoweroffOutlined className={`${classes.poweroff} ${classes.linksItemChild}`} /></Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenuLeft;
