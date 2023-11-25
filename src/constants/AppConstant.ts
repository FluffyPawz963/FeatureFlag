export const renderTreeData: RenderTree = {
    id: 'root',
    name: 'Parent',
    feature: true,
    children: [
        {
            id: '0',
            name: 'onboard',
            feature: true,
            children: [
                {
                    id: '10',
                    name: 'auth',
                    feature: false,
                    children: [
                        {
                            id: '12',
                            name: 'faceId',
                            feature: true
                        },
                        {
                            id: '13',
                            name: 'touchId',
                            feature: true
                        }
                    ]
                },
                {
                    id: '11',
                    name: 'notification',
                    feature: true
                }
            ],
        },
        {
            id: '1',
            name: 'Loan',
            feature: false,
            children: [
                {
                    id: '2',
                    name: 'installment',
                    feature: true
                },
                {
                    id: '3',
                    name: 'bnpl',
                    feature: true
                }
            ],
        },
        {
            id: '4',
            name: 'Payment',
            feature: true,
            children: [
                {
                    id: '5',
                    name: 'paycard',
                    feature: true
                },
                {
                    id: '6',
                    name: 'paybill',
                    feature: true
                },
                {
                    id: '7',
                    name: 'scanpay',
                    feature: true
                },
            ],
        },
    ],
};

export const envs = ['DEV1', 'DEV2', 'UAT1', 'UAT2', 'UAT3', 'UAT4', 'SIT', 'PAT', 'PROD'];
export const regions = ['SNG', 'HKD', 'LON', 'LUX', 'MAD', 'JIB', 'USA'];