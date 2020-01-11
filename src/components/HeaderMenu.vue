<template>
    <ul class="main-header-menu">
        <li class="main-header-menu-item">
            <router-link to="/" class="main-header-menu-item-link" active-class="main-header-menu-item-link-active" exact>
                Find around me
            </router-link>
        </li>
        <li class="main-header-menu-item">
            <router-link to="/who-we-are" class="main-header-menu-item-link" active-class="main-header-menu-item-link-active" exact>
                Who we are
            </router-link>
        </li>
        <li class="main-header-menu-item">
            <router-link to="/joinus" class="main-header-menu-item-link" active-class="main-header-menu-item-link-active" exact>
                Join us
            </router-link>
        </li>
        <li class="main-header-menu-item">
            <router-link to="/contacts" class="main-header-menu-item-link" active-class="main-header-menu-item-link-active" exact>
                Contacts
            </router-link>
        </li>
    </ul>
</template>