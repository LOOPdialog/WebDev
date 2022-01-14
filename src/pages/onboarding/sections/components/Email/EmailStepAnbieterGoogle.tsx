import React from 'react';

const EmailStepAnbieterGoogle = ({ classes }: { classes: { [key: string]: string } }): React.ReactElement => {
  return (
    <div className={classes.EmailStepAnbieterGoogle}>
      <div className={classes.EmailStepAnbieterGoogleIframe}>
        <iframe src="/"></iframe>
      </div>
    </div>
  );
};

export default EmailStepAnbieterGoogle;
