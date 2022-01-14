import { IFormRenderData } from '~/src/components/formSendUsMessage';

export const formRenderDataLoginPage: Array<IFormRenderData> = [
  {
    placeholder: 'E-Mail',
    type: 'input',
    itemName: 'email',
    // titleName: 'Username',
    rules: [
      {
        required: true,
        message: 'Email doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Passwort',
    type: 'password',
    itemName: 'password',
    // titleName: 'Password',
    // readyIcon: true,
    rules: [
      {
        required: true,
        message: 'Password has be required'
      },
      {
        min: 6,
        message: 'Min length 6'
      }
    ]
  }
];

export const formDataOnboardingEmailStepAnbieterOfficePage: Array<IFormRenderData> = [
  {
    placeholder: 'Benutzername',
    type: 'input',
    itemName: 'email',
    labelName: 'Ihre Zugangsdaten',
    rules: [
      {
        required: true,
        message: 'Benutzername doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Passwort',
    type: 'password',
    itemName: 'password',
    rules: [
      {
        required: true,
        message: 'Password has be required'
      },
      {
        min: 6,
        message: 'Min length 6'
      }
    ]
  }
];

export const formDataOnboardingEmailStepAnbieterAndererPage: Array<IFormRenderData> = [
  {
    placeholder: 'E-Mail-Adresse',
    type: 'input',
    itemName: 'email',
    labelName: 'E-Mail Adresse',
    rules: [
      {
        required: true,
        message: 'E-Mail doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Passwort',
    type: 'password',
    itemName: 'password',
    rules: [
      {
        required: true,
        message: 'Password has be required'
      },
      {
        min: 6,
        message: 'Min length 6'
      }
    ]
  },
  {
    placeholder: 'IMAP-Server',
    type: 'input',
    itemName: 'imapServer',
    labelName: 'Eingangsserver',
    rules: [
      {
        required: true,
        message: 'IMAP-Server doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Sicherheitstyp',
    type: 'input',
    itemName: 'eingangsserverSicherheitstyp',
    rules: [
      {
        required: true,
        message: 'Sicherheitstyp has be required'
      }
    ]
  },
  {
    placeholder: 'Port',
    type: 'input',
    itemName: 'eingangsserverPort',
    rules: [
      {
        required: true,
        message: 'Port has be required'
      }
    ]
  },
  {
    placeholder: 'SMTP-Server',
    type: 'input',
    itemName: 'smtpServer',
    labelName: 'Ausgangsserver',
    rules: [
      {
        required: true,
        message: 'SMTP-Server doesn’t exist'
      }
    ]
  },
  {
    placeholder: 'Sicherheitstyp',
    type: 'input',
    itemName: 'ausgangsserverSicherheitstyp',
    rules: [
      {
        required: true,
        message: 'Sicherheitstyp has be required'
      }
    ]
  },
  {
    placeholder: 'Port',
    type: 'input',
    itemName: 'ausgangsserverPort',
    rules: [
      {
        required: true,
        message: 'Port has be required'
      }
    ]
  }
];
