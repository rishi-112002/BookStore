import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LibraryScreen from "./LibraryScreen";
import AddCategory from "./AddCategory";
import CategoryTypeScreen from "../../flatListComponent/CategoryTypeScreen";
import AddPost from "../home/AddPost";
import PostEditScreen from "./PostEditScreen";
import NewPassword from "../../authenticationUi/NewPassword";
import CommentScreen from "../../flatListComponent/CommentScreen";
import CommentEditScreen from "../home/CommentEditScreen";
import HomeScreen from "../home/HomeScreen";
import ProfileScreen from "../home/ProfileScreen";
import SearchScreen from "../searchDetails/SearchScreen";
import LikedPostScreen from "../userDetails/LikedPostScreen";
import PrivacyPolicy from "../userDetails/PrivacyPolicy";
import TermsOfUsageScreen from "../userDetails/TermsOfUsage";
import UserProfileScreen from "../userDetails/UserProfileScreen";
import UserScreen from "../userDetails/UserScreen";

const Stack = createNativeStackNavigator();
function LibraryNavigation() {
    return (
        <Stack.Navigator initialRouteName="LibraryS">
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LibraryS" component={LibraryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AddCategory" component={AddCategory} options={{ headerShown: false }} />
            <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false }} />
            <Stack.Screen name="CategoryTypeScreens" component={CategoryTypeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Homes" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PostEditScreen" component={PostEditScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CommentScreen" component={CommentScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CommentEditScreen" component={CommentEditScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LikedPostScreen" component={LikedPostScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={NewPassword} options={{ headerShown: false }} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ headerShown: false }} />
            <Stack.Screen name="TermsOfUsage" component={TermsOfUsageScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default LibraryNavigation;