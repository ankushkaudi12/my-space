import { Routes } from '@angular/router';
// Make sure to import your Home component, adjusting the path as necessary
import { Instructions } from './components/instructions/instructions';
import { Notes} from './components/notes/notes';
import { Schedule } from './components/schedule/schedule';

export const routes: Routes = [
    {
        path: '',
        component: Schedule,
        title: 'Home'
    },
    {
        path: "notes",
        component: Notes,
        title: 'Notes'
    },
    {
        path: "instructions",
        component: Instructions,
        title: 'Instructions'
    }
];
