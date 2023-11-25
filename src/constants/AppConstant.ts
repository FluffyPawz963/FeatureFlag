export const renderTreeData: RenderTree = {
    id: 'root',
    name: 'Parent',
    children: [
        {
            id: '0',
            name: 'onboard',
            children: [
                {
                    id: '10',
                    name: 'auth',
                    children: [
                        {
                            id: '12',
                            name: 'faceId',
                        },
                        {
                            id: '13',
                            name: 'touchId',
                        }
                    ]
                },
                {
                    id: '11',
                    name: 'notification',
                }
            ],
        },
        {
            id: '1',
            name: 'Loan',
            children: [
                {
                    id: '2',
                    name: 'installment',
                },
                {
                    id: '3',
                    name: 'bnpl',
                }
            ],
        },
        {
            id: '4',
            name: 'Payment',
            children: [
                {
                    id: '5',
                    name: 'paycard',
                },
                {
                    id: '6',
                    name: 'paybill',
                },
                {
                    id: '7',
                    name: 'scanpay',
                },
            ],
        },
    ],
};

export const envs = ['DEV1', 'DEV2', 'UAT1', 'UAT2', 'UAT3', 'UAT4', 'SIT', 'PAT', 'PROD'];
export const regions = ['SNG', 'HKD', 'LON', 'LUX', 'MAD', 'JIB', 'USA'];