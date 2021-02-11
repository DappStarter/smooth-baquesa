require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard raise magic concert grace only equal general'; 
let testAccounts = [
"0x75c279e6e0820061f323212a0a32681db9a2c5fba64c57628d694c6ff50d4dc4",
"0x001208a47ec6680e900fb831038b1a268f918bbd39c4115c1592bc8f87479b1b",
"0xa22bada4629cf617ede061c591e92ae6178e74366190956b57eeb3ef45edf41a",
"0x13a8ab89ae51a3c427b4aca1a98029ec97094bc9903aabf34cae4bb4c8b61508",
"0x9ccb430de1332cd4f0d1125e2fc68a1b45f016a724764babba9f1fcdb65edd3d",
"0x6d363b47ef8a69ec27870892f0379adb69b6faa9b19e8b2bb62fe8cf77edfe41",
"0x2822713ed6b3c91153a4b633fcf80b28922f63f5cca5cf88d090ecad4625e001",
"0xadd387c004eaff0ceb4bc3162049eb80ceabc5a942f72c0ac224f90d9866ae14",
"0xcbef8c7c2e1d23d316cf9fc6a40708213157e79b2476492fb5a6c5836109e605",
"0x566cc991fd66dcc4a4b0a9da6c8781605929fc570d0a23640ab9cef7360feb58"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
