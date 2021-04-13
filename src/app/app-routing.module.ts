import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
  
    
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./feeds/feeds.module').then( m => m.FeedsPageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'foodwaste',
    loadChildren: () => import('./pages/foodwaste/foodwaste.module').then( m => m.FoodwastePageModule)
  },
  {
    path: 'textiles',
    loadChildren: () => import('./pages/textiles/textiles.module').then( m => m.TextilesPageModule)
  },
  {
    path: 'large-items',
    loadChildren: () => import('./pages/large-items/large-items.module').then( m => m.LargeItemsPageModule)
  },
  {
    path: 'electronics',
    loadChildren: () => import('./pages/electronics/electronics.module').then( m => m.ElectronicsPageModule)
  },
  {
    path: 'general-plastic',
    loadChildren: () => import('./pages/general-plastic/general-plastic.module').then( m => m.GeneralPlasticPageModule)
  },
  {
    path: 'batteries',
    loadChildren: () => import('./pages/batteries/batteries.module').then( m => m.BatteriesPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
