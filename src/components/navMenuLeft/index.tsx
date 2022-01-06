import { Image, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import LogoLoop from '../../assets/images/LogoLoop.png';
import { AnalyticsIconSvg } from '../../assets/icons/AnalyticsIcon';
import { TeamIconSvg } from '../../assets/icons/TeamIcon';
import { FileTextIconSvg } from '../../assets/icons/FileTextIcon';
import { ProcessIconSvg } from '../../assets/icons/ProcessIcon';
import { SettingsIconSvg } from '../../assets/icons/SettingsIcon';
import { PoweroffOutlined } from '@ant-design/icons';
import { UserIconSvg } from '../../assets/icons/UserIcon';
import { RouteNames, RouteNamesByLink } from '../../routes/index';

const NavMenuLeft = (): React.ReactElement => {
  const { Link } = Typography;
  const [currentPath, setCurrentPath] = useState('');
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);
  const dataRoute:
    Array<{
      element: React.ReactNode;
      name: string;
    }> = [
      {
        name: RouteNamesByLink[RouteNames.ANALYTICS],
        element: <AnalyticsIconSvg className={classes.linksItemChild} />
      },
      {
        name: RouteNamesByLink[RouteNames.DEALERS],
        element: <TeamIconSvg fill='#40929F' className={classes.linksItemChild} />
      },
      {
        name: RouteNamesByLink[RouteNames.QUICK_REPLY],
        element: <FileTextIconSvg className={classes.linksItemChild} />
      },
      {
        name: RouteNamesByLink[RouteNames.PROCESS],
        element: <ProcessIconSvg className={classes.linksItemChild} />
      }
    ];
  return (
    <div className={`${classes.navMenuLeftPage} shadow-1`}>
      <div className={classes.logo}><Image
        width={40}
        preview={false}
        src={LogoLoop}
      /></div>
      <div className={classes.links}>
        {
          dataRoute.map((item, index) => {
            const isActive = RouteNamesByLink[currentPath] === item.name || false;
            return (<div key={`${index}_routeNav`} className={`${classes.linksItem} ${isActive && classes.active}`}><Link>{item.element}</Link></div>);
          })
        }
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
    </div >
  );
};

export default NavMenuLeft;
