import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile75669Navigator from '../features/UserProfile75669/navigator';
import Tutorial75668Navigator from '../features/Tutorial75668/navigator';
import NotificationList75640Navigator from '../features/NotificationList75640/navigator';
import Settings75639Navigator from '../features/Settings75639/navigator';
import Settings75631Navigator from '../features/Settings75631/navigator';
import UserProfile75629Navigator from '../features/UserProfile75629/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile75669: { screen: UserProfile75669Navigator },
Tutorial75668: { screen: Tutorial75668Navigator },
NotificationList75640: { screen: NotificationList75640Navigator },
Settings75639: { screen: Settings75639Navigator },
Settings75631: { screen: Settings75631Navigator },
UserProfile75629: { screen: UserProfile75629Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
