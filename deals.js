function loggerino(msg)
{
  console.log("BOFADealClicker: " + msg);
}

var counterMsg = document.createElement('strong');
var addedMsg = document.createElement('span');
var alertPopup = document.createElement('div');

function closePopup()
{
  loggerino(' Removing popup.');
  alertPopup.style.opacity = "0";
  setTimeout(function(){ alertPopup.style.display = "none"; }, 500);
  document.body.removeChild(alertPopup);
}

function displayAlert(dealCount)
{
  alertPopup.className = 'alert success';

  var closeBtnSpan = document.createElement('span');
  closeBtnSpan.innerHTML='&times;'
  closeBtnSpan.className='closebtn';
  closeBtnSpan.onclick = function() { closePopup(); }
  alertPopup.appendChild(closeBtnSpan);

  var alertMsgDiv = document.createElement('div');
  alertMsgDiv.className='alert-msg';
  addedMsg.textContent='Adding 0 of '+dealCount+ ' new deals.';
  alertMsgDiv.appendChild(addedMsg);
  alertPopup.appendChild(alertMsgDiv);

  document.body.append(alertPopup);
}

function updateAlert(currCount,dealCount)
{
  addedMsg.textContent='Adding '+ currCount+' of '+dealCount + ' new deals.';
}

loggerino('Loaded.');

var deals = document.getElementsByClassName('add-deal');
loggerino('Found ' + deals.length + ' new deals.');

if(deals.length > 0)
{
  displayAlert(deals.length);

  var count = 0;
  var interval = setInterval(
    function()
    {
      if(count < deals.length)
      {
        var deal = deals[count];
        deal.click();
        count++;
        updateAlert(count, deals.length);
      }
      else
      {
        clearInterval(interval);
        addedMsg.textContent = deals.length + ' deals successfully added.';

        // close after 3 secs
        setTimeout( function() { closePopup() }, 3000);
      }
    }, 400 );
}

loggerino('Done adding ' + deals.length + ' deals.');
