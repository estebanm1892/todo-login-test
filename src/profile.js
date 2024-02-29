import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from './logout';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <ul ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="mr-6">
                <h2>Loading...</h2>
            </li>
        </ul>;
    }
    return (
        isAuthenticated && (
            <ul ul class="flex flex-col mb-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                <li class="flex-4">
                    <img className="image-login" src={user.picture} alt={user.name} />
                </li>
                <li class="flex-4">
                    <h2>{user.name}</h2>
                </li>
                <li class="flex-4">
                    <p>{user.email}</p>
                </li>
                <li class="flex-4">
                    <LogoutButton />
                </li>
            </ul>
        )
    );
}