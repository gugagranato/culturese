/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "~/pages/Main";
import Books from "~/pages/Books";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Books
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
