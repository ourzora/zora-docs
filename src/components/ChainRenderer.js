import { addresses } from "@zoralabs/protocol-deployments"
import * as chains from 'viem/chains';

const ContractType = {
    SYSTEM: 'System Contract',
    STATIC: 'Static Contract',
    USER: 'User Entry Main Contract',
    INFORMATION: 'Informational',
    DEPRECATED: 'Deprecated'
}

const ContractToPrettyName = {
    'CONTRACT_1155_IMPL': [ContractType.SYSTEM, 'Current 1155 Contract Implementation'],
    'CONTRACT_1155_IMPL_VERSION': [ContractType.INFORMATION, 'Current 1155 Implementation Version'],
    'FACTORY_IMPL': [ContractType.SYSTEM, 'Current 721 Factory Implementation'],
    'FACTORY_PROXY': [ContractType.USER, '721 Factory Proxy'],
    'FIXED_PRICE_SALE_STRATEGY': [ContractType.STATIC, 'Current Fixed Price Sale Strategy'],
    'MERKLE_MINT_SALE_STRATEGY': [ContractType.STATIC, 'Current Merkle Minting Sale Strategy'],
    'PREMINTER_IMPL': [ContractType.SYSTEM, 'Current Preminter Implementation'],
    'PREMINTER_PROXY': [ContractType.USER, 'Preminter Proxy'],
    'REDEEM_MINTER_FACTORY': [ContractType.DEPRECATED, 'Redeem Minter Factory'],
    'UPGRADE_GATE': [ContractType.SYSTEM, '1155 Upgrade Gate'],
    'ERC20_MINTER': [ContractType.USER, 'Current ERC-20 Minter Implementation']
};

function getChainData(chainId) {
    return chains.find((chain) => chain.id === chainId);
}

export const ChainRenderer = () => {
    const data = useMemo(() => {
        const itemSettings = [];
        for (const chain of Object.keys(addresses).sort()) {
            const chainInfo = addresses[chain];
            for (const [contract, data] of Object.entries(chainInfo)) {
                if (!itemSettings[chainInfo]) {
                    itemSettings[chainInfo] = []
                }
                itemSettings[chainInfo].push(
                    {contract, data}
                );
            }
        }
        return itemSettings;
    }, []);

    return (
        <>
            {Object.keys(data).map((chainId) => {
                <>
                <h3>{getChainData(chainId).name}</h3>
                <table>
                    <tr>
                        <td>
                            Contract Type
                        </td>
                        <td>
                            Contract Data
                        </td>
                    </tr>
                    {data[chainId].map((item) => {
                        <tr>
                            <td>{JSON.stringify(item)}</td>
                            <td>...</td>
                        </tr>
                    })}
                </table>
                </>
            })}
        </>
    )

}