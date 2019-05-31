try {
    if (!window) {
        window = {};
    }
} catch {
    window = {};
}

window.manifest = [
    {
        "name": "CENNZNet",
        "path": "/CENNZNet",
        "home": {
            "format": "markdown",
            "title": "CENNZNet",
            "path": "/index.md"
        },
        "extra": [
            {
                "title": "CENNZNet Powered by Pl^g",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/cennznet.md"
            },
            {
                "title": "Address & Account Management",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/address.md"
            },
            {
                "title": "CENNZNet Protocols",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/protocols.md"
            },
            {
                "title": "Consensus",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/consensus.md"
            },
            {
                "title": "Transactions",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/transactions.md"
            },
            {
                "title": "Monetary Policy",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/monetarypolicy.md"
            },
            {
                "title": "Nodes",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/nodes.md"
            },
            {
                "title": "Staking",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/staking.md"
            },
            {
                "title": "Governance",
                "topic": "Overview",
                "format": "markdown",
                "path": "/overview/governance.md"
            },
            {
                "title": "CENNZNet Roadmap",
                "format": "markdown",
                "path": "/roadmap.md"
            },
            {
                "title": "Connecting to the Network",
                "topic": "CENNZNet Network",
                "format": "markdown",
                "path": "/cennznet_network/connect.md"
            },
            {
                "title": "Test Network",
                "topic": "CENNZNet Network",
                "format": "markdown",
                "path": "/cennznet_network/testnetwork.md"
            },
            {
                "title": "Setting up local testnet",
                "topic": "CENNZNet Network",
                "format": "markdown",
                "path": "/cennznet_network/localtestnet.md"
            },
            {
                "title": "CENNZNet SDK",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/sdk.md"
            },
            {
                "title": "Web UI",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/webui.md"
            },
            {
                "title": "Explorer",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/explorer.md"
            },
            {
                "title": "Node Software",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/nodesoftware.md"
            },
            {
                "title": "Node in the Cloud",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/nodeincloud.md"
            },
            {
                "title": "CLI",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/cli.md"
            },
            {
                "title": "Wallet",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/wallet.md"
            },
            {
                "title": "CENNZNet Tests",
                "topic": "Toolkits",
                "format": "markdown",
                "path": "/toolkit/tests.md"
            },
            {
                "title": "Spin To Win Contract",
                "topic": "Tutorials",
                "format": "markdown",
                "path": "/tutorials/spin2win.md"
            },
            {
                "title": "Prerequisites",
                "topic": "Tutorials",
                "format": "markdown",
                "path": "/tutorials/sc_getstarted.md"
            },
            {
                "title": "Sample dApps",
                "topic": "Tutorials",
                "format": "markdown",
                "path": "/tutorials/sample_dapps.md"
            },
            {
                "title": "Community",
                "format": "markdown",
                "path": "/community.md"
            },
        ],

        "changeLog": {
            "format": "markdown",
            "title": "Change Log",
            "path": "/CHANGELOG.md"
        }
    },
    {
        "name": "CENNZNet SDK",
        "path": "/api",
        "versions": ["latest"],
        "home": {
            "format": "markdown",
            "title": "Overview",
            "path": "/tutorials/0_Overview.md"
        },
        "extra": [
            {
                "title": "Installation",
                "format": "markdown",
                "path": "/tutorials/1_Installation.md"
            },
            {
                "topic": "Get Started",
                "title": "Connecting To Network",
                "format": "markdown",
                "path": "/get-started/1_Connecting_To_Network.md"
            },
            {
                "topic": "Get Started",
                "title": "Create Account",
                "format": "markdown",
                "path": "/get-started/2_Creating_Account.md"
            },
            {
                "topic": "Get Started",
                "title": "Submit Extrinsic",
                "format": "markdown",
                "path": "/get-started/3_Submit_Extrinsic_Query_Storage.md"
            },
            {
                "topic": "Chain",
                "title": "Rpc",
                "format": "markdown",
                "path": "/chain/METHODS_RPC.md"
            },
            {
                "topic": "Chain",
                "title": "Extrinsics",
                "format": "markdown",
                "path": "/chain/METHODS_EXTRINSICS.md"
            },
            {
                "topic": "Chain",
                "title": "Storage",
                "format": "markdown",
                "path": "/chain/METHODS_STORAGE.md"
            },
            {
                "topic": "Chain",
                "title": "Events",
                "format": "markdown",
                "path": "/chain/METHODS_EVENTS.md"
            },
            {
                "topic": "crml-cennzx-spot",
                "title": "Overview",
                "format": "markdown",
                "path": "/crml-cennzx-spot/tutorials/0_Get_Started.md"
            },
            {
                "topic": "crml-cennzx-spot",
                "title": "CHANGELOG",
                "format": "markdown",
                "path": "/crml-cennzx-spot/CHANGELOG.md"
            },
            {
                "topic": "crml-generic-asset",
                "title": "Overview",
                "format": "markdown",
                "path": "/crml-generic-asset/tutorials/0_Get_Started.md"
            },
            {
                "topic": "crml-generic-asset",
                "title": "CHANGELOG",
                "format": "markdown",
                "path": "/crml-generic-asset/CHANGELOG.md"
            },
            {
                "topic": "Wallet",
                "title": "Overview",
                "format": "markdown",
                "path": "/wallet/Overview.md"
            },
            {
                "topic": "Wallet",
                "title": "Usage",
                "format": "markdown",
                "path": "/wallet/Usage.md"
            }
        ],
        "api": {
            "type": "freeStyle",
            "path": "/api.json",
        },
        "changeLog": {
            "format": "markdown",
            "title": "Change Log",
            "path": "/CHANGELOG.md"
        }
    },
    {
        "name": "UNcover API",
        "path": "/UNcover",
        "home": {
            "format": "markdown",
            "title": "Overview",
            "path": "/UNcoverAPI.md"
        },
        "extra": [
            {
                "title": "Getting Started",
                "format": "markdown",
                "path": "/gettingstarted.md"
            },
            {
                "title": "API Endpoints",
                "format": "markdown",
                "path": "/APIendpoints.md"
            },
            {
                "title": "Field Reference",
                "format": "markdown",
                "path": "/Fieldreference.md"
            },
            {
                "title": "FAQ",
                "format": "markdown",
                "path": "/FAQ.md"
            }
        ]
    },
    {
        "name": "SingleSource",
        "path": "/singlesource",
        "home": {
            "format": "markdown",
            "title": "Getting Started",
            "path": "/gettingStarted.md"
        },
        "changeLog": {
            "format": "markdown",
            "title": "Change Log",
            "path": "/CHANGELOG.md"
        }
    }
];
