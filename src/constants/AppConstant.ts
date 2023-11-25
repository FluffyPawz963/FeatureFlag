export const renderTreeData: RenderTree = {
    id: 'root',
    name: 'Parent',
    feature: true,
    children: [
        {
            id: '0',
            name: 'onboard',
            feature: false,
            children: [
                {
                    id: '10',
                    name: 'auth',
                    feature: false,
                    children: [
                        {
                            id: '12',
                            name: 'faceId',
                            feature: 'faceId'
                        },
                        {
                            id: '13',
                            name: 'touchId',
                            feature: 'touchId'
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
                    feature: 2
                },
                {
                    id: '3',
                    name: 'bnpl',
                    feature: 3
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