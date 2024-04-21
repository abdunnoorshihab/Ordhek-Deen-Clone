import { Dashboard } from "src/app/interfaces/common/dashboard.interface";

export const DASHBOARD_DB: Dashboard[] = [
    
    {
        _id: '1',
        icon:'',
        score: '4',
        title: 'Connections Available',
        subtitle:'1 connection is required to view contact details of each biodata',
        see_more:'Buy more cinnection',
    
        month:'',
        week:'',
        day:'',
    },

    {
        _id: '2',
        icon:'',
        score: '10',
        title: 'Number of Biodata Visits',
        subtitle:'Number of times your biodata has been visited',
        see_more:'',
    
        month:'42',
        week:'25',
        day:'36',
    },

    {
        _id: '3',
        icon:'',
        score: '2',
        title: 'Your biodata has been shortisted',
        subtitle:'Those number of people shortlisted your biodata',
        see_more:'',
    
        month:'',
        week:'',
        day:'',
    },
]