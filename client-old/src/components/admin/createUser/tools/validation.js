/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
export const validateName = (value, isSurname = false) => {
  // Check if the value is not undefined, null or empty
  console.log(isSurname);
  if (!value) {
    return {
      message: `${isSurname ? 'Призвіще' : "Ім'я"} не може бути порожнім`,
      status: false,
    };
  }

  // Check if the value is alphanumeric and contains only letters, digits, and underscores
  if (!/^[a-zA-Z0-9_\u0400-\u04FF]+$/u.test(value)) {
    return {
      message: "Ім'я може містити тільки літери, цифри та підкреслення",
      status: false,
    };
  }

  // Check if the value does not start or end with an underscore
  if (/^_|_$/.test(value)) {
    return {
      message: "Ім'я не може починатися або закінчуватися підкресленням",
      status: false,
    };
  }

  // Check if the value has at least 4 characters
  if (value.length < 4) {
    return {
      message: "Ім'я повинно містити не менше 4 символів",
      status: false,
    };
  }

  // Check if the value has no more than 20 characters
  if (value.length > 20) {
    return {
      message: "Ім'я повинно містити не більше 20 символів",
      status: false,
    };
  }

  // If all the above conditions are passed, then the value is valid
  return {
    status: true,
  };
};

export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$/;

  if (!phoneNumber) {
    return {
      message: 'Номер телефону введено некоректно',
      status: false,
    };
  }

  return {
    status: true,
    phone: phoneNumberRegex.test(phoneNumber),
  };
};

export const validateUserName = (value) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

  if (!value) {
    return {
      message: 'Логін не може бути порожнім',
      status: false,
    };
  }

  if (!usernameRegex.test(value)) {
    return {
      message: 'Логін повинен містити від 3 до 16 символів',
      status: false,
    };
  }

  return {
    status: true,
  };
};

export const validatePassword = (value) => {
  const passwordRegex = /^.{6,}$/;

  if (!value) {
    return {
      message: 'Пароль не може бути порожнім',
      status: false,
    };
  }

  if (!passwordRegex.test(value)) {
    return {
      message: 'Пароль повинен містити не менше 6 символів',
      status: false,
    };
  }

  return {
    status: true,
  };
};

export const validateEmail = (value) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!value) {
    return {
      message: 'Email не може бути порожнім',
      status: false,
    };
  }

  if (!emailRegex.test(value)) {
    return {
      message: 'Email введено некоректно',
      status: false,
    };
  }

  return {
    status: true,
  };
};
