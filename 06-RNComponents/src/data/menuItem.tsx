import { MenuItem } from "../models/MenuItem";

export const menuItems: MenuItem[] = [
    {name:'Animation 101', icon: 'cube-outline', component: 'Animation101Screen'},
    {name:'Animation 102', icon: 'albums-outline', component: 'Animation102Screen'},
    {name:'Switches', icon: 'toggle-outline', component: 'SwitchScreen'},
    {name:'Alert', icon: 'alert-circle-outline', component: 'AlertScreen'},
    {name:'TextInput', icon: 'document-text-outline', component: 'TextInputScreen'},
    {name:'PullToRefresh', icon: 'refresh-outline', component: 'PullToRefreshScreen'},
    {name:'SectionList', icon: 'list-outline', component: 'SectionListScreen'},
    {name:'Modal', icon: 'copy-outline', component: 'ModalScreen'},
    {name:'InfiniteScroll', icon: 'download-outline', component: 'InfiniteScrollScreen'},
    {name:'Slide', icon: 'flower-outline', component: 'SlideScreen'},
    {name:'ChangeTheme', icon: 'flask-outline', component: 'ChangeThemeScreen'},
]