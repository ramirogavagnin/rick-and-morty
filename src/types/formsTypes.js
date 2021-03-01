const FirstNameTypes = {
  regex: /^[a-zA-Z\s]*$/,
  maxLength: 30,
  minLength: 2,
  autoCapitalize: 'words',
};

const LastNameTypes = {
  regex: /^[a-zA-Z\s]*$/,
  maxLength: 30,
  minLength: 2,
  autoCapitalize: 'words',
};

const PhoneTypes = {
  AR: {
    phone_type: 'AR',
    regex: /^[0-9]+$/,
    minLength: 8,
    maxLength: 12,
    keyboardType: 'number-pad',
  },
};

const IdTypes = {
  AR: {
    id_type: 'cuit',
    regex: /^[0-9]+$/,
    minLength: 10,
    maxLength: 11,
    keyboardType: 'number-pad',
  },
};

const EmailTypes = {
  autoCapitalize: 'none',
  keyboardType: 'email-address',
  maxLength: 50,
};

const PasswordTypes = {
  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
  minLength: 8,
  maxLength: 20,
  autoCapitalize: 'none',
  secureTextEntry: true,
};

export {
  FirstNameTypes,
  LastNameTypes,
  PhoneTypes,
  EmailTypes,
  PasswordTypes,
  IdTypes,
};
