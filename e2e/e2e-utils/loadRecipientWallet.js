// loads the 'recipient' from zingolib mobileclient regtest scenarios
// requires e2e test to be run by cargo test runner
// see `rust/android/test/e2e_tests.rs`
let loadRecipientWallet = async () => {
  // switch to advanced mode
  await element(by.id('header.drawmenu')).tap();
  await element(by.id('menu.settings')).tap();
  await element(by.id('settings.mode-advanced')).tap();
  await element(by.id('settings.button.save')).tap();

  // connect to regtest network
  await element(by.id('header.drawmenu')).tap();
  await element(by.id('menu.settings')).tap();
  await element(by.id('settings.scrollView')).scroll(700, 'down');
  await element(by.id('settings.customServer')).tap();
  await element(by.id("settings.customServerChain.regtest")).tap();
  await element(by.id("settings.customServerField")).replaceText('http://10.0.2.2:20000');
  await element(by.id('settings.button.save')).tap();
  await element(by.id('seed.button.OK')).tap();
  await element(by.text('CONFIRM')).tap();

  // restore from seed
  await element(by.id("loadingapp.restorewalletseed")).tap();
  await element(by.id("seed.seedinput")).replaceText(
    'hospital museum valve antique skate museum unfold vocal weird milk scale social vessel identify crowd hospital control album rib bulb path oven civil tank'
  );
  await element(by.id("seed.birthdayinput")).replaceText('3');
  await element(by.id('seed.button.OK')).tap();
}

export { loadRecipientWallet };