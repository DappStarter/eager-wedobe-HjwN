require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone student razor museum unable gown light army gesture'; 
let testAccounts = [
"0x28c778a19102a41932263679abff8915657667a1c79bfd86cf7ac1165f2274ae",
"0xfdd03a6eec33b8e6c1ba2dc2ddfc381aff010e56cc5d26cf923f2e85d7cdf824",
"0x97be83f8ea71f336e35bb628ce8a95b53eaa2627c3a1228f561bdefc3daae433",
"0x26a263c3ded534b625ddc6c4503ad8047f93ab057617b42771a2da9930768623",
"0x78a45b89dc7012bf63666b8ecad33c60b48882e7f2fca2180d550d3d1dff5bc8",
"0xea2f52608dc57a92e9d86ee085bd6d4c1f89a54b521ad466d74c2a2a9a94e0d7",
"0x400392ca8356470f9136a58d7fcdb3c6ed31c9e879d4b756fd671b550dc62fad",
"0xb1fec16556478739d5395f09ed3b7b17162c5e8ed68637c937d5105b3d74d03e",
"0xca222615f9d93192f55efdb4286fae7c6b6abeb326d40d6035373d8edd26a6b3",
"0x38b1a3c437fb3aa57abddc0622c4144ba71d97b218fc1b936660f4d24127d6a5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


