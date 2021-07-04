# elavon 

Elavon A Payment Gateway

We can add card , Update Card , Get Card details , Delete Card

# Installation



Add Card

```

let environment =  "test" ||  "production"

 let userId = ""
 let merchantId = ""
 let pin = ""
 let cardNo = ""
 let expiryDate = 1223
 let cvv = 123
 let firstName = ""
 let lastName = ""
 let zip = "1231"
 let address = ""


let addCard = await elavon.addCard(userId, merchantId, pin, environment

, cardNo , expiryDate , cvv , firstName , lastName , zip, address 
)


//output

{
  txn: {
    ssl_merchant_initiated_unscheduled: 'N',
    ssl_last_name: 'Ali',
    ssl_company: '',
    ssl_phone: '',
    ssl_card_number: '41**********8882',
    ssl_result: 0,
    ssl_txn_id: '',
    ssl_avs_response: 'A',
    ssl_approval_code: '',
    ssl_email: '',
    ssl_avs_zip: 1231,
    ssl_txn_time: '07/04/2021 06:23:35 AM',
    ssl_description: '',
    ssl_exp_date: 1223,
    ssl_card_short_description: 'VISA',
    ssl_address2: '',
    ssl_token_response: 'SUCCESS',
    ssl_customer_code: '',
    ssl_country: '',
    ssl_card_type: 'CREDITCARD',
    ssl_transaction_type: 'GETTOKEN',
    ssl_salestax: '',
    ssl_avs_address: 'fbarea',
    ssl_customer_id: '',
    ssl_account_balance: 0,
    ssl_ps2000_data: '',
    ssl_state: '',
    ssl_ship_to_zip: '',
    ssl_city: '',
    ssl_result_message: 'APPROVAL',
    ssl_first_name: 'bab',
    ssl_invoice_number: '',
    ssl_ship_to_address1: '',
    ssl_cvv2_response: 'M',
    ssl_token: 1234567891012136,
    ,
    ssl_add_token_response: 'Card Updated'
  }
}



```

Payment

```



let payment = await elavon.pay(userId,merchantId,pin , amount, sslToken , environment)


//output

 {
  txn: {
    ssl_merchant_initiated_unscheduled: 'N',
    ssl_issuer_response: 0,
    ssl_last_name: 'Ali',
    ssl_company: '',
    ssl_phone: '',
    ssl_card_number: '41**********8882',
    ssl_departure_date: '',
    ssl_oar_data: 1.0012293407041027e+58,
    ssl_result: 0,
    ssl_txn_id: '',
    ssl_loyalty_program: '',
    ssl_avs_response: 'A',
    ssl_approval_code: 50060,
    ssl_account_status: '',
    ssl_email: '',
    ssl_amount: 795,
    ssl_avs_zip: 1231,
    ssl_txn_time: '07/04/2021 06:27:58 AM',
    ssl_description: '',
    ssl_exp_date: 1223,
    ssl_card_short_description: 'VISA',
    ssl_get_token: '',
    ssl_completion_date: '',
    ssl_address2: '',
    ssl_token_response: 'SUCCESS',
    ssl_customer_code: '',
    ssl_country: '',
    ssl_card_type: 'CREDITCARD',
    ssl_access_code: '',
    ssl_transaction_type: 'SALE',
    ssl_loyalty_account_balance: '',
    ssl_salestax: '',
    ssl_avs_address: 'fbarea',
    ssl_account_balance: 0,
    ssl_ps2000_data: '',
    ssl_state: '',
    ssl_ship_to_zip: '',
    ssl_city: '',
    ssl_result_message: 'APPROVAL',
    ssl_first_name: '',
    ssl_invoice_number: '',
    ssl_ship_to_address1: '',
    ssl_cvv2_response: '',
    ssl_tender_amount: '',
    ssl_token: 1234567891012136,
    ssl_partner_app_id: 1
  }
}

```

Get Card


```
let getCardDetails = await elavon.getCardDetails(userId,merchantId,pin , sslToken , environment)


//output 

{
  txn: {
    ssl_token: 1234567891012136,
    ssl_account_number: '4159********8882',
    ssl_exp_date: 1223,
    ssl_card_type: 'VISA',
    ssl_company: '',
    ssl_customer_id: '',
    ssl_first_name: '',
    ssl_last_name: '',
    ssl_avs_address: '',
    ssl_address2: '',
    ssl_avs_zip: 1231,
    ssl_city: '',
    ssl_state: '',
    ssl_country: '',
    ssl_phone: '',
    ssl_email: '',
    ssl_description: '',
    ssl_user_id: '',
    ssl_result: 0,
    ssl_token_response: 'SUCCESS',
    ssl_token_provider: 'P',
    ssl_token_format: 'Universal'
  }
}

```

Delete Card

```
let deleteCard = await elavon.deleteCard(userId,merchantId,pin , sslToken , environment)


//output 

{
  txn: {
    ssl_token: 1234567891012136,
    ssl_card_number: '**********8882',
    ssl_exp_date: 1223,
    ssl_card_type: 'VISA',
    ssl_token_response: 'SUCCESS',
    ssl_result_message: 'Approved',
    ssl_result: 0
  }
}

```