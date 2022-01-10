export enum EFormDataKeywords {
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  USERNAME = 'username',
  UNKNOW = 'unknow'
}

// No function use in FormData - method delete all functions in rules

export const setRulesForm = <T>(fromData: T, itemName: {
  [key: string]: {
    validators: Array<{ [key: string]: any }>
  }
}): T | null => {
  const newForm = fromData;
  if (!Array.isArray(newForm) || !itemName) {
    return null;
  }
  for (const val of newForm) {
    if (itemName[val.itemName]) {
      const rules = [...val.rules];
      if (itemName[val.itemName]) {
        itemName[val.itemName].validators.forEach((valEl, index) => {
          rules[Number(val.rules.length) + index] = valEl.validator;
        });
      }
      val.rules = rules;
    } else if (val?.rules) {
      val.rules = val.rules.filter((element: any) => {
        return typeof element !== 'function';
      });
    }
  }
  return newForm;
};

interface IValidator {
  id?: string;
  validator: () => any;
}

interface IGetValidatorFunctionReturn {
  validators: Array<IValidator>;
}

export const getValidatorFunction = (
  error: string | any | Array<string | null>,
  keyName: string | Array<string>,
  id?: string
): IGetValidatorFunctionReturn | null => {
  const validators: Array<IValidator> = [];
  const errors: Array<string | any> = error && typeof error === 'string' ? [error] : error || null;
  const keyNames: Array<string> = typeof keyName === 'string' ? [keyName] : keyName;

  if (!errors || !errors.length) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-for-in-array
  for (const key in errors) {
    const iterator = errors[key];
    if (!iterator) {
      return null;
    }
    validators.push({
      id: id || `${key}`,
      validator: () => ({
        id: id || `${key}`,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        validator(_: any, value: string) {
          if (iterator && typeof iterator === 'string' && keyNames.find(keyNamesL => iterator.toLowerCase().indexOf(keyNamesL) !== -1)) {
            return Promise.reject(new Error(String(iterator)));
          } else {
            return Promise.resolve();
          }
        }
      })
    });
  }
  return { validators };
};
