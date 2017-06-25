debugger;
var deals = document.getElementsByClassName('addDeal');
console.log('BOFADealer: Found ' + deals.length + ' new deals.');

if(deals.length > 0)
{
    for(i = 0 ; i < deals.length; i++)
    {
        var deal = deals[i];
        deal.click();
    }
    alert('Added ' + deals.length + ' new deals.');
}

console.log('BOFADealer: Done adding ' + deals.length + ' deals.');
