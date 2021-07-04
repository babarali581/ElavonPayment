const axios = require("axios").default;
var parser = require("fast-xml-parser");

module.exports = {
  async addCard(
    user,
    merchantId,
    pin,
    mode,
    card,
    expDate,
    cvv,
    firstName,
    lastName,
    zip,
    address
  ) {
    try {
      let isTestMode;
      let url;
      if (mode === "test") {
        isTestMode = "Y";
        url = `https://api.demo.convergepay.com/VirtualMerchantDemo/processxml.do`;
      } else if (mode === "production") {
        isTestMode = "N";
        url = "https://api.convergepay.com/VirtualMerchant/processxml.do";
      } else {
        throw "mode should be test OR production ";
      }

      let xmldata = `xmldata=<txn>
    <ssl_merchant_id>${merchantId}</ssl_merchant_id>
    <ssl_user_id>${user}</ssl_user_id>
    <ssl_pin>${pin}</ssl_pin>
    <ssl_transaction_type>ccgettoken</ssl_transaction_type>
    <ssl_add_token>Y</ssl_add_token>
    <ssl_verify>Y</ssl_verify>
    <ssl_test_mode>${isTestMode}</ssl_test_mode>
    <ssl_show_form>false</ssl_show_form>
    <ssl_result_format>HTML</ssl_result_format>
    <ssl_cvv2cvc2_indicator>1</ssl_cvv2cvc2_indicator>
    <ssl_card_number>${card}</ssl_card_number>
    <ssl_exp_date>${expDate} </ssl_exp_date>
    <ssl_cvv2cvc2>${cvv}</ssl_cvv2cvc2>
    <ssl_first_name>${firstName}</ssl_first_name>
    <ssl_last_name> ${lastName}</ssl_last_name>
    <ssl_avs_zip>${zip}</ssl_avs_zip>
    <ssl_avs_address>${address}</ssl_avs_address>
    </txn>`;
      let config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      let sessionToken = await axios.post(url, xmldata, config);
      const result = parser.parse(sessionToken.data, {});
      return result;
    } catch (error) {
      throw error;
    }
  },

  async pay(user, merchantId, pin, amount, sslToken, mode) {
    let url;
    if (mode === "test") {
      isTestMode = "Y";
      url = `https://api.demo.convergepay.com/VirtualMerchantDemo/processxml.do`;
    } else if (mode === "production") {
      isTestMode = "N";
      url = "https://api.convergepay.com/VirtualMerchant/processxml.do";
    } else {
      throw "mode should be test OR production ";
    }
    try {
      let xmldata = `xmldata=<txn>
      <ssl_merchant_id>${merchantId}</ssl_merchant_id>
      <ssl_user_id>${user}</ssl_user_id>
      <ssl_pin>${pin}</ssl_pin>
      <ssl_transaction_type>ccsale</ssl_transaction_type>
      <ssl_amount>${amount}</ssl_amount>
      <ssl_token>${sslToken}</ssl_token>
   </txn>`;
      let config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      let sessionToken = await axios.post(url, xmldata, config);
      const result = parser.parse(sessionToken.data, {});
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getCardDetails(user, merchantId, pin, sslToken , mode) {
    let url;
    if (mode === "test") {
      isTestMode = "Y";
      url = `https://api.demo.convergepay.com/VirtualMerchantDemo/processxml.do`;
    } else if (mode === "production") {
      isTestMode = "N";
      url = "https://api.convergepay.com/VirtualMerchant/processxml.do";
    } else {
      throw "mode should be test OR production ";
    }

    let xmldata = `xmldata=<txn>
<ssl_merchant_id>${merchantId}</ssl_merchant_id>
<ssl_user_id>${user}</ssl_user_id>
<ssl_pin>${pin}</ssl_pin>
<ssl_transaction_type>ccquerytoken</ssl_transaction_type>
<ssl_test_mode>Y</ssl_test_mode>
<ssl_show_form>false</ssl_show_form>;
<ssl_result_format>HTML</ssl_result_format>
<ssl_entry_mode>01</ssl_entry_mode>
<ssl_get_token>01</ssl_get_token>
<ssl_token>${sslToken}</ssl_token>
</txn>`;

    let config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    };
    let sessionToken = await axios.post(url, xmldata, config);

    const result = parser.parse(sessionToken.data, {});
    return result;
  },

  async deleteCard(user, merchantId, pin, sslToken , mode) {
    try {
      let url;
      if (mode === "test") {
        isTestMode = "Y";
        url = `https://api.demo.convergepay.com/VirtualMerchantDemo/processxml.do`;
      } else if (mode === "production") {
        isTestMode = "N";
        url = "https://api.convergepay.com/VirtualMerchant/processxml.do";
      } else {
        throw "mode should be test OR production ";
      }
      let xmldata = `xmldata=<txn>
      <ssl_merchant_id>${merchantId}</ssl_merchant_id>
      <ssl_user_id>${user}</ssl_user_id>
      <ssl_pin>${pin}</ssl_pin>
      <ssl_transaction_type>ccdeletetoken</ssl_transaction_type> 
      <ssl_token>${sslToken}</ssl_token>
      </txn>`;
      let config = {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      let sessionToken = await axios.post(url, xmldata, config);

      const result = parser.parse(sessionToken.data, {});
      return result;
    } catch (err) {
      throw err;
    }
  }
};
