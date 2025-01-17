

export const breadcrumbsMenu=[
    {
        label:'Categories',
        path:'/categories',
        children:[
            {
                path:':category'
            },
            {
                path:'/product/:id'
            }
        ]
    }
];

export const MENU:{
    title:string;
    path:string;
}[]
=[
    {
        title:'Men',
        path:'/categories/Men'
    },
    {
        title:'Women',
        path:'/categories/Women'
    },
    {
        title:'Electronics',
        path:'/categories/Electronics'
    }
]

