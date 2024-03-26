// Toggle Bitcoin Code Overlay
document.getElementById('seeBtcCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('codeOverlay');
  overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
});

// Toggle Ethereum Code Overlay
document.getElementById('seeEthCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('otherCodeOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
});

// Toggle BNB Code Overlay
document.getElementById('seeBnbCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('other3CodeOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
});
// Solana
document.getElementById('seeSolCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('solCodeOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
});

// XRP
document.getElementById('seeXrpCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('xrpCodeOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
});

// Polkadot
document.getElementById('seeDotCodeButton').addEventListener('click', function() {
  var overlay = document.getElementById('dotCodeOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('copyButton').addEventListener('click', function() {
  var codeToCopy = document.getElementById('ethereumCode').innerText; // Get the code text
  navigator.clipboard.writeText(codeToCopy).then(function() {
    console.log('Code copied to clipboard successfully!');
    // Optionally, indicate to the user that the code was copied successfully
  }, function(err) {
    console.error('Error in copying text: ', err);
  });
});
document.getElementById('copyButton2').addEventListener('click', function() {
  var codeToCopy = document.getElementById('btcCode').innerText; // Get the code text
  navigator.clipboard.writeText(codeToCopy).then(function() {
    console.log('Code copied to clipboard successfully!');
    // Optionally, indicate to the user that the code was copied successfully
  }, function(err) {
    console.error('Error in copying text: ', err);
  });
});
document.getElementById('copyButton3').addEventListener('click', function() {
  var codeToCopy = document.getElementById('bnbCode').innerText; // Get the code text
  navigator.clipboard.writeText(codeToCopy).then(function() {
    console.log('Text copied to clipboard');
  }).catch(function(error) {
    console.error('Error copying text: ', error);
  });
});
// Function to copy text from an element to the clipboard
function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

// Event listener for the "Copy SOL Address" button
document.getElementById('copySolBtn').addEventListener('click', function() {
  var solAddress = document.getElementById('solanaCode').innerText;
  copyTextToClipboard(solAddress);
});

// Event listener for the "Copy XRP Address" button
document.getElementById('copyXrpBtn').addEventListener('click', function() {
  var xrpAddress = document.getElementById('xrpCode').innerText;
  copyTextToClipboard(xrpAddress);
});

// Event listener for the "Copy DOT Address" button
document.getElementById('copyDotBtn').addEventListener('click', function() {
  var dotAddress = document.getElementById('dotCode').innerText;
  copyTextToClipboard(dotAddress);
});