export const connectWallet = async (walletType) => {
    if (!walletType) {
        return {}
    }
    if (!window.cardano) {
        return {}
    }
    const dapp = window.cardano[walletType]
    if (!dapp) {
        return {}
    }

    const wallet = await window.cardano[walletType]?.enable()

    if (!wallet) {
        return {}
    }

    const addresses = await wallet.getUsedAddresses()
    const [address] = addresses

    return { wallet, address }
}

export const connectWalletWithSignature = async (walletType) => {
    const { wallet, address } = await connectWallet(walletType)

    const { signature } = await wallet.signData(address, strToHex(address))

    return { wallet, address, signature }
}
