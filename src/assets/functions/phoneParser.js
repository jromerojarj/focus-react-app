export const phoneParser = (phone) => {
  phone = phone.split("@");
  const phoneNumber = phone[0];
  const identifier = phone[phone.length - 1];
  return {
    phoneNumber,
    identifier,
  };
};
